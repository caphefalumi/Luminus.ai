import { Controller, Get, Req, Res } from '@nestjs/common';
import type { Response, Request } from 'express';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';

@Controller('api/auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private configService: ConfigService,
  ) {}

  // Redirect to Google OAuth login page (just for UI, we won't use the token)
  @Get('google')
  async googleAuth(@Res() res: Response) {
    const clientId = this.configService.get<string>('GOOGLE_CLIENT_ID');
    const callbackUrl = this.configService.get<string>('GOOGLE_CALLBACK_URL') || 'http://localhost:3002/api/auth/google/callback';
    
    // Redirect to Google's OAuth page
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
      `client_id=${clientId}` +
      `&redirect_uri=${encodeURIComponent(callbackUrl)}` +
      `&response_type=code` +
      `&scope=${encodeURIComponent('email profile')}` +
      `&prompt=select_account`;
    
    res.redirect(googleAuthUrl);
  }

  // Google OAuth callback - ignore Google's response, just login as mock user
  @Get('google/callback')
  async googleCallback(@Res() res: Response) {
    // Ignore the authorization code from Google completely
    // Just create/login the mock user
    const mockGoogleUser = {
      googleId: 'mock-google-id-123',
      email: 'dangduytoan13l@gmail.com',
      name: 'Dang Duy Toan',
      picture: 'https://i.pravatar.cc/150?u=dangduytoan13l',
      accessToken: 'mock-access-token',
      refreshToken: 'mock-refresh-token',
    };

    const user = await this.authService.validateGoogleUser(mockGoogleUser);
    const token = this.authService.generateToken(user);
    
    const frontendUrl = this.configService.get<string>('FRONTEND_URL') || 'http://localhost:3000';
    res.redirect(`${frontendUrl}/auth/callback?token=${token}`);
  }

  // Get current user profile
  @Get('me')
  async getProfile(@Req() req: Request) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return { error: 'No token provided' };
    }

    const token = authHeader.split(' ')[1];
    const user = await this.authService.getUserByToken(token);
    
    if (!user) {
      return { error: 'User not found' };
    }
    
    return {
      id: user._id,
      email: user.email,
      name: user.name,
      picture: user.picture,
      companyName: user.companyName,
      role: user.role,
    };
  }

  // Logout
  @Get('logout')
  async logout(@Res() res: Response) {
    const frontendUrl = this.configService.get<string>('FRONTEND_URL') || 'http://localhost:3000';
    res.redirect(`${frontendUrl}/login`);
  }
}

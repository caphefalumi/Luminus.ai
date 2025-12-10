"use client";

import { motion } from "framer-motion";
import { Brain, Users, Activity, Zap, ArrowRight, Shield, BarChart3 } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Advanced machine learning algorithms analyze workforce patterns and predict trends.",
  },
  {
    icon: Users,
    title: "Network Visualization",
    description: "Interactive galaxy view showing team relationships and collaboration patterns.",
  },
  {
    icon: Activity,
    title: "Burnout Detection",
    description: "Early warning system to identify at-risk employees before it's too late.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Comprehensive metrics and leaderboards to track team performance.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Enterprise-grade security with Google OAuth authentication.",
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description: "Live data synchronization keeps your insights always up-to-date.",
  },
];

export default function LandingPage() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, isLoading, router]);

  const handleGetStarted = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg overflow-hidden bg-transparent flex items-center justify-center">
            <img src="/favicon.png" alt="Luminus.ai" className="w-full h-full object-cover" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
            Luminus.ai
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
          >
            Sign In
          </Link>
          <motion.button
            onClick={handleGetStarted}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-teal-500 text-white font-medium hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">AI-Powered</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">
              Workforce Intelligence
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Transform your HR analytics with cutting-edge AI. Visualize team dynamics,
            predict burnout, and discover hidden talent in your organization.
          </p>
          <div className="flex items-center justify-center gap-4">
            <motion.button
              onClick={handleGetStarted}
              className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-teal-500 text-white font-semibold text-lg hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <Link
              href="/login"
              className="flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold text-lg hover:bg-white/5 transition-colors"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        {/* Preview Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 relative"
        >
          <div
            className="aspect-video rounded-2xl border border-white/10 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(17, 24, 39, 0.9), rgba(31, 41, 55, 0.9))",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/30 to-teal-500/30 flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-10 h-10 text-purple-400" />
                </div>
                <p className="text-gray-400">Interactive Dashboard Preview</p>
              </div>
            </div>
            {/* Floating Elements */}
            <motion.div
              className="absolute top-10 left-10 px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-purple-400 text-sm">AI Insights Ready</span>
            </motion.div>
            <motion.div
              className="absolute bottom-10 right-10 px-4 py-2 rounded-lg bg-teal-500/20 border border-teal-500/30"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <span className="text-teal-400 text-sm">12 Employees Analyzed</span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything you need to understand your workforce
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Powerful features designed for modern HR teams
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-teal-500/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 rounded-3xl border border-purple-500/30 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(20, 184, 166, 0.1))",
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to transform your HR analytics?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Join forward-thinking companies using Luminus.ai to build better teams.
          </p>
          <motion.button
            onClick={handleGetStarted}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-teal-500 text-white font-semibold text-lg hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started for Free
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/favicon.png" alt="Luminus.ai" className="w-5 h-5 object-cover rounded-sm" />
            <span className="text-gray-400 text-sm">Luminus.ai</span>
          </div>
          <p className="text-gray-500 text-sm">
            2024 Luminus. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

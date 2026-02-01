import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Cpu, MessageSquare, ChevronRight } from "lucide-react";
import Navbar from "./Navigation/Navbar";
import Footer from "./Navigation/Footer";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen  text-slate-900 font-sans selection:bg-indigo-100 px-6 lg:px-8">
      <Navbar />

      {/* Decorative Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-indigo-50/50 blur-[120px]" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] rounded-full bg-blue-50/50 blur-[100px]" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto">
        {/* --- HERO SECTION --- */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-semibold mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Now open for Beta: V2.0 is live
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-950 mb-6 max-w-4xl">
            Your next dev{" "}
            <span className="font-serif italic font-medium bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              partner
            </span>{" "}
            is one match away
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
            DevTinder is a developer-first platform to discover like-minded
            developers and start real-time conversations to build together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Button
              size="xl"
              className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-8 h-12 text-base shadow-lg shadow-indigo-200/50"
              onClick={() => navigate("/signup")}
            >
              Get Started
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* --- FEATURES SECTION --- */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Engineered for Collaboration
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Skip the networking events and awkward LinkedIn cold-messages.
              Build with people who actually speak your language.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="rounded-3xl border-slate-200 hover:border-indigo-200 transition-colors bg-white/50 group">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  Skill-based Matching
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Our algorithm analyzes your GitHub repos and tech stack to
                  find developers who complement your existing skillset
                  perfectly.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="rounded-3xl border-slate-200 hover:border-blue-200 transition-colors bg-white/50 group">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  Real Collaboration
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Integrated messaging and voice rooms designed for engineers.
                  Share snippets, discuss architecture, and pair program in
                  real-time.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="rounded-3xl border-slate-200 hover:border-teal-200 transition-colors bg-white/50 group">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
                  <Code2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  Build & Ship Together
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Find a side-project partner or a full-time co-founder. Use our
                  project templates to go from "hello world" to "deployed" in
                  days.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* --- CTA BOTTOM --- */}
        <section className="py-20 md:py-32">
          <div className="rounded-[3rem] bg-slate-950 p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent)] pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
              Ready to build the future?
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto relative z-10">
              Join 10,000+ developers finding their technical partners on
              DevTinder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Button
                size="lg"
                className="bg-indigo-500 text-white hover:bg-indigo-400 rounded-full px-10 h-14 text-lg font-bold"
              >
                Join DevTinder Now
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

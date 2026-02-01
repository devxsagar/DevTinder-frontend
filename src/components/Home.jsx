import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Code2, Users, Sparkles, Zap } from "lucide-react";
import Navbar from "./Navigation/Navbar";
import Footer from "./Navigation/Footer";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg- text-foreground">
        <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* subtle background effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/40 blur-3xl" />
          <div className="absolute top-1/3 right-0 h-72 w-72 rounded-full bg-secondary blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-28 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1 text-sm text-muted-foreground">
              <Zap className="h-4 w-4" /> Built for developers
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
              Find developers you’ll actually love building with
            </h1>
            <p className="text-lg text-muted-foreground">
              DevTinder is a modern matching platform for developers to connect,
              collaborate, and ship real-world projects together.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button size="lg" className="rounded-xl px-8" onClick={() => navigate("/signup")} >
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl px-8">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Why developers choose DevTinder
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            No noise. No spam. Just meaningful connections based on skills,
            interests, and ambition.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Code2 className="h-6 w-6" />}
            title="Skill-first matching"
            description="Match with developers based on tech stack, experience, and goals — not random profiles."
          />
          <FeatureCard
            icon={<Users className="h-6 w-6" />}
            title="Serious collaborators"
            description="Find teammates for startups, hackathons, open source, or long-term projects."
          />
          <FeatureCard
            icon={<Sparkles className="h-6 w-6" />}
            title="Built to ship"
            description="Turn matches into shipped products, portfolios, and real impact."
          />
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="border-t bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <Card className="rounded-3xl">
            <CardContent className="flex flex-col items-center gap-6 p-10 text-center sm:p-14">
              <h3 className="text-3xl font-bold">
                Your next dev partner is one match away
              </h3>
              <p className="max-w-xl text-muted-foreground">
                Stop building alone. Join DevTinder and collaborate with
                developers who match your energy and vision.
              </p>
              <Button size="lg" className="rounded-xl px-10">
                Create your profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

function FeatureCard({ icon, title, description }) {
return (
<Card className="group rounded-2xl transition hover:-translate-y-1 hover:shadow-lg">
<CardContent className="space-y-4 p-8">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary transition group-hover:scale-110">
{icon}
</div>
<h4 className="text-xl font-semibold">{title}</h4>
<p className="text-sm text-muted-foreground">{description}</p>
</CardContent>
</Card>
);
}

export default Home;

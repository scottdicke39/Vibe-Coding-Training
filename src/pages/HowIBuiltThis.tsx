import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { setModuleComplete } from "@/lib/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const steps = [
  {
    emoji: "📋",
    title: "1. Gathered Context",
    description:
      "I started by giving Lovable a GitHub repo with content data, a Notion planning doc, and a CSV of hack day participants. The more context you give, the better the output.",
  },
  {
    emoji: "🗣️",
    title: "2. Described the Vision",
    description:
      "I described what I wanted in plain English: 'Build a fun, gamified training module that teaches people how to use AI tools — and make it meta by showing how I built it with AI.' Vibe Coding in action.",
  },
  {
    emoji: "🏗️",
    title: "3. Lovable Generated Everything",
    description:
      "Lovable created the entire app — React components, routing, content pages, quiz logic, progress tracking, badge system — all from that description plus the context docs.",
  },
  {
    emoji: "🔄",
    title: "4. Iterated via Chat",
    description:
      "I refined through conversation: 'Make it more playful,' 'Add a prompt playground,' 'Include tool color coding.' Each message improved the app in real-time.",
  },
  {
    emoji: "🚀",
    title: "5. Published in Minutes",
    description:
      "The whole thing — from first message to live app — took minutes, not days. No designers, no engineers, no sprint planning. Just me and an AI, shipping.",
  },
];

const HowIBuiltThis = () => {
  useEffect(() => {
    setModuleComplete("how-i-built-this");
  }, []);

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto space-y-8">
      <Button variant="ghost" size="sm" asChild>
        <Link to="/"><ArrowLeft className="h-4 w-4 mr-1" /> Home</Link>
      </Button>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4">
        <h1 className="font-display text-3xl md:text-4xl font-bold">
          🔮 How I Built This
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          This app is the ultimate meta demo: a training module about AI tools,
          <strong className="text-foreground"> built entirely by an AI tool</strong>. Here's how it happened.
        </p>
      </motion.div>

      <div className="space-y-4">
        {steps.map((step, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardContent className="p-6 flex items-start gap-4">
                <span className="text-3xl">{step.emoji}</span>
                <div>
                  <h3 className="font-display font-bold text-lg">{step.title}</h3>
                  <p className="text-muted-foreground mt-1">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card className="border-2 border-primary/30 bg-primary/5">
        <CardContent className="p-6 space-y-4">
          <h2 className="font-display text-xl font-bold">⚡ Why Lovable Cloud Changes the Game</h2>
          <p className="text-muted-foreground">
            Right now, this app uses <code className="bg-muted px-1 rounded text-sm">localStorage</code> — your progress
            disappears if you clear your browser. That's fine for a demo, but for <em>real</em> tools that last,
            you need a backend.
          </p>
          <p className="text-muted-foreground">
            <strong className="text-foreground">Lovable Cloud</strong> is the built-in backend that Lovable provisions automatically.
            It gives you:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>✅ <strong>Database</strong> — Progress and badges persist across devices</li>
            <li>✅ <strong>Authentication</strong> — Sign in with email, Google, or Okta SSO</li>
            <li>✅ <strong>Real-time sync</strong> — Participant data stays up to date</li>
            <li>✅ <strong>Row-Level Security</strong> — Each user only sees their own data</li>
            <li>✅ <strong>Edge Functions</strong> — Server-side logic for leaderboards and analytics</li>
          </ul>
          <p className="text-muted-foreground">
            The difference between a one-time hack and a lasting tool? <strong className="text-primary">A backend.</strong>{" "}
            That's what Lovable Cloud provides — and why we're pushing to enable it.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 text-center space-y-3">
          <p className="text-lg font-display font-semibold">
            "If I can build this training platform in one conversation with Lovable,
            <br />
            imagine what <em>you</em> can build for your team." 🚀
          </p>
          <p className="text-sm text-muted-foreground">— The person who vibed this into existence</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default HowIBuiltThis;

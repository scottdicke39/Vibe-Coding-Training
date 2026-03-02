import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { getCompletionPercentage, getBadges } from "@/lib/progress";
import { tools } from "@/lib/content";
import { ArrowRight, Zap, Lightbulb, Trophy, Rocket, Copy, Check, ChevronDown, CheckSquare, Globe, Shield } from "lucide-react";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const tracks = [
  { title: "Key Concepts", emoji: "🧠", desc: "AI terms you'll actually use", link: "/concepts", count: "8 concepts", step: 1 },
  { title: "Tool Deep Dives", emoji: "📚", desc: "Master Lovable, ChatGPT, Claude & Glean", link: "/tools/lovable", count: "4 tools", step: 2 },
  { title: "Quick Recipes", emoji: "🍳", desc: "Build something in 10-15 min", link: "/recipes", count: "4 recipes", step: 3 },
  { title: "Project Ideas", emoji: "💡", desc: "38 ideas ready to build", link: "/ideas", count: "38 ideas", step: 4 },
  { title: "Prompt Playground", emoji: "🎮", desc: "Level up your prompt skills", link: "/playground", count: "Interactive", step: 5 },
  { title: "Coding Tools", emoji: "🛠️", desc: "Cursor, Codex, Claude Code — do I need them?", link: "/coding-tools", count: "Explainer", step: null },
  { title: "How I Built This", emoji: "🔮", desc: "The meta story behind this app", link: "/how-i-built-this", count: "Meta!", step: null },
  { title: "Badges & Progress", emoji: "🏆", desc: "Track your achievements", link: "/badges", count: "7 badges", step: null },
];

const dayOfRef = [
  { want: "Build a dashboard or app", tool: "Lovable", how: "lovable.dev → New Project → describe what you want" },
  { want: "Create a reusable assistant", tool: "ChatGPT", how: "chat.openai.com → Explore GPTs → Create" },
  { want: "Analyze documents or data", tool: "Claude", how: "claude.ai → Projects → New Project → upload files" },
  { want: "Build a knowledge search bot", tool: "Glean", how: "Glean → Agent Builder → Create Agent" },
  { want: "I'm stuck or need help", tool: "Team Captain", how: "Slack DM or raise your hand" },
];

const toolColors = [
  "border-l-4 border-l-tool-lovable",
  "border-l-4 border-l-tool-chatgpt",
  "border-l-4 border-l-tool-claude",
  "border-l-4 border-l-tool-glean",
];

const starterPrompt = `I'm participating in a hack day at Handshake. I need your help preparing.

Please read this Notion page — it's our full hackathon guide with everything you need to know:
https://www.notion.so/handshake/P-T-AI-Hack-Day-Kit-315a2996f6d681fbb6bee540a3d89916

Once you've read it, I'd like you to:

1. Summarize the key tools available to me (Lovable, ChatGPT, Claude, Glean) and what each is best for
2. Explain our current tech stack (Ashby, Workday, BrightHire, Pave, etc.) and how hack day projects can connect to them
3. List the project ideas that are most relevant to my role
4. Help me pick a project and start building a plan

I'm new to AI tools — explain things simply and help me build confidence as we go.`;

const Index = () => {
  const pct = getCompletionPercentage();
  const badges = getBadges();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(starterPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-16">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-6 md:pt-12 space-y-8"
      >
        <Badge variant="outline" className="text-xs tracking-wide uppercase font-medium px-3 py-1 border-primary/30">
          March 18 Build Day → March 24 Demos
        </Badge>

        <div className="space-y-4">
          <h1 className="font-display text-4xl md:text-6xl font-800 leading-[1.1] tracking-tight">
            Build <span className="gradient-hero">real tools.</span>
            <br />
            No code required.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
            Interactive training for Handshake's P&T AI Hack Day.
            Learn the tools, then ship something your team actually needs.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to="/tools/lovable">
              <Zap className="h-4 w-4 mr-2" /> Start Learning
            </Link>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <Link to="/ideas">
              <Lightbulb className="h-4 w-4 mr-2" /> Browse Ideas
            </Link>
          </Button>
        </div>

        <p className="text-xs text-muted-foreground/60 font-mono">
          // yes, this AI training app was built by AI. we are aware of the irony.
        </p>
      </motion.section>

      {/* Progress bar */}
      {pct > 0 && (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium flex items-center gap-2">
              <Trophy className="h-4 w-4 text-primary" /> Your Progress
            </span>
            <span className="text-muted-foreground tabular-nums">{pct}% · {badges.length} badges</span>
          </div>
          <Progress value={pct} className="h-2" />
        </motion.section>
      )}

      {/* 🚀 Start Here */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2">
          <Rocket className="h-5 w-5 text-primary" />
          <h2 className="font-display text-xl font-bold tracking-tight">Start Here — Whatever Tool You Use</h2>
        </div>
        <Card className="border-primary/30 bg-primary/5">
          <CardContent className="p-5 space-y-4">
            <p className="text-sm leading-relaxed">
              <strong>Step 1:</strong> Open your AI tool of choice (ChatGPT, Claude, Lovable, etc.).<br />
              <strong>Step 2:</strong> Connect <strong>Notion</strong> as a data source (MCP connector, ChatGPT connector, or paste content).<br />
              <strong>Step 3:</strong> Paste this prompt to get a personalized onboarding:
            </p>
            <div className="relative">
              <pre className="bg-background border rounded-lg p-4 text-xs leading-relaxed whitespace-pre-wrap font-mono text-muted-foreground max-h-48 overflow-y-auto">
                {starterPrompt}
              </pre>
              <Button
                size="sm"
                variant="secondary"
                className="absolute top-2 right-2 h-7 text-xs gap-1"
                onClick={handleCopy}
              >
                {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              💡 This works with <strong>any</strong> AI tool. The key is giving it our Notion hackathon doc as context — then it becomes your personal hack day coach.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Pre-Work Checklist */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2">
          <CheckSquare className="h-5 w-5 text-primary" />
          <h2 className="font-display text-xl font-bold tracking-tight">Pre-Work Checklist</h2>
        </div>
        <Card>
          <CardContent className="p-5 space-y-3">
            <div className="grid gap-2 text-sm">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-1 accent-primary" />
                <span className="text-muted-foreground"><strong className="text-foreground">Verify tool access</strong> — Log in to your assigned tools and confirm they work. Do this by March 11 so we can troubleshoot.</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-1 accent-primary" />
                <span className="text-muted-foreground"><strong className="text-foreground">Think about 1-3 ideas</strong> — Browse the <Link to="/ideas" className="text-primary underline underline-offset-2">Project Inspiration Guide</Link> or use the <a href="https://recruiting-agent-468191624623.us-central1.run.app/vibe-coding/guest/23ecdad3422a7c69d3913fd369ca8368bfd1297ab9e0d5e8" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Idea Generator</a>.</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-1 accent-primary" />
                <span className="text-muted-foreground"><strong className="text-foreground">Gather your materials</strong> — If your idea involves specific documents, templates, or data, have them ready. Remember: sample data only, no production PII.</span>
              </label>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Day-Of Quick Reference */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="space-y-4"
      >
        <h2 className="font-display text-xl font-bold tracking-tight">Day-Of Quick Reference</h2>
        <Card>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {dayOfRef.map((row) => (
                <div key={row.want} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-5 py-3">
                  <span className="text-sm font-medium min-w-0 flex-shrink-0 sm:w-52">{row.want}</span>
                  <Badge variant="secondary" className="w-fit text-xs shrink-0">{row.tool}</Badge>
                  <span className="text-xs text-muted-foreground flex-1">{row.how}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Data Safety Reminder */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="border-destructive/20 bg-destructive/5">
          <CardContent className="p-4 flex items-start gap-3">
            <Shield className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground space-y-1">
              <p className="font-semibold text-foreground">Security & Data Reminder</p>
              <p>Only use approved AI tools (Lovable, ChatGPT Enterprise, Claude, Glean). <strong>Do not upload sensitive employee PII</strong> — use sample or made-up data. Student production data is strictly off-limits. When in doubt, ask your Team Captain.</p>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Tools grid */}
      <section className="space-y-6">
        <h2 className="font-display text-xl font-bold tracking-tight">Your AI Toolkit</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link to={`/tools/${tool.id}`} className="block h-full">
                <Card className={`h-full transition-all hover:-translate-y-1 hover:shadow-md ${toolColors[i]}`}>
                  <CardContent className="p-4 space-y-2">
                    <span className="text-2xl block">{tool.emoji}</span>
                    <h3 className="font-display font-semibold text-sm">{tool.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{tool.tagline}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Learning tracks */}
      <section className="space-y-6">
        <div>
          <h2 className="font-display text-xl font-bold tracking-tight">Learning Tracks</h2>
          <p className="text-xs text-muted-foreground mt-1">Suggested path: follow steps 1-5 in order, then explore the rest.</p>
        </div>
        <div className="grid gap-2">
          {tracks.map((track, i) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.04 }}
            >
              <Link to={track.link}>
                <div className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-accent/50 transition-colors group">
                  {track.step ? (
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center shrink-0">
                      {track.step}
                    </span>
                  ) : (
                    <span className="text-xl w-8 text-center shrink-0">{track.emoji}</span>
                  )}
                  <div className="flex-1 min-w-0">
                    <span className="font-display font-semibold text-sm">{track.title}</span>
                    <span className="text-xs text-muted-foreground ml-2 hidden sm:inline">{track.desc}</span>
                  </div>
                  <Badge variant="secondary" className="shrink-0 text-[10px] font-mono">{track.count}</Badge>
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/40 group-hover:text-foreground transition-colors" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industry Context */}
      <Collapsible>
        <Card>
          <CollapsibleTrigger className="w-full">
            <CardContent className="p-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <h2 className="font-display text-lg font-semibold">What Other Companies Are Doing</h2>
              </div>
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            </CardContent>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent className="px-5 pb-5 pt-0 space-y-4 text-sm text-muted-foreground">
              <div className="space-y-3">
                <p><strong className="text-foreground">HR-specific AI hackathons are growing.</strong> Recrivio ran a 45-day sprint with tracks for enterprise hiring agents and internal HR automation. Zeal/HyperTrack ran a 5-day virtual event covering nine HR areas. Torq collected 30-40 ideas, filtered to 15-20, and formed cross-functional teams — projects that went into production had a clear owner and exec sponsor after.</p>
                <p><strong className="text-foreground">The non-engineer builder movement is real.</strong> Organizations are actively recruiting non-technical participants from HR, finance, and operations for hackathons. The key: frame challenges around business problems, not technology.</p>
                <p><strong className="text-foreground">AI tools are meeting HR where it is.</strong> Anthropic launched Claude HR plugins (Feb 2026) for offer letter drafting, onboarding plans, and comp analysis. ChatGPT Enterprise connectors now plug into Notion, Linear, and Google Calendar.</p>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="font-medium text-foreground">The takeaway:</p>
                <p>Companies getting the most value from AI in P&T do three things: (1) frame projects around specific, recurring workflows, (2) let domain experts drive the building, (3) treat hack day projects as prototypes — prove value, then invest in the winners. That's exactly what we're doing on March 18.</p>
              </div>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      {/* Quote */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="border-l-4 border-primary/40 pl-6 py-2"
      >
        <p className="text-base font-display font-medium leading-relaxed">
          "The goal isn't to learn AI tools — it's to <span className="text-primary">build and ship</span> something that makes your team's life better."
        </p>
        <p className="text-xs text-muted-foreground mt-2">— Jon Stull, VP People & Talent</p>
      </motion.section>
    </div>
  );
};

export default Index;

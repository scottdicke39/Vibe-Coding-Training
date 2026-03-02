import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { codingTools, toolComparisons, codingToolRecommendation, gitHubPrimer, gitHubWhyItMatters } from "@/lib/content";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Info, ArrowRight, User, Code2, Rocket, GitBranch } from "lucide-react";
import { useState } from "react";

const CodingTools = () => {
  const [ideOpen, setIdeOpen] = useState(false);

  const allInOne = codingTools.filter((t) => t.category === "all-in-one");
  const codeEditors = codingTools.filter((t) => t.category === "code-editor");

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto space-y-12">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <Badge variant="outline" className="text-xs tracking-wide uppercase font-medium px-3 py-1 border-primary/30">
          Orientation
        </Badge>
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
          Coding Tools Explained
        </h1>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          What are Cursor, Codex, and Claude Code — and do you need them? Here's a plain-English guide to understanding the different AI tools people are using.
        </p>
      </motion.section>

      {/* TL;DR */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="border-primary/30 bg-primary/5">
          <CardContent className="p-5 flex gap-3 items-start">
            <Info className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div className="space-y-1">
              <p className="font-semibold text-sm">TL;DR for most participants</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>Lovable is the fastest path</strong> for most people. If you want to try a code editor like Cursor, you absolutely can — but expect a learning curve, make sure you're connected to a <strong>GitHub repo</strong>, and coordinate with your team captain on how you'll use it.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* What is an IDE? */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        <Collapsible open={ideOpen} onOpenChange={setIdeOpen}>
          <CollapsibleTrigger className="flex items-center gap-2 w-full text-left group">
            <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${ideOpen ? "rotate-0" : "-rotate-90"}`} />
            <span className="font-display font-semibold text-sm group-hover:text-primary transition-colors">
              Wait — what's an IDE? (click to expand)
            </span>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-3 pl-6">
            <Card>
              <CardContent className="p-4 space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  <strong>IDE</strong> stands for "Integrated Development Environment." It's the app that software engineers use to write code — like how you use Google Docs to write documents, engineers use an IDE to write programs.
                </p>
                <p>
                  Popular IDEs include VS Code, IntelliJ, and Xcode. <strong>Cursor</strong> is basically VS Code with AI superpowers built in.
                </p>
                <p>
                  You don't need to know any of this for hack day — it's just context so you're not lost when engineers mention these tools.
                </p>
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>
      </motion.section>

      {/* Two categories */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-6"
      >
        <h2 className="font-display text-xl font-bold tracking-tight">Two Categories of AI Tools</h2>

        {/* All-in-one */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Rocket className="h-4 w-4 text-primary" />
            <h3 className="font-display font-semibold text-sm">All-in-One Builders</h3>
            <Badge variant="secondary" className="text-[10px]">No code needed</Badge>
          </div>
          {allInOne.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        {/* Code editors */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Code2 className="h-4 w-4 text-muted-foreground" />
            <h3 className="font-display font-semibold text-sm">Code Editors with AI</h3>
            <Badge variant="outline" className="text-[10px]">Technical</Badge>
          </div>
          {codeEditors.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </motion.section>

      {/* Comparisons */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-6"
      >
        <h2 className="font-display text-xl font-bold tracking-tight">"What's the Difference Between…"</h2>
        <div className="space-y-3">
          {toolComparisons.map((comp, i) => (
            <Card key={i}>
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <span>{comp.emojiA} {comp.toolA}</span>
                  <span className="text-muted-foreground/40">vs</span>
                  <span>{comp.emojiB} {comp.toolB}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{comp.difference}</p>
                <p className="text-xs font-medium flex items-center gap-1.5">
                  <ArrowRight className="h-3 w-3 text-primary" />
                  {comp.bottomLine}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Which should I pick? */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-4"
      >
        <h2 className="font-display text-xl font-bold tracking-tight">Which Should I Use?</h2>
        <div className="grid gap-3">
          <RecommendationCard
            icon={<User className="h-4 w-4" />}
            label="I'm not technical"
            text={codingToolRecommendation.nonTechnical}
          />
          <RecommendationCard
            icon={<Code2 className="h-4 w-4" />}
            label="I know a little code"
            text={codingToolRecommendation.someComfort}
          />
          <RecommendationCard
            icon={<Rocket className="h-4 w-4" />}
            label="I'm an engineer"
            text={codingToolRecommendation.engineer}
          />
        </div>
      </motion.section>
      {/* GitHub Primer */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2">
          <GitBranch className="h-5 w-5 text-primary" />
          <h2 className="font-display text-xl font-bold tracking-tight">GitHub in 60 Seconds</h2>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {gitHubWhyItMatters}
        </p>
        <div className="grid gap-3">
          {gitHubPrimer.map((item) => (
            <Card key={item.term}>
              <CardContent className="p-4 flex gap-3 items-start">
                <span className="text-lg shrink-0">{item.emoji}</span>
                <div className="space-y-1">
                  <p className="font-semibold text-sm">{item.term}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.definition}</p>
                  <p className="text-xs text-muted-foreground/70 italic">Think of it as: {item.analogy}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

function ToolCard({ tool }: { tool: typeof codingTools[number] }) {
  return (
    <Card>
      <CardContent className="p-4 space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{tool.emoji}</span>
          <h4 className="font-display font-semibold text-sm">{tool.name}</h4>
          {tool.needsTechnicalSkills && (
            <Badge variant="outline" className="text-[10px] text-muted-foreground">More technical</Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{tool.whatItIs}</p>
        <div className="text-xs space-y-1 pt-1">
          <p><strong>Best for:</strong> {tool.bestFor}</p>
          <p><strong>Think of it as:</strong> {tool.analogy}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function RecommendationCard({ icon, label, text }: { icon: React.ReactNode; label: string; text: string }) {
  return (
    <Card>
      <CardContent className="p-4 flex gap-3 items-start">
        <div className="mt-0.5 text-primary shrink-0">{icon}</div>
        <div>
          <p className="font-semibold text-sm mb-1">{label}</p>
          <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
        </div>
      </CardContent>
    </Card>
  );
}

export default CodingTools;

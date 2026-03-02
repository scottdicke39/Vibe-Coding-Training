import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { setModuleComplete } from "@/lib/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Sparkles, Lightbulb } from "lucide-react";

interface ScoreResult {
  total: number;
  specificity: number;
  context: number;
  format: number;
  constraints: number;
  tips: string[];
}

function scorePrompt(prompt: string): ScoreResult {
  const tips: string[] = [];
  let specificity = 0, context = 0, format = 0, constraints = 0;

  // Specificity
  if (prompt.length > 50) specificity += 25;
  else tips.push("Be more specific — add more detail about what you want.");
  if (prompt.length > 150) specificity += 25;
  if (/\b(build|create|make|generate|design|analyze|write)\b/i.test(prompt)) specificity += 25;
  else tips.push("Start with a clear action verb (build, create, analyze, etc.)");
  if (/\b(dashboard|app|tool|report|bot|agent|page|form)\b/i.test(prompt)) specificity += 25;
  else tips.push("Specify the type of output you want (dashboard, tool, report, etc.)");

  // Context
  if (/\b(team|manager|employee|hr|p&t|compensation|recruiting)\b/i.test(prompt)) context += 50;
  else tips.push("Add context about who will use this and why.");
  if (/\b(handshake|company|organization|department)\b/i.test(prompt)) context += 50;
  else tips.push("Mention the organization or audience for better results.");

  // Format
  if (/\b(table|chart|list|columns|sections|format|layout|include)\b/i.test(prompt)) format += 50;
  else tips.push("Describe the output format (tables, charts, sections, etc.)");
  if (/\b(csv|json|pdf|email|slack|markdown)\b/i.test(prompt)) format += 50;
  else tips.push("Specify the file format or delivery method if applicable.");

  // Constraints
  if (/\b(don't|do not|avoid|never|must|should|limit|only|exclude)\b/i.test(prompt)) constraints += 50;
  else tips.push("Add constraints — what should be avoided or required?");
  if (/\b(\d+|three|four|five|specific|exact)\b/i.test(prompt)) constraints += 50;
  else tips.push("Add specific numbers or quantities for more precise output.");

  const total = Math.round((specificity + context + format + constraints) / 4);
  if (total >= 80) setModuleComplete("playground", total);

  return { total, specificity, context, format, constraints, tips };
}

const examplePrompts = [
  "Build a dashboard",
  "Create a web app that lets HR managers upload a CSV of compensation data, view salary ranges by department and level in interactive bar charts, filter by location and job family, and export filtered results. Include a data table below the charts with search and sort. Use Handshake's brand colors.",
  "Analyze this compensation data for pay equity issues across gender, ethnicity, department, and level. Identify statistically significant gaps (>5% unexplained variance), flag individual outliers more than 2 standard deviations from peer medians, and recommend specific dollar adjustments. Format as an executive summary with a findings table.",
];

const Playground = () => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState<ScoreResult | null>(null);

  const analyze = () => {
    if (prompt.trim().length < 5) return;
    setResult(scorePrompt(prompt));
  };

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto space-y-8">
      <Button variant="ghost" size="sm" asChild>
        <Link to="/"><ArrowLeft className="h-4 w-4 mr-1" /> Home</Link>
      </Button>

      <div>
        <h1 className="font-display text-3xl font-bold">🎮 Prompt Playground</h1>
        <p className="text-muted-foreground">Write a prompt and get instant feedback on how to improve it.</p>
      </div>

      <Card>
        <CardContent className="p-6 space-y-4">
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Write your prompt here... e.g., 'Build a compensation dashboard that...'"
            className="min-h-[150px]"
          />
          <div className="flex items-center justify-between">
            <Button onClick={analyze} disabled={prompt.trim().length < 5}>
              <Sparkles className="h-4 w-4 mr-2" /> Analyze Prompt
            </Button>
            <span className="text-xs text-muted-foreground">{prompt.length} characters</span>
          </div>
        </CardContent>
      </Card>

      {result && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Card className="border-2 border-primary/20">
            <CardContent className="p-6 space-y-6">
              <div className="text-center space-y-2">
                <span className="text-5xl">{result.total >= 80 ? "🌟" : result.total >= 50 ? "👍" : "🔧"}</span>
                <h3 className="font-display text-3xl font-bold">{result.total}%</h3>
                <p className="text-muted-foreground">
                  {result.total >= 80 ? "Excellent prompt!" : result.total >= 50 ? "Good start — see tips below!" : "Needs more detail — check the tips!"}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Specificity", value: result.specificity },
                  { label: "Context", value: result.context },
                  { label: "Format", value: result.format },
                  { label: "Constraints", value: result.constraints },
                ].map((s) => (
                  <div key={s.label} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{s.label}</span>
                      <span className="text-muted-foreground">{s.value}%</span>
                    </div>
                    <Progress value={s.value} className="h-2" />
                  </div>
                ))}
              </div>

              {result.tips.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-primary" /> Tips to Improve
                  </h4>
                  <ul className="space-y-1">
                    {result.tips.map((tip, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span>💡</span> {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      )}

      <section className="space-y-3">
        <h2 className="font-display text-xl font-bold">📝 Try These Examples</h2>
        <div className="space-y-2">
          {examplePrompts.map((ep, i) => (
            <Button key={i} variant="outline" className="w-full text-left justify-start h-auto py-3 whitespace-normal" onClick={() => { setPrompt(ep); setResult(null); }}>
              <span className="text-sm line-clamp-2">{ep}</span>
            </Button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Playground;

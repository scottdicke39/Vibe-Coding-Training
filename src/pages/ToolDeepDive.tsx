import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { tools } from "@/lib/content";
import { setModuleComplete, isModuleComplete, type ModuleId } from "@/lib/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, ArrowLeft, ArrowRight, ExternalLink, Lightbulb, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const ToolDeepDive = () => {
  const { toolId } = useParams<{ toolId: string }>();
  const tool = tools.find((t) => t.id === toolId);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  if (!tool) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Tool not found</h1>
        <Button asChild className="mt-4"><Link to="/">Go Home</Link></Button>
      </div>
    );
  }

  const moduleId = `tool-${tool.id}` as ModuleId;
  const completed = isModuleComplete(moduleId);
  const quiz = tool.quiz;
  const q = quiz[currentQ];

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === q.correctIndex) setScore((s) => s + 1);
  };

  const nextQuestion = () => {
    if (currentQ < quiz.length - 1) {
      setCurrentQ((c) => c + 1);
      setSelected(null);
    } else {
      setFinished(true);
      const finalScore = Math.round((score / quiz.length) * 100);
      setModuleComplete(moduleId, finalScore);
    }
  };

  const toolColors: Record<string, string> = {
    lovable: "border-tool-lovable/30",
    chatgpt: "border-tool-chatgpt/30",
    claude: "border-tool-claude/30",
    glean: "border-tool-glean/30",
  };

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto space-y-8">
      <Button variant="ghost" size="sm" asChild>
        <Link to="/"><ArrowLeft className="h-4 w-4 mr-1" /> Home</Link>
      </Button>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{tool.emoji}</span>
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold">{tool.name}</h1>
            <p className="text-muted-foreground">{tool.tagline}</p>
          </div>
          {completed && <Badge className="ml-auto bg-accent text-accent-foreground">✅ Completed</Badge>}
        </div>
      </motion.div>

      <Card className={`border-2 ${toolColors[tool.id] || ""}`}>
        <CardContent className="p-6 space-y-4">
          <h2 className="font-display text-xl font-semibold">What is {tool.name}?</h2>
          <p className="text-muted-foreground">{tool.description}</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="font-display text-xl font-semibold">💡 Why It Matters for P&T</h2>
          <p className="text-muted-foreground">{tool.whyItMatters}</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="font-display text-xl font-semibold">⚡ How It Works</h2>
          <ol className="space-y-3">
            {tool.howItWorks.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-muted-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tool.features.map((f, i) => (
          <motion.div key={f.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
            <Card className="h-full">
              <CardContent className="p-4">
                <h3 className="font-semibold text-sm">{f.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{f.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card className="border-2 border-primary/20 bg-primary/5">
        <CardContent className="p-6 space-y-2">
          <h2 className="font-display text-xl font-semibold">🔑 Key Concept: {tool.keyConcept.title}</h2>
          <p className="text-muted-foreground">{tool.keyConcept.description}</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold text-sm mb-1">🔐 Access Notes</h3>
          <p className="text-xs text-muted-foreground">{tool.accessNotes}</p>
        </CardContent>
      </Card>

      {/* Pro Tip — Use AI to help with AI */}
      <Card className="border-2 border-accent/30 bg-accent/5">
        <CardContent className="p-6 space-y-2">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-accent" />
            <h2 className="font-display text-lg font-semibold">Pro Tip: Use AI to Help You with AI</h2>
          </div>
          <p className="text-muted-foreground text-sm">{tool.proTip}</p>
        </CardContent>
      </Card>

      {/* Go Deeper */}
      <Collapsible>
        <Card>
          <CollapsibleTrigger className="w-full">
            <CardContent className="p-6 flex items-center justify-between">
              <h2 className="font-display text-xl font-semibold">📚 Go Deeper</h2>
              <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform" />
            </CardContent>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent className="px-6 pb-6 pt-0 space-y-3">
              {tool.goDeeper.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-colors group"
                >
                  <ExternalLink className="h-4 w-4 mt-0.5 text-muted-foreground group-hover:text-primary shrink-0" />
                  <div>
                    <p className="font-semibold text-sm group-hover:text-primary transition-colors">{link.label}</p>
                    <p className="text-xs text-muted-foreground">{link.description}</p>
                  </div>
                </a>
              ))}
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      {/* Quiz */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl font-bold">🧪 Knowledge Check</h2>
        {!quizStarted ? (
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <p className="text-muted-foreground">Test your knowledge of {tool.name} with {quiz.length} questions!</p>
              <Button onClick={() => setQuizStarted(true)}>Start Quiz 🎯</Button>
            </CardContent>
          </Card>
        ) : finished ? (
          <Card className="border-2 border-accent/30">
            <CardContent className="p-6 text-center space-y-4">
              <span className="text-5xl">{score === quiz.length ? "🎉" : "👍"}</span>
              <h3 className="font-display text-2xl font-bold">
                {score}/{quiz.length} correct!
              </h3>
              <p className="text-muted-foreground">
                {score === quiz.length ? "Perfect score! You're a pro!" : "Great effort! Review the sections above to level up."}
              </p>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="secondary">Question {currentQ + 1}/{quiz.length}</Badge>
              </div>
              <h3 className="font-display text-lg font-semibold">{q.question}</h3>
              <div className="space-y-2">
                {q.options.map((opt, idx) => {
                  let cls = "border-2 border-border hover:border-primary/30 cursor-pointer";
                  if (selected !== null) {
                    if (idx === q.correctIndex) cls = "border-2 border-accent bg-accent/10";
                    else if (idx === selected) cls = "border-2 border-destructive bg-destructive/10";
                  }
                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      className={`w-full text-left p-3 rounded-lg transition-all ${cls}`}
                    >
                      <div className="flex items-center gap-2">
                        {selected !== null && idx === q.correctIndex && <CheckCircle2 className="h-4 w-4 text-accent" />}
                        {selected !== null && idx === selected && idx !== q.correctIndex && <XCircle className="h-4 w-4 text-destructive" />}
                        <span className="text-sm">{opt}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
              {selected !== null && (
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground italic">{q.explanation}</p>
                  <Button onClick={nextQuestion}>
                    {currentQ < quiz.length - 1 ? "Next Question" : "See Results"} <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </section>
    </div>
  );
};

export default ToolDeepDive;

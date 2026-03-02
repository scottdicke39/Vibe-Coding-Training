import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { concepts, conceptsQuiz, advancedConcepts } from "@/lib/content";
import { setModuleComplete, isModuleComplete } from "@/lib/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ArrowRight, Search, CheckCircle2, XCircle, ChevronDown, Wrench } from "lucide-react";
import {
  Collapsible, CollapsibleContent, CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Concepts = () => {
  const [search, setSearch] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [advancedOpen, setAdvancedOpen] = useState(false);

  const completed = isModuleComplete("concepts");
  const filtered = concepts.filter(
    (c) => c.term.toLowerCase().includes(search.toLowerCase()) || c.definition.toLowerCase().includes(search.toLowerCase())
  );

  const quiz = conceptsQuiz;
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
      setModuleComplete("concepts", Math.round((score / quiz.length) * 100));
    }
  };

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto space-y-8">
      <Button variant="ghost" size="sm" asChild>
        <Link to="/"><ArrowLeft className="h-4 w-4 mr-1" /> Home</Link>
      </Button>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold">🧠 Key Concepts</h1>
          <p className="text-muted-foreground">AI terms you'll actually use, explained simply.</p>
        </div>
        {completed && <Badge className="bg-accent text-accent-foreground">✅ Done</Badge>}
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search concepts..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((c, i) => (
          <motion.div key={c.term} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
            <Card className="h-full">
              <CardContent className="p-5 space-y-2">
                <h3 className="font-display font-semibold text-lg">
                  {c.emoji} {c.term}
                </h3>
                <p className="text-sm text-muted-foreground">{c.definition}</p>
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-xs text-muted-foreground italic">💬 Analogy: {c.analogy}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Under the Hood — Advanced */}
      <Collapsible open={advancedOpen} onOpenChange={setAdvancedOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="w-full justify-between group">
            <span className="flex items-center gap-2">
              <Wrench className="h-4 w-4" />
              <span className="font-display font-semibold">🔧 Under the Hood — Technical Terms Explained</span>
            </span>
            <ChevronDown className={`h-4 w-4 transition-transform ${advancedOpen ? "rotate-180" : ""}`} />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-4 space-y-3">
          <p className="text-sm text-muted-foreground">
            Curious what all the tech jargon means? Here's a no-BS glossary. <strong>You don't need to know any of this to build on hack day</strong> — but if you're curious, here you go.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {advancedConcepts.map((c, i) => (
              <motion.div key={c.term} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
                <Card className="h-full border-dashed">
                  <CardContent className="p-4 space-y-2">
                    <h4 className="font-display font-semibold text-sm">
                      {c.emoji} {c.term}
                    </h4>
                    <p className="text-xs text-muted-foreground">{c.definition}</p>
                    <div className="bg-accent/10 rounded-md p-2">
                      <p className="text-[11px] text-accent-foreground font-medium">🤷 Why you don't need to know this:</p>
                      <p className="text-[11px] text-muted-foreground">{c.whyYouDontNeedToKnow}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Quiz section */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl font-bold">🧪 Concepts Quiz</h2>
        {!quizStarted ? (
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <p className="text-muted-foreground">Test your understanding of key AI concepts!</p>
              <Button onClick={() => setQuizStarted(true)}>Start Quiz 🎯</Button>
            </CardContent>
          </Card>
        ) : finished ? (
          <Card className="border-2 border-accent/30">
            <CardContent className="p-6 text-center space-y-4">
              <span className="text-5xl">{score === quiz.length ? "🎉" : "👍"}</span>
              <h3 className="font-display text-2xl font-bold">{score}/{quiz.length} correct!</h3>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="p-6 space-y-4">
              <Badge variant="secondary">Question {currentQ + 1}/{quiz.length}</Badge>
              <h3 className="font-display text-lg font-semibold">{q.question}</h3>
              <div className="space-y-2">
                {q.options.map((opt, idx) => {
                  let cls = "border-2 border-border hover:border-primary/30 cursor-pointer";
                  if (selected !== null) {
                    if (idx === q.correctIndex) cls = "border-2 border-accent bg-accent/10";
                    else if (idx === selected) cls = "border-2 border-destructive bg-destructive/10";
                  }
                  return (
                    <button key={idx} onClick={() => handleAnswer(idx)} className={`w-full text-left p-3 rounded-lg transition-all ${cls}`}>
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

export default Concepts;
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { recipes } from "@/lib/content";
import { setModuleComplete, isModuleComplete } from "@/lib/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Clock } from "lucide-react";

const RECIPES_STORAGE_KEY = "vibe-training-completed-recipes";

function loadCompletedRecipes(): string[] {
  try {
    const stored = localStorage.getItem(RECIPES_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

const Recipes = () => {
  const [completedRecipes, setCompletedRecipes] = useState<string[]>(loadCompletedRecipes);
  const completed = isModuleComplete("recipes");

  const markDone = (id: string) => {
    const next = [...completedRecipes, id];
    setCompletedRecipes(next);
    localStorage.setItem(RECIPES_STORAGE_KEY, JSON.stringify(next));
    if (next.length === recipes.length) {
      setModuleComplete("recipes");
    }
  };

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto space-y-8">
      <Button variant="ghost" size="sm" asChild>
        <Link to="/"><ArrowLeft className="h-4 w-4 mr-1" /> Home</Link>
      </Button>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold">🍳 Quick-Start Recipes</h1>
          <p className="text-muted-foreground">Follow these step-by-step to build something in 10-15 min.</p>
        </div>
        {completed && <Badge className="bg-accent text-accent-foreground">✅ All Done</Badge>}
      </div>

      <div className="space-y-6">
        {recipes.map((recipe, ri) => {
          const isDone = completedRecipes.includes(recipe.id);
          return (
            <motion.div key={recipe.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: ri * 0.1 }}>
              <Card className={`border-2 ${isDone ? "border-accent/30 bg-accent/5" : ""}`}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="font-display text-xl font-bold">
                      {recipe.emoji} {recipe.title}
                    </h2>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className={recipe.toolColor}>
                        {recipe.tool}
                      </Badge>
                      <Badge variant="secondary">
                        <Clock className="h-3 w-3 mr-1" /> {recipe.duration}
                      </Badge>
                    </div>
                  </div>

                  <ol className="space-y-3">
                    {recipe.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">
                          {i + 1}
                        </span>
                        <span className="text-sm text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>

                  <div className="bg-accent/10 rounded-lg p-4 text-center">
                    <p className="font-display font-semibold text-accent">{recipe.successLine}</p>
                  </div>

                  {!isDone && (
                    <Button onClick={() => markDone(recipe.id)} variant="outline" className="w-full">
                      <CheckCircle2 className="h-4 w-4 mr-2" /> Mark as Done
                    </Button>
                  )}
                  {isDone && (
                    <p className="text-center text-sm text-accent font-medium">✅ Completed!</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getBadges, BADGE_INFO, getCompletionPercentage, type BadgeId } from "@/lib/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const allBadges: BadgeId[] = [
  "first-steps", "tool-explorer", "concept-master", "recipe-chef",
  "idea-machine", "prompt-pro", "completionist",
];

const Badges = () => {
  const earned = getBadges();
  const pct = getCompletionPercentage();

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto space-y-8">
      <Button variant="ghost" size="sm" asChild>
        <Link to="/"><ArrowLeft className="h-4 w-4 mr-1" /> Home</Link>
      </Button>

      <div className="text-center space-y-4">
        <h1 className="font-display text-3xl font-bold">🏆 Badges & Progress</h1>
        <p className="text-muted-foreground">
          {earned.length}/{allBadges.length} badges earned
        </p>
        <div className="max-w-md mx-auto space-y-2">
          <div className="flex justify-between text-sm">
            <span>Overall Progress</span>
            <span className="text-muted-foreground">{pct}%</span>
          </div>
          <Progress value={pct} className="h-3" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {allBadges.map((id, i) => {
          const info = BADGE_INFO[id];
          const isEarned = earned.includes(id);
          return (
            <motion.div key={id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}>
              <Card className={`border-2 transition-all ${isEarned ? "border-accent/30 bg-accent/5 shadow-fun" : "opacity-50 grayscale"}`}>
                <CardContent className="p-6 flex items-center gap-4">
                  <span className="text-4xl">{info.emoji}</span>
                  <div>
                    <h3 className="font-display font-bold">{info.name}</h3>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                    {isEarned && <p className="text-xs text-accent mt-1 font-medium">✅ Earned!</p>}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Badges;

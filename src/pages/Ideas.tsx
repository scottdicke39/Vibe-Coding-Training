import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projectIdeas } from "@/lib/content";
import { setModuleComplete } from "@/lib/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, Copy, Shuffle, Check, AlertTriangle, ChevronDown, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const difficultyColors: Record<string, string> = {
  Starter: "bg-accent/20 text-accent-foreground border-accent/30",
  Intermediate: "bg-primary/20 text-primary border-primary/30",
  Advanced: "bg-destructive/20 text-destructive border-destructive/30",
};

const Ideas = () => {
  const [search, setSearch] = useState("");
  const [diffFilter, setDiffFilter] = useState<string | null>(null);
  const [catFilter, setCatFilter] = useState<string | null>(null);
  const [toolFilter, setToolFilter] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const { toast } = useToast();

  const categories = useMemo(() => [...new Set(projectIdeas.map((i) => i.category))], []);
  const allTools = useMemo(() => [...new Set(projectIdeas.flatMap((i) => i.tools))].sort(), []);
  const difficulties = ["Starter", "Intermediate", "Advanced"];

  const filtered = projectIdeas.filter((idea) => {
    if (diffFilter && idea.difficulty !== diffFilter) return false;
    if (catFilter && idea.category !== catFilter) return false;
    if (toolFilter && !idea.tools.includes(toolFilter)) return false;
    if (search && !idea.title.toLowerCase().includes(search.toLowerCase()) && !idea.description.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const copyPrompt = async (idea: typeof projectIdeas[0]) => {
    await navigator.clipboard.writeText(idea.prompt);
    setCopiedId(idea.id);
    toast({ title: "Prompt copied! 📋", description: `"${idea.title}" prompt is on your clipboard.` });
    setTimeout(() => setCopiedId(null), 2000);
  };

  const randomIdea = () => {
    const rand = projectIdeas[Math.floor(Math.random() * projectIdeas.length)];
    setSearch(rand.title);
    setDiffFilter(null);
    setCatFilter(null);
    setToolFilter(null);
  };

  const clearFilters = () => {
    setSearch("");
    setDiffFilter(null);
    setCatFilter(null);
    setToolFilter(null);
  };

  const hasFilters = search || diffFilter || catFilter || toolFilter;

  useEffect(() => {
    setModuleComplete("ideas");
  }, []);

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-6">
      <Button variant="ghost" size="sm" asChild>
        <Link to="/"><ArrowLeft className="h-4 w-4 mr-1" /> Home</Link>
      </Button>

      <div>
        <h1 className="font-display text-3xl font-bold">💡 Project Ideas</h1>
        <p className="text-muted-foreground">38 ideas ready to build. Pick one and go! 🚀</p>
      </div>

      <Card className="border-destructive/20 bg-destructive/5">
        <CardContent className="p-4 flex items-center gap-3">
          <AlertTriangle className="h-5 w-5 text-destructive shrink-0" />
          <p className="text-sm text-muted-foreground">
            <strong>Data sensitivity:</strong> Student data from our production environment is <strong>strictly off-limits</strong>. For internal datasets, please <strong>check with your Team Captain</strong> before using any real data. When in doubt, use mock/sample data.
          </p>
        </CardContent>
      </Card>

      {/* Tips for Picking */}
      <Collapsible>
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="w-full justify-between group">
            <span className="font-display font-semibold text-sm">Tips for Picking Your Project</span>
            <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-3">
          <Card>
            <CardContent className="p-5">
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li><strong className="text-foreground">1. Start with the pain.</strong> What do you repeat every week that you wish were faster or less tedious?</li>
                <li><strong className="text-foreground">2. Match the tool to the output.</strong> Want a visual app? Lovable. Reusable assistant? ChatGPT. Analyze documents? Claude. Search internal knowledge? Glean.</li>
                <li><strong className="text-foreground">3. Scope it down.</strong> A working v1 that does one thing well beats a half-finished ambitious plan. You can always add more later.</li>
                <li><strong className="text-foreground">4. Use sample data.</strong> Don't worry about connecting to real systems on hack day. Use made-up or anonymized data, prove the concept, figure out real integrations after.</li>
                <li><strong className="text-foreground">5. Pair up if you want.</strong> Solo or with a partner, both work. One person drives, the other brainstorms and tests.</li>
                <li><strong className="text-foreground">6. Don't overthink it.</strong> The point is to try something new and learn. Your project does not need to be production-ready by 5pm.</li>
              </ol>
            </CardContent>
          </Card>
        </CollapsibleContent>
      </Collapsible>

      {/* Idea Generator CTA */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold">Not sure what to build?</p>
            <p className="text-xs text-muted-foreground">Describe a problem you face and the Idea Generator will suggest a project with the right tool and a starter prompt.</p>
          </div>
          <Button size="sm" variant="outline" asChild className="shrink-0">
            <a href="https://recruiting-agent-468191624623.us-central1.run.app/vibe-coding/guest/23ecdad3422a7c69d3913fd369ca8368bfd1297ab9e0d5e8" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-3 w-3 mr-1" /> Idea Generator
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* Filters */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search ideas..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
          </div>
          <Select value={toolFilter || "all"} onValueChange={(v) => setToolFilter(v === "all" ? null : v)}>
            <SelectTrigger className="w-full md:w-[160px]">
              <SelectValue placeholder="All Tools" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Tools</SelectItem>
              {allTools.map((t) => (
                <SelectItem key={t} value={t}>{t}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-2 flex-wrap items-center">
          {difficulties.map((d) => (
            <Button key={d} size="sm" variant={diffFilter === d ? "default" : "outline"} onClick={() => setDiffFilter(diffFilter === d ? null : d)}>
              {d}
            </Button>
          ))}
          <div className="w-px h-5 bg-border mx-1" />
          {categories.map((c) => (
            <Badge key={c} variant={catFilter === c ? "default" : "outline"} className="cursor-pointer" onClick={() => setCatFilter(catFilter === c ? null : c)}>
              {c}
            </Badge>
          ))}
          <div className="w-px h-5 bg-border mx-1" />
          <Button size="sm" variant="secondary" onClick={randomIdea}>
            <Shuffle className="h-3 w-3 mr-1" /> Feeling Lucky
          </Button>
          {hasFilters && (
            <Button size="sm" variant="ghost" onClick={clearFilters} className="text-xs text-muted-foreground">
              Clear all
            </Button>
          )}
        </div>
      </div>

      <p className="text-sm text-muted-foreground">{filtered.length} ideas</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((idea, i) => (
          <motion.div key={idea.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.02 }}>
            <Card className="h-full hover:shadow-md transition-all hover:-translate-y-0.5">
              <CardContent className="p-5 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display font-semibold">{idea.title}</h3>
                  <Badge variant="outline" className={difficultyColors[idea.difficulty]}>
                    {idea.difficulty}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{idea.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {idea.tools.map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                    ))}
                  </div>
                  <Button size="sm" variant="ghost" onClick={() => copyPrompt(idea)}>
                    {copiedId === idea.id ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    <span className="ml-1 text-xs">Copy Prompt</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Ideas;
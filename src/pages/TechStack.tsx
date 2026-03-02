import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Server, Plug, AlertTriangle, Zap } from "lucide-react";
import { techStack, apiWebhookContent, type TechSystem } from "@/lib/techstack";
import {
  Table, TableBody, TableCell, TableHead,
  TableHeader, TableRow,
} from "@/components/ui/table";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const categoryLabels: Record<string, { label: string; color: string }> = {
  recruiting: { label: "Recruiting", color: "bg-tool-lovable/10 text-tool-lovable border-tool-lovable/20" },
  people: { label: "People & Ops", color: "bg-primary/10 text-primary border-primary/20" },
  compensation: { label: "Compensation", color: "bg-tool-chatgpt/10 text-tool-chatgpt border-tool-chatgpt/20" },
  collaboration: { label: "Collaboration", color: "bg-tool-claude/10 text-tool-claude border-tool-claude/20" },
  internal: { label: "Internal Tools", color: "bg-accent/10 text-accent border-accent/20" },
};

function SystemCard({ system, index }: { system: TechSystem; index: number }) {
  const cat = categoryLabels[system.category];
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
    >
      <Card className="h-full hover:shadow-md transition-shadow">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{system.emoji}</span>
              <CardTitle className="text-base">{system.name}</CardTitle>
            </div>
            <Badge variant="outline" className={`text-[10px] shrink-0 ${cat.color}`}>
              {cat.label}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p className="text-muted-foreground leading-relaxed">{system.description}</p>
          <div>
            <p className="font-medium text-xs uppercase tracking-wide text-muted-foreground mb-1">Used by</p>
            <div className="flex flex-wrap gap-1">
              {system.usedBy.map((u) => (
                <Badge key={u} variant="secondary" className="text-[10px]">{u}</Badge>
              ))}
            </div>
          </div>
          <div className="bg-muted/50 rounded-md p-3">
            <p className="text-xs font-medium mb-1">💡 Why it matters for your project</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{system.projectRelevance}</p>
          </div>
          <div className="flex gap-2 pt-1">
            {system.hasApi && (
              <Badge variant="outline" className="text-[10px] gap-1">
                <Plug className="h-3 w-3" /> API
              </Badge>
            )}
            {system.hasWebhooks && (
              <Badge variant="outline" className="text-[10px] gap-1">
                <Zap className="h-3 w-3" /> Webhooks
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

const TechStack = () => {
  const { quickRef, toolIntegrations, apiDefinition, apiAnalogy, webhookDefinition, webhookAnalogy, hackDayNote, importantWarning } = apiWebhookContent;

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-12">
      <Button variant="ghost" size="sm" asChild>
        <Link to="/"><ArrowLeft className="h-4 w-4 mr-1" /> Home</Link>
      </Button>

      {/* Hero */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        <div className="flex items-center gap-3">
          <Server className="h-8 w-8 text-primary" />
          <h1 className="font-display text-3xl md:text-4xl font-bold">Our Current Tech Stack</h1>
        </div>
        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          Before you pick a project, it helps to know what systems we already use. Understanding the current stack means you can build things that <span className="text-foreground font-medium">connect to or extend</span> what already exists, rather than reinventing the wheel.
        </p>
      </motion.section>

      {/* Systems Grid */}
      <section className="space-y-6">
        <h2 className="font-display text-xl font-bold">Systems & Platforms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {techStack.map((system, i) => (
            <SystemCard key={system.name} system={system} index={i} />
          ))}
        </div>
      </section>

      {/* APIs & Webhooks */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Plug className="h-6 w-6 text-primary" />
          <h2 className="font-display text-xl font-bold">APIs & Webhooks: A Quick Primer</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          You'll hear these terms on hack day, and some advanced project ideas involve them. Here's what you need to know.
        </p>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="api">
            <AccordionTrigger className="font-display font-semibold">What is an API?</AccordionTrigger>
            <AccordionContent className="space-y-3 text-sm">
              <p>{apiDefinition}</p>
              <div className="bg-muted/50 rounded-md p-4">
                <p className="font-medium text-xs mb-1">🍽️ Analogy</p>
                <p className="text-muted-foreground">{apiAnalogy}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="webhook">
            <AccordionTrigger className="font-display font-semibold">What is a Webhook?</AccordionTrigger>
            <AccordionContent className="space-y-3 text-sm">
              <p>{webhookDefinition}</p>
              <div className="bg-muted/50 rounded-md p-4">
                <p className="font-medium text-xs mb-1">📱 Analogy</p>
                <p className="text-muted-foreground">{webhookAnalogy}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="hackday">
            <AccordionTrigger className="font-display font-semibold">Why does this matter for hack day?</AccordionTrigger>
            <AccordionContent className="space-y-4 text-sm">
              <p>{hackDayNote}</p>
              <p className="font-medium">Some tools handle this for you:</p>
              <div className="space-y-2">
                {toolIntegrations.map((t) => (
                  <div key={t.tool} className="flex gap-3 items-start">
                    <Badge variant="secondary" className="shrink-0 text-[10px]">{t.tool}</Badge>
                    <span className="text-muted-foreground">{t.description}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 items-start bg-destructive/10 border border-destructive/20 rounded-md p-4 mt-3">
                <AlertTriangle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                <p className="text-xs text-destructive">{importantWarning}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Quick Reference Table */}
      <section className="space-y-4">
        <h2 className="font-display text-lg font-bold">Quick Reference</h2>
        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-display">Term</TableHead>
                <TableHead className="font-display">What it does</TableHead>
                <TableHead className="font-display hidden sm:table-cell">Analogy</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quickRef.map((item) => (
                <TableRow key={item.term}>
                  <TableCell className="font-semibold text-sm">{item.term}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{item.description}</TableCell>
                  <TableCell className="text-sm text-muted-foreground hidden sm:table-cell">{item.analogy}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  );
};

export default TechStack;

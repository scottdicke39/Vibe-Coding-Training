import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table, TableBody, TableCell, TableHead,
  TableHeader, TableRow,
} from "@/components/ui/table";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft, Users, Search, CheckCircle2, XCircle, Shield,
} from "lucide-react";
import {
  participants, getTeams, getToolAccessSummary,
} from "@/lib/participants";

const Admin = () => {
  const [search, setSearch] = useState("");
  const [teamFilter, setTeamFilter] = useState<string>("all");

  const teams = getTeams();
  const summary = getToolAccessSummary();

  const filtered = useMemo(() => {
    return participants.filter((p) => {
      const matchesSearch =
        !search || p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.manager.toLowerCase().includes(search.toLowerCase());
      const matchesTeam = teamFilter === "all" || p.team === teamFilter;
      return matchesSearch && matchesTeam;
    });
  }, [search, teamFilter]);

  const activeCount = participants.filter((p) => p.participating).length;

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-10">
      <Button variant="ghost" size="sm" asChild>
        <Link to="/"><ArrowLeft className="h-4 w-4 mr-1" /> Home</Link>
      </Button>

      {/* Header */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
        <div className="flex items-center gap-3">
          <Shield className="h-8 w-8 text-primary" />
          <h1 className="font-display text-3xl md:text-4xl font-bold">Admin Dashboard</h1>
        </div>
        <p className="text-muted-foreground">
          Read-only roster and tool access overview.
          <Badge variant="outline" className="ml-2 text-[10px]">Cloud coming soon</Badge>
        </p>
      </motion.section>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {[
          { label: "Participants", value: activeCount, total: participants.length, emoji: "👥" },
          { label: "ChatGPT", value: summary.chatgpt, total: summary.total, emoji: "🤖" },
          { label: "Lovable", value: summary.lovable, total: summary.total, emoji: "💖" },
          { label: "Claude", value: summary.claude, total: summary.total, emoji: "🎭" },
          { label: "Teams", value: teams.length, total: null, emoji: "🏢" },
        ].map((stat, i) => (
          <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
            <Card>
              <CardContent className="p-4 text-center space-y-1">
                <span className="text-xl">{stat.emoji}</span>
                <p className="font-display text-2xl font-bold">{stat.value}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide">
                  {stat.label}{stat.total ? ` / ${stat.total}` : ""}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name or manager..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={teamFilter} onValueChange={setTeamFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by team" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Teams</SelectItem>
            {teams.map((t) => (
              <SelectItem key={t} value={t}>{t}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Roster Table */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Users className="h-4 w-4" />
            Participant Roster
            <Badge variant="secondary" className="text-[10px] ml-auto">{filtered.length} shown</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="rounded-b-lg border-t">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-display">Name</TableHead>
                  <TableHead className="font-display hidden md:table-cell">Manager</TableHead>
                  <TableHead className="font-display">Team</TableHead>
                  <TableHead className="font-display hidden sm:table-cell">Location</TableHead>
                  <TableHead className="font-display text-center">Active</TableHead>
                  <TableHead className="font-display text-center">🤖</TableHead>
                  <TableHead className="font-display text-center">💖</TableHead>
                  <TableHead className="font-display text-center">🎭</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((p) => (
                  <TableRow key={p.name}>
                    <TableCell className="font-medium text-sm">{p.name}</TableCell>
                    <TableCell className="text-sm text-muted-foreground hidden md:table-cell">{p.manager}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-[10px]">{p.team}</Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground hidden sm:table-cell">{p.location}</TableCell>
                    <TableCell className="text-center">
                      {p.participating ? (
                        <CheckCircle2 className="h-4 w-4 text-accent mx-auto" />
                      ) : (
                        <XCircle className="h-4 w-4 text-muted-foreground/40 mx-auto" />
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {p.chatgptAccess ? <CheckCircle2 className="h-4 w-4 text-accent mx-auto" /> : <span className="text-muted-foreground/30">—</span>}
                    </TableCell>
                    <TableCell className="text-center">
                      {p.lovableAccess ? <CheckCircle2 className="h-4 w-4 text-accent mx-auto" /> : <span className="text-muted-foreground/30">—</span>}
                    </TableCell>
                    <TableCell className="text-center">
                      {p.claudeAccess ? <CheckCircle2 className="h-4 w-4 text-accent mx-auto" /> : <span className="text-muted-foreground/30">—</span>}
                    </TableCell>
                  </TableRow>
                ))}
                {filtered.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                      No participants match your filters.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Admin;

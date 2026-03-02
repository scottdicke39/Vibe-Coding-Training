/**
 * Participant roster for Hack Day.
 * Parsed from the AI Tooling Access spreadsheet.
 * 
 * SUPABASE MIGRATION: Replace with `participants` table + sync from Google Sheet.
 */

export interface Participant {
  name: string;
  manager: string;
  team: "Talent" | "People" | "Total Rewards" | "Leadership";
  participating: boolean;
  location: "East" | "West" | "EMEA";
  chatgptAccess: boolean;
  lovableAccess: boolean;
  claudeAccess: boolean;
  cursorAccess: boolean;
}

export const participants: Participant[] = [
  // ── Talent ──
  { name: "Scott Dicke", manager: "Camila Ribeiro", team: "Talent", participating: true, location: "West", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Ramiro Molina", manager: "Scott Dicke", team: "Talent", participating: true, location: "West", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Somie Shiraki", manager: "Ramiro Molina", team: "Talent", participating: true, location: "West", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "James Frederick", manager: "Ramiro Molina", team: "Talent", participating: true, location: "East", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Hiro Onizuka", manager: "Ramiro Molina", team: "Talent", participating: true, location: "West", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Nicole Pryt", manager: "Ramiro Molina", team: "Talent", participating: true, location: "West", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Sofia Bourne", manager: "Ramiro Molina", team: "Talent", participating: true, location: "West", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Fana Aregawie", manager: "Ramiro Molina", team: "Talent", participating: true, location: "East", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Jamie Jacobs", manager: "Scott Dicke", team: "Talent", participating: true, location: "West", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Luke Losin", manager: "Jamie Jacobs", team: "Talent", participating: true, location: "West", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Derek Scott", manager: "Jamie Jacobs", team: "Talent", participating: true, location: "West", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Doran Ingalls", manager: "Jamie Jacobs", team: "Talent", participating: true, location: "West", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Amanda Norden", manager: "Jamie Jacobs", team: "Talent", participating: true, location: "West", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Lauren Yu", manager: "Jamie Jacobs", team: "Talent", participating: true, location: "West", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Callista Wong", manager: "Scott Dicke", team: "Talent", participating: true, location: "West", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Erica Lee", manager: "Scott Dicke", team: "Talent", participating: true, location: "East", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Josie Colin", manager: "Scott Dicke", team: "Talent", participating: true, location: "West", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Mark Molo", manager: "Jamie Jacobs", team: "Talent", participating: true, location: "West", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Chloe Fillinger", manager: "Jamie Jacobs", team: "Talent", participating: true, location: "West", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Hilary Straw", manager: "Ramiro Molina", team: "Talent", participating: true, location: "West", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },

  // ── People ──
  { name: "Valeria Garcia", manager: "Camila Ribeiro", team: "People", participating: false, location: "EMEA", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Camila Ribeiro", manager: "Garret Lord", team: "Leadership", participating: true, location: "West", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Katie Viamari", manager: "Camila Ribeiro", team: "People", participating: true, location: "West", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Julia Lawton", manager: "Katie Viamari", team: "People", participating: true, location: "West", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Susan Biancani", manager: "Camila Ribeiro", team: "People", participating: true, location: "West", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Samiha Hamadi", manager: "Julia Lawton", team: "People", participating: true, location: "West", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Emely Ibarra", manager: "Julia Lawton", team: "People", participating: true, location: "West", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Liz Thomas", manager: "Camila Ribeiro", team: "People", participating: true, location: "West", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Dan Jin", manager: "Liz Thomas", team: "People", participating: true, location: "West", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Mario Ramirez", manager: "Julia Lawton", team: "People", participating: true, location: "West", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Lizzy Keane", manager: "Camila Ribeiro", team: "People", participating: true, location: "West", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Molly McKnight", manager: "Camila Ribeiro", team: "People", participating: true, location: "West", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Alison Hendrickx", manager: "Camila Ribeiro", team: "People", participating: true, location: "West", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Jay Carabello", manager: "Alison Hendrickx", team: "People", participating: true, location: "East", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Jon Stull", manager: "Garret Lord", team: "Leadership", participating: true, location: "West", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },

  // ── Total Rewards ──
  { name: "Rae Lyn Rushing", manager: "Jon Stull", team: "Total Rewards", participating: true, location: "West", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Tyler Nails", manager: "Rae Lyn Rushing", team: "Total Rewards", participating: true, location: "East", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Cheryl Rose", manager: "Rae Lyn Rushing", team: "Total Rewards", participating: true, location: "East", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Ricky Espy", manager: "Rae Lyn Rushing", team: "Total Rewards", participating: true, location: "East", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Ashley Corley", manager: "Rae Lyn Rushing", team: "Total Rewards", participating: true, location: "West", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
  { name: "Jolie Ma", manager: "Rae Lyn Rushing", team: "Total Rewards", participating: true, location: "West", chatgptAccess: true, lovableAccess: true, claudeAccess: true, cursorAccess: false },
];

// ── Helpers ──

export function getTeams(): string[] {
  return [...new Set(participants.map((p) => p.team))].sort();
}

export function getParticipantsByTeam(team: string): Participant[] {
  return participants.filter((p) => p.team === team);
}

export function getParticipatingCount(): number {
  return participants.filter((p) => p.participating).length;
}

export function getToolAccessSummary() {
  const active = participants.filter((p) => p.participating);
  return {
    total: active.length,
    chatgpt: active.filter((p) => p.chatgptAccess).length,
    lovable: active.filter((p) => p.lovableAccess).length,
    claude: active.filter((p) => p.claudeAccess).length,
    cursor: active.filter((p) => p.cursorAccess).length,
  };
}

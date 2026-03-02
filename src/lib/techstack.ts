/**
 * Current tech stack data — pulled from Notion Training Guide.
 * These are the existing systems at Handshake that hack day projects
 * can connect to or extend.
 */

export interface TechSystem {
  name: string;
  emoji: string;
  description: string;
  usedBy: string[];
  projectRelevance: string;
  hasApi: boolean;
  hasWebhooks: boolean;
  category: "recruiting" | "people" | "compensation" | "collaboration" | "internal";
}

export const techStack: TechSystem[] = [
  {
    name: "Ashby",
    emoji: "📋",
    description:
      "Applicant tracking system. Job postings, candidate pipelines, interview scheduling, offer management, reporting, and email templates. Offer signatures handled through Dropbox Sign integration.",
    usedBy: ["Recruiting", "Rec Ops", "Hiring Managers"],
    projectRelevance:
      "Source of truth for all candidate data. Has APIs and CSV exports. Most recruiting project ideas will touch Ashby data in some way.",
    hasApi: true,
    hasWebhooks: true,
    category: "recruiting",
  },
  {
    name: "BrightHire",
    emoji: "🎙️",
    description:
      "Interview recording and analysis. Captures structured interview data, question patterns, interviewer behavior, and feedback.",
    usedBy: ["Recruiting", "Hiring Managers", "Interviewers"],
    projectRelevance:
      "Rich source of interview quality data. Useful for interviewer coaching, debrief summaries, and pattern analysis.",
    hasApi: true,
    hasWebhooks: false,
    category: "recruiting",
  },
  {
    name: "CodeSignal",
    emoji: "💻",
    description:
      "Technical assessments for engineering candidates. Pre-built and custom assessment catalog with scoring and benchmarks.",
    usedBy: ["Recruiting", "Engineering Hiring Managers"],
    projectRelevance:
      "Assessment scores feed into hiring decisions. Could build tools to explain results to non-technical HMs.",
    hasApi: true,
    hasWebhooks: false,
    category: "recruiting",
  },
  {
    name: "Noon.ai",
    emoji: "🔎",
    description: "AI-powered sourcing tool for candidate discovery and outreach.",
    usedBy: ["Recruiting"],
    projectRelevance:
      "Generates candidate pipelines. Could connect sourcing data to pipeline analytics.",
    hasApi: true,
    hasWebhooks: false,
    category: "recruiting",
  },
  {
    name: "Workday",
    emoji: "🏢",
    description:
      "HRIS. Source of truth for employee data, positions, org structure, comp data, and headcount.",
    usedBy: ["People Ops", "HRBPs", "Comp", "Finance"],
    projectRelevance:
      "The system of record for everything employee-related. Most People Ops and Comp projects will reference Workday data.",
    hasApi: true,
    hasWebhooks: true,
    category: "people",
  },
  {
    name: "Pave",
    emoji: "💰",
    description:
      "Compensation benchmarking and band management. Market pricing, offer calibration, equity analysis.",
    usedBy: ["Comp", "Recruiting"],
    projectRelevance:
      "Comp data lives here. Great source for visualization and analysis projects.",
    hasApi: true,
    hasWebhooks: false,
    category: "compensation",
  },
  {
    name: "Carta",
    emoji: "📈",
    description:
      "Equity management platform. Cap table, stock option grants, vesting schedules.",
    usedBy: ["Comp", "Finance", "Legal"],
    projectRelevance:
      "Equity data for total rewards calculations and offer modeling.",
    hasApi: true,
    hasWebhooks: false,
    category: "compensation",
  },
  {
    name: "Linear",
    emoji: "📐",
    description:
      "Project management for headcount approval workflow. Each approved position becomes a tracked issue.",
    usedBy: ["Recruiting", "Finance", "Leadership"],
    projectRelevance:
      "Headcount status lives here. ChatGPT connectors can read Linear directly.",
    hasApi: true,
    hasWebhooks: true,
    category: "collaboration",
  },
  {
    name: "Notion",
    emoji: "📝",
    description:
      "Internal wiki, playbooks, process documentation, meeting notes, team pages.",
    usedBy: ["Everyone"],
    projectRelevance:
      "Where all our knowledge lives. Glean indexes it. ChatGPT can connect to it. Many projects will reference Notion content.",
    hasApi: true,
    hasWebhooks: true,
    category: "collaboration",
  },
  {
    name: "Slack",
    emoji: "💬",
    description:
      "Team communication. Bots for pipeline updates, referral tracking, and notifications.",
    usedBy: ["Everyone"],
    projectRelevance:
      "Where people actually work. Projects that surface info in Slack (summaries, alerts, Q&A) tend to get used.",
    hasApi: true,
    hasWebhooks: true,
    category: "collaboration",
  },
  {
    name: "Google Workspace",
    emoji: "📧",
    description: "Email, calendar, docs, sheets, slides.",
    usedBy: ["Everyone"],
    projectRelevance:
      "Claude Cowork connects here. Calendar data useful for scheduling tools.",
    hasApi: true,
    hasWebhooks: false,
    category: "collaboration",
  },
  {
    name: "Glean",
    emoji: "🔍",
    description:
      "Enterprise search across all internal tools. Agent Builder for no-code AI agents.",
    usedBy: ["Everyone"],
    projectRelevance:
      "Already indexes everything. Best foundation for FAQ bots and knowledge navigators.",
    hasApi: true,
    hasWebhooks: false,
    category: "collaboration",
  },
  {
    name: "RecruitingIQ",
    emoji: "🧠",
    description:
      "Internal recruiting operations platform. JD creation, role launching, headcount approval, hiring sprints, recruiter capacity planning, interviewer analysis, CodeSignal assessment design, ScholarLens, Hire Intelligence, asset library, and outreach content.",
    usedBy: ["Recruiting Team"],
    projectRelevance:
      "Already has a lot built. Your hack day project might complement or extend something here rather than duplicating it.",
    hasApi: true,
    hasWebhooks: false,
    category: "internal",
  },
];

export const apiWebhookContent = {
  apiDefinition:
    "An API (Application Programming Interface) is a way for two systems to talk to each other. When you log into Ashby and see a candidate's pipeline stage, Ashby is using its own internal API to fetch that data.",
  apiAnalogy:
    "Think of an API like a restaurant menu. You (the app) place an order (a request) from a list of available dishes (endpoints). The kitchen (the server) prepares the dish and brings it back to you (the response).",
  webhookDefinition:
    "A webhook is the reverse of an API call. Instead of you asking a system for data, the system pushes data to you when something happens.",
  webhookAnalogy:
    "It's like getting a text notification instead of checking your phone every 5 minutes.",
  hackDayNote:
    "Most hack day projects will use sample data (uploaded CSVs, typed-in numbers). That's totally fine. But if your idea eventually becomes a real tool, connecting it to live data happens through APIs and webhooks.",
  importantWarning:
    "Connecting to live APIs in our production systems (Ashby, Workday, BrightHire, etc.) requires coordination with your Team Captain. Discuss your use case with them first to see if it's feasible. API keys are sensitive credentials that control access to real data — never set up live API connections without approval.",
  quickRef: [
    { term: "API", description: "You ask a system for data and it sends it back", analogy: "Ordering from a restaurant menu" },
    { term: "Webhook", description: "A system pushes data to you when something happens", analogy: "Getting a text notification" },
    { term: "API Key", description: "A secret password that lets your app talk to another system", analogy: "A VIP badge that gets you into the kitchen" },
    { term: "Endpoint", description: "A specific URL that returns specific data from an API", analogy: "A specific dish on the menu" },
    { term: "Connector", description: "A pre-built API connection (e.g., ChatGPT's Notion connector)", analogy: "A bridge someone already built for you" },
  ],
  toolIntegrations: [
    { tool: "ChatGPT Connectors", description: "Pre-built API connections (Notion, Linear, Google Calendar). Just turn them on." },
    { tool: "Glean", description: "Already has API connections to 100+ tools. You don't configure anything." },
    { tool: "Lovable", description: "Can connect to APIs through Lovable Cloud — more of an after-hack-day activity." },
  ],
};

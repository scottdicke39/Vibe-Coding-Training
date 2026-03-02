/* ============================================================
   TRAINING CONTENT — ported & expanded from the original repo
   ============================================================ */

export interface ToolInfo {
  id: string;
  name: string;
  emoji: string;
  tagline: string;
  colorClass: string;
  bgClass: string;
  description: string;
  whyItMatters: string;
  howItWorks: string[];
  features: { title: string; description: string }[];
  keyConcept: { title: string; description: string };
  accessNotes: string;
  goDeeper: { label: string; url: string; description: string }[];
  proTip: string;
  quiz: QuizQuestion[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Concept {
  term: string;
  emoji: string;
  definition: string;
  analogy: string;
}

export interface Recipe {
  id: string;
  title: string;
  emoji: string;
  tool: string;
  toolColor: string;
  duration: string;
  steps: string[];
  successLine: string;
}

export interface ProjectIdea {
  id: number;
  title: string;
  category: string;
  tools: string[];
  difficulty: "Starter" | "Intermediate" | "Advanced";
  description: string;
  prompt: string;
}

// ─── TOOLS ───────────────────────────────────────────────────

export const tools: ToolInfo[] = [
  {
    id: "lovable",
    name: "Lovable",
    emoji: "💖",
    tagline: "Build real web apps by describing what you want",
    colorClass: "tool-lovable",
    bgClass: "bg-tool-lovable",
    description:
      "Lovable is an AI-powered app builder that turns plain-English descriptions into fully functional web applications. No coding required — just describe what you want and watch it build.",
    whyItMatters:
      "P&T teams can build internal tools, dashboards, and workflow apps without waiting for engineering resources. Need a comp-data explorer? A PTO tracker? An onboarding checklist app? Describe it and ship it.",
    howItWorks: [
      "Describe the app you want in plain English",
      "Lovable generates a working app in real-time",
      "Preview your app instantly in the browser",
      "Iterate by chatting — refine layouts, add features",
      "Publish with one click or connect a custom domain",
    ],
    features: [
      { title: "AI Chat Builder", description: "Describe features in natural language and watch them appear" },
      { title: "Real-Time Preview", description: "See your app update live as you chat" },
      { title: "Lovable Cloud", description: "Add databases, auth, and backends with one click" },
      { title: "One-Click Publish", description: "Deploy instantly to a shareable URL" },
      { title: "Visual Edits", description: "Click elements to edit text, colors, and fonts directly" },
      { title: "GitHub Sync", description: "Export code to GitHub for developer handoff" },
    ],
    keyConcept: {
      title: "Vibe Coding",
      description:
        "A new paradigm where you describe the *vibe* of what you want — the feel, the purpose, the user experience — and AI translates that into a working app. You don't need to know any programming languages. You just need to know what problem you're solving.",
    },
    accessNotes:
      "Lovable accounts will be provisioned for hack day participants. Look for your invite email or check with your team lead.",
    goDeeper: [
      { label: "Lovable Documentation", url: "https://docs.lovable.dev/", description: "Official guides, tutorials, and feature docs" },
      { label: "Build a Full-Stack App (Video)", url: "https://www.youtube.com/watch?v=9KHLTZaJcR8&list=PLbVHz4urQBZkJiAWdG8HWoJTdgEysigIO", description: "Step-by-step video series building a complete app" },
      { label: "Lovable Cloud Features", url: "https://docs.lovable.dev/features/cloud", description: "Database, auth, edge functions — all built in" },
    ],
    proTip: "Use ChatGPT or Claude to help you write better Lovable prompts! Describe what you want to build, ask the AI to help you write a detailed prompt, then paste it into Lovable. Using AI to prompt AI is a superpower. 🧠",
    quiz: [
      {
        question: "What is 'Vibe Coding'?",
        options: [
          "Writing code while listening to music",
          "Describing what you want in plain English and letting AI build it",
          "A new programming language",
          "Pair programming with a colleague",
        ],
        correctIndex: 1,
        explanation: "Vibe Coding means describing the vibe/intent of your app and letting AI generate the code!",
      },
      {
        question: "What backend does Lovable use for databases and auth?",
        options: ["Firebase", "Lovable Cloud", "MongoDB", "AWS Lambda"],
        correctIndex: 1,
        explanation: "Lovable Cloud provides built-in databases, authentication, and storage — no setup required.",
      },
      {
        question: "Do you need to know React to use Lovable?",
        options: ["Yes, coding experience is required", "No, you describe what you want in plain English", "Only for advanced features", "You need some technical background"],
        correctIndex: 1,
        explanation: "No coding knowledge required — Lovable generates all the code from your descriptions.",
      },
    ],
  },
  {
    id: "chatgpt",
    name: "ChatGPT Enterprise",
    emoji: "🤖",
    tagline: "Your AI assistant for analysis, writing, and automation",
    colorClass: "tool-chatgpt",
    bgClass: "bg-tool-chatgpt",
    description:
      "ChatGPT Enterprise is OpenAI's business-grade AI assistant. It can analyze data, draft communications, answer questions, summarize documents, and even build custom 'GPTs' — mini AI agents trained on your specific processes.",
    whyItMatters:
      "Every P&T team member can have an AI assistant that understands comp philosophy, HRBP playbooks, and People Ops processes. Custom GPTs let you 'train it once, use it forever.'",
    howItWorks: [
      "Log in via Okta SSO (search 'ChatGPT' in Okta)",
      "Ask questions, paste data, or upload files",
      "Use custom GPTs for specialized tasks",
      "Build your own GPTs with custom instructions",
      "Share GPTs with your team via workspace",
    ],
    features: [
      { title: "Data Analysis", description: "Upload spreadsheets and get instant insights" },
      { title: "Custom GPTs", description: "Build specialized AI agents for your workflows" },
      { title: "Document Drafting", description: "Generate memos, policies, and communications" },
      { title: "Code Interpreter", description: "Run Python code for data analysis and visualization" },
      { title: "File Upload", description: "Analyze PDFs, CSVs, and other documents" },
      { title: "Web Browsing", description: "Search the web for current information" },
    ],
    keyConcept: {
      title: "Custom GPTs — Train It Once, Use It Forever",
      description:
        "A Custom GPT is a specialized version of ChatGPT with custom instructions, knowledge files, and specific behaviors. Build one for your comp philosophy, and every manager can use it to get consistent guidance. The magic: you set it up once, and the whole team benefits forever.",
    },
    accessNotes:
      "Access via Okta SSO — search 'ChatGPT' in your Okta dashboard. Enterprise license is already provisioned for P&T.",
    goDeeper: [
      { label: "ChatGPT Enterprise Guide", url: "https://openai.com/enterprise", description: "Overview of Enterprise features and security" },
      { label: "Custom GPTs Guide", url: "https://help.openai.com/en/articles/8554397-creating-a-gpt", description: "How to create and share Custom GPTs" },
      { label: "Prompting Best Practices", url: "https://platform.openai.com/docs/guides/prompt-engineering", description: "Official guide to writing better prompts" },
    ],
    proTip: "Stack your AIs! Use Claude to draft a detailed Custom GPT system prompt, then paste it into ChatGPT to create the GPT. Different models have different strengths — combine them for better results. 🔄",
    quiz: [
      {
        question: "What makes Custom GPTs powerful for teams?",
        options: [
          "They're free",
          "Train once, use forever — consistent guidance for everyone",
          "They replace managers",
          "They only work for engineering teams",
        ],
        correctIndex: 1,
        explanation: "Custom GPTs encode your team's knowledge so everyone gets consistent, expert-level guidance.",
      },
      {
        question: "How do you access ChatGPT Enterprise at Handshake?",
        options: ["Download from App Store", "Via Okta SSO", "Ask IT for a license key", "Use your personal account"],
        correctIndex: 1,
        explanation: "Search 'ChatGPT' in your Okta dashboard to access the Enterprise version.",
      },
      {
        question: "Can ChatGPT analyze spreadsheet data?",
        options: ["No, it only handles text", "Yes, via file upload and Code Interpreter", "Only with a plugin", "Only CSVs under 100 rows"],
        correctIndex: 1,
        explanation: "ChatGPT Enterprise supports file uploads and can run Python code to analyze your data.",
      },
    ],
  },
  {
    id: "claude",
    name: "Claude",
    emoji: "🎭",
    tagline: "Deep analysis and nuanced writing partner",
    colorClass: "tool-claude",
    bgClass: "bg-tool-claude",
    description:
      "Claude by Anthropic is an AI assistant known for careful reasoning, nuanced analysis, and thoughtful writing. It excels at working with long documents, complex analysis, and tasks requiring attention to detail.",
    whyItMatters:
      "For compensation analysis, policy review, and nuanced communication drafting, Claude's careful reasoning makes it ideal. It handles 200K+ token context windows — perfect for analyzing entire comp surveys or policy documents.",
    howItWorks: [
      "Request a Claude seat through your manager (paid per seat)",
      "Log in at claude.ai with your work email",
      "Paste documents, data, or questions",
      "Use Projects to organize related conversations",
      "Leverage Artifacts for code, documents, and visualizations",
    ],
    features: [
      { title: "200K Context Window", description: "Analyze entire documents, surveys, and datasets at once" },
      { title: "Artifacts", description: "Generate interactive code, charts, and documents inline" },
      { title: "Projects", description: "Organize conversations and knowledge by topic" },
      { title: "Nuanced Reasoning", description: "Careful, detailed analysis with fewer hallucinations" },
      { title: "Long-Form Writing", description: "Draft policies, reviews, and communications" },
      { title: "Data Analysis", description: "Deep dive into comp data and workforce analytics" },
    ],
    keyConcept: {
      title: "Context Windows — Feed It Everything",
      description:
        "Claude's massive context window means you can paste an entire comp survey, a full policy document, or months of data — and Claude processes it all at once. No chunking, no summarizing first. Just drop it in and ask questions.",
    },
    accessNotes:
      "Claude requires a paid seat (~$20/month). Request through your manager. Worth it for heavy analysis work.",
    goDeeper: [
      { label: "Claude User Guide", url: "https://docs.anthropic.com/en/docs/quickstart", description: "Getting started with Claude — prompts, projects, artifacts" },
      { label: "Claude Prompt Library", url: "https://docs.anthropic.com/en/prompt-library/overview", description: "Ready-to-use prompt templates for common tasks" },
      { label: "Claude Projects", url: "https://docs.anthropic.com/en/docs/build-with-claude/projects", description: "Organize conversations and knowledge by topic" },
    ],
    proTip: "Claude's massive context window is your secret weapon. Paste an entire policy doc or comp survey and ask Claude to build you a Glean agent prompt or a ChatGPT Custom GPT around it. Let one AI teach another! 🎭",
    quiz: [
      {
        question: "What is Claude's standout feature for document analysis?",
        options: ["Speed", "200K+ token context window", "Voice input", "Free access"],
        correctIndex: 1,
        explanation: "Claude can process enormous documents in a single conversation — no need to split them up.",
      },
      {
        question: "What are Claude 'Artifacts'?",
        options: ["Historical documents", "Interactive code, charts, and documents generated inline", "Saved conversation history", "File attachments"],
        correctIndex: 1,
        explanation: "Artifacts are interactive outputs — code snippets, visualizations, documents — that Claude generates right in the chat.",
      },
      {
        question: "How much does a Claude seat cost?",
        options: ["Free", "~$20/month per seat", "$100/year", "Included with Okta"],
        correctIndex: 1,
        explanation: "Claude seats are ~$20/month. Request through your manager for hack day.",
      },
    ],
  },
  {
    id: "glean",
    name: "Glean",
    emoji: "🔍",
    tagline: "Search across all your company's knowledge instantly",
    colorClass: "tool-glean",
    bgClass: "bg-tool-glean",
    description:
      "Glean is an enterprise AI search and knowledge platform. It connects to all your company's tools — Google Drive, Slack, Confluence, HRIS — and lets you search, ask questions, and build AI agents across all of them.",
    whyItMatters:
      "P&T generates mountains of policies, playbooks, and tribal knowledge spread across dozens of tools. Glean brings it all together so anyone can ask 'Who handles relocation?' and get the right answer instantly.",
    howItWorks: [
      "Glean is already connected to Handshake's key systems",
      "Search across all connected data sources at once",
      "Ask natural-language questions and get AI-generated answers",
      "Build custom Glean Apps (agents) for specific workflows",
      "Pin important answers for your team",
    ],
    features: [
      { title: "Universal Search", description: "Search across Google Drive, Slack, Confluence, and more" },
      { title: "AI Answers", description: "Get synthesized answers from multiple sources" },
      { title: "Glean Apps", description: "Build custom AI agents for team-specific workflows" },
      { title: "Knowledge Graph", description: "Understands who knows what and who owns which processes" },
      { title: "Slack Integration", description: "Ask Glean questions directly in Slack" },
      { title: "Permissions-Aware", description: "Respects existing access controls — no data leaks" },
    ],
    keyConcept: {
      title: "Connectors — AI That Knows Your Company",
      description:
        "Glean's power comes from its connectors — integrations with Google Drive, Slack, HRIS, Confluence, and more. Unlike ChatGPT, which only knows what you paste in, Glean already knows your company's data. It's the difference between a smart stranger and a smart coworker.",
    },
    accessNotes:
      "Glean is available company-wide. Access at glean.handshake.com or via the Slack integration.",
    goDeeper: [
      { label: "Glean Agents", url: "https://joinhandshake.glean.com/chat/agents", description: "Browse and try existing agents — including the Daily Rundown Agent!" },
      { label: "Create Your First Agent", url: "https://docs.glean.com/agents/create-agents/create-your-first-agent", description: "Step-by-step guide to building your own Glean agent" },
      { label: "Agent Templates", url: "https://docs.glean.com/agents/templates", description: "Pre-built templates to jumpstart your agent" },
      { label: "Publish to Slack", url: "https://docs.glean.com/agents/concepts/publish-slack", description: "Make your agent accessible right in Slack" },
    ],
    proTip: "Try the Daily Rundown Agent — it scans Slack, email, Google Drive, Notion, and Linear to give you a full update on everything that happened. Then use ChatGPT or Claude to help you design your OWN custom agent! 🚀",
    quiz: [
      {
        question: "What makes Glean different from ChatGPT for company questions?",
        options: [
          "It's faster",
          "It's connected to your company's actual data and tools",
          "It has a better UI",
          "It's free",
        ],
        correctIndex: 1,
        explanation: "Glean connects to your actual company tools, so it knows your data without you pasting it in.",
      },
      {
        question: "What is a 'Glean App'?",
        options: ["A mobile app", "A custom AI agent built on your company data", "A Chrome extension", "A Slack bot"],
        correctIndex: 1,
        explanation: "Glean Apps are custom AI agents that leverage your company's knowledge for specific workflows.",
      },
      {
        question: "Does Glean respect document permissions?",
        options: ["No, everyone sees everything", "Yes, it's permissions-aware", "Only for Google Drive", "Only for admins"],
        correctIndex: 1,
        explanation: "Glean respects existing access controls — you only see data you already have permission to access.",
      },
    ],
  },
];

// ─── CONCEPTS ────────────────────────────────────────────────

export const concepts: Concept[] = [
  { term: "Vibe Coding", emoji: "🎵", definition: "Describing the feel and purpose of an app in plain English and letting AI generate the code. You focus on WHAT, AI handles HOW.", analogy: "Like telling an architect 'I want a cozy, open-plan kitchen with lots of light' instead of drawing the blueprints yourself." },
  { term: "Custom GPT", emoji: "🤖", definition: "A specialized version of ChatGPT with custom instructions and knowledge files, tailored for a specific task or domain.", analogy: "Like hiring a consultant and giving them a binder of your company's processes — they become an expert in YOUR way of doing things." },
  { term: "Prompt Engineering", emoji: "✍️", definition: "The art of writing clear, specific instructions to get the best output from an AI. Good prompts include context, constraints, and desired format.", analogy: "Like giving cooking instructions: 'Make pasta' gets you something basic. 'Make al dente penne with a spicy arrabbiata sauce, serves 4' gets exactly what you want." },
  { term: "Hallucination", emoji: "🌀", definition: "When AI generates plausible-sounding but incorrect or made-up information. AI doesn't 'know' things — it predicts likely next words.", analogy: "Like asking a confident friend for directions — they'll give you an answer even when they're not sure, and sound completely certain doing it." },
  { term: "Lovable Cloud", emoji: "☁️", definition: "The backend infrastructure built into Lovable that provides databases, authentication, storage, and server-side logic. It's what turns a one-time prototype into a lasting tool.", analogy: "If your app is a restaurant, Lovable Cloud is the kitchen, pantry, and reservation system all in one. Without it, you're just serving one meal." },
  { term: "MCP (Model Context Protocol)", emoji: "🔌", definition: "A standard for connecting AI models to external tools and data sources. Think of it as USB-C for AI — one standard protocol that connects everything.", analogy: "Before USB-C, every device had its own charger. MCP is the universal connector that lets AI tools talk to databases, APIs, and other systems." },
  { term: "Connectors", emoji: "🔗", definition: "Integrations that connect AI tools to your company's data sources (Google Drive, Slack, HRIS, etc.) so the AI can access real information.", analogy: "Like giving your new employee access to all the shared drives on their first day — suddenly they can actually find things and do their job." },
  { term: "AI Agent", emoji: "🤝", definition: "An AI system that can take multi-step actions autonomously — not just answer questions but actually DO things like search, analyze, and complete tasks.", analogy: "The difference between a search engine (answers questions) and a personal assistant (takes action). An agent doesn't just find your flight options — it books the ticket." },
];

// ─── ADVANCED / UNDER THE HOOD CONCEPTS ─────────────────────

export interface AdvancedConcept {
  term: string;
  emoji: string;
  definition: string;
  whyYouDontNeedToKnow: string;
}

export const advancedConcepts: AdvancedConcept[] = [
  { term: "Frontend", emoji: "🖥️", definition: "The part of an app that users see and interact with — buttons, pages, forms, charts. Think of it as the 'face' of the app.", whyYouDontNeedToKnow: "Lovable handles this automatically. When you describe what you want, it builds the frontend for you." },
  { term: "Backend", emoji: "⚙️", definition: "The behind-the-scenes part that stores data, handles logins, and runs logic. It's the 'brain' that remembers things after you close the browser.", whyYouDontNeedToKnow: "Lovable Cloud adds a backend with one click. You don't configure servers." },
  { term: "React", emoji: "⚛️", definition: "A popular way to build interactive web apps. It's what Lovable uses under the hood to create the apps you describe.", whyYouDontNeedToKnow: "You'll never write React code. Lovable generates it from your descriptions. It's like knowing your car has an engine — useful trivia, not required to drive." },
  { term: "TypeScript", emoji: "📘", definition: "A programming language that adds safety checks to JavaScript (the language of the web). It catches mistakes before they happen.", whyYouDontNeedToKnow: "Again, Lovable writes this for you. The AI handles the technical details so you can focus on what the app should DO." },
  { term: "API", emoji: "🔌", definition: "A way for two systems to talk to each other. When Ashby shows you a candidate's info, it's using an API behind the scenes to fetch that data.", whyYouDontNeedToKnow: "For hack day, most projects use sample data. If you want to connect to a live API, talk to your Team Captain first." },
  { term: "Webhook", emoji: "📡", definition: "An automatic notification between systems. Instead of checking for updates, the system tells YOU when something changes — like getting a text instead of refreshing your inbox.", whyYouDontNeedToKnow: "Webhooks are an 'after hack day' feature. Focus on building something great with sample data first." },
  { term: "Database", emoji: "🗄️", definition: "Where your app stores information permanently. Without one, your app forgets everything when you close the browser — like a whiteboard that gets erased every night.", whyYouDontNeedToKnow: "Lovable Cloud gives you a database automatically. You just describe what data you want to save." },
  { term: "Deployment / Publishing", emoji: "🚀", definition: "Making your app available on the internet so other people can use it. Before deployment, only you can see it.", whyYouDontNeedToKnow: "In Lovable, it's literally one button click. In ChatGPT, you share a Custom GPT link. No server configuration needed." },
];

export const conceptsQuiz: QuizQuestion[] = [
  { question: "What does 'hallucination' mean in AI?", options: ["The AI is dreaming", "The AI generates plausible but incorrect information", "The AI can see images", "The AI crashes"], correctIndex: 1, explanation: "AI hallucinations are confident-sounding but incorrect outputs." },
  { question: "Why is Lovable Cloud important for lasting tools?", options: ["It's free", "It provides persistent storage, auth, and real backends", "It makes apps faster", "It's a design tool"], correctIndex: 1, explanation: "Without a backend like Lovable Cloud, your tools lose their data when the page refreshes." },
  { question: "What is MCP?", options: ["Master Control Program", "Model Context Protocol — a universal connector standard for AI", "Machine Code Parser", "Multi-Channel Platform"], correctIndex: 1, explanation: "MCP is the 'USB-C for AI' — a standard way to connect AI models to external tools." },
  { question: "What's the difference between a prompt and a Custom GPT?", options: ["Nothing, they're the same", "A prompt is one-time; a Custom GPT has persistent instructions and knowledge", "Custom GPTs are more expensive", "Prompts are for Claude only"], correctIndex: 1, explanation: "Custom GPTs retain their instructions and knowledge across conversations — they're reusable." },
];

// ─── RECIPES ─────────────────────────────────────────────────

export const recipes: Recipe[] = [
  {
    id: "comp-explorer",
    title: "Build a Comp Data Explorer",
    emoji: "📊",
    tool: "Lovable",
    toolColor: "tool-lovable",
    duration: "15 min",
    steps: [
      "Open Lovable and start a new project",
      "Describe: 'Build a dashboard that lets me upload a CSV of compensation data and visualize salary ranges by department, level, and location'",
      "Review the generated app — it'll create upload, filtering, and chart components",
      "Iterate: 'Add a comparison view that shows market data vs. our ranges'",
      "Iterate: 'Add a data table below the charts with search and sort'",
      "Click Publish to share with your team",
    ],
    successLine: "🎉 You just built a comp data tool without writing a single line of code!",
  },
  {
    id: "coaching-gpt",
    title: "Create a Manager Coaching GPT",
    emoji: "🎓",
    tool: "ChatGPT",
    toolColor: "tool-chatgpt",
    duration: "10 min",
    steps: [
      "Go to ChatGPT Enterprise via Okta SSO",
      "Click 'Create a GPT' in the sidebar",
      "Name it: 'P&T Manager Coach'",
      "Add instructions: 'You are a coaching assistant for People & Talent managers at Handshake. You help with compensation decisions, performance conversations, and team development. Always reference Handshake's comp philosophy and values.'",
      "Upload relevant documents: comp philosophy, manager playbook, values doc",
      "Test it: Ask 'How should I approach a promotion conversation with a high performer?'",
      "Share with your team via the workspace",
    ],
    successLine: "🎉 Every manager on your team now has a consistent coaching assistant!",
  },
  {
    id: "comp-analysis",
    title: "Analyze Comp Data with Claude",
    emoji: "🔬",
    tool: "Claude",
    toolColor: "tool-claude",
    duration: "10 min",
    steps: [
      "Open Claude and start a new conversation",
      "Upload your comp data CSV (or paste a sample)",
      "Ask: 'Analyze this compensation data. Identify any pay equity concerns across gender, ethnicity, and department. Flag outliers and suggest adjustments.'",
      "Follow up: 'Create a summary table of findings with recommended actions'",
      "Ask: 'Draft an executive summary of these findings for our VP of People'",
      "Use Claude's Artifact feature to get a polished document",
    ],
    successLine: "🎉 You just did a comp equity analysis that would've taken hours — in minutes!",
  },
  {
    id: "glean-agent",
    title: "Build a 'Who Handles This?' Agent",
    emoji: "🗺️",
    tool: "Glean",
    toolColor: "tool-glean",
    duration: "10 min",
    steps: [
      "Open Glean at glean.handshake.com",
      "Navigate to Glean Apps and click 'Create App'",
      "Name it: 'P&T Navigator'",
      "Set the instruction: 'Help employees find the right P&T team member for their question. Use our team directory, org chart, and process documentation to route questions.'",
      "Add relevant data sources: team directory, process docs, RACI charts",
      "Test it: Ask 'Who do I talk to about changing my benefits?'",
      "Share the app link in your team's Slack channel",
    ],
    successLine: "🎉 No more 'Who handles this?' Slack messages — your agent knows the answer!",
  },
];

// ─── PROJECT IDEAS ───────────────────────────────────────────

export const projectIdeas: ProjectIdea[] = [
  { id: 1, title: "Comp Data Explorer Dashboard", category: "Compensation", tools: ["Lovable"], difficulty: "Starter", description: "Upload CSV data and visualize salary ranges by department, level, and location with interactive charts.", prompt: "Build a web app that lets me upload a CSV of compensation data and creates interactive charts showing salary ranges by department, level, and location. Include filters and a data table." },
  { id: 2, title: "Manager Coaching GPT", category: "People Ops", tools: ["ChatGPT"], difficulty: "Starter", description: "A custom GPT that helps managers with comp decisions, performance conversations, and team development.", prompt: "Create a Custom GPT called 'P&T Manager Coach' that helps managers with compensation decisions, performance reviews, and career development conversations. Include Handshake's values and comp philosophy." },
  { id: 3, title: "Pay Equity Analyzer", category: "Compensation", tools: ["Claude"], difficulty: "Intermediate", description: "Analyze comp data for pay equity concerns across demographics with automated recommendations.", prompt: "Analyze this compensation data for pay equity issues across gender, ethnicity, department, and level. Identify statistically significant gaps, flag outliers, and recommend specific adjustments." },
  { id: 4, title: "P&T Knowledge Navigator", category: "People Ops", tools: ["Glean"], difficulty: "Starter", description: "An agent that routes employee questions to the right P&T team member.", prompt: "Build a Glean App called 'P&T Navigator' that helps employees find the right P&T team member for their question using our team directory and process documentation." },
  { id: 5, title: "Onboarding Checklist App", category: "People Ops", tools: ["Lovable"], difficulty: "Starter", description: "Interactive onboarding tracker with checklists, due dates, and progress indicators per new hire.", prompt: "Build an onboarding checklist web app where HR can create checklists for new hires with tasks, due dates, assignees, and progress tracking. Include a dashboard showing all new hires and their completion status." },
  { id: 6, title: "Job Description Generator", category: "Recruiting", tools: ["ChatGPT"], difficulty: "Starter", description: "Generate consistent, inclusive job descriptions from role requirements.", prompt: "Create a Custom GPT that generates inclusive, on-brand job descriptions. Input: role title, level, key responsibilities. Output: formatted JD with Handshake voice, inclusive language, and proper structure." },
  { id: 7, title: "Interview Debrief Summarizer", category: "Recruiting", tools: ["Claude"], difficulty: "Intermediate", description: "Summarize interview panel feedback into structured hiring recommendations.", prompt: "I'll paste interview feedback from multiple interviewers. Summarize into a structured debrief: strengths, concerns, competency ratings, and a hiring recommendation with reasoning." },
  { id: 8, title: "PTO Balance Tracker", category: "People Ops", tools: ["Lovable"], difficulty: "Intermediate", description: "A self-service PTO tracker with accrual calculations and manager approval workflow.", prompt: "Build a PTO tracking web app with employee self-service, accrual calculations, calendar view, manager approval workflow, and team availability dashboard." },
  { id: 9, title: "Comp Range Builder", category: "Compensation", tools: ["Lovable"], difficulty: "Intermediate", description: "Interactive tool for building and adjusting compensation ranges with market data comparison.", prompt: "Build a compensation range builder tool. Let users define job families, levels, and geo tiers. Show ranges as visual bands, compare against market data, and export to CSV." },
  { id: 10, title: "Employee FAQ Bot", category: "People Ops", tools: ["Glean", "ChatGPT"], difficulty: "Starter", description: "AI-powered FAQ that answers common employee questions using company documentation.", prompt: "Build a Glean App or Custom GPT that answers common employee questions about benefits, PTO policies, expense reimbursement, and workplace policies using our existing documentation." },
  { id: 11, title: "Performance Review Helper", category: "People Ops", tools: ["ChatGPT"], difficulty: "Intermediate", description: "Help managers write better performance reviews with examples and frameworks.", prompt: "Create a Custom GPT that helps managers write performance reviews. Include frameworks for giving feedback, example phrases for different rating levels, and prompts for development goals." },
  { id: 12, title: "Org Chart Visualizer", category: "People Ops", tools: ["Lovable"], difficulty: "Intermediate", description: "Interactive org chart that pulls from your HRIS data with search and filtering.", prompt: "Build an interactive org chart web app. Support drag-and-drop reorganization, search by name/department/title, and export to image. Allow upload of org data via CSV." },
  { id: 13, title: "Benefits Comparison Calculator", category: "Compensation", tools: ["Lovable"], difficulty: "Intermediate", description: "Help employees compare and understand their total compensation package.", prompt: "Build a total compensation calculator. Input: base salary, bonus target, equity, benefits selections. Output: visualized total comp breakdown with comparisons across benefit plan options." },
  { id: 14, title: "Recruiter Email Templates", category: "Recruiting", tools: ["ChatGPT"], difficulty: "Starter", description: "Generate personalized outreach emails for different candidate personas.", prompt: "Create a Custom GPT that generates personalized recruiter outreach emails. Input: role, candidate background, company differentiators. Output: compelling, authentic emails that reflect Handshake's voice." },
  { id: 15, title: "Headcount Planning Dashboard", category: "Recruiting", tools: ["Lovable"], difficulty: "Advanced", description: "Track open roles, pipeline metrics, and hiring targets with real-time updates.", prompt: "Build a headcount planning dashboard. Show open roles by department, hiring pipeline stages, time-to-fill metrics, and quarterly targets vs. actuals. Include CSV upload for data." },
  { id: 16, title: "Policy Document Search", category: "People Ops", tools: ["Glean"], difficulty: "Starter", description: "Instantly find and summarize relevant HR policies across all document sources.", prompt: "Build a Glean App that specializes in finding and summarizing HR policies. When someone asks a policy question, it should cite the source document and relevant section." },
  { id: 17, title: "Diversity Metrics Dashboard", category: "People Ops", tools: ["Lovable"], difficulty: "Advanced", description: "Visualize diversity and inclusion metrics across the organization with trend analysis.", prompt: "Build a D&I metrics dashboard. Upload demographic data and visualize representation by department, level, and function. Show trends over time, highlight gaps, and compare to industry benchmarks." },
  { id: 18, title: "Offer Letter Generator", category: "Recruiting", tools: ["ChatGPT", "Lovable"], difficulty: "Intermediate", description: "Generate customized offer letters from templates with proper comp details.", prompt: "Build an offer letter generator. Input: candidate name, role, level, comp package details. Output: formatted offer letter following Handshake's template with all legal language." },
  { id: 19, title: "Exit Interview Analyzer", category: "People Ops", tools: ["Claude"], difficulty: "Intermediate", description: "Analyze exit interview data to identify attrition trends and actionable insights.", prompt: "Analyze these exit interview responses. Identify recurring themes, categorize reasons for leaving, flag department-specific issues, and recommend retention strategies." },
  { id: 20, title: "Comp Cycle Workflow App", category: "Compensation", tools: ["Lovable"], difficulty: "Advanced", description: "End-to-end compensation review workflow with approvals, budgets, and notifications.", prompt: "Build a compensation cycle management app. Include employee review forms, manager recommendations, VP approvals, budget tracking, and notification system. Show progress through the cycle." },
  { id: 21, title: "Meeting Notes Summarizer", category: "People Ops", tools: ["Claude"], difficulty: "Starter", description: "Turn messy meeting notes into structured action items and decisions.", prompt: "I'll paste meeting notes. Summarize into: Key decisions made, Action items (with owners and deadlines), Open questions, and Follow-up meeting topics." },
  { id: 22, title: "Candidate Sourcing Assistant", category: "Recruiting", tools: ["ChatGPT"], difficulty: "Intermediate", description: "Help recruiters identify ideal candidate profiles and sourcing strategies.", prompt: "Create a Custom GPT that helps recruiters build candidate profiles and sourcing strategies. Input: role requirements, team context. Output: ideal candidate profile, sourcing channels, and Boolean search strings." },
  { id: 23, title: "Team Health Survey App", category: "People Ops", tools: ["Lovable"], difficulty: "Intermediate", description: "Anonymous pulse surveys with real-time results and trend tracking.", prompt: "Build a team health pulse survey app. Include customizable questions, anonymous responses, real-time result dashboards, and trend tracking over multiple survey periods." },
  { id: 24, title: "Recognition & Kudos Board", category: "People Ops", tools: ["Lovable"], difficulty: "Starter", description: "A fun peer recognition board where teammates can give kudos and shoutouts.", prompt: "Build a peer recognition board. Users can give kudos to teammates with categories (values-aligned, above & beyond, team player). Include a feed view, leaderboard, and Slack-like emoji reactions." },
  { id: 25, title: "Compensation Benchmarking Tool", category: "Compensation", tools: ["Claude", "Lovable"], difficulty: "Advanced", description: "Compare your comp data against market surveys with statistical analysis.", prompt: "Analyze our compensation data against market survey data. Calculate percentile positioning by role family and level, identify where we're below/above market, and recommend adjustments." },
  { id: 26, title: "Recruiting Pipeline Analyzer", category: "Recruiting", tools: ["Claude"], difficulty: "Intermediate", description: "Analyze recruiting funnel data to identify bottlenecks and optimize processes.", prompt: "Analyze this recruiting pipeline data. Identify conversion rate bottlenecks at each stage, compare across departments, flag roles stuck in pipeline, and recommend process improvements." },
  { id: 27, title: "Employee Handbook Chatbot", category: "People Ops", tools: ["Glean", "ChatGPT"], difficulty: "Intermediate", description: "An AI chatbot that can answer any question about company policies and procedures.", prompt: "Build an AI chatbot that answers employee questions about company policies, benefits, PTO, expense reimbursement, and workplace guidelines. It should cite specific handbook sections." },
  { id: 28, title: "Level Guide Explorer", category: "Compensation", tools: ["Lovable"], difficulty: "Starter", description: "Interactive career leveling guide with competencies and expectations per level.", prompt: "Build a career level guide explorer. Show levels (IC1-IC6, M1-M4) with competencies, expectations, and example behaviors. Include search and comparison between levels." },
  { id: 29, title: "Requisition Tracker", category: "Recruiting", tools: ["Lovable"], difficulty: "Intermediate", description: "Track job requisitions from approval through close with status updates.", prompt: "Build a requisition tracking app. Track reqs from creation through approval, posting, interviewing, and closure. Include status board view, filters, and reporting." },
  { id: 30, title: "Onboarding Buddy Matcher", category: "People Ops", tools: ["Lovable"], difficulty: "Starter", description: "Match new hires with onboarding buddies based on team, interests, and location.", prompt: "Build an onboarding buddy matching app. Input new hire profiles and potential buddies with attributes (team, interests, location, seniority). Output optimal matches with reasoning." },
  { id: 31, title: "Slack Channel Recommender", category: "People Ops", tools: ["Glean"], difficulty: "Starter", description: "Help new hires and employees discover relevant Slack channels based on their role.", prompt: "Build a Glean App that recommends relevant Slack channels based on an employee's role, department, interests, and common questions. Include descriptions of each channel." },
  { id: 32, title: "Interview Question Bank", category: "Recruiting", tools: ["ChatGPT", "Lovable"], difficulty: "Intermediate", description: "Searchable database of vetted interview questions organized by competency and role.", prompt: "Build an interview question bank app. Organize questions by competency (technical, behavioral, values), role type, and difficulty. Include scoring rubrics and follow-up question suggestions." },
  { id: 33, title: "Workforce Planning Model", category: "People Ops", tools: ["Claude", "Lovable"], difficulty: "Advanced", description: "Model future headcount needs based on growth projections and attrition data.", prompt: "Analyze our headcount data, growth projections, and historical attrition rates. Model future headcount needs by department, identify hiring priorities, and flag potential capacity risks." },
  { id: 34, title: "People Analytics Dashboard", category: "People Ops", tools: ["Lovable"], difficulty: "Advanced", description: "Comprehensive people analytics with turnover, engagement, and workforce metrics.", prompt: "Build a people analytics dashboard. Visualize turnover rates, headcount trends, time-to-fill, offer acceptance rates, and engagement scores. Include drill-down by department and trend analysis." },
  { id: 35, title: "Comp Communication Drafter", category: "Compensation", tools: ["ChatGPT"], difficulty: "Starter", description: "Generate clear, empathetic compensation change communications for managers.", prompt: "Create a Custom GPT that helps managers communicate compensation changes. Input: type of change (raise, promotion, no change), context. Output: empathetic, clear communication script." },
  { id: 36, title: "Recruiter CRM Lite", category: "Recruiting", tools: ["Lovable"], difficulty: "Advanced", description: "A lightweight candidate relationship manager for tracking sourced candidates.", prompt: "Build a lightweight recruiter CRM. Track sourced candidates with status, notes, follow-up dates, and tags. Include pipeline views, search, and email template management." },
  { id: 37, title: "Learning Path Creator", category: "People Ops", tools: ["Lovable"], difficulty: "Intermediate", description: "Build custom learning paths for different roles with progress tracking.", prompt: "Build a learning path creator. Define courses/resources for different roles, track completion, show progress, and suggest next steps. Include both required and optional content." },
  { id: 38, title: "Data Privacy Request Tracker", category: "People Ops", tools: ["Lovable"], difficulty: "Intermediate", description: "Track employee data privacy requests (GDPR, CCPA) with status and deadlines.", prompt: "Build a data privacy request tracker. Log requests by type (access, deletion, correction), track status and deadlines, assign to team members, and generate compliance reports." },
];

// ─── CODING TOOLS (IDE EXPLAINER) ────────────────────────────

export interface CodingTool {
  id: string;
  name: string;
  emoji: string;
  whatItIs: string;
  bestFor: string;
  analogy: string;
  needsTechnicalSkills: boolean;
  category: "all-in-one" | "code-editor";
}

export interface ToolComparison {
  toolA: string;
  toolB: string;
  emojiA: string;
  emojiB: string;
  difference: string;
  bottomLine: string;
}

export const codingTools: CodingTool[] = [
  {
    id: "lovable",
    name: "Lovable",
    emoji: "💖",
    whatItIs: "An all-in-one app builder. You describe what you want in plain English, and it builds a real, working web app — complete with a database, user login, and hosting. No code editor, no terminal, no setup.",
    bestFor: "Anyone who wants to build an app without writing code. Ideal for most hack day participants.",
    analogy: "Hiring a contractor — you describe the house you want, they build it. You make decisions, they do the construction.",
    needsTechnicalSkills: false,
    category: "all-in-one",
  },
  {
    id: "cursor",
    name: "Cursor",
    emoji: "🖱️",
    whatItIs: "A code editor (like VS Code) with AI built in. You write code — or let AI write it for you — and you guide the direction. It has powerful plugins (MCPs), extensions, and can connect to a GitHub repo so you maintain full control of your project. Non-engineers can absolutely use it, but expect a steeper learning curve.",
    bestFor: "People who want more control over their code, or who want to learn how software development actually works. Pairs well with a connected GitHub repo.",
    analogy: "Having a really smart co-pilot while YOU drive. You're still behind the wheel, but they help navigate and suggest routes.",
    needsTechnicalSkills: true,
    category: "code-editor",
  },
  {
    id: "claude-code",
    name: "Claude Code",
    emoji: "🎭",
    whatItIs: "A terminal-based coding agent from Anthropic (the Claude team). You give it a task in plain English, and it reads your codebase, writes code, runs tests, and makes changes — all from the command line.",
    bestFor: "Engineers who are comfortable with the terminal and want an autonomous coding assistant.",
    analogy: "A junior developer who sits in your terminal. You give them a task, they go off and do it, and you review their work.",
    needsTechnicalSkills: true,
    category: "code-editor",
  },
  {
    id: "codex",
    name: "Codex (OpenAI)",
    emoji: "🤖",
    whatItIs: "OpenAI's autonomous coding agent. You give it a task via ChatGPT, it spins up a sandboxed environment, writes code, runs it, and gives you the result. It works independently — you check in on its progress.",
    bestFor: "Engineers who want to delegate entire coding tasks and review the output.",
    analogy: "An autonomous intern. You describe the project, they go work on it in their own room, and come back with results for you to review.",
    needsTechnicalSkills: true,
    category: "code-editor",
  },
];

export const toolComparisons: ToolComparison[] = [
  {
    toolA: "Lovable",
    toolB: "Cursor",
    emojiA: "💖",
    emojiB: "🖱️",
    difference: "Lovable builds the entire app for you — you never see code unless you want to. Cursor is a code editor where you guide AI more directly. Non-engineers can use Cursor, but it takes more setup (GitHub, plugins) and has a steeper learning curve.",
    bottomLine: "Lovable is faster to start. Cursor gives more control but requires more effort to set up and learn.",
  },
  {
    toolA: "ChatGPT Enterprise",
    toolB: "Codex",
    emojiA: "🤖",
    emojiB: "🤖",
    difference: "ChatGPT is a chat assistant — you ask questions, draft documents, analyze data. Codex is a separate coding agent that writes and runs code autonomously in a sandbox. Same company (OpenAI), very different tools.",
    bottomLine: "ChatGPT is for everyone. Codex is for engineers who want to delegate coding tasks.",
  },
  {
    toolA: "Claude",
    toolB: "Claude Code",
    emojiA: "🎭",
    emojiB: "🎭",
    difference: "Claude is the chat assistant — great for analysis, writing, and reasoning. Claude Code is a terminal-based coding agent that reads your codebase and makes changes autonomously. Same family (Anthropic), different use cases.",
    bottomLine: "Claude is for everyone. Claude Code is for engineers who live in the terminal.",
  },
  {
    toolA: "Cursor",
    toolB: "Codex / Claude Code",
    emojiA: "🖱️",
    emojiB: "🤖🎭",
    difference: "Cursor is interactive — you work alongside the AI in real-time, like pair programming. Codex and Claude Code are more autonomous — you give them a task and they go off and do it. Cursor = co-pilot. Codex/Claude Code = autopilot.",
    bottomLine: "Want hands-on control? Cursor. Want to delegate? Codex or Claude Code.",
  },
];

export const codingToolRecommendation = {
  nonTechnical: "Start with **Lovable** — it's the fastest path from idea to working app. If you want to try a code editor like Cursor, go for it! Just know it'll be more challenging, you'll want a **GitHub repo** set up, and coordinate with your team captain on how you'll use it.",
  someComfort: "**Lovable** is great for rapid prototyping. **Cursor** gives you more control and access to powerful plugins (MCPs). The sweet spot: use Lovable to build fast, connect to GitHub, and use Cursor when you need more fine-grained control.",
  engineer: "You have options! **Cursor** for interactive pair-programming, **Claude Code** for terminal-based autonomy, **Codex** for fully delegated tasks. Or use **Lovable** to prototype fast and export to GitHub for refinement.",
};

// ─── GITHUB PRIMER ──────────────────────────────────────────

export interface GitHubPrimerItem {
  term: string;
  emoji: string;
  definition: string;
  analogy: string;
}

export const gitHubPrimer: GitHubPrimerItem[] = [
  {
    term: "Repository (Repo)",
    emoji: "📁",
    definition: "A folder that contains all of your project's code, files, and history of changes. Every project lives in a repo.",
    analogy: "Like a shared Google Drive folder, but it tracks every change anyone has ever made.",
  },
  {
    term: "Branch",
    emoji: "🌿",
    definition: "A separate copy of the code where you can make changes without affecting the main version. When you're happy with your changes, you merge the branch back in.",
    analogy: "Like making a copy of a document to edit, then merging your changes back into the original once you're done.",
  },
  {
    term: "Commit",
    emoji: "💾",
    definition: "A saved snapshot of your changes. Each commit has a message describing what you changed and why.",
    analogy: "Like hitting 'Save' in a document, but with a note explaining what you changed.",
  },
  {
    term: "Pull Request (PR)",
    emoji: "🔀",
    definition: "A request to merge your branch's changes into the main code. Your team reviews the changes, leaves comments, and approves it before it goes live.",
    analogy: "Like submitting a draft for review — your team reads it, suggests edits, and gives the thumbs-up before it's published.",
  },
  {
    term: "Clone",
    emoji: "📋",
    definition: "Downloading a copy of a repo to your own computer so you can work on it locally.",
    analogy: "Like downloading a shared document so you can edit it offline.",
  },
  {
    term: "Push / Pull",
    emoji: "⬆️⬇️",
    definition: "Push sends your local changes up to GitHub. Pull downloads the latest changes from GitHub to your computer.",
    analogy: "Push = uploading your edits. Pull = refreshing to get everyone else's edits.",
  },
];

export const gitHubWhyItMatters = "If you're using Cursor, Claude Code, or Codex, your code lives in a GitHub repo. Understanding repos, branches, and PRs means you can collaborate with your team without accidentally overwriting each other's work. Even Lovable can connect to GitHub — so the code it generates is backed up and version-controlled.";

// ─── PARTICIPANTS ────────────────────────────────────────────
// Participant data has been moved to src/lib/participants.ts
// See that file for the full roster and helper functions.

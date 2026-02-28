export interface ToolContent {
  id: string;
  name: string;
  tagline: string;
  whatItIs: string;
  whyItMatters: string;
  howItWorks: string[];
  keyFeatures: { name: string; description: string }[];
  keyConcept: { title: string; body: string };
  color: string;
  url: string;
}

export interface ProjectIdea {
  id: number;
  title: string;
  tools: string;
  difficulty: 'Starter' | 'Intermediate' | 'Advanced';
  category: string;
  description: string;
  prompt: string;
}

export interface RecipeContent {
  id: string;
  title: string;
  tool: string;
  duration: string;
  steps: string[];
  successLine: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  analogy: string;
}

export const TOOLS: ToolContent[] = [
  {
    id: 'lovable',
    name: 'Lovable',
    tagline: 'Describe an app, get a working app.',
    whatItIs:
      'A web-based tool where you describe what you want in plain English, and it generates a fully working web application. You chat with it like a colleague ("Build me a dashboard that shows...") and it writes the code, shows a preview, and lets you iterate.',
    whyItMatters:
      'Many tools we wish we had (onboarding portals, comp data explorers, training hubs, leave calendars) are straightforward apps that nobody has had engineering time to build. Lovable lets you build them in hours.',
    howItWorks: [
      'Go to lovable.dev and log in',
      'Click "New Project" and describe what you want',
      'Lovable generates the app with a live preview',
      'Tell it what to change: "Add a filter for department", "Make the chart blue"',
      'Keep iterating until you are happy',
    ],
    keyFeatures: [
      {
        name: 'Supabase',
        description:
          'When your app needs to save data, you create your own free Supabase project and Lovable connects to it.',
      },
      {
        name: 'Notion / Linear',
        description:
          'Personal connectors to pull context from Notion pages or Linear issues while building.',
      },
      {
        name: 'GitHub',
        description:
          'Where the code is saved. You don\'t need to look at it, but engineers can extend your project later.',
      },
    ],
    keyConcept: {
      title: 'Vibe Coding',
      body: 'Describe what you want in normal language. The AI writes the code. You never see or touch code unless you want to. Think of it as having a developer next to you who builds whatever you describe.',
    },
    color: 'pink',
    url: 'https://lovable.dev',
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT Enterprise',
    tagline: 'Build a reusable expert.',
    whatItIs:
      'You already know ChatGPT. The Enterprise version adds Custom GPTs (configure once with instructions and files, reuse forever) and Connectors (read from Notion, Linear, GitHub, Google Calendar).',
    whyItMatters:
      'You answer the same questions repeatedly. You draft the same documents. You follow the same frameworks. A Custom GPT pre-loaded with your processes and policies becomes a specialist you train once. With connectors, it pulls real context from Linear (headcount) and Notion (wikis) without copy-pasting.',
    howItWorks: [
      'Go to chat.openai.com (logged in via SSO)',
      'Click "Explore GPTs" then "Create"',
      'Give it a name, instructions, and upload files',
      'Test in the preview panel',
      'Save and share with your team',
    ],
    keyFeatures: [
      {
        name: 'Custom GPTs',
        description:
          'Pre-loaded instructions plus files. Examples: "Comp Decision Helper," "Manager Coaching Bot," "Offboarding Generator"',
      },
      {
        name: 'Connectors',
        description:
          'ChatGPT reads from GitHub, Linear, Notion, Google Calendar. A GPT can check Linear headcount, read Notion wikis, and draft a prep doc.',
      },
      {
        name: 'Canvas',
        description: 'Side panel for collaborative long-form writing.',
      },
    ],
    keyConcept: {
      title: 'Train it once, use it forever',
      body: 'Invest 30 minutes setting up a Custom GPT, save 30 minutes every time you use it. Think about tasks where you repeatedly explain the same context.',
    },
    color: 'emerald',
    url: 'https://chat.openai.com',
  },
  {
    id: 'claude',
    name: 'Claude',
    tagline: 'Upload everything, get deep analysis.',
    whatItIs:
      'Claude (by Anthropic) excels at large documents and structured analysis. Projects are persistent workspaces where uploaded files are remembered across conversations.',
    whyItMatters:
      'Comp analysis, policy review, and document drafting all involve large amounts of context. Claude ingests PDFs, spreadsheets, and large documents, then reasons across them.',
    howItWorks: [
      'Go to claude.ai and log in',
      'Click "Projects" then "New Project"',
      'Upload relevant files (PDFs, CSVs, spreadsheets)',
      'Start a conversation. Claude has access to everything uploaded.',
      'Ask analytical questions referencing your files',
    ],
    keyFeatures: [
      {
        name: 'Projects',
        description:
          'Persistent context. Upload a comp philosophy doc, Pave export, and last quarter\'s analysis once. Every conversation in that project has access to them.',
      },
      {
        name: 'Artifacts',
        description:
          'Generated reports, tables, and analysis appear in a side panel to copy or download.',
      },
      {
        name: 'Cowork Plugins',
        description:
          'Connects to Google Workspace and Slack, reading and editing documents directly.',
      },
    ],
    keyConcept: {
      title: 'Context is everything',
      body: 'Claude gets dramatically better with more context. Don\'t just ask "Analyze this data." Upload the data, your comp philosophy, last quarter\'s analysis, and the questions leadership typically asks.',
    },
    color: 'amber',
    url: 'https://claude.ai',
  },
  {
    id: 'glean',
    name: 'Glean',
    tagline: 'Build agents that search across all internal tools.',
    whatItIs:
      'Glean already indexes content across Notion, Slack, Google Drive, email, and more. The Agent Builder creates no-code AI agents that answer questions, automate lookups, and complete tasks.',
    whyItMatters:
      'People teams get the most questions. "Who handles benefits?" "What\'s the WFH policy?" "Where\'s the performance review template?" A Glean agent answers these 24/7 with proper permissions.',
    howItWorks: [
      'Log in to Glean',
      'Navigate to Agent Builder',
      'Click "Create Agent"',
      'Describe what the agent does in plain English',
      'Test with sample questions, refine, publish',
    ],
    keyFeatures: [
      {
        name: 'No-code builder',
        description: 'Plain English instructions, no programming.',
      },
      {
        name: 'Permission-aware',
        description: 'Respects document access controls.',
      },
      {
        name: '100+ connectors',
        description: 'Already indexes Notion, Slack, Drive, email.',
      },
    ],
    keyConcept: {
      title: 'It already knows where everything lives',
      body: 'Unlike other tools where you upload files, Glean has already indexed your company\'s knowledge. Your job is just to tell the agent what to answer and how to behave.',
    },
    color: 'orange',
    url: '',
  },
];

export const GLOSSARY: GlossaryTerm[] = [
  { term: 'MCP', definition: 'Model Context Protocol. A standard way for AI tools to connect to other services (Notion, Linear, Supabase).', analogy: 'USB ports for AI' },
  { term: 'Custom GPT / Project', definition: 'A saved AI workspace pre-loaded with your instructions and files.', analogy: 'A specialist trained on your processes' },
  { term: 'Prompt', definition: 'Instructions you give the AI. Be specific: include format, examples, and what to avoid.', analogy: 'A detailed brief for a contractor' },
  { term: 'Hallucination', definition: 'When AI generates confident but factually wrong output. Always verify.', analogy: 'A confident intern who sometimes makes things up' },
  { term: 'Vibe coding', definition: 'Describing what you want in plain language, letting AI write the code. This is what you will do in Lovable.', analogy: 'Telling an architect what you want; they draw the blueprints' },
  { term: 'Supabase', definition: 'An open-source database you can create for free. When you build an app in Lovable, Supabase stores the data behind it.', analogy: 'The spreadsheet behind your app, but way more powerful' },
  { term: 'Connector', definition: 'A pre-built integration letting AI read from or write to another service.', analogy: 'A bridge between two tools' },
  { term: 'Agent', definition: 'AI that takes actions, not just answers questions. Searches docs, synthesizes info, completes tasks.', analogy: 'A virtual assistant with tool access' },
];

export const RECIPES: RecipeContent[] = [
  {
    id: 'comp-explorer',
    title: 'Build a Comp Data Explorer in Lovable',
    tool: 'Lovable + Supabase',
    duration: '15 min',
    steps: [
      'Go to lovable.dev and click New Project',
      'Type: "Build a compensation data explorer. I will upload a CSV with columns: job_family, level, location, base_min, base_mid, base_max, equity_min, equity_mid, equity_max. Show a bar chart comparing base salary ranges across levels, color-coded by job family. Include dropdown filters and a data table below."',
      'Lovable generates the app with a live preview. Review it.',
      'Click Supabase in the integrations panel and create/connect your own free Supabase project.',
      'Upload your sample data (use made-up numbers or a sanitized export).',
      'Iterate: "Add a toggle between base and equity view" or "Show the midpoint as a line"',
      'Hit Deploy for a shareable URL.',
    ],
    successLine: 'You just built an interactive comp data tool from a spreadsheet.',
  },
  {
    id: 'coaching-gpt',
    title: 'Create a Manager Coaching GPT',
    tool: 'ChatGPT Enterprise',
    duration: '10 min',
    steps: [
      'Go to chat.openai.com, click Explore GPTs, then Create.',
      'Name it "HRBP Coaching Assistant"',
      'Instructions: "You are an HRBP coaching assistant. When I describe a manager situation, suggest an approach using our frameworks (uploaded). Include: the relevant framework, specific talking points, relevant policies, and next steps. Be direct and practical."',
      'Upload your performance management guide and coaching frameworks.',
      'Test: "A manager has a direct report who has been consistently late and missing deadlines for a month."',
      'Refine and Save.',
    ],
    successLine: 'Your HRBP team now has an always-available coaching prep assistant.',
  },
  {
    id: 'comp-analysis',
    title: 'Analyze Comp Data in Claude',
    tool: 'Claude',
    duration: '10 min',
    steps: [
      'Go to claude.ai, click Projects, then New Project.',
      'Name it "Comp Market Analysis"',
      'Upload a sanitized Pave export and your comp philosophy document.',
      'Prompt: "Analyze the data: (1) Which roles are below the 50th percentile? (2) Which job families have the widest spread? (3) Any patterns by level or location? Present in a table and draft a one-page summary for our VP of People."',
      'Follow up: "Draft talking points for discussing these findings with hiring managers."',
    ],
    successLine: 'You just did a comp analysis that would normally take half a day.',
  },
  {
    id: 'navigator-agent',
    title: 'Build a "Who Handles This?" Agent in Glean',
    tool: 'Glean Agent Builder',
    duration: '10 min',
    steps: [
      'Log in to Glean, go to Agent Builder, click Create Agent.',
      'Name it "P&T Navigator"',
      'Instructions: "You are the People and Talent navigator. When someone asks \'who handles X?\', search our docs, org directory, Notion wiki, and Slack. Include the person\'s name, role, and contact method."',
      'Test: "Who handles benefits enrollment for EMEA?" and "Where\'s the performance review template?"',
      'Refine and Publish.',
    ],
    successLine: 'Your team now has a 24/7 navigator that knows who does what across P&T.',
  },
];

export const PROJECT_IDEAS: ProjectIdea[] = [
  { id: 1, title: 'Onboarding Experience Hub', tools: 'Lovable + Supabase', difficulty: 'Intermediate', category: 'People Operations', description: 'A portal where new hires see their personalized onboarding plan: tasks, people to meet, resources, with checkboxes and a progress bar.', prompt: 'Build a new hire onboarding portal. Each new hire sees a personalized checklist organized by Week 1, Week 2, Month 1, Month 2, and Month 3. Tasks have a checkbox, due date, owner, and description. Include a progress bar at the top.' },
  { id: 2, title: 'People Ops Policy Navigator', tools: 'Glean Agent Builder', difficulty: 'Starter', category: 'People Operations', description: 'A Glean agent that answers employee questions by searching Notion wikis, the employee handbook, and Google Drive.', prompt: 'You are the People Ops assistant. Answer employee questions about company policies, benefits, leave, expenses, workplace accommodations, and HR processes. Search our Notion wiki, employee handbook, and Google Drive. Always cite the specific policy or document.' },
  { id: 3, title: 'Offboarding Checklist Generator', tools: 'ChatGPT Custom GPT', difficulty: 'Starter', category: 'People Operations', description: 'A custom GPT pre-loaded with offboarding procedures that generates tailored checklists from role, department, and last day inputs.', prompt: 'When I give you a role title, department, location, and last day, generate a complete offboarding checklist with owners and deadlines. Include reminders for Workday termination, Ashby status update, Slack deactivation, and equipment return.' },
  { id: 4, title: 'Employee Data Cross-Reference Tool', tools: 'Lovable + Supabase', difficulty: 'Advanced', category: 'People Operations', description: 'A dashboard that spots mismatches across systems (Workday, Ashby, Linear) by uploading CSV exports and flagging discrepancies.', prompt: 'Build a data reconciliation dashboard. I will upload CSV files from three systems. Show a table of positions with their status in each system. Flag rows where the statuses don\'t match. Include department filters and a summary count of mismatches at the top.' },
  { id: 5, title: 'Relocation Hub', tools: 'Lovable', difficulty: 'Intermediate', category: 'People Operations', description: 'A one-stop app for new hires relocating to the Bay Area with neighborhood profiles, transit guides, rental tips, and a pre-move checklist.', prompt: 'Build a relocation guide app for new hires moving to the San Francisco Bay Area. Include sections for: neighborhood profiles with pros/cons and average rents, a transit overview, rental search resources, a commute time estimator, and a pre-move checklist.' },
  { id: 6, title: 'Immigration Case Tracker', tools: 'Lovable + Supabase', difficulty: 'Advanced', category: 'People Operations', description: 'A dashboard for tracking all active immigration cases: visa type, status, key dates, next steps, and assigned counsel.', prompt: 'Build an immigration case tracker dashboard. Each case shows: employee name, visa type, current status (filed, pending, approved), key dates, assigned counsel, and notes. Include filters by visa type and status, a timeline view, and color-coded urgency indicators.' },
  { id: 7, title: 'Internal Hiring Workflow Tool', tools: 'Lovable or ChatGPT Custom GPT', difficulty: 'Intermediate', category: 'People Operations', description: 'A decision-tree tool that walks managers through the right process for internal moves: full req, internal posting, or just a transfer.', prompt: 'Build an internal hiring decision tree. Ask the user yes/no questions about the internal move: Is there a preselected candidate? Is this a lateral move, promotion, or backfill? Does it need to be posted internally? Show the correct process with steps and templates.' },
  { id: 8, title: 'Manager Coaching Prep Bot', tools: 'ChatGPT Custom GPT', difficulty: 'Starter', category: 'HRBPs', description: 'Upload HRBP frameworks and policy documents. Describe a situation and get suggested talking points, relevant frameworks, and next steps.', prompt: 'You are an HRBP coaching assistant. When I describe a manager situation, suggest an approach using our frameworks. Include specific talking points, relevant policies, and recommended next steps.' },
  { id: 9, title: 'Slack/Email Communication Drafter', tools: 'ChatGPT or Claude', difficulty: 'Starter', category: 'HRBPs', description: 'Feed it bullet points about a change or initiative. Get back an all-hands email, manager talking points, and an FAQ.', prompt: 'I will give you bullet points about this event. Write: (1) an all-hands email, (2) manager talking points with anticipated objections, and (3) an FAQ with 8 to 10 questions. Keep the tone direct, empathetic, and transparent.' },
  { id: 10, title: 'Team Health Scorecard', tools: 'Lovable + Supabase', difficulty: 'Advanced', category: 'HRBPs', description: 'A dashboard for HRBP metrics: attrition rate, open headcount, time-to-fill, promotions, with green/yellow/red indicators per team.', prompt: 'Build a team health scorecard. Each team card shows: attrition rate, headcount (filled vs. open), time-to-fill average, and last promotion date. Green/yellow/red indicators based on thresholds. Filter by business unit.' },
  { id: 11, title: '1:1 Meeting Prep Assistant', tools: 'ChatGPT Custom GPT + Connectors', difficulty: 'Intermediate', category: 'HRBPs', description: 'A GPT that connects to Notion and Linear to pull context for HRBP 1:1 prep and generates prep docs.', prompt: 'When I give you a team name, search Notion and Linear for context. Generate a 1:1 prep doc with: headcount status, open roles, recent hires, upcoming milestones, and suggested topics.' },
  { id: 12, title: 'Custom Offer Letter Generator', tools: 'Claude Project', difficulty: 'Starter', category: 'Compensation', description: 'Upload offer letter templates into a Claude Project. Generate custom letters for executive offers with unique milestones.', prompt: 'We need an offer letter template that includes custom milestones, a sign-on bonus with clawback terms, and equity acceleration language for an executive offer.' },
  { id: 13, title: 'Pave Data Explorer', tools: 'Lovable + Supabase', difficulty: 'Intermediate', category: 'Compensation', description: 'Interactive comp data visualization. Upload sample data and build charts comparing bands across levels and job families.', prompt: 'Build a compensation data explorer. I will upload a CSV with columns: job_family, level, location, base_min, base_mid, base_max, equity_min, equity_mid, equity_max. Show an interactive chart comparing base ranges across levels. Color-code by job family.' },
  { id: 14, title: 'Comp Equity Audit Dashboard', tools: 'Lovable + Supabase', difficulty: 'Advanced', category: 'Compensation', description: 'Overlays anonymized comp data against band targets to visualize pay equity by level and demographic dimensions.', prompt: 'Build a pay equity dashboard. I will upload a CSV with: role, level, tenure, gender, ethnicity, base_salary, total_comp. Show box plots by demographic group within each level. Highlight gaps greater than 5%.' },
  { id: 15, title: 'Total Rewards Statement Builder', tools: 'ChatGPT Custom GPT', difficulty: 'Intermediate', category: 'Compensation', description: 'Takes comp package inputs and generates a clear total rewards statement with year-by-year projections.', prompt: 'When I give you base salary, bonus target, equity grant details (shares, vesting schedule, share price), and benefits value, create a total rewards statement with a breakdown table, year-by-year projections, and total Year 1 and 4-year comp.' },
  { id: 16, title: 'Comp Decision Communicator', tools: 'ChatGPT Custom GPT', difficulty: 'Starter', category: 'Compensation', description: 'Trained on your comp philosophy to help explain comp decisions clearly to recruiters and managers.', prompt: 'Help recruiters and managers explain compensation decisions. When I describe a situation, draft a clear explanation using our philosophy. Never share raw band numbers. Focus on reasoning.' },
  { id: 17, title: 'Hiring Manager Pre-Work Kit', tools: 'ChatGPT Custom GPT or Claude Project', difficulty: 'Intermediate', category: 'Talent / Recruiting', description: 'Generates a brief on how a hiring manager approaches hiring: their patterns, preferences, past decisions, and what to watch for.', prompt: 'I am going to upload context about a hiring manager and their team. Summarize how this HM approaches hiring. Include: their interview style, what they prioritize in candidates, past hiring patterns, and any flags.' },
  { id: 18, title: 'Referral Leaderboard', tools: 'Lovable + Supabase', difficulty: 'Starter', category: 'Talent / Recruiting', description: 'A fun, competitive leaderboard tracking employee referrals with rankings, conversion rates, and streaks.', prompt: 'Build a referral leaderboard app. I will upload a CSV with: referrer_name, candidate_name, role, date_referred, status. Show a ranked leaderboard by total referrals and by hires. Include a conversion rate and monthly trend chart.' },
  { id: 19, title: 'Opening 75+ Days Analysis Kit', tools: 'Lovable + Supabase', difficulty: 'Intermediate', category: 'Talent / Recruiting', description: 'Diagnoses why a role has been open too long and generates an action plan with specific recommendations.', prompt: 'Build a 75+ Day Action Plan tool. The user inputs: role title, days open, candidates at each stage, top rejection reasons, sourcing channels, and notes. Generate an analysis of bottlenecks and a recommended action plan.' },
  { id: 20, title: 'Hiring Sprint Leaderboard', tools: 'Lovable + Supabase', difficulty: 'Intermediate', category: 'Talent / Recruiting', description: 'Visual leaderboard showing hiring sprint progress across teams: hires, offers, pipeline velocity.', prompt: 'Build a hiring sprint leaderboard. Each team shows: hires this sprint, offers pending, pipeline velocity, and a progress score. Rank teams by score. Include weekly trend sparklines.' },
  { id: 21, title: 'BrightHire Interview Digest', tools: 'ChatGPT Custom GPT', difficulty: 'Intermediate', category: 'Talent / Recruiting', description: 'Takes pasted interview highlights and generates a structured debrief memo for hiring managers.', prompt: 'When I paste interview notes, generate a debrief memo: Key Strengths (with evidence), Areas of Concern, Comparison to Role Criteria, Follow-Up Questions, and Overall Assessment. One page max.' },
  { id: 22, title: 'CodeSignal Results Explainer', tools: 'ChatGPT Custom GPT', difficulty: 'Starter', category: 'Talent / Recruiting', description: 'Translates CodeSignal scores into plain language for non-technical hiring managers.', prompt: 'When I give you CodeSignal results (test name, scores, percentile), translate into plain language. Explain what each category measures, whether scores are strong/average/below, and suggest follow-up questions.' },
  { id: 23, title: 'Recruiter Weekly Update Enhancer', tools: 'ChatGPT Custom GPT', difficulty: 'Starter', category: 'Talent / Recruiting', description: 'Takes raw pipeline numbers and produces a polished, consistent Slack update.', prompt: 'When I give you weekly metrics (roles owned, offers, interviews, candidates sourced, roles closed), generate a formatted Slack update with a narrative summary, metrics table, and focus areas for next week.' },
  { id: 24, title: 'Interview Scheduling Optimizer', tools: 'Lovable + Supabase', difficulty: 'Intermediate', category: 'Recruiting Operations', description: 'Takes interviewer availability and interview plan requirements, suggests optimal scheduling blocks.', prompt: 'Build an interview scheduling tool. I input interviewers with time slots, candidate windows, and required stages with durations. Suggest the best schedule. Flag conflicts and show a visual timeline.' },
  { id: 25, title: 'Ashby Template Builder', tools: 'ChatGPT Custom GPT', difficulty: 'Starter', category: 'Recruiting Operations', description: 'Loaded with existing templates, helps draft new ones for different scenarios (inbound vs. sourced, exec vs. IC).', prompt: 'You help recruiters create email templates for Ashby. When I describe a scenario (candidate type, interview stage, tone), draft a template that matches our voice. Keep it warm but professional.' },
  { id: 26, title: 'Recruiting Analytics Dashboard', tools: 'Lovable + Supabase', difficulty: 'Intermediate', category: 'Recruiting Operations', description: 'Upload pipeline data and get charts: time-to-fill trends, source effectiveness, stage conversion rates.', prompt: 'Build a recruiting analytics dashboard. I will upload a CSV with: role, recruiter, source, days_open, stage, candidates_at_stage, hires. Show charts for time-to-fill, source effectiveness, conversion funnel, and offer acceptance rate.' },
  { id: 27, title: 'System Audit Checklist', tools: 'ChatGPT Custom GPT', difficulty: 'Starter', category: 'Recruiting Operations', description: 'Walks through a recruiting system health check and generates a cleanup task list.', prompt: 'Walk me through questions about our job postings, pipeline stages, tagging, source tracking, and candidate dispositioning. Based on my answers, generate a prioritized cleanup checklist.' },
  { id: 28, title: 'Recruiter SLA Tracker', tools: 'Lovable + Supabase', difficulty: 'Intermediate', category: 'Recruiting Operations', description: 'Dashboard for tracking response times, time-to-schedule, and time-to-feedback against SLA targets.', prompt: 'Build an SLA tracking dashboard. I will upload a CSV with: recruiter_name, candidate, action_type, target_hours, actual_hours, date. Show compliance rates and trend charts. Highlight anything over target in red.' },
  { id: 29, title: 'Stakeholder Training Hub', tools: 'Lovable + Supabase', difficulty: 'Intermediate', category: 'Training and Enablement', description: 'A mini learning platform with Loom videos, guides, and completion tracking for hiring managers and interviewers.', prompt: 'Build a training hub app. List of modules, each with a title, description, embedded Loom video, and a Mark Complete checkbox. Users see progress across all modules. Sections: Interview Training, ATS Basics, Feedback, Assessments.' },
  { id: 30, title: 'New Recruiter Onboarding App', tools: 'Lovable + Supabase', difficulty: 'Intermediate', category: 'Training and Enablement', description: 'Loom walkthroughs of each tool organized by first week, first month, first quarter with completion tracking.', prompt: 'Build a recruiter onboarding app. New recruiters see a curriculum organized by Week 1, Month 1, and Quarter 1. Each module has a Loom video, summary, key takeaways, and completion checkbox. Include a progress tracker.' },
  { id: 31, title: 'Process Playbook App', tools: 'Lovable', difficulty: 'Starter', category: 'Training and Enablement', description: 'Interactive app that walks users through common recruiting processes step by step with embedded Looms.', prompt: 'Build a process guide app. Home screen shows processes: Open a New Role, Submit an Offer, Request Headcount, Handle Immigration, Schedule an Onsite. Each opens a step-by-step flow with descriptions and links.' },
  { id: 32, title: '"Who Do I Talk To?" Navigator', tools: 'Glean Agent Builder', difficulty: 'Starter', category: 'Wildcard / Fun', description: 'Answers questions like "Who handles benefits in EMEA?" by searching the org directory, Notion, and Slack.', prompt: 'You are the P&T navigator. When someone asks "who handles X?", search our docs, org directory, Notion wiki, and Slack. Include the person\'s name, role, and contact method.' },
  { id: 33, title: 'Meeting Cost Calculator', tools: 'Lovable', difficulty: 'Starter', category: 'Wildcard / Fun', description: 'Input attendees, salary bands, and duration. See the dollar cost tick up in real time.', prompt: 'Build a meeting cost calculator. Input number of attendees, average salary band, and meeting duration in minutes. Show the cost increasing in real time with a running total.' },
  { id: 34, title: 'PTO Optimizer', tools: 'ChatGPT Custom GPT', difficulty: 'Starter', category: 'Wildcard / Fun', description: 'Input holidays and PTO balance. Get optimal days to maximize long weekends.', prompt: 'I will give you a list of company holidays and my PTO balance. Suggest the optimal days to take off to maximize long weekends and extended breaks, ranked by bang-for-buck.' },
  { id: 35, title: 'Kudos Wall', tools: 'Lovable + Supabase', difficulty: 'Starter', category: 'Wildcard / Fun', description: 'Post public kudos to teammates with categories like Teamwork, Innovation, and Above and Beyond.', prompt: 'Build a kudos wall app. Users submit kudos with a recipient name, message, and category. Display as a scrolling wall of cards with filters by category.' },
  { id: 36, title: 'Recruiting Acronym Decoder', tools: 'ChatGPT Custom GPT', difficulty: 'Starter', category: 'Wildcard / Fun', description: 'Trained on all internal acronyms: HC, ATS, P-code, FIN ID, REQ, SPL, FDE, HAI, TOFU, WBR, RIQ.', prompt: 'You know all our internal recruiting and HR acronyms. When I type an acronym, explain what it stands for and give context about when and how it is used.' },
  { id: 37, title: 'Handshake Meme/GIF Maker', tools: 'Lovable or ChatGPT', difficulty: 'Starter', category: 'Wildcard / Fun', description: 'Generates custom memes and GIFs using Handshake branding, team photos, or recruiting inside jokes.', prompt: 'Build a meme generator app. Users pick from meme templates, add custom top and bottom text, and optionally upload an image. Include a gallery of saved memes and a download button.' },
  { id: 38, title: 'Slack Workflow Automations', tools: 'ChatGPT or Glean', difficulty: 'Starter', category: 'Wildcard / Fun', description: 'Prototype Slack workflows: auto-responses to common questions, weekly digests, or celebration bots.', prompt: 'Help me design a Slack workflow. When someone posts a common FAQ in our channel, auto-reply with the answer and a link to the relevant doc. Give me the FAQ list and auto-responses.' },
];

export const HUMOR_CALLOUTS = [
  'AI is great at first drafts. It is terrible at knowing when you are being sarcastic in Slack.',
  'This tool will not replace you. It will, however, replace the 45 minutes you spend reformatting that spreadsheet every Monday.',
  'If the AI confidently tells you something wrong, that is called a hallucination. If a human does it, that is called a meeting.',
  'Remember: you are the expert on your work. AI is the intern with infinite energy and questionable judgment.',
  'AI can write a job description in 30 seconds. It still cannot figure out what "competitive salary" actually means.',
  'Pro tip: the more specific your prompt, the less time you spend arguing with the AI about what you meant.',
  'Fun fact: AI does not take coffee breaks, but it also does not understand why you need one after that 3-hour debrief.',
  'The AI will never complain about formatting a table. It will, however, occasionally make up data for the table.',
  'Think of vibe coding like ordering at a restaurant. You describe what you want; the kitchen figures out the recipe.',
  'AI hallucinations are like autocorrect on steroids: confident, fast, and occasionally catastrophic.',
];

export const CATEGORIES = [
  'People Operations',
  'HRBPs',
  'Compensation',
  'Talent / Recruiting',
  'Recruiting Operations',
  'Training and Enablement',
  'Wildcard / Fun',
];

export const DIFFICULTY_LEVELS = ['Starter', 'Intermediate', 'Advanced'] as const;

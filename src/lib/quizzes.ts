export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Quiz {
  moduleId: string;
  title: string;
  questions: QuizQuestion[];
}

export const QUIZZES: Quiz[] = [
  {
    moduleId: 'lovable',
    title: 'Lovable Quiz',
    questions: [
      {
        id: 'lov-1',
        question: 'You want to build a dashboard that shows team hiring metrics with charts and filters. Which tool should you use?',
        options: ['ChatGPT Custom GPT', 'Lovable', 'Glean Agent Builder', 'Claude'],
        correctIndex: 1,
        explanation: 'Lovable is the go-to for visual apps, dashboards, and internal tools. You describe it in plain English and get a working web app.',
      },
      {
        id: 'lov-2',
        question: 'When your Lovable app needs to save data (like form submissions or uploaded info), what do you connect it to?',
        options: ['Google Sheets', 'Supabase', 'Notion', 'A USB drive (just kidding)'],
        correctIndex: 1,
        explanation: 'Supabase is the database that powers Lovable apps. You create your own free project and Lovable connects to it.',
      },
      {
        id: 'lov-3',
        question: 'What is "vibe coding"?',
        options: [
          'Writing code while listening to lo-fi beats',
          'Describing what you want in plain language and letting AI write the code',
          'A new programming language designed for HR professionals',
          'Coding in a dark room with mood lighting',
        ],
        correctIndex: 1,
        explanation: 'Vibe coding means you describe what you want, and AI generates the code. No syntax knowledge needed. You are the director; AI is the developer.',
      },
      {
        id: 'lov-4',
        question: 'Where does the code for your Lovable app get saved?',
        options: ['It does not save anywhere', 'GitHub', 'Your computer\'s desktop', 'Notion'],
        correctIndex: 1,
        explanation: 'Lovable saves code to GitHub automatically. You do not need to look at it, but engineers on your team can extend your project later.',
      },
    ],
  },
  {
    moduleId: 'chatgpt',
    title: 'ChatGPT Enterprise Quiz',
    questions: [
      {
        id: 'gpt-1',
        question: 'What is a Custom GPT?',
        options: [
          'A robot that sits at your desk',
          'A saved AI workspace pre-loaded with your instructions and files that you can reuse',
          'A premium version of Google Search',
          'A Slack bot',
        ],
        correctIndex: 1,
        explanation: 'A Custom GPT is like training a specialist once. You give it instructions and reference files, and it remembers them every time you use it.',
      },
      {
        id: 'gpt-2',
        question: 'Which services can ChatGPT Enterprise Connectors read from?',
        options: [
          'Only email',
          'Notion, Linear, GitHub, and Google Calendar',
          'Only Slack',
          'No external services',
        ],
        correctIndex: 1,
        explanation: 'ChatGPT Enterprise connectors plug into Notion, Linear, GitHub, and Google Calendar, letting your Custom GPT pull real context without copy-pasting.',
      },
      {
        id: 'gpt-3',
        question: 'You answer the same policy questions from managers every week. What should you build?',
        options: [
          'A Lovable dashboard',
          'A Claude Project',
          'A Custom GPT pre-loaded with your policies and frameworks',
          'A new Slack channel',
        ],
        correctIndex: 2,
        explanation: 'A Custom GPT loaded with your policies becomes a specialist that handles repetitive questions. Invest 30 minutes setting it up, save 30 minutes every time.',
      },
    ],
  },
  {
    moduleId: 'claude',
    title: 'Claude Quiz',
    questions: [
      {
        id: 'cla-1',
        question: 'You need to analyze a 50-page comp philosophy document and a Pave export together. Which tool?',
        options: ['Lovable', 'Glean', 'Claude', 'ChatGPT'],
        correctIndex: 2,
        explanation: 'Claude excels at large documents and deep analysis. Upload both files into a Project, and every conversation has access to them.',
      },
      {
        id: 'cla-2',
        question: 'What is a Claude "Project"?',
        options: [
          'A one-time chat that disappears',
          'A persistent workspace where uploaded files are remembered across conversations',
          'A Jira ticket',
          'A shared Google Doc',
        ],
        correctIndex: 1,
        explanation: 'Projects are persistent workspaces. Upload your files once, and every conversation in that project has full access to them.',
      },
      {
        id: 'cla-3',
        question: 'How do you get better results from Claude?',
        options: [
          'Ask shorter questions',
          'Use all caps',
          'Upload more context: the data, your framework, past analyses, and the questions leadership asks',
          'Add emoji to your prompts',
        ],
        correctIndex: 2,
        explanation: 'Context is everything with Claude. The more relevant background you provide, the more useful and specific the analysis becomes.',
      },
    ],
  },
  {
    moduleId: 'glean',
    title: 'Glean Quiz',
    questions: [
      {
        id: 'gle-1',
        question: 'What makes Glean agents different from other AI tools?',
        options: [
          'They are faster',
          'They already have access to your company\'s indexed knowledge across Notion, Slack, Drive, and more',
          'They cost less',
          'They only work on Mondays',
        ],
        correctIndex: 1,
        explanation: 'Unlike other tools where you upload files, Glean has already indexed your company\'s knowledge. Your agent can search everything that is already there.',
      },
      {
        id: 'gle-2',
        question: 'Someone asks "Who handles benefits in EMEA?" every other week. What should you build?',
        options: [
          'A Lovable app',
          'A Google Doc FAQ',
          'A Glean agent that can search org directories, Notion, and Slack to answer navigation questions',
          'A Custom GPT',
        ],
        correctIndex: 2,
        explanation: 'A Glean agent is perfect for "who handles X?" questions because it can search across your org directory, Notion wiki, and Slack to find the right person.',
      },
      {
        id: 'gle-3',
        question: 'Do you need to know how to code to build a Glean agent?',
        options: [
          'Yes, you need Python',
          'No, you describe what it does in plain English',
          'You need SQL',
          'You need a computer science degree',
        ],
        correctIndex: 1,
        explanation: 'The Glean Agent Builder is completely no-code. You write plain English instructions, test with sample questions, and publish.',
      },
    ],
  },
  {
    moduleId: 'concepts',
    title: 'Key Concepts Quiz',
    questions: [
      {
        id: 'con-1',
        question: 'What does MCP stand for?',
        options: [
          'Machine Control Panel',
          'Model Context Protocol',
          'Mega Chat Platform',
          'Multi-Cloud Processing',
        ],
        correctIndex: 1,
        explanation: 'MCP (Model Context Protocol) is a standard way for AI tools to connect to other services like Notion, Linear, and Supabase. Think of it as USB ports for AI.',
      },
      {
        id: 'con-2',
        question: 'What is an AI "hallucination"?',
        options: [
          'When the AI crashes',
          'When the AI generates confident but factually incorrect output',
          'When the AI asks you a question',
          'When the AI takes too long to respond',
        ],
        correctIndex: 1,
        explanation: 'A hallucination is when AI makes something up but presents it with full confidence. This is why you always verify AI outputs, especially numbers and facts.',
      },
      {
        id: 'con-3',
        question: 'What is the best way to write an effective prompt?',
        options: [
          'Keep it vague so the AI has creative freedom',
          'Write one word',
          'Be specific: include the format you want, examples, context, and what to avoid',
          'Use as many buzzwords as possible',
        ],
        correctIndex: 2,
        explanation: 'Specific prompts get specific results. Think of it as a brief for a contractor: the more detail you provide, the closer the output matches what you need.',
      },
    ],
  },
];

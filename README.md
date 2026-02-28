# Vibe Coding Training

An interactive training app for People & Talent teams learning to build with AI tools. Built for Handshake's P&T Hack Day.

## What This Is

A Next.js web app that teaches non-engineers how to use Lovable, ChatGPT Enterprise, Claude, and Glean to build real tools without writing code. Includes:

- **Tool deep dives** for Lovable, ChatGPT Enterprise, Claude, and Glean
- **Key concepts glossary** (MCP, prompts, hallucinations, vibe coding, agents)
- **4 quick-start recipes** you can follow in 10 to 15 minutes
- **38 filterable project ideas** organized by role, tool, and difficulty
- **Prompt Playground** with instant feedback on prompt quality
- **Quizzes** per module with progress tracking
- **Badge system** for completed milestones
- **localStorage progress tracking** (no backend needed)

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech Stack

- **Next.js 15** with App Router
- **React 19**
- **Tailwind CSS** with @tailwindcss/typography
- **Lucide React** for icons
- **localStorage** for progress (no database needed)
- **TypeScript** throughout

## Project Structure

```
src/
  app/
    page.tsx                     # Landing page
    layout.tsx                   # Root layout with sidebar
    learn/
      tools/[tool]/page.tsx      # Dynamic tool pages (lovable, chatgpt, claude, glean)
      concepts/page.tsx          # Key concepts glossary + quiz
      recipes/page.tsx           # 4 quick-start walkthroughs
      ideas/page.tsx             # 38 filterable project ideas
    playground/page.tsx          # Prompt quality analyzer
  components/
    ProgressSidebar.tsx          # Sidebar with nav + progress + badges
    QuizCard.tsx                 # Reusable quiz component
    HumorCallout.tsx             # AI humor callouts
  lib/
    content.ts                   # All tool content, ideas, glossary, recipes
    quizzes.ts                   # Quiz questions per module
    badges.ts                    # Badge definitions and unlock logic
    progress.ts                  # localStorage progress management
```

## Deployment

Deploy to Vercel:

```bash
npx vercel
```

## Contributing

1. Fork this repo
2. Create a branch for your changes
3. Make edits (content lives in `src/lib/content.ts`)
4. Run `npm run build` to verify
5. Open a PR

To add a new project idea, add an entry to the `PROJECT_IDEAS` array in `src/lib/content.ts`.

To add a new quiz question, add to the relevant quiz in `src/lib/quizzes.ts`.

# Afrizal Muhardianto — Portfolio

Personal portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI, shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theme:** next-themes (dark/light mode)
- **Package Manager:** pnpm

## 📁 Project Structure

```
src/
├── app/           # Next.js app router
├── components/    # Reusable components
│   ├── sections/  # Page sections (About, Work, Projects, Education)
│   └── ui/        # UI components (shadcn/ui)
├── data/          # Static data (about, work, projects, education)
├── hooks/         # Custom React hooks
└── lib/           # Utility functions
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
pnpm build
pnpm start
```

## 📝 Customization

Edit the data files in `src/data/` to update your personal information:

- `about.ts` — Name, bio, skills, and contact info
- `work.ts` — Work experience
- `projects.ts` — Projects showcase
- `education.ts` — Education history

## 📄 License

MIT

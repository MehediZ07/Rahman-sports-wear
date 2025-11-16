# Rahman Sport Wear Ltd. - Company Website

A modern, responsive company website built with React, TypeScript, and Tailwind CSS.

## Features

- Modern responsive design
- Company profile and information
- Machinery showcase
- Certifications and memberships
- Contact form
- Professional layout

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Shadcn UI** - UI components

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── ui/              # Existing UI components
│   └── sections/        # NEW: Section components
│       ├── Header.tsx
│       ├── Navigation.tsx
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── FactoryOverview.tsx
│       ├── MachinerySection.tsx
│       ├── CertificationsSection.tsx
│       ├── ContactSection.tsx
│       ├── Footer.tsx
│       └── index.ts     # Exports all components
├── screens/Desktop/
│   └── Desktop.tsx      # Now clean and minimal
├── lib/                 # Utility functions
└── index.tsx           # App entry point
```

# Rahman Sport Wear Ltd. - Company Website

A modern, responsive company portfolio website built with React, TypeScript, and Tailwind CSS featuring smooth scroll animations and professional design.

## ✨ Features

### 🎨 Design & UX
- **Modern responsive design** - Mobile-first approach with Tailwind CSS
- **Smooth scroll animations** - Framer Motion powered animations
- **Auto-hide navigation** - React Headroom for smart navbar behavior
- **Professional layout** - Clean, corporate design aesthetic
- **Interactive elements** - Hover effects and micro-interactions

### 📊 Content Sections
- **Company profile** - Establishment year, employees, production capacity
- **Machinery showcase** - Detailed tables for all manufacturing equipment
- **Factory overview** - Production statistics and capabilities
- **Certifications** - Business registration and industry certifications
- **Contact information** - Multiple contact methods and addresses

### 🛠️ Technical Features
- **Functional navigation** - Smooth scroll to sections
- **Scroll to top** - Gradient button with hover effects
- **Data tables** - Responsive machinery and equipment listings
- **Animation variety** - Slide, fade, scale, and stagger effects
- **Performance optimized** - Lightweight animations and efficient rendering

## 🚀 Tech Stack

- **React 18** - Modern UI library with hooks
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **React Headroom** - Auto-hide navigation component
- **React Scroll To Top** - Smooth scroll-to-top functionality
- **Shadcn UI** - High-quality UI components

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project
```

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
npm run preview  # Preview production build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                    # Reusable UI components
│   │   ├── AnimatedSection.tsx # Animation wrapper components
│   │   ├── DataTable.tsx      # Responsive data table
│   │   ├── button.tsx         # Button component
│   │   ├── input.tsx          # Input component
│   │   └── textarea.tsx       # Textarea component
│   └── sections/              # Page section components
│       ├── Header.tsx         # Top red bar
│       ├── Navigation.tsx     # Auto-hide navigation with animations
│       ├── HeroSection.tsx    # Company stats and hero content
│       ├── AboutSection.tsx   # Company description
│       ├── FactoryOverview.tsx # Production capacity overview
│       ├── SewingMachinerySection.tsx    # Sewing equipment table
│       ├── CuttingMachinerySection.tsx   # Cutting equipment table
│       ├── KnittingMachinerySection.tsx  # Knitting equipment table
│       ├── DyeingMachinerySection.tsx    # Dyeing equipment table
│       ├── FinishingMachinerySection.tsx # Finishing equipment table
│       ├── UtilityMachinerySection.tsx   # Utility equipment table
│       ├── ETPSection.tsx     # Environmental treatment plant
│       ├── LabSection.tsx     # Laboratory equipment
│       ├── CertificationsSection.tsx # Certifications and memberships
│       ├── ContactSection.tsx # Contact form and information
│       ├── Footer.tsx         # Footer with copyright
│       └── index.ts          # Component exports
├── screens/Desktop/
│   └── Desktop.tsx           # Main page layout
├── lib/                      # Utility functions
└── main.tsx                  # App entry point
```

## 🎬 Animation Features

### Navigation
- **Page load animations** - Logo and buttons slide down on load
- **Staggered timing** - Sequential button appearances
- **Hover effects** - Scale animations on interaction

### Section Animations
- **Slide animations** - Content slides from left/right
- **Fade effects** - Smooth opacity transitions
- **Scale animations** - Dramatic zoom-in effects
- **3D rotations** - Advanced perspective animations
- **Staggered containers** - Sequential element appearances

### Performance
- **Viewport detection** - Animations trigger when visible
- **Hardware acceleration** - GPU-optimized transforms
- **Once-only animations** - No re-triggering on scroll back
- **Optimized timing** - Balanced duration and delays

## 📱 Responsive Design

- **Mobile-first** - Designed for mobile, enhanced for desktop
- **Breakpoints** - sm, md, lg, xl responsive breakpoints
- **Flexible layouts** - CSS Grid and Flexbox
- **Scalable typography** - Responsive text sizing
- **Touch-friendly** - Optimized for touch interactions

## 🏭 Company Information

**Rahman Sport Wear Ltd.** is a 100% export-oriented garment manufacturing company established in 2008, specializing in:

- **Products**: T-shirts, Polo shirts, Tank tops, Shorts, Hoodies
- **Capacity**: 30,000 basic T-shirts + 5,000 polo shirts per day
- **Employees**: 1,038 across various departments
- **Facilities**: 18 sewing lines, comprehensive manufacturing setup
- **Certifications**: BKMEA, BGMEA, EPB memberships

## 📄 License

© 2024 Rahman Sport Wear Ltd. All rights reserved.
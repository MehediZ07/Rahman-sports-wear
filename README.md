# Rahman Sport Wear Ltd. - Company Website

A modern, responsive company portfolio website built with React, TypeScript, and Tailwind CSS featuring smooth scroll animations, professional design, and industry-standard optimizations.

## 🌐 Live Website

**Production URL**: https://rahmansportswear.surge.sh

## ✨ Features

### 🎨 Design & UX
- **Fully responsive design** - Optimized for mobile, tablet, and desktop
- **Smooth scroll animations** - Framer Motion powered animations
- **Auto-hide navigation** - React Headroom for smart navbar behavior
- **Professional layout** - Clean, corporate design aesthetic
- **Interactive elements** - Hover effects and micro-interactions
- **Enhanced mobile experience** - Improved text scaling and layout

### 📊 Content Sections
- **Company profile** - Establishment year, employees, production capacity
- **Machinery showcase** - Detailed responsive tables for all manufacturing equipment
- **Factory overview** - Production statistics with adaptive text layout
- **Certifications** - Business registration and industry certifications
- **Contact information** - Multiple contact methods and addresses

### 🛠️ Technical Features
- **Functional navigation** - Smooth scroll to sections
- **Scroll to top** - Gradient button with hover effects
- **Responsive data tables** - Mobile-optimized machinery and equipment listings
- **Animation variety** - Slide, fade, scale, and stagger effects
- **Performance optimized** - Lightweight animations and efficient rendering
- **SEO enhanced** - Comprehensive meta tags and structured data

## 🚀 Tech Stack

- **React 18** - Modern UI library with hooks
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework with custom breakpoints
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

### Deployment

```bash
npm run deploy  # Build and deploy to Surge.sh
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

## 🔍 SEO & Performance

### SEO Optimization
- **Comprehensive meta tags** - Title, description, keywords
- **Open Graph tags** - Social media optimization
- **Twitter Cards** - Enhanced Twitter sharing
- **Structured data** - JSON-LD schema for search engines
- **Security headers** - CSP, X-Frame-Options, and more

### Performance Features
- **Optimized images** - Proper alt tags and loading
- **Efficient animations** - Hardware-accelerated transforms
- **Clean code structure** - TypeScript for better maintainability
- **Responsive tables** - Mobile-optimized data display

## 📱 Responsive Design

- **Mobile-first** - Designed for mobile, enhanced for desktop
- **Enhanced breakpoints** - xs (475px), sm, md, lg, xl, 2xl responsive breakpoints
- **Flexible layouts** - CSS Grid and Flexbox
- **Adaptive typography** - Granular responsive text sizing with proper scaling
- **Touch-friendly** - Optimized for touch interactions
- **Improved mobile UX** - Better text wrapping and layout on small screens

## 🏭 Company Information

**Rahman Sport Wear Ltd.** is a 100% export-oriented garment manufacturing company established in 2008, specializing in:

- **Products**: T-shirts, Polo shirts, Tank tops, Shorts, Hoodies
- **Capacity**: 30,000 basic T-shirts + 5,000 polo shirts per day
- **Employees**: 1,038 across various departments
- **Facilities**: 18 sewing lines, comprehensive manufacturing setup
- **Certifications**: BKMEA, BGMEA, EPB memberships

## 🚀 Recent Improvements

### Mobile & Tablet Optimization
- **Enhanced responsive text** - Better scaling across all device sizes
- **Improved Factory Overview** - Adaptive text layout for different screen sizes
- **Fixed data table types** - Resolved TypeScript interface issues
- **Better breakpoint management** - Added xs breakpoint for fine-tuned control

### Code Quality
- **TypeScript improvements** - Better type safety and interface definitions
- **SEO enhancements** - Comprehensive meta tags and structured data
- **Performance optimizations** - Efficient rendering and animations

### Deployment
- **Live on Surge.sh** - Deployed at rahmansportswear.surge.sh
- **Global CDN** - Fast loading worldwide with 10+ server locations
- **SSL Certificate** - Secure HTTPS connection
- **Automated deployment** - One-command deployment script

## 🌍 Deployment Details

- **Platform**: Surge.sh
- **Domain**: rahmansportswear.surge.sh
- **SSL**: Valid certificate with 200+ days remaining
- **CDN Locations**: San Francisco, London, Toronto, New York, Amsterdam, Frankfurt, Singapore, Bangalore, Sydney, Tokyo
- **Size**: 22 files, optimized for fast loading

## 📄 License

© 2024 Rahman Sport Wear Ltd. All rights reserved.
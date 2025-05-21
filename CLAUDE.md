# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

WorkSquared.ai is a simple landing page built with Astro and React. The site serves as the homepage for WorkSquared with minimal content and a link to SocioTechnica.

## Development Setup

### Prerequisites

- Node.js (recommended: v18+)
- npm (comes with Node.js)

### Installation

```bash
npm install
```

### Development Server

Start the development server to see changes in real-time:

```bash
npm run dev
```

The site will be available at http://localhost:4321

### Building for Production

Build the site for production:

```bash
npm run build
```

This will generate static files in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

- `src/pages/` - Contains Astro pages including the main index.astro
- `src/components/` - Contains reusable Astro and React components
- `src/layouts/` - Contains layout components
- `public/` - Static assets like favicons that are copied directly to the build

## Deployment

The site is configured to deploy to Cloudflare Pages.

## Tech Stack

- [Astro](https://astro.build/) - Web framework for content-focused websites
- React - UI components
- Cloudflare Pages - Hosting and deployment
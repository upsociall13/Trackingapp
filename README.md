<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Tracking App - AI-Powered Shipment Tracking

A comprehensive shipment tracking and logistics management application built with React, TypeScript, and Google Gemini AI. Track shipments in real-time, manage logistics rules, and get AI-powered insights for your supply chain.

**View your app in AI Studio:** https://ai.studio/apps/e3eb2696-2fbd-4039-a422-057972abbcf5

## Features

- 🚢 Real-time shipment tracking
- 🤖 AI-powered logistics assistant powered by Google Gemini
- 📊 Interactive dashboards with Recharts
- 🌓 Dark mode support
- 👥 Multi-role support (Customer, Agent)
- ⚙️ Rule engine for automated logistics management
- 🔔 Real-time notifications
- 🌍 Multi-language support

## Prerequisites

- **Node.js** 18+ and npm
- **Gemini API Key** from [Google AI Studio](https://ai.studio/apikey)

## Quick Start

### 1. Clone and Install

```bash
git clone <repository-url>
cd Trackingapp
npm install
```

### 2. Configure Environment

Create `.env.local` in the project root:

```bash
cp .env.example .env.local
```

Then edit `.env.local` and add your Gemini API key:

```
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Run Locally

```bash
npm run dev
```

The app will start at `http://localhost:3000`

## Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

## Preview Production Build

```bash
npm run preview
```

## Type Checking

```bash
npm run lint
```

This runs TypeScript compiler to check for type errors without emitting files.

## Deployment

### Vercel

The project includes `vercel.json` for seamless Vercel deployment:

1. Push to GitHub
2. Connect repository to Vercel
3. Add `VITE_GEMINI_API_KEY` environment variable in Vercel dashboard
4. Deploy

### Environment Variables

For production deployment, set:
- `VITE_GEMINI_API_KEY` - Your Gemini API key

## Project Structure

```
Trackingapp/
├── components/        # React components
├── services/          # Business logic & API calls
├── src/
│   └── context/       # React context providers
├── App.tsx            # Main app component
├── types.ts           # TypeScript type definitions
├── constants.ts       # Application constants
├── vite.config.ts     # Vite build configuration
├── tsconfig.json      # TypeScript configuration
├── vercel.json        # Vercel deployment config
└── package.json       # Project dependencies
```

## Technology Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Styling
- **Recharts** - Data visualization
- **Lucide React** - Icons
- **Google Gemini AI** - AI capabilities

## Troubleshooting

### API Key Issues

If you get "API key not found" errors:
1. Verify `VITE_GEMINI_API_KEY` is set in `.env.local`
2. Make sure it starts with `VITE_` prefix (required by Vite)
3. Restart the dev server after changing env vars

### Build Errors

1. **TypeScript errors**: Run `npm run lint` to see full diagnostics
2. **Module not found**: Clear `node_modules` and `dist`, then run `npm install`
3. **Port 3000 in use**: Change port in `vite.config.ts` or kill the process using port 3000

## Performance

- Code splitting with vendor chunks optimization
- Minification with Terser
- Source maps disabled in production
- ~100KB+ gzip bundle size

## License

MIT

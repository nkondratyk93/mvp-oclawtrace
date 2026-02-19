# OpenClaw Trace

Free, open-source observability dashboard for OpenClaw AI agents. Track costs, debug heartbeats, detect waste — one command to start.

**Landing page:** https://oclawtrace.visieasy.com  
**Tool repo:** https://github.com/Tell-Me-Mo/openclaw-trace

## What it does

OpenClaw Trace gives you end-to-end visibility into your OpenClaw multi-agent systems. See which agents are running, how much they cost per heartbeat, where tokens are being wasted, and compare runs side-by-side.

## Features

- Real-time agent monitoring with live status and auto-refresh
- Cost and token tracking per heartbeat with step-by-step breakdown
- Budget guardrails with daily/monthly limits and visual warnings
- A/B heartbeat comparison with context growth and cost delta
- Automatic waste detection for redundant API calls and file reads
- Full REST API for programmatic access and custom integrations

## Install

```bash
npx openclaw-trace
```

Then open http://localhost:3141

## Tech Stack

Next.js 15, Tailwind CSS, shadcn/ui, TypeScript

## Development

```bash
npm install && npm run dev
```

Open http://localhost:3000

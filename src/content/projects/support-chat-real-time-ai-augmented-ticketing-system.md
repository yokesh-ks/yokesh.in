---
title: "Support Chat – Real Time AI Augmented Ticketing System"
description: "Production-grade real-time support chat system combining conversational AI, ticket lifecycle orchestration, authenticated user context, and document-aware conversations."
technologies: ["Next.js", "Azure Web PubSub (WebSocket)", "CopilotKit", "TypeScript", "REST APIs", "Session Storage", "OCR (PyMuPDF, Tesseract)"]
status: "live"
category: "ai"
main_image_url: ""
logo: ""
github: ""
website: ""
isFeatured: true
---

Production-grade real-time support chat system combining conversational AI, ticket lifecycle orchestration, authenticated user context, and document-aware conversations.

- Built a real-time support chat UI backed by Azure Web PubSub, enabling low-latency bi-directional messaging between customers, agents, and an AI copilot.
- Integrated a CopilotKit-based AI assistant with tightly controlled prompts to enforce support workflows, ticketing rules, and knowledge-base boundaries.
- Implemented robust session and conversation persistence using session IDs and conversation IDs to support reloads, reconnections, and multi-tab continuity.
- Enforced a strict ticket lifecycle workflow (auto-create → associate contact → update → safe close) via AI instruction scaffolding and backend coordination.
- Added file-aware conversations with OCR-based text extraction, authenticated user context injection, custom CopilotChat UI components, typing indicators, and idempotent message handling.
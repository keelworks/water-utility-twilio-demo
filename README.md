# Twilio SMS Demo (Node)

A tiny, safe example that sends **one SMS** using Twilio from Node.js. Good for teammates to verify their setup end-to-end.

> **No secrets committed.** Copy `.env.example` to `.env` and fill in your values locally.

---

## Prereqs

- **Node 18+** (`nvm use` with `.nvmrc`)
- A Twilio account with:
  - **Account SID** + **Auth Token**
  - A **Twilio phone number** with SMS capability (E.164 format, e.g., `+15103990050`)
  - If using a **trial** account: the **recipient number must be verified** in Twilio

> **E.164 format:** `+<countrycode><number>` (e.g., `+491752350401`). Avoid `0049...`.

---

## Setup

```bash
git clone <this-repo>
cd twilio-sms-demo
nvm use
npm ci
cp .env.example .env
# Edit .env with your values
npm run send

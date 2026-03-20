# MODEL_ROUTER.md — Provider Failover Protocol

The router keeps us inside quota by stepping through providers in this order: **Anthropic → Google → OpenAI**. Every check-in should confirm where we are in the stack _and_ whether we need to move.

## CLI quick reference (`./scripts/model-router.sh`)
| Command | Purpose |
| --- | --- |
| `./scripts/model-router.sh status` | Show current provider + the next one in the queue |
| `./scripts/model-router.sh next` | Advance to the next provider in the predefined loop |
| `./scripts/model-router.sh anthropic|google|openai` | Jump directly to a specific provider (only when you know quota is safe) |

The script persists state in `~/.openclaw/model-router-state`, so the value survives restarts and is read by every shell.

## When to switch providers
| Symptom | Action |
| --- | --- |
| 429 / quota warning from current provider | Run `next`, then set `/session_status` to the new provider |
| You know we burned most of today’s allocation on a provider | Move pre-emptively so long-running jobs don’t die mid-run |
| Provider is degraded / unresponsive for >2 minutes | Advance immediately; note the outage in QA_REPORT.md |
| Returning to work after >12h gap | Run `status` and log it even if you stay put |

## Standard workflow (daily & heartbeat cadence)
1. `./scripts/model-router.sh status`
2. If the output shows we’re on the last provider in the loop _or_ you expect heavy usage, run `./scripts/model-router.sh next` before kicking off new work.
3. Mirror the router state into this chat so sub-agents inherit it:
   ```
   /session_status {"model": "anthropic/claude-sonnet-4-6"}
   /session_status {"model": "google/gemini-3.1-pro-preview"}
   /session_status {"model": "openai/gpt-5.1-codex"}
   ```
   Aliases also work: `gemini`, `sonnet`, `GPT`.
4. Note the change in `QA_REPORT.md` (see template below) so we can correlate failures/rate limits later.
5. During long builds or research runs, re-check status every hour or immediately after any 429/timeout and repeat the loop if needed.

### Logging template (drop into QA_REPORT.md)
```
[2026-03-20 18:40 UTC] Router: anthropic → google — Anthropic quota at ~80%, prepping multi-agent run.
```
Include time, from/to, and the reason.

## Sub-agent + session hygiene
- Always run `/session_status …` **before** spawning sub-agents; they inherit whatever model you last set in this chat.
- If you have to switch while sub-agents are running, post an update in their threads and re-run `/session_status` so future tasks pick up the change.
- When returning control to a heartbeat or cron session, mention the active provider so the next check-in knows the baseline.

# MODEL_ROUTER.md — Model Failover Guide

## Overview

`scripts/model-router.sh` manages the active AI provider across Jim's sessions. The default rotation is:

**Anthropic → Google → OpenAI**

State is stored in `~/.openclaw/model-router-state` (gitignored).

---

## Commands

```bash
./scripts/model-router.sh status      # Show current + next provider
./scripts/model-router.sh next        # Advance to the next provider
./scripts/model-router.sh current     # Print current model string only
./scripts/model-router.sh anthropic   # Jump directly to Anthropic
./scripts/model-router.sh google      # Jump directly to Google
./scripts/model-router.sh openai      # Jump directly to OpenAI
```

---

## Model Map

| Label     | Model                            |
|-----------|----------------------------------|
| anthropic | `anthropic/claude-sonnet-4-6`    |
| google    | `google/gemini-3.1-pro-preview`  |
| openai    | `openai/gpt-5.1-codex`           |

---

## When to Switch

Switch providers when:
- You hit a quota error or 429 from the current provider
- Responses degrade noticeably in quality or speed
- A heartbeat check shows the current provider is under heavy load
- You're spinning up a large batch of sub-agents and want to spread load

---

## Switching in a Live Session

After running `./scripts/model-router.sh next` (or a direct jump), apply the new model to your current session:

```
/session_status {"model": "google/gemini-3.1-pro-preview"}
```

Replace the model string with whatever `status` reports as current. Sub-agents spawned after this point will inherit the override.

To reset to the platform default:

```
/session_status {"model": "default"}
```

---

## Heartbeat Routine

Every heartbeat, HEARTBEAT.md instructs Jim to run `status` first. If quota looks tight, advance before doing heavy work. This is the standard check — keep it fast:

```bash
./scripts/model-router.sh status
```

If the current provider has been hammered:

```bash
./scripts/model-router.sh next
# Then apply via /session_status in the active chat
```

---

## Quota Logging (TODO)

A daily quota check + log routine is not yet wired in — see TASKS.md P2. When implemented, it should:

- Record provider usage timestamps to a log file (e.g. `logs/model-usage.jsonl`)
- Flag when a provider has been active for >X hours continuously
- Suggest rotation at heartbeat time

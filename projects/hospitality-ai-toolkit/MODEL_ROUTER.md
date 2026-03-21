# MODEL_ROUTER.md — Provider Failover Playbook

**Order:** Anthropic → Google → OpenAI

All work now runs through `scripts/model-router.sh`. It keeps a pointer to the current provider in `~/.openclaw/model-router-state`.

## Commands

```bash
# Show current + next provider
./scripts/model-router.sh status

# Advance to the next provider in the chain
./scripts/model-router.sh next

# Jump directly to a provider
./scripts/model-router.sh anthropic
./scripts/model-router.sh google
./scripts/model-router.sh openai
```

After switching, update the live session so sub-agents inherit the new model:

```
/session_status {"model":"anthropic/claude-sonnet-4-6"}
```

(Replace with `google/gemini-3.1-pro-preview` or `openai/gpt-5.1-codex` as needed.)

## Workflow

1. **Start of day** — `./scripts/model-router.sh status` and note the next provider.
2. **Before spawning large jobs** — ensure we’re on Anthropic; if not, `./scripts/model-router.sh anthropic`.
3. **On 429/credit warnings** — immediately run `./scripts/model-router.sh next` then issue `/session_status {"model":"<next>"}`.
4. **Log the switch** — add a one-line note to the current project changelog so we know when/why the swap happened.

This keeps the agent online even when a provider’s quota dies mid-build.

# HEARTBEAT.md

1. Run `./scripts/model-router.sh status` — if quota is tight or you already used the current provider heavily, advance (`next`) and update the session via `/session_status`. Then run `./scripts/log-model-usage.sh heartbeat` to log the active provider.
2. Read `TASKS.md` for active tasks.
2. If tasks remain:
   - Make sure we are operating on a 10-minute heartbeat interval.
   - Work continuously on the highest priority (P1 -> P2 -> P3) incomplete task on the roadmap.
   - Complete a meaningful chunk, commit/push, and send a sprint update message.
   - NEVER ask permission to continue working on an active task list. Just work.
3. If no tasks remain:
   - Drop the heartbeat interval back to 30 minutes.
   - Reply exactly: HEARTBEAT_OK

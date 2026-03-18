# Skills Quick Reference

| Skill | When to Use | Inputs Needed | Outputs |
| --- | --- | --- | --- |
| **healthcheck** | Hardening audits, firewall/SSH review, gateway status, periodic risk posture reports. | Access to host, desired scope (services, ports, updates). | Checklist of findings + remediation steps; cron schedules for recurring checks. |
| **node-connect** | Diagnose OpenClaw node pairing/connectivity issues (QR/manual codes, Tailscale, remote URLs). | Error logs/messages, device/platform, network context. | Root-cause analysis + fix instructions (config edits, retries, network steps). |
| **openai-image-gen** | Generate batches of images (creative concepts, galleries). | Prompt/theme, count, desired style. | Image set + auto-generated `index.html` gallery. |
| **openai-whisper-api** | Transcribe audio/voice notes via OpenAI Whisper. | Audio file path/URL, target format. | Markdown/JSON transcription with timestamps. |
| **skill-creator** | Create or improve AgentSkills (new SKILL.md, audits). | Task description, desired behaviors, dependencies. | New/updated skill directory compliant with spec. |
| **tmux** | Remote-control tmux sessions for long-running CLIs or REPLs. | Target session/pane, keystroke plan. | Command execution within tmux pane + captured output. |
| **weather** | Provide current weather/forecast via wttr.in or Open-Meteo. | Location + timeframe. | Weather summary/forecast text. |
| **legion-forge** | Stand up or refactor a legion (charter, cohorts, agent dossiers, cadences). | Mission brief, constraints, related legion docs. | Updated legion charter + agent files + spawn checklist. |
| **business-intel-harvest** | Collect baseline data/KPIs/tools for any Jordan venture. | Target business/pillar, desired outputs, current intel inventory. | Intel summaries, storage locations, follow-up task list. |

> Add new skills here as we build them so deployment criteria stay obvious.

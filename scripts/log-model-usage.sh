#!/bin/bash
# log-model-usage.sh — append a model usage entry to logs/model-usage.jsonl
# Called automatically by heartbeat or manually
# Usage: ./scripts/log-model-usage.sh [note]

WORKSPACE="$(cd "$(dirname "$0")/.." && pwd)"
STATE_FILE="$HOME/.openclaw/model-router-state"
LOG_FILE="$WORKSPACE/logs/model-usage.jsonl"
MODELS=("anthropic/claude-sonnet-4-6" "google/gemini-3.1-pro-preview" "openai/gpt-5.1-codex")
LABELS=("anthropic" "google" "openai")

mkdir -p "$(dirname "$LOG_FILE")"

idx=0
if [ -f "$STATE_FILE" ]; then
  idx=$(cat "$STATE_FILE")
fi

model="${MODELS[$idx]}"
label="${LABELS[$idx]}"
ts=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
note="${1:-heartbeat}"

entry="{\"ts\":\"$ts\",\"provider\":\"$label\",\"model\":\"$model\",\"note\":\"$note\"}"
echo "$entry" >> "$LOG_FILE"
echo "Logged: $entry"

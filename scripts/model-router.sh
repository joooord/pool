#!/bin/bash
# model-router.sh — cycles through Anthropic → Google → OpenAI
# Usage: source this file or run ./model-router.sh [anthropic|google|openai|next|status]

STATE_FILE="$HOME/.openclaw/model-router-state"
MODELS=("anthropic/claude-sonnet-4-6" "google/gemini-3.1-pro-preview" "openai/gpt-5.1-codex")
LABELS=("anthropic" "google" "openai")

load_index() {
  if [ -f "$STATE_FILE" ]; then
    cat "$STATE_FILE"
  else
    echo "0"
  fi
}

save_index() {
  echo "$1" > "$STATE_FILE"
}

current_model() {
  local idx=$(load_index)
  echo "${MODELS[$idx]}"
}

status() {
  local idx=$(load_index)
  echo "Current model: ${MODELS[$idx]} (${LABELS[$idx]})"
  echo "Next: ${MODELS[$(( (idx+1) % ${#MODELS[@]} ))]} (${LABELS[$(( (idx+1) % ${#MODELS[@]} ))]})"
}

next_model() {
  local idx=$(load_index)
  local next=$(( (idx+1) % ${#MODELS[@]} ))
  save_index "$next"
  echo "Switched to: ${MODELS[$next]} (${LABELS[$next]})"
}

set_model() {
  local label="$1"
  for i in "${!LABELS[@]}"; do
    if [ "${LABELS[$i]}" = "$label" ]; then
      save_index "$i"
      echo "Switched to: ${MODELS[$i]}"
      return 0
    fi
  done
  echo "Unknown model: $label. Options: anthropic, google, openai"
  return 1
}

CMD="${1:-status}"
case "$CMD" in
  next)       next_model ;;
  status)     status ;;
  anthropic)  set_model anthropic ;;
  google)     set_model google ;;
  openai)     set_model openai ;;
  current)    current_model ;;
  *)          echo "Usage: model-router.sh [next|status|current|anthropic|google|openai]" ;;
esac

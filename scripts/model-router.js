#!/usr/bin/env node

const task = process.argv.slice(2).join(' ').toLowerCase();

const MODELS = {
  T0: "google/gemini-3-flash",
  T1: "google/gemini-3.1-pro-preview",
  T2: "anthropic/claude-sonnet-4-20250514",
  T3: "anthropic/claude-opus-4-6-20250514"
};

// If no task provided, default to Tier 1
if (!task) {
  console.log(MODELS.T1);
  process.exit(0);
}

// 1. Special Routes (Highest Priority)
if (task.match(/\b(financial|finance|market analysis|trading|portfolio)\b/)) {
  console.log(MODELS.T3); // Financial analysis -> Opus
  process.exit(0);
}
if (task.match(/\b(vision|image|picture|photo|multimodal)\b/)) {
  console.log(MODELS.T1); // Vision/multimodal -> Gemini 3.1 Pro
  process.exit(0);
}
if (task.match(/\b(long context|>200k|huge file|large codebase)\b/)) {
  console.log(MODELS.T1); // Long context -> Gemini 3.1 Pro
  process.exit(0);
}

// 2. Tier 3: Complex reasoning, strategy, writing, architecture
if (task.match(/\b(architecture|strategy|complex reasoning|writing|draft|essay|copywriting|strategic)\b/)) {
  console.log(MODELS.T3);
  process.exit(0);
}

// 3. Tier 2: Coding, building, data work
if (task.match(/\b(code|build|data work|debug|script|typescript|react|python|html|css|database|sql|repo|git|app)\b/)) {
  console.log(MODELS.T2);
  process.exit(0);
}

// 4. Tier 0: Heartbeats, status
if (task.match(/\b(heartbeat|status|ping|system check)\b/)) {
  console.log(MODELS.T0);
  process.exit(0);
}

// 5. Tier 1: Simple queries, conversation (Default)
console.log(MODELS.T1);

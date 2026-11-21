<script setup lang="ts">
// An analogue clock for the task of the number seed: the learner sets the hands to a time said in English with four
// buttons. Its logic is in Uhr.ts. It is the input of the task: it emits the time set, in minutes since 12:00, with
// answer; the explainer draws "Prüfen", checks the answer and gives the feedback, the task number and "Neue Aufgabe".
// The clock starts at 12:00 and shows only the time set, never the solution.
import { computed, ref } from "vue";
import { digits, fill, generate } from "./Uhr.ts";

const props = defineProps<{
  /** The task, with {zeit} for the time as it is said in English. */
  task: string;
  /** The name of the clock for screen readers, with {n} for the time it shows. */
  clock: string;
  /** The label of the button that moves the hour hand on and back. */
  hourPlus: string;
  hourMinus: string;
  /** The label of the button that moves the minute hand five minutes on and back. */
  minutePlus: string;
  minuteMinus: string;
  /** The line below the clock, with {n} for the time set. */
  shows: string;
  /** The app's message for each typical mistake, in the order of about.mistakes, with {zeit} and {n}. */
  mistakes: string[];
  /** The task number, which the explainer gives. */
  seed: number;
  /** Whether the explainer checked the answer the clock gives now. */
  checked: boolean;
}>();
const emit = defineEmits<{ answer: [number] }>();

// the task of the number the explainer gives; "Neue Aufgabe" mounts the component afresh with another
const current = computed(() => generate(props.seed, props));
const time = ref(0);
const hour = computed(() => Math.floor(time.value / 60));
const minute = computed(() => time.value % 60);
const hourAngle = computed(() => (hour.value + minute.value / 60) * 30);
const minuteAngle = computed(() => minute.value * 6);
const ticks = Array.from({ length: 12 }, (_, i) => i * 30);

function change(hours: number, minutes: number): void {
  // five minutes back from x:00 go to the hour before, as on a real clock
  time.value = (((time.value + hours * 60 + minutes) % 720) + 720) % 720;
  emit("answer", time.value);
}
</script>

<template>
  <div class="uhr">
    <p>{{ fill(task, current) }}</p>
    <svg
      class="uhr-face"
      :class="{ 'uhr-checked': checked }"
      viewBox="0 0 200 200"
      role="img"
      :aria-label="clock.replace(/\{n\}/g, digits(time))"
    >
      <circle cx="100" cy="100" r="92" class="uhr-ring" />
      <line
        v-for="angle in ticks"
        :key="angle"
        x1="100"
        y1="14"
        x2="100"
        y2="24"
        class="uhr-tick"
        :transform="`rotate(${angle} 100 100)`"
      />
      <text x="100" y="50" text-anchor="middle" class="uhr-number">12</text>
      <text x="162" y="106" text-anchor="middle" class="uhr-number">3</text>
      <text x="100" y="168" text-anchor="middle" class="uhr-number">6</text>
      <text x="38" y="106" text-anchor="middle" class="uhr-number">9</text>
      <line x1="100" y1="100" x2="100" y2="58" class="uhr-hour" :transform="`rotate(${hourAngle} 100 100)`" />
      <line x1="100" y1="100" x2="100" y2="30" class="uhr-minute" :transform="`rotate(${minuteAngle} 100 100)`" />
      <circle cx="100" cy="100" r="5" class="uhr-centre" />
    </svg>
    <p aria-live="polite">{{ shows.replace(/\{n\}/g, digits(time)) }}</p>
    <div class="uhr-buttons">
      <button type="button" @click="change(-1, 0)">{{ hourMinus }}</button>
      <button type="button" @click="change(1, 0)">{{ hourPlus }}</button>
      <button type="button" @click="change(0, -5)">{{ minuteMinus }}</button>
      <button type="button" @click="change(0, 5)">{{ minutePlus }}</button>
    </div>
  </div>
</template>

<style scoped>
.uhr-face {
  display: block;
  width: 14rem;
  max-width: 100%;
  margin: 0.5rem 0;
}

.uhr-ring {
  fill: var(--page-surface);
  stroke: var(--page-text);
  stroke-width: 3;
}

.uhr-tick {
  stroke: var(--page-text);
  stroke-width: 2;
}

.uhr-number {
  fill: var(--page-text);
  font-size: 14px;
}

.uhr-hour {
  stroke: var(--page-text);
  stroke-width: 6;
  stroke-linecap: round;
}

.uhr-minute {
  stroke: var(--page-accent);
  stroke-width: 3;
  stroke-linecap: round;
}

.uhr-centre {
  fill: var(--page-text);
}

.uhr-checked .uhr-minute {
  opacity: 0.7;
}

.uhr-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.uhr-buttons button {
  min-height: 44px;
  min-width: 44px;
}
</style>

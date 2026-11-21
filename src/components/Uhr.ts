// The logic of Uhr.vue, an analogue clock whose hands the learner sets to a time said in English ("half past seven"):
// pure functions, which the build tests over fixed seeds (the exercise contract). A task is an hour of the clock
// (1 to 12) and the minutes (a multiple of 5); an answer is the time the learner set, in minutes since 12:00 (0 to
// 719). The explainer checks an answer with check and gives the message of reason. describe states a task and its
// solution, about says what the exercise is; template, params, mistakes and show give a tutor the task once and each
// number's inputs and outputs.

/** The props the logic needs: the task with {zeit}, and the app's message for each typical mistake. */
export interface Props {
  task: string;
  mistakes?: readonly string[];
}

export interface Task {
  /** The hour of the clock face, 1 to 12, of the time before the minutes (7 for "twenty to eight"). */
  hour: number;
  /** The minutes after that hour: 0, 5, … 55. */
  minute: number;
}

/** The time the learner set, in minutes since 12:00. */
export type Answer = number;

const HOURS = ["twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven"];
/** How the minutes are said: past the hour up to 30, to the next hour after it. */
const MINUTES: Record<number, string> = {
  5: "five past",
  10: "ten past",
  15: "a quarter past",
  20: "twenty past",
  25: "twenty-five past",
  30: "half past",
  35: "twenty-five to",
  40: "twenty to",
  45: "a quarter to",
  50: "ten to",
  55: "five to",
};

const MINUTES_OF_DAY = 720;
const wrap = (minutes: number) => ((minutes % MINUTES_OF_DAY) + MINUTES_OF_DAY) % MINUTES_OF_DAY;

/** A small seeded random generator (mulberry32). */
function random(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** The task of `seed`: an hour and minutes, never 12 o'clock (the start state of the clock). */
export function generate(seed: number, _props?: Props): Task {
  const next = random(seed);
  for (;;) {
    const hour = 1 + Math.floor(next() * 12);
    const minute = Math.floor(next() * 12) * 5;
    if (!(hour === 12 && minute === 0)) return { hour, minute };
  }
}

/** The time of a task in minutes since 12:00. */
const timeOf = (task: Task) => wrap((task.hour % 12) * 60 + task.minute);

/** The time as it is said in English: "half past seven", "a quarter to eight", "seven o'clock". */
export function phrase(task: Task): string {
  if (task.minute === 0) return `${HOURS[task.hour % 12]} o'clock`;
  const hour = task.minute > 30 ? task.hour + 1 : task.hour;
  return `${MINUTES[task.minute]} ${HOURS[hour % 12]}`;
}

/** Whether `answer` is the time of the task. */
export function check(task: Task, answer: Answer): boolean {
  return answer === timeOf(task);
}

/** The right answer. */
export function solution(task: Task): Answer {
  return timeOf(task);
}

/** A wrong answer: an hour further on. */
export function wrong(task: Task): Answer {
  return wrap(timeOf(task) + 60);
}

/**
 * The answer of each typical mistake of about.mistakes, undefined where it does not arise: "past" and "to" swapped
 * (for the times that are said with one of them), and "half past seven" read as the German "halb sieben" (6:30).
 */
export function mistakes(task: Task): (Answer | undefined)[] {
  const { hour, minute } = task;
  let swapped: Answer | undefined;
  if (minute > 0 && minute < 30) swapped = wrap(hour * 60 - minute);
  if (minute > 30) swapped = wrap((hour + 1) * 60 + (60 - minute));
  const german = minute === 30 ? wrap((hour - 1) * 60 + 30) : undefined;
  return [swapped, german];
}

/** The time as digits, "7:30" (12 for the hour of the face's top). */
export function digits(answer: Answer): string {
  const hour = Math.floor(wrap(answer) / 60);
  const minute = wrap(answer) % 60;
  return `${hour === 0 ? 12 : hour}:${String(minute).padStart(2, "0")}`;
}

/** A text of the props with {zeit} and {n} (the time the learner set) filled in. */
export const fill = (text: string, task: Task, answer: Answer = 0) =>
  text.replace(/\{zeit\}/g, phrase(task)).replace(/\{n\}/g, digits(answer));

/** The app's message for a wrong answer, from the props: that of its typical mistake, or none. */
export function reason(task: Task, answer: Answer, props: Props, _lang?: string): string | undefined {
  const index = mistakes(task).findIndex((mistaken) => mistaken === answer);
  const message = index < 0 ? undefined : props.mistakes?.[index];
  return message === undefined ? undefined : fill(message, task, answer);
}

/** The task as a learner sees it, and its solution. */
export function describe(task: Task, props: Props, _lang: string): { task: string; solution: string } {
  return { task: fill(props.task, task), solution: `${digits(solution(task))} Uhr: ${phrase(task)}` };
}

/** The task as a learner reads it, with {zeit}: the prop task. */
export function template(props: Props, _lang: string): string {
  return props.task;
}

/** What sets a task: the time as it is said. */
export function params(task: Task, _props: Props, _lang: string): Record<string, string> {
  return { zeit: phrase(task) };
}

/** An answer as text. */
export function show(answer: Answer, _task?: Task, _props?: Props, _lang?: string): string {
  return digits(answer);
}

/** What the exercise is, for a tutor. */
export const about = {
  task: "Eine Uhr mit Zeigern. Das Kind liest eine Uhrzeit auf Englisch, zum Beispiel „half past seven“, und stellt mit vier Knöpfen (Stunde plus oder minus, fünf Minuten plus oder minus) die Zeiger auf diese Zeit. Dann drückt es „Prüfen“. Die Uhr zeigt zuerst 12:00.",
  answer: "Die Uhrzeit, auf die das Kind die Uhr gestellt hat.",
  correct: "Richtig, wenn die Uhr genau die genannte Uhrzeit zeigt (half past seven ist 7:30).",
  mistakes: [
    "past und to vertauscht: zum Beispiel a quarter to eight als 8:15 statt 7:45.",
    "half past seven als 6:30 gestellt, wie das deutsche „halb sieben“. Im Englischen ist half past seven 7:30.",
  ],
};

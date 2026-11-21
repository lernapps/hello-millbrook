import { expect, test } from "vite-plus/test";
import { check, describe, digits, generate, mistakes, phrase, reason, solution, wrong } from "./Uhr.ts";

const props = {
  task: "Stelle die Uhr auf: {zeit}.",
  mistakes: ["Du hast past und to vertauscht: {zeit} ist nicht {n}.", "Half past ist nach der vollen Stunde: {zeit}."],
};

test("the time of the task is right; the next hour and each mistake are wrong", () => {
  for (let seed = 1; seed <= 50; seed++) {
    const task = generate(seed, props);
    expect(task.hour).toBeGreaterThanOrEqual(1);
    expect(task.hour).toBeLessThanOrEqual(12);
    expect(task.minute % 5).toBe(0);
    expect(solution(task)).not.toBe(0);
    expect(check(task, solution(task))).toBe(true);
    expect(check(task, wrong(task))).toBe(false);
    for (const answer of mistakes(task)) if (answer !== undefined) expect(check(task, answer)).toBe(false);
  }
});

test("the time is said as in English", () => {
  expect(phrase({ hour: 7, minute: 30 })).toBe("half past seven");
  expect(phrase({ hour: 7, minute: 45 })).toBe("a quarter to eight");
  expect(phrase({ hour: 12, minute: 15 })).toBe("a quarter past twelve");
  expect(phrase({ hour: 5, minute: 0 })).toBe("five o'clock");
  expect(phrase({ hour: 11, minute: 40 })).toBe("twenty to twelve");
  expect(digits(solution({ hour: 7, minute: 30 }))).toBe("7:30");
  expect(digits(solution({ hour: 12, minute: 15 }))).toBe("12:15");
});

test("half past seven is 7:30, not the German 6:30; a quarter to eight is 7:45, not 8:15", () => {
  const half = { hour: 7, minute: 30 };
  expect(check(half, 7 * 60 + 30)).toBe(true);
  expect(check(half, 6 * 60 + 30)).toBe(false);
  expect(mistakes(half)).toEqual([undefined, 6 * 60 + 30]);
  const quarterTo = { hour: 7, minute: 45 };
  expect(check(quarterTo, 7 * 60 + 45)).toBe(true);
  expect(mistakes(quarterTo)[0]).toBe(8 * 60 + 15);
  expect(mistakes({ hour: 7, minute: 0 })).toEqual([undefined, undefined]);
});

test("describe fills in the task; each typical mistake gets its message", () => {
  const task = { hour: 7, minute: 45 };
  expect(describe(task, props, "de")).toEqual({
    task: "Stelle die Uhr auf: a quarter to eight.",
    solution: "7:45 Uhr: a quarter to eight",
  });
  expect(reason(task, 8 * 60 + 15, props)).toBe("Du hast past und to vertauscht: a quarter to eight ist nicht 8:15.");
  expect(reason({ hour: 7, minute: 30 }, 6 * 60 + 30, props)).toBe(
    "Half past ist nach der vollen Stunde: half past seven.",
  );
  expect(reason(task, 3 * 60, props)).toBeUndefined();
});

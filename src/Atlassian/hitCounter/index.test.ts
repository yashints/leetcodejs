import { describe, test, expect } from "@jest/globals";
import { HitCounter } from ".";

describe("Hit counter should:", () => {
  test("Return the number of hits in the last 5 mins", () => {
    const hitCounter = new HitCounter();
    hitCounter.hit(1); // hit at timestamp 1.
    hitCounter.hit(2); // hit at timestamp 2.
    hitCounter.hit(3); // hit at timestamp 3.
    expect(hitCounter.getHits(4)).toBe(3); // get hits at timestamp 4, return 3.
    hitCounter.hit(300); // hit at timestamp 300.
    expect(hitCounter.getHits(300)).toBe(4); // get hits at timestamp 300, return 4.
    expect(hitCounter.getHits(301)).toBe(3); // get hits at timestamp 301, return 3.
  });

  test("should handle concurrent hits and getHits calls", async () => {
    const counter = new HitCounter();

    // Simulate concurrent hits
    const hitTasks = Array.from(
      { length: 100 },
      (_, i) =>
        new Promise((resolve) =>
          setTimeout(() => {
            counter.hit(i + 1);
            resolve(null);
          }, Math.random() * 100)
        ) // Random delay to simulate different arrival times
    );

    // Simulate concurrent getHits calls
    const getHitsTasks = [
      new Promise((resolve) =>
        setTimeout(() => {
          const hits = counter.getHits(50); // Get hits at timestamp 50
          console.log("Hits at timestamp 50:", hits);
          expect(hits).toBeGreaterThanOrEqual(25); // This depends on timing and test
          resolve(null);
        }, 120)
      ),

      new Promise((resolve) =>
        setTimeout(() => {
          const hits = counter.getHits(100); // Get hits at timestamp 100
          console.log("Hits at timestamp 100:", hits);
          expect(hits).toBeGreaterThanOrEqual(75); // This depends on timing and test
          resolve(null);
        }, 150)
      ),
    ];

    // Run all tasks concurrently
    await Promise.all([...hitTasks, ...getHitsTasks]);
  });
});

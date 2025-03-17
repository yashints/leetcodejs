import { describe, expect, test } from "@jest/globals";
import { TimeMap } from ".";

describe("Timemap should:", () => {
  test("Return the correct ourput", () => {
    const timeMap = new TimeMap();

    timeMap.set("foo", "bar", 1);
    let val = timeMap.get("foo", 1);
    expect(val).toBe("bar");

    val = timeMap.get("foo", 3);
    expect(val).toBe("bar");

    timeMap.set("foo", "bar2", 4);
    val = timeMap.get("foo", 4);
    expect(val).toBe("bar2");

    val = timeMap.get("foo", 5);
    expect(val).toBe("bar2");
  });
});

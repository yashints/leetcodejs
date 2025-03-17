/**
981. Time Based Key-Value Store - Medium
Description
Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

Implement the TimeMap class:

- TimeMap() Initializes the object of the data structure.
- void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
- String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".

Example 1:

Input
["TimeMap", "set", "get", "get", "set", "get", "get"]
[[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
Output
[null, null, "bar", "bar", null, "bar2", "bar2"]

Explanation
TimeMap timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);  // store the key "foo" and value "bar" along with timestamp = 1.
timeMap.get("foo", 1);         // return "bar"
timeMap.get("foo", 3);         // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
timeMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
timeMap.get("foo", 4);         // return "bar2"
timeMap.get("foo", 5);         // return "bar2"
 */

export class TimeMap {
  map: Map<number, Map<string, string>>;
  constructor() {
    this.map = new Map();
  }

  set(key: string, value: string, timestamp: number): void {
    const kv = new Map();
    kv.set(key, value);
    this.map.set(timestamp, kv);
  }

  get(key: string, timestamp: number): string {
    if (this.map.has(timestamp)) {
      const kv = this.map.get(timestamp)!;
      if (kv.has(key)) {
        return this.map.get(timestamp)!.get(key)!;
      }
    } else {
      const keys = Array.from(this.map.keys());
      for (let i = keys.length - 1; i >= 0; i--) {
        if (keys[i] < timestamp) {
          const kv = this.map.get(keys[i])!;
          if (kv.has(key)) {
            return kv.get(key)!;
          }
        }
      }
    }
    return "";
  }
}

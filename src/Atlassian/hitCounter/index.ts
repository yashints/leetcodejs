/*
362. Design Hit Counter - Medium
Design a hit counter which counts the number of hits received in the past 5 minutes (i.e., the past 300 seconds).

Your system should accept a timestamp parameter (in seconds granularity), and you may assume that calls are being made to the system in chronological order (i.e., timestamp is monotonically increasing). Several hits may arrive roughly at the same time.

Implement the HitCounter class:

HitCounter() Initializes the object of the hit counter system.
void hit(int timestamp) Records a hit that happened at timestamp (in seconds). Several hits may happen at the same timestamp.
int getHits(int timestamp) Returns the number of hits in the past 5 minutes from timestamp (i.e., the past 300 seconds).

Example:

HitCounter counter = new HitCounter();

// hit at timestamp 1.
counter.hit(1);

// hit at timestamp 2.
counter.hit(2);

// hit at timestamp 3.
counter.hit(3);

// get hits at timestamp 4, should return 3.
counter.getHits(4);

// hit at timestamp 300.
counter.hit(300);

// get hits at timestamp 300, should return 4.
counter.getHits(300);

// get hits at timestamp 301, should return 3.
counter.getHits(301);
*/

export class HitCounter {
  hits;
  constructor() {
    this.hits = new Map();
  }
  hit(timestamp) {
    this.hits.set(timestamp, (this.hits.get(timestamp) || 0) + 1);
  }
  getHits(timestamp) {
    let totalHits = 0;
    // Iterate through the map and count hits within the last 300 seconds
    for (let [time, count] of this.hits.entries()) {
      if (time > timestamp - 300) {
        totalHits += count;
      }
    }
    return totalHits;
  }
}

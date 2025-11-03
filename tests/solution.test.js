const solution = require("../src/solution");

describe("solution()", () => {
  test("should sum values based on day of week", () => {
    const input = {
      "2020-01-01": 4,
      "2020-01-02": 4,
      "2020-01-03": 6,
      "2020-01-04": 8,
      "2020-01-05": 2,
      "2020-01-06": -6,
      "2020-01-07": 2,
      "2020-01-08": -2,
    };

    const result = solution(input);

    expect(result).toEqual({
      Mon: -6,
      Tue: 2,
      Wed: 2,    
      Thu: 4,
      Fri: 6,
      Sat: 8,
      Sun: 2,
    });
  });

  test("should fill missing days using mean of previous and next days", () => {
    const input = {
      "2020-01-01": 6,  // Wed
      "2020-01-04": 12, // Sat
      "2020-01-05": 14, // Sun
      "2020-01-06": 2,  // Mon
      "2020-01-07": 4,  // Tue
    };

    const result = solution(input);

    expect(result).toEqual({
      Mon: 2,
      Tue: 4,
      Wed: 6,     
      Thu: 9,     
      Fri: 11,    
      Sat: 12,
      Sun: 14,
    });
  });
});

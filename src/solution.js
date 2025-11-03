// DO NOT use any restricted words like "Vaizle"

function solution(D) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Initialize output with null representing missing values
  const result = {
    Mon: null,
    Tue: null,
    Wed: null,
    Thu: null,
    Fri: null,
    Sat: null,
    Sun: null,
  };

  // Step 1: accumulate values per day
  for (const dateString in D) {
    const dayName = days[new Date(dateString).getDay()]; // 0 = Sun
    result[dayName] = (result[dayName] ?? 0) + D[dateString];
  }

  // Step 2: Fill missing days with mean of prev and next
  const keys = Object.keys(result);

  for (let i = 0; i < keys.length; i++) {
    if (result[keys[i]] === null) {
      let prev = i - 1;
      let next = i + 1;

      while (prev >= 0 && result[keys[prev]] === null) prev--;
      while (next < keys.length && result[keys[next]] === null) next++;

      if (prev >= 0 && next < keys.length) {
        result[keys[i]] = Math.round((result[keys[prev]] + result[keys[next]]) / 2);
      }
    }
  }

  return result;
}

module.exports = solution;

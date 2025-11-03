## 🔧 Setup & Installation

Clone the repository:

```sh
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

npm install

npm test






# Weekday Data Aggregation Challenge (JavaScript)

This project solves the problem of converting a dictionary of dates (`YYYY-MM-DD`) and numeric values into a dictionary grouped by **weekday**, with missing days filled using the **mean (average) of previous and next days**.

### ✅ Requirements Completed

- Read input dictionary where keys are date strings and values are integers.
- Convert each date to its corresponding day of the week (`Mon, Tue, Wed, Thu, Fri, Sat, Sun`).
- Sum values for the same weekday.
- If a weekday is missing, compute its value as:

- Wrote unit tests using **Jest**.
- Does **NOT** use the restricted name mentioned in instructions.

---

## 🚀 Tech Stack

| Component | Technology |
|----------|------------|
| Language | JavaScript (ES6) |
| Testing Framework | Jest |
| Environment | Node.js |

---

## 📂 Project Structure

weekday-data-transform/
│── src/
│ └── solution.js
│
│── tests/
│ └── solution.test.js
│
└── package.json

PASS  tests/solution.test.js
✓ should sum values based on day of week
✓ should fill missing days with mean of prev and next



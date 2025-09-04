# Week 1 – Jest Basics

## 🎯 Goal
- Hiểu Jest core API
- Biết viết test cơ bản cho pure function

---

## ✅ Learned
- Jest chạy bằng `npm test` hoặc `npx jest`
- `test()` = định nghĩa 1 test case
- `expect()` = so sánh giá trị thật và kỳ vọng
- Matchers phổ biến:
  - `toBe` (so sánh primitive, ===)
  - `toEqual` (so sánh object/array)
  - `toContain` (kiểm tra item trong array/string)
  - `toThrow` (check exception)

---

## 🧪 Example
```js
// sum.js
export function sum(a, b) {
  return a + b;
}

// sum.test.js
import { sum } from "./sum";

test("adds 1 + 2 = 3", () => {
  expect(sum(1, 2)).toBe(3);
});

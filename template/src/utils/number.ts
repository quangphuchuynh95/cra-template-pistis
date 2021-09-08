export const max = (...nums: number[]) => nums.reduce(
  (max, num) => (num > max ? num : max),
  Number.NEGATIVE_INFINITY,
)

export const min = (...nums: number[]) => nums.reduce(
  (min, num) => (num < min ? num : min),
  Number.POSITIVE_INFINITY,
)

export const sum = (...nums: number[]) => nums.reduce(
  (total, num) => total + num,
  0,
)

export const avg = (...nums: number[]) => sum(...nums) / nums.length

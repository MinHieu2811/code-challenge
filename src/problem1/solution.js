const sum_to_n_a = (n) => {
  if(n > Number.MAX_SAFE_INTEGER) {
    throw new Error("n is too large");
  }
  let sum = 0;
  for(let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

const sum_to_n_b = (n) => {
  if(n > Number.MAX_SAFE_INTEGER) {
    throw new Error("n is too large");
  }

  return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, curr) => acc + curr, 0);
}

const sum_to_n_c = (n) => {
  if(n > Number.MAX_SAFE_INTEGER) {
    throw new Error("n is too large");
  }
  return (n * (n + 1)) / 2;
}

console.log(sum_to_n_a(5))
console.log(sum_to_n_b(5))
console.log(sum_to_n_c(5))


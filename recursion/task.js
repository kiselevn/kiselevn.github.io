// Task #1

const sumToCycle = (n) => {
  let result = n;
  
  for (let i = 1; i < n; i++) {
    result += i;
  }
  
  return result;
}

const sumToRecursion = (n) => {
  if (n > 1) {
    return n + sumTo(n - 1);
  } else {
    return n;
  }
}

const sumToProgression = (n) => {
  return (n * (n + 1)) / 2;
}


// Task #2

const factorial = (n) => {
  if (n !== 1) {
    return n * factorial(n - 1);
  } else {
    return n;
  }
}


// Task #3 

const fib = (n) => {
  if (n > 1) {
    return fib(n - 1) + fib(n - 2);
  } else {
    return n;
  }
}
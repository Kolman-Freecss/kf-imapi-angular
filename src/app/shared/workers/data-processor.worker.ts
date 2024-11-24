/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  postMessage(response);
});

function calculatePrimes(limit: number): number[] {
  const primes: number[] = [];
  for (let num = 2; num <= limit; num++) {
    if (primes.every(p => num % p !== 0)) {
      primes.push(num);
    }
  }
  return primes;
}

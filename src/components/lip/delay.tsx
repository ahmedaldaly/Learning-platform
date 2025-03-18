// lib/utils.ts
export function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // await delay(2000);
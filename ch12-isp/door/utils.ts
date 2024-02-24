const startTime = Date.now();
export const logWithTimeElapsed = (text: string) => {
  const elapsedTime = Date.now() - startTime;
  console.log(`${elapsedTime / 1000} | ${text}`);
};

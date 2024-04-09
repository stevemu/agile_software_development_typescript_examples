export interface TimeSource {
  getHours(): number;
  getMinutes(): number;
  getSeconds(): number;
}

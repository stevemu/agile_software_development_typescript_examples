export interface TurnstileController {
  unlock(): void;
  lock(): void;
  alarm(): void;
  thankYou(): void;
}

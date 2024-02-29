export interface Application {
  init(): void;
  idle(): Promise<void>;
  cleanup(): void;
  done(): boolean;
}

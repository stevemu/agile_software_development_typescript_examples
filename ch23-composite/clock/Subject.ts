import { ClockObserver } from './ClockObserver';

export class Subject {
  private observers: ClockObserver[] = [];

  public registerObserver(observer: ClockObserver): void {
    this.observers.push(observer);
  }

  protected notifyObservers(): void {
    this.observers.forEach((observer) => {
      observer.update();
    });
  }
}

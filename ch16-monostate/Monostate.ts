export class Monostate {
  static x = 0;

  set x(x: number) {
    Monostate.x = x;
  }

  get x() {
    return Monostate.x;
  }
}

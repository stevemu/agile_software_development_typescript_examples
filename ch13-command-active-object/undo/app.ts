import { Reader } from '../../ch14-template-method-and-strategy/Reader';
import { UiImpl } from './UI';
import { Circle, DrawCircleCommand } from './undo';

const shapes: Circle[] = [];

const ui = new UiImpl();
const reader = new Reader();
const command = new DrawCircleCommand(shapes, reader, ui);
await command.do();
const command2 = new DrawCircleCommand(shapes, reader, ui);
await command2.do();

setTimeout(() => {
  command2.undo();
  ui.drawShapes(shapes);

  process.exit(0);
}, 2000);

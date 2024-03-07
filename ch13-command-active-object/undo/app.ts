import { Reader } from '../../ch14-template-method-and-strategy/Reader.ts';
import { UiImp } from './UiImp.ts';
import { DrawCircleCommand } from './DrawCircleCommand.ts';
import { Box, Circle, Shape } from './shape.ts';
import { DrawBoxCommand } from './DrawBoxCommand.ts';

const shapes: Shape[] = [];
const commands = [];

const ui = new UiImp();
const reader = new Reader();

// ui.drawShapes([new Circle(1, 'red', 5, 5, 1), new Box(2, 'green', 5, 6, 2, 2)]);

while (true) {
  const commandString = await reader.readLine('Enter command: ');

  const parts = commandString.split(' ');

  if (parts[0] === 'exit') {
    process.exit(0);
  } else if (parts[0] === 'circle') {
    const command = new DrawCircleCommand(shapes, reader, ui);
    await command.do();
    commands.push(command);
  } else if (parts[0] === 'box') {
    const command = new DrawBoxCommand(shapes, reader, ui);
    await command.do();
    commands.push(command);
  } else if (parts[0] === 'undo') {
    const lastCommand = commands.pop();
    lastCommand?.undo();
  }
}

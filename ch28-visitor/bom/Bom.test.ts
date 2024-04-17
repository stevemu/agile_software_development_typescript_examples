import { Assembly } from './Assembly';
import { ExplodedCostVisitor } from './ExplodedCostVisitor';
import { PartCountVisitor } from './PartCountVisitor';
import { PartVisitor } from './PartVisitor';
import { PiecePart } from './PiecePart';

describe('Bom', () => {
  it('ExplodedCostVisitor', () => {
    const p1 = new PiecePart('p1', 'desc1', 10);
    const p2 = new PiecePart('p2', 'desc2', 20);

    const ecv = new ExplodedCostVisitor();
    ecv.visitPiecePart(p1);
    ecv.visitPiecePart(p2);

    expect(ecv.getTotalCost()).toBe(30);
  });

  it('PartCountVisitor', () => {
    const p1 = new PiecePart('p1', 'desc1', 10);
    const p2 = new PiecePart('p2', 'desc2', 20);

    const ecv = new ExplodedCostVisitor();
    ecv.visitPiecePart(p1);
    ecv.visitPiecePart(p2);

    expect(ecv.getTotalCost()).toBe(30);
  });

  it('assembly of assemblies', () => {
    const a1 = new Assembly('a1', 'desc1');
    const a2 = new Assembly('a2', 'desc2');
    a1.addPart(a2);

    expect(a1.getParts()[0]).toBe(a2);
  });

  test('visitor coverage', () => {
    let aFound = false;
    let pFound = false;
    const v = {
      visitAssembly: () => {
        aFound = true;
      },
      visitPiecePart: () => {
        pFound = true;
      },
    } as PartVisitor;

    const a = new Assembly('a1', 'desc1');
    const p = new PiecePart('p1', 'desc2', 10);
    a.addPart(p);
    a.accept(v);

    expect(aFound).toBe(true);
    expect(pFound).toBe(true);
  });

  it('PartCountVisitor', () => {
    const pcv = new PartCountVisitor();

    const cellphone = new Assembly('c1', 'Cell Phone');
    const screen = new PiecePart('s1', 'LCD Screen', 5);
    const keyboard = new PiecePart('k1', 'Keyboard', 10);
    cellphone.addPart(screen);
    cellphone.addPart(keyboard);

    cellphone.accept(pcv);

    expect(pcv.getPartNumberCount()).toBe(2);
    expect(pcv.getCountForPartNumber('s1')).toBe(1);
    expect(pcv.getCountForPartNumber('k1')).toBe(1);
    expect(pcv.getPartNumberCount()).toBe(2);
  });
});

import { Assembly } from './Assembly';
import { CSVPartExtension } from './CSVPartExtension';
import { JsonPartExtension } from './JsonPartExtension';
import { PiecePart } from './PiecePart';
import { XMLPartExtension } from './XMLPartExtension';

describe('BOMxml', () => {
  let p1: PiecePart;
  let p2: PiecePart;
  let a: Assembly;

  beforeEach(() => {
    p1 = new PiecePart('997624', 'MyPart', 3.2);
    p2 = new PiecePart('7734', 'Hell', 666.66);
    a = new Assembly('5879', 'MyAssembly');
  });

  test('CREATE PART', () => {
    expect(p1.getPartNumber()).toBe('997624');
    expect(p1.getDescription()).toBe('MyPart');
    expect(p1.getCost()).toBe(3.2);
  });

  test('create assembly', () => {
    expect(a.getPartNumber()).toBe('5879');
    expect(a.getDescription()).toBe('MyAssembly');
  });

  test('add parts to assembly', () => {
    a.add(p1);
    a.add(p2);
    expect(a.getParts().length).toBe(2);
    expect(a.getParts()[0]).toBe(p1);
    expect(a.getParts()[1]).toBe(p2);
  });

  test('assembly of assemblies', () => {
    const a1 = new Assembly('1', 'a1');
    a.add(a1);
    expect(a.getParts().length).toBe(1);
    expect(a.getParts()[0]).toBe(a1);
  });

  test('piece part 1 xml', () => {
    const xe = p1.getExtension('XML') as XMLPartExtension;
    expect(xe.getXMLElement()).toBe(`<PiecePart>
  <PartNumber>997624</PartNumber>
  <Description>MyPart</Description>
  <Cost>3.2</Cost>
</PiecePart>`);
  });

  test('piece part 2 xml', () => {
    const xe = p2.getExtension('XML') as XMLPartExtension;
    expect(xe.getXMLElement()).toBe(`<PiecePart>
  <PartNumber>7734</PartNumber>
  <Description>Hell</Description>
  <Cost>666.66</Cost>
</PiecePart>`);
  });

  test('piece part 1 json', () => {
    const je = p1.getExtension('JSON') as JsonPartExtension;
    expect(je.getJson()).toEqual({
      partNumber: '997624',
      description: 'MyPart',
      cost: 3.2,
    });
  });

  test('piece part 2 json', () => {
    const je = p2.getExtension('JSON') as JsonPartExtension;
    expect(je.getJson()).toEqual({
      partNumber: '7734',
      description: 'Hell',
      cost: 666.66,
    });
  });

  test('simple assembly xml', () => {
    const xe = a.getExtension('XML') as XMLPartExtension;
    const actual = removeSpaces(xe.getXMLElement());
    const expected = removeSpaces(`<Assembly>
    <PartNumber>5879</PartNumber>
    <Description>MyAssembly</Description>
    <Parts>

    </Parts>
  </Assembly>`);
    expect(actual).toBe(expected);
  });

  test('assembly with parts xml', () => {
    a.add(p1);
    a.add(p2);
    const xe = a.getExtension('XML') as XMLPartExtension;
    const actual = removeSpaces(xe.getXMLElement());
    const expected = removeSpaces(`<Assembly>
    <PartNumber>5879</PartNumber>
    <Description>MyAssembly</Description>
    <Parts>
      <PiecePart>
        <PartNumber>997624</PartNumber>
        <Description>MyPart</Description>
        <Cost>3.2</Cost>
      </PiecePart>
      <PiecePart>
        <PartNumber>7734</PartNumber>
        <Description>Hell</Description>
        <Cost>666.66</Cost>
      </PiecePart>
    </Parts>
  </Assembly>`);

    expect(actual).toBe(expected);
  });

  test('part 1 csv', () => {
    const ce = p1.getExtension('CSV') as CSVPartExtension;
    expect(ce.getCSVText()).toBe('997624,MyPart,3.2');
  });

  test('part 2 csv', () => {
    const ce = p2.getExtension('CSV') as CSVPartExtension;
    expect(ce.getCSVText()).toBe('7734,Hell,666.66');
  });

  test('assembly csv', () => {
    const ce = a.getExtension('CSV') as CSVPartExtension;
    expect(ce.getCSVText()).toBe('5879,MyAssembly\n');
  });

  test('assembly with parts csv', () => {
    a.add(p1);
    a.add(p2);
    const ce = a.getExtension('CSV') as CSVPartExtension;
    expect(ce.getCSVText()).toBe(
      '5879,MyAssembly\n' + '997624,MyPart,3.2\n' + '7734,Hell,666.66\n',
    );
  });
});

const removeSpaces = (s: string) => s.replace(/\s+/g, ' ');

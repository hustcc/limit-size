import { parse, format } from '../src/bytes';

describe('parse-size', () => {
  test('parse', () => {
    expect(parse('100')).toBe(100);
    expect(parse('100b')).toBe(100);
    expect(parse('100 b')).toBe(100);
    expect(parse('10.1 b')).toBe(10.1);

    expect(parse('10.1 kb')).toBe(10.1 * 1024);
    expect(parse('10.1 KB')).toBe(10.1 * 1024);

    expect(parse('1.2 mb')).toBe(1.2 * 1024 * 1024);
    expect(parse('1.2   mb')).toBe(1.2 * 1024 * 1024);

    expect(parse('1.2   mb')).toBe(1.2 * 1024 * 1024);

    expect(parse('1.2 Gb')).toBe(1.2 * 1024 * 1024 * 1024);

    expect(() => {
      parse('1a.2 mb');
    }).toThrow(`file size string '1a.2 mb' syntax error, e.g. 100 b, 1.2 Kb, 2 Mb, 20.5 Gb!`);
  });

  test('format', () => {
    expect(format(100)).toBe('100.0 b');
    expect(format(10000)).toBe('9.8 Kb');
    expect(format(1000000)).toBe('976.6 Kb');
    expect(format(100000000)).toBe('95.4 Mb');
    expect(format(10000000000)).toBe('9.3 Gb');
    expect(format(1000000000000)).toBe('931.3 Gb');
  });
});

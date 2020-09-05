import { parseSizeString, formatSize } from '../src/parse-size';

describe('parse-size', () => {
  test('parseSizeString', () => {
    expect(parseSizeString('100')).toBe(100);
    expect(parseSizeString('100b')).toBe(100);
    expect(parseSizeString('100 b')).toBe(100);
    expect(parseSizeString('10.1 b')).toBe(10.1);

    expect(parseSizeString('10.1 kb')).toBe(10.1 * 1024);
    expect(parseSizeString('10.1 KB')).toBe(10.1 * 1024);

    expect(parseSizeString('1.2 mb')).toBe(1.2 * 1024 * 1024);
    expect(parseSizeString('1.2   mb')).toBe(1.2 * 1024 * 1024);

    expect(parseSizeString('1.2   mb')).toBe(1.2 * 1024 * 1024);

    expect(parseSizeString('1.2 Gb')).toBe(1.2 * 1024 * 1024 * 1024);

    expect(() => {
      parseSizeString('1a.2 mb');
    }).toThrow(`file size string '1a.2 mb' syntax error, e.g. 100 b, 1.2 Kb, 2 Mb, 20.5 Gb!`);
  });

  test('formatSize', () => {
    expect(formatSize(100)).toBe('100.0 b');
    expect(formatSize(10000)).toBe('9.8 Kb');
    expect(formatSize(1000000)).toBe('976.6 Kb');
    expect(formatSize(100000000)).toBe('95.4 Mb');
    expect(formatSize(10000000000)).toBe('9.3 Gb');
    expect(formatSize(1000000000000)).toBe('931.3 Gb');
  });
});

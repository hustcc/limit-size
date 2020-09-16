import { parse, format } from '../src/bytes';

describe('parse-size', () => {
  test('format', () => {
    expect(format(100)).toBe('100.0 b');
    expect(format(10000)).toBe('9.8 Kb');
    expect(format(1000000)).toBe('976.6 Kb');
    expect(format(100000000)).toBe('95.4 Mb');
    expect(format(10000000000)).toBe('9.3 Gb');
    expect(format(1000000000000)).toBe('931.3 Gb');
  });
});

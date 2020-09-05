import { fileSize } from '../src/file-size';

describe('file-size', () => {
  test('fileSize', async () => {
    expect(await fileSize('./src/index.ts', false)).toBeGreaterThan(await fileSize('./src/index.ts', true));

    // expect(async () => {
    //   await fileSize('not-exist.ts', false)
    // }).toThrow();

    // expect(async () => {
    //   await fileSize('not-exist.ts', true)
    // }).toThrow();
  });
});

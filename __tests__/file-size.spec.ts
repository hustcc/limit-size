import { fileSize } from '../src/size';

describe('file-size', () => {
  test('fileSize', async () => {
    expect(await fileSize('./src/cmd.ts', false)).toBeGreaterThan(await fileSize('./src/cmd.ts', true));

    // expect(async () => {
    //   await fileSize('not-exist.ts', false)
    // }).toThrow();

    // expect(async () => {
    //   await fileSize('not-exist.ts', true)
    // }).toThrow();
  });
});

import parser from 'byte-parser';

const JEDEC = { radix: 1024, unit: ['b', 'Kb', 'Mb', 'Gb'] };

/**
 * 解析 size string
 * @param sizeString
 */
export function parse(sizeString: string): number {
  return parser(sizeString);
}

/**
 *
 * @param bytes
 * @param fixed
 */
export function format(bytes: number, fixed = 1): string {
  bytes = Math.abs(bytes);

  const { radix, unit } = JEDEC;

  let loop = 0;

  while (bytes >= radix) {
    bytes /= radix;
    ++loop;
  }
  return `${bytes.toFixed(fixed)} ${unit[loop]}`;
}

const JEDEC = { radix: 1024, unit: ['b', 'Kb', 'Mb', 'Gb'] };

function unitToRate(unit: string) {
  return unit === 'b' ? 1 : unit === 'kb' ? 1024 : unit === 'mb' ? 1024 * 1024 : unit === 'gb' ? 1024 * 1024 * 1024 : 1;
}

/**
 * 解析 size string
 * @param sizeString
 */
export function parse(sizeString: string): number {
  const match = sizeString.match(/^(\d*\.*\d*)\s*([gGkKmM]{0,1}[bB]{0,1})$/);
  if (!match) {
    throw new Error(`file size string '${sizeString}' syntax error, e.g. 100 b, 1.2 Kb, 2 Mb, 20.5 Gb!`);
  }

  const size = Number(match[1]);
  const unit = match[2].toLowerCase();

  return size * unitToRate(unit);
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

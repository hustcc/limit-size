import { Config, SingleConfig, Result } from './types';
import { fileSize } from './file-size';
import { parseSizeString } from './parse-size';

/**
 * 做检查，并返回检查结果
 * @param config
 */
export async function lint(config: Config): Promise<Result> {
  const result = [];
  for (const c of config) {
    const { path, limit, gzip } = c;
    const bytes = await fileSize(path, gzip);
    const limitBytes = parseSizeString(limit);

    result.push({
      config: c,
      passed: bytes <= limitBytes,
      bytes,
      limitBytes,
    });
  }

  return result;
}

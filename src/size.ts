import * as fs from 'fs';
import { createGzip } from 'zlib';

/**
 * 开启 gzip
 * @param path
 */
function gzipSize(path: string): Promise<number> {
  return new Promise((resolve, reject) => {
    let size = 0;
    const pipe = fs.createReadStream(path).pipe(createGzip({ level: 9 }));

    pipe.on('error', reject);
    pipe.on('data', (buf) => {
      size += buf.length;
    });
    pipe.on('end', () => {
      resolve(size);
    });
  });
}

/**
 * 直接读取文件大小
 * @param path
 */
function statSize(path: string): Promise<number> {
  return new Promise((resolve, reject) => {
    fs.stat(path, function(err, stats) {
      err ? reject() : resolve(stats.size);
    });
  });
}

/**
 * 获取文件大小
 * @param path
 * @param gzip
 */
export async function fileSize(path: string, gzip: boolean) {
  return gzip ? await gzipSize(path) : await statSize(path);
}

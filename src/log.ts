import chalk from 'chalk';
import { Result, SingleResult } from './types';
import { formatSize } from './parse-size';
/**
 
dist/g2plot.min.js
  Size limit:   700 KB
  Size:         305.15 KB 

dist/g2plot.min.js
  Package size limit has exceeded by 105.15 KB
  Size limit:   200 KB
  Size:         305.15 KB

 */
export function logResust(result: Result) {
  result.forEach((r: SingleResult) => {
    const { config, passed, bytes, limitBytes } = r;
    const { path, limit } = config;

    const logs = [
      chalk.bold(path),
      '\n',
      ...(passed
        ? []
        : ['  ', chalk.red(`Package size limit has exceeded by ${chalk.bold(formatSize(bytes - limitBytes))}`), '\n']),
      '  ',
      'Size limit:  ',
      passed ? chalk.bold.green(limit) : chalk.bold.red(limit),
      '\n',
      '  ',
      'Size:        ',
      passed ? chalk.bold.green(formatSize(bytes)) : chalk.bold.red(formatSize(bytes)),
      '\n',
    ];

    // 打印
    console.log(logs.join(''));
  });
}

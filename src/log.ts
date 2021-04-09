import chalk from 'chalk';
import { Result, SingleResult } from './types';
import { format } from './bytes';
/**
 
dist/g2plot.min.js
  Size limit:   700 KB
  Size:         305.15 KB 
  Gzip:         Yes 

dist/g2plot.min.js
  Package size limit has exceeded by 105.15 KB
  Size limit:   200 KB
  Size:         305.15 KB
  Gzip:         No 

 */
export function logResult(result: Result) {
  result.forEach((r: SingleResult) => {
    const { config, passed, bytes, limitBytes } = r;
    const { path, limit, gzip } = config;

    const logs = [
      chalk.bold(path),
      '\n',
      ...(passed
        ? []
        : ['  ', chalk.red(`Package size limit has exceeded by ${chalk.bold(format(bytes - limitBytes))}`), '\n']),
      '  ',
      'Size limit:  ',
      passed ? chalk.bold.green(limit) : chalk.bold.red(limit),
      '\n',
      '  ',
      'Size:        ',
      passed ? chalk.bold.green(format(bytes)) : chalk.bold.red(format(bytes)),
      '\n',
      '  ',
      'Gzip:        ',
      gzip ? chalk.bold('Yes') : chalk.bold('No'),
      '\n',
    ];

    // 打印
    console.log(logs.join(''));
  });
}

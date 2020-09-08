import chalk from 'chalk';
import program from 'commander';
import { parseConfig } from './config';
import { lint } from './lint';
import { logResust } from './log';

program
  .version('0.1.2', '-v, --version')
  .usage('<lint-md> [options]')
  .description('limit size for your files.')
  .option('-c, --config [configure-file]', 'default .limit-size.json')
  .action(async (cmd) => {
    // 1. parse config
    const config = parseConfig(cmd.config);
    // 2. lint size limit
    const result = await lint(config);
    // 3. log
    logResust(result);
    // 4. help doc
    const success = result.every((r) => r.passed);
    if (!success) {
      console.log(
        chalk.bold.yellow('Try to reduce size or increase limit in "limit-size" section of package.json'),
        '\n',
      );
    }
    // 5. exit
    process.exit(success ? 0 : 1);
  });

program.parse(process.argv);

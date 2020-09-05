import * as fs from 'fs';
import { Config } from './types';

/**
 * 从配置文件读取
 * @param path
 */
function loadFromFile(path: string): Config {
  if (fs.existsSync(path)) {
    return JSON.parse(fs.readFileSync(path, { encoding: 'utf8' }));
  }
}

/**
 * 从 pkg 配置读取
 */
function loadFromPackageJson() {
  const config = loadFromFile('./package.json');

  if (config) {
    return config['limit-size'] as Config;
  }
}

/**
 * 解析配置文件
 * @param path
 */
export function parseConfig(path: string): Config {
  const f = path || '.limit-size.json';

  // 1. 如果存在 path，则直接读取
  if (fs.existsSync(f)) {
    return loadFromFile(f);
  }

  // 2. 没有配置文件，则从 package 中读取
  return loadFromPackageJson();
}

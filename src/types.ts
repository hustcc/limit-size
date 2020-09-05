export type SingleConfig = {
  readonly path: string;
  readonly limit: string;
  readonly gzip?: boolean;
};

export type Config = SingleConfig[];

export type SingleResult = {
  readonly config: SingleConfig;
  readonly passed: boolean;
  readonly bytes: number;
  readonly limitBytes: number;
};

export type Result = SingleResult[];

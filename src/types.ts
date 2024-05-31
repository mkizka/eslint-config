import type { Config } from "typescript-eslint";

export type SharableConfig<T = undefined> = (options?: T) => Awaited<Config>;

import type { Config } from "typescript-eslint";

export type SharableConfig<T> = (options?: T) => Awaited<Config>;

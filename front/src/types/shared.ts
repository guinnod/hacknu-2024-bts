export type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;

export interface Language {
    name: string;
    [key: string]: any;
}

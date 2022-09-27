export type Arguments<F extends Function> = ArgumentTypes<F>;

type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never;

export namespace StorageHelper {
  interface Resolve {
    protocol: string,
    host: string,
    dir: string,
    filename: string
  }
}

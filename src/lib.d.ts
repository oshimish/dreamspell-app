

declare module 'require-context.macro' {
  const f: (path: string, deep?: boolean, filter?: RegExp, mode?: "sync" | "eager" | "weak" | "lazy" | "lazy-once") => any;//RequireContext;
  export = f;
}





declare module 'require-context.macro' {
  const f: (path: string, deep?: boolean, filter?: RegExp, mode?: "sync" | "eager" | "weak" | "lazy" | "lazy-once") => any;//RequireContext;
  export = f;
}


declare module 'react-swipeable-routes' {
  export default class SwipeableRoutes extends React.Component<SwipeableViewsProps & WithBindKeyboardProps, any> { }
}
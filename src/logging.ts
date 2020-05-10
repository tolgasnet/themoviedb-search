import debugModule from "debug";

export const enable = (): void => {
  debugModule.enable("app:*");
};

export const getLogger = (namespace: string): debugModule.Debugger => {
  return debugModule(`app:${namespace}`);
};

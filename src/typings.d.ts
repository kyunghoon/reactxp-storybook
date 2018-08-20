declare module "@storybook/addon-actions" {
  export function action(name: string): any;
}

declare module '@storybook/addon-knobs' {
  export const withKnobs: (story: RenderFunction, context: { kind: string, story: string }) => Renderable | null;
  export const text: (name: string, value: string) => string;
  export const boolean: (name: string, value: boolean) => boolean;
  export const number: (name: string, value: number) => number;
  export const array: <T>(name: string, value: T[]) => T[];
  export const select: <T>(name: string, selections: T[], selected: T) => T;
}
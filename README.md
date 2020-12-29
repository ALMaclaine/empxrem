# empxrem

Library for converting px to em and rem.

## API

```ts
export function pxToRem(px: number, baseFontSize: number = 16);
```

```ts
export function pxToEm(px: number, baseFontSize: number = 16);
```

```ts
export function ensureNotPx(unit: number | string);
```

```ts
export function ensureNotPxEm(unit: number | string);
```

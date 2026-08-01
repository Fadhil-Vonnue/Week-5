# Decisions made for TypeScript types

## 1.State

### Type chosen

```
export interface State {
    route: {
        path: string;
        params: obj1;
    };
    watchList: {
        list: Set<unknown>;
        id: string;
        type: string;
    };
}
```

### Alternative considered

- Simple `object` type.

## 2.Params

### Chosen

```
export type params = {
    imdbID?: string;
};
```

### Alternatives considered

- Simple `object` type.

## 3.Action type

### Chosen

- Three different payloads based on the type

- When type is `ROUTE_CHANGED`

```
export interface Action {
    type: string;
    payload: Record<string, unknown>;
}
```

### Alternatives considered

- A simple `object` type

## 4.Listeners

### Chosen

```
 Record<string, Array<Function>>

```

### Alternatives considered

```
Record<string, (() => void)[]>
```

## 5.Route

### Chosen

```
 Record<string, Array<Function>>

```

### Alternatives considered

```
Record<string, (() => void)[]>
```

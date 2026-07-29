function reducer(
    state: kanbanState,
    action: { type: KanbanReducerActions; payload: Todo }
) {
    switch (action.type) {
        case "ADD_CARDS":
            let newTodo = state.todos;
            newTodo.push(action.payload);
            return {
                ...state,
                todos: newTodo,
            };
        case "REMOVE_CARDS":
            return {
                ...state,
                todos: state.todos.filter((el) => el.id !== action.payload.id),
            };
        case "MOVE_CARDS":
            return {
                ...state,
                todos: state.todos.map((el) =>
                    el.id === action.payload.id
                        ? { ...el, status: action.payload.status }
                        : { ...el }
                ),
            };
        default:
            return state;
    }
}
interface Todo {
    id: number;
    task: string;
    status: string;
}
interface kanbanState {
    todos: Todo[];
}
function createStore<S, A extends { type: string; payload: object }>(
    initialState: S,
    reducer: (state: S, action: A) => S
) {
    let state = initialState;
    const listeners: Set<(state: S) => void> = new Set();
    return {
        getState() {
            return state;
        },
        dispatch(action: A) {
            state = reducer(state, action);
            listeners.forEach((listener) => listener(state));
        },
        subscribe(listener: (state: S) => void): () => void {
            listeners.add(listener);
            return () => listeners.delete(listener);
        },
    };
}
type KanbanReducerActions = "ADD_CARDS" | "REMOVE_CARDS" | "MOVE_CARDS";
const initialState: kanbanState = {
    todos: [],
};
const store = createStore(initialState, reducer);

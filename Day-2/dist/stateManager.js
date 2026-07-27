"use strict";
function reducer(state, action) {
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
                todos: state.todos.map((el) => el.id === action.payload.id
                    ? { ...el, status: action.payload.status }
                    : { ...el }),
            };
        default:
            return state;
    }
}
function createStore(initialState, reducer) {
    let state = initialState;
    const listeners = new Set();
    return {
        getState() {
            return state;
        },
        dispatch(action) {
            state = reducer(state, action);
            listeners.forEach((listener) => listener(state));
        },
        subscribe(listener) {
            listeners.add(listener);
            return () => listeners.delete(listener);
        },
    };
}
const initialState = {
    todos: [],
};
const store = createStore(initialState, reducer);

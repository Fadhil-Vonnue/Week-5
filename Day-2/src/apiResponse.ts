type ApiResponse<T> =
    | {
          success: true;
          data: T;
      }
    | { success: false; error: string; statusCode: number };

function handleResponse<T>(response: ApiResponse<T>) {
    if (response.success) {
        console.log("SUCCESFUL", response.data);
    } else {
        console.log("UNSUCCESSFUL");
    }
}
type LoadingState<T> =
    | "idle"
    | "loading"
    | { status: "success"; data: T }
    | { status: "error"; error: Error };
type User = {
    id: number;
    name: string;
    age: number;
};
function stateChange(state: LoadingState<User[]>) {
    if (state === "idle") return `<span>Its in idle state</span>`;
    else if (state === "loading")
        return `<span>Wait while we are fetching</span>`;
    else if (state.status === "success")
        return `<span>${JSON.stringify(state.data)}</span>`;
    else {
        return `<span>${state.error.message}</span>`;
    }
}

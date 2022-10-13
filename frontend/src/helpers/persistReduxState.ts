export function persistReduxState(localStorageKey, currentState: Object) {
  localStorage.setItem(localStorageKey, JSON.stringify(currentState));
}

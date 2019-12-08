import { History, UnregisterCallback } from 'history';
import { decodeRoute, encodeRoute, Route } from './route';

export type Router = ReturnType<typeof createRouter>;

export function createRouter(history: History) {
  return {
    ...history,
    push(route: Route): void {
      history.push(encodeRoute(route));
    },
    replace(route: Route): void {
      history.replace(encodeRoute(route));
    },
    get location() {
      return decodeRoute(history.location);
    },
    listen(listener: (route: Route) => void): UnregisterCallback {
      return history.listen(location => listener(decodeRoute(location)));
    },
  };
}

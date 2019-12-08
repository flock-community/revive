import { Location } from 'history';
import { removePrefix } from '@revive/utils/src/string';

export interface Route {
  path: string[];
  search: Record<string, string>;
}

export function encodeRoute(route: Route): string {
  return `/${route.path.join('/')}${new URLSearchParams(route.search).toString()}`;
}

export function decodeRoute(location: Location): Route {
  return {
    path: removePrefix(location.pathname, '/').split('/'),
    search: Object.fromEntries(new URLSearchParams(location.search)),
  };
}

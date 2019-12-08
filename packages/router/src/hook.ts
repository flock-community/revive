import { useContext, useEffect, useState, createContext } from 'react';
import { Router } from './router';

export const RouterContext = createContext<Router>(undefined!);

export function useRoute() {
  const router = useContext(RouterContext);
  const [route, setRoute] = useState(router.location);
  useEffect(() => router.listen(setRoute));
  return route;
}

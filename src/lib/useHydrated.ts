"use client";

import { useSyncExternalStore } from "react";

/** The value never changes after load, so there is nothing to subscribe to. */
const noopSubscribe = () => () => {};

/**
 * Returns false while rendering on the server and during the first hydration
 * pass, then true once running in the browser.
 *
 * This is the hydration-safe way to gate browser-only content. The older
 * `useState(false)` + `useEffect(() => setMounted(true))` pattern causes an
 * extra cascading render, which React's lint rules now flag.
 */
export function useHydrated(): boolean {
  return useSyncExternalStore(
    noopSubscribe,
    () => true, // in the browser
    () => false, // on the server
  );
}

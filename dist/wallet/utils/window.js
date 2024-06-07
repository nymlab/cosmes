/**
 * Similar to `window.addEventListener`, but safe for nodejs/SSR environments,
 * and which returns an `unsubscribe` function that when called, removes the
 * event listener via `window.removeEventListener`.
 */
export function onWindowEvent(event, cb, opts) {
    if (typeof window === "undefined") {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return () => { };
    }
    window.addEventListener(event, cb, opts);
    return () => window.removeEventListener(event, cb);
}
//# sourceMappingURL=window.js.map
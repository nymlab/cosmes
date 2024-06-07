import { wait } from "../utils/wait.js";
import { getTx } from "./getTx.js";
/**
 * Polls for the tx matching the given `hash`, with a minimum interval of
 * `intervalSeconds`. Throws if the tx is not found after the given number
 * of `maxAttempts`.
 */
export async function pollTx(endpoint, { intervalSeconds = 2, maxAttempts = 64, ...getTxParams }) {
    const intervalMillis = intervalSeconds * 1000;
    for (let i = 0; i < maxAttempts; i++) {
        try {
            return await getTx(endpoint, getTxParams);
        }
        catch (err) {
            await wait(intervalMillis);
        }
    }
    throw new Error("Tx not found");
}
//# sourceMappingURL=pollTx.js.map
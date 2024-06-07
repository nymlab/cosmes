import { queryContract } from "./queryContract.js";
/**
 * Simulates the amount of assets that would be received by swapping
 * `fromAmount` amount of `fromAsset` assets via the `poolId` pool.
 * If `fromAsset` is a CW20 token, `isCW20` must be set to `true`.
 */
export async function simulateAstroportSinglePoolSwap(endpoint, { poolId, fromAsset, fromAmount, isCW20, }) {
    try {
        const { return_amount } = await queryContract(endpoint, {
            address: poolId,
            query: {
                simulation: {
                    offer_asset: {
                        info: isCW20
                            ? { token: { contract_addr: fromAsset } }
                            : { native_token: { denom: fromAsset } },
                        amount: fromAmount.toString(),
                    },
                },
            },
        });
        return BigInt(return_amount);
    }
    catch (err) {
        console.error(err);
        return 0n;
    }
}
//# sourceMappingURL=simulateAstroportSinglePoolSwap.js.map
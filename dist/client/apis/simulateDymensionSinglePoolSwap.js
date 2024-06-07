import { DymensionGammV1beta1QueryEstimateSwapExactAmountInService as SwapService } from "../../protobufs/index.js";
import { RpcClient } from "../clients/RpcClient.js";
/**
 * Simulates the amount of `toAsset` assets that would be received by swapping
 * `fromAmount` amount of `fromAsset` assets via the `poolId` pool.
 */
export async function simulateDymensionSinglePoolSwap(endpoint, { poolId, fromAsset, fromAmount, toAsset, }) {
    const { tokenOutAmount } = await RpcClient.query(endpoint, SwapService, {
        poolId,
        tokenIn: fromAmount.toString() + fromAsset,
        routes: [
            {
                poolId,
                tokenOutDenom: toAsset,
            },
        ],
    });
    return BigInt(tokenOutAmount);
}
//# sourceMappingURL=simulateDymensionSinglePoolSwap.js.map
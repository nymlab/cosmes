import { MsgSwapExactAmountIn } from "./MsgSwapExactAmountIn.js";
/**
 * Wrapper for {@link MsgSwapExactAmountIn} for a better API around single pool swaps.
 */
export class MsgOsmosisSinglePoolSwap {
    constructor(data) {
        this.msgSwapExactAmountIn = new MsgSwapExactAmountIn({
            sender: data.sender,
            routes: [
                {
                    poolId: data.poolId,
                    tokenOutDenom: data.toAsset,
                },
            ],
            tokenIn: {
                amount: data.fromAmount.toString(),
                denom: data.fromAsset,
            },
            tokenOutMinAmount: data.minReceived.toString(),
        });
    }
    toProto() {
        return this.msgSwapExactAmountIn.toProto();
    }
    toAmino() {
        return this.msgSwapExactAmountIn.toAmino();
    }
}
//# sourceMappingURL=MsgOsmosisSinglePoolSwap.js.map
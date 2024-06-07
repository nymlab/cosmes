import { OsmosisGammV1beta1MsgSwapExactAmountIn as ProtoMsgSwapExactAmountIn } from "../../protobufs/index.js";
export class MsgSwapExactAmountIn {
    constructor(data) {
        this.data = data;
    }
    toProto() {
        return new ProtoMsgSwapExactAmountIn(this.data);
    }
    toAmino() {
        return {
            type: "osmosis/gamm/swap-exact-amount-in",
            value: {
                routes: this.data.routes.map(({ poolId, tokenOutDenom }) => ({
                    pool_id: poolId.toString(),
                    token_out_denom: tokenOutDenom,
                })),
                sender: this.data.sender,
                token_in: this.data.tokenIn,
                token_out_min_amount: this.data.tokenOutMinAmount,
            },
        };
    }
}
//# sourceMappingURL=MsgSwapExactAmountIn.js.map
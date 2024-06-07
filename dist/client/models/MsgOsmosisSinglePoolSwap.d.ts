import { DeepPrettify } from "../../typeutils/prettify.js";
import { SimulateOsmosisSinglePoolSwapParams } from "../apis/simulateOsmosisSinglePoolSwap.js";
import { Adapter } from "./Adapter.js";
type Data = DeepPrettify<SimulateOsmosisSinglePoolSwapParams & {
    sender: string;
    minReceived: bigint;
}>;
/**
 * Wrapper for {@link MsgSwapExactAmountIn} for a better API around single pool swaps.
 */
export declare class MsgOsmosisSinglePoolSwap implements Adapter {
    private readonly msgSwapExactAmountIn;
    constructor(data: Data);
    toProto(): import("../../protobufs/index.js").OsmosisGammV1beta1MsgSwapExactAmountIn;
    toAmino(): {
        type: string;
        value: {
            routes: {
                pool_id: string;
                token_out_denom: string;
            }[];
            sender: string;
            token_in: {
                denom: string;
                amount: string;
            };
            token_out_min_amount: string;
        };
    };
}
export {};
//# sourceMappingURL=MsgOsmosisSinglePoolSwap.d.ts.map
import { PlainMessage } from "@bufbuild/protobuf";
import { OsmosisGammV1beta1MsgSwapExactAmountIn as ProtoMsgSwapExactAmountIn } from "../../protobufs/index.js";
import { DeepPrettify } from "../../typeutils/prettify.js";
import { Adapter } from "./Adapter.js";
type Data = DeepPrettify<Required<PlainMessage<ProtoMsgSwapExactAmountIn>>>;
export declare class MsgSwapExactAmountIn implements Adapter {
    private readonly data;
    constructor(data: Data);
    toProto(): ProtoMsgSwapExactAmountIn;
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
//# sourceMappingURL=MsgSwapExactAmountIn.d.ts.map
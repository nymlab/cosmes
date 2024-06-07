import { PartialMessage } from "@bufbuild/protobuf";
import { InjectiveWasmxV1MsgExecuteContractCompat as ProtoMsgExecuteContractCompat } from "../../protobufs/index.js";
import { Adapter } from "./Adapter.js";
import type { MsgExecuteContract } from "./MsgExecuteContract.js";
type Data<T> = ConstructorParameters<typeof MsgExecuteContract<T>>[0];
/**
 * **NOTE**: this message is only used on Injective when broadcasting txs via
 * MetaMask or EVM wallets. Otherwise, use `MsgExecuteContract` instead!
 */
export declare class MsgExecuteContractInjective<T> implements Adapter {
    private readonly data;
    constructor(data: Data<T>);
    toProto(): ProtoMsgExecuteContractCompat;
    toAmino(): {
        type: string;
        value: PartialMessage<ProtoMsgExecuteContractCompat>;
    };
}
export {};
//# sourceMappingURL=MsgExecuteContractInjective.d.ts.map
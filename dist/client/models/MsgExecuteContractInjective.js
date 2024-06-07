import { InjectiveWasmxV1MsgExecuteContractCompat as ProtoMsgExecuteContractCompat } from "../../protobufs/index.js";
/**
 * **NOTE**: this message is only used on Injective when broadcasting txs via
 * MetaMask or EVM wallets. Otherwise, use `MsgExecuteContract` instead!
 */
export class MsgExecuteContractInjective {
    constructor(data) {
        this.data = {
            sender: data.sender,
            contract: data.contract,
            msg: JSON.stringify(data.msg),
        };
        // Bug in Injective where `funds` must be removed if it is "empty"
        if (data.funds.length > 0) {
            this.data.funds = data.funds
                .map(({ amount, denom }) => `${amount}${denom}`)
                .join(",");
        }
    }
    toProto() {
        return new ProtoMsgExecuteContractCompat(this.data);
    }
    toAmino() {
        return {
            type: "wasmx/MsgExecuteContractCompat",
            value: this.data,
        };
    }
}
//# sourceMappingURL=MsgExecuteContractInjective.js.map
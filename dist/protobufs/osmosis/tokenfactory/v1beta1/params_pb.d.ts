import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * Params defines the parameters for the tokenfactory module.
 *
 * @generated from message osmosis.tokenfactory.v1beta1.Params
 */
export declare class Params extends Message<Params> {
    /**
     * DenomCreationFee defines the fee to be charged on the creation of a new
     * denom. The fee is drawn from the MsgCreateDenom's sender account, and
     * transferred to the community pool.
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin denom_creation_fee = 1;
     */
    denomCreationFee: Coin[];
    /**
     * DenomCreationGasConsume defines the gas cost for creating a new denom.
     * This is intended as a spam deterrence mechanism.
     *
     * See: https://github.com/CosmWasm/token-factory/issues/11
     *
     * @generated from field: uint64 denom_creation_gas_consume = 2;
     */
    denomCreationGasConsume: bigint;
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.tokenfactory.v1beta1.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
//# sourceMappingURL=params_pb.d.ts.map
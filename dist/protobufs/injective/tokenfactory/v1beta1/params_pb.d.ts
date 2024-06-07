import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * Params defines the parameters for the tokenfactory module.
 *
 * @generated from message injective.tokenfactory.v1beta1.Params
 */
export declare class Params extends Message<Params> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin denom_creation_fee = 1;
     */
    denomCreationFee: Coin[];
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.tokenfactory.v1beta1.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
//# sourceMappingURL=params_pb.d.ts.map
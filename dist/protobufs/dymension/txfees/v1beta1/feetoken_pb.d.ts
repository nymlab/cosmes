import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * FeeToken is a struct that specifies a coin denom, and pool ID pair.
 * This marks the token as eligible for use as a tx fee asset in Osmosis.
 * Its price in osmo is derived through looking at the provided pool ID.
 * The pool ID must have base denom as one of its assets.
 *
 * @generated from message dymensionxyz.dymension.txfees.v1beta1.FeeToken
 */
export declare class FeeToken extends Message<FeeToken> {
    /**
     * @generated from field: string denom = 1;
     */
    denom: string;
    /**
     * @generated from field: uint64 poolID = 2;
     */
    poolID: bigint;
    constructor(data?: PartialMessage<FeeToken>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.txfees.v1beta1.FeeToken";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeeToken;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeeToken;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeeToken;
    static equals(a: FeeToken | PlainMessage<FeeToken> | undefined, b: FeeToken | PlainMessage<FeeToken> | undefined): boolean;
}
//# sourceMappingURL=feetoken_pb.d.ts.map
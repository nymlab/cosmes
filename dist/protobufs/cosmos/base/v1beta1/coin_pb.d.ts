import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * Coin defines a token with a denomination and an amount.
 *
 * NOTE: The amount field is an Int which implements the custom method
 * signatures required by gogoproto.
 *
 * @generated from message cosmos.base.v1beta1.Coin
 */
export declare class Coin extends Message<Coin> {
    /**
     * @generated from field: string denom = 1;
     */
    denom: string;
    /**
     * @generated from field: string amount = 2;
     */
    amount: string;
    constructor(data?: PartialMessage<Coin>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.v1beta1.Coin";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Coin;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Coin;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Coin;
    static equals(a: Coin | PlainMessage<Coin> | undefined, b: Coin | PlainMessage<Coin> | undefined): boolean;
}
/**
 * DecCoin defines a token with a denomination and a decimal amount.
 *
 * NOTE: The amount field is an Dec which implements the custom method
 * signatures required by gogoproto.
 *
 * @generated from message cosmos.base.v1beta1.DecCoin
 */
export declare class DecCoin extends Message<DecCoin> {
    /**
     * @generated from field: string denom = 1;
     */
    denom: string;
    /**
     * @generated from field: string amount = 2;
     */
    amount: string;
    constructor(data?: PartialMessage<DecCoin>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.v1beta1.DecCoin";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DecCoin;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DecCoin;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DecCoin;
    static equals(a: DecCoin | PlainMessage<DecCoin> | undefined, b: DecCoin | PlainMessage<DecCoin> | undefined): boolean;
}
/**
 * IntProto defines a Protobuf wrapper around an Int object.
 *
 * @generated from message cosmos.base.v1beta1.IntProto
 */
export declare class IntProto extends Message<IntProto> {
    /**
     * @generated from field: string int = 1;
     */
    int: string;
    constructor(data?: PartialMessage<IntProto>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.v1beta1.IntProto";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IntProto;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IntProto;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IntProto;
    static equals(a: IntProto | PlainMessage<IntProto> | undefined, b: IntProto | PlainMessage<IntProto> | undefined): boolean;
}
/**
 * DecProto defines a Protobuf wrapper around a Dec object.
 *
 * @generated from message cosmos.base.v1beta1.DecProto
 */
export declare class DecProto extends Message<DecProto> {
    /**
     * @generated from field: string dec = 1;
     */
    dec: string;
    constructor(data?: PartialMessage<DecProto>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.v1beta1.DecProto";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DecProto;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DecProto;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DecProto;
    static equals(a: DecProto | PlainMessage<DecProto> | undefined, b: DecProto | PlainMessage<DecProto> | undefined): boolean;
}
//# sourceMappingURL=coin_pb.d.ts.map
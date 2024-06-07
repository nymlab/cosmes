import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { Params } from "./auction_pb.js";
/**
 * Bid defines a SDK message for placing a bid for an auction
 *
 * @generated from message injective.auction.v1beta1.MsgBid
 */
export declare class MsgBid extends Message<MsgBid> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * amount of the bid in INJ tokens
     *
     * @generated from field: cosmos.base.v1beta1.Coin bid_amount = 2;
     */
    bidAmount?: Coin;
    /**
     * the current auction round being bid on
     *
     * @generated from field: uint64 round = 3;
     */
    round: bigint;
    constructor(data?: PartialMessage<MsgBid>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.auction.v1beta1.MsgBid";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBid;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBid;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBid;
    static equals(a: MsgBid | PlainMessage<MsgBid> | undefined, b: MsgBid | PlainMessage<MsgBid> | undefined): boolean;
}
/**
 * @generated from message injective.auction.v1beta1.MsgBidResponse
 */
export declare class MsgBidResponse extends Message<MsgBidResponse> {
    constructor(data?: PartialMessage<MsgBidResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.auction.v1beta1.MsgBidResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBidResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBidResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBidResponse;
    static equals(a: MsgBidResponse | PlainMessage<MsgBidResponse> | undefined, b: MsgBidResponse | PlainMessage<MsgBidResponse> | undefined): boolean;
}
/**
 * @generated from message injective.auction.v1beta1.MsgUpdateParams
 */
export declare class MsgUpdateParams extends Message<MsgUpdateParams> {
    /**
     * authority is the address of the governance account.
     *
     * @generated from field: string authority = 1;
     */
    authority: string;
    /**
     * params defines the ocr parameters to update.
     *
     * NOTE: All parameters must be supplied.
     *
     * @generated from field: injective.auction.v1beta1.Params params = 2;
     */
    params?: Params;
    constructor(data?: PartialMessage<MsgUpdateParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.auction.v1beta1.MsgUpdateParams";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParams;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParams;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParams;
    static equals(a: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined, b: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined): boolean;
}
/**
 * @generated from message injective.auction.v1beta1.MsgUpdateParamsResponse
 */
export declare class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
    constructor(data?: PartialMessage<MsgUpdateParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.auction.v1beta1.MsgUpdateParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static equals(a: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined, b: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map
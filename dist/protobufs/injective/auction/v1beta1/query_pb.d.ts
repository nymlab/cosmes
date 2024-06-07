import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./auction_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { GenesisState } from "./genesis_pb.js";
/**
 * QueryAuctionParamsRequest is the request type for the Query/AuctionParams RPC
 * method.
 *
 * @generated from message injective.auction.v1beta1.QueryAuctionParamsRequest
 */
export declare class QueryAuctionParamsRequest extends Message<QueryAuctionParamsRequest> {
    constructor(data?: PartialMessage<QueryAuctionParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.auction.v1beta1.QueryAuctionParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAuctionParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAuctionParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAuctionParamsRequest;
    static equals(a: QueryAuctionParamsRequest | PlainMessage<QueryAuctionParamsRequest> | undefined, b: QueryAuctionParamsRequest | PlainMessage<QueryAuctionParamsRequest> | undefined): boolean;
}
/**
 * QueryAuctionParamsRequest is the response type for the Query/AuctionParams
 * RPC method.
 *
 * @generated from message injective.auction.v1beta1.QueryAuctionParamsResponse
 */
export declare class QueryAuctionParamsResponse extends Message<QueryAuctionParamsResponse> {
    /**
     * @generated from field: injective.auction.v1beta1.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<QueryAuctionParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.auction.v1beta1.QueryAuctionParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAuctionParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAuctionParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAuctionParamsResponse;
    static equals(a: QueryAuctionParamsResponse | PlainMessage<QueryAuctionParamsResponse> | undefined, b: QueryAuctionParamsResponse | PlainMessage<QueryAuctionParamsResponse> | undefined): boolean;
}
/**
 * QueryCurrentAuctionBasketRequest is the request type for the
 * Query/CurrentAuctionBasket RPC method.
 *
 * @generated from message injective.auction.v1beta1.QueryCurrentAuctionBasketRequest
 */
export declare class QueryCurrentAuctionBasketRequest extends Message<QueryCurrentAuctionBasketRequest> {
    constructor(data?: PartialMessage<QueryCurrentAuctionBasketRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.auction.v1beta1.QueryCurrentAuctionBasketRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCurrentAuctionBasketRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCurrentAuctionBasketRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCurrentAuctionBasketRequest;
    static equals(a: QueryCurrentAuctionBasketRequest | PlainMessage<QueryCurrentAuctionBasketRequest> | undefined, b: QueryCurrentAuctionBasketRequest | PlainMessage<QueryCurrentAuctionBasketRequest> | undefined): boolean;
}
/**
 * QueryCurrentAuctionBasketResponse is the response type for the
 * Query/CurrentAuctionBasket RPC method.
 *
 * @generated from message injective.auction.v1beta1.QueryCurrentAuctionBasketResponse
 */
export declare class QueryCurrentAuctionBasketResponse extends Message<QueryCurrentAuctionBasketResponse> {
    /**
     * amount describes the amount put on auction
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 1;
     */
    amount: Coin[];
    /**
     * auctionRound describes current auction round
     *
     * @generated from field: uint64 auctionRound = 2;
     */
    auctionRound: bigint;
    /**
     * auctionClosingTime describes auction close time for the round
     *
     * @generated from field: int64 auctionClosingTime = 3;
     */
    auctionClosingTime: bigint;
    /**
     * highestBidder describes highest bidder on current round
     *
     * @generated from field: string highestBidder = 4;
     */
    highestBidder: string;
    /**
     * highestBidAmount describes highest bid amount on current round
     *
     * @generated from field: string highestBidAmount = 5;
     */
    highestBidAmount: string;
    constructor(data?: PartialMessage<QueryCurrentAuctionBasketResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.auction.v1beta1.QueryCurrentAuctionBasketResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCurrentAuctionBasketResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCurrentAuctionBasketResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCurrentAuctionBasketResponse;
    static equals(a: QueryCurrentAuctionBasketResponse | PlainMessage<QueryCurrentAuctionBasketResponse> | undefined, b: QueryCurrentAuctionBasketResponse | PlainMessage<QueryCurrentAuctionBasketResponse> | undefined): boolean;
}
/**
 * QueryModuleStateRequest is the request type for the Query/AuctionModuleState
 * RPC method.
 *
 * @generated from message injective.auction.v1beta1.QueryModuleStateRequest
 */
export declare class QueryModuleStateRequest extends Message<QueryModuleStateRequest> {
    constructor(data?: PartialMessage<QueryModuleStateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.auction.v1beta1.QueryModuleStateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryModuleStateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryModuleStateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryModuleStateRequest;
    static equals(a: QueryModuleStateRequest | PlainMessage<QueryModuleStateRequest> | undefined, b: QueryModuleStateRequest | PlainMessage<QueryModuleStateRequest> | undefined): boolean;
}
/**
 * QueryModuleStateResponse is the response type for the
 * Query/AuctionModuleState RPC method.
 *
 * @generated from message injective.auction.v1beta1.QueryModuleStateResponse
 */
export declare class QueryModuleStateResponse extends Message<QueryModuleStateResponse> {
    /**
     * @generated from field: injective.auction.v1beta1.GenesisState state = 1;
     */
    state?: GenesisState;
    constructor(data?: PartialMessage<QueryModuleStateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.auction.v1beta1.QueryModuleStateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryModuleStateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryModuleStateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryModuleStateResponse;
    static equals(a: QueryModuleStateResponse | PlainMessage<QueryModuleStateResponse> | undefined, b: QueryModuleStateResponse | PlainMessage<QueryModuleStateResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map
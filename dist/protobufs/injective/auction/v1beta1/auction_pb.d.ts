import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * @generated from message injective.auction.v1beta1.Params
 */
export declare class Params extends Message<Params> {
    /**
     * auction_period_duration defines the auction period duration
     *
     * @generated from field: int64 auction_period = 1;
     */
    auctionPeriod: bigint;
    /**
     * min_next_bid_increment_rate defines the minimum increment rate for new bids
     *
     * @generated from field: string min_next_bid_increment_rate = 2;
     */
    minNextBidIncrementRate: string;
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.auction.v1beta1.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
/**
 * @generated from message injective.auction.v1beta1.Bid
 */
export declare class Bid extends Message<Bid> {
    /**
     * @generated from field: string bidder = 1;
     */
    bidder: string;
    /**
     * @generated from field: string amount = 2;
     */
    amount: string;
    constructor(data?: PartialMessage<Bid>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.auction.v1beta1.Bid";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Bid;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Bid;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Bid;
    static equals(a: Bid | PlainMessage<Bid> | undefined, b: Bid | PlainMessage<Bid> | undefined): boolean;
}
/**
 * @generated from message injective.auction.v1beta1.EventBid
 */
export declare class EventBid extends Message<EventBid> {
    /**
     * bidder describes the address of bidder
     *
     * @generated from field: string bidder = 1;
     */
    bidder: string;
    /**
     * amount describes the amount the bidder put on the auction
     *
     * @generated from field: string amount = 2;
     */
    amount: string;
    /**
     * round defines the round number of auction
     *
     * @generated from field: uint64 round = 3;
     */
    round: bigint;
    constructor(data?: PartialMessage<EventBid>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.auction.v1beta1.EventBid";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventBid;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventBid;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventBid;
    static equals(a: EventBid | PlainMessage<EventBid> | undefined, b: EventBid | PlainMessage<EventBid> | undefined): boolean;
}
/**
 * @generated from message injective.auction.v1beta1.EventAuctionResult
 */
export declare class EventAuctionResult extends Message<EventAuctionResult> {
    /**
     * winner describes the address of the winner
     *
     * @generated from field: string winner = 1;
     */
    winner: string;
    /**
     * amount describes the amount the winner get from the auction
     *
     * @generated from field: string amount = 2;
     */
    amount: string;
    /**
     * round defines the round number of auction
     *
     * @generated from field: uint64 round = 3;
     */
    round: bigint;
    constructor(data?: PartialMessage<EventAuctionResult>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.auction.v1beta1.EventAuctionResult";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventAuctionResult;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventAuctionResult;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventAuctionResult;
    static equals(a: EventAuctionResult | PlainMessage<EventAuctionResult> | undefined, b: EventAuctionResult | PlainMessage<EventAuctionResult> | undefined): boolean;
}
/**
 * @generated from message injective.auction.v1beta1.EventAuctionStart
 */
export declare class EventAuctionStart extends Message<EventAuctionStart> {
    /**
     * round defines the round number of auction
     *
     * @generated from field: uint64 round = 1;
     */
    round: bigint;
    /**
     * ending_timestamp describes auction end time
     *
     * @generated from field: int64 ending_timestamp = 2;
     */
    endingTimestamp: bigint;
    /**
     * new_basket describes auction module balance at the time of new auction
     * start
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin new_basket = 3;
     */
    newBasket: Coin[];
    constructor(data?: PartialMessage<EventAuctionStart>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.auction.v1beta1.EventAuctionStart";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventAuctionStart;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventAuctionStart;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventAuctionStart;
    static equals(a: EventAuctionStart | PlainMessage<EventAuctionStart> | undefined, b: EventAuctionStart | PlainMessage<EventAuctionStart> | undefined): boolean;
}
//# sourceMappingURL=auction_pb.d.ts.map
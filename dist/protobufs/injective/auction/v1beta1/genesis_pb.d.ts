import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Bid, Params } from "./auction_pb.js";
/**
 * GenesisState defines the auction module's genesis state.
 *
 * @generated from message injective.auction.v1beta1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * params defines all the parameters of related to auction.
     *
     * @generated from field: injective.auction.v1beta1.Params params = 1;
     */
    params?: Params;
    /**
     * current auction round
     *
     * @generated from field: uint64 auction_round = 2;
     */
    auctionRound: bigint;
    /**
     * current highest bid
     *
     * @generated from field: injective.auction.v1beta1.Bid highest_bid = 3;
     */
    highestBid?: Bid;
    /**
     * auction ending timestamp
     *
     * @generated from field: int64 auction_ending_timestamp = 4;
     */
    auctionEndingTimestamp: bigint;
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.auction.v1beta1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map
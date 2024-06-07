import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { EpochAndRound, FeedConfig, Params, Transmission } from "./ocr_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * GenesisState defines the OCR module's genesis state.
 *
 * @generated from message injective.ocr.v1beta1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * params defines all the parameters of related to OCR.
     *
     * @generated from field: injective.ocr.v1beta1.Params params = 1;
     */
    params?: Params;
    /**
     * feed_configs stores all of the supported OCR feeds
     *
     * @generated from field: repeated injective.ocr.v1beta1.FeedConfig feed_configs = 2;
     */
    feedConfigs: FeedConfig[];
    /**
     * latest_epoch_and_rounds stores the latest epoch and round for each feedId
     *
     * @generated from field: repeated injective.ocr.v1beta1.FeedEpochAndRound latest_epoch_and_rounds = 3;
     */
    latestEpochAndRounds: FeedEpochAndRound[];
    /**
     * feed_transmissions stores the last transmission for each feed
     *
     * @generated from field: repeated injective.ocr.v1beta1.FeedTransmission feed_transmissions = 4;
     */
    feedTransmissions: FeedTransmission[];
    /**
     * latest_aggregator_round_ids stores the latest aggregator round ID for each
     * feedId
     *
     * @generated from field: repeated injective.ocr.v1beta1.FeedLatestAggregatorRoundIDs latest_aggregator_round_ids = 5;
     */
    latestAggregatorRoundIds: FeedLatestAggregatorRoundIDs[];
    /**
     * reward_pools stores the reward pools
     *
     * @generated from field: repeated injective.ocr.v1beta1.RewardPool reward_pools = 6;
     */
    rewardPools: RewardPool[];
    /**
     * feed_observation_counts stores the feed observation counts
     *
     * @generated from field: repeated injective.ocr.v1beta1.FeedCounts feed_observation_counts = 7;
     */
    feedObservationCounts: FeedCounts[];
    /**
     * feed_transmission_counts stores the feed transmission counts
     *
     * @generated from field: repeated injective.ocr.v1beta1.FeedCounts feed_transmission_counts = 8;
     */
    feedTransmissionCounts: FeedCounts[];
    /**
     * pending_payeeships stores the pending payeeships
     *
     * @generated from field: repeated injective.ocr.v1beta1.PendingPayeeship pending_payeeships = 9;
     */
    pendingPayeeships: PendingPayeeship[];
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.FeedTransmission
 */
export declare class FeedTransmission extends Message<FeedTransmission> {
    /**
     * @generated from field: string feed_id = 1;
     */
    feedId: string;
    /**
     * @generated from field: injective.ocr.v1beta1.Transmission transmission = 2;
     */
    transmission?: Transmission;
    constructor(data?: PartialMessage<FeedTransmission>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.FeedTransmission";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeedTransmission;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeedTransmission;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeedTransmission;
    static equals(a: FeedTransmission | PlainMessage<FeedTransmission> | undefined, b: FeedTransmission | PlainMessage<FeedTransmission> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.FeedEpochAndRound
 */
export declare class FeedEpochAndRound extends Message<FeedEpochAndRound> {
    /**
     * @generated from field: string feed_id = 1;
     */
    feedId: string;
    /**
     * @generated from field: injective.ocr.v1beta1.EpochAndRound epoch_and_round = 2;
     */
    epochAndRound?: EpochAndRound;
    constructor(data?: PartialMessage<FeedEpochAndRound>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.FeedEpochAndRound";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeedEpochAndRound;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeedEpochAndRound;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeedEpochAndRound;
    static equals(a: FeedEpochAndRound | PlainMessage<FeedEpochAndRound> | undefined, b: FeedEpochAndRound | PlainMessage<FeedEpochAndRound> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.FeedLatestAggregatorRoundIDs
 */
export declare class FeedLatestAggregatorRoundIDs extends Message<FeedLatestAggregatorRoundIDs> {
    /**
     * @generated from field: string feed_id = 1;
     */
    feedId: string;
    /**
     * @generated from field: uint64 aggregator_round_id = 2;
     */
    aggregatorRoundId: bigint;
    constructor(data?: PartialMessage<FeedLatestAggregatorRoundIDs>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.FeedLatestAggregatorRoundIDs";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeedLatestAggregatorRoundIDs;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeedLatestAggregatorRoundIDs;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeedLatestAggregatorRoundIDs;
    static equals(a: FeedLatestAggregatorRoundIDs | PlainMessage<FeedLatestAggregatorRoundIDs> | undefined, b: FeedLatestAggregatorRoundIDs | PlainMessage<FeedLatestAggregatorRoundIDs> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.RewardPool
 */
export declare class RewardPool extends Message<RewardPool> {
    /**
     * @generated from field: string feed_id = 1;
     */
    feedId: string;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin amount = 2;
     */
    amount?: Coin;
    constructor(data?: PartialMessage<RewardPool>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.RewardPool";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RewardPool;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RewardPool;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RewardPool;
    static equals(a: RewardPool | PlainMessage<RewardPool> | undefined, b: RewardPool | PlainMessage<RewardPool> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.FeedCounts
 */
export declare class FeedCounts extends Message<FeedCounts> {
    /**
     * @generated from field: string feed_id = 1;
     */
    feedId: string;
    /**
     * @generated from field: repeated injective.ocr.v1beta1.Count counts = 2;
     */
    counts: Count[];
    constructor(data?: PartialMessage<FeedCounts>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.FeedCounts";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeedCounts;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeedCounts;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeedCounts;
    static equals(a: FeedCounts | PlainMessage<FeedCounts> | undefined, b: FeedCounts | PlainMessage<FeedCounts> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.Count
 */
export declare class Count extends Message<Count> {
    /**
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * @generated from field: uint64 count = 2;
     */
    count: bigint;
    constructor(data?: PartialMessage<Count>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.Count";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Count;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Count;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Count;
    static equals(a: Count | PlainMessage<Count> | undefined, b: Count | PlainMessage<Count> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.PendingPayeeship
 */
export declare class PendingPayeeship extends Message<PendingPayeeship> {
    /**
     * @generated from field: string feed_id = 1;
     */
    feedId: string;
    /**
     * @generated from field: string transmitter = 2;
     */
    transmitter: string;
    /**
     * @generated from field: string proposed_payee = 3;
     */
    proposedPayee: string;
    constructor(data?: PartialMessage<PendingPayeeship>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.PendingPayeeship";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PendingPayeeship;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PendingPayeeship;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PendingPayeeship;
    static equals(a: PendingPayeeship | PlainMessage<PendingPayeeship> | undefined, b: PendingPayeeship | PlainMessage<PendingPayeeship> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map
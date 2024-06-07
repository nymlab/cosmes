import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * AccumulatorContent is the state-entry for the global accumulator.
 * It contains the name of the global accumulator and the total value of
 * shares belonging to it from all positions.
 *
 * @generated from message osmosis.accum.v1beta1.AccumulatorContent
 */
export declare class AccumulatorContent extends Message<AccumulatorContent> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.DecCoin accum_value = 1;
     */
    accumValue: DecCoin[];
    /**
     * @generated from field: string total_shares = 2;
     */
    totalShares: string;
    constructor(data?: PartialMessage<AccumulatorContent>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.accum.v1beta1.AccumulatorContent";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccumulatorContent;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccumulatorContent;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccumulatorContent;
    static equals(a: AccumulatorContent | PlainMessage<AccumulatorContent> | undefined, b: AccumulatorContent | PlainMessage<AccumulatorContent> | undefined): boolean;
}
/**
 * @generated from message osmosis.accum.v1beta1.Options
 */
export declare class Options extends Message<Options> {
    constructor(data?: PartialMessage<Options>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.accum.v1beta1.Options";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Options;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Options;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Options;
    static equals(a: Options | PlainMessage<Options> | undefined, b: Options | PlainMessage<Options> | undefined): boolean;
}
/**
 * Record corresponds to an individual position value belonging to the
 * global accumulator.
 *
 * @generated from message osmosis.accum.v1beta1.Record
 */
export declare class Record extends Message<Record> {
    /**
     * num_shares is the number of shares belonging to the position associated
     * with this record.
     *
     * @generated from field: string num_shares = 1;
     */
    numShares: string;
    /**
     * accum_value_per_share is the subset of coins per shar of the global
     * accumulator value that allows to infer how much a position is entitled to
     * per share that it owns.
     *
     * In the default case with no intervals, this value equals to the global
     * accumulator value at the time of the position creation, the last update or
     * reward claim.
     *
     * In the interval case such as concentrated liquidity, this value equals to
     * the global growth of rewards inside the interval during one of: the time of
     * the position creation, the last update or reward claim. Note, that
     * immediately prior to claiming or updating rewards, this value must be
     * updated to "the growth inside at the time of last update + the growth
     * outside at the time of the current block". This is so that the claiming
     * logic can subtract this updated value from the global accumulator value to
     * get the growth inside the interval from the time of last update up until
     * the current block time.
     *
     * @generated from field: repeated cosmos.base.v1beta1.DecCoin accum_value_per_share = 2;
     */
    accumValuePerShare: DecCoin[];
    /**
     * unclaimed_rewards_total is the total amount of unclaimed rewards that the
     * position is entitled to. This value is updated whenever shares are added or
     * removed from an existing position. We also expose API for manually updating
     * this value for some custom use cases such as merging pre-existing positions
     * into a single one.
     *
     * @generated from field: repeated cosmos.base.v1beta1.DecCoin unclaimed_rewards_total = 3;
     */
    unclaimedRewardsTotal: DecCoin[];
    /**
     * @generated from field: osmosis.accum.v1beta1.Options options = 4;
     */
    options?: Options;
    constructor(data?: PartialMessage<Record>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.accum.v1beta1.Record";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Record;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Record;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Record;
    static equals(a: Record | PlainMessage<Record> | undefined, b: Record | PlainMessage<Record> | undefined): boolean;
}
//# sourceMappingURL=accum_pb.d.ts.map
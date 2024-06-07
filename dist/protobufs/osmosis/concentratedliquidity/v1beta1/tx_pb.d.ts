import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * ===================== MsgCreatePosition
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.MsgCreatePosition
 */
export declare class MsgCreatePosition extends Message<MsgCreatePosition> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    /**
     * @generated from field: string sender = 2;
     */
    sender: string;
    /**
     * @generated from field: int64 lower_tick = 3;
     */
    lowerTick: bigint;
    /**
     * @generated from field: int64 upper_tick = 4;
     */
    upperTick: bigint;
    /**
     * tokens_provided is the amount of tokens provided for the position.
     * It must at a minimum be of length 1 (for a single sided position)
     * and at a maximum be of length 2 (for a position that straddles the current
     * tick).
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin tokens_provided = 5;
     */
    tokensProvided: Coin[];
    /**
     * @generated from field: string token_min_amount0 = 6;
     */
    tokenMinAmount0: string;
    /**
     * @generated from field: string token_min_amount1 = 7;
     */
    tokenMinAmount1: string;
    constructor(data?: PartialMessage<MsgCreatePosition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.MsgCreatePosition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreatePosition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreatePosition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreatePosition;
    static equals(a: MsgCreatePosition | PlainMessage<MsgCreatePosition> | undefined, b: MsgCreatePosition | PlainMessage<MsgCreatePosition> | undefined): boolean;
}
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.MsgCreatePositionResponse
 */
export declare class MsgCreatePositionResponse extends Message<MsgCreatePositionResponse> {
    /**
     * @generated from field: uint64 position_id = 1;
     */
    positionId: bigint;
    /**
     * @generated from field: string amount0 = 2;
     */
    amount0: string;
    /**
     * @generated from field: string amount1 = 3;
     */
    amount1: string;
    /**
     * @generated from field: string liquidity_created = 5;
     */
    liquidityCreated: string;
    /**
     * the lower and upper tick are in the response because there are
     * instances in which multiple ticks represent the same price, so
     * we may move their provided tick to the canonical tick that represents
     * the same price.
     *
     * @generated from field: int64 lower_tick = 6;
     */
    lowerTick: bigint;
    /**
     * @generated from field: int64 upper_tick = 7;
     */
    upperTick: bigint;
    constructor(data?: PartialMessage<MsgCreatePositionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.MsgCreatePositionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreatePositionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreatePositionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreatePositionResponse;
    static equals(a: MsgCreatePositionResponse | PlainMessage<MsgCreatePositionResponse> | undefined, b: MsgCreatePositionResponse | PlainMessage<MsgCreatePositionResponse> | undefined): boolean;
}
/**
 * ===================== MsgAddToPosition
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.MsgAddToPosition
 */
export declare class MsgAddToPosition extends Message<MsgAddToPosition> {
    /**
     * @generated from field: uint64 position_id = 1;
     */
    positionId: bigint;
    /**
     * @generated from field: string sender = 2;
     */
    sender: string;
    /**
     * amount0 represents the amount of token0 willing to put in.
     *
     * @generated from field: string amount0 = 3;
     */
    amount0: string;
    /**
     * amount1 represents the amount of token1 willing to put in.
     *
     * @generated from field: string amount1 = 4;
     */
    amount1: string;
    /**
     * token_min_amount0 represents the minimum amount of token0 desired from the
     * new position being created. Note that this field indicates the min amount0
     * corresponding to the liquidity that is being added, not the total
     * liquidity of the position.
     *
     * @generated from field: string token_min_amount0 = 5;
     */
    tokenMinAmount0: string;
    /**
     * token_min_amount1 represents the minimum amount of token1 desired from the
     * new position being created. Note that this field indicates the min amount1
     * corresponding to the liquidity that is being added, not the total
     * liquidity of the position.
     *
     * @generated from field: string token_min_amount1 = 6;
     */
    tokenMinAmount1: string;
    constructor(data?: PartialMessage<MsgAddToPosition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.MsgAddToPosition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAddToPosition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAddToPosition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAddToPosition;
    static equals(a: MsgAddToPosition | PlainMessage<MsgAddToPosition> | undefined, b: MsgAddToPosition | PlainMessage<MsgAddToPosition> | undefined): boolean;
}
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.MsgAddToPositionResponse
 */
export declare class MsgAddToPositionResponse extends Message<MsgAddToPositionResponse> {
    /**
     * @generated from field: uint64 position_id = 1;
     */
    positionId: bigint;
    /**
     * @generated from field: string amount0 = 2;
     */
    amount0: string;
    /**
     * @generated from field: string amount1 = 3;
     */
    amount1: string;
    constructor(data?: PartialMessage<MsgAddToPositionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.MsgAddToPositionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAddToPositionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAddToPositionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAddToPositionResponse;
    static equals(a: MsgAddToPositionResponse | PlainMessage<MsgAddToPositionResponse> | undefined, b: MsgAddToPositionResponse | PlainMessage<MsgAddToPositionResponse> | undefined): boolean;
}
/**
 * ===================== MsgWithdrawPosition
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition
 */
export declare class MsgWithdrawPosition extends Message<MsgWithdrawPosition> {
    /**
     * @generated from field: uint64 position_id = 1;
     */
    positionId: bigint;
    /**
     * @generated from field: string sender = 2;
     */
    sender: string;
    /**
     * @generated from field: string liquidity_amount = 3;
     */
    liquidityAmount: string;
    constructor(data?: PartialMessage<MsgWithdrawPosition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawPosition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawPosition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawPosition;
    static equals(a: MsgWithdrawPosition | PlainMessage<MsgWithdrawPosition> | undefined, b: MsgWithdrawPosition | PlainMessage<MsgWithdrawPosition> | undefined): boolean;
}
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.MsgWithdrawPositionResponse
 */
export declare class MsgWithdrawPositionResponse extends Message<MsgWithdrawPositionResponse> {
    /**
     * @generated from field: string amount0 = 1;
     */
    amount0: string;
    /**
     * @generated from field: string amount1 = 2;
     */
    amount1: string;
    constructor(data?: PartialMessage<MsgWithdrawPositionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.MsgWithdrawPositionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawPositionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawPositionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawPositionResponse;
    static equals(a: MsgWithdrawPositionResponse | PlainMessage<MsgWithdrawPositionResponse> | undefined, b: MsgWithdrawPositionResponse | PlainMessage<MsgWithdrawPositionResponse> | undefined): boolean;
}
/**
 * ===================== MsgCollectSpreadRewards
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards
 */
export declare class MsgCollectSpreadRewards extends Message<MsgCollectSpreadRewards> {
    /**
     * @generated from field: repeated uint64 position_ids = 1;
     */
    positionIds: bigint[];
    /**
     * @generated from field: string sender = 2;
     */
    sender: string;
    constructor(data?: PartialMessage<MsgCollectSpreadRewards>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCollectSpreadRewards;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCollectSpreadRewards;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCollectSpreadRewards;
    static equals(a: MsgCollectSpreadRewards | PlainMessage<MsgCollectSpreadRewards> | undefined, b: MsgCollectSpreadRewards | PlainMessage<MsgCollectSpreadRewards> | undefined): boolean;
}
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewardsResponse
 */
export declare class MsgCollectSpreadRewardsResponse extends Message<MsgCollectSpreadRewardsResponse> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin collected_spread_rewards = 1;
     */
    collectedSpreadRewards: Coin[];
    constructor(data?: PartialMessage<MsgCollectSpreadRewardsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewardsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCollectSpreadRewardsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCollectSpreadRewardsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCollectSpreadRewardsResponse;
    static equals(a: MsgCollectSpreadRewardsResponse | PlainMessage<MsgCollectSpreadRewardsResponse> | undefined, b: MsgCollectSpreadRewardsResponse | PlainMessage<MsgCollectSpreadRewardsResponse> | undefined): boolean;
}
/**
 * ===================== MsgCollectIncentives
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives
 */
export declare class MsgCollectIncentives extends Message<MsgCollectIncentives> {
    /**
     * @generated from field: repeated uint64 position_ids = 1;
     */
    positionIds: bigint[];
    /**
     * @generated from field: string sender = 2;
     */
    sender: string;
    constructor(data?: PartialMessage<MsgCollectIncentives>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCollectIncentives;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCollectIncentives;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCollectIncentives;
    static equals(a: MsgCollectIncentives | PlainMessage<MsgCollectIncentives> | undefined, b: MsgCollectIncentives | PlainMessage<MsgCollectIncentives> | undefined): boolean;
}
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.MsgCollectIncentivesResponse
 */
export declare class MsgCollectIncentivesResponse extends Message<MsgCollectIncentivesResponse> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin collected_incentives = 1;
     */
    collectedIncentives: Coin[];
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin forfeited_incentives = 2;
     */
    forfeitedIncentives: Coin[];
    constructor(data?: PartialMessage<MsgCollectIncentivesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.MsgCollectIncentivesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCollectIncentivesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCollectIncentivesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCollectIncentivesResponse;
    static equals(a: MsgCollectIncentivesResponse | PlainMessage<MsgCollectIncentivesResponse> | undefined, b: MsgCollectIncentivesResponse | PlainMessage<MsgCollectIncentivesResponse> | undefined): boolean;
}
/**
 * ===================== MsgFungifyChargedPositions
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.MsgFungifyChargedPositions
 */
export declare class MsgFungifyChargedPositions extends Message<MsgFungifyChargedPositions> {
    /**
     * @generated from field: repeated uint64 position_ids = 1;
     */
    positionIds: bigint[];
    /**
     * @generated from field: string sender = 2;
     */
    sender: string;
    constructor(data?: PartialMessage<MsgFungifyChargedPositions>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.MsgFungifyChargedPositions";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgFungifyChargedPositions;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgFungifyChargedPositions;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgFungifyChargedPositions;
    static equals(a: MsgFungifyChargedPositions | PlainMessage<MsgFungifyChargedPositions> | undefined, b: MsgFungifyChargedPositions | PlainMessage<MsgFungifyChargedPositions> | undefined): boolean;
}
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.MsgFungifyChargedPositionsResponse
 */
export declare class MsgFungifyChargedPositionsResponse extends Message<MsgFungifyChargedPositionsResponse> {
    /**
     * @generated from field: uint64 new_position_id = 1;
     */
    newPositionId: bigint;
    constructor(data?: PartialMessage<MsgFungifyChargedPositionsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.MsgFungifyChargedPositionsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgFungifyChargedPositionsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgFungifyChargedPositionsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgFungifyChargedPositionsResponse;
    static equals(a: MsgFungifyChargedPositionsResponse | PlainMessage<MsgFungifyChargedPositionsResponse> | undefined, b: MsgFungifyChargedPositionsResponse | PlainMessage<MsgFungifyChargedPositionsResponse> | undefined): boolean;
}
/**
 * ===================== MsgTransferPositions
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.MsgTransferPositions
 */
export declare class MsgTransferPositions extends Message<MsgTransferPositions> {
    /**
     * @generated from field: repeated uint64 position_ids = 1;
     */
    positionIds: bigint[];
    /**
     * @generated from field: string sender = 2;
     */
    sender: string;
    /**
     * @generated from field: string new_owner = 3;
     */
    newOwner: string;
    constructor(data?: PartialMessage<MsgTransferPositions>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.MsgTransferPositions";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgTransferPositions;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgTransferPositions;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgTransferPositions;
    static equals(a: MsgTransferPositions | PlainMessage<MsgTransferPositions> | undefined, b: MsgTransferPositions | PlainMessage<MsgTransferPositions> | undefined): boolean;
}
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.MsgTransferPositionsResponse
 */
export declare class MsgTransferPositionsResponse extends Message<MsgTransferPositionsResponse> {
    constructor(data?: PartialMessage<MsgTransferPositionsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.MsgTransferPositionsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgTransferPositionsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgTransferPositionsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgTransferPositionsResponse;
    static equals(a: MsgTransferPositionsResponse | PlainMessage<MsgTransferPositionsResponse> | undefined, b: MsgTransferPositionsResponse | PlainMessage<MsgTransferPositionsResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map
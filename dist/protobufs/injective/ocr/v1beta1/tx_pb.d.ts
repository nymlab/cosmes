import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FeedConfig, Params, Report } from "./ocr_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * @generated from message injective.ocr.v1beta1.MsgCreateFeed
 */
export declare class MsgCreateFeed extends Message<MsgCreateFeed> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: injective.ocr.v1beta1.FeedConfig config = 2;
     */
    config?: FeedConfig;
    constructor(data?: PartialMessage<MsgCreateFeed>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.MsgCreateFeed";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateFeed;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateFeed;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateFeed;
    static equals(a: MsgCreateFeed | PlainMessage<MsgCreateFeed> | undefined, b: MsgCreateFeed | PlainMessage<MsgCreateFeed> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.MsgCreateFeedResponse
 */
export declare class MsgCreateFeedResponse extends Message<MsgCreateFeedResponse> {
    constructor(data?: PartialMessage<MsgCreateFeedResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.MsgCreateFeedResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateFeedResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateFeedResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateFeedResponse;
    static equals(a: MsgCreateFeedResponse | PlainMessage<MsgCreateFeedResponse> | undefined, b: MsgCreateFeedResponse | PlainMessage<MsgCreateFeedResponse> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.MsgUpdateFeed
 */
export declare class MsgUpdateFeed extends Message<MsgUpdateFeed> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * feed_id is an unique ID for the target of this config
     *
     * @generated from field: string feed_id = 2;
     */
    feedId: string;
    /**
     * signers ith element is address ith oracle uses to sign a report
     *
     * @generated from field: repeated string signers = 3;
     */
    signers: string[];
    /**
     * transmitters ith element is address ith oracle uses to transmit a report
     * via the transmit method
     *
     * @generated from field: repeated string transmitters = 4;
     */
    transmitters: string[];
    /**
     * Fixed LINK reward for each observer
     *
     * @generated from field: string link_per_observation = 5;
     */
    linkPerObservation: string;
    /**
     * Fixed LINK reward for transmitter
     *
     * @generated from field: string link_per_transmission = 6;
     */
    linkPerTransmission: string;
    /**
     * Native denom for LINK coin in the bank keeper
     *
     * @generated from field: string link_denom = 7;
     */
    linkDenom: string;
    /**
     * feed administrator
     *
     * @generated from field: string feed_admin = 8;
     */
    feedAdmin: string;
    /**
     * feed billing administrator
     *
     * @generated from field: string billing_admin = 9;
     */
    billingAdmin: string;
    constructor(data?: PartialMessage<MsgUpdateFeed>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.MsgUpdateFeed";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateFeed;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateFeed;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateFeed;
    static equals(a: MsgUpdateFeed | PlainMessage<MsgUpdateFeed> | undefined, b: MsgUpdateFeed | PlainMessage<MsgUpdateFeed> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.MsgUpdateFeedResponse
 */
export declare class MsgUpdateFeedResponse extends Message<MsgUpdateFeedResponse> {
    constructor(data?: PartialMessage<MsgUpdateFeedResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.MsgUpdateFeedResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateFeedResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateFeedResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateFeedResponse;
    static equals(a: MsgUpdateFeedResponse | PlainMessage<MsgUpdateFeedResponse> | undefined, b: MsgUpdateFeedResponse | PlainMessage<MsgUpdateFeedResponse> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.MsgTransmit
 */
export declare class MsgTransmit extends Message<MsgTransmit> {
    /**
     * Address of the transmitter
     *
     * @generated from field: string transmitter = 1;
     */
    transmitter: string;
    /**
     * @generated from field: bytes config_digest = 2;
     */
    configDigest: Uint8Array;
    /**
     * @generated from field: string feed_id = 3;
     */
    feedId: string;
    /**
     * @generated from field: uint64 epoch = 4;
     */
    epoch: bigint;
    /**
     * @generated from field: uint64 round = 5;
     */
    round: bigint;
    /**
     * @generated from field: bytes extra_hash = 6;
     */
    extraHash: Uint8Array;
    /**
     * @generated from field: injective.ocr.v1beta1.Report report = 7;
     */
    report?: Report;
    /**
     * @generated from field: repeated bytes signatures = 8;
     */
    signatures: Uint8Array[];
    constructor(data?: PartialMessage<MsgTransmit>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.MsgTransmit";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgTransmit;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgTransmit;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgTransmit;
    static equals(a: MsgTransmit | PlainMessage<MsgTransmit> | undefined, b: MsgTransmit | PlainMessage<MsgTransmit> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.MsgTransmitResponse
 */
export declare class MsgTransmitResponse extends Message<MsgTransmitResponse> {
    constructor(data?: PartialMessage<MsgTransmitResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.MsgTransmitResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgTransmitResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgTransmitResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgTransmitResponse;
    static equals(a: MsgTransmitResponse | PlainMessage<MsgTransmitResponse> | undefined, b: MsgTransmitResponse | PlainMessage<MsgTransmitResponse> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.MsgFundFeedRewardPool
 */
export declare class MsgFundFeedRewardPool extends Message<MsgFundFeedRewardPool> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: string feed_id = 2;
     */
    feedId: string;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin amount = 3;
     */
    amount?: Coin;
    constructor(data?: PartialMessage<MsgFundFeedRewardPool>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.MsgFundFeedRewardPool";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgFundFeedRewardPool;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgFundFeedRewardPool;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgFundFeedRewardPool;
    static equals(a: MsgFundFeedRewardPool | PlainMessage<MsgFundFeedRewardPool> | undefined, b: MsgFundFeedRewardPool | PlainMessage<MsgFundFeedRewardPool> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.MsgFundFeedRewardPoolResponse
 */
export declare class MsgFundFeedRewardPoolResponse extends Message<MsgFundFeedRewardPoolResponse> {
    constructor(data?: PartialMessage<MsgFundFeedRewardPoolResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.MsgFundFeedRewardPoolResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgFundFeedRewardPoolResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgFundFeedRewardPoolResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgFundFeedRewardPoolResponse;
    static equals(a: MsgFundFeedRewardPoolResponse | PlainMessage<MsgFundFeedRewardPoolResponse> | undefined, b: MsgFundFeedRewardPoolResponse | PlainMessage<MsgFundFeedRewardPoolResponse> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.MsgWithdrawFeedRewardPool
 */
export declare class MsgWithdrawFeedRewardPool extends Message<MsgWithdrawFeedRewardPool> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: string feed_id = 2;
     */
    feedId: string;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin amount = 3;
     */
    amount?: Coin;
    constructor(data?: PartialMessage<MsgWithdrawFeedRewardPool>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.MsgWithdrawFeedRewardPool";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawFeedRewardPool;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawFeedRewardPool;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawFeedRewardPool;
    static equals(a: MsgWithdrawFeedRewardPool | PlainMessage<MsgWithdrawFeedRewardPool> | undefined, b: MsgWithdrawFeedRewardPool | PlainMessage<MsgWithdrawFeedRewardPool> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.MsgWithdrawFeedRewardPoolResponse
 */
export declare class MsgWithdrawFeedRewardPoolResponse extends Message<MsgWithdrawFeedRewardPoolResponse> {
    constructor(data?: PartialMessage<MsgWithdrawFeedRewardPoolResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.MsgWithdrawFeedRewardPoolResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawFeedRewardPoolResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawFeedRewardPoolResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawFeedRewardPoolResponse;
    static equals(a: MsgWithdrawFeedRewardPoolResponse | PlainMessage<MsgWithdrawFeedRewardPoolResponse> | undefined, b: MsgWithdrawFeedRewardPoolResponse | PlainMessage<MsgWithdrawFeedRewardPoolResponse> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.MsgSetPayees
 */
export declare class MsgSetPayees extends Message<MsgSetPayees> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: string feed_id = 2;
     */
    feedId: string;
    /**
     * addresses oracles use to transmit the reports
     *
     * @generated from field: repeated string transmitters = 3;
     */
    transmitters: string[];
    /**
     * addresses of payees corresponding to list of transmitters
     *
     * @generated from field: repeated string payees = 4;
     */
    payees: string[];
    constructor(data?: PartialMessage<MsgSetPayees>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.MsgSetPayees";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetPayees;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetPayees;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetPayees;
    static equals(a: MsgSetPayees | PlainMessage<MsgSetPayees> | undefined, b: MsgSetPayees | PlainMessage<MsgSetPayees> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.MsgSetPayeesResponse
 */
export declare class MsgSetPayeesResponse extends Message<MsgSetPayeesResponse> {
    constructor(data?: PartialMessage<MsgSetPayeesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.MsgSetPayeesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetPayeesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetPayeesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetPayeesResponse;
    static equals(a: MsgSetPayeesResponse | PlainMessage<MsgSetPayeesResponse> | undefined, b: MsgSetPayeesResponse | PlainMessage<MsgSetPayeesResponse> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.MsgTransferPayeeship
 */
export declare class MsgTransferPayeeship extends Message<MsgTransferPayeeship> {
    /**
     * transmitter address of oracle whose payee is changing
     *
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: string transmitter = 2;
     */
    transmitter: string;
    /**
     * @generated from field: string feed_id = 3;
     */
    feedId: string;
    /**
     * new payee address
     *
     * @generated from field: string proposed = 4;
     */
    proposed: string;
    constructor(data?: PartialMessage<MsgTransferPayeeship>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.MsgTransferPayeeship";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgTransferPayeeship;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgTransferPayeeship;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgTransferPayeeship;
    static equals(a: MsgTransferPayeeship | PlainMessage<MsgTransferPayeeship> | undefined, b: MsgTransferPayeeship | PlainMessage<MsgTransferPayeeship> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.MsgTransferPayeeshipResponse
 */
export declare class MsgTransferPayeeshipResponse extends Message<MsgTransferPayeeshipResponse> {
    constructor(data?: PartialMessage<MsgTransferPayeeshipResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.MsgTransferPayeeshipResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgTransferPayeeshipResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgTransferPayeeshipResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgTransferPayeeshipResponse;
    static equals(a: MsgTransferPayeeshipResponse | PlainMessage<MsgTransferPayeeshipResponse> | undefined, b: MsgTransferPayeeshipResponse | PlainMessage<MsgTransferPayeeshipResponse> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.MsgAcceptPayeeship
 */
export declare class MsgAcceptPayeeship extends Message<MsgAcceptPayeeship> {
    /**
     * new payee address
     *
     * @generated from field: string payee = 1;
     */
    payee: string;
    /**
     * transmitter address of oracle whose payee is changing
     *
     * @generated from field: string transmitter = 2;
     */
    transmitter: string;
    /**
     * @generated from field: string feed_id = 3;
     */
    feedId: string;
    constructor(data?: PartialMessage<MsgAcceptPayeeship>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.MsgAcceptPayeeship";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAcceptPayeeship;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAcceptPayeeship;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAcceptPayeeship;
    static equals(a: MsgAcceptPayeeship | PlainMessage<MsgAcceptPayeeship> | undefined, b: MsgAcceptPayeeship | PlainMessage<MsgAcceptPayeeship> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.MsgAcceptPayeeshipResponse
 */
export declare class MsgAcceptPayeeshipResponse extends Message<MsgAcceptPayeeshipResponse> {
    constructor(data?: PartialMessage<MsgAcceptPayeeshipResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.MsgAcceptPayeeshipResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAcceptPayeeshipResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAcceptPayeeshipResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAcceptPayeeshipResponse;
    static equals(a: MsgAcceptPayeeshipResponse | PlainMessage<MsgAcceptPayeeshipResponse> | undefined, b: MsgAcceptPayeeshipResponse | PlainMessage<MsgAcceptPayeeshipResponse> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.MsgUpdateParams
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
     * @generated from field: injective.ocr.v1beta1.Params params = 2;
     */
    params?: Params;
    constructor(data?: PartialMessage<MsgUpdateParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.MsgUpdateParams";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParams;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParams;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParams;
    static equals(a: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined, b: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.MsgUpdateParamsResponse
 */
export declare class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
    constructor(data?: PartialMessage<MsgUpdateParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.MsgUpdateParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static equals(a: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined, b: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map
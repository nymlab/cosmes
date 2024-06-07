import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * @generated from message injective.ocr.v1beta1.Params
 */
export declare class Params extends Message<Params> {
    /**
     * Native denom for LINK coin in the bank keeper
     *
     * @generated from field: string link_denom = 1;
     */
    linkDenom: string;
    /**
     * The block number interval at which payouts are made
     *
     * @generated from field: uint64 payout_block_interval = 2;
     */
    payoutBlockInterval: bigint;
    /**
     * The admin for the OCR module
     *
     * @generated from field: string module_admin = 3;
     */
    moduleAdmin: string;
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.FeedConfig
 */
export declare class FeedConfig extends Message<FeedConfig> {
    /**
     * signers ith element is address ith oracle uses to sign a report
     *
     * @generated from field: repeated string signers = 1;
     */
    signers: string[];
    /**
     * transmitters ith element is address ith oracle uses to transmit a report
     * via the transmit method
     *
     * @generated from field: repeated string transmitters = 2;
     */
    transmitters: string[];
    /**
     * f maximum number of faulty/dishonest oracles the protocol can tolerate
     * while still working correctly
     *
     * @generated from field: uint32 f = 3;
     */
    f: number;
    /**
     * onchain_config serialized data with reporting plugin params on chain.
     *
     * @generated from field: bytes onchain_config = 4;
     */
    onchainConfig: Uint8Array;
    /**
     * offchain_config_version version of the serialization format used for
     * "offchain_config" parameter
     *
     * @generated from field: uint64 offchain_config_version = 5;
     */
    offchainConfigVersion: bigint;
    /**
     * offchain_config serialized data used by oracles to configure their offchain
     * operation
     *
     * @generated from field: bytes offchain_config = 6;
     */
    offchainConfig: Uint8Array;
    /**
     * feed-specific params for the Cosmos module.
     *
     * @generated from field: injective.ocr.v1beta1.ModuleParams module_params = 7;
     */
    moduleParams?: ModuleParams;
    constructor(data?: PartialMessage<FeedConfig>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.FeedConfig";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeedConfig;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeedConfig;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeedConfig;
    static equals(a: FeedConfig | PlainMessage<FeedConfig> | undefined, b: FeedConfig | PlainMessage<FeedConfig> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.FeedConfigInfo
 */
export declare class FeedConfigInfo extends Message<FeedConfigInfo> {
    /**
     * @generated from field: bytes latest_config_digest = 1;
     */
    latestConfigDigest: Uint8Array;
    /**
     * @generated from field: uint32 f = 2;
     */
    f: number;
    /**
     * @generated from field: uint32 n = 3;
     */
    n: number;
    /**
     * config_count ordinal number of this config setting among all config
     * settings
     *
     * @generated from field: uint64 config_count = 4;
     */
    configCount: bigint;
    /**
     * @generated from field: int64 latest_config_block_number = 5;
     */
    latestConfigBlockNumber: bigint;
    constructor(data?: PartialMessage<FeedConfigInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.FeedConfigInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeedConfigInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeedConfigInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeedConfigInfo;
    static equals(a: FeedConfigInfo | PlainMessage<FeedConfigInfo> | undefined, b: FeedConfigInfo | PlainMessage<FeedConfigInfo> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.ModuleParams
 */
export declare class ModuleParams extends Message<ModuleParams> {
    /**
     * feed_id is an unique ID for the target of this config
     *
     * @generated from field: string feed_id = 1;
     */
    feedId: string;
    /**
     * lowest answer the median of a report is allowed to be
     *
     * @generated from field: string min_answer = 2;
     */
    minAnswer: string;
    /**
     * highest answer the median of a report is allowed to be
     *
     * @generated from field: string max_answer = 3;
     */
    maxAnswer: string;
    /**
     * Fixed LINK reward for each observer
     *
     * @generated from field: string link_per_observation = 4;
     */
    linkPerObservation: string;
    /**
     * Fixed LINK reward for transmitter
     *
     * @generated from field: string link_per_transmission = 5;
     */
    linkPerTransmission: string;
    /**
     * Native denom for LINK coin in the bank keeper
     *
     * @generated from field: string link_denom = 6;
     */
    linkDenom: string;
    /**
     * Enables unique reports
     *
     * @generated from field: bool unique_reports = 7;
     */
    uniqueReports: boolean;
    /**
     * short human-readable description of observable this feed's answers pertain
     * to
     *
     * @generated from field: string description = 8;
     */
    description: string;
    /**
     * feed administrator
     *
     * @generated from field: string feed_admin = 9;
     */
    feedAdmin: string;
    /**
     * feed billing administrator
     *
     * @generated from field: string billing_admin = 10;
     */
    billingAdmin: string;
    constructor(data?: PartialMessage<ModuleParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.ModuleParams";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModuleParams;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModuleParams;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModuleParams;
    static equals(a: ModuleParams | PlainMessage<ModuleParams> | undefined, b: ModuleParams | PlainMessage<ModuleParams> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.ContractConfig
 */
export declare class ContractConfig extends Message<ContractConfig> {
    /**
     * config_count ordinal number of this config setting among all config
     * settings
     *
     * @generated from field: uint64 config_count = 1;
     */
    configCount: bigint;
    /**
     * signers ith element is address ith oracle uses to sign a report
     *
     * @generated from field: repeated string signers = 2;
     */
    signers: string[];
    /**
     * transmitters ith element is address ith oracle uses to transmit a report
     * via the transmit method
     *
     * @generated from field: repeated string transmitters = 3;
     */
    transmitters: string[];
    /**
     * f maximum number of faulty/dishonest oracles the protocol can tolerate
     * while still working correctly
     *
     * @generated from field: uint32 f = 4;
     */
    f: number;
    /**
     * onchain_config serialized data with reporting plugin params on chain.
     *
     * @generated from field: bytes onchain_config = 5;
     */
    onchainConfig: Uint8Array;
    /**
     * offchain_config_version version of the serialization format used for
     * "offchain_config" parameter
     *
     * @generated from field: uint64 offchain_config_version = 6;
     */
    offchainConfigVersion: bigint;
    /**
     * offchain_config serialized data used by oracles to configure their offchain
     * operation
     *
     * @generated from field: bytes offchain_config = 7;
     */
    offchainConfig: Uint8Array;
    constructor(data?: PartialMessage<ContractConfig>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.ContractConfig";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContractConfig;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContractConfig;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContractConfig;
    static equals(a: ContractConfig | PlainMessage<ContractConfig> | undefined, b: ContractConfig | PlainMessage<ContractConfig> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.SetConfigProposal
 */
export declare class SetConfigProposal extends Message<SetConfigProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: injective.ocr.v1beta1.FeedConfig config = 3;
     */
    config?: FeedConfig;
    constructor(data?: PartialMessage<SetConfigProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.SetConfigProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetConfigProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetConfigProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetConfigProposal;
    static equals(a: SetConfigProposal | PlainMessage<SetConfigProposal> | undefined, b: SetConfigProposal | PlainMessage<SetConfigProposal> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.FeedProperties
 */
export declare class FeedProperties extends Message<FeedProperties> {
    /**
     * feed_id is an unique ID for the target of this config
     *
     * @generated from field: string feed_id = 1;
     */
    feedId: string;
    /**
     * f maximum number of faulty/dishonest oracles the protocol can tolerate
     * while still working correctly
     *
     * @generated from field: uint32 f = 2;
     */
    f: number;
    /**
     * onchain_config serialized data with reporting plugin params on chain.
     *
     * @generated from field: bytes onchain_config = 3;
     */
    onchainConfig: Uint8Array;
    /**
     * offchain_config_version version of the serialization format used for
     * "offchain_config" parameter
     *
     * @generated from field: uint64 offchain_config_version = 4;
     */
    offchainConfigVersion: bigint;
    /**
     * offchain_config serialized data used by oracles to configure their offchain
     * operation
     *
     * @generated from field: bytes offchain_config = 5;
     */
    offchainConfig: Uint8Array;
    /**
     * lowest answer the median of a report is allowed to be
     *
     * @generated from field: string min_answer = 6;
     */
    minAnswer: string;
    /**
     * highest answer the median of a report is allowed to be
     *
     * @generated from field: string max_answer = 7;
     */
    maxAnswer: string;
    /**
     * Fixed LINK reward for each observer
     *
     * @generated from field: string link_per_observation = 8;
     */
    linkPerObservation: string;
    /**
     * Fixed LINK reward for transmitter
     *
     * @generated from field: string link_per_transmission = 9;
     */
    linkPerTransmission: string;
    /**
     * Enables unique reports
     *
     * @generated from field: bool unique_reports = 10;
     */
    uniqueReports: boolean;
    /**
     * short human-readable description of observable this feed's answers pertain
     * to
     *
     * @generated from field: string description = 11;
     */
    description: string;
    constructor(data?: PartialMessage<FeedProperties>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.FeedProperties";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeedProperties;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeedProperties;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeedProperties;
    static equals(a: FeedProperties | PlainMessage<FeedProperties> | undefined, b: FeedProperties | PlainMessage<FeedProperties> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.SetBatchConfigProposal
 */
export declare class SetBatchConfigProposal extends Message<SetBatchConfigProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
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
     * Native denom for LINK coin in the bank keeper
     *
     * @generated from field: string link_denom = 5;
     */
    linkDenom: string;
    /**
     * feed properties
     *
     * @generated from field: repeated injective.ocr.v1beta1.FeedProperties feed_properties = 6;
     */
    feedProperties: FeedProperties[];
    constructor(data?: PartialMessage<SetBatchConfigProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.SetBatchConfigProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetBatchConfigProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetBatchConfigProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetBatchConfigProposal;
    static equals(a: SetBatchConfigProposal | PlainMessage<SetBatchConfigProposal> | undefined, b: SetBatchConfigProposal | PlainMessage<SetBatchConfigProposal> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.OracleObservationsCounts
 */
export declare class OracleObservationsCounts extends Message<OracleObservationsCounts> {
    /**
     * @generated from field: repeated uint32 counts = 1;
     */
    counts: number[];
    constructor(data?: PartialMessage<OracleObservationsCounts>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.OracleObservationsCounts";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OracleObservationsCounts;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OracleObservationsCounts;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OracleObservationsCounts;
    static equals(a: OracleObservationsCounts | PlainMessage<OracleObservationsCounts> | undefined, b: OracleObservationsCounts | PlainMessage<OracleObservationsCounts> | undefined): boolean;
}
/**
 * LINK-INJ-denominated reimbursements for gas used by transmitters.
 *
 * @generated from message injective.ocr.v1beta1.GasReimbursements
 */
export declare class GasReimbursements extends Message<GasReimbursements> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin reimbursements = 1;
     */
    reimbursements: Coin[];
    constructor(data?: PartialMessage<GasReimbursements>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.GasReimbursements";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GasReimbursements;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GasReimbursements;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GasReimbursements;
    static equals(a: GasReimbursements | PlainMessage<GasReimbursements> | undefined, b: GasReimbursements | PlainMessage<GasReimbursements> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.Payee
 */
export declare class Payee extends Message<Payee> {
    /**
     * @generated from field: string transmitter_addr = 1;
     */
    transmitterAddr: string;
    /**
     * @generated from field: string payment_addr = 2;
     */
    paymentAddr: string;
    constructor(data?: PartialMessage<Payee>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.Payee";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Payee;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Payee;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Payee;
    static equals(a: Payee | PlainMessage<Payee> | undefined, b: Payee | PlainMessage<Payee> | undefined): boolean;
}
/**
 * Transmission records the median answer from the transmit transaction at
 * time timestamp
 *
 * @generated from message injective.ocr.v1beta1.Transmission
 */
export declare class Transmission extends Message<Transmission> {
    /**
     * @generated from field: string answer = 1;
     */
    answer: string;
    /**
     * when were observations made offchain
     *
     * @generated from field: int64 observations_timestamp = 2;
     */
    observationsTimestamp: bigint;
    /**
     * when was report received onchain
     *
     * @generated from field: int64 transmission_timestamp = 3;
     */
    transmissionTimestamp: bigint;
    constructor(data?: PartialMessage<Transmission>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.Transmission";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Transmission;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Transmission;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Transmission;
    static equals(a: Transmission | PlainMessage<Transmission> | undefined, b: Transmission | PlainMessage<Transmission> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.EpochAndRound
 */
export declare class EpochAndRound extends Message<EpochAndRound> {
    /**
     * @generated from field: uint64 epoch = 1;
     */
    epoch: bigint;
    /**
     * @generated from field: uint64 round = 2;
     */
    round: bigint;
    constructor(data?: PartialMessage<EpochAndRound>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.EpochAndRound";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EpochAndRound;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EpochAndRound;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EpochAndRound;
    static equals(a: EpochAndRound | PlainMessage<EpochAndRound> | undefined, b: EpochAndRound | PlainMessage<EpochAndRound> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.Report
 */
export declare class Report extends Message<Report> {
    /**
     * @generated from field: int64 observations_timestamp = 1;
     */
    observationsTimestamp: bigint;
    /**
     * ith element is the index of the ith observer
     *
     * @generated from field: bytes observers = 2;
     */
    observers: Uint8Array;
    /**
     * ith element is the ith observation
     *
     * @generated from field: repeated string observations = 3;
     */
    observations: string[];
    constructor(data?: PartialMessage<Report>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.Report";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Report;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Report;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Report;
    static equals(a: Report | PlainMessage<Report> | undefined, b: Report | PlainMessage<Report> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.ReportToSign
 */
export declare class ReportToSign extends Message<ReportToSign> {
    /**
     * @generated from field: bytes config_digest = 1;
     */
    configDigest: Uint8Array;
    /**
     * @generated from field: uint64 epoch = 2;
     */
    epoch: bigint;
    /**
     * @generated from field: uint64 round = 3;
     */
    round: bigint;
    /**
     * @generated from field: bytes extra_hash = 4;
     */
    extraHash: Uint8Array;
    /**
     * Opaque report
     *
     * @generated from field: bytes report = 5;
     */
    report: Uint8Array;
    constructor(data?: PartialMessage<ReportToSign>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.ReportToSign";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReportToSign;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReportToSign;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReportToSign;
    static equals(a: ReportToSign | PlainMessage<ReportToSign> | undefined, b: ReportToSign | PlainMessage<ReportToSign> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.EventOraclePaid
 */
export declare class EventOraclePaid extends Message<EventOraclePaid> {
    /**
     * @generated from field: string transmitter_addr = 1;
     */
    transmitterAddr: string;
    /**
     * @generated from field: string payee_addr = 2;
     */
    payeeAddr: string;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin amount = 3;
     */
    amount?: Coin;
    constructor(data?: PartialMessage<EventOraclePaid>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.EventOraclePaid";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventOraclePaid;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventOraclePaid;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventOraclePaid;
    static equals(a: EventOraclePaid | PlainMessage<EventOraclePaid> | undefined, b: EventOraclePaid | PlainMessage<EventOraclePaid> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.EventAnswerUpdated
 */
export declare class EventAnswerUpdated extends Message<EventAnswerUpdated> {
    /**
     * @generated from field: string current = 1;
     */
    current: string;
    /**
     * @generated from field: string round_id = 2;
     */
    roundId: string;
    /**
     * @generated from field: google.protobuf.Timestamp updated_at = 3;
     */
    updatedAt?: Timestamp;
    constructor(data?: PartialMessage<EventAnswerUpdated>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.EventAnswerUpdated";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventAnswerUpdated;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventAnswerUpdated;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventAnswerUpdated;
    static equals(a: EventAnswerUpdated | PlainMessage<EventAnswerUpdated> | undefined, b: EventAnswerUpdated | PlainMessage<EventAnswerUpdated> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.EventNewRound
 */
export declare class EventNewRound extends Message<EventNewRound> {
    /**
     * @generated from field: string round_id = 1;
     */
    roundId: string;
    /**
     * address of starter
     *
     * @generated from field: string started_by = 2;
     */
    startedBy: string;
    /**
     * @generated from field: google.protobuf.Timestamp started_at = 3;
     */
    startedAt?: Timestamp;
    constructor(data?: PartialMessage<EventNewRound>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.EventNewRound";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventNewRound;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventNewRound;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventNewRound;
    static equals(a: EventNewRound | PlainMessage<EventNewRound> | undefined, b: EventNewRound | PlainMessage<EventNewRound> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.EventTransmitted
 */
export declare class EventTransmitted extends Message<EventTransmitted> {
    /**
     * @generated from field: bytes config_digest = 1;
     */
    configDigest: Uint8Array;
    /**
     * @generated from field: uint64 epoch = 2;
     */
    epoch: bigint;
    constructor(data?: PartialMessage<EventTransmitted>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.EventTransmitted";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventTransmitted;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventTransmitted;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventTransmitted;
    static equals(a: EventTransmitted | PlainMessage<EventTransmitted> | undefined, b: EventTransmitted | PlainMessage<EventTransmitted> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.EventNewTransmission
 */
export declare class EventNewTransmission extends Message<EventNewTransmission> {
    /**
     * @generated from field: string feed_id = 1;
     */
    feedId: string;
    /**
     * @generated from field: uint32 aggregator_round_id = 2;
     */
    aggregatorRoundId: number;
    /**
     * @generated from field: string answer = 3;
     */
    answer: string;
    /**
     * @generated from field: string transmitter = 4;
     */
    transmitter: string;
    /**
     * @generated from field: int64 observations_timestamp = 5;
     */
    observationsTimestamp: bigint;
    /**
     * @generated from field: repeated string observations = 6;
     */
    observations: string[];
    /**
     * @generated from field: bytes observers = 7;
     */
    observers: Uint8Array;
    /**
     * @generated from field: bytes config_digest = 8;
     */
    configDigest: Uint8Array;
    /**
     * @generated from field: injective.ocr.v1beta1.EpochAndRound epoch_and_round = 9;
     */
    epochAndRound?: EpochAndRound;
    constructor(data?: PartialMessage<EventNewTransmission>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.EventNewTransmission";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventNewTransmission;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventNewTransmission;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventNewTransmission;
    static equals(a: EventNewTransmission | PlainMessage<EventNewTransmission> | undefined, b: EventNewTransmission | PlainMessage<EventNewTransmission> | undefined): boolean;
}
/**
 * @generated from message injective.ocr.v1beta1.EventConfigSet
 */
export declare class EventConfigSet extends Message<EventConfigSet> {
    /**
     * hash of the config
     *
     * @generated from field: bytes config_digest = 1;
     */
    configDigest: Uint8Array;
    /**
     * previous_config_block_number block in which the previous config was set, to
     * simplify historic analysis
     *
     * @generated from field: int64 previous_config_block_number = 2;
     */
    previousConfigBlockNumber: bigint;
    /**
     * @generated from field: injective.ocr.v1beta1.FeedConfig config = 3;
     */
    config?: FeedConfig;
    /**
     * @generated from field: injective.ocr.v1beta1.FeedConfigInfo config_info = 4;
     */
    configInfo?: FeedConfigInfo;
    constructor(data?: PartialMessage<EventConfigSet>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.ocr.v1beta1.EventConfigSet";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventConfigSet;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventConfigSet;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventConfigSet;
    static equals(a: EventConfigSet | PlainMessage<EventConfigSet> | undefined, b: EventConfigSet | PlainMessage<EventConfigSet> | undefined): boolean;
}
//# sourceMappingURL=ocr_pb.d.ts.map
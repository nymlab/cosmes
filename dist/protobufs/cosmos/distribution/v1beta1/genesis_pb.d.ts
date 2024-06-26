import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { DecCoin } from "../../base/v1beta1/coin_pb.js";
import { DelegatorStartingInfo, FeePool, Params, ValidatorAccumulatedCommission, ValidatorCurrentRewards, ValidatorHistoricalRewards, ValidatorSlashEvent } from "./distribution_pb.js";
/**
 * DelegatorWithdrawInfo is the address for where distributions rewards are
 * withdrawn to by default this struct is only used at genesis to feed in
 * default withdraw addresses.
 *
 * @generated from message cosmos.distribution.v1beta1.DelegatorWithdrawInfo
 */
export declare class DelegatorWithdrawInfo extends Message<DelegatorWithdrawInfo> {
    /**
     * delegator_address is the address of the delegator.
     *
     * @generated from field: string delegator_address = 1;
     */
    delegatorAddress: string;
    /**
     * withdraw_address is the address to withdraw the delegation rewards to.
     *
     * @generated from field: string withdraw_address = 2;
     */
    withdrawAddress: string;
    constructor(data?: PartialMessage<DelegatorWithdrawInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.DelegatorWithdrawInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DelegatorWithdrawInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DelegatorWithdrawInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DelegatorWithdrawInfo;
    static equals(a: DelegatorWithdrawInfo | PlainMessage<DelegatorWithdrawInfo> | undefined, b: DelegatorWithdrawInfo | PlainMessage<DelegatorWithdrawInfo> | undefined): boolean;
}
/**
 * ValidatorOutstandingRewardsRecord is used for import/export via genesis json.
 *
 * @generated from message cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord
 */
export declare class ValidatorOutstandingRewardsRecord extends Message<ValidatorOutstandingRewardsRecord> {
    /**
     * validator_address is the address of the validator.
     *
     * @generated from field: string validator_address = 1;
     */
    validatorAddress: string;
    /**
     * outstanding_rewards represents the outstanding rewards of a validator.
     *
     * @generated from field: repeated cosmos.base.v1beta1.DecCoin outstanding_rewards = 2;
     */
    outstandingRewards: DecCoin[];
    constructor(data?: PartialMessage<ValidatorOutstandingRewardsRecord>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValidatorOutstandingRewardsRecord;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValidatorOutstandingRewardsRecord;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValidatorOutstandingRewardsRecord;
    static equals(a: ValidatorOutstandingRewardsRecord | PlainMessage<ValidatorOutstandingRewardsRecord> | undefined, b: ValidatorOutstandingRewardsRecord | PlainMessage<ValidatorOutstandingRewardsRecord> | undefined): boolean;
}
/**
 * ValidatorAccumulatedCommissionRecord is used for import / export via genesis
 * json.
 *
 * @generated from message cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord
 */
export declare class ValidatorAccumulatedCommissionRecord extends Message<ValidatorAccumulatedCommissionRecord> {
    /**
     * validator_address is the address of the validator.
     *
     * @generated from field: string validator_address = 1;
     */
    validatorAddress: string;
    /**
     * accumulated is the accumulated commission of a validator.
     *
     * @generated from field: cosmos.distribution.v1beta1.ValidatorAccumulatedCommission accumulated = 2;
     */
    accumulated?: ValidatorAccumulatedCommission;
    constructor(data?: PartialMessage<ValidatorAccumulatedCommissionRecord>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValidatorAccumulatedCommissionRecord;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValidatorAccumulatedCommissionRecord;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValidatorAccumulatedCommissionRecord;
    static equals(a: ValidatorAccumulatedCommissionRecord | PlainMessage<ValidatorAccumulatedCommissionRecord> | undefined, b: ValidatorAccumulatedCommissionRecord | PlainMessage<ValidatorAccumulatedCommissionRecord> | undefined): boolean;
}
/**
 * ValidatorHistoricalRewardsRecord is used for import / export via genesis
 * json.
 *
 * @generated from message cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord
 */
export declare class ValidatorHistoricalRewardsRecord extends Message<ValidatorHistoricalRewardsRecord> {
    /**
     * validator_address is the address of the validator.
     *
     * @generated from field: string validator_address = 1;
     */
    validatorAddress: string;
    /**
     * period defines the period the historical rewards apply to.
     *
     * @generated from field: uint64 period = 2;
     */
    period: bigint;
    /**
     * rewards defines the historical rewards of a validator.
     *
     * @generated from field: cosmos.distribution.v1beta1.ValidatorHistoricalRewards rewards = 3;
     */
    rewards?: ValidatorHistoricalRewards;
    constructor(data?: PartialMessage<ValidatorHistoricalRewardsRecord>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValidatorHistoricalRewardsRecord;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValidatorHistoricalRewardsRecord;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValidatorHistoricalRewardsRecord;
    static equals(a: ValidatorHistoricalRewardsRecord | PlainMessage<ValidatorHistoricalRewardsRecord> | undefined, b: ValidatorHistoricalRewardsRecord | PlainMessage<ValidatorHistoricalRewardsRecord> | undefined): boolean;
}
/**
 * ValidatorCurrentRewardsRecord is used for import / export via genesis json.
 *
 * @generated from message cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord
 */
export declare class ValidatorCurrentRewardsRecord extends Message<ValidatorCurrentRewardsRecord> {
    /**
     * validator_address is the address of the validator.
     *
     * @generated from field: string validator_address = 1;
     */
    validatorAddress: string;
    /**
     * rewards defines the current rewards of a validator.
     *
     * @generated from field: cosmos.distribution.v1beta1.ValidatorCurrentRewards rewards = 2;
     */
    rewards?: ValidatorCurrentRewards;
    constructor(data?: PartialMessage<ValidatorCurrentRewardsRecord>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValidatorCurrentRewardsRecord;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValidatorCurrentRewardsRecord;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValidatorCurrentRewardsRecord;
    static equals(a: ValidatorCurrentRewardsRecord | PlainMessage<ValidatorCurrentRewardsRecord> | undefined, b: ValidatorCurrentRewardsRecord | PlainMessage<ValidatorCurrentRewardsRecord> | undefined): boolean;
}
/**
 * DelegatorStartingInfoRecord used for import / export via genesis json.
 *
 * @generated from message cosmos.distribution.v1beta1.DelegatorStartingInfoRecord
 */
export declare class DelegatorStartingInfoRecord extends Message<DelegatorStartingInfoRecord> {
    /**
     * delegator_address is the address of the delegator.
     *
     * @generated from field: string delegator_address = 1;
     */
    delegatorAddress: string;
    /**
     * validator_address is the address of the validator.
     *
     * @generated from field: string validator_address = 2;
     */
    validatorAddress: string;
    /**
     * starting_info defines the starting info of a delegator.
     *
     * @generated from field: cosmos.distribution.v1beta1.DelegatorStartingInfo starting_info = 3;
     */
    startingInfo?: DelegatorStartingInfo;
    constructor(data?: PartialMessage<DelegatorStartingInfoRecord>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.DelegatorStartingInfoRecord";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DelegatorStartingInfoRecord;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DelegatorStartingInfoRecord;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DelegatorStartingInfoRecord;
    static equals(a: DelegatorStartingInfoRecord | PlainMessage<DelegatorStartingInfoRecord> | undefined, b: DelegatorStartingInfoRecord | PlainMessage<DelegatorStartingInfoRecord> | undefined): boolean;
}
/**
 * ValidatorSlashEventRecord is used for import / export via genesis json.
 *
 * @generated from message cosmos.distribution.v1beta1.ValidatorSlashEventRecord
 */
export declare class ValidatorSlashEventRecord extends Message<ValidatorSlashEventRecord> {
    /**
     * validator_address is the address of the validator.
     *
     * @generated from field: string validator_address = 1;
     */
    validatorAddress: string;
    /**
     * height defines the block height at which the slash event occurred.
     *
     * @generated from field: uint64 height = 2;
     */
    height: bigint;
    /**
     * period is the period of the slash event.
     *
     * @generated from field: uint64 period = 3;
     */
    period: bigint;
    /**
     * validator_slash_event describes the slash event.
     *
     * @generated from field: cosmos.distribution.v1beta1.ValidatorSlashEvent validator_slash_event = 4;
     */
    validatorSlashEvent?: ValidatorSlashEvent;
    constructor(data?: PartialMessage<ValidatorSlashEventRecord>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.ValidatorSlashEventRecord";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValidatorSlashEventRecord;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValidatorSlashEventRecord;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValidatorSlashEventRecord;
    static equals(a: ValidatorSlashEventRecord | PlainMessage<ValidatorSlashEventRecord> | undefined, b: ValidatorSlashEventRecord | PlainMessage<ValidatorSlashEventRecord> | undefined): boolean;
}
/**
 * GenesisState defines the distribution module's genesis state.
 *
 * @generated from message cosmos.distribution.v1beta1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * params defines all the parameters of the module.
     *
     * @generated from field: cosmos.distribution.v1beta1.Params params = 1;
     */
    params?: Params;
    /**
     * fee_pool defines the fee pool at genesis.
     *
     * @generated from field: cosmos.distribution.v1beta1.FeePool fee_pool = 2;
     */
    feePool?: FeePool;
    /**
     * fee_pool defines the delegator withdraw infos at genesis.
     *
     * @generated from field: repeated cosmos.distribution.v1beta1.DelegatorWithdrawInfo delegator_withdraw_infos = 3;
     */
    delegatorWithdrawInfos: DelegatorWithdrawInfo[];
    /**
     * fee_pool defines the previous proposer at genesis.
     *
     * @generated from field: string previous_proposer = 4;
     */
    previousProposer: string;
    /**
     * fee_pool defines the outstanding rewards of all validators at genesis.
     *
     * @generated from field: repeated cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord outstanding_rewards = 5;
     */
    outstandingRewards: ValidatorOutstandingRewardsRecord[];
    /**
     * fee_pool defines the accumulated commissions of all validators at genesis.
     *
     * @generated from field: repeated cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord validator_accumulated_commissions = 6;
     */
    validatorAccumulatedCommissions: ValidatorAccumulatedCommissionRecord[];
    /**
     * fee_pool defines the historical rewards of all validators at genesis.
     *
     * @generated from field: repeated cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord validator_historical_rewards = 7;
     */
    validatorHistoricalRewards: ValidatorHistoricalRewardsRecord[];
    /**
     * fee_pool defines the current rewards of all validators at genesis.
     *
     * @generated from field: repeated cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord validator_current_rewards = 8;
     */
    validatorCurrentRewards: ValidatorCurrentRewardsRecord[];
    /**
     * fee_pool defines the delegator starting infos at genesis.
     *
     * @generated from field: repeated cosmos.distribution.v1beta1.DelegatorStartingInfoRecord delegator_starting_infos = 9;
     */
    delegatorStartingInfos: DelegatorStartingInfoRecord[];
    /**
     * fee_pool defines the validator slash events at genesis.
     *
     * @generated from field: repeated cosmos.distribution.v1beta1.ValidatorSlashEventRecord validator_slash_events = 10;
     */
    validatorSlashEvents: ValidatorSlashEventRecord[];
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map
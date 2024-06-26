import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Duration, Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Header } from "../../../tendermint/types/types_pb.js";
import { Coin } from "../../base/v1beta1/coin_pb.js";
import { ValidatorUpdate } from "../../../tendermint/abci/types_pb.js";
/**
 * BondStatus is the status of a validator.
 *
 * @generated from enum cosmos.staking.v1beta1.BondStatus
 */
export declare enum BondStatus {
    /**
     * UNSPECIFIED defines an invalid validator status.
     *
     * @generated from enum value: BOND_STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * UNBONDED defines a validator that is not bonded.
     *
     * @generated from enum value: BOND_STATUS_UNBONDED = 1;
     */
    UNBONDED = 1,
    /**
     * UNBONDING defines a validator that is unbonding.
     *
     * @generated from enum value: BOND_STATUS_UNBONDING = 2;
     */
    UNBONDING = 2,
    /**
     * BONDED defines a validator that is bonded.
     *
     * @generated from enum value: BOND_STATUS_BONDED = 3;
     */
    BONDED = 3
}
/**
 * Infraction indicates the infraction a validator commited.
 *
 * @generated from enum cosmos.staking.v1beta1.Infraction
 */
export declare enum Infraction {
    /**
     * UNSPECIFIED defines an empty infraction.
     *
     * @generated from enum value: INFRACTION_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * DOUBLE_SIGN defines a validator that double-signs a block.
     *
     * @generated from enum value: INFRACTION_DOUBLE_SIGN = 1;
     */
    DOUBLE_SIGN = 1,
    /**
     * DOWNTIME defines a validator that missed signing too many blocks.
     *
     * @generated from enum value: INFRACTION_DOWNTIME = 2;
     */
    DOWNTIME = 2
}
/**
 * HistoricalInfo contains header and validator information for a given block.
 * It is stored as part of staking module's state, which persists the `n` most
 * recent HistoricalInfo
 * (`n` is set by the staking module's `historical_entries` parameter).
 *
 * @generated from message cosmos.staking.v1beta1.HistoricalInfo
 */
export declare class HistoricalInfo extends Message<HistoricalInfo> {
    /**
     * @generated from field: tendermint.types.Header header = 1;
     */
    header?: Header;
    /**
     * @generated from field: repeated cosmos.staking.v1beta1.Validator valset = 2;
     */
    valset: Validator[];
    constructor(data?: PartialMessage<HistoricalInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.HistoricalInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HistoricalInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HistoricalInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HistoricalInfo;
    static equals(a: HistoricalInfo | PlainMessage<HistoricalInfo> | undefined, b: HistoricalInfo | PlainMessage<HistoricalInfo> | undefined): boolean;
}
/**
 * CommissionRates defines the initial commission rates to be used for creating
 * a validator.
 *
 * @generated from message cosmos.staking.v1beta1.CommissionRates
 */
export declare class CommissionRates extends Message<CommissionRates> {
    /**
     * rate is the commission rate charged to delegators, as a fraction.
     *
     * @generated from field: string rate = 1;
     */
    rate: string;
    /**
     * max_rate defines the maximum commission rate which validator can ever charge, as a fraction.
     *
     * @generated from field: string max_rate = 2;
     */
    maxRate: string;
    /**
     * max_change_rate defines the maximum daily increase of the validator commission, as a fraction.
     *
     * @generated from field: string max_change_rate = 3;
     */
    maxChangeRate: string;
    constructor(data?: PartialMessage<CommissionRates>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.CommissionRates";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommissionRates;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommissionRates;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommissionRates;
    static equals(a: CommissionRates | PlainMessage<CommissionRates> | undefined, b: CommissionRates | PlainMessage<CommissionRates> | undefined): boolean;
}
/**
 * Commission defines commission parameters for a given validator.
 *
 * @generated from message cosmos.staking.v1beta1.Commission
 */
export declare class Commission extends Message<Commission> {
    /**
     * commission_rates defines the initial commission rates to be used for creating a validator.
     *
     * @generated from field: cosmos.staking.v1beta1.CommissionRates commission_rates = 1;
     */
    commissionRates?: CommissionRates;
    /**
     * update_time is the last time the commission rate was changed.
     *
     * @generated from field: google.protobuf.Timestamp update_time = 2;
     */
    updateTime?: Timestamp;
    constructor(data?: PartialMessage<Commission>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.Commission";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Commission;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Commission;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Commission;
    static equals(a: Commission | PlainMessage<Commission> | undefined, b: Commission | PlainMessage<Commission> | undefined): boolean;
}
/**
 * Description defines a validator description.
 *
 * @generated from message cosmos.staking.v1beta1.Description
 */
export declare class Description extends Message<Description> {
    /**
     * moniker defines a human-readable name for the validator.
     *
     * @generated from field: string moniker = 1;
     */
    moniker: string;
    /**
     * identity defines an optional identity signature (ex. UPort or Keybase).
     *
     * @generated from field: string identity = 2;
     */
    identity: string;
    /**
     * website defines an optional website link.
     *
     * @generated from field: string website = 3;
     */
    website: string;
    /**
     * security_contact defines an optional email for security contact.
     *
     * @generated from field: string security_contact = 4;
     */
    securityContact: string;
    /**
     * details define other optional details.
     *
     * @generated from field: string details = 5;
     */
    details: string;
    constructor(data?: PartialMessage<Description>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.Description";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Description;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Description;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Description;
    static equals(a: Description | PlainMessage<Description> | undefined, b: Description | PlainMessage<Description> | undefined): boolean;
}
/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 *
 * @generated from message cosmos.staking.v1beta1.Validator
 */
export declare class Validator extends Message<Validator> {
    /**
     * operator_address defines the address of the validator's operator; bech encoded in JSON.
     *
     * @generated from field: string operator_address = 1;
     */
    operatorAddress: string;
    /**
     * consensus_pubkey is the consensus public key of the validator, as a Protobuf Any.
     *
     * @generated from field: google.protobuf.Any consensus_pubkey = 2;
     */
    consensusPubkey?: Any;
    /**
     * jailed defined whether the validator has been jailed from bonded status or not.
     *
     * @generated from field: bool jailed = 3;
     */
    jailed: boolean;
    /**
     * status is the validator status (bonded/unbonding/unbonded).
     *
     * @generated from field: cosmos.staking.v1beta1.BondStatus status = 4;
     */
    status: BondStatus;
    /**
     * tokens define the delegated tokens (incl. self-delegation).
     *
     * @generated from field: string tokens = 5;
     */
    tokens: string;
    /**
     * delegator_shares defines total shares issued to a validator's delegators.
     *
     * @generated from field: string delegator_shares = 6;
     */
    delegatorShares: string;
    /**
     * description defines the description terms for the validator.
     *
     * @generated from field: cosmos.staking.v1beta1.Description description = 7;
     */
    description?: Description;
    /**
     * unbonding_height defines, if unbonding, the height at which this validator has begun unbonding.
     *
     * @generated from field: int64 unbonding_height = 8;
     */
    unbondingHeight: bigint;
    /**
     * unbonding_time defines, if unbonding, the min time for the validator to complete unbonding.
     *
     * @generated from field: google.protobuf.Timestamp unbonding_time = 9;
     */
    unbondingTime?: Timestamp;
    /**
     * commission defines the commission parameters.
     *
     * @generated from field: cosmos.staking.v1beta1.Commission commission = 10;
     */
    commission?: Commission;
    /**
     * min_self_delegation is the validator's self declared minimum self delegation.
     *
     * Since: cosmos-sdk 0.46
     *
     * @generated from field: string min_self_delegation = 11;
     */
    minSelfDelegation: string;
    /**
     * strictly positive if this validator's unbonding has been stopped by external modules
     *
     * @generated from field: int64 unbonding_on_hold_ref_count = 12;
     */
    unbondingOnHoldRefCount: bigint;
    /**
     * list of unbonding ids, each uniquely identifing an unbonding of this validator
     *
     * @generated from field: repeated uint64 unbonding_ids = 13;
     */
    unbondingIds: bigint[];
    constructor(data?: PartialMessage<Validator>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.Validator";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Validator;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Validator;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Validator;
    static equals(a: Validator | PlainMessage<Validator> | undefined, b: Validator | PlainMessage<Validator> | undefined): boolean;
}
/**
 * ValAddresses defines a repeated set of validator addresses.
 *
 * @generated from message cosmos.staking.v1beta1.ValAddresses
 */
export declare class ValAddresses extends Message<ValAddresses> {
    /**
     * @generated from field: repeated string addresses = 1;
     */
    addresses: string[];
    constructor(data?: PartialMessage<ValAddresses>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.ValAddresses";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValAddresses;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValAddresses;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValAddresses;
    static equals(a: ValAddresses | PlainMessage<ValAddresses> | undefined, b: ValAddresses | PlainMessage<ValAddresses> | undefined): boolean;
}
/**
 * DVPair is struct that just has a delegator-validator pair with no other data.
 * It is intended to be used as a marshalable pointer. For example, a DVPair can
 * be used to construct the key to getting an UnbondingDelegation from state.
 *
 * @generated from message cosmos.staking.v1beta1.DVPair
 */
export declare class DVPair extends Message<DVPair> {
    /**
     * @generated from field: string delegator_address = 1;
     */
    delegatorAddress: string;
    /**
     * @generated from field: string validator_address = 2;
     */
    validatorAddress: string;
    constructor(data?: PartialMessage<DVPair>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.DVPair";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DVPair;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DVPair;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DVPair;
    static equals(a: DVPair | PlainMessage<DVPair> | undefined, b: DVPair | PlainMessage<DVPair> | undefined): boolean;
}
/**
 * DVPairs defines an array of DVPair objects.
 *
 * @generated from message cosmos.staking.v1beta1.DVPairs
 */
export declare class DVPairs extends Message<DVPairs> {
    /**
     * @generated from field: repeated cosmos.staking.v1beta1.DVPair pairs = 1;
     */
    pairs: DVPair[];
    constructor(data?: PartialMessage<DVPairs>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.DVPairs";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DVPairs;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DVPairs;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DVPairs;
    static equals(a: DVPairs | PlainMessage<DVPairs> | undefined, b: DVPairs | PlainMessage<DVPairs> | undefined): boolean;
}
/**
 * DVVTriplet is struct that just has a delegator-validator-validator triplet
 * with no other data. It is intended to be used as a marshalable pointer. For
 * example, a DVVTriplet can be used to construct the key to getting a
 * Redelegation from state.
 *
 * @generated from message cosmos.staking.v1beta1.DVVTriplet
 */
export declare class DVVTriplet extends Message<DVVTriplet> {
    /**
     * @generated from field: string delegator_address = 1;
     */
    delegatorAddress: string;
    /**
     * @generated from field: string validator_src_address = 2;
     */
    validatorSrcAddress: string;
    /**
     * @generated from field: string validator_dst_address = 3;
     */
    validatorDstAddress: string;
    constructor(data?: PartialMessage<DVVTriplet>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.DVVTriplet";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DVVTriplet;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DVVTriplet;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DVVTriplet;
    static equals(a: DVVTriplet | PlainMessage<DVVTriplet> | undefined, b: DVVTriplet | PlainMessage<DVVTriplet> | undefined): boolean;
}
/**
 * DVVTriplets defines an array of DVVTriplet objects.
 *
 * @generated from message cosmos.staking.v1beta1.DVVTriplets
 */
export declare class DVVTriplets extends Message<DVVTriplets> {
    /**
     * @generated from field: repeated cosmos.staking.v1beta1.DVVTriplet triplets = 1;
     */
    triplets: DVVTriplet[];
    constructor(data?: PartialMessage<DVVTriplets>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.DVVTriplets";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DVVTriplets;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DVVTriplets;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DVVTriplets;
    static equals(a: DVVTriplets | PlainMessage<DVVTriplets> | undefined, b: DVVTriplets | PlainMessage<DVVTriplets> | undefined): boolean;
}
/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 *
 * @generated from message cosmos.staking.v1beta1.Delegation
 */
export declare class Delegation extends Message<Delegation> {
    /**
     * delegator_address is the bech32-encoded address of the delegator.
     *
     * @generated from field: string delegator_address = 1;
     */
    delegatorAddress: string;
    /**
     * validator_address is the bech32-encoded address of the validator.
     *
     * @generated from field: string validator_address = 2;
     */
    validatorAddress: string;
    /**
     * shares define the delegation shares received.
     *
     * @generated from field: string shares = 3;
     */
    shares: string;
    constructor(data?: PartialMessage<Delegation>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.Delegation";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Delegation;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Delegation;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Delegation;
    static equals(a: Delegation | PlainMessage<Delegation> | undefined, b: Delegation | PlainMessage<Delegation> | undefined): boolean;
}
/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single validator in an time-ordered list.
 *
 * @generated from message cosmos.staking.v1beta1.UnbondingDelegation
 */
export declare class UnbondingDelegation extends Message<UnbondingDelegation> {
    /**
     * delegator_address is the bech32-encoded address of the delegator.
     *
     * @generated from field: string delegator_address = 1;
     */
    delegatorAddress: string;
    /**
     * validator_address is the bech32-encoded address of the validator.
     *
     * @generated from field: string validator_address = 2;
     */
    validatorAddress: string;
    /**
     * entries are the unbonding delegation entries.
     *
     * unbonding delegation entries
     *
     * @generated from field: repeated cosmos.staking.v1beta1.UnbondingDelegationEntry entries = 3;
     */
    entries: UnbondingDelegationEntry[];
    constructor(data?: PartialMessage<UnbondingDelegation>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.UnbondingDelegation";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnbondingDelegation;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnbondingDelegation;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnbondingDelegation;
    static equals(a: UnbondingDelegation | PlainMessage<UnbondingDelegation> | undefined, b: UnbondingDelegation | PlainMessage<UnbondingDelegation> | undefined): boolean;
}
/**
 * UnbondingDelegationEntry defines an unbonding object with relevant metadata.
 *
 * @generated from message cosmos.staking.v1beta1.UnbondingDelegationEntry
 */
export declare class UnbondingDelegationEntry extends Message<UnbondingDelegationEntry> {
    /**
     * creation_height is the height which the unbonding took place.
     *
     * @generated from field: int64 creation_height = 1;
     */
    creationHeight: bigint;
    /**
     * completion_time is the unix time for unbonding completion.
     *
     * @generated from field: google.protobuf.Timestamp completion_time = 2;
     */
    completionTime?: Timestamp;
    /**
     * initial_balance defines the tokens initially scheduled to receive at completion.
     *
     * @generated from field: string initial_balance = 3;
     */
    initialBalance: string;
    /**
     * balance defines the tokens to receive at completion.
     *
     * @generated from field: string balance = 4;
     */
    balance: string;
    /**
     * Incrementing id that uniquely identifies this entry
     *
     * @generated from field: uint64 unbonding_id = 5;
     */
    unbondingId: bigint;
    /**
     * Strictly positive if this entry's unbonding has been stopped by external modules
     *
     * @generated from field: int64 unbonding_on_hold_ref_count = 6;
     */
    unbondingOnHoldRefCount: bigint;
    constructor(data?: PartialMessage<UnbondingDelegationEntry>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.UnbondingDelegationEntry";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnbondingDelegationEntry;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnbondingDelegationEntry;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnbondingDelegationEntry;
    static equals(a: UnbondingDelegationEntry | PlainMessage<UnbondingDelegationEntry> | undefined, b: UnbondingDelegationEntry | PlainMessage<UnbondingDelegationEntry> | undefined): boolean;
}
/**
 * RedelegationEntry defines a redelegation object with relevant metadata.
 *
 * @generated from message cosmos.staking.v1beta1.RedelegationEntry
 */
export declare class RedelegationEntry extends Message<RedelegationEntry> {
    /**
     * creation_height  defines the height which the redelegation took place.
     *
     * @generated from field: int64 creation_height = 1;
     */
    creationHeight: bigint;
    /**
     * completion_time defines the unix time for redelegation completion.
     *
     * @generated from field: google.protobuf.Timestamp completion_time = 2;
     */
    completionTime?: Timestamp;
    /**
     * initial_balance defines the initial balance when redelegation started.
     *
     * @generated from field: string initial_balance = 3;
     */
    initialBalance: string;
    /**
     * shares_dst is the amount of destination-validator shares created by redelegation.
     *
     * @generated from field: string shares_dst = 4;
     */
    sharesDst: string;
    /**
     * Incrementing id that uniquely identifies this entry
     *
     * @generated from field: uint64 unbonding_id = 5;
     */
    unbondingId: bigint;
    /**
     * Strictly positive if this entry's unbonding has been stopped by external modules
     *
     * @generated from field: int64 unbonding_on_hold_ref_count = 6;
     */
    unbondingOnHoldRefCount: bigint;
    constructor(data?: PartialMessage<RedelegationEntry>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.RedelegationEntry";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RedelegationEntry;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RedelegationEntry;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RedelegationEntry;
    static equals(a: RedelegationEntry | PlainMessage<RedelegationEntry> | undefined, b: RedelegationEntry | PlainMessage<RedelegationEntry> | undefined): boolean;
}
/**
 * Redelegation contains the list of a particular delegator's redelegating bonds
 * from a particular source validator to a particular destination validator.
 *
 * @generated from message cosmos.staking.v1beta1.Redelegation
 */
export declare class Redelegation extends Message<Redelegation> {
    /**
     * delegator_address is the bech32-encoded address of the delegator.
     *
     * @generated from field: string delegator_address = 1;
     */
    delegatorAddress: string;
    /**
     * validator_src_address is the validator redelegation source operator address.
     *
     * @generated from field: string validator_src_address = 2;
     */
    validatorSrcAddress: string;
    /**
     * validator_dst_address is the validator redelegation destination operator address.
     *
     * @generated from field: string validator_dst_address = 3;
     */
    validatorDstAddress: string;
    /**
     * entries are the redelegation entries.
     *
     * redelegation entries
     *
     * @generated from field: repeated cosmos.staking.v1beta1.RedelegationEntry entries = 4;
     */
    entries: RedelegationEntry[];
    constructor(data?: PartialMessage<Redelegation>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.Redelegation";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Redelegation;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Redelegation;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Redelegation;
    static equals(a: Redelegation | PlainMessage<Redelegation> | undefined, b: Redelegation | PlainMessage<Redelegation> | undefined): boolean;
}
/**
 * Params defines the parameters for the x/staking module.
 *
 * @generated from message cosmos.staking.v1beta1.Params
 */
export declare class Params extends Message<Params> {
    /**
     * unbonding_time is the time duration of unbonding.
     *
     * @generated from field: google.protobuf.Duration unbonding_time = 1;
     */
    unbondingTime?: Duration;
    /**
     * max_validators is the maximum number of validators.
     *
     * @generated from field: uint32 max_validators = 2;
     */
    maxValidators: number;
    /**
     * max_entries is the max entries for either unbonding delegation or redelegation (per pair/trio).
     *
     * @generated from field: uint32 max_entries = 3;
     */
    maxEntries: number;
    /**
     * historical_entries is the number of historical entries to persist.
     *
     * @generated from field: uint32 historical_entries = 4;
     */
    historicalEntries: number;
    /**
     * bond_denom defines the bondable coin denomination.
     *
     * @generated from field: string bond_denom = 5;
     */
    bondDenom: string;
    /**
     * min_commission_rate is the chain-wide minimum commission rate that a validator can charge their delegators
     *
     * @generated from field: string min_commission_rate = 6;
     */
    minCommissionRate: string;
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 *
 * @generated from message cosmos.staking.v1beta1.DelegationResponse
 */
export declare class DelegationResponse extends Message<DelegationResponse> {
    /**
     * @generated from field: cosmos.staking.v1beta1.Delegation delegation = 1;
     */
    delegation?: Delegation;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin balance = 2;
     */
    balance?: Coin;
    constructor(data?: PartialMessage<DelegationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.DelegationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DelegationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DelegationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DelegationResponse;
    static equals(a: DelegationResponse | PlainMessage<DelegationResponse> | undefined, b: DelegationResponse | PlainMessage<DelegationResponse> | undefined): boolean;
}
/**
 * RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 *
 * @generated from message cosmos.staking.v1beta1.RedelegationEntryResponse
 */
export declare class RedelegationEntryResponse extends Message<RedelegationEntryResponse> {
    /**
     * @generated from field: cosmos.staking.v1beta1.RedelegationEntry redelegation_entry = 1;
     */
    redelegationEntry?: RedelegationEntry;
    /**
     * @generated from field: string balance = 4;
     */
    balance: string;
    constructor(data?: PartialMessage<RedelegationEntryResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.RedelegationEntryResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RedelegationEntryResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RedelegationEntryResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RedelegationEntryResponse;
    static equals(a: RedelegationEntryResponse | PlainMessage<RedelegationEntryResponse> | undefined, b: RedelegationEntryResponse | PlainMessage<RedelegationEntryResponse> | undefined): boolean;
}
/**
 * RedelegationResponse is equivalent to a Redelegation except that its entries
 * contain a balance in addition to shares which is more suitable for client
 * responses.
 *
 * @generated from message cosmos.staking.v1beta1.RedelegationResponse
 */
export declare class RedelegationResponse extends Message<RedelegationResponse> {
    /**
     * @generated from field: cosmos.staking.v1beta1.Redelegation redelegation = 1;
     */
    redelegation?: Redelegation;
    /**
     * @generated from field: repeated cosmos.staking.v1beta1.RedelegationEntryResponse entries = 2;
     */
    entries: RedelegationEntryResponse[];
    constructor(data?: PartialMessage<RedelegationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.RedelegationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RedelegationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RedelegationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RedelegationResponse;
    static equals(a: RedelegationResponse | PlainMessage<RedelegationResponse> | undefined, b: RedelegationResponse | PlainMessage<RedelegationResponse> | undefined): boolean;
}
/**
 * Pool is used for tracking bonded and not-bonded token supply of the bond
 * denomination.
 *
 * @generated from message cosmos.staking.v1beta1.Pool
 */
export declare class Pool extends Message<Pool> {
    /**
     * @generated from field: string not_bonded_tokens = 1;
     */
    notBondedTokens: string;
    /**
     * @generated from field: string bonded_tokens = 2;
     */
    bondedTokens: string;
    constructor(data?: PartialMessage<Pool>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.Pool";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Pool;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Pool;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Pool;
    static equals(a: Pool | PlainMessage<Pool> | undefined, b: Pool | PlainMessage<Pool> | undefined): boolean;
}
/**
 * ValidatorUpdates defines an array of abci.ValidatorUpdate objects.
 * TODO: explore moving this to proto/cosmos/base to separate modules from tendermint dependence
 *
 * @generated from message cosmos.staking.v1beta1.ValidatorUpdates
 */
export declare class ValidatorUpdates extends Message<ValidatorUpdates> {
    /**
     * @generated from field: repeated tendermint.abci.ValidatorUpdate updates = 1;
     */
    updates: ValidatorUpdate[];
    constructor(data?: PartialMessage<ValidatorUpdates>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.ValidatorUpdates";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValidatorUpdates;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValidatorUpdates;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValidatorUpdates;
    static equals(a: ValidatorUpdates | PlainMessage<ValidatorUpdates> | undefined, b: ValidatorUpdates | PlainMessage<ValidatorUpdates> | undefined): boolean;
}
//# sourceMappingURL=staking_pb.d.ts.map
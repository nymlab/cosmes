import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Delegation, Params, Redelegation, UnbondingDelegation, Validator } from "./staking_pb.js";
/**
 * GenesisState defines the staking module's genesis state.
 *
 * @generated from message cosmos.staking.v1beta1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * params defines all the parameters of related to deposit.
     *
     * @generated from field: cosmos.staking.v1beta1.Params params = 1;
     */
    params?: Params;
    /**
     * last_total_power tracks the total amounts of bonded tokens recorded during
     * the previous end block.
     *
     * @generated from field: bytes last_total_power = 2;
     */
    lastTotalPower: Uint8Array;
    /**
     * last_validator_powers is a special index that provides a historical list
     * of the last-block's bonded validators.
     *
     * @generated from field: repeated cosmos.staking.v1beta1.LastValidatorPower last_validator_powers = 3;
     */
    lastValidatorPowers: LastValidatorPower[];
    /**
     * delegations defines the validator set at genesis.
     *
     * @generated from field: repeated cosmos.staking.v1beta1.Validator validators = 4;
     */
    validators: Validator[];
    /**
     * delegations defines the delegations active at genesis.
     *
     * @generated from field: repeated cosmos.staking.v1beta1.Delegation delegations = 5;
     */
    delegations: Delegation[];
    /**
     * unbonding_delegations defines the unbonding delegations active at genesis.
     *
     * @generated from field: repeated cosmos.staking.v1beta1.UnbondingDelegation unbonding_delegations = 6;
     */
    unbondingDelegations: UnbondingDelegation[];
    /**
     * redelegations defines the redelegations active at genesis.
     *
     * @generated from field: repeated cosmos.staking.v1beta1.Redelegation redelegations = 7;
     */
    redelegations: Redelegation[];
    /**
     * @generated from field: bool exported = 8;
     */
    exported: boolean;
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
/**
 * LastValidatorPower required for validator set update logic.
 *
 * @generated from message cosmos.staking.v1beta1.LastValidatorPower
 */
export declare class LastValidatorPower extends Message<LastValidatorPower> {
    /**
     * address is the address of the validator.
     *
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * power defines the power of the validator.
     *
     * @generated from field: int64 power = 2;
     */
    power: bigint;
    constructor(data?: PartialMessage<LastValidatorPower>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.LastValidatorPower";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LastValidatorPower;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LastValidatorPower;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LastValidatorPower;
    static equals(a: LastValidatorPower | PlainMessage<LastValidatorPower> | undefined, b: LastValidatorPower | PlainMessage<LastValidatorPower> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map
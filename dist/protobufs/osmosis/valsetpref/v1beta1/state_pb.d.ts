import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * ValidatorPreference defines the message structure for
 * CreateValidatorSetPreference. It allows a user to set {val_addr, weight} in
 * state. If a user does not have a validator set preference list set, and has
 * staked, make their preference list default to their current staking
 * distribution.
 *
 * @generated from message osmosis.valsetpref.v1beta1.ValidatorPreference
 */
export declare class ValidatorPreference extends Message<ValidatorPreference> {
    /**
     * val_oper_address holds the validator address the user wants to delegate
     * funds to.
     *
     * @generated from field: string val_oper_address = 1;
     */
    valOperAddress: string;
    /**
     * weight is decimal between 0 and 1, and they all sum to 1.
     *
     * @generated from field: string weight = 2;
     */
    weight: string;
    constructor(data?: PartialMessage<ValidatorPreference>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.valsetpref.v1beta1.ValidatorPreference";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValidatorPreference;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValidatorPreference;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValidatorPreference;
    static equals(a: ValidatorPreference | PlainMessage<ValidatorPreference> | undefined, b: ValidatorPreference | PlainMessage<ValidatorPreference> | undefined): boolean;
}
/**
 * ValidatorSetPreferences defines a delegator's validator set preference.
 * It contains a list of (validator, percent_allocation) pairs.
 * The percent allocation are arranged in decimal notation from 0 to 1 and must
 * add up to 1.
 *
 * @generated from message osmosis.valsetpref.v1beta1.ValidatorSetPreferences
 */
export declare class ValidatorSetPreferences extends Message<ValidatorSetPreferences> {
    /**
     * preference holds {valAddr, weight} for the user who created it.
     *
     * @generated from field: repeated osmosis.valsetpref.v1beta1.ValidatorPreference preferences = 2;
     */
    preferences: ValidatorPreference[];
    constructor(data?: PartialMessage<ValidatorSetPreferences>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.valsetpref.v1beta1.ValidatorSetPreferences";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValidatorSetPreferences;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValidatorSetPreferences;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValidatorSetPreferences;
    static equals(a: ValidatorSetPreferences | PlainMessage<ValidatorSetPreferences> | undefined, b: ValidatorSetPreferences | PlainMessage<ValidatorSetPreferences> | undefined): boolean;
}
//# sourceMappingURL=state_pb.d.ts.map
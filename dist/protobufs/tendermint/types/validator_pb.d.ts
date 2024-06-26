import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { PublicKey } from "../crypto/keys_pb.js";
/**
 * @generated from message tendermint.types.ValidatorSet
 */
export declare class ValidatorSet extends Message<ValidatorSet> {
    /**
     * @generated from field: repeated tendermint.types.Validator validators = 1;
     */
    validators: Validator[];
    /**
     * @generated from field: tendermint.types.Validator proposer = 2;
     */
    proposer?: Validator;
    /**
     * @generated from field: int64 total_voting_power = 3;
     */
    totalVotingPower: bigint;
    constructor(data?: PartialMessage<ValidatorSet>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.types.ValidatorSet";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValidatorSet;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValidatorSet;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValidatorSet;
    static equals(a: ValidatorSet | PlainMessage<ValidatorSet> | undefined, b: ValidatorSet | PlainMessage<ValidatorSet> | undefined): boolean;
}
/**
 * @generated from message tendermint.types.Validator
 */
export declare class Validator extends Message<Validator> {
    /**
     * @generated from field: bytes address = 1;
     */
    address: Uint8Array;
    /**
     * @generated from field: tendermint.crypto.PublicKey pub_key = 2;
     */
    pubKey?: PublicKey;
    /**
     * @generated from field: int64 voting_power = 3;
     */
    votingPower: bigint;
    /**
     * @generated from field: int64 proposer_priority = 4;
     */
    proposerPriority: bigint;
    constructor(data?: PartialMessage<Validator>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.types.Validator";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Validator;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Validator;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Validator;
    static equals(a: Validator | PlainMessage<Validator> | undefined, b: Validator | PlainMessage<Validator> | undefined): boolean;
}
/**
 * @generated from message tendermint.types.SimpleValidator
 */
export declare class SimpleValidator extends Message<SimpleValidator> {
    /**
     * @generated from field: tendermint.crypto.PublicKey pub_key = 1;
     */
    pubKey?: PublicKey;
    /**
     * @generated from field: int64 voting_power = 2;
     */
    votingPower: bigint;
    constructor(data?: PartialMessage<SimpleValidator>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.types.SimpleValidator";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SimpleValidator;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SimpleValidator;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SimpleValidator;
    static equals(a: SimpleValidator | PlainMessage<SimpleValidator> | undefined, b: SimpleValidator | PlainMessage<SimpleValidator> | undefined): boolean;
}
//# sourceMappingURL=validator_pb.d.ts.map
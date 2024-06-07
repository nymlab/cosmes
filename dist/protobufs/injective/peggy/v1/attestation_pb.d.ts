import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
/**
 * ClaimType is the cosmos type of an event from the counterpart chain that can
 * be handled
 *
 * @generated from enum injective.peggy.v1.ClaimType
 */
export declare enum ClaimType {
    /**
     * @generated from enum value: CLAIM_TYPE_UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: CLAIM_TYPE_DEPOSIT = 1;
     */
    DEPOSIT = 1,
    /**
     * @generated from enum value: CLAIM_TYPE_WITHDRAW = 2;
     */
    WITHDRAW = 2,
    /**
     * @generated from enum value: CLAIM_TYPE_ERC20_DEPLOYED = 3;
     */
    ERC20_DEPLOYED = 3,
    /**
     * @generated from enum value: CLAIM_TYPE_VALSET_UPDATED = 4;
     */
    VALSET_UPDATED = 4
}
/**
 * Attestation is an aggregate of `claims` that eventually becomes `observed` by
 * all orchestrators
 * EVENT_NONCE:
 * EventNonce a nonce provided by the peggy contract that is unique per event
 * fired These event nonces must be relayed in order. This is a correctness
 * issue, if relaying out of order transaction replay attacks become possible
 * OBSERVED:
 * Observed indicates that >67% of validators have attested to the event,
 * and that the event should be executed by the peggy state machine
 *
 * The actual content of the claims is passed in with the transaction making the
 * claim and then passed through the call stack alongside the attestation while
 * it is processed the key in which the attestation is stored is keyed on the
 * exact details of the claim but there is no reason to store those exact
 * details becuause the next message sender will kindly provide you with them.
 *
 * @generated from message injective.peggy.v1.Attestation
 */
export declare class Attestation extends Message<Attestation> {
    /**
     * @generated from field: bool observed = 1;
     */
    observed: boolean;
    /**
     * @generated from field: repeated string votes = 2;
     */
    votes: string[];
    /**
     * @generated from field: uint64 height = 3;
     */
    height: bigint;
    /**
     * @generated from field: google.protobuf.Any claim = 4;
     */
    claim?: Any;
    constructor(data?: PartialMessage<Attestation>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.Attestation";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Attestation;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Attestation;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Attestation;
    static equals(a: Attestation | PlainMessage<Attestation> | undefined, b: Attestation | PlainMessage<Attestation> | undefined): boolean;
}
/**
 * ERC20Token unique identifier for an Ethereum ERC20 token.
 * CONTRACT:
 * The contract address on ETH of the token, this could be a Cosmos
 * originated token, if so it will be the ERC20 address of the representation
 * (note: developers should look up the token symbol using the address on ETH to
 * display for UI)
 *
 * @generated from message injective.peggy.v1.ERC20Token
 */
export declare class ERC20Token extends Message<ERC20Token> {
    /**
     * @generated from field: string contract = 1;
     */
    contract: string;
    /**
     * @generated from field: string amount = 2;
     */
    amount: string;
    constructor(data?: PartialMessage<ERC20Token>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.ERC20Token";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ERC20Token;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ERC20Token;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ERC20Token;
    static equals(a: ERC20Token | PlainMessage<ERC20Token> | undefined, b: ERC20Token | PlainMessage<ERC20Token> | undefined): boolean;
}
//# sourceMappingURL=attestation_pb.d.ts.map
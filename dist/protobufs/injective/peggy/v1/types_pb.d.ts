import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * BridgeValidator represents a validator's ETH address and its power
 *
 * @generated from message injective.peggy.v1.BridgeValidator
 */
export declare class BridgeValidator extends Message<BridgeValidator> {
    /**
     * @generated from field: uint64 power = 1;
     */
    power: bigint;
    /**
     * @generated from field: string ethereum_address = 2;
     */
    ethereumAddress: string;
    constructor(data?: PartialMessage<BridgeValidator>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.BridgeValidator";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BridgeValidator;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BridgeValidator;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BridgeValidator;
    static equals(a: BridgeValidator | PlainMessage<BridgeValidator> | undefined, b: BridgeValidator | PlainMessage<BridgeValidator> | undefined): boolean;
}
/**
 * Valset is the Ethereum Bridge Multsig Set, each peggy validator also
 * maintains an ETH key to sign messages, these are used to check signatures on
 * ETH because of the significant gas savings
 *
 * @generated from message injective.peggy.v1.Valset
 */
export declare class Valset extends Message<Valset> {
    /**
     * @generated from field: uint64 nonce = 1;
     */
    nonce: bigint;
    /**
     * @generated from field: repeated injective.peggy.v1.BridgeValidator members = 2;
     */
    members: BridgeValidator[];
    /**
     * @generated from field: uint64 height = 3;
     */
    height: bigint;
    /**
     * @generated from field: string reward_amount = 4;
     */
    rewardAmount: string;
    /**
     * the reward token in it's Ethereum hex address representation
     *
     * @generated from field: string reward_token = 5;
     */
    rewardToken: string;
    constructor(data?: PartialMessage<Valset>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.Valset";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Valset;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Valset;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Valset;
    static equals(a: Valset | PlainMessage<Valset> | undefined, b: Valset | PlainMessage<Valset> | undefined): boolean;
}
/**
 * LastObservedEthereumBlockHeight stores the last observed
 * Ethereum block height along with the Cosmos block height that
 * it was observed at. These two numbers can be used to project
 * outward and always produce batches with timeouts in the future
 * even if no Ethereum block height has been relayed for a long time
 *
 * @generated from message injective.peggy.v1.LastObservedEthereumBlockHeight
 */
export declare class LastObservedEthereumBlockHeight extends Message<LastObservedEthereumBlockHeight> {
    /**
     * @generated from field: uint64 cosmos_block_height = 1;
     */
    cosmosBlockHeight: bigint;
    /**
     * @generated from field: uint64 ethereum_block_height = 2;
     */
    ethereumBlockHeight: bigint;
    constructor(data?: PartialMessage<LastObservedEthereumBlockHeight>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.LastObservedEthereumBlockHeight";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LastObservedEthereumBlockHeight;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LastObservedEthereumBlockHeight;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LastObservedEthereumBlockHeight;
    static equals(a: LastObservedEthereumBlockHeight | PlainMessage<LastObservedEthereumBlockHeight> | undefined, b: LastObservedEthereumBlockHeight | PlainMessage<LastObservedEthereumBlockHeight> | undefined): boolean;
}
/**
 * LastClaimEvent stores last claim event details of validator.
 *
 * @generated from message injective.peggy.v1.LastClaimEvent
 */
export declare class LastClaimEvent extends Message<LastClaimEvent> {
    /**
     * @generated from field: uint64 ethereum_event_nonce = 1;
     */
    ethereumEventNonce: bigint;
    /**
     * @generated from field: uint64 ethereum_event_height = 2;
     */
    ethereumEventHeight: bigint;
    constructor(data?: PartialMessage<LastClaimEvent>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.LastClaimEvent";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LastClaimEvent;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LastClaimEvent;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LastClaimEvent;
    static equals(a: LastClaimEvent | PlainMessage<LastClaimEvent> | undefined, b: LastClaimEvent | PlainMessage<LastClaimEvent> | undefined): boolean;
}
/**
 * This records the relationship between an ERC20 token and the denom
 * of the corresponding Cosmos originated asset
 *
 * @generated from message injective.peggy.v1.ERC20ToDenom
 */
export declare class ERC20ToDenom extends Message<ERC20ToDenom> {
    /**
     * @generated from field: string erc20 = 1;
     */
    erc20: string;
    /**
     * @generated from field: string denom = 2;
     */
    denom: string;
    constructor(data?: PartialMessage<ERC20ToDenom>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.ERC20ToDenom";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ERC20ToDenom;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ERC20ToDenom;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ERC20ToDenom;
    static equals(a: ERC20ToDenom | PlainMessage<ERC20ToDenom> | undefined, b: ERC20ToDenom | PlainMessage<ERC20ToDenom> | undefined): boolean;
}
//# sourceMappingURL=types_pb.d.ts.map
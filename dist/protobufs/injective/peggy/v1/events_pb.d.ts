import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ClaimType } from "./attestation_pb.js";
import { BridgeValidator } from "./types_pb.js";
/**
 * @generated from message injective.peggy.v1.EventAttestationObserved
 */
export declare class EventAttestationObserved extends Message<EventAttestationObserved> {
    /**
     * @generated from field: injective.peggy.v1.ClaimType attestation_type = 1;
     */
    attestationType: ClaimType;
    /**
     * @generated from field: string bridge_contract = 2;
     */
    bridgeContract: string;
    /**
     * @generated from field: uint64 bridge_chain_id = 3;
     */
    bridgeChainId: bigint;
    /**
     * @generated from field: bytes attestation_id = 4;
     */
    attestationId: Uint8Array;
    /**
     * @generated from field: uint64 nonce = 5;
     */
    nonce: bigint;
    constructor(data?: PartialMessage<EventAttestationObserved>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.EventAttestationObserved";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventAttestationObserved;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventAttestationObserved;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventAttestationObserved;
    static equals(a: EventAttestationObserved | PlainMessage<EventAttestationObserved> | undefined, b: EventAttestationObserved | PlainMessage<EventAttestationObserved> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.EventBridgeWithdrawCanceled
 */
export declare class EventBridgeWithdrawCanceled extends Message<EventBridgeWithdrawCanceled> {
    /**
     * @generated from field: string bridge_contract = 1;
     */
    bridgeContract: string;
    /**
     * @generated from field: uint64 bridge_chain_id = 2;
     */
    bridgeChainId: bigint;
    constructor(data?: PartialMessage<EventBridgeWithdrawCanceled>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.EventBridgeWithdrawCanceled";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventBridgeWithdrawCanceled;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventBridgeWithdrawCanceled;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventBridgeWithdrawCanceled;
    static equals(a: EventBridgeWithdrawCanceled | PlainMessage<EventBridgeWithdrawCanceled> | undefined, b: EventBridgeWithdrawCanceled | PlainMessage<EventBridgeWithdrawCanceled> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.EventOutgoingBatch
 */
export declare class EventOutgoingBatch extends Message<EventOutgoingBatch> {
    /**
     * @generated from field: string denom = 1;
     */
    denom: string;
    /**
     * @generated from field: string orchestrator_address = 2;
     */
    orchestratorAddress: string;
    /**
     * @generated from field: uint64 batch_nonce = 3;
     */
    batchNonce: bigint;
    /**
     * @generated from field: uint64 batch_timeout = 4;
     */
    batchTimeout: bigint;
    /**
     * @generated from field: repeated uint64 batch_tx_ids = 5;
     */
    batchTxIds: bigint[];
    constructor(data?: PartialMessage<EventOutgoingBatch>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.EventOutgoingBatch";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventOutgoingBatch;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventOutgoingBatch;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventOutgoingBatch;
    static equals(a: EventOutgoingBatch | PlainMessage<EventOutgoingBatch> | undefined, b: EventOutgoingBatch | PlainMessage<EventOutgoingBatch> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.EventOutgoingBatchCanceled
 */
export declare class EventOutgoingBatchCanceled extends Message<EventOutgoingBatchCanceled> {
    /**
     * @generated from field: string bridge_contract = 1;
     */
    bridgeContract: string;
    /**
     * @generated from field: uint64 bridge_chain_id = 2;
     */
    bridgeChainId: bigint;
    /**
     * @generated from field: uint64 batch_id = 3;
     */
    batchId: bigint;
    /**
     * @generated from field: uint64 nonce = 4;
     */
    nonce: bigint;
    constructor(data?: PartialMessage<EventOutgoingBatchCanceled>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.EventOutgoingBatchCanceled";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventOutgoingBatchCanceled;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventOutgoingBatchCanceled;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventOutgoingBatchCanceled;
    static equals(a: EventOutgoingBatchCanceled | PlainMessage<EventOutgoingBatchCanceled> | undefined, b: EventOutgoingBatchCanceled | PlainMessage<EventOutgoingBatchCanceled> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.EventValsetUpdateRequest
 */
export declare class EventValsetUpdateRequest extends Message<EventValsetUpdateRequest> {
    /**
     * @generated from field: uint64 valset_nonce = 1;
     */
    valsetNonce: bigint;
    /**
     * @generated from field: uint64 valset_height = 2;
     */
    valsetHeight: bigint;
    /**
     * @generated from field: repeated injective.peggy.v1.BridgeValidator valset_members = 3;
     */
    valsetMembers: BridgeValidator[];
    /**
     * @generated from field: string reward_amount = 4;
     */
    rewardAmount: string;
    /**
     * @generated from field: string reward_token = 5;
     */
    rewardToken: string;
    constructor(data?: PartialMessage<EventValsetUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.EventValsetUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventValsetUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventValsetUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventValsetUpdateRequest;
    static equals(a: EventValsetUpdateRequest | PlainMessage<EventValsetUpdateRequest> | undefined, b: EventValsetUpdateRequest | PlainMessage<EventValsetUpdateRequest> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.EventSetOrchestratorAddresses
 */
export declare class EventSetOrchestratorAddresses extends Message<EventSetOrchestratorAddresses> {
    /**
     * @generated from field: string validator_address = 1;
     */
    validatorAddress: string;
    /**
     * @generated from field: string orchestrator_address = 2;
     */
    orchestratorAddress: string;
    /**
     * @generated from field: string operator_eth_address = 3;
     */
    operatorEthAddress: string;
    constructor(data?: PartialMessage<EventSetOrchestratorAddresses>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.EventSetOrchestratorAddresses";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSetOrchestratorAddresses;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSetOrchestratorAddresses;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSetOrchestratorAddresses;
    static equals(a: EventSetOrchestratorAddresses | PlainMessage<EventSetOrchestratorAddresses> | undefined, b: EventSetOrchestratorAddresses | PlainMessage<EventSetOrchestratorAddresses> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.EventValsetConfirm
 */
export declare class EventValsetConfirm extends Message<EventValsetConfirm> {
    /**
     * @generated from field: uint64 valset_nonce = 1;
     */
    valsetNonce: bigint;
    /**
     * @generated from field: string orchestrator_address = 2;
     */
    orchestratorAddress: string;
    constructor(data?: PartialMessage<EventValsetConfirm>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.EventValsetConfirm";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventValsetConfirm;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventValsetConfirm;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventValsetConfirm;
    static equals(a: EventValsetConfirm | PlainMessage<EventValsetConfirm> | undefined, b: EventValsetConfirm | PlainMessage<EventValsetConfirm> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.EventSendToEth
 */
export declare class EventSendToEth extends Message<EventSendToEth> {
    /**
     * @generated from field: uint64 outgoing_tx_id = 1;
     */
    outgoingTxId: bigint;
    /**
     * @generated from field: string sender = 2;
     */
    sender: string;
    /**
     * @generated from field: string receiver = 3;
     */
    receiver: string;
    /**
     * @generated from field: string amount = 4;
     */
    amount: string;
    /**
     * @generated from field: string bridge_fee = 5;
     */
    bridgeFee: string;
    constructor(data?: PartialMessage<EventSendToEth>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.EventSendToEth";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSendToEth;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSendToEth;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSendToEth;
    static equals(a: EventSendToEth | PlainMessage<EventSendToEth> | undefined, b: EventSendToEth | PlainMessage<EventSendToEth> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.EventConfirmBatch
 */
export declare class EventConfirmBatch extends Message<EventConfirmBatch> {
    /**
     * @generated from field: uint64 batch_nonce = 1;
     */
    batchNonce: bigint;
    /**
     * @generated from field: string orchestrator_address = 2;
     */
    orchestratorAddress: string;
    constructor(data?: PartialMessage<EventConfirmBatch>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.EventConfirmBatch";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventConfirmBatch;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventConfirmBatch;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventConfirmBatch;
    static equals(a: EventConfirmBatch | PlainMessage<EventConfirmBatch> | undefined, b: EventConfirmBatch | PlainMessage<EventConfirmBatch> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.EventAttestationVote
 */
export declare class EventAttestationVote extends Message<EventAttestationVote> {
    /**
     * @generated from field: uint64 event_nonce = 1;
     */
    eventNonce: bigint;
    /**
     * @generated from field: bytes attestation_id = 2;
     */
    attestationId: Uint8Array;
    /**
     * @generated from field: string voter = 3;
     */
    voter: string;
    constructor(data?: PartialMessage<EventAttestationVote>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.EventAttestationVote";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventAttestationVote;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventAttestationVote;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventAttestationVote;
    static equals(a: EventAttestationVote | PlainMessage<EventAttestationVote> | undefined, b: EventAttestationVote | PlainMessage<EventAttestationVote> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.EventDepositClaim
 */
export declare class EventDepositClaim extends Message<EventDepositClaim> {
    /**
     * @generated from field: uint64 event_nonce = 1;
     */
    eventNonce: bigint;
    /**
     * @generated from field: uint64 event_height = 2;
     */
    eventHeight: bigint;
    /**
     * @generated from field: bytes attestation_id = 3;
     */
    attestationId: Uint8Array;
    /**
     * @generated from field: string ethereum_sender = 4;
     */
    ethereumSender: string;
    /**
     * @generated from field: string cosmos_receiver = 5;
     */
    cosmosReceiver: string;
    /**
     * @generated from field: string token_contract = 6;
     */
    tokenContract: string;
    /**
     * @generated from field: string amount = 7;
     */
    amount: string;
    /**
     * @generated from field: string orchestrator_address = 8;
     */
    orchestratorAddress: string;
    /**
     * @generated from field: string data = 9;
     */
    data: string;
    constructor(data?: PartialMessage<EventDepositClaim>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.EventDepositClaim";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventDepositClaim;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventDepositClaim;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventDepositClaim;
    static equals(a: EventDepositClaim | PlainMessage<EventDepositClaim> | undefined, b: EventDepositClaim | PlainMessage<EventDepositClaim> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.EventWithdrawClaim
 */
export declare class EventWithdrawClaim extends Message<EventWithdrawClaim> {
    /**
     * @generated from field: uint64 event_nonce = 1;
     */
    eventNonce: bigint;
    /**
     * @generated from field: uint64 event_height = 2;
     */
    eventHeight: bigint;
    /**
     * @generated from field: bytes attestation_id = 3;
     */
    attestationId: Uint8Array;
    /**
     * @generated from field: uint64 batch_nonce = 4;
     */
    batchNonce: bigint;
    /**
     * @generated from field: string token_contract = 5;
     */
    tokenContract: string;
    /**
     * @generated from field: string orchestrator_address = 6;
     */
    orchestratorAddress: string;
    constructor(data?: PartialMessage<EventWithdrawClaim>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.EventWithdrawClaim";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventWithdrawClaim;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventWithdrawClaim;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventWithdrawClaim;
    static equals(a: EventWithdrawClaim | PlainMessage<EventWithdrawClaim> | undefined, b: EventWithdrawClaim | PlainMessage<EventWithdrawClaim> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.EventERC20DeployedClaim
 */
export declare class EventERC20DeployedClaim extends Message<EventERC20DeployedClaim> {
    /**
     * @generated from field: uint64 event_nonce = 1;
     */
    eventNonce: bigint;
    /**
     * @generated from field: uint64 event_height = 2;
     */
    eventHeight: bigint;
    /**
     * @generated from field: bytes attestation_id = 3;
     */
    attestationId: Uint8Array;
    /**
     * @generated from field: string cosmos_denom = 4;
     */
    cosmosDenom: string;
    /**
     * @generated from field: string token_contract = 5;
     */
    tokenContract: string;
    /**
     * @generated from field: string name = 6;
     */
    name: string;
    /**
     * @generated from field: string symbol = 7;
     */
    symbol: string;
    /**
     * @generated from field: uint64 decimals = 8;
     */
    decimals: bigint;
    /**
     * @generated from field: string orchestrator_address = 9;
     */
    orchestratorAddress: string;
    constructor(data?: PartialMessage<EventERC20DeployedClaim>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.EventERC20DeployedClaim";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventERC20DeployedClaim;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventERC20DeployedClaim;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventERC20DeployedClaim;
    static equals(a: EventERC20DeployedClaim | PlainMessage<EventERC20DeployedClaim> | undefined, b: EventERC20DeployedClaim | PlainMessage<EventERC20DeployedClaim> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.EventValsetUpdateClaim
 */
export declare class EventValsetUpdateClaim extends Message<EventValsetUpdateClaim> {
    /**
     * @generated from field: uint64 event_nonce = 1;
     */
    eventNonce: bigint;
    /**
     * @generated from field: uint64 event_height = 2;
     */
    eventHeight: bigint;
    /**
     * @generated from field: bytes attestation_id = 3;
     */
    attestationId: Uint8Array;
    /**
     * @generated from field: uint64 valset_nonce = 4;
     */
    valsetNonce: bigint;
    /**
     * @generated from field: repeated injective.peggy.v1.BridgeValidator valset_members = 5;
     */
    valsetMembers: BridgeValidator[];
    /**
     * @generated from field: string reward_amount = 6;
     */
    rewardAmount: string;
    /**
     * @generated from field: string reward_token = 7;
     */
    rewardToken: string;
    /**
     * @generated from field: string orchestrator_address = 8;
     */
    orchestratorAddress: string;
    constructor(data?: PartialMessage<EventValsetUpdateClaim>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.EventValsetUpdateClaim";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventValsetUpdateClaim;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventValsetUpdateClaim;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventValsetUpdateClaim;
    static equals(a: EventValsetUpdateClaim | PlainMessage<EventValsetUpdateClaim> | undefined, b: EventValsetUpdateClaim | PlainMessage<EventValsetUpdateClaim> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.EventCancelSendToEth
 */
export declare class EventCancelSendToEth extends Message<EventCancelSendToEth> {
    /**
     * @generated from field: uint64 outgoing_tx_id = 1;
     */
    outgoingTxId: bigint;
    constructor(data?: PartialMessage<EventCancelSendToEth>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.EventCancelSendToEth";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventCancelSendToEth;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventCancelSendToEth;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventCancelSendToEth;
    static equals(a: EventCancelSendToEth | PlainMessage<EventCancelSendToEth> | undefined, b: EventCancelSendToEth | PlainMessage<EventCancelSendToEth> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.EventSubmitBadSignatureEvidence
 */
export declare class EventSubmitBadSignatureEvidence extends Message<EventSubmitBadSignatureEvidence> {
    /**
     * @generated from field: string bad_eth_signature = 1;
     */
    badEthSignature: string;
    /**
     * @generated from field: string bad_eth_signature_subject = 2;
     */
    badEthSignatureSubject: string;
    constructor(data?: PartialMessage<EventSubmitBadSignatureEvidence>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.EventSubmitBadSignatureEvidence";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSubmitBadSignatureEvidence;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSubmitBadSignatureEvidence;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSubmitBadSignatureEvidence;
    static equals(a: EventSubmitBadSignatureEvidence | PlainMessage<EventSubmitBadSignatureEvidence> | undefined, b: EventSubmitBadSignatureEvidence | PlainMessage<EventSubmitBadSignatureEvidence> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.EventValidatorSlash
 */
export declare class EventValidatorSlash extends Message<EventValidatorSlash> {
    /**
     * @generated from field: int64 power = 1;
     */
    power: bigint;
    /**
     * @generated from field: string reason = 2;
     */
    reason: string;
    /**
     * @generated from field: string consensus_address = 3;
     */
    consensusAddress: string;
    /**
     * @generated from field: string operator_address = 4;
     */
    operatorAddress: string;
    /**
     * @generated from field: string moniker = 5;
     */
    moniker: string;
    constructor(data?: PartialMessage<EventValidatorSlash>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.EventValidatorSlash";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventValidatorSlash;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventValidatorSlash;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventValidatorSlash;
    static equals(a: EventValidatorSlash | PlainMessage<EventValidatorSlash> | undefined, b: EventValidatorSlash | PlainMessage<EventValidatorSlash> | undefined): boolean;
}
//# sourceMappingURL=events_pb.d.ts.map
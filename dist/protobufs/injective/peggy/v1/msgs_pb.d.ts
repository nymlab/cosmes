import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { BridgeValidator } from "./types_pb.js";
import { Params } from "./params_pb.js";
/**
 * MsgSetOrchestratorAddresses
 * this message allows validators to delegate their voting responsibilities
 * to a given key. This key is then used as an optional authentication method
 * for sigining oracle claims
 * VALIDATOR
 * The validator field is a cosmosvaloper1... string (i.e. sdk.ValAddress)
 * that references a validator in the active set
 * ORCHESTRATOR
 * The orchestrator field is a cosmos1... string  (i.e. sdk.AccAddress) that
 * references the key that is being delegated to
 * ETH_ADDRESS
 * This is a hex encoded 0x Ethereum public key that will be used by this
 * validator on Ethereum
 *
 * @generated from message injective.peggy.v1.MsgSetOrchestratorAddresses
 */
export declare class MsgSetOrchestratorAddresses extends Message<MsgSetOrchestratorAddresses> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: string orchestrator = 2;
     */
    orchestrator: string;
    /**
     * @generated from field: string eth_address = 3;
     */
    ethAddress: string;
    constructor(data?: PartialMessage<MsgSetOrchestratorAddresses>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.MsgSetOrchestratorAddresses";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetOrchestratorAddresses;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetOrchestratorAddresses;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetOrchestratorAddresses;
    static equals(a: MsgSetOrchestratorAddresses | PlainMessage<MsgSetOrchestratorAddresses> | undefined, b: MsgSetOrchestratorAddresses | PlainMessage<MsgSetOrchestratorAddresses> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.MsgSetOrchestratorAddressesResponse
 */
export declare class MsgSetOrchestratorAddressesResponse extends Message<MsgSetOrchestratorAddressesResponse> {
    constructor(data?: PartialMessage<MsgSetOrchestratorAddressesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.MsgSetOrchestratorAddressesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetOrchestratorAddressesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetOrchestratorAddressesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetOrchestratorAddressesResponse;
    static equals(a: MsgSetOrchestratorAddressesResponse | PlainMessage<MsgSetOrchestratorAddressesResponse> | undefined, b: MsgSetOrchestratorAddressesResponse | PlainMessage<MsgSetOrchestratorAddressesResponse> | undefined): boolean;
}
/**
 * MsgValsetConfirm
 * this is the message sent by the validators when they wish to submit their
 * signatures over the validator set at a given block height. A validator must
 * first call MsgSetEthAddress to set their Ethereum address to be used for
 * signing. Then someone (anyone) must make a ValsetRequest the request is
 * essentially a messaging mechanism to determine which block all validators
 * should submit signatures over. Finally validators sign the validator set,
 * powers, and Ethereum addresses of the entire validator set at the height of a
 * ValsetRequest and submit that signature with this message.
 *
 * If a sufficient number of validators (66% of voting power) (A) have set
 * Ethereum addresses and (B) submit ValsetConfirm messages with their
 * signatures it is then possible for anyone to view these signatures in the
 * chain store and submit them to Ethereum to update the validator set
 * -------------
 *
 * @generated from message injective.peggy.v1.MsgValsetConfirm
 */
export declare class MsgValsetConfirm extends Message<MsgValsetConfirm> {
    /**
     * @generated from field: uint64 nonce = 1;
     */
    nonce: bigint;
    /**
     * @generated from field: string orchestrator = 2;
     */
    orchestrator: string;
    /**
     * @generated from field: string eth_address = 3;
     */
    ethAddress: string;
    /**
     * @generated from field: string signature = 4;
     */
    signature: string;
    constructor(data?: PartialMessage<MsgValsetConfirm>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.MsgValsetConfirm";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgValsetConfirm;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgValsetConfirm;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgValsetConfirm;
    static equals(a: MsgValsetConfirm | PlainMessage<MsgValsetConfirm> | undefined, b: MsgValsetConfirm | PlainMessage<MsgValsetConfirm> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.MsgValsetConfirmResponse
 */
export declare class MsgValsetConfirmResponse extends Message<MsgValsetConfirmResponse> {
    constructor(data?: PartialMessage<MsgValsetConfirmResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.MsgValsetConfirmResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgValsetConfirmResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgValsetConfirmResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgValsetConfirmResponse;
    static equals(a: MsgValsetConfirmResponse | PlainMessage<MsgValsetConfirmResponse> | undefined, b: MsgValsetConfirmResponse | PlainMessage<MsgValsetConfirmResponse> | undefined): boolean;
}
/**
 * MsgSendToEth
 * This is the message that a user calls when they want to bridge an asset
 * it will later be removed when it is included in a batch and successfully
 * submitted tokens are removed from the users balance immediately
 * -------------
 * AMOUNT:
 * the coin to send across the bridge, note the restriction that this is a
 * single coin not a set of coins that is normal in other Cosmos messages
 * FEE:
 * the fee paid for the bridge, distinct from the fee paid to the chain to
 * actually send this message in the first place. So a successful send has
 * two layers of fees for the user
 *
 * @generated from message injective.peggy.v1.MsgSendToEth
 */
export declare class MsgSendToEth extends Message<MsgSendToEth> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: string eth_dest = 2;
     */
    ethDest: string;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin amount = 3;
     */
    amount?: Coin;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin bridge_fee = 4;
     */
    bridgeFee?: Coin;
    constructor(data?: PartialMessage<MsgSendToEth>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.MsgSendToEth";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSendToEth;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSendToEth;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSendToEth;
    static equals(a: MsgSendToEth | PlainMessage<MsgSendToEth> | undefined, b: MsgSendToEth | PlainMessage<MsgSendToEth> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.MsgSendToEthResponse
 */
export declare class MsgSendToEthResponse extends Message<MsgSendToEthResponse> {
    constructor(data?: PartialMessage<MsgSendToEthResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.MsgSendToEthResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSendToEthResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSendToEthResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSendToEthResponse;
    static equals(a: MsgSendToEthResponse | PlainMessage<MsgSendToEthResponse> | undefined, b: MsgSendToEthResponse | PlainMessage<MsgSendToEthResponse> | undefined): boolean;
}
/**
 * MsgRequestBatch
 * this is a message anyone can send that requests a batch of transactions to
 * send across the bridge be created for whatever block height this message is
 * included in. This acts as a coordination point, the handler for this message
 * looks at the AddToOutgoingPool tx's in the store and generates a batch, also
 * available in the store tied to this message. The validators then grab this
 * batch, sign it, submit the signatures with a MsgConfirmBatch before a relayer
 * can finally submit the batch
 * -------------
 *
 * @generated from message injective.peggy.v1.MsgRequestBatch
 */
export declare class MsgRequestBatch extends Message<MsgRequestBatch> {
    /**
     * @generated from field: string orchestrator = 1;
     */
    orchestrator: string;
    /**
     * @generated from field: string denom = 2;
     */
    denom: string;
    constructor(data?: PartialMessage<MsgRequestBatch>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.MsgRequestBatch";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRequestBatch;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRequestBatch;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRequestBatch;
    static equals(a: MsgRequestBatch | PlainMessage<MsgRequestBatch> | undefined, b: MsgRequestBatch | PlainMessage<MsgRequestBatch> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.MsgRequestBatchResponse
 */
export declare class MsgRequestBatchResponse extends Message<MsgRequestBatchResponse> {
    constructor(data?: PartialMessage<MsgRequestBatchResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.MsgRequestBatchResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRequestBatchResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRequestBatchResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRequestBatchResponse;
    static equals(a: MsgRequestBatchResponse | PlainMessage<MsgRequestBatchResponse> | undefined, b: MsgRequestBatchResponse | PlainMessage<MsgRequestBatchResponse> | undefined): boolean;
}
/**
 * MsgConfirmBatch
 * When validators observe a MsgRequestBatch they form a batch by ordering
 * transactions currently in the txqueue in order of highest to lowest fee,
 * cutting off when the batch either reaches a hardcoded maximum size (to be
 * decided, probably around 100) or when transactions stop being profitable
 * (TODO determine this without nondeterminism) This message includes the batch
 * as well as an Ethereum signature over this batch by the validator
 * -------------
 *
 * @generated from message injective.peggy.v1.MsgConfirmBatch
 */
export declare class MsgConfirmBatch extends Message<MsgConfirmBatch> {
    /**
     * @generated from field: uint64 nonce = 1;
     */
    nonce: bigint;
    /**
     * @generated from field: string token_contract = 2;
     */
    tokenContract: string;
    /**
     * @generated from field: string eth_signer = 3;
     */
    ethSigner: string;
    /**
     * @generated from field: string orchestrator = 4;
     */
    orchestrator: string;
    /**
     * @generated from field: string signature = 5;
     */
    signature: string;
    constructor(data?: PartialMessage<MsgConfirmBatch>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.MsgConfirmBatch";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgConfirmBatch;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgConfirmBatch;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgConfirmBatch;
    static equals(a: MsgConfirmBatch | PlainMessage<MsgConfirmBatch> | undefined, b: MsgConfirmBatch | PlainMessage<MsgConfirmBatch> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.MsgConfirmBatchResponse
 */
export declare class MsgConfirmBatchResponse extends Message<MsgConfirmBatchResponse> {
    constructor(data?: PartialMessage<MsgConfirmBatchResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.MsgConfirmBatchResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgConfirmBatchResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgConfirmBatchResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgConfirmBatchResponse;
    static equals(a: MsgConfirmBatchResponse | PlainMessage<MsgConfirmBatchResponse> | undefined, b: MsgConfirmBatchResponse | PlainMessage<MsgConfirmBatchResponse> | undefined): boolean;
}
/**
 * EthereumBridgeDepositClaim
 * When more than 66% of the active validator set has
 * claimed to have seen the deposit enter the ethereum blockchain coins are
 * issued to the Cosmos address in question
 * -------------
 *
 * @generated from message injective.peggy.v1.MsgDepositClaim
 */
export declare class MsgDepositClaim extends Message<MsgDepositClaim> {
    /**
     * @generated from field: uint64 event_nonce = 1;
     */
    eventNonce: bigint;
    /**
     * @generated from field: uint64 block_height = 2;
     */
    blockHeight: bigint;
    /**
     * @generated from field: string token_contract = 3;
     */
    tokenContract: string;
    /**
     * @generated from field: string amount = 4;
     */
    amount: string;
    /**
     * @generated from field: string ethereum_sender = 5;
     */
    ethereumSender: string;
    /**
     * @generated from field: string cosmos_receiver = 6;
     */
    cosmosReceiver: string;
    /**
     * @generated from field: string orchestrator = 7;
     */
    orchestrator: string;
    /**
     * @generated from field: string data = 8;
     */
    data: string;
    constructor(data?: PartialMessage<MsgDepositClaim>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.MsgDepositClaim";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgDepositClaim;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgDepositClaim;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgDepositClaim;
    static equals(a: MsgDepositClaim | PlainMessage<MsgDepositClaim> | undefined, b: MsgDepositClaim | PlainMessage<MsgDepositClaim> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.MsgDepositClaimResponse
 */
export declare class MsgDepositClaimResponse extends Message<MsgDepositClaimResponse> {
    constructor(data?: PartialMessage<MsgDepositClaimResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.MsgDepositClaimResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgDepositClaimResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgDepositClaimResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgDepositClaimResponse;
    static equals(a: MsgDepositClaimResponse | PlainMessage<MsgDepositClaimResponse> | undefined, b: MsgDepositClaimResponse | PlainMessage<MsgDepositClaimResponse> | undefined): boolean;
}
/**
 * WithdrawClaim claims that a batch of withdrawal
 * operations on the bridge contract was executed.
 *
 * @generated from message injective.peggy.v1.MsgWithdrawClaim
 */
export declare class MsgWithdrawClaim extends Message<MsgWithdrawClaim> {
    /**
     * @generated from field: uint64 event_nonce = 1;
     */
    eventNonce: bigint;
    /**
     * @generated from field: uint64 block_height = 2;
     */
    blockHeight: bigint;
    /**
     * @generated from field: uint64 batch_nonce = 3;
     */
    batchNonce: bigint;
    /**
     * @generated from field: string token_contract = 4;
     */
    tokenContract: string;
    /**
     * @generated from field: string orchestrator = 5;
     */
    orchestrator: string;
    constructor(data?: PartialMessage<MsgWithdrawClaim>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.MsgWithdrawClaim";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawClaim;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawClaim;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawClaim;
    static equals(a: MsgWithdrawClaim | PlainMessage<MsgWithdrawClaim> | undefined, b: MsgWithdrawClaim | PlainMessage<MsgWithdrawClaim> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.MsgWithdrawClaimResponse
 */
export declare class MsgWithdrawClaimResponse extends Message<MsgWithdrawClaimResponse> {
    constructor(data?: PartialMessage<MsgWithdrawClaimResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.MsgWithdrawClaimResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawClaimResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawClaimResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawClaimResponse;
    static equals(a: MsgWithdrawClaimResponse | PlainMessage<MsgWithdrawClaimResponse> | undefined, b: MsgWithdrawClaimResponse | PlainMessage<MsgWithdrawClaimResponse> | undefined): boolean;
}
/**
 * ERC20DeployedClaim allows the Cosmos module
 * to learn about an ERC20 that someone deployed
 * to represent a Cosmos asset
 *
 * @generated from message injective.peggy.v1.MsgERC20DeployedClaim
 */
export declare class MsgERC20DeployedClaim extends Message<MsgERC20DeployedClaim> {
    /**
     * @generated from field: uint64 event_nonce = 1;
     */
    eventNonce: bigint;
    /**
     * @generated from field: uint64 block_height = 2;
     */
    blockHeight: bigint;
    /**
     * @generated from field: string cosmos_denom = 3;
     */
    cosmosDenom: string;
    /**
     * @generated from field: string token_contract = 4;
     */
    tokenContract: string;
    /**
     * @generated from field: string name = 5;
     */
    name: string;
    /**
     * @generated from field: string symbol = 6;
     */
    symbol: string;
    /**
     * @generated from field: uint64 decimals = 7;
     */
    decimals: bigint;
    /**
     * @generated from field: string orchestrator = 8;
     */
    orchestrator: string;
    constructor(data?: PartialMessage<MsgERC20DeployedClaim>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.MsgERC20DeployedClaim";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgERC20DeployedClaim;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgERC20DeployedClaim;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgERC20DeployedClaim;
    static equals(a: MsgERC20DeployedClaim | PlainMessage<MsgERC20DeployedClaim> | undefined, b: MsgERC20DeployedClaim | PlainMessage<MsgERC20DeployedClaim> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.MsgERC20DeployedClaimResponse
 */
export declare class MsgERC20DeployedClaimResponse extends Message<MsgERC20DeployedClaimResponse> {
    constructor(data?: PartialMessage<MsgERC20DeployedClaimResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.MsgERC20DeployedClaimResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgERC20DeployedClaimResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgERC20DeployedClaimResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgERC20DeployedClaimResponse;
    static equals(a: MsgERC20DeployedClaimResponse | PlainMessage<MsgERC20DeployedClaimResponse> | undefined, b: MsgERC20DeployedClaimResponse | PlainMessage<MsgERC20DeployedClaimResponse> | undefined): boolean;
}
/**
 * This call allows the sender (and only the sender)
 * to cancel a given MsgSendToEth and recieve a refund
 * of the tokens
 *
 * @generated from message injective.peggy.v1.MsgCancelSendToEth
 */
export declare class MsgCancelSendToEth extends Message<MsgCancelSendToEth> {
    /**
     * @generated from field: uint64 transaction_id = 1;
     */
    transactionId: bigint;
    /**
     * @generated from field: string sender = 2;
     */
    sender: string;
    constructor(data?: PartialMessage<MsgCancelSendToEth>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.MsgCancelSendToEth";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCancelSendToEth;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCancelSendToEth;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCancelSendToEth;
    static equals(a: MsgCancelSendToEth | PlainMessage<MsgCancelSendToEth> | undefined, b: MsgCancelSendToEth | PlainMessage<MsgCancelSendToEth> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.MsgCancelSendToEthResponse
 */
export declare class MsgCancelSendToEthResponse extends Message<MsgCancelSendToEthResponse> {
    constructor(data?: PartialMessage<MsgCancelSendToEthResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.MsgCancelSendToEthResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCancelSendToEthResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCancelSendToEthResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCancelSendToEthResponse;
    static equals(a: MsgCancelSendToEthResponse | PlainMessage<MsgCancelSendToEthResponse> | undefined, b: MsgCancelSendToEthResponse | PlainMessage<MsgCancelSendToEthResponse> | undefined): boolean;
}
/**
 * This call allows anyone to submit evidence that a
 * validator has signed a valset, batch, or logic call that never
 * existed. Subject contains the batch, valset, or logic call.
 *
 * @generated from message injective.peggy.v1.MsgSubmitBadSignatureEvidence
 */
export declare class MsgSubmitBadSignatureEvidence extends Message<MsgSubmitBadSignatureEvidence> {
    /**
     * @generated from field: google.protobuf.Any subject = 1;
     */
    subject?: Any;
    /**
     * @generated from field: string signature = 2;
     */
    signature: string;
    /**
     * @generated from field: string sender = 3;
     */
    sender: string;
    constructor(data?: PartialMessage<MsgSubmitBadSignatureEvidence>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.MsgSubmitBadSignatureEvidence";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSubmitBadSignatureEvidence;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSubmitBadSignatureEvidence;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSubmitBadSignatureEvidence;
    static equals(a: MsgSubmitBadSignatureEvidence | PlainMessage<MsgSubmitBadSignatureEvidence> | undefined, b: MsgSubmitBadSignatureEvidence | PlainMessage<MsgSubmitBadSignatureEvidence> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.MsgSubmitBadSignatureEvidenceResponse
 */
export declare class MsgSubmitBadSignatureEvidenceResponse extends Message<MsgSubmitBadSignatureEvidenceResponse> {
    constructor(data?: PartialMessage<MsgSubmitBadSignatureEvidenceResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.MsgSubmitBadSignatureEvidenceResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSubmitBadSignatureEvidenceResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSubmitBadSignatureEvidenceResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSubmitBadSignatureEvidenceResponse;
    static equals(a: MsgSubmitBadSignatureEvidenceResponse | PlainMessage<MsgSubmitBadSignatureEvidenceResponse> | undefined, b: MsgSubmitBadSignatureEvidenceResponse | PlainMessage<MsgSubmitBadSignatureEvidenceResponse> | undefined): boolean;
}
/**
 * This informs the Cosmos module that a validator
 * set has been updated.
 *
 * @generated from message injective.peggy.v1.MsgValsetUpdatedClaim
 */
export declare class MsgValsetUpdatedClaim extends Message<MsgValsetUpdatedClaim> {
    /**
     * @generated from field: uint64 event_nonce = 1;
     */
    eventNonce: bigint;
    /**
     * @generated from field: uint64 valset_nonce = 2;
     */
    valsetNonce: bigint;
    /**
     * @generated from field: uint64 block_height = 3;
     */
    blockHeight: bigint;
    /**
     * @generated from field: repeated injective.peggy.v1.BridgeValidator members = 4;
     */
    members: BridgeValidator[];
    /**
     * @generated from field: string reward_amount = 5;
     */
    rewardAmount: string;
    /**
     * @generated from field: string reward_token = 6;
     */
    rewardToken: string;
    /**
     * @generated from field: string orchestrator = 7;
     */
    orchestrator: string;
    constructor(data?: PartialMessage<MsgValsetUpdatedClaim>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.MsgValsetUpdatedClaim";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgValsetUpdatedClaim;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgValsetUpdatedClaim;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgValsetUpdatedClaim;
    static equals(a: MsgValsetUpdatedClaim | PlainMessage<MsgValsetUpdatedClaim> | undefined, b: MsgValsetUpdatedClaim | PlainMessage<MsgValsetUpdatedClaim> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.MsgValsetUpdatedClaimResponse
 */
export declare class MsgValsetUpdatedClaimResponse extends Message<MsgValsetUpdatedClaimResponse> {
    constructor(data?: PartialMessage<MsgValsetUpdatedClaimResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.MsgValsetUpdatedClaimResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgValsetUpdatedClaimResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgValsetUpdatedClaimResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgValsetUpdatedClaimResponse;
    static equals(a: MsgValsetUpdatedClaimResponse | PlainMessage<MsgValsetUpdatedClaimResponse> | undefined, b: MsgValsetUpdatedClaimResponse | PlainMessage<MsgValsetUpdatedClaimResponse> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.MsgUpdateParams
 */
export declare class MsgUpdateParams extends Message<MsgUpdateParams> {
    /**
     * authority is the address of the governance account.
     *
     * @generated from field: string authority = 1;
     */
    authority: string;
    /**
     * params defines the peggy parameters to update.
     *
     * NOTE: All parameters must be supplied.
     *
     * @generated from field: injective.peggy.v1.Params params = 2;
     */
    params?: Params;
    constructor(data?: PartialMessage<MsgUpdateParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.MsgUpdateParams";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParams;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParams;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParams;
    static equals(a: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined, b: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.MsgUpdateParamsResponse
 */
export declare class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
    constructor(data?: PartialMessage<MsgUpdateParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.MsgUpdateParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static equals(a: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined, b: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined): boolean;
}
//# sourceMappingURL=msgs_pb.d.ts.map
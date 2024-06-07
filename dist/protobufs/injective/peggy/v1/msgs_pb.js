// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file injective/peggy/v1/msgs.proto (package injective.peggy.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Any, Message, proto3, protoInt64 } from "@bufbuild/protobuf";
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
export class MsgSetOrchestratorAddresses extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string sender = 1;
         */
        this.sender = "";
        /**
         * @generated from field: string orchestrator = 2;
         */
        this.orchestrator = "";
        /**
         * @generated from field: string eth_address = 3;
         */
        this.ethAddress = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSetOrchestratorAddresses().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSetOrchestratorAddresses().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSetOrchestratorAddresses().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSetOrchestratorAddresses, a, b);
    }
}
MsgSetOrchestratorAddresses.runtime = proto3;
MsgSetOrchestratorAddresses.typeName = "injective.peggy.v1.MsgSetOrchestratorAddresses";
MsgSetOrchestratorAddresses.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "orchestrator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "eth_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message injective.peggy.v1.MsgSetOrchestratorAddressesResponse
 */
export class MsgSetOrchestratorAddressesResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSetOrchestratorAddressesResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSetOrchestratorAddressesResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSetOrchestratorAddressesResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSetOrchestratorAddressesResponse, a, b);
    }
}
MsgSetOrchestratorAddressesResponse.runtime = proto3;
MsgSetOrchestratorAddressesResponse.typeName = "injective.peggy.v1.MsgSetOrchestratorAddressesResponse";
MsgSetOrchestratorAddressesResponse.fields = proto3.util.newFieldList(() => []);
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
export class MsgValsetConfirm extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 nonce = 1;
         */
        this.nonce = protoInt64.zero;
        /**
         * @generated from field: string orchestrator = 2;
         */
        this.orchestrator = "";
        /**
         * @generated from field: string eth_address = 3;
         */
        this.ethAddress = "";
        /**
         * @generated from field: string signature = 4;
         */
        this.signature = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgValsetConfirm().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgValsetConfirm().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgValsetConfirm().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgValsetConfirm, a, b);
    }
}
MsgValsetConfirm.runtime = proto3;
MsgValsetConfirm.typeName = "injective.peggy.v1.MsgValsetConfirm";
MsgValsetConfirm.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "nonce", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "orchestrator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "eth_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "signature", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message injective.peggy.v1.MsgValsetConfirmResponse
 */
export class MsgValsetConfirmResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgValsetConfirmResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgValsetConfirmResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgValsetConfirmResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgValsetConfirmResponse, a, b);
    }
}
MsgValsetConfirmResponse.runtime = proto3;
MsgValsetConfirmResponse.typeName = "injective.peggy.v1.MsgValsetConfirmResponse";
MsgValsetConfirmResponse.fields = proto3.util.newFieldList(() => []);
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
export class MsgSendToEth extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string sender = 1;
         */
        this.sender = "";
        /**
         * @generated from field: string eth_dest = 2;
         */
        this.ethDest = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSendToEth().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSendToEth().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSendToEth().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSendToEth, a, b);
    }
}
MsgSendToEth.runtime = proto3;
MsgSendToEth.typeName = "injective.peggy.v1.MsgSendToEth";
MsgSendToEth.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "eth_dest", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: Coin },
    { no: 4, name: "bridge_fee", kind: "message", T: Coin },
]);
/**
 * @generated from message injective.peggy.v1.MsgSendToEthResponse
 */
export class MsgSendToEthResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSendToEthResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSendToEthResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSendToEthResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSendToEthResponse, a, b);
    }
}
MsgSendToEthResponse.runtime = proto3;
MsgSendToEthResponse.typeName = "injective.peggy.v1.MsgSendToEthResponse";
MsgSendToEthResponse.fields = proto3.util.newFieldList(() => []);
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
export class MsgRequestBatch extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string orchestrator = 1;
         */
        this.orchestrator = "";
        /**
         * @generated from field: string denom = 2;
         */
        this.denom = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgRequestBatch().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgRequestBatch().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgRequestBatch().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgRequestBatch, a, b);
    }
}
MsgRequestBatch.runtime = proto3;
MsgRequestBatch.typeName = "injective.peggy.v1.MsgRequestBatch";
MsgRequestBatch.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "orchestrator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message injective.peggy.v1.MsgRequestBatchResponse
 */
export class MsgRequestBatchResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgRequestBatchResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgRequestBatchResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgRequestBatchResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgRequestBatchResponse, a, b);
    }
}
MsgRequestBatchResponse.runtime = proto3;
MsgRequestBatchResponse.typeName = "injective.peggy.v1.MsgRequestBatchResponse";
MsgRequestBatchResponse.fields = proto3.util.newFieldList(() => []);
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
export class MsgConfirmBatch extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 nonce = 1;
         */
        this.nonce = protoInt64.zero;
        /**
         * @generated from field: string token_contract = 2;
         */
        this.tokenContract = "";
        /**
         * @generated from field: string eth_signer = 3;
         */
        this.ethSigner = "";
        /**
         * @generated from field: string orchestrator = 4;
         */
        this.orchestrator = "";
        /**
         * @generated from field: string signature = 5;
         */
        this.signature = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgConfirmBatch().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgConfirmBatch().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgConfirmBatch().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgConfirmBatch, a, b);
    }
}
MsgConfirmBatch.runtime = proto3;
MsgConfirmBatch.typeName = "injective.peggy.v1.MsgConfirmBatch";
MsgConfirmBatch.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "nonce", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "token_contract", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "eth_signer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "orchestrator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "signature", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message injective.peggy.v1.MsgConfirmBatchResponse
 */
export class MsgConfirmBatchResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgConfirmBatchResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgConfirmBatchResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgConfirmBatchResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgConfirmBatchResponse, a, b);
    }
}
MsgConfirmBatchResponse.runtime = proto3;
MsgConfirmBatchResponse.typeName = "injective.peggy.v1.MsgConfirmBatchResponse";
MsgConfirmBatchResponse.fields = proto3.util.newFieldList(() => []);
/**
 * EthereumBridgeDepositClaim
 * When more than 66% of the active validator set has
 * claimed to have seen the deposit enter the ethereum blockchain coins are
 * issued to the Cosmos address in question
 * -------------
 *
 * @generated from message injective.peggy.v1.MsgDepositClaim
 */
export class MsgDepositClaim extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 event_nonce = 1;
         */
        this.eventNonce = protoInt64.zero;
        /**
         * @generated from field: uint64 block_height = 2;
         */
        this.blockHeight = protoInt64.zero;
        /**
         * @generated from field: string token_contract = 3;
         */
        this.tokenContract = "";
        /**
         * @generated from field: string amount = 4;
         */
        this.amount = "";
        /**
         * @generated from field: string ethereum_sender = 5;
         */
        this.ethereumSender = "";
        /**
         * @generated from field: string cosmos_receiver = 6;
         */
        this.cosmosReceiver = "";
        /**
         * @generated from field: string orchestrator = 7;
         */
        this.orchestrator = "";
        /**
         * @generated from field: string data = 8;
         */
        this.data = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgDepositClaim().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgDepositClaim().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgDepositClaim().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgDepositClaim, a, b);
    }
}
MsgDepositClaim.runtime = proto3;
MsgDepositClaim.typeName = "injective.peggy.v1.MsgDepositClaim";
MsgDepositClaim.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "event_nonce", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "block_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "token_contract", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "ethereum_sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "cosmos_receiver", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "orchestrator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "data", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message injective.peggy.v1.MsgDepositClaimResponse
 */
export class MsgDepositClaimResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgDepositClaimResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgDepositClaimResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgDepositClaimResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgDepositClaimResponse, a, b);
    }
}
MsgDepositClaimResponse.runtime = proto3;
MsgDepositClaimResponse.typeName = "injective.peggy.v1.MsgDepositClaimResponse";
MsgDepositClaimResponse.fields = proto3.util.newFieldList(() => []);
/**
 * WithdrawClaim claims that a batch of withdrawal
 * operations on the bridge contract was executed.
 *
 * @generated from message injective.peggy.v1.MsgWithdrawClaim
 */
export class MsgWithdrawClaim extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 event_nonce = 1;
         */
        this.eventNonce = protoInt64.zero;
        /**
         * @generated from field: uint64 block_height = 2;
         */
        this.blockHeight = protoInt64.zero;
        /**
         * @generated from field: uint64 batch_nonce = 3;
         */
        this.batchNonce = protoInt64.zero;
        /**
         * @generated from field: string token_contract = 4;
         */
        this.tokenContract = "";
        /**
         * @generated from field: string orchestrator = 5;
         */
        this.orchestrator = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgWithdrawClaim().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgWithdrawClaim().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgWithdrawClaim().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgWithdrawClaim, a, b);
    }
}
MsgWithdrawClaim.runtime = proto3;
MsgWithdrawClaim.typeName = "injective.peggy.v1.MsgWithdrawClaim";
MsgWithdrawClaim.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "event_nonce", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "block_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "batch_nonce", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "token_contract", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "orchestrator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message injective.peggy.v1.MsgWithdrawClaimResponse
 */
export class MsgWithdrawClaimResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgWithdrawClaimResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgWithdrawClaimResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgWithdrawClaimResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgWithdrawClaimResponse, a, b);
    }
}
MsgWithdrawClaimResponse.runtime = proto3;
MsgWithdrawClaimResponse.typeName = "injective.peggy.v1.MsgWithdrawClaimResponse";
MsgWithdrawClaimResponse.fields = proto3.util.newFieldList(() => []);
/**
 * ERC20DeployedClaim allows the Cosmos module
 * to learn about an ERC20 that someone deployed
 * to represent a Cosmos asset
 *
 * @generated from message injective.peggy.v1.MsgERC20DeployedClaim
 */
export class MsgERC20DeployedClaim extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 event_nonce = 1;
         */
        this.eventNonce = protoInt64.zero;
        /**
         * @generated from field: uint64 block_height = 2;
         */
        this.blockHeight = protoInt64.zero;
        /**
         * @generated from field: string cosmos_denom = 3;
         */
        this.cosmosDenom = "";
        /**
         * @generated from field: string token_contract = 4;
         */
        this.tokenContract = "";
        /**
         * @generated from field: string name = 5;
         */
        this.name = "";
        /**
         * @generated from field: string symbol = 6;
         */
        this.symbol = "";
        /**
         * @generated from field: uint64 decimals = 7;
         */
        this.decimals = protoInt64.zero;
        /**
         * @generated from field: string orchestrator = 8;
         */
        this.orchestrator = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgERC20DeployedClaim().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgERC20DeployedClaim().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgERC20DeployedClaim().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgERC20DeployedClaim, a, b);
    }
}
MsgERC20DeployedClaim.runtime = proto3;
MsgERC20DeployedClaim.typeName = "injective.peggy.v1.MsgERC20DeployedClaim";
MsgERC20DeployedClaim.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "event_nonce", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "block_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "cosmos_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "token_contract", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "symbol", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "decimals", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 8, name: "orchestrator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message injective.peggy.v1.MsgERC20DeployedClaimResponse
 */
export class MsgERC20DeployedClaimResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgERC20DeployedClaimResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgERC20DeployedClaimResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgERC20DeployedClaimResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgERC20DeployedClaimResponse, a, b);
    }
}
MsgERC20DeployedClaimResponse.runtime = proto3;
MsgERC20DeployedClaimResponse.typeName = "injective.peggy.v1.MsgERC20DeployedClaimResponse";
MsgERC20DeployedClaimResponse.fields = proto3.util.newFieldList(() => []);
/**
 * This call allows the sender (and only the sender)
 * to cancel a given MsgSendToEth and recieve a refund
 * of the tokens
 *
 * @generated from message injective.peggy.v1.MsgCancelSendToEth
 */
export class MsgCancelSendToEth extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 transaction_id = 1;
         */
        this.transactionId = protoInt64.zero;
        /**
         * @generated from field: string sender = 2;
         */
        this.sender = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCancelSendToEth().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCancelSendToEth().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCancelSendToEth().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCancelSendToEth, a, b);
    }
}
MsgCancelSendToEth.runtime = proto3;
MsgCancelSendToEth.typeName = "injective.peggy.v1.MsgCancelSendToEth";
MsgCancelSendToEth.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "transaction_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message injective.peggy.v1.MsgCancelSendToEthResponse
 */
export class MsgCancelSendToEthResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCancelSendToEthResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCancelSendToEthResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCancelSendToEthResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCancelSendToEthResponse, a, b);
    }
}
MsgCancelSendToEthResponse.runtime = proto3;
MsgCancelSendToEthResponse.typeName = "injective.peggy.v1.MsgCancelSendToEthResponse";
MsgCancelSendToEthResponse.fields = proto3.util.newFieldList(() => []);
/**
 * This call allows anyone to submit evidence that a
 * validator has signed a valset, batch, or logic call that never
 * existed. Subject contains the batch, valset, or logic call.
 *
 * @generated from message injective.peggy.v1.MsgSubmitBadSignatureEvidence
 */
export class MsgSubmitBadSignatureEvidence extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string signature = 2;
         */
        this.signature = "";
        /**
         * @generated from field: string sender = 3;
         */
        this.sender = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSubmitBadSignatureEvidence().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSubmitBadSignatureEvidence().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSubmitBadSignatureEvidence().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSubmitBadSignatureEvidence, a, b);
    }
}
MsgSubmitBadSignatureEvidence.runtime = proto3;
MsgSubmitBadSignatureEvidence.typeName = "injective.peggy.v1.MsgSubmitBadSignatureEvidence";
MsgSubmitBadSignatureEvidence.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "subject", kind: "message", T: Any },
    { no: 2, name: "signature", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message injective.peggy.v1.MsgSubmitBadSignatureEvidenceResponse
 */
export class MsgSubmitBadSignatureEvidenceResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSubmitBadSignatureEvidenceResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSubmitBadSignatureEvidenceResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSubmitBadSignatureEvidenceResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSubmitBadSignatureEvidenceResponse, a, b);
    }
}
MsgSubmitBadSignatureEvidenceResponse.runtime = proto3;
MsgSubmitBadSignatureEvidenceResponse.typeName = "injective.peggy.v1.MsgSubmitBadSignatureEvidenceResponse";
MsgSubmitBadSignatureEvidenceResponse.fields = proto3.util.newFieldList(() => []);
/**
 * This informs the Cosmos module that a validator
 * set has been updated.
 *
 * @generated from message injective.peggy.v1.MsgValsetUpdatedClaim
 */
export class MsgValsetUpdatedClaim extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 event_nonce = 1;
         */
        this.eventNonce = protoInt64.zero;
        /**
         * @generated from field: uint64 valset_nonce = 2;
         */
        this.valsetNonce = protoInt64.zero;
        /**
         * @generated from field: uint64 block_height = 3;
         */
        this.blockHeight = protoInt64.zero;
        /**
         * @generated from field: repeated injective.peggy.v1.BridgeValidator members = 4;
         */
        this.members = [];
        /**
         * @generated from field: string reward_amount = 5;
         */
        this.rewardAmount = "";
        /**
         * @generated from field: string reward_token = 6;
         */
        this.rewardToken = "";
        /**
         * @generated from field: string orchestrator = 7;
         */
        this.orchestrator = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgValsetUpdatedClaim().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgValsetUpdatedClaim().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgValsetUpdatedClaim().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgValsetUpdatedClaim, a, b);
    }
}
MsgValsetUpdatedClaim.runtime = proto3;
MsgValsetUpdatedClaim.typeName = "injective.peggy.v1.MsgValsetUpdatedClaim";
MsgValsetUpdatedClaim.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "event_nonce", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "valset_nonce", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "block_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "members", kind: "message", T: BridgeValidator, repeated: true },
    { no: 5, name: "reward_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "reward_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "orchestrator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message injective.peggy.v1.MsgValsetUpdatedClaimResponse
 */
export class MsgValsetUpdatedClaimResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgValsetUpdatedClaimResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgValsetUpdatedClaimResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgValsetUpdatedClaimResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgValsetUpdatedClaimResponse, a, b);
    }
}
MsgValsetUpdatedClaimResponse.runtime = proto3;
MsgValsetUpdatedClaimResponse.typeName = "injective.peggy.v1.MsgValsetUpdatedClaimResponse";
MsgValsetUpdatedClaimResponse.fields = proto3.util.newFieldList(() => []);
/**
 * @generated from message injective.peggy.v1.MsgUpdateParams
 */
export class MsgUpdateParams extends Message {
    constructor(data) {
        super();
        /**
         * authority is the address of the governance account.
         *
         * @generated from field: string authority = 1;
         */
        this.authority = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateParams().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateParams().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateParams().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUpdateParams, a, b);
    }
}
MsgUpdateParams.runtime = proto3;
MsgUpdateParams.typeName = "injective.peggy.v1.MsgUpdateParams";
MsgUpdateParams.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "params", kind: "message", T: Params },
]);
/**
 * @generated from message injective.peggy.v1.MsgUpdateParamsResponse
 */
export class MsgUpdateParamsResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateParamsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateParamsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateParamsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUpdateParamsResponse, a, b);
    }
}
MsgUpdateParamsResponse.runtime = proto3;
MsgUpdateParamsResponse.typeName = "injective.peggy.v1.MsgUpdateParamsResponse";
MsgUpdateParamsResponse.fields = proto3.util.newFieldList(() => []);
//# sourceMappingURL=msgs_pb.js.map
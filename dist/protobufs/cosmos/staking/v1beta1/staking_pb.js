// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmos/staking/v1beta1/staking.proto (package cosmos.staking.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Any, Duration, Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { Header } from "../../../tendermint/types/types_pb.js";
import { Coin } from "../../base/v1beta1/coin_pb.js";
import { ValidatorUpdate } from "../../../tendermint/abci/types_pb.js";
/**
 * BondStatus is the status of a validator.
 *
 * @generated from enum cosmos.staking.v1beta1.BondStatus
 */
export var BondStatus;
(function (BondStatus) {
    /**
     * UNSPECIFIED defines an invalid validator status.
     *
     * @generated from enum value: BOND_STATUS_UNSPECIFIED = 0;
     */
    BondStatus[BondStatus["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * UNBONDED defines a validator that is not bonded.
     *
     * @generated from enum value: BOND_STATUS_UNBONDED = 1;
     */
    BondStatus[BondStatus["UNBONDED"] = 1] = "UNBONDED";
    /**
     * UNBONDING defines a validator that is unbonding.
     *
     * @generated from enum value: BOND_STATUS_UNBONDING = 2;
     */
    BondStatus[BondStatus["UNBONDING"] = 2] = "UNBONDING";
    /**
     * BONDED defines a validator that is bonded.
     *
     * @generated from enum value: BOND_STATUS_BONDED = 3;
     */
    BondStatus[BondStatus["BONDED"] = 3] = "BONDED";
})(BondStatus || (BondStatus = {}));
// Retrieve enum metadata with: proto3.getEnumType(BondStatus)
proto3.util.setEnumType(BondStatus, "cosmos.staking.v1beta1.BondStatus", [
    { no: 0, name: "BOND_STATUS_UNSPECIFIED" },
    { no: 1, name: "BOND_STATUS_UNBONDED" },
    { no: 2, name: "BOND_STATUS_UNBONDING" },
    { no: 3, name: "BOND_STATUS_BONDED" },
]);
/**
 * Infraction indicates the infraction a validator commited.
 *
 * @generated from enum cosmos.staking.v1beta1.Infraction
 */
export var Infraction;
(function (Infraction) {
    /**
     * UNSPECIFIED defines an empty infraction.
     *
     * @generated from enum value: INFRACTION_UNSPECIFIED = 0;
     */
    Infraction[Infraction["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * DOUBLE_SIGN defines a validator that double-signs a block.
     *
     * @generated from enum value: INFRACTION_DOUBLE_SIGN = 1;
     */
    Infraction[Infraction["DOUBLE_SIGN"] = 1] = "DOUBLE_SIGN";
    /**
     * DOWNTIME defines a validator that missed signing too many blocks.
     *
     * @generated from enum value: INFRACTION_DOWNTIME = 2;
     */
    Infraction[Infraction["DOWNTIME"] = 2] = "DOWNTIME";
})(Infraction || (Infraction = {}));
// Retrieve enum metadata with: proto3.getEnumType(Infraction)
proto3.util.setEnumType(Infraction, "cosmos.staking.v1beta1.Infraction", [
    { no: 0, name: "INFRACTION_UNSPECIFIED" },
    { no: 1, name: "INFRACTION_DOUBLE_SIGN" },
    { no: 2, name: "INFRACTION_DOWNTIME" },
]);
/**
 * HistoricalInfo contains header and validator information for a given block.
 * It is stored as part of staking module's state, which persists the `n` most
 * recent HistoricalInfo
 * (`n` is set by the staking module's `historical_entries` parameter).
 *
 * @generated from message cosmos.staking.v1beta1.HistoricalInfo
 */
export class HistoricalInfo extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated cosmos.staking.v1beta1.Validator valset = 2;
         */
        this.valset = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new HistoricalInfo().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new HistoricalInfo().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new HistoricalInfo().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(HistoricalInfo, a, b);
    }
}
HistoricalInfo.runtime = proto3;
HistoricalInfo.typeName = "cosmos.staking.v1beta1.HistoricalInfo";
HistoricalInfo.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "header", kind: "message", T: Header },
    { no: 2, name: "valset", kind: "message", T: Validator, repeated: true },
]);
/**
 * CommissionRates defines the initial commission rates to be used for creating
 * a validator.
 *
 * @generated from message cosmos.staking.v1beta1.CommissionRates
 */
export class CommissionRates extends Message {
    constructor(data) {
        super();
        /**
         * rate is the commission rate charged to delegators, as a fraction.
         *
         * @generated from field: string rate = 1;
         */
        this.rate = "";
        /**
         * max_rate defines the maximum commission rate which validator can ever charge, as a fraction.
         *
         * @generated from field: string max_rate = 2;
         */
        this.maxRate = "";
        /**
         * max_change_rate defines the maximum daily increase of the validator commission, as a fraction.
         *
         * @generated from field: string max_change_rate = 3;
         */
        this.maxChangeRate = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new CommissionRates().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CommissionRates().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CommissionRates().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(CommissionRates, a, b);
    }
}
CommissionRates.runtime = proto3;
CommissionRates.typeName = "cosmos.staking.v1beta1.CommissionRates";
CommissionRates.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "rate", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "max_rate", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "max_change_rate", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * Commission defines commission parameters for a given validator.
 *
 * @generated from message cosmos.staking.v1beta1.Commission
 */
export class Commission extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Commission().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Commission().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Commission().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Commission, a, b);
    }
}
Commission.runtime = proto3;
Commission.typeName = "cosmos.staking.v1beta1.Commission";
Commission.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "commission_rates", kind: "message", T: CommissionRates },
    { no: 2, name: "update_time", kind: "message", T: Timestamp },
]);
/**
 * Description defines a validator description.
 *
 * @generated from message cosmos.staking.v1beta1.Description
 */
export class Description extends Message {
    constructor(data) {
        super();
        /**
         * moniker defines a human-readable name for the validator.
         *
         * @generated from field: string moniker = 1;
         */
        this.moniker = "";
        /**
         * identity defines an optional identity signature (ex. UPort or Keybase).
         *
         * @generated from field: string identity = 2;
         */
        this.identity = "";
        /**
         * website defines an optional website link.
         *
         * @generated from field: string website = 3;
         */
        this.website = "";
        /**
         * security_contact defines an optional email for security contact.
         *
         * @generated from field: string security_contact = 4;
         */
        this.securityContact = "";
        /**
         * details define other optional details.
         *
         * @generated from field: string details = 5;
         */
        this.details = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Description().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Description().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Description().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Description, a, b);
    }
}
Description.runtime = proto3;
Description.typeName = "cosmos.staking.v1beta1.Description";
Description.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "moniker", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "identity", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "website", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "security_contact", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "details", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
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
export class Validator extends Message {
    constructor(data) {
        super();
        /**
         * operator_address defines the address of the validator's operator; bech encoded in JSON.
         *
         * @generated from field: string operator_address = 1;
         */
        this.operatorAddress = "";
        /**
         * jailed defined whether the validator has been jailed from bonded status or not.
         *
         * @generated from field: bool jailed = 3;
         */
        this.jailed = false;
        /**
         * status is the validator status (bonded/unbonding/unbonded).
         *
         * @generated from field: cosmos.staking.v1beta1.BondStatus status = 4;
         */
        this.status = BondStatus.UNSPECIFIED;
        /**
         * tokens define the delegated tokens (incl. self-delegation).
         *
         * @generated from field: string tokens = 5;
         */
        this.tokens = "";
        /**
         * delegator_shares defines total shares issued to a validator's delegators.
         *
         * @generated from field: string delegator_shares = 6;
         */
        this.delegatorShares = "";
        /**
         * unbonding_height defines, if unbonding, the height at which this validator has begun unbonding.
         *
         * @generated from field: int64 unbonding_height = 8;
         */
        this.unbondingHeight = protoInt64.zero;
        /**
         * min_self_delegation is the validator's self declared minimum self delegation.
         *
         * Since: cosmos-sdk 0.46
         *
         * @generated from field: string min_self_delegation = 11;
         */
        this.minSelfDelegation = "";
        /**
         * strictly positive if this validator's unbonding has been stopped by external modules
         *
         * @generated from field: int64 unbonding_on_hold_ref_count = 12;
         */
        this.unbondingOnHoldRefCount = protoInt64.zero;
        /**
         * list of unbonding ids, each uniquely identifing an unbonding of this validator
         *
         * @generated from field: repeated uint64 unbonding_ids = 13;
         */
        this.unbondingIds = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Validator().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Validator().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Validator().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Validator, a, b);
    }
}
Validator.runtime = proto3;
Validator.typeName = "cosmos.staking.v1beta1.Validator";
Validator.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "operator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "consensus_pubkey", kind: "message", T: Any },
    { no: 3, name: "jailed", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "status", kind: "enum", T: proto3.getEnumType(BondStatus) },
    { no: 5, name: "tokens", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "delegator_shares", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "description", kind: "message", T: Description },
    { no: 8, name: "unbonding_height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 9, name: "unbonding_time", kind: "message", T: Timestamp },
    { no: 10, name: "commission", kind: "message", T: Commission },
    { no: 11, name: "min_self_delegation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "unbonding_on_hold_ref_count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 13, name: "unbonding_ids", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
]);
/**
 * ValAddresses defines a repeated set of validator addresses.
 *
 * @generated from message cosmos.staking.v1beta1.ValAddresses
 */
export class ValAddresses extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated string addresses = 1;
         */
        this.addresses = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ValAddresses().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ValAddresses().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ValAddresses().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ValAddresses, a, b);
    }
}
ValAddresses.runtime = proto3;
ValAddresses.typeName = "cosmos.staking.v1beta1.ValAddresses";
ValAddresses.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "addresses", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
/**
 * DVPair is struct that just has a delegator-validator pair with no other data.
 * It is intended to be used as a marshalable pointer. For example, a DVPair can
 * be used to construct the key to getting an UnbondingDelegation from state.
 *
 * @generated from message cosmos.staking.v1beta1.DVPair
 */
export class DVPair extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string delegator_address = 1;
         */
        this.delegatorAddress = "";
        /**
         * @generated from field: string validator_address = 2;
         */
        this.validatorAddress = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DVPair().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DVPair().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DVPair().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(DVPair, a, b);
    }
}
DVPair.runtime = proto3;
DVPair.typeName = "cosmos.staking.v1beta1.DVPair";
DVPair.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * DVPairs defines an array of DVPair objects.
 *
 * @generated from message cosmos.staking.v1beta1.DVPairs
 */
export class DVPairs extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated cosmos.staking.v1beta1.DVPair pairs = 1;
         */
        this.pairs = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DVPairs().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DVPairs().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DVPairs().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(DVPairs, a, b);
    }
}
DVPairs.runtime = proto3;
DVPairs.typeName = "cosmos.staking.v1beta1.DVPairs";
DVPairs.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pairs", kind: "message", T: DVPair, repeated: true },
]);
/**
 * DVVTriplet is struct that just has a delegator-validator-validator triplet
 * with no other data. It is intended to be used as a marshalable pointer. For
 * example, a DVVTriplet can be used to construct the key to getting a
 * Redelegation from state.
 *
 * @generated from message cosmos.staking.v1beta1.DVVTriplet
 */
export class DVVTriplet extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string delegator_address = 1;
         */
        this.delegatorAddress = "";
        /**
         * @generated from field: string validator_src_address = 2;
         */
        this.validatorSrcAddress = "";
        /**
         * @generated from field: string validator_dst_address = 3;
         */
        this.validatorDstAddress = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DVVTriplet().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DVVTriplet().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DVVTriplet().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(DVVTriplet, a, b);
    }
}
DVVTriplet.runtime = proto3;
DVVTriplet.typeName = "cosmos.staking.v1beta1.DVVTriplet";
DVVTriplet.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "validator_src_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "validator_dst_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * DVVTriplets defines an array of DVVTriplet objects.
 *
 * @generated from message cosmos.staking.v1beta1.DVVTriplets
 */
export class DVVTriplets extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated cosmos.staking.v1beta1.DVVTriplet triplets = 1;
         */
        this.triplets = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DVVTriplets().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DVVTriplets().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DVVTriplets().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(DVVTriplets, a, b);
    }
}
DVVTriplets.runtime = proto3;
DVVTriplets.typeName = "cosmos.staking.v1beta1.DVVTriplets";
DVVTriplets.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "triplets", kind: "message", T: DVVTriplet, repeated: true },
]);
/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 *
 * @generated from message cosmos.staking.v1beta1.Delegation
 */
export class Delegation extends Message {
    constructor(data) {
        super();
        /**
         * delegator_address is the bech32-encoded address of the delegator.
         *
         * @generated from field: string delegator_address = 1;
         */
        this.delegatorAddress = "";
        /**
         * validator_address is the bech32-encoded address of the validator.
         *
         * @generated from field: string validator_address = 2;
         */
        this.validatorAddress = "";
        /**
         * shares define the delegation shares received.
         *
         * @generated from field: string shares = 3;
         */
        this.shares = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Delegation().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Delegation().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Delegation().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Delegation, a, b);
    }
}
Delegation.runtime = proto3;
Delegation.typeName = "cosmos.staking.v1beta1.Delegation";
Delegation.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "shares", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single validator in an time-ordered list.
 *
 * @generated from message cosmos.staking.v1beta1.UnbondingDelegation
 */
export class UnbondingDelegation extends Message {
    constructor(data) {
        super();
        /**
         * delegator_address is the bech32-encoded address of the delegator.
         *
         * @generated from field: string delegator_address = 1;
         */
        this.delegatorAddress = "";
        /**
         * validator_address is the bech32-encoded address of the validator.
         *
         * @generated from field: string validator_address = 2;
         */
        this.validatorAddress = "";
        /**
         * entries are the unbonding delegation entries.
         *
         * unbonding delegation entries
         *
         * @generated from field: repeated cosmos.staking.v1beta1.UnbondingDelegationEntry entries = 3;
         */
        this.entries = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new UnbondingDelegation().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new UnbondingDelegation().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new UnbondingDelegation().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(UnbondingDelegation, a, b);
    }
}
UnbondingDelegation.runtime = proto3;
UnbondingDelegation.typeName = "cosmos.staking.v1beta1.UnbondingDelegation";
UnbondingDelegation.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "entries", kind: "message", T: UnbondingDelegationEntry, repeated: true },
]);
/**
 * UnbondingDelegationEntry defines an unbonding object with relevant metadata.
 *
 * @generated from message cosmos.staking.v1beta1.UnbondingDelegationEntry
 */
export class UnbondingDelegationEntry extends Message {
    constructor(data) {
        super();
        /**
         * creation_height is the height which the unbonding took place.
         *
         * @generated from field: int64 creation_height = 1;
         */
        this.creationHeight = protoInt64.zero;
        /**
         * initial_balance defines the tokens initially scheduled to receive at completion.
         *
         * @generated from field: string initial_balance = 3;
         */
        this.initialBalance = "";
        /**
         * balance defines the tokens to receive at completion.
         *
         * @generated from field: string balance = 4;
         */
        this.balance = "";
        /**
         * Incrementing id that uniquely identifies this entry
         *
         * @generated from field: uint64 unbonding_id = 5;
         */
        this.unbondingId = protoInt64.zero;
        /**
         * Strictly positive if this entry's unbonding has been stopped by external modules
         *
         * @generated from field: int64 unbonding_on_hold_ref_count = 6;
         */
        this.unbondingOnHoldRefCount = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new UnbondingDelegationEntry().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new UnbondingDelegationEntry().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new UnbondingDelegationEntry().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(UnbondingDelegationEntry, a, b);
    }
}
UnbondingDelegationEntry.runtime = proto3;
UnbondingDelegationEntry.typeName = "cosmos.staking.v1beta1.UnbondingDelegationEntry";
UnbondingDelegationEntry.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "creation_height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "completion_time", kind: "message", T: Timestamp },
    { no: 3, name: "initial_balance", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "balance", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "unbonding_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 6, name: "unbonding_on_hold_ref_count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
]);
/**
 * RedelegationEntry defines a redelegation object with relevant metadata.
 *
 * @generated from message cosmos.staking.v1beta1.RedelegationEntry
 */
export class RedelegationEntry extends Message {
    constructor(data) {
        super();
        /**
         * creation_height  defines the height which the redelegation took place.
         *
         * @generated from field: int64 creation_height = 1;
         */
        this.creationHeight = protoInt64.zero;
        /**
         * initial_balance defines the initial balance when redelegation started.
         *
         * @generated from field: string initial_balance = 3;
         */
        this.initialBalance = "";
        /**
         * shares_dst is the amount of destination-validator shares created by redelegation.
         *
         * @generated from field: string shares_dst = 4;
         */
        this.sharesDst = "";
        /**
         * Incrementing id that uniquely identifies this entry
         *
         * @generated from field: uint64 unbonding_id = 5;
         */
        this.unbondingId = protoInt64.zero;
        /**
         * Strictly positive if this entry's unbonding has been stopped by external modules
         *
         * @generated from field: int64 unbonding_on_hold_ref_count = 6;
         */
        this.unbondingOnHoldRefCount = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new RedelegationEntry().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new RedelegationEntry().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new RedelegationEntry().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(RedelegationEntry, a, b);
    }
}
RedelegationEntry.runtime = proto3;
RedelegationEntry.typeName = "cosmos.staking.v1beta1.RedelegationEntry";
RedelegationEntry.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "creation_height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "completion_time", kind: "message", T: Timestamp },
    { no: 3, name: "initial_balance", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "shares_dst", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "unbonding_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 6, name: "unbonding_on_hold_ref_count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
]);
/**
 * Redelegation contains the list of a particular delegator's redelegating bonds
 * from a particular source validator to a particular destination validator.
 *
 * @generated from message cosmos.staking.v1beta1.Redelegation
 */
export class Redelegation extends Message {
    constructor(data) {
        super();
        /**
         * delegator_address is the bech32-encoded address of the delegator.
         *
         * @generated from field: string delegator_address = 1;
         */
        this.delegatorAddress = "";
        /**
         * validator_src_address is the validator redelegation source operator address.
         *
         * @generated from field: string validator_src_address = 2;
         */
        this.validatorSrcAddress = "";
        /**
         * validator_dst_address is the validator redelegation destination operator address.
         *
         * @generated from field: string validator_dst_address = 3;
         */
        this.validatorDstAddress = "";
        /**
         * entries are the redelegation entries.
         *
         * redelegation entries
         *
         * @generated from field: repeated cosmos.staking.v1beta1.RedelegationEntry entries = 4;
         */
        this.entries = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Redelegation().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Redelegation().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Redelegation().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Redelegation, a, b);
    }
}
Redelegation.runtime = proto3;
Redelegation.typeName = "cosmos.staking.v1beta1.Redelegation";
Redelegation.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "validator_src_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "validator_dst_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "entries", kind: "message", T: RedelegationEntry, repeated: true },
]);
/**
 * Params defines the parameters for the x/staking module.
 *
 * @generated from message cosmos.staking.v1beta1.Params
 */
export class Params extends Message {
    constructor(data) {
        super();
        /**
         * max_validators is the maximum number of validators.
         *
         * @generated from field: uint32 max_validators = 2;
         */
        this.maxValidators = 0;
        /**
         * max_entries is the max entries for either unbonding delegation or redelegation (per pair/trio).
         *
         * @generated from field: uint32 max_entries = 3;
         */
        this.maxEntries = 0;
        /**
         * historical_entries is the number of historical entries to persist.
         *
         * @generated from field: uint32 historical_entries = 4;
         */
        this.historicalEntries = 0;
        /**
         * bond_denom defines the bondable coin denomination.
         *
         * @generated from field: string bond_denom = 5;
         */
        this.bondDenom = "";
        /**
         * min_commission_rate is the chain-wide minimum commission rate that a validator can charge their delegators
         *
         * @generated from field: string min_commission_rate = 6;
         */
        this.minCommissionRate = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Params().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Params().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Params().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Params, a, b);
    }
}
Params.runtime = proto3;
Params.typeName = "cosmos.staking.v1beta1.Params";
Params.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "unbonding_time", kind: "message", T: Duration },
    { no: 2, name: "max_validators", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "max_entries", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "historical_entries", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 5, name: "bond_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "min_commission_rate", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 *
 * @generated from message cosmos.staking.v1beta1.DelegationResponse
 */
export class DelegationResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DelegationResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DelegationResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DelegationResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(DelegationResponse, a, b);
    }
}
DelegationResponse.runtime = proto3;
DelegationResponse.typeName = "cosmos.staking.v1beta1.DelegationResponse";
DelegationResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "delegation", kind: "message", T: Delegation },
    { no: 2, name: "balance", kind: "message", T: Coin },
]);
/**
 * RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 *
 * @generated from message cosmos.staking.v1beta1.RedelegationEntryResponse
 */
export class RedelegationEntryResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string balance = 4;
         */
        this.balance = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new RedelegationEntryResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new RedelegationEntryResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new RedelegationEntryResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(RedelegationEntryResponse, a, b);
    }
}
RedelegationEntryResponse.runtime = proto3;
RedelegationEntryResponse.typeName = "cosmos.staking.v1beta1.RedelegationEntryResponse";
RedelegationEntryResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "redelegation_entry", kind: "message", T: RedelegationEntry },
    { no: 4, name: "balance", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * RedelegationResponse is equivalent to a Redelegation except that its entries
 * contain a balance in addition to shares which is more suitable for client
 * responses.
 *
 * @generated from message cosmos.staking.v1beta1.RedelegationResponse
 */
export class RedelegationResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated cosmos.staking.v1beta1.RedelegationEntryResponse entries = 2;
         */
        this.entries = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new RedelegationResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new RedelegationResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new RedelegationResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(RedelegationResponse, a, b);
    }
}
RedelegationResponse.runtime = proto3;
RedelegationResponse.typeName = "cosmos.staking.v1beta1.RedelegationResponse";
RedelegationResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "redelegation", kind: "message", T: Redelegation },
    { no: 2, name: "entries", kind: "message", T: RedelegationEntryResponse, repeated: true },
]);
/**
 * Pool is used for tracking bonded and not-bonded token supply of the bond
 * denomination.
 *
 * @generated from message cosmos.staking.v1beta1.Pool
 */
export class Pool extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string not_bonded_tokens = 1;
         */
        this.notBondedTokens = "";
        /**
         * @generated from field: string bonded_tokens = 2;
         */
        this.bondedTokens = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Pool().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Pool().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Pool().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Pool, a, b);
    }
}
Pool.runtime = proto3;
Pool.typeName = "cosmos.staking.v1beta1.Pool";
Pool.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "not_bonded_tokens", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "bonded_tokens", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * ValidatorUpdates defines an array of abci.ValidatorUpdate objects.
 * TODO: explore moving this to proto/cosmos/base to separate modules from tendermint dependence
 *
 * @generated from message cosmos.staking.v1beta1.ValidatorUpdates
 */
export class ValidatorUpdates extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated tendermint.abci.ValidatorUpdate updates = 1;
         */
        this.updates = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ValidatorUpdates().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ValidatorUpdates().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ValidatorUpdates().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ValidatorUpdates, a, b);
    }
}
ValidatorUpdates.runtime = proto3;
ValidatorUpdates.typeName = "cosmos.staking.v1beta1.ValidatorUpdates";
ValidatorUpdates.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "updates", kind: "message", T: ValidatorUpdate, repeated: true },
]);
//# sourceMappingURL=staking_pb.js.map
// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmos/staking/v1beta1/tx.proto (package cosmos.staking.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Any, Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { CommissionRates, Description, Params } from "./staking_pb.js";
import { Coin } from "../../base/v1beta1/coin_pb.js";
/**
 * MsgCreateValidator defines a SDK message for creating a new validator.
 *
 * @generated from message cosmos.staking.v1beta1.MsgCreateValidator
 */
export class MsgCreateValidator extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string min_self_delegation = 3;
         */
        this.minSelfDelegation = "";
        /**
         * @generated from field: string delegator_address = 4;
         */
        this.delegatorAddress = "";
        /**
         * @generated from field: string validator_address = 5;
         */
        this.validatorAddress = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreateValidator().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreateValidator().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreateValidator().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCreateValidator, a, b);
    }
}
MsgCreateValidator.runtime = proto3;
MsgCreateValidator.typeName = "cosmos.staking.v1beta1.MsgCreateValidator";
MsgCreateValidator.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "description", kind: "message", T: Description },
    { no: 2, name: "commission", kind: "message", T: CommissionRates },
    { no: 3, name: "min_self_delegation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "pubkey", kind: "message", T: Any },
    { no: 7, name: "value", kind: "message", T: Coin },
]);
/**
 * MsgCreateValidatorResponse defines the Msg/CreateValidator response type.
 *
 * @generated from message cosmos.staking.v1beta1.MsgCreateValidatorResponse
 */
export class MsgCreateValidatorResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreateValidatorResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreateValidatorResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreateValidatorResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCreateValidatorResponse, a, b);
    }
}
MsgCreateValidatorResponse.runtime = proto3;
MsgCreateValidatorResponse.typeName = "cosmos.staking.v1beta1.MsgCreateValidatorResponse";
MsgCreateValidatorResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgEditValidator defines a SDK message for editing an existing validator.
 *
 * @generated from message cosmos.staking.v1beta1.MsgEditValidator
 */
export class MsgEditValidator extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string validator_address = 2;
         */
        this.validatorAddress = "";
        /**
         * We pass a reference to the new commission rate and min self delegation as
         * it's not mandatory to update. If not updated, the deserialized rate will be
         * zero with no way to distinguish if an update was intended.
         * REF: #2373
         *
         * @generated from field: string commission_rate = 3;
         */
        this.commissionRate = "";
        /**
         * @generated from field: string min_self_delegation = 4;
         */
        this.minSelfDelegation = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgEditValidator().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgEditValidator().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgEditValidator().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgEditValidator, a, b);
    }
}
MsgEditValidator.runtime = proto3;
MsgEditValidator.typeName = "cosmos.staking.v1beta1.MsgEditValidator";
MsgEditValidator.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "description", kind: "message", T: Description },
    { no: 2, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "commission_rate", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "min_self_delegation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgEditValidatorResponse defines the Msg/EditValidator response type.
 *
 * @generated from message cosmos.staking.v1beta1.MsgEditValidatorResponse
 */
export class MsgEditValidatorResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgEditValidatorResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgEditValidatorResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgEditValidatorResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgEditValidatorResponse, a, b);
    }
}
MsgEditValidatorResponse.runtime = proto3;
MsgEditValidatorResponse.typeName = "cosmos.staking.v1beta1.MsgEditValidatorResponse";
MsgEditValidatorResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 *
 * @generated from message cosmos.staking.v1beta1.MsgDelegate
 */
export class MsgDelegate extends Message {
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
        return new MsgDelegate().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgDelegate().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgDelegate().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgDelegate, a, b);
    }
}
MsgDelegate.runtime = proto3;
MsgDelegate.typeName = "cosmos.staking.v1beta1.MsgDelegate";
MsgDelegate.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: Coin },
]);
/**
 * MsgDelegateResponse defines the Msg/Delegate response type.
 *
 * @generated from message cosmos.staking.v1beta1.MsgDelegateResponse
 */
export class MsgDelegateResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgDelegateResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgDelegateResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgDelegateResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgDelegateResponse, a, b);
    }
}
MsgDelegateResponse.runtime = proto3;
MsgDelegateResponse.typeName = "cosmos.staking.v1beta1.MsgDelegateResponse";
MsgDelegateResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgBeginRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 *
 * @generated from message cosmos.staking.v1beta1.MsgBeginRedelegate
 */
export class MsgBeginRedelegate extends Message {
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
        return new MsgBeginRedelegate().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgBeginRedelegate().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgBeginRedelegate().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgBeginRedelegate, a, b);
    }
}
MsgBeginRedelegate.runtime = proto3;
MsgBeginRedelegate.typeName = "cosmos.staking.v1beta1.MsgBeginRedelegate";
MsgBeginRedelegate.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "validator_src_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "validator_dst_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "amount", kind: "message", T: Coin },
]);
/**
 * MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type.
 *
 * @generated from message cosmos.staking.v1beta1.MsgBeginRedelegateResponse
 */
export class MsgBeginRedelegateResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgBeginRedelegateResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgBeginRedelegateResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgBeginRedelegateResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgBeginRedelegateResponse, a, b);
    }
}
MsgBeginRedelegateResponse.runtime = proto3;
MsgBeginRedelegateResponse.typeName = "cosmos.staking.v1beta1.MsgBeginRedelegateResponse";
MsgBeginRedelegateResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "completion_time", kind: "message", T: Timestamp },
]);
/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 *
 * @generated from message cosmos.staking.v1beta1.MsgUndelegate
 */
export class MsgUndelegate extends Message {
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
        return new MsgUndelegate().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUndelegate().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUndelegate().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUndelegate, a, b);
    }
}
MsgUndelegate.runtime = proto3;
MsgUndelegate.typeName = "cosmos.staking.v1beta1.MsgUndelegate";
MsgUndelegate.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: Coin },
]);
/**
 * MsgUndelegateResponse defines the Msg/Undelegate response type.
 *
 * @generated from message cosmos.staking.v1beta1.MsgUndelegateResponse
 */
export class MsgUndelegateResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUndelegateResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUndelegateResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUndelegateResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUndelegateResponse, a, b);
    }
}
MsgUndelegateResponse.runtime = proto3;
MsgUndelegateResponse.typeName = "cosmos.staking.v1beta1.MsgUndelegateResponse";
MsgUndelegateResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "completion_time", kind: "message", T: Timestamp },
]);
/**
 * MsgCancelUnbondingDelegation defines the SDK message for performing a cancel unbonding delegation for delegator
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.staking.v1beta1.MsgCancelUnbondingDelegation
 */
export class MsgCancelUnbondingDelegation extends Message {
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
        /**
         * creation_height is the height which the unbonding took place.
         *
         * @generated from field: int64 creation_height = 4;
         */
        this.creationHeight = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCancelUnbondingDelegation().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCancelUnbondingDelegation().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCancelUnbondingDelegation().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCancelUnbondingDelegation, a, b);
    }
}
MsgCancelUnbondingDelegation.runtime = proto3;
MsgCancelUnbondingDelegation.typeName = "cosmos.staking.v1beta1.MsgCancelUnbondingDelegation";
MsgCancelUnbondingDelegation.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: Coin },
    { no: 4, name: "creation_height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
]);
/**
 * MsgCancelUnbondingDelegationResponse
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.staking.v1beta1.MsgCancelUnbondingDelegationResponse
 */
export class MsgCancelUnbondingDelegationResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCancelUnbondingDelegationResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCancelUnbondingDelegationResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCancelUnbondingDelegationResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCancelUnbondingDelegationResponse, a, b);
    }
}
MsgCancelUnbondingDelegationResponse.runtime = proto3;
MsgCancelUnbondingDelegationResponse.typeName = "cosmos.staking.v1beta1.MsgCancelUnbondingDelegationResponse";
MsgCancelUnbondingDelegationResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.staking.v1beta1.MsgUpdateParams
 */
export class MsgUpdateParams extends Message {
    constructor(data) {
        super();
        /**
         * authority is the address that controls the module (defaults to x/gov unless overwritten).
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
MsgUpdateParams.typeName = "cosmos.staking.v1beta1.MsgUpdateParams";
MsgUpdateParams.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "params", kind: "message", T: Params },
]);
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.staking.v1beta1.MsgUpdateParamsResponse
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
MsgUpdateParamsResponse.typeName = "cosmos.staking.v1beta1.MsgUpdateParamsResponse";
MsgUpdateParamsResponse.fields = proto3.util.newFieldList(() => []);
//# sourceMappingURL=tx_pb.js.map
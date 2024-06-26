import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../base/v1beta1/coin_pb.js";
/**
 * AuthorizationType defines the type of staking module authorization type
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from enum cosmos.staking.v1beta1.AuthorizationType
 */
export declare enum AuthorizationType {
    /**
     * AUTHORIZATION_TYPE_UNSPECIFIED specifies an unknown authorization type
     *
     * @generated from enum value: AUTHORIZATION_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * AUTHORIZATION_TYPE_DELEGATE defines an authorization type for Msg/Delegate
     *
     * @generated from enum value: AUTHORIZATION_TYPE_DELEGATE = 1;
     */
    DELEGATE = 1,
    /**
     * AUTHORIZATION_TYPE_UNDELEGATE defines an authorization type for Msg/Undelegate
     *
     * @generated from enum value: AUTHORIZATION_TYPE_UNDELEGATE = 2;
     */
    UNDELEGATE = 2,
    /**
     * AUTHORIZATION_TYPE_REDELEGATE defines an authorization type for Msg/BeginRedelegate
     *
     * @generated from enum value: AUTHORIZATION_TYPE_REDELEGATE = 3;
     */
    REDELEGATE = 3
}
/**
 * StakeAuthorization defines authorization for delegate/undelegate/redelegate.
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from message cosmos.staking.v1beta1.StakeAuthorization
 */
export declare class StakeAuthorization extends Message<StakeAuthorization> {
    /**
     * max_tokens specifies the maximum amount of tokens can be delegate to a validator. If it is
     * empty, there is no spend limit and any amount of coins can be delegated.
     *
     * @generated from field: cosmos.base.v1beta1.Coin max_tokens = 1;
     */
    maxTokens?: Coin;
    /**
     * validators is the oneof that represents either allow_list or deny_list
     *
     * @generated from oneof cosmos.staking.v1beta1.StakeAuthorization.validators
     */
    validators: {
        /**
         * allow_list specifies list of validator addresses to whom grantee can delegate tokens on behalf of granter's
         * account.
         *
         * @generated from field: cosmos.staking.v1beta1.StakeAuthorization.Validators allow_list = 2;
         */
        value: StakeAuthorization_Validators;
        case: "allowList";
    } | {
        /**
         * deny_list specifies list of validator addresses to whom grantee can not delegate tokens.
         *
         * @generated from field: cosmos.staking.v1beta1.StakeAuthorization.Validators deny_list = 3;
         */
        value: StakeAuthorization_Validators;
        case: "denyList";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * authorization_type defines one of AuthorizationType.
     *
     * @generated from field: cosmos.staking.v1beta1.AuthorizationType authorization_type = 4;
     */
    authorizationType: AuthorizationType;
    constructor(data?: PartialMessage<StakeAuthorization>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.StakeAuthorization";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StakeAuthorization;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StakeAuthorization;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StakeAuthorization;
    static equals(a: StakeAuthorization | PlainMessage<StakeAuthorization> | undefined, b: StakeAuthorization | PlainMessage<StakeAuthorization> | undefined): boolean;
}
/**
 * Validators defines list of validator addresses.
 *
 * @generated from message cosmos.staking.v1beta1.StakeAuthorization.Validators
 */
export declare class StakeAuthorization_Validators extends Message<StakeAuthorization_Validators> {
    /**
     * @generated from field: repeated string address = 1;
     */
    address: string[];
    constructor(data?: PartialMessage<StakeAuthorization_Validators>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.StakeAuthorization.Validators";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StakeAuthorization_Validators;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StakeAuthorization_Validators;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StakeAuthorization_Validators;
    static equals(a: StakeAuthorization_Validators | PlainMessage<StakeAuthorization_Validators> | undefined, b: StakeAuthorization_Validators | PlainMessage<StakeAuthorization_Validators> | undefined): boolean;
}
//# sourceMappingURL=authz_pb.d.ts.map
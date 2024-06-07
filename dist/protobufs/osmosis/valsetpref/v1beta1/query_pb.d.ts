import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ValidatorPreference } from "./state_pb.js";
/**
 * Request type for UserValidatorPreferences.
 *
 * @generated from message osmosis.valsetpref.v1beta1.UserValidatorPreferencesRequest
 */
export declare class UserValidatorPreferencesRequest extends Message<UserValidatorPreferencesRequest> {
    /**
     * user account address
     *
     * @generated from field: string address = 1;
     */
    address: string;
    constructor(data?: PartialMessage<UserValidatorPreferencesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.valsetpref.v1beta1.UserValidatorPreferencesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserValidatorPreferencesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserValidatorPreferencesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserValidatorPreferencesRequest;
    static equals(a: UserValidatorPreferencesRequest | PlainMessage<UserValidatorPreferencesRequest> | undefined, b: UserValidatorPreferencesRequest | PlainMessage<UserValidatorPreferencesRequest> | undefined): boolean;
}
/**
 * Response type the QueryUserValidatorPreferences query request
 *
 * @generated from message osmosis.valsetpref.v1beta1.UserValidatorPreferencesResponse
 */
export declare class UserValidatorPreferencesResponse extends Message<UserValidatorPreferencesResponse> {
    /**
     * @generated from field: repeated osmosis.valsetpref.v1beta1.ValidatorPreference preferences = 1;
     */
    preferences: ValidatorPreference[];
    constructor(data?: PartialMessage<UserValidatorPreferencesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.valsetpref.v1beta1.UserValidatorPreferencesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserValidatorPreferencesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserValidatorPreferencesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserValidatorPreferencesResponse;
    static equals(a: UserValidatorPreferencesResponse | PlainMessage<UserValidatorPreferencesResponse> | undefined, b: UserValidatorPreferencesResponse | PlainMessage<UserValidatorPreferencesResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map
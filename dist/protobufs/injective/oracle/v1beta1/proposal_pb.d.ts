import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { BandIBCParams, BandOracleRequest } from "./oracle_pb.js";
/**
 * @generated from message injective.oracle.v1beta1.GrantBandOraclePrivilegeProposal
 */
export declare class GrantBandOraclePrivilegeProposal extends Message<GrantBandOraclePrivilegeProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: repeated string relayers = 3;
     */
    relayers: string[];
    constructor(data?: PartialMessage<GrantBandOraclePrivilegeProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.GrantBandOraclePrivilegeProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GrantBandOraclePrivilegeProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GrantBandOraclePrivilegeProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GrantBandOraclePrivilegeProposal;
    static equals(a: GrantBandOraclePrivilegeProposal | PlainMessage<GrantBandOraclePrivilegeProposal> | undefined, b: GrantBandOraclePrivilegeProposal | PlainMessage<GrantBandOraclePrivilegeProposal> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.RevokeBandOraclePrivilegeProposal
 */
export declare class RevokeBandOraclePrivilegeProposal extends Message<RevokeBandOraclePrivilegeProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: repeated string relayers = 3;
     */
    relayers: string[];
    constructor(data?: PartialMessage<RevokeBandOraclePrivilegeProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.RevokeBandOraclePrivilegeProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RevokeBandOraclePrivilegeProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RevokeBandOraclePrivilegeProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RevokeBandOraclePrivilegeProposal;
    static equals(a: RevokeBandOraclePrivilegeProposal | PlainMessage<RevokeBandOraclePrivilegeProposal> | undefined, b: RevokeBandOraclePrivilegeProposal | PlainMessage<RevokeBandOraclePrivilegeProposal> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.GrantPriceFeederPrivilegeProposal
 */
export declare class GrantPriceFeederPrivilegeProposal extends Message<GrantPriceFeederPrivilegeProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: string base = 3;
     */
    base: string;
    /**
     * @generated from field: string quote = 4;
     */
    quote: string;
    /**
     * @generated from field: repeated string relayers = 5;
     */
    relayers: string[];
    constructor(data?: PartialMessage<GrantPriceFeederPrivilegeProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.GrantPriceFeederPrivilegeProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GrantPriceFeederPrivilegeProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GrantPriceFeederPrivilegeProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GrantPriceFeederPrivilegeProposal;
    static equals(a: GrantPriceFeederPrivilegeProposal | PlainMessage<GrantPriceFeederPrivilegeProposal> | undefined, b: GrantPriceFeederPrivilegeProposal | PlainMessage<GrantPriceFeederPrivilegeProposal> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.GrantProviderPrivilegeProposal
 */
export declare class GrantProviderPrivilegeProposal extends Message<GrantProviderPrivilegeProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: string provider = 3;
     */
    provider: string;
    /**
     * @generated from field: repeated string relayers = 4;
     */
    relayers: string[];
    constructor(data?: PartialMessage<GrantProviderPrivilegeProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.GrantProviderPrivilegeProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GrantProviderPrivilegeProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GrantProviderPrivilegeProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GrantProviderPrivilegeProposal;
    static equals(a: GrantProviderPrivilegeProposal | PlainMessage<GrantProviderPrivilegeProposal> | undefined, b: GrantProviderPrivilegeProposal | PlainMessage<GrantProviderPrivilegeProposal> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.RevokeProviderPrivilegeProposal
 */
export declare class RevokeProviderPrivilegeProposal extends Message<RevokeProviderPrivilegeProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: string provider = 3;
     */
    provider: string;
    /**
     * @generated from field: repeated string relayers = 5;
     */
    relayers: string[];
    constructor(data?: PartialMessage<RevokeProviderPrivilegeProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.RevokeProviderPrivilegeProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RevokeProviderPrivilegeProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RevokeProviderPrivilegeProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RevokeProviderPrivilegeProposal;
    static equals(a: RevokeProviderPrivilegeProposal | PlainMessage<RevokeProviderPrivilegeProposal> | undefined, b: RevokeProviderPrivilegeProposal | PlainMessage<RevokeProviderPrivilegeProposal> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.RevokePriceFeederPrivilegeProposal
 */
export declare class RevokePriceFeederPrivilegeProposal extends Message<RevokePriceFeederPrivilegeProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: string base = 3;
     */
    base: string;
    /**
     * @generated from field: string quote = 4;
     */
    quote: string;
    /**
     * @generated from field: repeated string relayers = 5;
     */
    relayers: string[];
    constructor(data?: PartialMessage<RevokePriceFeederPrivilegeProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.RevokePriceFeederPrivilegeProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RevokePriceFeederPrivilegeProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RevokePriceFeederPrivilegeProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RevokePriceFeederPrivilegeProposal;
    static equals(a: RevokePriceFeederPrivilegeProposal | PlainMessage<RevokePriceFeederPrivilegeProposal> | undefined, b: RevokePriceFeederPrivilegeProposal | PlainMessage<RevokePriceFeederPrivilegeProposal> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.AuthorizeBandOracleRequestProposal
 */
export declare class AuthorizeBandOracleRequestProposal extends Message<AuthorizeBandOracleRequestProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: injective.oracle.v1beta1.BandOracleRequest request = 3;
     */
    request?: BandOracleRequest;
    constructor(data?: PartialMessage<AuthorizeBandOracleRequestProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.AuthorizeBandOracleRequestProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthorizeBandOracleRequestProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthorizeBandOracleRequestProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthorizeBandOracleRequestProposal;
    static equals(a: AuthorizeBandOracleRequestProposal | PlainMessage<AuthorizeBandOracleRequestProposal> | undefined, b: AuthorizeBandOracleRequestProposal | PlainMessage<AuthorizeBandOracleRequestProposal> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.UpdateBandOracleRequestProposal
 */
export declare class UpdateBandOracleRequestProposal extends Message<UpdateBandOracleRequestProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: repeated uint64 delete_request_ids = 3;
     */
    deleteRequestIds: bigint[];
    /**
     * @generated from field: injective.oracle.v1beta1.BandOracleRequest update_oracle_request = 4;
     */
    updateOracleRequest?: BandOracleRequest;
    constructor(data?: PartialMessage<UpdateBandOracleRequestProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.UpdateBandOracleRequestProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateBandOracleRequestProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateBandOracleRequestProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateBandOracleRequestProposal;
    static equals(a: UpdateBandOracleRequestProposal | PlainMessage<UpdateBandOracleRequestProposal> | undefined, b: UpdateBandOracleRequestProposal | PlainMessage<UpdateBandOracleRequestProposal> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.EnableBandIBCProposal
 */
export declare class EnableBandIBCProposal extends Message<EnableBandIBCProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: injective.oracle.v1beta1.BandIBCParams band_ibc_params = 3;
     */
    bandIbcParams?: BandIBCParams;
    constructor(data?: PartialMessage<EnableBandIBCProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.EnableBandIBCProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnableBandIBCProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnableBandIBCProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnableBandIBCProposal;
    static equals(a: EnableBandIBCProposal | PlainMessage<EnableBandIBCProposal> | undefined, b: EnableBandIBCProposal | PlainMessage<EnableBandIBCProposal> | undefined): boolean;
}
//# sourceMappingURL=proposal_pb.d.ts.map
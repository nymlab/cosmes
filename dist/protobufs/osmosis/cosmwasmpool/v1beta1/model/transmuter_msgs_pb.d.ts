import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * ===================== JoinPoolExecuteMsg
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.EmptyRequest
 */
export declare class EmptyRequest extends Message<EmptyRequest> {
    constructor(data?: PartialMessage<EmptyRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.EmptyRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EmptyRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EmptyRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EmptyRequest;
    static equals(a: EmptyRequest | PlainMessage<EmptyRequest> | undefined, b: EmptyRequest | PlainMessage<EmptyRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.JoinPoolExecuteMsgRequest
 */
export declare class JoinPoolExecuteMsgRequest extends Message<JoinPoolExecuteMsgRequest> {
    /**
     * join_pool is the structure containing all request fields of the join pool
     * execute message.
     *
     * @generated from field: osmosis.cosmwasmpool.v1beta1.EmptyRequest join_pool = 1;
     */
    joinPool?: EmptyRequest;
    constructor(data?: PartialMessage<JoinPoolExecuteMsgRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.JoinPoolExecuteMsgRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): JoinPoolExecuteMsgRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): JoinPoolExecuteMsgRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): JoinPoolExecuteMsgRequest;
    static equals(a: JoinPoolExecuteMsgRequest | PlainMessage<JoinPoolExecuteMsgRequest> | undefined, b: JoinPoolExecuteMsgRequest | PlainMessage<JoinPoolExecuteMsgRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.JoinPoolExecuteMsgResponse
 */
export declare class JoinPoolExecuteMsgResponse extends Message<JoinPoolExecuteMsgResponse> {
    constructor(data?: PartialMessage<JoinPoolExecuteMsgResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.JoinPoolExecuteMsgResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): JoinPoolExecuteMsgResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): JoinPoolExecuteMsgResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): JoinPoolExecuteMsgResponse;
    static equals(a: JoinPoolExecuteMsgResponse | PlainMessage<JoinPoolExecuteMsgResponse> | undefined, b: JoinPoolExecuteMsgResponse | PlainMessage<JoinPoolExecuteMsgResponse> | undefined): boolean;
}
/**
 * ===================== ExitPoolExecuteMsg
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.ExitPoolExecuteMsgRequest
 */
export declare class ExitPoolExecuteMsgRequest extends Message<ExitPoolExecuteMsgRequest> {
    /**
     * exit_pool is the structure containing all request fields of the exit pool
     * execute message.
     *
     * @generated from field: osmosis.cosmwasmpool.v1beta1.EmptyRequest exit_pool = 1;
     */
    exitPool?: EmptyRequest;
    constructor(data?: PartialMessage<ExitPoolExecuteMsgRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.ExitPoolExecuteMsgRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExitPoolExecuteMsgRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExitPoolExecuteMsgRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExitPoolExecuteMsgRequest;
    static equals(a: ExitPoolExecuteMsgRequest | PlainMessage<ExitPoolExecuteMsgRequest> | undefined, b: ExitPoolExecuteMsgRequest | PlainMessage<ExitPoolExecuteMsgRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.ExitPoolExecuteMsgResponse
 */
export declare class ExitPoolExecuteMsgResponse extends Message<ExitPoolExecuteMsgResponse> {
    constructor(data?: PartialMessage<ExitPoolExecuteMsgResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.ExitPoolExecuteMsgResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExitPoolExecuteMsgResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExitPoolExecuteMsgResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExitPoolExecuteMsgResponse;
    static equals(a: ExitPoolExecuteMsgResponse | PlainMessage<ExitPoolExecuteMsgResponse> | undefined, b: ExitPoolExecuteMsgResponse | PlainMessage<ExitPoolExecuteMsgResponse> | undefined): boolean;
}
//# sourceMappingURL=transmuter_msgs_pb.d.ts.map
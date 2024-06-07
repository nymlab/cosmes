import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * IDSet represents a set of IDs
 *
 * @generated from message injective.peggy.v1.IDSet
 */
export declare class IDSet extends Message<IDSet> {
    /**
     * @generated from field: repeated uint64 ids = 1;
     */
    ids: bigint[];
    constructor(data?: PartialMessage<IDSet>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.IDSet";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IDSet;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IDSet;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IDSet;
    static equals(a: IDSet | PlainMessage<IDSet> | undefined, b: IDSet | PlainMessage<IDSet> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.BatchFees
 */
export declare class BatchFees extends Message<BatchFees> {
    /**
     * @generated from field: string token = 1;
     */
    token: string;
    /**
     * @generated from field: string total_fees = 2;
     */
    totalFees: string;
    constructor(data?: PartialMessage<BatchFees>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.BatchFees";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BatchFees;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BatchFees;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BatchFees;
    static equals(a: BatchFees | PlainMessage<BatchFees> | undefined, b: BatchFees | PlainMessage<BatchFees> | undefined): boolean;
}
//# sourceMappingURL=pool_pb.d.ts.map
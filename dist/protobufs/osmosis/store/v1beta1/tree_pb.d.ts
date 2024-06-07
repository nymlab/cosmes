import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message osmosis.store.v1beta1.Node
 */
export declare class Node extends Message<Node> {
    /**
     * @generated from field: repeated osmosis.store.v1beta1.Child children = 1;
     */
    children: Child[];
    constructor(data?: PartialMessage<Node>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.store.v1beta1.Node";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Node;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Node;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Node;
    static equals(a: Node | PlainMessage<Node> | undefined, b: Node | PlainMessage<Node> | undefined): boolean;
}
/**
 * @generated from message osmosis.store.v1beta1.Child
 */
export declare class Child extends Message<Child> {
    /**
     * @generated from field: bytes index = 1;
     */
    index: Uint8Array;
    /**
     * @generated from field: string accumulation = 2;
     */
    accumulation: string;
    constructor(data?: PartialMessage<Child>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.store.v1beta1.Child";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Child;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Child;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Child;
    static equals(a: Child | PlainMessage<Child> | undefined, b: Child | PlainMessage<Child> | undefined): boolean;
}
/**
 * @generated from message osmosis.store.v1beta1.Leaf
 */
export declare class Leaf extends Message<Leaf> {
    /**
     * @generated from field: osmosis.store.v1beta1.Child leaf = 1;
     */
    leaf?: Child;
    constructor(data?: PartialMessage<Leaf>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.store.v1beta1.Leaf";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Leaf;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Leaf;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Leaf;
    static equals(a: Leaf | PlainMessage<Leaf> | undefined, b: Leaf | PlainMessage<Leaf> | undefined): boolean;
}
//# sourceMappingURL=tree_pb.d.ts.map
import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message tendermint.crypto.Proof
 */
export declare class Proof extends Message<Proof> {
    /**
     * @generated from field: int64 total = 1;
     */
    total: bigint;
    /**
     * @generated from field: int64 index = 2;
     */
    index: bigint;
    /**
     * @generated from field: bytes leaf_hash = 3;
     */
    leafHash: Uint8Array;
    /**
     * @generated from field: repeated bytes aunts = 4;
     */
    aunts: Uint8Array[];
    constructor(data?: PartialMessage<Proof>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.crypto.Proof";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Proof;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Proof;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Proof;
    static equals(a: Proof | PlainMessage<Proof> | undefined, b: Proof | PlainMessage<Proof> | undefined): boolean;
}
/**
 * @generated from message tendermint.crypto.ValueOp
 */
export declare class ValueOp extends Message<ValueOp> {
    /**
     * Encoded in ProofOp.Key.
     *
     * @generated from field: bytes key = 1;
     */
    key: Uint8Array;
    /**
     * To encode in ProofOp.Data
     *
     * @generated from field: tendermint.crypto.Proof proof = 2;
     */
    proof?: Proof;
    constructor(data?: PartialMessage<ValueOp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.crypto.ValueOp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValueOp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValueOp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValueOp;
    static equals(a: ValueOp | PlainMessage<ValueOp> | undefined, b: ValueOp | PlainMessage<ValueOp> | undefined): boolean;
}
/**
 * @generated from message tendermint.crypto.DominoOp
 */
export declare class DominoOp extends Message<DominoOp> {
    /**
     * @generated from field: string key = 1;
     */
    key: string;
    /**
     * @generated from field: string input = 2;
     */
    input: string;
    /**
     * @generated from field: string output = 3;
     */
    output: string;
    constructor(data?: PartialMessage<DominoOp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.crypto.DominoOp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DominoOp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DominoOp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DominoOp;
    static equals(a: DominoOp | PlainMessage<DominoOp> | undefined, b: DominoOp | PlainMessage<DominoOp> | undefined): boolean;
}
/**
 * ProofOp defines an operation used for calculating Merkle root
 * The data could be arbitrary format, providing nessecary data
 * for example neighbouring node hash
 *
 * @generated from message tendermint.crypto.ProofOp
 */
export declare class ProofOp extends Message<ProofOp> {
    /**
     * @generated from field: string type = 1;
     */
    type: string;
    /**
     * @generated from field: bytes key = 2;
     */
    key: Uint8Array;
    /**
     * @generated from field: bytes data = 3;
     */
    data: Uint8Array;
    constructor(data?: PartialMessage<ProofOp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.crypto.ProofOp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProofOp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProofOp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProofOp;
    static equals(a: ProofOp | PlainMessage<ProofOp> | undefined, b: ProofOp | PlainMessage<ProofOp> | undefined): boolean;
}
/**
 * ProofOps is Merkle proof defined by the list of ProofOps
 *
 * @generated from message tendermint.crypto.ProofOps
 */
export declare class ProofOps extends Message<ProofOps> {
    /**
     * @generated from field: repeated tendermint.crypto.ProofOp ops = 1;
     */
    ops: ProofOp[];
    constructor(data?: PartialMessage<ProofOps>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.crypto.ProofOps";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProofOps;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProofOps;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProofOps;
    static equals(a: ProofOps | PlainMessage<ProofOps> | undefined, b: ProofOps | PlainMessage<ProofOps> | undefined): boolean;
}
//# sourceMappingURL=proof_pb.d.ts.map
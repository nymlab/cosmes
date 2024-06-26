import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * PublicKey defines the keys available for use with Validators
 *
 * @generated from message tendermint.crypto.PublicKey
 */
export declare class PublicKey extends Message<PublicKey> {
    /**
     * @generated from oneof tendermint.crypto.PublicKey.sum
     */
    sum: {
        /**
         * @generated from field: bytes ed25519 = 1;
         */
        value: Uint8Array;
        case: "ed25519";
    } | {
        /**
         * @generated from field: bytes secp256k1 = 2;
         */
        value: Uint8Array;
        case: "secp256k1";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<PublicKey>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.crypto.PublicKey";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PublicKey;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PublicKey;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PublicKey;
    static equals(a: PublicKey | PlainMessage<PublicKey> | undefined, b: PublicKey | PlainMessage<PublicKey> | undefined): boolean;
}
//# sourceMappingURL=keys_pb.d.ts.map
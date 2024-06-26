import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
/**
 * Class defines the class of the nft type.
 *
 * @generated from message cosmos.nft.v1beta1.Class
 */
export declare class Class extends Message<Class> {
    /**
     * id defines the unique identifier of the NFT classification, similar to the contract address of ERC721
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * name defines the human-readable name of the NFT classification. Optional
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * symbol is an abbreviated name for nft classification. Optional
     *
     * @generated from field: string symbol = 3;
     */
    symbol: string;
    /**
     * description is a brief description of nft classification. Optional
     *
     * @generated from field: string description = 4;
     */
    description: string;
    /**
     * uri for the class metadata stored off chain. It can define schema for Class and NFT `Data` attributes. Optional
     *
     * @generated from field: string uri = 5;
     */
    uri: string;
    /**
     * uri_hash is a hash of the document pointed by uri. Optional
     *
     * @generated from field: string uri_hash = 6;
     */
    uriHash: string;
    /**
     * data is the app specific metadata of the NFT class. Optional
     *
     * @generated from field: google.protobuf.Any data = 7;
     */
    data?: Any;
    constructor(data?: PartialMessage<Class>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.nft.v1beta1.Class";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Class;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Class;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Class;
    static equals(a: Class | PlainMessage<Class> | undefined, b: Class | PlainMessage<Class> | undefined): boolean;
}
/**
 * NFT defines the NFT.
 *
 * @generated from message cosmos.nft.v1beta1.NFT
 */
export declare class NFT extends Message<NFT> {
    /**
     * class_id associated with the NFT, similar to the contract address of ERC721
     *
     * @generated from field: string class_id = 1;
     */
    classId: string;
    /**
     * id is a unique identifier of the NFT
     *
     * @generated from field: string id = 2;
     */
    id: string;
    /**
     * uri for the NFT metadata stored off chain
     *
     * @generated from field: string uri = 3;
     */
    uri: string;
    /**
     * uri_hash is a hash of the document pointed by uri
     *
     * @generated from field: string uri_hash = 4;
     */
    uriHash: string;
    /**
     * data is an app specific data of the NFT. Optional
     *
     * @generated from field: google.protobuf.Any data = 10;
     */
    data?: Any;
    constructor(data?: PartialMessage<NFT>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.nft.v1beta1.NFT";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NFT;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NFT;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NFT;
    static equals(a: NFT | PlainMessage<NFT> | undefined, b: NFT | PlainMessage<NFT> | undefined): boolean;
}
//# sourceMappingURL=nft_pb.d.ts.map
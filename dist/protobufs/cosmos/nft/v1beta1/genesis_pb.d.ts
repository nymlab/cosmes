import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Class, NFT } from "./nft_pb.js";
/**
 * GenesisState defines the nft module's genesis state.
 *
 * @generated from message cosmos.nft.v1beta1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * class defines the class of the nft type.
     *
     * @generated from field: repeated cosmos.nft.v1beta1.Class classes = 1;
     */
    classes: Class[];
    /**
     * entry defines all nft owned by a person.
     *
     * @generated from field: repeated cosmos.nft.v1beta1.Entry entries = 2;
     */
    entries: Entry[];
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.nft.v1beta1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
/**
 * Entry Defines all nft owned by a person
 *
 * @generated from message cosmos.nft.v1beta1.Entry
 */
export declare class Entry extends Message<Entry> {
    /**
     * owner is the owner address of the following nft
     *
     * @generated from field: string owner = 1;
     */
    owner: string;
    /**
     * nfts is a group of nfts of the same owner
     *
     * @generated from field: repeated cosmos.nft.v1beta1.NFT nfts = 2;
     */
    nfts: NFT[];
    constructor(data?: PartialMessage<Entry>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.nft.v1beta1.Entry";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Entry;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Entry;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Entry;
    static equals(a: Entry | PlainMessage<Entry> | undefined, b: Entry | PlainMessage<Entry> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map
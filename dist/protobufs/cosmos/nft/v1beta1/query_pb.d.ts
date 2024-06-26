import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination_pb.js";
import { Class, NFT } from "./nft_pb.js";
/**
 * QueryBalanceRequest is the request type for the Query/Balance RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QueryBalanceRequest
 */
export declare class QueryBalanceRequest extends Message<QueryBalanceRequest> {
    /**
     * class_id associated with the nft
     *
     * @generated from field: string class_id = 1;
     */
    classId: string;
    /**
     * owner is the owner address of the nft
     *
     * @generated from field: string owner = 2;
     */
    owner: string;
    constructor(data?: PartialMessage<QueryBalanceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.nft.v1beta1.QueryBalanceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBalanceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBalanceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBalanceRequest;
    static equals(a: QueryBalanceRequest | PlainMessage<QueryBalanceRequest> | undefined, b: QueryBalanceRequest | PlainMessage<QueryBalanceRequest> | undefined): boolean;
}
/**
 * QueryBalanceResponse is the response type for the Query/Balance RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QueryBalanceResponse
 */
export declare class QueryBalanceResponse extends Message<QueryBalanceResponse> {
    /**
     * amount is the number of all NFTs of a given class owned by the owner
     *
     * @generated from field: uint64 amount = 1;
     */
    amount: bigint;
    constructor(data?: PartialMessage<QueryBalanceResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.nft.v1beta1.QueryBalanceResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBalanceResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBalanceResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBalanceResponse;
    static equals(a: QueryBalanceResponse | PlainMessage<QueryBalanceResponse> | undefined, b: QueryBalanceResponse | PlainMessage<QueryBalanceResponse> | undefined): boolean;
}
/**
 * QueryOwnerRequest is the request type for the Query/Owner RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QueryOwnerRequest
 */
export declare class QueryOwnerRequest extends Message<QueryOwnerRequest> {
    /**
     * class_id associated with the nft
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
    constructor(data?: PartialMessage<QueryOwnerRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.nft.v1beta1.QueryOwnerRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryOwnerRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryOwnerRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryOwnerRequest;
    static equals(a: QueryOwnerRequest | PlainMessage<QueryOwnerRequest> | undefined, b: QueryOwnerRequest | PlainMessage<QueryOwnerRequest> | undefined): boolean;
}
/**
 * QueryOwnerResponse is the response type for the Query/Owner RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QueryOwnerResponse
 */
export declare class QueryOwnerResponse extends Message<QueryOwnerResponse> {
    /**
     * owner is the owner address of the nft
     *
     * @generated from field: string owner = 1;
     */
    owner: string;
    constructor(data?: PartialMessage<QueryOwnerResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.nft.v1beta1.QueryOwnerResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryOwnerResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryOwnerResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryOwnerResponse;
    static equals(a: QueryOwnerResponse | PlainMessage<QueryOwnerResponse> | undefined, b: QueryOwnerResponse | PlainMessage<QueryOwnerResponse> | undefined): boolean;
}
/**
 * QuerySupplyRequest is the request type for the Query/Supply RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QuerySupplyRequest
 */
export declare class QuerySupplyRequest extends Message<QuerySupplyRequest> {
    /**
     * class_id associated with the nft
     *
     * @generated from field: string class_id = 1;
     */
    classId: string;
    constructor(data?: PartialMessage<QuerySupplyRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.nft.v1beta1.QuerySupplyRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySupplyRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySupplyRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySupplyRequest;
    static equals(a: QuerySupplyRequest | PlainMessage<QuerySupplyRequest> | undefined, b: QuerySupplyRequest | PlainMessage<QuerySupplyRequest> | undefined): boolean;
}
/**
 * QuerySupplyResponse is the response type for the Query/Supply RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QuerySupplyResponse
 */
export declare class QuerySupplyResponse extends Message<QuerySupplyResponse> {
    /**
     * amount is the number of all NFTs from the given class
     *
     * @generated from field: uint64 amount = 1;
     */
    amount: bigint;
    constructor(data?: PartialMessage<QuerySupplyResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.nft.v1beta1.QuerySupplyResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySupplyResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySupplyResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySupplyResponse;
    static equals(a: QuerySupplyResponse | PlainMessage<QuerySupplyResponse> | undefined, b: QuerySupplyResponse | PlainMessage<QuerySupplyResponse> | undefined): boolean;
}
/**
 * QueryNFTstRequest is the request type for the Query/NFTs RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QueryNFTsRequest
 */
export declare class QueryNFTsRequest extends Message<QueryNFTsRequest> {
    /**
     * class_id associated with the nft
     *
     * @generated from field: string class_id = 1;
     */
    classId: string;
    /**
     * owner is the owner address of the nft
     *
     * @generated from field: string owner = 2;
     */
    owner: string;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 3;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryNFTsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.nft.v1beta1.QueryNFTsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryNFTsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryNFTsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryNFTsRequest;
    static equals(a: QueryNFTsRequest | PlainMessage<QueryNFTsRequest> | undefined, b: QueryNFTsRequest | PlainMessage<QueryNFTsRequest> | undefined): boolean;
}
/**
 * QueryNFTsResponse is the response type for the Query/NFTs RPC methods
 *
 * @generated from message cosmos.nft.v1beta1.QueryNFTsResponse
 */
export declare class QueryNFTsResponse extends Message<QueryNFTsResponse> {
    /**
     * NFT defines the NFT
     *
     * @generated from field: repeated cosmos.nft.v1beta1.NFT nfts = 1;
     */
    nfts: NFT[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryNFTsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.nft.v1beta1.QueryNFTsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryNFTsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryNFTsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryNFTsResponse;
    static equals(a: QueryNFTsResponse | PlainMessage<QueryNFTsResponse> | undefined, b: QueryNFTsResponse | PlainMessage<QueryNFTsResponse> | undefined): boolean;
}
/**
 * QueryNFTRequest is the request type for the Query/NFT RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QueryNFTRequest
 */
export declare class QueryNFTRequest extends Message<QueryNFTRequest> {
    /**
     * class_id associated with the nft
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
    constructor(data?: PartialMessage<QueryNFTRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.nft.v1beta1.QueryNFTRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryNFTRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryNFTRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryNFTRequest;
    static equals(a: QueryNFTRequest | PlainMessage<QueryNFTRequest> | undefined, b: QueryNFTRequest | PlainMessage<QueryNFTRequest> | undefined): boolean;
}
/**
 * QueryNFTResponse is the response type for the Query/NFT RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QueryNFTResponse
 */
export declare class QueryNFTResponse extends Message<QueryNFTResponse> {
    /**
     * owner is the owner address of the nft
     *
     * @generated from field: cosmos.nft.v1beta1.NFT nft = 1;
     */
    nft?: NFT;
    constructor(data?: PartialMessage<QueryNFTResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.nft.v1beta1.QueryNFTResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryNFTResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryNFTResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryNFTResponse;
    static equals(a: QueryNFTResponse | PlainMessage<QueryNFTResponse> | undefined, b: QueryNFTResponse | PlainMessage<QueryNFTResponse> | undefined): boolean;
}
/**
 * QueryClassRequest is the request type for the Query/Class RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QueryClassRequest
 */
export declare class QueryClassRequest extends Message<QueryClassRequest> {
    /**
     * class_id associated with the nft
     *
     * @generated from field: string class_id = 1;
     */
    classId: string;
    constructor(data?: PartialMessage<QueryClassRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.nft.v1beta1.QueryClassRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryClassRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryClassRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryClassRequest;
    static equals(a: QueryClassRequest | PlainMessage<QueryClassRequest> | undefined, b: QueryClassRequest | PlainMessage<QueryClassRequest> | undefined): boolean;
}
/**
 * QueryClassResponse is the response type for the Query/Class RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QueryClassResponse
 */
export declare class QueryClassResponse extends Message<QueryClassResponse> {
    /**
     * class defines the class of the nft type.
     *
     * @generated from field: cosmos.nft.v1beta1.Class class = 1;
     */
    class?: Class;
    constructor(data?: PartialMessage<QueryClassResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.nft.v1beta1.QueryClassResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryClassResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryClassResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryClassResponse;
    static equals(a: QueryClassResponse | PlainMessage<QueryClassResponse> | undefined, b: QueryClassResponse | PlainMessage<QueryClassResponse> | undefined): boolean;
}
/**
 * QueryClassesRequest is the request type for the Query/Classes RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QueryClassesRequest
 */
export declare class QueryClassesRequest extends Message<QueryClassesRequest> {
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryClassesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.nft.v1beta1.QueryClassesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryClassesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryClassesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryClassesRequest;
    static equals(a: QueryClassesRequest | PlainMessage<QueryClassesRequest> | undefined, b: QueryClassesRequest | PlainMessage<QueryClassesRequest> | undefined): boolean;
}
/**
 * QueryClassesResponse is the response type for the Query/Classes RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QueryClassesResponse
 */
export declare class QueryClassesResponse extends Message<QueryClassesResponse> {
    /**
     * class defines the class of the nft type.
     *
     * @generated from field: repeated cosmos.nft.v1beta1.Class classes = 1;
     */
    classes: Class[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryClassesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.nft.v1beta1.QueryClassesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryClassesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryClassesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryClassesResponse;
    static equals(a: QueryClassesResponse | PlainMessage<QueryClassesResponse> | undefined, b: QueryClassesResponse | PlainMessage<QueryClassesResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map
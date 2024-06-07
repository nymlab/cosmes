import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 *
 * @generated from message dymensionxyz.dymension.gamm.v2.QuerySpotPriceRequest
 */
export declare class QuerySpotPriceRequest extends Message<QuerySpotPriceRequest> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    /**
     * @generated from field: string base_asset_denom = 2;
     */
    baseAssetDenom: string;
    /**
     * @generated from field: string quote_asset_denom = 3;
     */
    quoteAssetDenom: string;
    constructor(data?: PartialMessage<QuerySpotPriceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v2.QuerySpotPriceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySpotPriceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySpotPriceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySpotPriceRequest;
    static equals(a: QuerySpotPriceRequest | PlainMessage<QuerySpotPriceRequest> | undefined, b: QuerySpotPriceRequest | PlainMessage<QuerySpotPriceRequest> | undefined): boolean;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 *
 * @generated from message dymensionxyz.dymension.gamm.v2.QuerySpotPriceResponse
 */
export declare class QuerySpotPriceResponse extends Message<QuerySpotPriceResponse> {
    /**
     * String of the Dec. Ex) 10.203uatom
     *
     * @generated from field: string spot_price = 1;
     */
    spotPrice: string;
    constructor(data?: PartialMessage<QuerySpotPriceResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v2.QuerySpotPriceResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySpotPriceResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySpotPriceResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySpotPriceResponse;
    static equals(a: QuerySpotPriceResponse | PlainMessage<QuerySpotPriceResponse> | undefined, b: QuerySpotPriceResponse | PlainMessage<QuerySpotPriceResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map
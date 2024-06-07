import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * SpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 *
 * @generated from message osmosis.poolmanager.v2.SpotPriceRequest
 */
export declare class SpotPriceRequest extends Message<SpotPriceRequest> {
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
    constructor(data?: PartialMessage<SpotPriceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v2.SpotPriceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SpotPriceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SpotPriceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SpotPriceRequest;
    static equals(a: SpotPriceRequest | PlainMessage<SpotPriceRequest> | undefined, b: SpotPriceRequest | PlainMessage<SpotPriceRequest> | undefined): boolean;
}
/**
 * SpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 *
 * @generated from message osmosis.poolmanager.v2.SpotPriceResponse
 */
export declare class SpotPriceResponse extends Message<SpotPriceResponse> {
    /**
     * String of the BigDec. Ex) 10.203uatom
     *
     * @generated from field: string spot_price = 1;
     */
    spotPrice: string;
    constructor(data?: PartialMessage<SpotPriceResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v2.SpotPriceResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SpotPriceResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SpotPriceResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SpotPriceResponse;
    static equals(a: SpotPriceResponse | PlainMessage<SpotPriceResponse> | undefined, b: SpotPriceResponse | PlainMessage<SpotPriceResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map
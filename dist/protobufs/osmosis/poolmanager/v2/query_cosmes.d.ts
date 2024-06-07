import { SpotPriceRequest, SpotPriceResponse } from "./query_pb.js";
/**
 * SpotPriceV2 defines a gRPC query handler that returns the spot price given
 * a base denomination and a quote denomination.
 * The returned spot price has 36 decimal places. However, some of
 * modules perform sig fig rounding so most of the rightmost decimals can be
 * zeroes.
 *
 * @generated from rpc osmosis.poolmanager.v2.Query.SpotPriceV2
 */
export declare const QuerySpotPriceV2Service: {
    readonly typeName: "osmosis.poolmanager.v2.Query";
    readonly method: "SpotPriceV2";
    readonly Request: typeof SpotPriceRequest;
    readonly Response: typeof SpotPriceResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map
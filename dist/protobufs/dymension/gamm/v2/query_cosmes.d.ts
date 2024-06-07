import { QuerySpotPriceRequest, QuerySpotPriceResponse } from "./query_pb.js";
/**
 * SpotPrice defines a gRPC query handler that returns the spot price given
 * a base denomination and a quote denomination.
 *
 * @generated from rpc dymensionxyz.dymension.gamm.v2.Query.SpotPrice
 */
export declare const QuerySpotPriceService: {
    readonly typeName: "dymensionxyz.dymension.gamm.v2.Query";
    readonly method: "SpotPrice";
    readonly Request: typeof QuerySpotPriceRequest;
    readonly Response: typeof QuerySpotPriceResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map
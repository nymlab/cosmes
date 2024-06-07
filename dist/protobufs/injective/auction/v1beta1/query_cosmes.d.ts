import { QueryAuctionParamsRequest, QueryAuctionParamsResponse, QueryCurrentAuctionBasketRequest, QueryCurrentAuctionBasketResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query_pb.js";
/**
 * Retrieves auction params
 *
 * @generated from rpc injective.auction.v1beta1.Query.AuctionParams
 */
export declare const QueryAuctionParamsService: {
    readonly typeName: "injective.auction.v1beta1.Query";
    readonly method: "AuctionParams";
    readonly Request: typeof QueryAuctionParamsRequest;
    readonly Response: typeof QueryAuctionParamsResponse;
};
/**
 * Retrieves current auction basket with current highest bid and bidder
 *
 * @generated from rpc injective.auction.v1beta1.Query.CurrentAuctionBasket
 */
export declare const QueryCurrentAuctionBasketService: {
    readonly typeName: "injective.auction.v1beta1.Query";
    readonly method: "CurrentAuctionBasket";
    readonly Request: typeof QueryCurrentAuctionBasketRequest;
    readonly Response: typeof QueryCurrentAuctionBasketResponse;
};
/**
 * Retrieves the entire auction module's state
 *
 * @generated from rpc injective.auction.v1beta1.Query.AuctionModuleState
 */
export declare const QueryAuctionModuleStateService: {
    readonly typeName: "injective.auction.v1beta1.Query";
    readonly method: "AuctionModuleState";
    readonly Request: typeof QueryModuleStateRequest;
    readonly Response: typeof QueryModuleStateResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map
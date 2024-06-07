import { MsgRelayBandRates, MsgRelayBandRatesResponse, MsgRelayCoinbaseMessages, MsgRelayCoinbaseMessagesResponse, MsgRelayPriceFeedPrice, MsgRelayPriceFeedPriceResponse, MsgRelayProviderPrices, MsgRelayProviderPricesResponse, MsgRelayPythPrices, MsgRelayPythPricesResponse, MsgRequestBandIBCRates, MsgRequestBandIBCRatesResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";
/**
 * RelayProviderPrice defines a method for relaying a price for a
 * provider-based oracle
 *
 * @generated from rpc injective.oracle.v1beta1.Msg.RelayProviderPrices
 */
export declare const MsgRelayProviderPricesService: {
    readonly typeName: "injective.oracle.v1beta1.Msg";
    readonly method: "RelayProviderPrices";
    readonly Request: typeof MsgRelayProviderPrices;
    readonly Response: typeof MsgRelayProviderPricesResponse;
};
/**
 * RelayPriceFeedPrice defines a method for relaying a price for a price
 * feeder-based oracle
 *
 * @generated from rpc injective.oracle.v1beta1.Msg.RelayPriceFeedPrice
 */
export declare const MsgRelayPriceFeedPriceService: {
    readonly typeName: "injective.oracle.v1beta1.Msg";
    readonly method: "RelayPriceFeedPrice";
    readonly Request: typeof MsgRelayPriceFeedPrice;
    readonly Response: typeof MsgRelayPriceFeedPriceResponse;
};
/**
 * RelayBandRates defines a method for relaying rates from Band
 *
 * @generated from rpc injective.oracle.v1beta1.Msg.RelayBandRates
 */
export declare const MsgRelayBandRatesService: {
    readonly typeName: "injective.oracle.v1beta1.Msg";
    readonly method: "RelayBandRates";
    readonly Request: typeof MsgRelayBandRates;
    readonly Response: typeof MsgRelayBandRatesResponse;
};
/**
 * RequestBandIBCRates defines a method for fetching rates from Band ibc
 *
 * @generated from rpc injective.oracle.v1beta1.Msg.RequestBandIBCRates
 */
export declare const MsgRequestBandIBCRatesService: {
    readonly typeName: "injective.oracle.v1beta1.Msg";
    readonly method: "RequestBandIBCRates";
    readonly Request: typeof MsgRequestBandIBCRates;
    readonly Response: typeof MsgRequestBandIBCRatesResponse;
};
/**
 * RelayCoinbaseMessages defines a method for relaying price messages from
 * Coinbase API
 *
 * @generated from rpc injective.oracle.v1beta1.Msg.RelayCoinbaseMessages
 */
export declare const MsgRelayCoinbaseMessagesService: {
    readonly typeName: "injective.oracle.v1beta1.Msg";
    readonly method: "RelayCoinbaseMessages";
    readonly Request: typeof MsgRelayCoinbaseMessages;
    readonly Response: typeof MsgRelayCoinbaseMessagesResponse;
};
/**
 * RelayPythPrices defines a method for relaying rates from the Pyth contract
 *
 * @generated from rpc injective.oracle.v1beta1.Msg.RelayPythPrices
 */
export declare const MsgRelayPythPricesService: {
    readonly typeName: "injective.oracle.v1beta1.Msg";
    readonly method: "RelayPythPrices";
    readonly Request: typeof MsgRelayPythPrices;
    readonly Response: typeof MsgRelayPythPricesResponse;
};
/**
 *  UpdateParams enables updating oracle module's params via governance
 *
 * @generated from rpc injective.oracle.v1beta1.Msg.UpdateParams
 */
export declare const MsgUpdateParamsService: {
    readonly typeName: "injective.oracle.v1beta1.Msg";
    readonly method: "UpdateParams";
    readonly Request: typeof MsgUpdateParams;
    readonly Response: typeof MsgUpdateParamsResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map
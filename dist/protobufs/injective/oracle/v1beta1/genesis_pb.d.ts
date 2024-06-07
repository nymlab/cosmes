import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { BandIBCParams, BandOracleRequest, BandPriceState, ChainlinkPriceState, CoinbasePriceState, Params, PriceFeedState, PriceRecords, ProviderState, PythPriceState } from "./oracle_pb.js";
/**
 * GenesisState defines the oracle module's genesis state.
 *
 * @generated from message injective.oracle.v1beta1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * params defines all the parameters of related to oracle.
     *
     * @generated from field: injective.oracle.v1beta1.Params params = 1;
     */
    params?: Params;
    /**
     * @generated from field: repeated string band_relayers = 2;
     */
    bandRelayers: string[];
    /**
     * @generated from field: repeated injective.oracle.v1beta1.BandPriceState band_price_states = 3;
     */
    bandPriceStates: BandPriceState[];
    /**
     * @generated from field: repeated injective.oracle.v1beta1.PriceFeedState price_feed_price_states = 4;
     */
    priceFeedPriceStates: PriceFeedState[];
    /**
     * @generated from field: repeated injective.oracle.v1beta1.CoinbasePriceState coinbase_price_states = 5;
     */
    coinbasePriceStates: CoinbasePriceState[];
    /**
     * @generated from field: repeated injective.oracle.v1beta1.BandPriceState band_ibc_price_states = 6;
     */
    bandIbcPriceStates: BandPriceState[];
    /**
     * @generated from field: repeated injective.oracle.v1beta1.BandOracleRequest band_ibc_oracle_requests = 7;
     */
    bandIbcOracleRequests: BandOracleRequest[];
    /**
     * @generated from field: injective.oracle.v1beta1.BandIBCParams band_ibc_params = 8;
     */
    bandIbcParams?: BandIBCParams;
    /**
     * @generated from field: uint64 band_ibc_latest_client_id = 9;
     */
    bandIbcLatestClientId: bigint;
    /**
     * @generated from field: repeated injective.oracle.v1beta1.CalldataRecord calldata_records = 10;
     */
    calldataRecords: CalldataRecord[];
    /**
     * @generated from field: uint64 band_ibc_latest_request_id = 11;
     */
    bandIbcLatestRequestId: bigint;
    /**
     * @generated from field: repeated injective.oracle.v1beta1.ChainlinkPriceState chainlink_price_states = 12;
     */
    chainlinkPriceStates: ChainlinkPriceState[];
    /**
     * @generated from field: repeated injective.oracle.v1beta1.PriceRecords historical_price_records = 13;
     */
    historicalPriceRecords: PriceRecords[];
    /**
     * @generated from field: repeated injective.oracle.v1beta1.ProviderState provider_states = 14;
     */
    providerStates: ProviderState[];
    /**
     * @generated from field: repeated injective.oracle.v1beta1.PythPriceState pyth_price_states = 15;
     */
    pythPriceStates: PythPriceState[];
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.CalldataRecord
 */
export declare class CalldataRecord extends Message<CalldataRecord> {
    /**
     * @generated from field: uint64 client_id = 1;
     */
    clientId: bigint;
    /**
     * @generated from field: bytes calldata = 2;
     */
    calldata: Uint8Array;
    constructor(data?: PartialMessage<CalldataRecord>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.CalldataRecord";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CalldataRecord;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CalldataRecord;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CalldataRecord;
    static equals(a: CalldataRecord | PlainMessage<CalldataRecord> | undefined, b: CalldataRecord | PlainMessage<CalldataRecord> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map
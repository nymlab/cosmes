import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * GenesisState defines the gamm module's genesis state.
 *
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * @generated from field: repeated google.protobuf.Any pools = 1;
     */
    pools: Any[];
    /**
     * will be renamed to next_pool_id in an upcoming version
     *
     * @generated from field: uint64 next_pool_number = 2;
     */
    nextPoolNumber: bigint;
    /**
     * @generated from field: dymensionxyz.dymension.gamm.v1beta1.Params params = 3;
     */
    params?: Params;
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.Params
 */
export declare class Params extends Message<Params> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin pool_creation_fee = 1;
     */
    poolCreationFee: Coin[];
    /**
     * @generated from field: bool enable_global_pool_fees = 2;
     */
    enableGlobalPoolFees: boolean;
    /**
     * @generated from field: dymensionxyz.dymension.gamm.v1beta1.GlobalFees global_fees = 3;
     */
    globalFees?: GlobalFees;
    /**
     * @generated from field: string taker_fee = 4;
     */
    takerFee: string;
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.GlobalFees
 */
export declare class GlobalFees extends Message<GlobalFees> {
    /**
     * @generated from field: string swap_fee = 1;
     */
    swapFee: string;
    /**
     * @generated from field: string exit_fee = 2;
     */
    exitFee: string;
    constructor(data?: PartialMessage<GlobalFees>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.GlobalFees";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GlobalFees;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GlobalFees;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GlobalFees;
    static equals(a: GlobalFees | PlainMessage<GlobalFees> | undefined, b: GlobalFees | PlainMessage<GlobalFees> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map
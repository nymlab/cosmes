import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Minter, Params } from "./mint_pb.js";
/**
 * GenesisState defines the mint module's genesis state.
 *
 * @generated from message osmosis.mint.v1beta1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * minter is an abstraction for holding current rewards information.
     *
     * @generated from field: osmosis.mint.v1beta1.Minter minter = 1;
     */
    minter?: Minter;
    /**
     * params defines all the parameters of the mint module.
     *
     * @generated from field: osmosis.mint.v1beta1.Params params = 2;
     */
    params?: Params;
    /**
     * reduction_started_epoch is the first epoch in which the reduction of mint
     * begins.
     *
     * @generated from field: int64 reduction_started_epoch = 3;
     */
    reductionStartedEpoch: bigint;
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.mint.v1beta1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map
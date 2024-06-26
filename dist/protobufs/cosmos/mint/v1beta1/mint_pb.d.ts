import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * Minter represents the minting state.
 *
 * @generated from message cosmos.mint.v1beta1.Minter
 */
export declare class Minter extends Message<Minter> {
    /**
     * current annual inflation rate
     *
     * @generated from field: string inflation = 1;
     */
    inflation: string;
    /**
     * current annual expected provisions
     *
     * @generated from field: string annual_provisions = 2;
     */
    annualProvisions: string;
    constructor(data?: PartialMessage<Minter>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.mint.v1beta1.Minter";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Minter;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Minter;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Minter;
    static equals(a: Minter | PlainMessage<Minter> | undefined, b: Minter | PlainMessage<Minter> | undefined): boolean;
}
/**
 * Params defines the parameters for the x/mint module.
 *
 * @generated from message cosmos.mint.v1beta1.Params
 */
export declare class Params extends Message<Params> {
    /**
     * type of coin to mint
     *
     * @generated from field: string mint_denom = 1;
     */
    mintDenom: string;
    /**
     * maximum annual change in inflation rate
     *
     * @generated from field: string inflation_rate_change = 2;
     */
    inflationRateChange: string;
    /**
     * maximum inflation rate
     *
     * @generated from field: string inflation_max = 3;
     */
    inflationMax: string;
    /**
     * minimum inflation rate
     *
     * @generated from field: string inflation_min = 4;
     */
    inflationMin: string;
    /**
     * goal of percent bonded atoms
     *
     * @generated from field: string goal_bonded = 5;
     */
    goalBonded: string;
    /**
     * expected blocks per year
     *
     * @generated from field: uint64 blocks_per_year = 6;
     */
    blocksPerYear: bigint;
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.mint.v1beta1.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
//# sourceMappingURL=mint_pb.d.ts.map
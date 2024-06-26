import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * Params defines the EVM module parameters
 *
 * @generated from message ethermint.feemarket.v1.Params
 */
export declare class Params extends Message<Params> {
    /**
     * no_base_fee forces the EIP-1559 base fee to 0 (needed for 0 price calls)
     *
     * @generated from field: bool no_base_fee = 1;
     */
    noBaseFee: boolean;
    /**
     * base_fee_change_denominator bounds the amount the base fee can change
     * between blocks.
     *
     * @generated from field: uint32 base_fee_change_denominator = 2;
     */
    baseFeeChangeDenominator: number;
    /**
     * elasticity_multiplier bounds the maximum gas limit an EIP-1559 block may
     * have.
     *
     * @generated from field: uint32 elasticity_multiplier = 3;
     */
    elasticityMultiplier: number;
    /**
     * enable_height defines at which block height the base fee calculation is enabled.
     *
     * @generated from field: int64 enable_height = 5;
     */
    enableHeight: bigint;
    /**
     * base_fee for EIP-1559 blocks.
     *
     * @generated from field: string base_fee = 6;
     */
    baseFee: string;
    /**
     * min_gas_price defines the minimum gas price value for cosmos and eth transactions
     *
     * @generated from field: string min_gas_price = 7;
     */
    minGasPrice: string;
    /**
     * min_gas_multiplier bounds the minimum gas used to be charged
     * to senders based on gas limit
     *
     * @generated from field: string min_gas_multiplier = 8;
     */
    minGasMultiplier: string;
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.feemarket.v1.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
//# sourceMappingURL=feemarket_pb.d.ts.map
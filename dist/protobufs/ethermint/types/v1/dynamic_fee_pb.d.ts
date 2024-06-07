import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * ExtensionOptionDynamicFeeTx is an extension option that specifies the maxPrioPrice for cosmos tx
 *
 * @generated from message ethermint.types.v1.ExtensionOptionDynamicFeeTx
 */
export declare class ExtensionOptionDynamicFeeTx extends Message<ExtensionOptionDynamicFeeTx> {
    /**
     * max_priority_price is the same as `max_priority_fee_per_gas` in eip-1559 spec
     *
     * @generated from field: string max_priority_price = 1;
     */
    maxPriorityPrice: string;
    constructor(data?: PartialMessage<ExtensionOptionDynamicFeeTx>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.types.v1.ExtensionOptionDynamicFeeTx";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExtensionOptionDynamicFeeTx;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExtensionOptionDynamicFeeTx;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExtensionOptionDynamicFeeTx;
    static equals(a: ExtensionOptionDynamicFeeTx | PlainMessage<ExtensionOptionDynamicFeeTx> | undefined, b: ExtensionOptionDynamicFeeTx | PlainMessage<ExtensionOptionDynamicFeeTx> | undefined): boolean;
}
//# sourceMappingURL=dynamic_fee_pb.d.ts.map
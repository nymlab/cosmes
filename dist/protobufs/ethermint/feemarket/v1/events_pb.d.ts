import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * EventFeeMarket is the event type for the fee market module
 *
 * @generated from message ethermint.feemarket.v1.EventFeeMarket
 */
export declare class EventFeeMarket extends Message<EventFeeMarket> {
    /**
     * base_fee for EIP-1559 blocks
     *
     * @generated from field: string base_fee = 1;
     */
    baseFee: string;
    constructor(data?: PartialMessage<EventFeeMarket>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.feemarket.v1.EventFeeMarket";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventFeeMarket;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventFeeMarket;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventFeeMarket;
    static equals(a: EventFeeMarket | PlainMessage<EventFeeMarket> | undefined, b: EventFeeMarket | PlainMessage<EventFeeMarket> | undefined): boolean;
}
/**
 * EventBlockGas defines an Ethereum block gas event
 *
 * @generated from message ethermint.feemarket.v1.EventBlockGas
 */
export declare class EventBlockGas extends Message<EventBlockGas> {
    /**
     * height of the block
     *
     * @generated from field: string height = 1;
     */
    height: string;
    /**
     * amount of gas wanted by the block
     *
     * @generated from field: string amount = 2;
     */
    amount: string;
    constructor(data?: PartialMessage<EventBlockGas>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.feemarket.v1.EventBlockGas";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventBlockGas;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventBlockGas;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventBlockGas;
    static equals(a: EventBlockGas | PlainMessage<EventBlockGas> | undefined, b: EventBlockGas | PlainMessage<EventBlockGas> | undefined): boolean;
}
//# sourceMappingURL=events_pb.d.ts.map
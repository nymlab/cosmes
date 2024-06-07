import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { Metadata } from "../../../cosmos/bank/v1beta1/bank_pb.js";
/**
 * @generated from message injective.tokenfactory.v1beta1.EventCreateTFDenom
 */
export declare class EventCreateTFDenom extends Message<EventCreateTFDenom> {
    /**
     * @generated from field: string account = 1;
     */
    account: string;
    /**
     * @generated from field: string denom = 2;
     */
    denom: string;
    constructor(data?: PartialMessage<EventCreateTFDenom>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.tokenfactory.v1beta1.EventCreateTFDenom";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventCreateTFDenom;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventCreateTFDenom;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventCreateTFDenom;
    static equals(a: EventCreateTFDenom | PlainMessage<EventCreateTFDenom> | undefined, b: EventCreateTFDenom | PlainMessage<EventCreateTFDenom> | undefined): boolean;
}
/**
 * @generated from message injective.tokenfactory.v1beta1.EventMintTFDenom
 */
export declare class EventMintTFDenom extends Message<EventMintTFDenom> {
    /**
     * @generated from field: string recipient_address = 1;
     */
    recipientAddress: string;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin amount = 2;
     */
    amount?: Coin;
    constructor(data?: PartialMessage<EventMintTFDenom>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.tokenfactory.v1beta1.EventMintTFDenom";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventMintTFDenom;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventMintTFDenom;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventMintTFDenom;
    static equals(a: EventMintTFDenom | PlainMessage<EventMintTFDenom> | undefined, b: EventMintTFDenom | PlainMessage<EventMintTFDenom> | undefined): boolean;
}
/**
 * @generated from message injective.tokenfactory.v1beta1.EventBurnDenom
 */
export declare class EventBurnDenom extends Message<EventBurnDenom> {
    /**
     * @generated from field: string burner_address = 1;
     */
    burnerAddress: string;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin amount = 2;
     */
    amount?: Coin;
    constructor(data?: PartialMessage<EventBurnDenom>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.tokenfactory.v1beta1.EventBurnDenom";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventBurnDenom;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventBurnDenom;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventBurnDenom;
    static equals(a: EventBurnDenom | PlainMessage<EventBurnDenom> | undefined, b: EventBurnDenom | PlainMessage<EventBurnDenom> | undefined): boolean;
}
/**
 * @generated from message injective.tokenfactory.v1beta1.EventChangeTFAdmin
 */
export declare class EventChangeTFAdmin extends Message<EventChangeTFAdmin> {
    /**
     * @generated from field: string denom = 1;
     */
    denom: string;
    /**
     * @generated from field: string new_admin_address = 2;
     */
    newAdminAddress: string;
    constructor(data?: PartialMessage<EventChangeTFAdmin>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.tokenfactory.v1beta1.EventChangeTFAdmin";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventChangeTFAdmin;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventChangeTFAdmin;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventChangeTFAdmin;
    static equals(a: EventChangeTFAdmin | PlainMessage<EventChangeTFAdmin> | undefined, b: EventChangeTFAdmin | PlainMessage<EventChangeTFAdmin> | undefined): boolean;
}
/**
 * @generated from message injective.tokenfactory.v1beta1.EventSetTFDenomMetadata
 */
export declare class EventSetTFDenomMetadata extends Message<EventSetTFDenomMetadata> {
    /**
     * @generated from field: string denom = 1;
     */
    denom: string;
    /**
     * @generated from field: cosmos.bank.v1beta1.Metadata metadata = 2;
     */
    metadata?: Metadata;
    constructor(data?: PartialMessage<EventSetTFDenomMetadata>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.tokenfactory.v1beta1.EventSetTFDenomMetadata";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSetTFDenomMetadata;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSetTFDenomMetadata;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSetTFDenomMetadata;
    static equals(a: EventSetTFDenomMetadata | PlainMessage<EventSetTFDenomMetadata> | undefined, b: EventSetTFDenomMetadata | PlainMessage<EventSetTFDenomMetadata> | undefined): boolean;
}
//# sourceMappingURL=events_pb.d.ts.map
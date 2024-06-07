import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * ===================== InstantiateMsg
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.InstantiateMsg
 */
export declare class InstantiateMsg extends Message<InstantiateMsg> {
    /**
     * pool_asset_denoms is the list of asset denoms that are initialized
     * at pool creation time.
     *
     * @generated from field: repeated string pool_asset_denoms = 1;
     */
    poolAssetDenoms: string[];
    constructor(data?: PartialMessage<InstantiateMsg>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.InstantiateMsg";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InstantiateMsg;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InstantiateMsg;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InstantiateMsg;
    static equals(a: InstantiateMsg | PlainMessage<InstantiateMsg> | undefined, b: InstantiateMsg | PlainMessage<InstantiateMsg> | undefined): boolean;
}
//# sourceMappingURL=instantiate_msg_pb.d.ts.map
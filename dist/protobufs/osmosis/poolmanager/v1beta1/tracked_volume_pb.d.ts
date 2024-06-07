import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * @generated from message osmosis.poolmanager.v1beta1.TrackedVolume
 */
export declare class TrackedVolume extends Message<TrackedVolume> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 1;
     */
    amount: Coin[];
    constructor(data?: PartialMessage<TrackedVolume>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.TrackedVolume";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TrackedVolume;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TrackedVolume;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TrackedVolume;
    static equals(a: TrackedVolume | PlainMessage<TrackedVolume> | undefined, b: TrackedVolume | PlainMessage<TrackedVolume> | undefined): boolean;
}
//# sourceMappingURL=tracked_volume_pb.d.ts.map
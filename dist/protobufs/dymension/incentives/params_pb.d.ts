import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * Params holds parameters for the incentives module
 *
 * @generated from message dymensionxyz.dymension.incentives.Params
 */
export declare class Params extends Message<Params> {
    /**
     * distr_epoch_identifier is what epoch type distribution will be triggered by
     * (day, week, etc.)
     *
     * @generated from field: string distr_epoch_identifier = 1;
     */
    distrEpochIdentifier: string;
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.incentives.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
//# sourceMappingURL=params_pb.d.ts.map
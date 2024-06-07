import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FeeToken } from "./feetoken_pb.js";
/**
 * GenesisState defines the txfees module's genesis state.
 *
 * @generated from message dymensionxyz.dymension.txfees.v1beta1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * params are all the parameters of the module
     *
     * @generated from field: dymensionxyz.dymension.txfees.v1beta1.Params params = 1;
     */
    params?: Params;
    /**
     * @generated from field: string basedenom = 2;
     */
    basedenom: string;
    /**
     * @generated from field: repeated dymensionxyz.dymension.txfees.v1beta1.FeeToken feetokens = 3;
     */
    feetokens: FeeToken[];
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.txfees.v1beta1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
/**
 * Params holds parameters for the incentives module
 *
 * @generated from message dymensionxyz.dymension.txfees.v1beta1.Params
 */
export declare class Params extends Message<Params> {
    /**
     * epoch_identifier is what epoch type swap and burn will be triggered by
     * (day, week, etc.)
     *
     * @generated from field: string epoch_identifier = 1;
     */
    epochIdentifier: string;
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.txfees.v1beta1.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map
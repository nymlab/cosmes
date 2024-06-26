import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * ParameterChangeProposal defines a proposal to change one or more parameters.
 *
 * @generated from message cosmos.params.v1beta1.ParameterChangeProposal
 */
export declare class ParameterChangeProposal extends Message<ParameterChangeProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: repeated cosmos.params.v1beta1.ParamChange changes = 3;
     */
    changes: ParamChange[];
    constructor(data?: PartialMessage<ParameterChangeProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.params.v1beta1.ParameterChangeProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ParameterChangeProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ParameterChangeProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ParameterChangeProposal;
    static equals(a: ParameterChangeProposal | PlainMessage<ParameterChangeProposal> | undefined, b: ParameterChangeProposal | PlainMessage<ParameterChangeProposal> | undefined): boolean;
}
/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 *
 * @generated from message cosmos.params.v1beta1.ParamChange
 */
export declare class ParamChange extends Message<ParamChange> {
    /**
     * @generated from field: string subspace = 1;
     */
    subspace: string;
    /**
     * @generated from field: string key = 2;
     */
    key: string;
    /**
     * @generated from field: string value = 3;
     */
    value: string;
    constructor(data?: PartialMessage<ParamChange>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.params.v1beta1.ParamChange";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ParamChange;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ParamChange;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ParamChange;
    static equals(a: ParamChange | PlainMessage<ParamChange> | undefined, b: ParamChange | PlainMessage<ParamChange> | undefined): boolean;
}
//# sourceMappingURL=params_pb.d.ts.map
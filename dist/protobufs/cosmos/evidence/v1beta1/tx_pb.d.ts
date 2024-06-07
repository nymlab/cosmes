import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 *
 * @generated from message cosmos.evidence.v1beta1.MsgSubmitEvidence
 */
export declare class MsgSubmitEvidence extends Message<MsgSubmitEvidence> {
    /**
     * submitter is the signer account address of evidence.
     *
     * @generated from field: string submitter = 1;
     */
    submitter: string;
    /**
     * evidence defines the evidence of misbehavior.
     *
     * @generated from field: google.protobuf.Any evidence = 2;
     */
    evidence?: Any;
    constructor(data?: PartialMessage<MsgSubmitEvidence>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.evidence.v1beta1.MsgSubmitEvidence";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSubmitEvidence;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSubmitEvidence;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSubmitEvidence;
    static equals(a: MsgSubmitEvidence | PlainMessage<MsgSubmitEvidence> | undefined, b: MsgSubmitEvidence | PlainMessage<MsgSubmitEvidence> | undefined): boolean;
}
/**
 * MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type.
 *
 * @generated from message cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse
 */
export declare class MsgSubmitEvidenceResponse extends Message<MsgSubmitEvidenceResponse> {
    /**
     * hash defines the hash of the evidence.
     *
     * @generated from field: bytes hash = 4;
     */
    hash: Uint8Array;
    constructor(data?: PartialMessage<MsgSubmitEvidenceResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSubmitEvidenceResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSubmitEvidenceResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSubmitEvidenceResponse;
    static equals(a: MsgSubmitEvidenceResponse | PlainMessage<MsgSubmitEvidenceResponse> | undefined, b: MsgSubmitEvidenceResponse | PlainMessage<MsgSubmitEvidenceResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map
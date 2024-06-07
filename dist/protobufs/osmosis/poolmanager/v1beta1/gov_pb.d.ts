import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { DenomPairTakerFee } from "./tx_pb.js";
/**
 * DenomPairTakerFeeProposal is a type for adding/removing a custom taker fee(s)
 * for one or more denom pairs.
 *
 * @generated from message osmosis.poolmanager.v1beta1.DenomPairTakerFeeProposal
 */
export declare class DenomPairTakerFeeProposal extends Message<DenomPairTakerFeeProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: repeated osmosis.poolmanager.v1beta1.DenomPairTakerFee denom_pair_taker_fee = 3;
     */
    denomPairTakerFee: DenomPairTakerFee[];
    constructor(data?: PartialMessage<DenomPairTakerFeeProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.DenomPairTakerFeeProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DenomPairTakerFeeProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DenomPairTakerFeeProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DenomPairTakerFeeProposal;
    static equals(a: DenomPairTakerFeeProposal | PlainMessage<DenomPairTakerFeeProposal> | undefined, b: DenomPairTakerFeeProposal | PlainMessage<DenomPairTakerFeeProposal> | undefined): boolean;
}
//# sourceMappingURL=gov_pb.d.ts.map
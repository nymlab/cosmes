import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FeeToken } from "./feetoken_pb.js";
/**
 * UpdateFeeTokenProposal is a gov Content type for adding new whitelisted fee
 * token(s). It must specify a denom along with gamm pool ID to use as a spot
 * price calculator. It can be used to add new denoms to the whitelist. It can
 * also be used to update the Pool to associate with the denom. If Pool ID is
 * set to 0, it will remove the denom from the whitelisted set.
 *
 * @generated from message osmosis.txfees.v1beta1.UpdateFeeTokenProposal
 */
export declare class UpdateFeeTokenProposal extends Message<UpdateFeeTokenProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: repeated osmosis.txfees.v1beta1.FeeToken feetokens = 3;
     */
    feetokens: FeeToken[];
    constructor(data?: PartialMessage<UpdateFeeTokenProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.txfees.v1beta1.UpdateFeeTokenProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateFeeTokenProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateFeeTokenProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateFeeTokenProposal;
    static equals(a: UpdateFeeTokenProposal | PlainMessage<UpdateFeeTokenProposal> | undefined, b: UpdateFeeTokenProposal | PlainMessage<UpdateFeeTokenProposal> | undefined): boolean;
}
//# sourceMappingURL=gov_pb.d.ts.map
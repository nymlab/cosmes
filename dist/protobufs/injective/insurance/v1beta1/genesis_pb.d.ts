import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { InsuranceFund, Params, RedemptionSchedule } from "./insurance_pb.js";
/**
 * GenesisState defines the insurance module's genesis state.
 *
 * @generated from message injective.insurance.v1beta1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * params defines all the parameters of related to insurance.
     *
     * @generated from field: injective.insurance.v1beta1.Params params = 1;
     */
    params?: Params;
    /**
     * insurance_funds describes the insurance funds available for derivative
     * markets
     *
     * @generated from field: repeated injective.insurance.v1beta1.InsuranceFund insurance_funds = 2;
     */
    insuranceFunds: InsuranceFund[];
    /**
     * redemption_schedule describes the redemption requests pending
     *
     * @generated from field: repeated injective.insurance.v1beta1.RedemptionSchedule redemption_schedule = 3;
     */
    redemptionSchedule: RedemptionSchedule[];
    /**
     * next_share_denom_id describes the next share denom id to be used for newly
     * creating insurance fund incremented by 1 per insurance fund creation
     *
     * @generated from field: uint64 next_share_denom_id = 4;
     */
    nextShareDenomId: bigint;
    /**
     * next_redemption_schedule_id describes next redemption schedule id to be
     * used for next schedule incremented by 1 per redemption request
     *
     * @generated from field: uint64 next_redemption_schedule_id = 5;
     */
    nextRedemptionScheduleId: bigint;
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.insurance.v1beta1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map
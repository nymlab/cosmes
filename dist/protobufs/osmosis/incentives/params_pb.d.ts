import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";
/**
 * Params holds parameters for the incentives module
 *
 * @generated from message osmosis.incentives.Params
 */
export declare class Params extends Message<Params> {
    /**
     * distr_epoch_identifier is what epoch type distribution will be triggered by
     * (day, week, etc.)
     *
     * @generated from field: string distr_epoch_identifier = 1;
     */
    distrEpochIdentifier: string;
    /**
     * group_creation_fee is the fee required to create a new group
     * It is only charged to all addresses other than incentive module account
     * or addresses in the unrestricted_creator_whitelist
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin group_creation_fee = 2;
     */
    groupCreationFee: Coin[];
    /**
     * unrestricted_creator_whitelist is a list of addresses that are
     * allowed to bypass restrictions on permissionless Group
     * creation. In the future, we might expand these to creating gauges
     * as well.
     * The goal of this is to allow a subdao to manage incentives efficiently
     * without being stopped by 5 day governance process or a high fee.
     * At the same time, it prevents spam by having a fee for all
     * other users.
     *
     * @generated from field: repeated string unrestricted_creator_whitelist = 3;
     */
    unrestrictedCreatorWhitelist: string[];
    /**
     * internal_uptime is the uptime used for internal incentives on pools that
     * use NoLock gauges (currently only Concentrated Liquidity pools).
     *
     * Since Group gauges route through internal gauges, this parameter affects
     * the uptime of those incentives as well (i.e. distributions through volume
     * splitting incentives will use this uptime).
     *
     * @generated from field: google.protobuf.Duration internal_uptime = 4;
     */
    internalUptime?: Duration;
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.incentives.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
//# sourceMappingURL=params_pb.d.ts.map
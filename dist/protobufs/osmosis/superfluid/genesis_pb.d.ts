import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { LockIdIntermediaryAccountConnection, OsmoEquivalentMultiplierRecord, SuperfluidAsset, SuperfluidIntermediaryAccount } from "./superfluid_pb.js";
/**
 * GenesisState defines the module's genesis state.
 *
 * @generated from message osmosis.superfluid.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * @generated from field: osmosis.superfluid.Params params = 1;
     */
    params?: Params;
    /**
     * superfluid_assets defines the registered superfluid assets that have been
     * registered via governance.
     *
     * @generated from field: repeated osmosis.superfluid.SuperfluidAsset superfluid_assets = 2;
     */
    superfluidAssets: SuperfluidAsset[];
    /**
     * osmo_equivalent_multipliers is the records of osmo equivalent amount of
     * each superfluid registered pool, updated every epoch.
     *
     * @generated from field: repeated osmosis.superfluid.OsmoEquivalentMultiplierRecord osmo_equivalent_multipliers = 3;
     */
    osmoEquivalentMultipliers: OsmoEquivalentMultiplierRecord[];
    /**
     * intermediary_accounts is a secondary account for superfluid staking that
     * plays an intermediary role between validators and the delegators.
     *
     * @generated from field: repeated osmosis.superfluid.SuperfluidIntermediaryAccount intermediary_accounts = 4;
     */
    intermediaryAccounts: SuperfluidIntermediaryAccount[];
    /**
     * @generated from field: repeated osmosis.superfluid.LockIdIntermediaryAccountConnection intemediary_account_connections = 5;
     */
    intemediaryAccountConnections: LockIdIntermediaryAccountConnection[];
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map
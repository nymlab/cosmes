import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Metadata, Params, SendEnabled } from "./bank_pb.js";
import { Coin } from "../../base/v1beta1/coin_pb.js";
/**
 * GenesisState defines the bank module's genesis state.
 *
 * @generated from message cosmos.bank.v1beta1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * params defines all the parameters of the module.
     *
     * @generated from field: cosmos.bank.v1beta1.Params params = 1;
     */
    params?: Params;
    /**
     * balances is an array containing the balances of all the accounts.
     *
     * @generated from field: repeated cosmos.bank.v1beta1.Balance balances = 2;
     */
    balances: Balance[];
    /**
     * supply represents the total supply. If it is left empty, then supply will be calculated based on the provided
     * balances. Otherwise, it will be used to validate that the sum of the balances equals this amount.
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin supply = 3;
     */
    supply: Coin[];
    /**
     * denom_metadata defines the metadata of the different coins.
     *
     * @generated from field: repeated cosmos.bank.v1beta1.Metadata denom_metadata = 4;
     */
    denomMetadata: Metadata[];
    /**
     * send_enabled defines the denoms where send is enabled or disabled.
     *
     * Since: cosmos-sdk 0.47
     *
     * @generated from field: repeated cosmos.bank.v1beta1.SendEnabled send_enabled = 5;
     */
    sendEnabled: SendEnabled[];
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
/**
 * Balance defines an account address and balance pair used in the bank module's
 * genesis state.
 *
 * @generated from message cosmos.bank.v1beta1.Balance
 */
export declare class Balance extends Message<Balance> {
    /**
     * address is the address of the balance holder.
     *
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * coins defines the different coins this balance holds.
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 2;
     */
    coins: Coin[];
    constructor(data?: PartialMessage<Balance>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.Balance";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Balance;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Balance;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Balance;
    static equals(a: Balance | PlainMessage<Balance> | undefined, b: Balance | PlainMessage<Balance> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map
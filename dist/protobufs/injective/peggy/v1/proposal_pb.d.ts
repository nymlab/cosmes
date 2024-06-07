import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message injective.peggy.v1.BlacklistEthereumAddressesProposal
 */
export declare class BlacklistEthereumAddressesProposal extends Message<BlacklistEthereumAddressesProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: repeated string blacklist_addresses = 3;
     */
    blacklistAddresses: string[];
    constructor(data?: PartialMessage<BlacklistEthereumAddressesProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.BlacklistEthereumAddressesProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BlacklistEthereumAddressesProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BlacklistEthereumAddressesProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BlacklistEthereumAddressesProposal;
    static equals(a: BlacklistEthereumAddressesProposal | PlainMessage<BlacklistEthereumAddressesProposal> | undefined, b: BlacklistEthereumAddressesProposal | PlainMessage<BlacklistEthereumAddressesProposal> | undefined): boolean;
}
/**
 * @generated from message injective.peggy.v1.RevokeEthereumBlacklistProposal
 */
export declare class RevokeEthereumBlacklistProposal extends Message<RevokeEthereumBlacklistProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: repeated string blacklist_addresses = 3;
     */
    blacklistAddresses: string[];
    constructor(data?: PartialMessage<RevokeEthereumBlacklistProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.RevokeEthereumBlacklistProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RevokeEthereumBlacklistProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RevokeEthereumBlacklistProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RevokeEthereumBlacklistProposal;
    static equals(a: RevokeEthereumBlacklistProposal | PlainMessage<RevokeEthereumBlacklistProposal> | undefined, b: RevokeEthereumBlacklistProposal | PlainMessage<RevokeEthereumBlacklistProposal> | undefined): boolean;
}
//# sourceMappingURL=proposal_pb.d.ts.map
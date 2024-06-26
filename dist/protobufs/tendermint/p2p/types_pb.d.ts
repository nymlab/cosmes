import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message tendermint.p2p.NetAddress
 */
export declare class NetAddress extends Message<NetAddress> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string ip = 2;
     */
    ip: string;
    /**
     * @generated from field: uint32 port = 3;
     */
    port: number;
    constructor(data?: PartialMessage<NetAddress>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.p2p.NetAddress";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NetAddress;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NetAddress;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NetAddress;
    static equals(a: NetAddress | PlainMessage<NetAddress> | undefined, b: NetAddress | PlainMessage<NetAddress> | undefined): boolean;
}
/**
 * @generated from message tendermint.p2p.ProtocolVersion
 */
export declare class ProtocolVersion extends Message<ProtocolVersion> {
    /**
     * @generated from field: uint64 p2p = 1;
     */
    p2p: bigint;
    /**
     * @generated from field: uint64 block = 2;
     */
    block: bigint;
    /**
     * @generated from field: uint64 app = 3;
     */
    app: bigint;
    constructor(data?: PartialMessage<ProtocolVersion>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.p2p.ProtocolVersion";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProtocolVersion;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProtocolVersion;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProtocolVersion;
    static equals(a: ProtocolVersion | PlainMessage<ProtocolVersion> | undefined, b: ProtocolVersion | PlainMessage<ProtocolVersion> | undefined): boolean;
}
/**
 * @generated from message tendermint.p2p.DefaultNodeInfo
 */
export declare class DefaultNodeInfo extends Message<DefaultNodeInfo> {
    /**
     * @generated from field: tendermint.p2p.ProtocolVersion protocol_version = 1;
     */
    protocolVersion?: ProtocolVersion;
    /**
     * @generated from field: string default_node_id = 2;
     */
    defaultNodeId: string;
    /**
     * @generated from field: string listen_addr = 3;
     */
    listenAddr: string;
    /**
     * @generated from field: string network = 4;
     */
    network: string;
    /**
     * @generated from field: string version = 5;
     */
    version: string;
    /**
     * @generated from field: bytes channels = 6;
     */
    channels: Uint8Array;
    /**
     * @generated from field: string moniker = 7;
     */
    moniker: string;
    /**
     * @generated from field: tendermint.p2p.DefaultNodeInfoOther other = 8;
     */
    other?: DefaultNodeInfoOther;
    constructor(data?: PartialMessage<DefaultNodeInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.p2p.DefaultNodeInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DefaultNodeInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DefaultNodeInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DefaultNodeInfo;
    static equals(a: DefaultNodeInfo | PlainMessage<DefaultNodeInfo> | undefined, b: DefaultNodeInfo | PlainMessage<DefaultNodeInfo> | undefined): boolean;
}
/**
 * @generated from message tendermint.p2p.DefaultNodeInfoOther
 */
export declare class DefaultNodeInfoOther extends Message<DefaultNodeInfoOther> {
    /**
     * @generated from field: string tx_index = 1;
     */
    txIndex: string;
    /**
     * @generated from field: string rpc_address = 2;
     */
    rpcAddress: string;
    constructor(data?: PartialMessage<DefaultNodeInfoOther>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.p2p.DefaultNodeInfoOther";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DefaultNodeInfoOther;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DefaultNodeInfoOther;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DefaultNodeInfoOther;
    static equals(a: DefaultNodeInfoOther | PlainMessage<DefaultNodeInfoOther> | undefined, b: DefaultNodeInfoOther | PlainMessage<DefaultNodeInfoOther> | undefined): boolean;
}
//# sourceMappingURL=types_pb.d.ts.map
// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmos/tx/v1beta1/service.proto (package cosmos.tx.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination_pb.js";
import { Tx } from "./tx_pb.js";
import { GasInfo, Result, TxResponse } from "../../base/abci/v1beta1/abci_pb.js";
import { BlockID } from "../../../tendermint/types/types_pb.js";
import { Block } from "../../../tendermint/types/block_pb.js";
/**
 * OrderBy defines the sorting order
 *
 * @generated from enum cosmos.tx.v1beta1.OrderBy
 */
export var OrderBy;
(function (OrderBy) {
    /**
     * ORDER_BY_UNSPECIFIED specifies an unknown sorting order. OrderBy defaults to ASC in this case.
     *
     * @generated from enum value: ORDER_BY_UNSPECIFIED = 0;
     */
    OrderBy[OrderBy["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * ORDER_BY_ASC defines ascending order
     *
     * @generated from enum value: ORDER_BY_ASC = 1;
     */
    OrderBy[OrderBy["ASC"] = 1] = "ASC";
    /**
     * ORDER_BY_DESC defines descending order
     *
     * @generated from enum value: ORDER_BY_DESC = 2;
     */
    OrderBy[OrderBy["DESC"] = 2] = "DESC";
})(OrderBy || (OrderBy = {}));
// Retrieve enum metadata with: proto3.getEnumType(OrderBy)
proto3.util.setEnumType(OrderBy, "cosmos.tx.v1beta1.OrderBy", [
    { no: 0, name: "ORDER_BY_UNSPECIFIED" },
    { no: 1, name: "ORDER_BY_ASC" },
    { no: 2, name: "ORDER_BY_DESC" },
]);
/**
 * BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC method.
 *
 * @generated from enum cosmos.tx.v1beta1.BroadcastMode
 */
export var BroadcastMode;
(function (BroadcastMode) {
    /**
     * zero-value for mode ordering
     *
     * @generated from enum value: BROADCAST_MODE_UNSPECIFIED = 0;
     */
    BroadcastMode[BroadcastMode["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * DEPRECATED: use BROADCAST_MODE_SYNC instead,
     * BROADCAST_MODE_BLOCK is not supported by the SDK from v0.47.x onwards.
     *
     * @generated from enum value: BROADCAST_MODE_BLOCK = 1 [deprecated = true];
     * @deprecated
     */
    BroadcastMode[BroadcastMode["BLOCK"] = 1] = "BLOCK";
    /**
     * BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits for
     * a CheckTx execution response only.
     *
     * @generated from enum value: BROADCAST_MODE_SYNC = 2;
     */
    BroadcastMode[BroadcastMode["SYNC"] = 2] = "SYNC";
    /**
     * BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client returns
     * immediately.
     *
     * @generated from enum value: BROADCAST_MODE_ASYNC = 3;
     */
    BroadcastMode[BroadcastMode["ASYNC"] = 3] = "ASYNC";
})(BroadcastMode || (BroadcastMode = {}));
// Retrieve enum metadata with: proto3.getEnumType(BroadcastMode)
proto3.util.setEnumType(BroadcastMode, "cosmos.tx.v1beta1.BroadcastMode", [
    { no: 0, name: "BROADCAST_MODE_UNSPECIFIED" },
    { no: 1, name: "BROADCAST_MODE_BLOCK" },
    { no: 2, name: "BROADCAST_MODE_SYNC" },
    { no: 3, name: "BROADCAST_MODE_ASYNC" },
]);
/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 *
 * @generated from message cosmos.tx.v1beta1.GetTxsEventRequest
 */
export class GetTxsEventRequest extends Message {
    constructor(data) {
        super();
        /**
         * events is the list of transaction event type.
         *
         * @generated from field: repeated string events = 1;
         */
        this.events = [];
        /**
         * @generated from field: cosmos.tx.v1beta1.OrderBy order_by = 3;
         */
        this.orderBy = OrderBy.UNSPECIFIED;
        /**
         * page is the page number to query, starts at 1. If not provided, will default to first page.
         *
         * @generated from field: uint64 page = 4;
         */
        this.page = protoInt64.zero;
        /**
         * limit is the total number of results to be returned in the result page.
         * If left empty it will default to a value to be set by each app.
         *
         * @generated from field: uint64 limit = 5;
         */
        this.limit = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetTxsEventRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetTxsEventRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetTxsEventRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(GetTxsEventRequest, a, b);
    }
}
GetTxsEventRequest.runtime = proto3;
GetTxsEventRequest.typeName = "cosmos.tx.v1beta1.GetTxsEventRequest";
GetTxsEventRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "events", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
    { no: 3, name: "order_by", kind: "enum", T: proto3.getEnumType(OrderBy) },
    { no: 4, name: "page", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "limit", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 *
 * @generated from message cosmos.tx.v1beta1.GetTxsEventResponse
 */
export class GetTxsEventResponse extends Message {
    constructor(data) {
        super();
        /**
         * txs is the list of queried transactions.
         *
         * @generated from field: repeated cosmos.tx.v1beta1.Tx txs = 1;
         */
        this.txs = [];
        /**
         * tx_responses is the list of queried TxResponses.
         *
         * @generated from field: repeated cosmos.base.abci.v1beta1.TxResponse tx_responses = 2;
         */
        this.txResponses = [];
        /**
         * total is total number of results available
         *
         * @generated from field: uint64 total = 4;
         */
        this.total = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetTxsEventResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetTxsEventResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetTxsEventResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(GetTxsEventResponse, a, b);
    }
}
GetTxsEventResponse.runtime = proto3;
GetTxsEventResponse.typeName = "cosmos.tx.v1beta1.GetTxsEventResponse";
GetTxsEventResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "txs", kind: "message", T: Tx, repeated: true },
    { no: 2, name: "tx_responses", kind: "message", T: TxResponse, repeated: true },
    { no: 3, name: "pagination", kind: "message", T: PageResponse },
    { no: 4, name: "total", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 *
 * @generated from message cosmos.tx.v1beta1.BroadcastTxRequest
 */
export class BroadcastTxRequest extends Message {
    constructor(data) {
        super();
        /**
         * tx_bytes is the raw transaction.
         *
         * @generated from field: bytes tx_bytes = 1;
         */
        this.txBytes = new Uint8Array(0);
        /**
         * @generated from field: cosmos.tx.v1beta1.BroadcastMode mode = 2;
         */
        this.mode = BroadcastMode.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new BroadcastTxRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new BroadcastTxRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new BroadcastTxRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(BroadcastTxRequest, a, b);
    }
}
BroadcastTxRequest.runtime = proto3;
BroadcastTxRequest.typeName = "cosmos.tx.v1beta1.BroadcastTxRequest";
BroadcastTxRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "tx_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "mode", kind: "enum", T: proto3.getEnumType(BroadcastMode) },
]);
/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 *
 * @generated from message cosmos.tx.v1beta1.BroadcastTxResponse
 */
export class BroadcastTxResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new BroadcastTxResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new BroadcastTxResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new BroadcastTxResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(BroadcastTxResponse, a, b);
    }
}
BroadcastTxResponse.runtime = proto3;
BroadcastTxResponse.typeName = "cosmos.tx.v1beta1.BroadcastTxResponse";
BroadcastTxResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "tx_response", kind: "message", T: TxResponse },
]);
/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 *
 * @generated from message cosmos.tx.v1beta1.SimulateRequest
 */
export class SimulateRequest extends Message {
    constructor(data) {
        super();
        /**
         * tx_bytes is the raw transaction.
         *
         * Since: cosmos-sdk 0.43
         *
         * @generated from field: bytes tx_bytes = 2;
         */
        this.txBytes = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SimulateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SimulateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SimulateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(SimulateRequest, a, b);
    }
}
SimulateRequest.runtime = proto3;
SimulateRequest.typeName = "cosmos.tx.v1beta1.SimulateRequest";
SimulateRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "tx", kind: "message", T: Tx },
    { no: 2, name: "tx_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 *
 * @generated from message cosmos.tx.v1beta1.SimulateResponse
 */
export class SimulateResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SimulateResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SimulateResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SimulateResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(SimulateResponse, a, b);
    }
}
SimulateResponse.runtime = proto3;
SimulateResponse.typeName = "cosmos.tx.v1beta1.SimulateResponse";
SimulateResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "gas_info", kind: "message", T: GasInfo },
    { no: 2, name: "result", kind: "message", T: Result },
]);
/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 *
 * @generated from message cosmos.tx.v1beta1.GetTxRequest
 */
export class GetTxRequest extends Message {
    constructor(data) {
        super();
        /**
         * hash is the tx hash to query, encoded as a hex string.
         *
         * @generated from field: string hash = 1;
         */
        this.hash = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetTxRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetTxRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetTxRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(GetTxRequest, a, b);
    }
}
GetTxRequest.runtime = proto3;
GetTxRequest.typeName = "cosmos.tx.v1beta1.GetTxRequest";
GetTxRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * GetTxResponse is the response type for the Service.GetTx method.
 *
 * @generated from message cosmos.tx.v1beta1.GetTxResponse
 */
export class GetTxResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetTxResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetTxResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetTxResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(GetTxResponse, a, b);
    }
}
GetTxResponse.runtime = proto3;
GetTxResponse.typeName = "cosmos.tx.v1beta1.GetTxResponse";
GetTxResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "tx", kind: "message", T: Tx },
    { no: 2, name: "tx_response", kind: "message", T: TxResponse },
]);
/**
 * GetBlockWithTxsRequest is the request type for the Service.GetBlockWithTxs
 * RPC method.
 *
 * Since: cosmos-sdk 0.45.2
 *
 * @generated from message cosmos.tx.v1beta1.GetBlockWithTxsRequest
 */
export class GetBlockWithTxsRequest extends Message {
    constructor(data) {
        super();
        /**
         * height is the height of the block to query.
         *
         * @generated from field: int64 height = 1;
         */
        this.height = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetBlockWithTxsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetBlockWithTxsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetBlockWithTxsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(GetBlockWithTxsRequest, a, b);
    }
}
GetBlockWithTxsRequest.runtime = proto3;
GetBlockWithTxsRequest.typeName = "cosmos.tx.v1beta1.GetBlockWithTxsRequest";
GetBlockWithTxsRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
]);
/**
 * GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs method.
 *
 * Since: cosmos-sdk 0.45.2
 *
 * @generated from message cosmos.tx.v1beta1.GetBlockWithTxsResponse
 */
export class GetBlockWithTxsResponse extends Message {
    constructor(data) {
        super();
        /**
         * txs are the transactions in the block.
         *
         * @generated from field: repeated cosmos.tx.v1beta1.Tx txs = 1;
         */
        this.txs = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetBlockWithTxsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetBlockWithTxsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetBlockWithTxsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(GetBlockWithTxsResponse, a, b);
    }
}
GetBlockWithTxsResponse.runtime = proto3;
GetBlockWithTxsResponse.typeName = "cosmos.tx.v1beta1.GetBlockWithTxsResponse";
GetBlockWithTxsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "txs", kind: "message", T: Tx, repeated: true },
    { no: 2, name: "block_id", kind: "message", T: BlockID },
    { no: 3, name: "block", kind: "message", T: Block },
    { no: 4, name: "pagination", kind: "message", T: PageResponse },
]);
/**
 * TxDecodeRequest is the request type for the Service.TxDecode
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.tx.v1beta1.TxDecodeRequest
 */
export class TxDecodeRequest extends Message {
    constructor(data) {
        super();
        /**
         * tx_bytes is the raw transaction.
         *
         * @generated from field: bytes tx_bytes = 1;
         */
        this.txBytes = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TxDecodeRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TxDecodeRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TxDecodeRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(TxDecodeRequest, a, b);
    }
}
TxDecodeRequest.runtime = proto3;
TxDecodeRequest.typeName = "cosmos.tx.v1beta1.TxDecodeRequest";
TxDecodeRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "tx_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
/**
 * TxDecodeResponse is the response type for the
 * Service.TxDecode method.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.tx.v1beta1.TxDecodeResponse
 */
export class TxDecodeResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TxDecodeResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TxDecodeResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TxDecodeResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(TxDecodeResponse, a, b);
    }
}
TxDecodeResponse.runtime = proto3;
TxDecodeResponse.typeName = "cosmos.tx.v1beta1.TxDecodeResponse";
TxDecodeResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "tx", kind: "message", T: Tx },
]);
/**
 * TxEncodeRequest is the request type for the Service.TxEncode
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.tx.v1beta1.TxEncodeRequest
 */
export class TxEncodeRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TxEncodeRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TxEncodeRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TxEncodeRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(TxEncodeRequest, a, b);
    }
}
TxEncodeRequest.runtime = proto3;
TxEncodeRequest.typeName = "cosmos.tx.v1beta1.TxEncodeRequest";
TxEncodeRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "tx", kind: "message", T: Tx },
]);
/**
 * TxEncodeResponse is the response type for the
 * Service.TxEncode method.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.tx.v1beta1.TxEncodeResponse
 */
export class TxEncodeResponse extends Message {
    constructor(data) {
        super();
        /**
         * tx_bytes is the encoded transaction bytes.
         *
         * @generated from field: bytes tx_bytes = 1;
         */
        this.txBytes = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TxEncodeResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TxEncodeResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TxEncodeResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(TxEncodeResponse, a, b);
    }
}
TxEncodeResponse.runtime = proto3;
TxEncodeResponse.typeName = "cosmos.tx.v1beta1.TxEncodeResponse";
TxEncodeResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "tx_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
/**
 * TxEncodeAminoRequest is the request type for the Service.TxEncodeAmino
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.tx.v1beta1.TxEncodeAminoRequest
 */
export class TxEncodeAminoRequest extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string amino_json = 1;
         */
        this.aminoJson = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TxEncodeAminoRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TxEncodeAminoRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TxEncodeAminoRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(TxEncodeAminoRequest, a, b);
    }
}
TxEncodeAminoRequest.runtime = proto3;
TxEncodeAminoRequest.typeName = "cosmos.tx.v1beta1.TxEncodeAminoRequest";
TxEncodeAminoRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "amino_json", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * TxEncodeAminoResponse is the response type for the Service.TxEncodeAmino
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.tx.v1beta1.TxEncodeAminoResponse
 */
export class TxEncodeAminoResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: bytes amino_binary = 1;
         */
        this.aminoBinary = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TxEncodeAminoResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TxEncodeAminoResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TxEncodeAminoResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(TxEncodeAminoResponse, a, b);
    }
}
TxEncodeAminoResponse.runtime = proto3;
TxEncodeAminoResponse.typeName = "cosmos.tx.v1beta1.TxEncodeAminoResponse";
TxEncodeAminoResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "amino_binary", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
/**
 * TxDecodeAminoRequest is the request type for the Service.TxDecodeAmino
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.tx.v1beta1.TxDecodeAminoRequest
 */
export class TxDecodeAminoRequest extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: bytes amino_binary = 1;
         */
        this.aminoBinary = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TxDecodeAminoRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TxDecodeAminoRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TxDecodeAminoRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(TxDecodeAminoRequest, a, b);
    }
}
TxDecodeAminoRequest.runtime = proto3;
TxDecodeAminoRequest.typeName = "cosmos.tx.v1beta1.TxDecodeAminoRequest";
TxDecodeAminoRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "amino_binary", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
/**
 * TxDecodeAminoResponse is the response type for the Service.TxDecodeAmino
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.tx.v1beta1.TxDecodeAminoResponse
 */
export class TxDecodeAminoResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string amino_json = 1;
         */
        this.aminoJson = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TxDecodeAminoResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TxDecodeAminoResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TxDecodeAminoResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(TxDecodeAminoResponse, a, b);
    }
}
TxDecodeAminoResponse.runtime = proto3;
TxDecodeAminoResponse.typeName = "cosmos.tx.v1beta1.TxDecodeAminoResponse";
TxDecodeAminoResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "amino_json", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
//# sourceMappingURL=service_pb.js.map
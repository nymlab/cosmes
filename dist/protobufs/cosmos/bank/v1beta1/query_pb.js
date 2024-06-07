// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmos/bank/v1beta1/query.proto (package cosmos.bank.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../base/v1beta1/coin_pb.js";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination_pb.js";
import { Metadata, Params, SendEnabled } from "./bank_pb.js";
/**
 * QueryBalanceRequest is the request type for the Query/Balance RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryBalanceRequest
 */
export class QueryBalanceRequest extends Message {
    constructor(data) {
        super();
        /**
         * address is the address to query balances for.
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        /**
         * denom is the coin denom to query balances for.
         *
         * @generated from field: string denom = 2;
         */
        this.denom = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryBalanceRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryBalanceRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryBalanceRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryBalanceRequest, a, b);
    }
}
QueryBalanceRequest.runtime = proto3;
QueryBalanceRequest.typeName = "cosmos.bank.v1beta1.QueryBalanceRequest";
QueryBalanceRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * QueryBalanceResponse is the response type for the Query/Balance RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryBalanceResponse
 */
export class QueryBalanceResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryBalanceResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryBalanceResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryBalanceResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryBalanceResponse, a, b);
    }
}
QueryBalanceResponse.runtime = proto3;
QueryBalanceResponse.typeName = "cosmos.bank.v1beta1.QueryBalanceResponse";
QueryBalanceResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "balance", kind: "message", T: Coin },
]);
/**
 * QueryBalanceRequest is the request type for the Query/AllBalances RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryAllBalancesRequest
 */
export class QueryAllBalancesRequest extends Message {
    constructor(data) {
        super();
        /**
         * address is the address to query balances for.
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryAllBalancesRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryAllBalancesRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryAllBalancesRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryAllBalancesRequest, a, b);
    }
}
QueryAllBalancesRequest.runtime = proto3;
QueryAllBalancesRequest.typeName = "cosmos.bank.v1beta1.QueryAllBalancesRequest";
QueryAllBalancesRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
]);
/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryAllBalancesResponse
 */
export class QueryAllBalancesResponse extends Message {
    constructor(data) {
        super();
        /**
         * balances is the balances of all the coins.
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin balances = 1;
         */
        this.balances = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryAllBalancesResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryAllBalancesResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryAllBalancesResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryAllBalancesResponse, a, b);
    }
}
QueryAllBalancesResponse.runtime = proto3;
QueryAllBalancesResponse.typeName = "cosmos.bank.v1beta1.QueryAllBalancesResponse";
QueryAllBalancesResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "balances", kind: "message", T: Coin, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
/**
 * QuerySpendableBalancesRequest defines the gRPC request structure for querying
 * an account's spendable balances.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.bank.v1beta1.QuerySpendableBalancesRequest
 */
export class QuerySpendableBalancesRequest extends Message {
    constructor(data) {
        super();
        /**
         * address is the address to query spendable balances for.
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QuerySpendableBalancesRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QuerySpendableBalancesRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QuerySpendableBalancesRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QuerySpendableBalancesRequest, a, b);
    }
}
QuerySpendableBalancesRequest.runtime = proto3;
QuerySpendableBalancesRequest.typeName = "cosmos.bank.v1beta1.QuerySpendableBalancesRequest";
QuerySpendableBalancesRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
]);
/**
 * QuerySpendableBalancesResponse defines the gRPC response structure for querying
 * an account's spendable balances.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.bank.v1beta1.QuerySpendableBalancesResponse
 */
export class QuerySpendableBalancesResponse extends Message {
    constructor(data) {
        super();
        /**
         * balances is the spendable balances of all the coins.
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin balances = 1;
         */
        this.balances = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QuerySpendableBalancesResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QuerySpendableBalancesResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QuerySpendableBalancesResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QuerySpendableBalancesResponse, a, b);
    }
}
QuerySpendableBalancesResponse.runtime = proto3;
QuerySpendableBalancesResponse.typeName = "cosmos.bank.v1beta1.QuerySpendableBalancesResponse";
QuerySpendableBalancesResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "balances", kind: "message", T: Coin, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
/**
 * QuerySpendableBalanceByDenomRequest defines the gRPC request structure for
 * querying an account's spendable balance for a specific denom.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest
 */
export class QuerySpendableBalanceByDenomRequest extends Message {
    constructor(data) {
        super();
        /**
         * address is the address to query balances for.
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        /**
         * denom is the coin denom to query balances for.
         *
         * @generated from field: string denom = 2;
         */
        this.denom = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QuerySpendableBalanceByDenomRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QuerySpendableBalanceByDenomRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QuerySpendableBalanceByDenomRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QuerySpendableBalanceByDenomRequest, a, b);
    }
}
QuerySpendableBalanceByDenomRequest.runtime = proto3;
QuerySpendableBalanceByDenomRequest.typeName = "cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest";
QuerySpendableBalanceByDenomRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * QuerySpendableBalanceByDenomResponse defines the gRPC response structure for
 * querying an account's spendable balance for a specific denom.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse
 */
export class QuerySpendableBalanceByDenomResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QuerySpendableBalanceByDenomResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QuerySpendableBalanceByDenomResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QuerySpendableBalanceByDenomResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QuerySpendableBalanceByDenomResponse, a, b);
    }
}
QuerySpendableBalanceByDenomResponse.runtime = proto3;
QuerySpendableBalanceByDenomResponse.typeName = "cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse";
QuerySpendableBalanceByDenomResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "balance", kind: "message", T: Coin },
]);
/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryTotalSupplyRequest
 */
export class QueryTotalSupplyRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryTotalSupplyRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryTotalSupplyRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryTotalSupplyRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryTotalSupplyRequest, a, b);
    }
}
QueryTotalSupplyRequest.runtime = proto3;
QueryTotalSupplyRequest.typeName = "cosmos.bank.v1beta1.QueryTotalSupplyRequest";
QueryTotalSupplyRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
]);
/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 *
 * @generated from message cosmos.bank.v1beta1.QueryTotalSupplyResponse
 */
export class QueryTotalSupplyResponse extends Message {
    constructor(data) {
        super();
        /**
         * supply is the supply of the coins
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin supply = 1;
         */
        this.supply = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryTotalSupplyResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryTotalSupplyResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryTotalSupplyResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryTotalSupplyResponse, a, b);
    }
}
QueryTotalSupplyResponse.runtime = proto3;
QueryTotalSupplyResponse.typeName = "cosmos.bank.v1beta1.QueryTotalSupplyResponse";
QueryTotalSupplyResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "supply", kind: "message", T: Coin, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
/**
 * QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QuerySupplyOfRequest
 */
export class QuerySupplyOfRequest extends Message {
    constructor(data) {
        super();
        /**
         * denom is the coin denom to query balances for.
         *
         * @generated from field: string denom = 1;
         */
        this.denom = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QuerySupplyOfRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QuerySupplyOfRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QuerySupplyOfRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QuerySupplyOfRequest, a, b);
    }
}
QuerySupplyOfRequest.runtime = proto3;
QuerySupplyOfRequest.typeName = "cosmos.bank.v1beta1.QuerySupplyOfRequest";
QuerySupplyOfRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QuerySupplyOfResponse
 */
export class QuerySupplyOfResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QuerySupplyOfResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QuerySupplyOfResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QuerySupplyOfResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QuerySupplyOfResponse, a, b);
    }
}
QuerySupplyOfResponse.runtime = proto3;
QuerySupplyOfResponse.typeName = "cosmos.bank.v1beta1.QuerySupplyOfResponse";
QuerySupplyOfResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "message", T: Coin },
]);
/**
 * QueryParamsRequest defines the request type for querying x/bank parameters.
 *
 * @generated from message cosmos.bank.v1beta1.QueryParamsRequest
 */
export class QueryParamsRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryParamsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryParamsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryParamsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryParamsRequest, a, b);
    }
}
QueryParamsRequest.runtime = proto3;
QueryParamsRequest.typeName = "cosmos.bank.v1beta1.QueryParamsRequest";
QueryParamsRequest.fields = proto3.util.newFieldList(() => []);
/**
 * QueryParamsResponse defines the response type for querying x/bank parameters.
 *
 * @generated from message cosmos.bank.v1beta1.QueryParamsResponse
 */
export class QueryParamsResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryParamsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryParamsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryParamsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryParamsResponse, a, b);
    }
}
QueryParamsResponse.runtime = proto3;
QueryParamsResponse.typeName = "cosmos.bank.v1beta1.QueryParamsResponse";
QueryParamsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
]);
/**
 * QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomsMetadataRequest
 */
export class QueryDenomsMetadataRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDenomsMetadataRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDenomsMetadataRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDenomsMetadataRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryDenomsMetadataRequest, a, b);
    }
}
QueryDenomsMetadataRequest.runtime = proto3;
QueryDenomsMetadataRequest.typeName = "cosmos.bank.v1beta1.QueryDenomsMetadataRequest";
QueryDenomsMetadataRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
]);
/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomsMetadataResponse
 */
export class QueryDenomsMetadataResponse extends Message {
    constructor(data) {
        super();
        /**
         * metadata provides the client information for all the registered tokens.
         *
         * @generated from field: repeated cosmos.bank.v1beta1.Metadata metadatas = 1;
         */
        this.metadatas = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDenomsMetadataResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDenomsMetadataResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDenomsMetadataResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryDenomsMetadataResponse, a, b);
    }
}
QueryDenomsMetadataResponse.runtime = proto3;
QueryDenomsMetadataResponse.typeName = "cosmos.bank.v1beta1.QueryDenomsMetadataResponse";
QueryDenomsMetadataResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "metadatas", kind: "message", T: Metadata, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
/**
 * QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomMetadataRequest
 */
export class QueryDenomMetadataRequest extends Message {
    constructor(data) {
        super();
        /**
         * denom is the coin denom to query the metadata for.
         *
         * @generated from field: string denom = 1;
         */
        this.denom = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDenomMetadataRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDenomMetadataRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDenomMetadataRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryDenomMetadataRequest, a, b);
    }
}
QueryDenomMetadataRequest.runtime = proto3;
QueryDenomMetadataRequest.typeName = "cosmos.bank.v1beta1.QueryDenomMetadataRequest";
QueryDenomMetadataRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomMetadataResponse
 */
export class QueryDenomMetadataResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDenomMetadataResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDenomMetadataResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDenomMetadataResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryDenomMetadataResponse, a, b);
    }
}
QueryDenomMetadataResponse.runtime = proto3;
QueryDenomMetadataResponse.typeName = "cosmos.bank.v1beta1.QueryDenomMetadataResponse";
QueryDenomMetadataResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "message", T: Metadata },
]);
/**
 * QueryDenomOwnersRequest defines the request type for the DenomOwners RPC query,
 * which queries for a paginated set of all account holders of a particular
 * denomination.
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomOwnersRequest
 */
export class QueryDenomOwnersRequest extends Message {
    constructor(data) {
        super();
        /**
         * denom defines the coin denomination to query all account holders for.
         *
         * @generated from field: string denom = 1;
         */
        this.denom = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDenomOwnersRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDenomOwnersRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDenomOwnersRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryDenomOwnersRequest, a, b);
    }
}
QueryDenomOwnersRequest.runtime = proto3;
QueryDenomOwnersRequest.typeName = "cosmos.bank.v1beta1.QueryDenomOwnersRequest";
QueryDenomOwnersRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
]);
/**
 * DenomOwner defines structure representing an account that owns or holds a
 * particular denominated token. It contains the account address and account
 * balance of the denominated token.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.bank.v1beta1.DenomOwner
 */
export class DenomOwner extends Message {
    constructor(data) {
        super();
        /**
         * address defines the address that owns a particular denomination.
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DenomOwner().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DenomOwner().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DenomOwner().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(DenomOwner, a, b);
    }
}
DenomOwner.runtime = proto3;
DenomOwner.typeName = "cosmos.bank.v1beta1.DenomOwner";
DenomOwner.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "balance", kind: "message", T: Coin },
]);
/**
 * QueryDenomOwnersResponse defines the RPC response of a DenomOwners RPC query.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomOwnersResponse
 */
export class QueryDenomOwnersResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated cosmos.bank.v1beta1.DenomOwner denom_owners = 1;
         */
        this.denomOwners = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDenomOwnersResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDenomOwnersResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDenomOwnersResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryDenomOwnersResponse, a, b);
    }
}
QueryDenomOwnersResponse.runtime = proto3;
QueryDenomOwnersResponse.typeName = "cosmos.bank.v1beta1.QueryDenomOwnersResponse";
QueryDenomOwnersResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "denom_owners", kind: "message", T: DenomOwner, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
/**
 * QuerySendEnabledRequest defines the RPC request for looking up SendEnabled entries.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.bank.v1beta1.QuerySendEnabledRequest
 */
export class QuerySendEnabledRequest extends Message {
    constructor(data) {
        super();
        /**
         * denoms is the specific denoms you want look up. Leave empty to get all entries.
         *
         * @generated from field: repeated string denoms = 1;
         */
        this.denoms = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QuerySendEnabledRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QuerySendEnabledRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QuerySendEnabledRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QuerySendEnabledRequest, a, b);
    }
}
QuerySendEnabledRequest.runtime = proto3;
QuerySendEnabledRequest.typeName = "cosmos.bank.v1beta1.QuerySendEnabledRequest";
QuerySendEnabledRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "denoms", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 99, name: "pagination", kind: "message", T: PageRequest },
]);
/**
 * QuerySendEnabledResponse defines the RPC response of a SendEnable query.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.bank.v1beta1.QuerySendEnabledResponse
 */
export class QuerySendEnabledResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated cosmos.bank.v1beta1.SendEnabled send_enabled = 1;
         */
        this.sendEnabled = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QuerySendEnabledResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QuerySendEnabledResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QuerySendEnabledResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QuerySendEnabledResponse, a, b);
    }
}
QuerySendEnabledResponse.runtime = proto3;
QuerySendEnabledResponse.typeName = "cosmos.bank.v1beta1.QuerySendEnabledResponse";
QuerySendEnabledResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "send_enabled", kind: "message", T: SendEnabled, repeated: true },
    { no: 99, name: "pagination", kind: "message", T: PageResponse },
]);
//# sourceMappingURL=query_pb.js.map
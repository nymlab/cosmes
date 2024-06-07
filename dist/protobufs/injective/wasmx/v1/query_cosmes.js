// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file injective/wasmx/v1/query.proto (package injective.wasmx.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { QueryContractRegistrationInfoRequest, QueryContractRegistrationInfoResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryWasmxParamsRequest, QueryWasmxParamsResponse } from "./query_pb.js";
const TYPE_NAME = "injective.wasmx.v1.Query";
/**
 * Retrieves wasmx params
 *
 * @generated from rpc injective.wasmx.v1.Query.WasmxParams
 */
export const QueryWasmxParamsService = {
    typeName: TYPE_NAME,
    method: "WasmxParams",
    Request: QueryWasmxParamsRequest,
    Response: QueryWasmxParamsResponse,
};
/**
 * Retrieves contract registration info
 *
 * @generated from rpc injective.wasmx.v1.Query.ContractRegistrationInfo
 */
export const QueryContractRegistrationInfoService = {
    typeName: TYPE_NAME,
    method: "ContractRegistrationInfo",
    Request: QueryContractRegistrationInfoRequest,
    Response: QueryContractRegistrationInfoResponse,
};
/**
 * Retrieves the entire wasmx module's state
 *
 * @generated from rpc injective.wasmx.v1.Query.WasmxModuleState
 */
export const QueryWasmxModuleStateService = {
    typeName: TYPE_NAME,
    method: "WasmxModuleState",
    Request: QueryModuleStateRequest,
    Response: QueryModuleStateResponse,
};
//# sourceMappingURL=query_cosmes.js.map
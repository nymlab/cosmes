import { QueryContractRegistrationInfoRequest, QueryContractRegistrationInfoResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryWasmxParamsRequest, QueryWasmxParamsResponse } from "./query_pb.js";
/**
 * Retrieves wasmx params
 *
 * @generated from rpc injective.wasmx.v1.Query.WasmxParams
 */
export declare const QueryWasmxParamsService: {
    readonly typeName: "injective.wasmx.v1.Query";
    readonly method: "WasmxParams";
    readonly Request: typeof QueryWasmxParamsRequest;
    readonly Response: typeof QueryWasmxParamsResponse;
};
/**
 * Retrieves contract registration info
 *
 * @generated from rpc injective.wasmx.v1.Query.ContractRegistrationInfo
 */
export declare const QueryContractRegistrationInfoService: {
    readonly typeName: "injective.wasmx.v1.Query";
    readonly method: "ContractRegistrationInfo";
    readonly Request: typeof QueryContractRegistrationInfoRequest;
    readonly Response: typeof QueryContractRegistrationInfoResponse;
};
/**
 * Retrieves the entire wasmx module's state
 *
 * @generated from rpc injective.wasmx.v1.Query.WasmxModuleState
 */
export declare const QueryWasmxModuleStateService: {
    readonly typeName: "injective.wasmx.v1.Query";
    readonly method: "WasmxModuleState";
    readonly Request: typeof QueryModuleStateRequest;
    readonly Response: typeof QueryModuleStateResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map
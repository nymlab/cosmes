import { QueryChecksumsRequest, QueryChecksumsResponse, QueryCodeRequest, QueryCodeResponse } from "./query_pb.js";
/**
 * Get all Wasm checksums
 *
 * @generated from rpc ibc.lightclients.wasm.v1.Query.Checksums
 */
export declare const QueryChecksumsService: {
    readonly typeName: "ibc.lightclients.wasm.v1.Query";
    readonly method: "Checksums";
    readonly Request: typeof QueryChecksumsRequest;
    readonly Response: typeof QueryChecksumsResponse;
};
/**
 * Get Wasm code for given checksum
 *
 * @generated from rpc ibc.lightclients.wasm.v1.Query.Code
 */
export declare const QueryCodeService: {
    readonly typeName: "ibc.lightclients.wasm.v1.Query";
    readonly method: "Code";
    readonly Request: typeof QueryCodeRequest;
    readonly Response: typeof QueryCodeResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map
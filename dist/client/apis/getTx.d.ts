import { CosmosTxV1beta1GetTxResponse as GetTxResponse } from "../../protobufs/index.js";
export type GetTxParams = {
    hash: string;
};
/**
 * Returns the tx matching the given hash. Throws if the tx is not found.
 */
export declare function getTx(endpoint: string, params: GetTxParams): Promise<Required<GetTxResponse>>;
//# sourceMappingURL=getTx.d.ts.map
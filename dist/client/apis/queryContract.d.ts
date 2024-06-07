import { JsonValue } from "@bufbuild/protobuf";
export type QueryContractParams = {
    address: string;
    query: JsonValue;
};
/**
 * Queries the contract at `address` with the given `query` JSON message,
 * and returns the parsed JSON response.
 */
export declare function queryContract<T extends JsonValue>(endpoint: string, { address, query }: QueryContractParams): Promise<T>;
//# sourceMappingURL=queryContract.d.ts.map
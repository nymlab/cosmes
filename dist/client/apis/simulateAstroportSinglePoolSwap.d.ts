export type SimulateAstroportSinglePoolSwapParams = {
    poolId: string;
    fromAsset: string;
    fromAmount: bigint;
    isCW20?: boolean | undefined;
};
/**
 * Simulates the amount of assets that would be received by swapping
 * `fromAmount` amount of `fromAsset` assets via the `poolId` pool.
 * If `fromAsset` is a CW20 token, `isCW20` must be set to `true`.
 */
export declare function simulateAstroportSinglePoolSwap(endpoint: string, { poolId, fromAsset, fromAmount, isCW20, }: SimulateAstroportSinglePoolSwapParams): Promise<bigint>;
//# sourceMappingURL=simulateAstroportSinglePoolSwap.d.ts.map
export type SimulateOsmosisSinglePoolSwapParams = {
    poolId: bigint;
    fromAsset: string;
    fromAmount: bigint;
    toAsset: string;
};
/**
 * Simulates the amount of `toAsset` assets that would be received by swapping
 * `fromAmount` amount of `fromAsset` assets via the `poolId` pool.
 */
export declare function simulateOsmosisSinglePoolSwap(endpoint: string, { poolId, fromAsset, fromAmount, toAsset, }: SimulateOsmosisSinglePoolSwapParams): Promise<bigint>;
//# sourceMappingURL=simulateOsmosisSinglePoolSwap.d.ts.map
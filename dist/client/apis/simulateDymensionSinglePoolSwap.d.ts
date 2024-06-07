export type SimulateDymensionSinglePoolSwapParams = {
    poolId: bigint;
    fromAsset: string;
    fromAmount: bigint;
    toAsset: string;
};
/**
 * Simulates the amount of `toAsset` assets that would be received by swapping
 * `fromAmount` amount of `fromAsset` assets via the `poolId` pool.
 */
export declare function simulateDymensionSinglePoolSwap(endpoint: string, { poolId, fromAsset, fromAmount, toAsset, }: SimulateDymensionSinglePoolSwapParams): Promise<bigint>;
//# sourceMappingURL=simulateDymensionSinglePoolSwap.d.ts.map
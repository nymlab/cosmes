import { queryContract } from "./queryContract.js";
export async function getCw20Balance(endpoint, { address, token }) {
    try {
        const { balance } = await queryContract(endpoint, {
            address: token,
            query: {
                balance: {
                    address: address,
                },
            },
        });
        return BigInt(balance);
    }
    catch (err) {
        console.error(err);
        return 0n;
    }
}
//# sourceMappingURL=getCw20Balance.js.map
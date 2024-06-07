import { base64 } from "../../codec/index.js";
import { EthermintCryptoV1Ethsecp256k1PubKey as ProtoEthermintSecp256k1PubKey, InjectiveCryptoV1beta1Ethsecp256k1PubKey as ProtoInjectiveSecp256k1PubKey, CosmosCryptoSecp256k1PubKey as ProtoSecp256k1PubKey, } from "../../protobufs/index.js";
export class Secp256k1PubKey {
    constructor(data) {
        this.data = data;
        this.type = data.chainId?.split(/[-_]/, 2).at(0) ?? "";
    }
    toProto() {
        return this.type === "injective"
            ? new ProtoInjectiveSecp256k1PubKey(this.data)
            : this.type === "dymension" || this.type === "evmos"
                ? new ProtoEthermintSecp256k1PubKey(this.data)
                : new ProtoSecp256k1PubKey(this.data);
    }
    // TODO: needs to be updated to include injective/dymension support
    toAmino() {
        return {
            type: "tendermint/PubKeySecp256k1",
            value: {
                key: base64.encode(this.data.key),
            },
        };
    }
}
//# sourceMappingURL=Secp256k1PubKey.js.map
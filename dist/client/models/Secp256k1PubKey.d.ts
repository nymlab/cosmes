import { PlainMessage } from "@bufbuild/protobuf";
import { EthermintCryptoV1Ethsecp256k1PubKey as ProtoEthermintSecp256k1PubKey, InjectiveCryptoV1beta1Ethsecp256k1PubKey as ProtoInjectiveSecp256k1PubKey, CosmosCryptoSecp256k1PubKey as ProtoSecp256k1PubKey } from "../../protobufs/index.js";
import { DeepPrettify } from "../../typeutils/prettify.js";
import { Adapter } from "./Adapter.js";
type Data = DeepPrettify<{
    chainId?: string | undefined;
} & PlainMessage<ProtoSecp256k1PubKey>>;
export declare class Secp256k1PubKey implements Adapter {
    private readonly data;
    private readonly type;
    constructor(data: Data);
    toProto(): ProtoSecp256k1PubKey | ProtoInjectiveSecp256k1PubKey | ProtoEthermintSecp256k1PubKey;
    toAmino(): {
        type: string;
        value: {
            key: string;
        };
    };
}
export {};
//# sourceMappingURL=Secp256k1PubKey.d.ts.map
import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * Config is the config object of the x/auth/tx package.
 *
 * @generated from message cosmos.tx.config.v1.Config
 */
export declare class Config extends Message<Config> {
    /**
     * skip_ante_handler defines whether the ante handler registration should be skipped in case an app wants to override
     * this functionality.
     *
     * @generated from field: bool skip_ante_handler = 1;
     */
    skipAnteHandler: boolean;
    /**
     * skip_post_handler defines whether the post handler registration should be skipped in case an app wants to override
     * this functionality.
     *
     * @generated from field: bool skip_post_handler = 2;
     */
    skipPostHandler: boolean;
    constructor(data?: PartialMessage<Config>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.tx.config.v1.Config";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Config;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Config;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Config;
    static equals(a: Config | PlainMessage<Config> | undefined, b: Config | PlainMessage<Config> | undefined): boolean;
}
//# sourceMappingURL=config_pb.d.ts.map
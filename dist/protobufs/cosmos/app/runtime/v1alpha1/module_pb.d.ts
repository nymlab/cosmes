import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * Module is the config object for the runtime module.
 *
 * @generated from message cosmos.app.runtime.v1alpha1.Module
 */
export declare class Module extends Message<Module> {
    /**
     * app_name is the name of the app.
     *
     * @generated from field: string app_name = 1;
     */
    appName: string;
    /**
     * begin_blockers specifies the module names of begin blockers
     * to call in the order in which they should be called. If this is left empty
     * no begin blocker will be registered.
     *
     * @generated from field: repeated string begin_blockers = 2;
     */
    beginBlockers: string[];
    /**
     * end_blockers specifies the module names of the end blockers
     * to call in the order in which they should be called. If this is left empty
     * no end blocker will be registered.
     *
     * @generated from field: repeated string end_blockers = 3;
     */
    endBlockers: string[];
    /**
     * init_genesis specifies the module names of init genesis functions
     * to call in the order in which they should be called. If this is left empty
     * no init genesis function will be registered.
     *
     * @generated from field: repeated string init_genesis = 4;
     */
    initGenesis: string[];
    /**
     * export_genesis specifies the order in which to export module genesis data.
     * If this is left empty, the init_genesis order will be used for export genesis
     * if it is specified.
     *
     * @generated from field: repeated string export_genesis = 5;
     */
    exportGenesis: string[];
    /**
     * override_store_keys is an optional list of overrides for the module store keys
     * to be used in keeper construction.
     *
     * @generated from field: repeated cosmos.app.runtime.v1alpha1.StoreKeyConfig override_store_keys = 6;
     */
    overrideStoreKeys: StoreKeyConfig[];
    constructor(data?: PartialMessage<Module>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.app.runtime.v1alpha1.Module";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Module;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Module;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Module;
    static equals(a: Module | PlainMessage<Module> | undefined, b: Module | PlainMessage<Module> | undefined): boolean;
}
/**
 * StoreKeyConfig may be supplied to override the default module store key, which
 * is the module name.
 *
 * @generated from message cosmos.app.runtime.v1alpha1.StoreKeyConfig
 */
export declare class StoreKeyConfig extends Message<StoreKeyConfig> {
    /**
     * name of the module to override the store key of
     *
     * @generated from field: string module_name = 1;
     */
    moduleName: string;
    /**
     * the kv store key to use instead of the module name.
     *
     * @generated from field: string kv_store_key = 2;
     */
    kvStoreKey: string;
    constructor(data?: PartialMessage<StoreKeyConfig>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.app.runtime.v1alpha1.StoreKeyConfig";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoreKeyConfig;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoreKeyConfig;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoreKeyConfig;
    static equals(a: StoreKeyConfig | PlainMessage<StoreKeyConfig> | undefined, b: StoreKeyConfig | PlainMessage<StoreKeyConfig> | undefined): boolean;
}
//# sourceMappingURL=module_pb.d.ts.map
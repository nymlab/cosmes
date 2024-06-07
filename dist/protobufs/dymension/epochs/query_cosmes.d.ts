import { QueryCurrentEpochRequest, QueryCurrentEpochResponse, QueryEpochsInfoRequest, QueryEpochsInfoResponse } from "./query_pb.js";
/**
 * EpochInfos provide running epochInfos
 *
 * @generated from rpc dymensionxyz.dymension.epochs.v1beta1.Query.EpochInfos
 */
export declare const QueryEpochInfosService: {
    readonly typeName: "dymensionxyz.dymension.epochs.v1beta1.Query";
    readonly method: "EpochInfos";
    readonly Request: typeof QueryEpochsInfoRequest;
    readonly Response: typeof QueryEpochsInfoResponse;
};
/**
 * CurrentEpoch provide current epoch of specified identifier
 *
 * @generated from rpc dymensionxyz.dymension.epochs.v1beta1.Query.CurrentEpoch
 */
export declare const QueryCurrentEpochService: {
    readonly typeName: "dymensionxyz.dymension.epochs.v1beta1.Query";
    readonly method: "CurrentEpoch";
    readonly Request: typeof QueryCurrentEpochRequest;
    readonly Response: typeof QueryCurrentEpochResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map
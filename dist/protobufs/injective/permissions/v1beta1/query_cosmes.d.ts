import { QueryAddressesByRoleRequest, QueryAddressesByRoleResponse, QueryAddressRolesRequest, QueryAddressRolesResponse, QueryAllNamespacesRequest, QueryAllNamespacesResponse, QueryNamespaceByDenomRequest, QueryNamespaceByDenomResponse, QueryParamsRequest, QueryParamsResponse, QueryVouchersForAddressRequest, QueryVouchersForAddressResponse } from "./query_pb.js";
/**
 * Params defines a gRPC query method that returns the permissions module's
 * parameters.
 *
 * @generated from rpc injective.permissions.v1beta1.Query.Params
 */
export declare const QueryParamsService: {
    readonly typeName: "injective.permissions.v1beta1.Query";
    readonly method: "Params";
    readonly Request: typeof QueryParamsRequest;
    readonly Response: typeof QueryParamsResponse;
};
/**
 * AllNamespaces defines a gRPC query method that returns the permissions
 * module's created namespaces.
 *
 * @generated from rpc injective.permissions.v1beta1.Query.AllNamespaces
 */
export declare const QueryAllNamespacesService: {
    readonly typeName: "injective.permissions.v1beta1.Query";
    readonly method: "AllNamespaces";
    readonly Request: typeof QueryAllNamespacesRequest;
    readonly Response: typeof QueryAllNamespacesResponse;
};
/**
 * NamespaceByDenom defines a gRPC query method that returns the permissions
 * module's namespace associated with the provided denom.
 *
 * @generated from rpc injective.permissions.v1beta1.Query.NamespaceByDenom
 */
export declare const QueryNamespaceByDenomService: {
    readonly typeName: "injective.permissions.v1beta1.Query";
    readonly method: "NamespaceByDenom";
    readonly Request: typeof QueryNamespaceByDenomRequest;
    readonly Response: typeof QueryNamespaceByDenomResponse;
};
/**
 * AddressRoles defines a gRPC query method that returns address roles in the
 * namespace
 *
 * @generated from rpc injective.permissions.v1beta1.Query.AddressRoles
 */
export declare const QueryAddressRolesService: {
    readonly typeName: "injective.permissions.v1beta1.Query";
    readonly method: "AddressRoles";
    readonly Request: typeof QueryAddressRolesRequest;
    readonly Response: typeof QueryAddressRolesResponse;
};
/**
 * AddressesByRole defines a gRPC query method that returns a namespace's
 * roles associated with the provided address.
 *
 * @generated from rpc injective.permissions.v1beta1.Query.AddressesByRole
 */
export declare const QueryAddressesByRoleService: {
    readonly typeName: "injective.permissions.v1beta1.Query";
    readonly method: "AddressesByRole";
    readonly Request: typeof QueryAddressesByRoleRequest;
    readonly Response: typeof QueryAddressesByRoleResponse;
};
/**
 * VouchersForAddress defines a gRPC query method that returns a map of
 * vouchers that are held by permissions module for this address, keyed by the
 * originator address
 *
 * @generated from rpc injective.permissions.v1beta1.Query.VouchersForAddress
 */
export declare const QueryVouchersForAddressService: {
    readonly typeName: "injective.permissions.v1beta1.Query";
    readonly method: "VouchersForAddress";
    readonly Request: typeof QueryVouchersForAddressRequest;
    readonly Response: typeof QueryVouchersForAddressResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map
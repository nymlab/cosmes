import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Deposit, DepositParams, Proposal, TallyParams, Vote, VotingParams } from "./gov_pb.js";
/**
 * GenesisState defines the gov module's genesis state.
 *
 * @generated from message cosmos.gov.v1beta1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * starting_proposal_id is the ID of the starting proposal.
     *
     * @generated from field: uint64 starting_proposal_id = 1;
     */
    startingProposalId: bigint;
    /**
     * deposits defines all the deposits present at genesis.
     *
     * @generated from field: repeated cosmos.gov.v1beta1.Deposit deposits = 2;
     */
    deposits: Deposit[];
    /**
     * votes defines all the votes present at genesis.
     *
     * @generated from field: repeated cosmos.gov.v1beta1.Vote votes = 3;
     */
    votes: Vote[];
    /**
     * proposals defines all the proposals present at genesis.
     *
     * @generated from field: repeated cosmos.gov.v1beta1.Proposal proposals = 4;
     */
    proposals: Proposal[];
    /**
     * params defines all the parameters of related to deposit.
     *
     * @generated from field: cosmos.gov.v1beta1.DepositParams deposit_params = 5;
     */
    depositParams?: DepositParams;
    /**
     * params defines all the parameters of related to voting.
     *
     * @generated from field: cosmos.gov.v1beta1.VotingParams voting_params = 6;
     */
    votingParams?: VotingParams;
    /**
     * params defines all the parameters of related to tally.
     *
     * @generated from field: cosmos.gov.v1beta1.TallyParams tally_params = 7;
     */
    tallyParams?: TallyParams;
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map
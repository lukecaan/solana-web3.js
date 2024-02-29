type CustomProgramError = number;

// Keep synced with RPC source: https://github.com/anza-xyz/agave/blob/master/sdk/program/src/instruction.rs
type InstructionError =
    | 'GenericError'
    | 'InvalidArgument'
    | 'InvalidInstructionData'
    | 'InvalidAccountData'
    | 'AccountDataTooSmall'
    | 'InsufficientFunds'
    | 'IncorrectProgramId'
    | 'MissingRequiredSignature'
    | 'AccountAlreadyInitialized'
    | 'UninitializedAccount'
    | 'UnbalancedInstruction'
    | 'ModifiedProgramId'
    | 'ExternalAccountLamportSpend'
    | 'ExternalAccountDataModified'
    | 'ReadonlyLamportChange'
    | 'ReadonlyDataModified'
    | 'DuplicateAccountIndex'
    | 'ExecutableModified'
    | 'RentEpochModified'
    | 'NotEnoughAccountKeys'
    | 'AccountNotExecutable'
    | 'AccountBorrowFailed'
    | 'AccountBorrowOutstanding'
    | 'DuplicateAccountOutOfSync'
    | { Custom: CustomProgramError }
    | 'InvalidError'
    | 'ExecutableDataModified'
    | 'ExecutableLamportChange'
    | 'ExecutableAccountNotRentExempt'
    | 'UnsupportedProgramId'
    | 'CallDepth'
    | 'MissingAccount'
    | 'ReentrancyNotAllowed'
    | 'MaxSeedLengthExceeded'
    | 'InvalidSeeds'
    | 'InvalidRealloc'
    | 'ComputationalBudgetExceeded'
    | 'PrivilegeEscalation'
    | 'ProgramEnvironmentSetupFailure'
    | 'ProgramFailedToComplete'
    | 'ProgramFailedToCompile'
    | 'Immutable'
    | 'IncorrectAuthority'
    | { BorshIoError: string }
    | 'AccountNotRentExempt'
    | 'InvalidAccountOwner'
    | 'ArithmeticOverflow'
    | 'UnsupportedSysvar'
    | 'IllegalOwner'
    | 'MaxAccountsDataAllocationsExceeded'
    | 'MaxAccountsExceeded'
    | 'MaxInstructionTraceLengthExceeded'
    | 'BuiltinProgramsMustConsumeComputeUnits';

type InstructionIndex = number;
type AccountIndex = number;

// Keep synced with RPC source: https://github.com/anza-xyz/agave/blob/master/sdk/src/transaction/error.rs
export type TransactionError =
    | 'AccountInUse'
    | 'AccountLoadedTwice'
    | 'AccountNotFound'
    | 'ProgramAccountNotFound'
    | 'InsufficientFundsForFee'
    | 'InvalidAccountForFee'
    | 'AlreadyProcessed'
    | 'BlockhashNotFound'
    | { InstructionError: [InstructionIndex, InstructionError] }
    | 'CallChainTooDeep'
    | 'MissingSignatureForFee'
    | 'InvalidAccountIndex'
    | 'SignatureFailure'
    | 'InvalidProgramForExecution'
    | 'SanitizeFailure'
    | 'ClusterMaintenance'
    | 'AccountBorrowOutstanding'
    | 'WouldExceedMaxBlockCostLimit'
    | 'UnsupportedVersion'
    | 'InvalidWritableAccount'
    | 'WouldExceedMaxAccountCostLimit'
    | 'WouldExceedAccountDataBlockLimit'
    | 'TooManyAccountLocks'
    | 'AddressLookupTableNotFound'
    | 'InvalidAddressLookupTableOwner'
    | 'InvalidAddressLookupTableData'
    | 'InvalidAddressLookupTableIndex'
    | 'InvalidRentPayingAccount'
    | 'WouldExceedMaxVoteCostLimit'
    | 'WouldExceedAccountDataTotalLimit'
    | { DuplicateInstruction: InstructionIndex }
    | { InsufficientFundsForRent: { account_index: AccountIndex } }
    | 'MaxLoadedAccountsDataSizeExceeded'
    | 'InvalidLoadedAccountsDataSizeLimit'
    | 'ResanitizationNeeded'
    | { ProgramExecutionTemporarilyRestricted: { account_index: AccountIndex } }
    | 'UnbalancedTransaction';
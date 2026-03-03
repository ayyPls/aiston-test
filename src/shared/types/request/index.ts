enum ERequestPriority {
    LOW = 0,
    MEDIUM = 1,
    HIGH = 2,
    CRITICAL = 3
}

enum ERequestStatus {
    NEW,
    CANCELED,
    DONE,
    CLOSED,
    SPARE_PARTS_AWAITING,
    UNDER_CONCIDERATION
}

enum ERequestCategory {
    FRIDGES,
    AIR_CONDITIONAIR,
    IT,
    PLUMBING,
    CASH_REGISTER,
    MEASURING_EQUIPMENT
}

interface IRequestAddress {
    readonly id: string
    address: string
}

interface IUser {
    readonly id: string
    name: string
}

interface IRequestDto {
    readonly id: string
    readonly code: string
    createdAt: string
    priopity: ERequestPriority
    theme: string
    description: string
    category: ERequestCategory
    reactionTime: string
    solutionTime?: string
    status: ERequestStatus
    address: IRequestAddress
    executor?: IUser
}

export {
    ERequestCategory,
    ERequestPriority,
    ERequestStatus
}

export type {
    IRequestDto,
    IRequestAddress,
}
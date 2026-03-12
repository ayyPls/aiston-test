interface IUUID {
    readonly id: string
}

enum ERequestPriority {
    LOW = "0",
    MEDIUM = "1",
    HIGH = "2",
    CRITICAL = "3"
}

enum ERequestStatus {
    NEW = "NEW",
    CANCELED = "CANCELED",
    DONE = "DONE",
    CLOSED = "CLOSED",
    PAUSED = "PAUSED",
    IN_PROCESS = "IN_PROCESS",
    SPARE_PARTS_AWAITING = "SPARE_PARTS_AWAITING",
    UNDER_CONCIDERATION = "UNDER_CONCIDERATION",
}

enum ERequestCategory {
    FRIDGES = "FRIDGES",
    AIR_CONDITIONAIR = "AIR_CONDITIONAIR",
    IT = "IT",
    PLUMBING = "PLUMBING",
    CASH_REGISTER = "CASH_REGISTER",
    MEASURING_EQUIPMENT = "MEASURING_EQUIPMENT"
}

interface IRequestAddress extends IUUID {
    address: string
}

interface IUser extends IUUID {
    name: string
}

interface IRequestDto extends IUUID {
    readonly code: string
    createdAt: string
    priority: ERequestPriority
    theme: string
    description: string
    category: ERequestCategory
    reactionTime: number
    solutionTime?: number
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
    IUUID,
    IRequestDto,
    IRequestAddress,
}
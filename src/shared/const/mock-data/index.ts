import { ERequestCategory, ERequestPriority, ERequestStatus, IRequestDto } from "@shared/types/request";

const MOCK_REQUESTS_DATA: IRequestDto[] = [
    {   id: crypto.randomUUID(),
        code: "КС-0002",
        createdAt: new Date().toISOString(),
        priority: ERequestPriority.CRITICAL,
        theme: "Тема",
        description: "",
        category: ERequestCategory.MEASURING_EQUIPMENT,
        reactionTime: "",
        solutionTime: "",
        status: ERequestStatus.SPARE_PARTS_AWAITING,
        address: {
            id: crypto.randomUUID(),
            address: "Геленджик Островского 7"
        },
        executor: {
            id: crypto.randomUUID(),
            name: "Иванов Иван Иванович"
        }
    },
        {   id: crypto.randomUUID(),
        code: "КС-0003",
        createdAt: new Date().toISOString(),
        priority: ERequestPriority.LOW,
        theme: "Тема",
        description: "",
        category: ERequestCategory.CASH_REGISTER,
        reactionTime: "",
        solutionTime: "",
        status: ERequestStatus.DONE,
        address: {
            id: crypto.randomUUID(),
            address: "Геленджик Островского 7"
        },
        executor: {
            id: crypto.randomUUID(),
            name: "Иванов Иван Иванович"
        }
    },    {   id: crypto.randomUUID(),
        code: "КС-0004",
        createdAt: new Date().toISOString(),
        priority: ERequestPriority.MEDIUM,
        theme: "Тема",
        description: "",
        category: ERequestCategory.FRIDGES,
        reactionTime: "",
        solutionTime: "",
        status: ERequestStatus.CLOSED,
        address: {
            id: crypto.randomUUID(),
            address: "Геленджик Островского 7"
        },
        executor: {
            id: crypto.randomUUID(),
            name: "Иванов Иван Иванович"
        }
    },    {   id: crypto.randomUUID(),
        code: "КС-0005",
        createdAt: new Date().toISOString(),
        priority: ERequestPriority.HIGH,
        theme: "Тема",
        description: "",
        category: ERequestCategory.AIR_CONDITIONAIR,
        reactionTime: "",
        solutionTime: "",
        status: ERequestStatus.NEW,
        address: {
            id: crypto.randomUUID(),
            address: "Геленджик Островского 7"
        },
        executor: {
            id: crypto.randomUUID(),
            name: "Иванов Иван Иванович"
        }
    },    {   id: crypto.randomUUID(),
        code: "КС-0006",
        createdAt: new Date().toISOString(),
        priority: ERequestPriority.CRITICAL,
        theme: "Тема",
        description: "",
        category: ERequestCategory.IT,
        reactionTime: "",
        solutionTime: "",
        status: ERequestStatus.UNDER_CONCIDERATION,
        address: {
            id: crypto.randomUUID(),
            address: "Геленджик Островского 7"
        },
        executor: {
            id: crypto.randomUUID(),
            name: "Иванов Иван Иванович"
        }
    },
]

export default MOCK_REQUESTS_DATA
import { ERequestCategory, ERequestPriority, ERequestStatus, IRequestDto } from "@shared/types/request";
import { generateDateTime } from "@shared/utils/datetime";

const MOCK_REQUESTS_DATA: IRequestDto[] = [
    {
        id: crypto.randomUUID(),
        code: "КС-0002",
        createdAt: new Date().toISOString(),
        priority: ERequestPriority.CRITICAL,
        theme: "Тема",
        description: "",
        category: ERequestCategory.MEASURING_EQUIPMENT,
        reactionTime: 100000,
        status: ERequestStatus.DONE,
        address: {
            id: crypto.randomUUID(),
            address: "Геленджик Островского 7"
        },
        executor: {
            id: crypto.randomUUID(),
            name: "Федоровский Н."
        }
    },
    {
        id: crypto.randomUUID(),
        code: "КС-0003",
        createdAt: generateDateTime(),
        priority: ERequestPriority.LOW,
        theme: "Сломался кассовый терминал",
        description: "",
        category: ERequestCategory.CASH_REGISTER,
        reactionTime: 1000,
        solutionTime: 560000,
        status: ERequestStatus.CANCELED,
        address: {
            id: crypto.randomUUID(),
            address: "Геленджик Островского 7"
        },
        executor: {
            id: crypto.randomUUID(),
            name: "Федоровский Н."
        }
    }, {
        id: crypto.randomUUID(),
        code: "КС-0004",
        createdAt: generateDateTime(),
        priority: ERequestPriority.MEDIUM,
        theme: "Тема",
        description: "",
        category: ERequestCategory.FRIDGES,
        reactionTime: 1000,
        solutionTime: 560000,
        status: ERequestStatus.CLOSED,
        address: {
            id: crypto.randomUUID(),
            address: "Геленджик Островского 7"
        },
        executor: {
            id: crypto.randomUUID(),
            name: "Федоровский Н."
        }
    }, {
        id: crypto.randomUUID(),
        code: "КС-0005",
        createdAt: generateDateTime(),
        priority: ERequestPriority.HIGH,
        theme: "Тема",
        description: "",
        category: ERequestCategory.AIR_CONDITIONAIR,
        reactionTime: 1000,
        solutionTime: 560000,
        status: ERequestStatus.IN_PROCESS,
        address: {
            id: crypto.randomUUID(),
            address: "Геленджик Островского 7"
        },
        executor: {
            id: crypto.randomUUID(),
            name: "Федоровский Н."
        }
    },
    {
        id: crypto.randomUUID(),
        code: "КС-0006",
        createdAt: generateDateTime(),
        priority: ERequestPriority.CRITICAL,
        theme: "Проблемы с интернетом",
        description: "",
        category: ERequestCategory.IT,
        reactionTime: 1000,
        solutionTime: 560000,
        status: ERequestStatus.SPARE_PARTS_AWAITING,
        address: {
            id: crypto.randomUUID(),
            address: "Геленджик Островского 7"
        },
        executor: {
            id: crypto.randomUUID(),
            name: "Федоровский Н."
        }
    },
    {
        id: crypto.randomUUID(),
        code: "КС-0006",
        createdAt: generateDateTime(),
        priority: ERequestPriority.LOW,
        theme: "Не работает принтер",
        description: "",
        category: ERequestCategory.IT,
        reactionTime: 1000,
        solutionTime: 560000,
        status: ERequestStatus.NEW,
        address: {
            id: crypto.randomUUID(),
            address: "Геленджик Островского 7"
        },
        executor: {
            id: crypto.randomUUID(),
            name: "Федоровский Н."
        }
    },
]

export default MOCK_REQUESTS_DATA
import { ERequestCategory, ERequestPriority, ERequestStatus } from "@shared/types/request"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import { II18nResources } from "./interface"

// TODO: typed array of languages?

const resources: II18nResources = {
    ru: {
        translation: {
            request: {
                id: "ID",
                code: "№",
                status: "Статус",
                createdAt: "Создана",
                priority: "Приоритет",
                theme: "Тема",
                category: "Категория",
                executor: "Техник",
                reactionTime: "Реакция",
                solutionTime: "Решение",
                description: "Описание",
                address: "Аптека"
            },
            requestStatus: {
                [ERequestStatus.NEW]: "Новый",
                [ERequestStatus.CANCELED]: "Отменена",
                [ERequestStatus.DONE]: "Готов",
                [ERequestStatus.CLOSED]: "Закрыта",
                [ERequestStatus.SPARE_PARTS_AWAITING]: "Ожидает запчастей",
                [ERequestStatus.UNDER_CONCIDERATION]: "На рассмотрении",
            },
            requestCategory: {
                [ERequestCategory.AIR_CONDITIONAIR]: "Кондиционер",
                [ERequestCategory.IT]: "IT",
                [ERequestCategory.FRIDGES]: "Холодильники",
                [ERequestCategory.PLUMBING]: "Сантехника",
                [ERequestCategory.CASH_REGISTER]: "Кассовый аппарат",
                [ERequestCategory.MEASURING_EQUIPMENT]: "Измерительное оборудование"
            },
            requestPriority: {
                [ERequestPriority.LOW]: "Низкий",
                [ERequestPriority.MEDIUM]: "Средний",
                [ERequestPriority.HIGH]: "Высокий",
                [ERequestPriority.CRITICAL]: "Критический",
            }
        }
    }
}

i18n.use(initReactI18next).init({ resources, lng: "ru" })

export default i18n
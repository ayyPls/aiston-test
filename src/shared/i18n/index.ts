import { ERequestCategory, ERequestPriority, ERequestStatus } from "@shared/types/request"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import { II18nResources } from "./interface"
import { EAppRouterPath } from "@app/router/paths"

// TODO: typed array of languages

const resources: II18nResources = {
    ru: {
        translation: {
            routes: {
                [EAppRouterPath.DEFAULT]: "Заявки",
                [EAppRouterPath.NOT_FOUND]: "Отчеты",
                [EAppRouterPath.ANY_PATH]: "Справочники",
            },
            datetime: {
                today: "Сегодня",
                yesterday: "Вчера",
                // TODO: etc..
                january: "январе",
                february: "феврале",
                march: "марте",
            },
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
                [ERequestStatus.NEW]: "Новая",
                [ERequestStatus.CANCELED]: "Отклонена",
                [ERequestStatus.DONE]: "Готовo",
                [ERequestStatus.PAUSED]: "На паузе",
                [ERequestStatus.CLOSED]: "Закрыто",
                [ERequestStatus.SPARE_PARTS_AWAITING]: "Ожидает запчастей",
                [ERequestStatus.UNDER_CONCIDERATION]: "На рассмотрении",
                [ERequestStatus.IN_PROCESS]: "В работе",
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
            },
            requestPriorityDescription: {
                [ERequestPriority.LOW]: "не влияет на эффективность, не стопорит",
                [ERequestPriority.MEDIUM]: "влияет на эффективность, но не стопорит",
                [ERequestPriority.HIGH]: "влияет на эффективность, но стопорит",
                [ERequestPriority.CRITICAL]: "влияет на эффективность, стопорит",
            }
        }
    }
}

i18n.use(initReactI18next).init({ resources, lng: "ru" })

export default i18n
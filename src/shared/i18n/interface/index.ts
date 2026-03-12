import { EAppRouterPath } from "@app/router/paths"
import { ERequestCategory, ERequestPriority, ERequestStatus, IRequestDto } from "@shared/types/request"
import { Resource } from "i18next"

interface II18nDatetime {
    today: string
    yesterday: string
    // TODO: etc...
    january: string
    february: string
    march: string
}

interface II18nResources extends Resource {
    ru: {
        translation: {
            routes: Record<EAppRouterPath, string>
            datetime: Record<keyof II18nDatetime, string>
            request: Record<keyof IRequestDto, string>
            requestStatus: Record<ERequestStatus, string>
            requestCategory: Record<ERequestCategory, string>
            requestPriority: Record<ERequestPriority, string>
            requestPriorityDescription: Record<ERequestPriority, string>
        }
    }
}

type II18nResourcesPrefixes = keyof II18nResources['ru']['translation']

export type {
    II18nDatetime,
    II18nResources,
    II18nResourcesPrefixes
}

import { ERequestCategory, ERequestPriority, ERequestStatus, IRequestDto } from "@shared/types/request"
import { Resource } from "i18next"

interface II18nResources extends Resource {
    ru: {
        translation: {
            request: Record<keyof IRequestDto, string>
            requestStatus: Record<ERequestStatus, string>
            requestCategory: Record<ERequestCategory, string>
            requestPriority: Record<ERequestPriority, string>
        }
    }
}

type II18nResourcesPrefixes = keyof II18nResources['ru']['translation']

export type {
    II18nResources,
    II18nResourcesPrefixes
}

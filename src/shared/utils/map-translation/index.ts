import { IRequestDto } from "@shared/types/request"
import i18n from "@shared/i18n"
import { ICompareFunction } from "@shared/types/common"


const mapRequestPropertyTranslation = (entity: IRequestDto, property: keyof IRequestDto): string => {
    switch(property) {
        case "address": return entity.address.address
        case "executor": return entity.executor?.name ?? "---"
        case "status": return i18n.t(`requestStatus.${entity[property]}`)
        case "category": return i18n.t(`requestCategory.${entity[property]}`)
        case "priority": return i18n.t(`requestPriority.${entity[property]}`)
        default: return  entity[property] ?? ""
    }
}

const mapRequestPropertyCompareAlgorythm = (property: keyof IRequestDto): ICompareFunction<IRequestDto> => {
    switch(property) {
        case 'priority': return (a, b) => a[property] - b[property]
        default: return (a, b) => mapRequestPropertyTranslation(a, property).localeCompare(mapRequestPropertyTranslation(b, property))
    }
}

export { 
    mapRequestPropertyTranslation,
    mapRequestPropertyCompareAlgorythm,
}

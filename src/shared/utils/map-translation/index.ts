import { IRequestDto } from "@shared/types/request"
import i18n from "@shared/i18n"


const mapRequestPropertyTranslation = (entity: IRequestDto, property: keyof IRequestDto) => {
    switch(property) {
        case "address": return entity.address.address
        case "executor": return entity.executor?.name ?? "---"
        case "status": return i18n.t(`requestStatus.${entity[property]}`)
        case "category": return i18n.t(`requestCategory.${entity[property]}`)
        case "priority": return i18n.t(`requestPriority.${entity[property]}`)
        default: return  entity[property]
    }
}

export { 
    mapRequestPropertyTranslation,
}
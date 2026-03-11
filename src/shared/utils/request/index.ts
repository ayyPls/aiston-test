import { IRequestDto } from "@shared/types/request"
import i18n from "@shared/i18n"
import { ICompareFunction } from "@shared/types/common"


const mapRequestPropertyTranslation = (entity: IRequestDto, property: keyof IRequestDto): string => {
    switch (property) {
        case "address": return entity.address.address
        case "executor": return entity.executor?.name ?? "—"
        case "status": return i18n.t(`requestStatus.${entity[property]}`)
        case "category": return i18n.t(`requestCategory.${entity[property]}`)
        case "priority": return i18n.t(`requestPriority.${entity[property]}`)
        case "reactionTime": {
            const minutes = Math.floor(entity[property] / 60000).toString().padStart(2, '0')
            const seconds = +((entity[property] % 60000) / 1000).toFixed(0)
            return minutes + ":" + (seconds < 10 ? '0' : '') + seconds
        }
        case "solutionTime": {
            if (!entity[property]) return "—"
            const hours = Math.floor(entity[property] / 3600000).toString().padStart(2, '0')
            const minutes = Math.floor(entity[property] / 60000).toString().padStart(2, '0')
            const seconds = +((entity[property] % 60000) / 1000).toFixed(0)
            return hours + ":" + minutes + ":" + (seconds < 10 ? '0' : '') + seconds
        }
        case "createdAt": {
            const dateFormatter = new Intl.DateTimeFormat()
            return dateFormatter.format(new Date(entity.createdAt))
        }
        default: return entity[property] ?? ""
    }
}

const mapRequestPropertyCompareAlgorythm = (property: keyof IRequestDto): ICompareFunction<IRequestDto> => {
    switch (property) {
        case 'priority': return (a, b) => a[property] - b[property]
        default: return (a, b) => mapRequestPropertyTranslation(a, property).localeCompare(mapRequestPropertyTranslation(b, property))
    }
}



export {
    mapRequestPropertyTranslation,
    mapRequestPropertyCompareAlgorythm,
}

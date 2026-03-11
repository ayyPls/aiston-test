import i18n from "@shared/i18n"
import { IRequestDto } from "@shared/types/request"

const generateDateTime = () => {
    return new Date(2026, 0, (Math.random() + 1) * 30).toISOString()
}

const groupRequestsByCreatedAtTime = (requests: IRequestDto[]) => {
    const result = {}

    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const yesterday = new Date(today)
    yesterday.setDate(today.getDate() - 1)

    const monthFormatter = new Intl.DateTimeFormat("en", { month: "long" })
    const monthYearFormatter = new Intl.DateTimeFormat("en", { month: "long", year: "numeric" })

    for (const request of requests) {
        const date = new Date(request.createdAt)
        const itemDay = new Date(date.getFullYear(), date.getMonth(), date.getDate())

        let key

        if (itemDay.getTime() === today.getTime()) {
            key = i18n.t("datetime.today")
        } else if (itemDay.getTime() === yesterday.getTime()) {
            key = i18n.t("datetime.yesterday")
        } else if (date.getFullYear() === now.getFullYear()) {
            key = `В ${i18n.t("datetime." + monthFormatter.format(date).toLowerCase())} ${date.getFullYear()}`
        } else {
            key = monthYearFormatter.format(date)
        }

        if (!result[key]) {
            result[key] = []
        }

        result[key].push(request)
    }

    return result
}



export {
    generateDateTime,
    groupRequestsByCreatedAtTime
}
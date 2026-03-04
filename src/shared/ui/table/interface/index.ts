import { ReactNode } from "react"
import { IUUID } from "@shared/types/request"
import { II18nResourcesPrefixes } from "@shared/i18n/interface"

type ITableEntity = IUUID

interface ITableProps<T extends ITableEntity> {
    data: T[]
    mapEntityPropertyFn: (entity: T, property: keyof T) => ReactNode | string | undefined 
    properties: Array<keyof T>
    i18nPrefix: II18nResourcesPrefixes
}

export type {
    ITableProps,
    ITableEntity
}

import { IUUID } from "@shared/types/request"
import { II18nResourcesPrefixes } from "@shared/i18n/interface"
import { ICompareFunction } from "@shared/types/common"

type ITableEntity = IUUID

interface ITableProps<T extends ITableEntity> {
    data: T[]
    mapEntityPropertyFn: (entity: T, property: keyof T) => string | undefined
    comparePropertyFn?: (property: keyof T) => ICompareFunction<T>
    properties: Array<keyof T>
    i18nPrefix: II18nResourcesPrefixes
}

export type {
    ITableProps,
    ITableEntity
}

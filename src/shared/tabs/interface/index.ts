interface ITabEntity<T> {
    label: string
    value: T
}

interface ITabsProps<T extends string> {
    options: Array<ITabEntity<T>>,
    value: string | undefined
    onChange: (value?: T) => void
}

export type {
    ITabsProps,
    ITabEntity
}
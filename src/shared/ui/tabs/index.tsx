import Button from "@shared/ui/button"
import { ITabsProps } from "./interface"



const Tabs = <T extends string,>({options, value, onChange}: ITabsProps<T>) => {
    return options.map((option, index) =>  <Button
                    key={index}
                    variant={option.value === value ? "primary" : undefined}
                    onClick={() => onChange(option.value)}
                    scrollSnapAlign="start"
                >
                {option.label}
            </Button>
    )
}

export default Tabs
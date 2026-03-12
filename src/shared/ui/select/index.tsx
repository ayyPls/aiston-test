import { chakra } from "@chakra-ui/react"
import { ComponentProps, FC, SyntheticEvent } from "react"
import SelectArrow from "@assets/icons/select-icon.svg"

const StyledSelect = chakra("select", {
    base: {
        background: "transparent",
        fontWeight: "semibold",
        appearance: "none",
        backgroundImage: `url("${SelectArrow}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
        paddingRight: "24px",
        fontSize: "20px",
        cursor: "pointer",
    },
})

const StyledOption = chakra("option", {
    base: {
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
    }
})

interface ISelectProps extends Omit<ComponentProps<typeof StyledSelect>, "onSelect"> {
    options: Array<string>
    onSelect: (option: string) => void
    placeholder?: string
}

// TODO: rewrite to Chakra Select component

const Select: FC<ISelectProps> = ({ placeholder, options, name, onSelect, ...props }) => {
    const handleOnSelect = (event: SyntheticEvent<HTMLSelectElement>) => {
        onSelect(event.currentTarget.value)
    }
    return <StyledSelect onChange={handleOnSelect} {...props}>
        {placeholder && <StyledOption value="" disabled hidden>{placeholder}</StyledOption>}
        {
            options.map((option, index) => <StyledOption value={option} key={index}>
                {option}
            </StyledOption>)
        }
    </StyledSelect>
}

export default Select
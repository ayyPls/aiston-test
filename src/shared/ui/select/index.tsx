import { chakra } from "@chakra-ui/react"
import { FC, SyntheticEvent } from "react"
import SelectArrow from "@shared/assets/icons/select-icon.svg"

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
        cursor: "pointer"
    }
})

const StyledOption = chakra("option", {
    base: {
        maxHeight: "24px"
    }
})

interface ISelectProps{
    options: Array<string>
    onSelect: (option: string) => void
}

// NOTE: rewrite to Chakra Select component

const Select:FC<ISelectProps> = ({ options, onSelect }) => {
    const handleOnSelect = (event: SyntheticEvent<HTMLSelectElement>) => {
        onSelect(event.currentTarget.value)
    }
    return <StyledSelect name="selectName" onChange={handleOnSelect}>
        {
            options.map((option, index) => <StyledOption value={option} key={index}>
                {option}
            </StyledOption>) 
        }
    </StyledSelect>
}

export default Select
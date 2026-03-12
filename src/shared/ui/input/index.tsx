import { chakra } from "@chakra-ui/react";
import { ComponentProps, FC } from "react";
import SearchIcon from "@assets/icons/search.svg"


const StyledInput = chakra("input", {
    base: {
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "borderGray",
        width: "full",
        paddingX: "13px",
        borderRadius: "4px",
        _placeholder: {
            color: "#ABABAB"
        },
    },
    variants: {
        variant: {
            search: {
                backgroundImage: `url("${SearchIcon}")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                backgroundPositionX: "10px",
                paddingLeft: "37px"
            }
        }
    }
})

interface IInputProps extends ComponentProps<typeof StyledInput> {
    startIcon?: string
}

const Input: FC<IInputProps> = (props) => {
    return <StyledInput {...props} />
}

export default Input
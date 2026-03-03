import { chakra } from "@chakra-ui/react";
import { ComponentProps, FC } from "react";

// TODO: add variants for primary and default
const StyledButton = chakra("button", {
    base: {
        backgroundColor: "gray",
        padding: "8px 17px",
        cursor: "pointer",
        textWrap: "nowrap"
    },
    variants: {
        variant: {
            primary: {
                backgroundColor: "black",
                color: "white"
            }
        }
    }
})


// TODO: rewrite with chakra composition(?)
interface IButtonProps extends ComponentProps<typeof StyledButton> {
    __TEMP?: "TEMP"
}

const Button: FC<IButtonProps> = (props)=> {
    return <StyledButton {...props} />
}

export default Button
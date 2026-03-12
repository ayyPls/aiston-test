import { chakra } from "@chakra-ui/react";
import { ComponentProps, FC } from "react";

const StyledButton = chakra("button", {
    base: {
        backgroundColor: "gray",
        padding: {
            base: "4px 12px",
            md: "8px 17px",
        },
        cursor: "pointer",
        textWrap: "nowrap",
        borderRadius: "4px",
        _hover: {
            backgroundColor: "ButtonHighlight"
        }
    },

    variants: {
        variant: {
            primary: {
                backgroundColor: "black",
                color: "white",
                _hover: {
                    backgroundColor: "ButtonText"
                }
            },
            outlined: {
                border: "1px solid #D9E1EC",

            }
        }
    }
})


// TODO: rewrite with chakra composition(?)
interface IButtonProps extends ComponentProps<typeof StyledButton> { }

const Button: FC<IButtonProps> = (props) => {
    return <StyledButton {...props} />
}

export default Button
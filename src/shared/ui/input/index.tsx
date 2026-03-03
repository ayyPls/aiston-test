import { chakra } from "@chakra-ui/react";

const Input = chakra("input", {
    base: {
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "borderGray",
        width: "full",
        paddingX: "13px"
    }
})

export default Input
import { chakra, Text } from "@chakra-ui/react";

// TODO: font
const RequestCode = chakra(Text, {
    base: {
        padding: ".125rem .375rem",
        borderRadius: ".25rem",
        fontSize: ".875rem",
        fontWeight: 500
    },
})


export { RequestCode }
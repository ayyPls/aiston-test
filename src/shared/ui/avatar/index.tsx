import { chakra } from "@chakra-ui/react";

// TODO: loader/skeleton
const Avatar = chakra("div", {
    base: {
        backgroundColor: "gray",
        backgroundImage: 'url("https://thispersondoesnotexist.com/")',        width: "2rem",
        height: "2rem",
        backgroundRepeat: "no-repeat",
        borderRadius: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover"
    }
})

export { Avatar }
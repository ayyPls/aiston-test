import { chakra, Flex } from "@chakra-ui/react"
import { FC } from "react"

interface IIconProps {
    src: string
}

const Icon: FC<IIconProps> = ({ src }) => {
    const IconComponent = chakra(Flex, {
        base: {
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            width: "1.5rem",
            height: "1.5rem",
            backgroundImage: `url("${src}")`
        },
    })

    return <IconComponent/>
}

export { Icon }
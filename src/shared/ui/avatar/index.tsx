import { Badge, Avatar, chakra } from "@chakra-ui/react";
import { FC } from "react";

const StyledUserNotificationsBadge = chakra(Badge, {
    base: {
        position: "absolute",
        transformOrigin: "center center",
        transform: "translate(calc(100%), -100%)",
        backgroundColor: "#B93C3C",
        width: "20px",
        height: "20px",
        color: "#F1F1F1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "100%"
    }
})

const UserAvatarWrapper = chakra("div", {
    base: {
        position: 'relative'
    }
})

interface IUserAvatarProps {
    notificationsCount?: number
}

const UserAvatar: FC<IUserAvatarProps> = ({ notificationsCount }) => {
    return <UserAvatarWrapper>
        <Avatar.Root size="sm">
            <Avatar.Image src="https://placehold.co/600x400" />
            <Avatar.Fallback />
        </Avatar.Root>
        {notificationsCount && <StyledUserNotificationsBadge>{notificationsCount}</StyledUserNotificationsBadge>}
    </UserAvatarWrapper>
}

export default UserAvatar
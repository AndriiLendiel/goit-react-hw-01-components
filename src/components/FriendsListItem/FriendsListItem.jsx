import { FriendItem, ChipOnline, Avatar } from "./FriendListItem.styled"

export const FriendListItem = ({avatar,name,isOnline,id}) => {
    return (

        <FriendItem key={id}>
  <ChipOnline online={isOnline}></ChipOnline>
  <Avatar src={avatar} alt="User avatar" width="120" />
  <p className="name">{name}</p>
</FriendItem>

    )

}


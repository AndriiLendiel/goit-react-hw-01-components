import { FriendListItem } from "../FriendsListItem/FriendsListItem"


export const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
        {friends.map(({id, isOnline, avatar, name}) => (
            <FriendListItem 
            id={id}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            />
        ))}

</ul>
    )
}
import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
    return (
            <ul className={s.friendList}>
                {friends.map(({ avatar, name, isOnline, id }) => (
                    <li className={s.friendsItem} key={id}>
                        <span className={isOnline ? s.online : s.offline}></span>
                        <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
                        <p className={s.name}>{name}</p>
                    </li>
                ))}
            </ul>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
}

export default FriendList
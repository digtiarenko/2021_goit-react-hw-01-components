import React from 'react';
// import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => (
  <ul className="friendList">
    {friends.map(friend => (
      <FriendListItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        id={friend.id}
      />
    ))}
  </ul>
);

export default FriendList;

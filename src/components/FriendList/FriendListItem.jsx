import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import defaultPic from './defaultpic.png';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span className={isOnline ? styles.online : styles.offline}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name} </p>
    </>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
};

FriendListItem.defaultProps = {
  avatar: defaultPic,
  isOnline: false,
};

export default FriendListItem;

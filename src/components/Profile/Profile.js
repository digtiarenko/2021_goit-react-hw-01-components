import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

console.log(styles);

const Profile = props => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
          alt="Аватар пользователя"
          className={styles.avatar}
        />
        <p className={styles.name}>{props.name}</p>
        <p className="tag">@{props.tag}</p>
        <p className={styles.location}>{props.location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className="quantity">{props.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className="quantity">{props.views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className="quantity">{props.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;

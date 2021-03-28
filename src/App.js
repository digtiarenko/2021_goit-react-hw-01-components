import React from 'react';
import Profile from './components/Profile/Profile';
import StatsList from './components/Statistics/StatsList';
import FriendList from './components/FriendList/FriendList';
import user from './components/Profile/user.json';
import statisticalData from './components/Statistics/statistical-data.json';
import friends from './components/FriendList/friends.json';

const App = () => {
  return (
    <div>
      <h1>Задание 1</h1>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <h1>Задание 2</h1>
      <StatsList title="Upload stats" stats={statisticalData} />
      <h1>Задание 3</h1>
      <FriendList friends={friends} />
    </div>
  );
};

export default App;

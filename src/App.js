import React from 'react';
import Profile from './components/Profile';
import user from './user.json';

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
    </div>
  );
};

export default App;

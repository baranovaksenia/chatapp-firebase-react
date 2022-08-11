import React from 'react';

const Content = () => {
  const handleNameChange = () => {
    const names = ['alex', 'viktor', 'sarah'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };
  return (
    <div>
      <h2>hello {handleNameChange()}</h2>
    </div>
  );
};

export default Content;

import React from 'react';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import Navbar from './components/Navbar';
import Chat from './components/Chat';

const App = () => {
  const [user] = useAuthState(auth);
  // console.log(user);
  const style = {
    appContainer: `max-w-[728px] mx-auto text-center`,
    sectionContainer: `h-[90vh] bg-gray-100 flex flex-col mt-10 shadow-xl border relative`,
  };

  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        <Navbar />
        {/* show chat only if user logged in */}
        {user ? <Chat /> : null}
      </section>
    </div>
  );
};

export default App;

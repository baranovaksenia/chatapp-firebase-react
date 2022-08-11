import React from 'react';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignIn from './SignIn';
import LogOut from './LogOut';

const Header = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const style = {
    nav: `h-20 flex justify-between bg-gray-800 items-center p-4`,
    heading: `text-3xl text-white`,
  };
  return (
    <nav className={style.nav}>
      <h1 className={style.heading}>Chat App</h1>
      {user ? <LogOut /> : <SignIn />}
    </nav>
  );
};

export default Header;

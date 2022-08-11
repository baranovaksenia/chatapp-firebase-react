import { signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';
import { GoogleButton } from 'react-google-button';
import { auth } from '../firebase';

const SignIn = () => {
  const style = {
    wrapper: `flex justify-center`,
  };

  //sign in with Google
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  return (
    <div className={style.wrapper}>
      <GoogleButton type="light" onClick={googleSignIn} />
    </div>
  );
};

export default SignIn;

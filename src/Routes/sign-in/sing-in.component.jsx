import { Fragment } from "react";
import {
  signInWithGooglePopup,
  CreateUserDocumentFromAuth,
} from "../../Utils/firebase.utils";

const SignIn = () => {
  const logWithGooglePopup = async () => {
    var { user } = await signInWithGooglePopup();

    const UserDocRef = CreateUserDocumentFromAuth(user);
  };
  return (
    <Fragment>
      <h1>Sign in page</h1>
      <button onClick={logWithGooglePopup}>sign in with Google</button>
    </Fragment>
  );
};

export default SignIn;

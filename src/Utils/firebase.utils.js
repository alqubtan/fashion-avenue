import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqM9bmmTBKzmU4fucqUFSAah2VyLvyV_o",
  authDomain: "fashion-avenue-1.firebaseapp.com",
  projectId: "fashion-avenue-1",
  storageBucket: "fashion-avenue-1.appspot.com",
  messagingSenderId: "599038750754",
  appId: "1:599038750754:web:7fdb8ac13040a16bc9da7b",
};
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore();

export const CreateUserDocumentFromAuth = async (UserAuth) => {
  const UserDocRef = doc(db, "users", UserAuth.uid);

  const UserSnapchot = await getDoc(UserDocRef);

  if (!UserSnapchot.exists()) {
    const { uid, displayName, email, photoURL } = UserAuth;
    const createdAt = new Date();
    try {
      setDoc(UserDocRef, {
        uid,
        displayName,
        email,
        photoURL,
        createdAt,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return UserDocRef;
};

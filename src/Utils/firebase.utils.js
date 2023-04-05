import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

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

const GoogleProvider = new GoogleAuthProvider();

GoogleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

// Sign up with popup component
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, GoogleProvider);

const db = getFirestore();

// Sign up via userAuth
export const CreateUserDocumentFromAuth = async (
  UserAuth,
  additionalInformation = {}
) => {
  if (!UserAuth) return;
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
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return UserDocRef;
};

export const CreateAuthUserFromEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const SignInAuthUserFromEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const SignOutUser = async () => await signOut(auth);

export const onAuthStateChangedListner = (callback) =>
  onAuthStateChanged(auth, callback);

import {initializeApp} from 'firebase/app';
import {getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDvmOm6IYMzpj4Jjm0mF2uiXLJcRLINWzM",
  authDomain: "clwl-clothing-db.firebaseapp.com",
  projectId: "clwl-clothing-db",
  storageBucket: "clwl-clothing-db.firebasestorage.app",
  messagingSenderId: "627750038434",
  appId: "1:627750038434:web:ecead7f3235bd581a860fb"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
  if(!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt, 
        ...additionalInformation 
      });
    }catch(error){
      console.log('error creating the user', error.message);
    }   
  }
  return userDocRef;
};
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

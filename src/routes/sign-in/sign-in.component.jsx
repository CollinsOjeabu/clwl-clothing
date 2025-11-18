/**
 * LESSON: Firebase Authentication & Async/Await
 * 
 * Key Concepts:
 * 1. Firebase Functions: Import utility functions from firebase.utils
 * 2. Async/Await: Handle Firebase's asynchronous authentication
 * 3. Destructuring: Extract 'user' from signInWithGooglePopup response
 * 4. Callback Pattern: After auth success, create user document in Firestore
 * 5. Try/Catch: Error handling for authentication failures
 * 
 * Authentication Flow:
 * 1. User clicks \"Sign in with Google\"
 * 2. Google popup appears for user to select account
 * 3. Firebase returns user object
 * 4. Create user document in Firestore
 */

import {signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";


const SignIn = () => {

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
   


  return (
    <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        <SignUpForm />
        

    </div>
  )
}

export default SignIn;
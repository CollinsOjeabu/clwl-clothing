/**
 * LESSON: Form Management with Hooks & Firebase Authentication
 * 
 * Key Concepts:
 * 1. useState Hook: Manage form field values in state
 * 2. Controlled Components: Input values controlled by React state
 * 3. Spread Operator: {...formFields, [name]: value} updates only changed field
 * 4. Event Handling: onChange for input changes, onSubmit for form submission
 * 5. Form Validation: Check password match before submitting
 * 6. Async/Await: Handle Firebase authentication asynchronously
 * 7. Error Handling: Catch specific error codes (auth/email-already-in-use)
 * 8. Callback Pattern: After auth, create user document in Firestore
 */

import {useState} from 'react';
import './sign-up-form.styles.scss';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

    import { 
                createAuthUserWithEmailAndPassword, 
                createUserDocumentFromAuth 
            }
     from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword}= formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});


    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword){
            alert("passwords do not match");
            return;
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
        }catch(error){
            if (error.code === 'auth/email-already-in-use'){
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error', error);
            }
        }
    };
  return (
    <div className='sign-up-container'>
        <h2>Don't have an account</h2>
        <span>
            Sign up with your email and password
        </span>
        <form onSubmit={handleSubmit}>
            <FormInput label='Display Name' type='text' required onChange={handleChange} name="displayName" value={displayName} />
            
            <FormInput label='Email' type='email' required onChange={handleChange} name="email" value={email} />

            <FormInput label='Password' type='password' required onChange={handleChange} name="password" value={password}/>

            <FormInput label='Confirm Password' type='password' required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

            <Button buttonType='google' type='submit'>Sign Up</Button>
        </form>
    </div>
  )
}

export default SignUpForm;
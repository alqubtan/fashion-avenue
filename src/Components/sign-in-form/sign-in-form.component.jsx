import FormInput from "../form-input/form-input.component";
import {Button, BUTTON_TYPE_CLASSES} from "../button/button.component";
import {SignInContainer, ButtonsContainer} from "./sign-in-form.styles";
import { useState } from "react";

import {
  signInWithGooglePopup,
  SignInAuthUserFromEmailAndPassword,
} from "../../Utils/firebase/firebase.utils";

const SignInForm = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  // Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  // Reset form fields
  const ResetFields = () => {
    setFormFields(defaultFormFields);
  };

  // Handle form submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      return alert("Please fill all fields");
    }

    try {
      const { user } = await SignInAuthUserFromEmailAndPassword(
        email,
        password
      );

      ResetFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          return alert("Incorrect Password for Email");
        case "auth/user-not-found":
          return alert("No User Registered with that Email");
        case "auth/internal-error":
          return alert("Please Connect to the Internet");
        default:
          console.log(error);
      }
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };
  return (
    <SignInContainer>
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="E-mail"
          InputOptions={{
            name: "email",
            type: "email",
            value: email,
            onChange: handleChange,
            required: true,
          }}
        />
        <FormInput
          label="Password"
          InputOptions={{
            name: "password",
            type: "password",
            value: password,
            onChange: handleChange,
            required: true,
          }}
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
            Google Signin
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;

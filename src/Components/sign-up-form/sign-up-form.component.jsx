import { useState } from "react";
import {
  CreateAuthUserFromEmailAndPassword,
  CreateUserDocumentFromAuth,
} from "../../Utils/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

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

    if (!displayName || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
    }

    if (password != confirmPassword) {
      alert("Password not match!");
      return;
    }
    try {
      // register user vie firebase authentication
      const { user } = await CreateAuthUserFromEmailAndPassword(
        email,
        password
      );

      // save user to the db
      await CreateUserDocumentFromAuth(user, { displayName });

      // clear form
      ResetFields();
    } catch (error) {
      if ((error.code = "auth/email-already-in-use")) {
        alert("Can not register the user, Email already exsist.");
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          InputOptions={{
            name: "displayName",
            type: "text",
            value: displayName,
            onChange: handleChange,
            required: true,
          }}
        />
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

        <FormInput
          label="Confirm Password"
          InputOptions={{
            name: "confirmPassword",
            type: "password",
            value: confirmPassword,
            onChange: handleChange,
            required: true,
          }}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;

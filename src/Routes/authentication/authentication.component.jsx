import SignInForm from "../../Components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../Components/sign-up-form/sign-up-form.component";
import {AuthenticationContainer} from "./authentication.styles";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm></SignInForm>

      <SignUpForm></SignUpForm>
    </AuthenticationContainer>
  );
};

export default Authentication;

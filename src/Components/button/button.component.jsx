import {
  BaseButton,
  InvertedButton,
  GoogleSignInButton,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const BUTTON_TYPE_COMPONENTS = {
  base: BaseButton,
  'google-sign-in': GoogleSignInButton,
  inverted: InvertedButton,
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
  return BUTTON_TYPE_COMPONENTS[buttonType] || BaseButton;
};

export const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};



import { useState } from "react";
import styled from "styled-components";
import { Button, Col, FormControl, FormLabel } from "react-bootstrap";
import { Colors } from "../common";
import { handleLogin } from "../functions";
import { IFormControlValue, ILoginButtonProps } from "../customTypes";

export const Login = (props: ILoginButtonProps) => {
  const { setUserAuthenticated, setCurrentUser } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <StyledMainContainer>
      <StyledContainer>
        <StyledTitleCol>Sign in</StyledTitleCol>
        <StyledFormLabel htmlFor="email">Email</StyledFormLabel>
        <StyledInput
          onChange={(emailText: IFormControlValue) =>
            setEmail(emailText.target.value)
          }
          id="email"
          placeholder="Enter your email"
        />
        <StyledFormLabel htmlFor="password">Password</StyledFormLabel>
        <StyledInput
          onChange={(passwordText: IFormControlValue) =>
            setPassword(passwordText.target.value)
          }
          id="password"
          placeholder="Enter your password"
        />
        <AuthButton
          onClick={() =>
            handleLogin({
              email,
              password,
              setCurrentUser,
              setUserAuthenticated,
            })
          }
        >
          Login
        </AuthButton>
      </StyledContainer>
    </StyledMainContainer>
  );
};

const inputWidth = 500;
const inputHeight = 60;
const authButtonWidth = 500;
const authButtonHeight = 60;
const AuthButton = styled(Button)`
  height: ${authButtonHeight}px;
  width: ${authButtonWidth}px;
  margin-top: 20px;
  background-color: ${Colors.colorComb1.ebony};
  border: 0px solid ${Colors.colorComb1.ebony};
  border-radius: 10px;
`;

const StyledMainContainer = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled(Col)`
  margin-top: 80px;
  margin-left: 100px;
`;

const StyledFormLabel = styled(FormLabel)`
  font-size: 15px;
  color: ${Colors.blackComb.blackAlpha08};
  margin-top: 20px;
`;

const StyledInput = styled(FormControl)`
  background-color: ${Colors.colorComb1.champagnePink};
  height: ${inputHeight}px;
  width: ${inputWidth}px;
  border-radius: 10px;
`;

const StyledTitleCol = styled(Col)`
  width: ${inputWidth}px;
  text-align: center;
  font-size: 20px;
  color: ${Colors.colorComb1.ebony};
`;

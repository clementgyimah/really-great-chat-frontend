import axios from "axios";
import { API_URL } from "../common";
import { ISignupFuncProps } from "../customTypes";

export const handleSignup = async (props: ISignupFuncProps) => {
  const { name, email, password, setCurrentUser, setUserAuthenticated } = props;
  await axios({
    method: "POST",
    url: `${API_URL}/auth/signup`,
    headers: { "Content-Type": "application/json" },
    data: {
      name: name,
      email: email,
      password: password,
    },
  })
    .then((authRes) => {
      console.log(authRes.data);
      if (authRes.data) {
        setCurrentUser(authRes.data);
        return setUserAuthenticated(true);
      }
      return;
    })
    .catch((err) => {
      console.log(err.message);
      alert("There was a problem authenticating you");
    });
};

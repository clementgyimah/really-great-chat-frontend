import axios from "axios";
import { API_URL } from "../common";
import { ILoginFuncProps } from "../customTypes";

export const handleLogin = async (props: ILoginFuncProps) => {
    const {email, password, setCurrentUser, setUserAuthenticated} = props;
    await axios({
        method: "POST",
        url: `${API_URL}/auth/login`,
        headers: { "Content-Type": "application/json" },
        data: {
          email: email,
          password: password,
        },
      })
        .then((authRes) => {
          console.log(authRes.data);
          if (authRes.data){
            setCurrentUser(authRes.data)
            return setUserAuthenticated(true)
          }
          return;
        })
        .catch((err) => {
          console.log(err.message);
          return alert("There was a problem authenticating you");
        });
}
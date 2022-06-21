import { IUserData } from "../customTypes";
import axios from "axios";
import { API_URL } from "../common";

export const sendUserOnline = async (userData: IUserData) => {
  await axios({
    method: "POST",
    url: `${API_URL}/api/profile/useronline`,
    headers: { "Content-Type": "application/json" },
    data: {
      userData,
    },
  }).then(() => {
    return;
  })
  .catch((err) => {
    console.log('Error send user online status: ', err)
  })
};

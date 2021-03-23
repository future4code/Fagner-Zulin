import axios from "axios";

export const getAllUsers = (context) => {
  return axios.get(
    "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
    {
      headers: {
        Authorization: "fagner-zulin-cruz",
      },
    }
  );
};

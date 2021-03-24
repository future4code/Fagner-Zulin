import axios from "axios";

export const searchUsers = (name) => {
  return axios.get(
    `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${name}`,
    {
      headers: {
        Authorization: "fagner-zulin-cruz",
      },
    }
  );
};

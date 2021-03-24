import axios from "axios";

export const getUserById = (id) => {
  return axios.get(
    `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
    {
      headers: {
        Authorization: "fagner-zulin-cruz",
      },
    }
  );
};

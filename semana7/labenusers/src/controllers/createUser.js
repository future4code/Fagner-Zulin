import axios from "axios";

export const createUser = (user) => {
  axios
    .post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      user,
      {
        headers: {
          Authorization: "fagner-zulin-cruz",
        },
      }
    )
    .then(() => {
      alert("Created User!");
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};

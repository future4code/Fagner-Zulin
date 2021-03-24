import axios from "axios";

export const deleteUser = (id) => {
  axios
    .delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
      {
        headers: {
          Authorization: "fagner-zulin-cruz",
        },
      }
    )
    .then(() => {
      alert("User successfully deleted!");
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};

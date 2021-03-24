import axios from "axios";

export const editUser = (id, newData) => {
  axios
    .put(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}
  `,
      newData,
      {
        headers: {
          Authorization: "fagner-zulin-cruz",
        },
      }
    )
    .then(() => {
      alert("Editing done!");
    })
    .catch((err) => {
      alert(err.response.data.messenge);
    });
};

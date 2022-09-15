const addFriend = (fetchurl) => {
  fetch(fetchurl, { method: "PUT" })
    .then((response) => response.json())
    .then((result) => {
      document.querySelector("#add-friend-button").remove;
      document.querySelector("#friend-button-status-div").append(
        Object.assign(document.createElement("p"), {
          id: "current-friend-message",
          textContent: "friends ✔️",
        })
      );
    });
};

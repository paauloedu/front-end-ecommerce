const url = "https://api-eng-soft-2.herokuapp.com/v1";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM2NzQzNjdmLTgxMDYtNGVkMy05YmVjLWVkY2Q3MjY4YmViMyIsImlhdCI6MTY2NTMyODQ5NCwiZXhwIjoxNjY1NzYwNDk0fQ.hv66-k7NJ50QU7z73gTJUGrx7yhd28zvkD3u2Dle16Y";

function getUser() {
  axios
    .get(`${url}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      const data = response.data;
      teste.textContent = JSON.stringify(data);
      console.log(response);
    })
    .catch((error) => console.log(error));
}

function addUser(json) {
  axios
    .post(`${url}/users/signup`, json)
    .then((response) => {
      alert(JSON.stringify(response.data));
    })
    .catch((error) => console.log(error));
}

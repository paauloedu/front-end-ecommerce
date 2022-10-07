const url = "http://localhost:5500/api";
// const newUser = {
//   name: "Vasco",
//   avatar: "algumlink.com.br",
//   city: "Teste",
// };

function getUser() {
  axios
    .get(url)
    .then((response) => {
      const data = response.data;
      teste.textContent = JSON.stringify(data);
      console.log(response);
    })
    .catch((error) => console.log(error));
}

function addUser(json) {
  axios
    .post(url, json)
    .then((response) => {
      alert(JSON.stringify(response.data));
    })
    .catch((error) => console.log(error));
}

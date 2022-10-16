const url = "https://api-eng-soft-2.herokuapp.com/v1/users";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM2NzQzNjdmLTgxMDYtNGVkMy05YmVjLWVkY2Q3MjY4YmViMyIsImlhdCI6MTY2NTMyODQ5NCwiZXhwIjoxNjY1NzYwNDk0fQ.hv66-k7NJ50QU7z73gTJUGrx7yhd28zvkD3u2Dle16Y";

function getUser() {
  axios
    .get(`${url}`, {
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
    .post(`${url}/signup`, json)
    .then((response) => {
      alert("Usuário cadastrado.");
      window.location.href = "http://127.0.0.1:5500/login-account.html";
    })
    .catch((error) => {
      alert("Não foi possível cadastrar o usuário.");
      var allInputs = document.querySelectorAll("input");
      allInputs.forEach((element) => {
        element.value = "";
      });
    });
}

function loginUser(json) {
  axios
    .post(`${url}/login`, json)
    .then((response) => {
      alert("Usuário logado! Redirecionando para Home...");
      window.location.href = "http://127.0.0.1:5500/home-page.html";
    })
    .catch((error) => {
      alert("Usuário ou Senha inválido. Tente novamente.");
      document.getElementById("password").value = "";
    });
}

function forgetUser(json) {
  axios
    .post(`${url}/forget`, json)
    .then((response) => {
      alert("Email encaminhado para: " + json.email);
      window.location.href = "http://127.0.0.1:5500/login-account.html";
    })
    .catch((error) => console.log(error));
}

function newPasswordUser(json) {
  axios
    .post(`${url}/reset`, json)
    .then((response) => {
      alert("Senha alterada com sucesso.");
      window.location.href = "http://127.0.0.1:5500/login-account.html";
    })
    .cath((error) => {
      alert("Token errado ou usuário não existe");
      console.log(error);
    });
}

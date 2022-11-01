const userRoute = "https://api-eng-soft-2.herokuapp.com/v1/users";

function getUser(id, token) {
  return axios
    .get(`${userRoute}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
}

function addUser(json) {
  axios
    .post(`${userRoute}/signup-client`, json)
    .then((response) => {
      alert("Usuário cadastrado.");
      window.location.href = "http://127.0.0.1:5500/login-account.html";
    })
    .catch((error) => {
      alert(
        "Não foi possível cadastrar o usuário.\nVerifique os dados e tente novamente."
      );
      var allInputs = document.querySelectorAll("input");
      allInputs.forEach((element) => {
        element.value = "";
      });
    });
}

function loginUser(json) {
  axios
    .post(`${userRoute}/login`, json)
    .then((response) => {
      localStorage.setItem("token", `${response.data.token}`);
      localStorage.setItem("id", `${response.data.id}`);
      localStorage.setItem("name", `${response.data.first_name}`);
      localStorage.setItem("role", `${response.data.role}`);
      window.location.href = "http://127.0.0.1:5500/home-page.html";
    })
    .catch((error) => {
      alert("Usuário ou Senha inválido. Tente novamente.");
      document.getElementById("password").value = "";
    });
}

function forgetUser(json) {
  axios
    .post(`${userRoute}/forget`, json)
    .then((response) => {
      alert("Email encaminhado para: " + json.email);
      window.location.href = "http://127.0.0.1:5500/login-account.html";
    })
    .catch((error) => {
      alert("Email informado não consta no Banco de dados.");
      console.log(error);
    });
}

function newPasswordUser(json) {
  axios
    .post(`${userRoute}/reset`, json)
    .then((response) => {
      alert("Senha alterada com sucesso.");
      window.location.href = "http://127.0.0.1:5500/login-account.html";
    })
    .cath((error) => {
      alert("Token errado ou usuário não existe");
      console.log(error);
    });
}

const url = "https://api-eng-soft-2.herokuapp.com/v1/products";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM2NzQzNjdmLTgxMDYtNGVkMy05YmVjLWVkY2Q3MjY4YmViMyIsImlhdCI6MTY2NjM1NDg0NCwiZXhwIjoxNjY2Nzg2ODQ0fQ.rKYDsw08Llk-jElkqe9mKARVKJ8GLKSH51qLGuane8g";

function addProduct(json) {
  axios
    .post(`${url}`, json, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      alert(`Produto: ${response.data.name} cadastrado com sucesso.`);
      var allInputs = document.querySelectorAll("input");
      allInputs.forEach((element) => {
        element.value = "";
      });
    })
    .catch((error) => {
      alert("Não foi possível cadastrar o produto.\nTente novamente.");
      console.log(error);
    });
}

function getNameProducts() {
  /* TODO: Pegar TODOS os valores, em vez de setar um pgSize alto */
  return axios
    .get(`${url}?pageSize=3000`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log(response.data);
      console.log(response.data.results[0]);
      const array = response.data.results.map(({ name }) => {
        return { name };
      });
      var namesProducts = [];
      let i = 0;
      for (const name of array) {
        namesProducts[i] = array[i].name;
        i++;
      }
      console.log(array[0].name);
      console.log(namesProducts);
      return namesProducts;
    })
    .catch((error) => {
      alert("Não foi possível obter os produtos.");
      console.log(error);
    });
}

function getProducts() {
  return axios
    .get(`${url}?pageSize=3000`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data.results;
    })
    .catch((error) => {
      console.log(error);
    });
}

function updateProduct(json, id) {
  axios
    .put(`${url}/${id}`, json, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log(response);
      alert("Produto atualizado com sucesso.");
      location.reload();
    })
    .catch((error) => {
      alert("Não foi possível atualizar o produto.\nTente novamente.");
      console.log(error);
    });
}

function deleteProduct(id) {
  axios
    .delete(`${url}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      alert(`Produto: ${response.data.name} deletado.`);
      location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
}

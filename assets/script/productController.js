const url = "https://api-eng-soft-2.herokuapp.com/v1/products";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM2NzQzNjdmLTgxMDYtNGVkMy05YmVjLWVkY2Q3MjY4YmViMyIsImlhdCI6MTY2NTg5MDcyOCwiZXhwIjoxNjY2MzIyNzI4fQ.h0eFL1R0UpzYulz8T4jvGZShgH-PmGfEy9ze9XxvKgM";

function addProduct(json) {
  axios
    .post(`${url}`, json, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      /* TODO: Pode exibir o nome do produto ao cadastrar */
      alert("Produto cadastrado com sucesso.");
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
        namesProducts[i] = array[i].name
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
      console.log(response.data.results);      
      return response.data.results;
    })
    .catch((error) => {
      console.log(error);
    });
}

function updateProduct(json) {
  axios
    .put(`${url}/${id}`, json, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log(response)
      alert("Produto atualizado com sucesso.");
    })
    .catch((error) => {
      alert("Não foi possível atualizar o produto.\nTente novamente.");
      console.log(error);
    });
}
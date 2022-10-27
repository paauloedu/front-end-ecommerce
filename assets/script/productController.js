const url = "https://api-eng-soft-2.herokuapp.com/v1/products";

function addProduct(json, token) {
  axios
    .post(`${url}`, json, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      alert(`Produto: ${response.data.name} cadastrado com sucesso.`);
    })
    .catch((error) => {
      alert("Não foi possível cadastrar o produto.\nTente novamente.");
      console.log(error);
    });
}

function getNameProducts(token) {
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

function getProducts(token) {
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

function updateProduct(json, id, token) {
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

function deleteProduct(id, token) {
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

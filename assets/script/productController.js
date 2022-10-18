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
      alert("Produto cadastrado com sucesso.");
    })
    .catch((error) => {
      alert("Não foi possível cadastrar o produto.\nTente novamente.");
      console.log(error);
    });
}

const URI = "https://api-eng-soft-2.herokuapp.com/v1/categories";

function getCategory(category) {
  return axios
    .get(`${URI}?name=${category}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      const id = response.data[0].id;
      return id;
    })
    .catch((error) => {
      console.log(error);
    });
}

/*
*** Outra maneira de fazer ***

const getCategory = async (category) => {
  try {
    const response = await axios.get(`${URI}?name=${category}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    //console.log(response.data[0].id);
    return response.data[0].id;
  } catch (error) {
    console.log(error);
  }
};
*/

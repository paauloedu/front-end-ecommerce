function convertFormToJSON(form) {
  const array = form.map(({ name, value }) => {
    return { name, value };
  });
  const json = {};
  for (const { name, value } of array) {
    json[name] = value;
    if (name == "birthdate") json[name] = formataStringData(value);
  }
  return json;
}

function formataStringData(data) {
  var dia = data.split("/")[0];
  var mes = data.split("/")[1];
  var ano = data.split("/")[2];
  return ano + "-" + ("0" + mes).slice(-2) + "-" + ("0" + dia).slice(-2);
}

const token = localStorage.getItem("token")

$(".login").on("submit", function (e) {
  e.preventDefault();
  const login = convertFormToJSON(Array.from($(".login input")));
  loginUser(login);
  console.log(login);
});

$(".register").on("submit", function (e) {
  e.preventDefault();
  const address = convertFormToJSON(Array.from($(".address input")));
  const person = convertFormToJSON(Array.from($(".person input")));
  person.address = address;
  addUser(person);
  console.log(person);
});

$(".login-forget").on("submit", function (e) {
  e.preventDefault();
  const forget = convertFormToJSON(Array.from($(".login-forget input")));
  forgetUser(forget);
  console.log(forget);
});

$(".new-password").on("submit", function (e) {
  e.preventDefault();
  const newPass = convertFormToJSON(Array.from($(".new-password input")));
  newPasswordUser(newPass);
  console.log(newPass);
});

$("#cr-product").on("submit", async (e) => {
  e.preventDefault();
  const newProduct = convertFormToJSON(Array.from($("#cr-product input")));
  newProduct.description = document.getElementById("description").value;
  var select = document.getElementById("category");
  newProduct.category_id = await getCategory(
    select.options[select.selectedIndex].value
  );
  addProduct(newProduct, token);
  console.log(newProduct);
});

$("#mn-product button").click(async function (e) {
  e.preventDefault();
  if ($(this).attr("id") == "update") {
    const changeProduct = convertFormToJSON(Array.from($("#mn-product input")));
    changeProduct.description = document.getElementById("description").value;
    // Posso mudar e colocar uma variavel global no contexto do typeahead pegando o objeto selecionado e ir sempre salvando, depois disso, chamava aqui
    updateProduct(changeProduct, document.getElementById("id").value, token); 
    console.log(changeProduct);
  }
  if ($(this).attr("id") == "delete") {
    deleteProduct(document.getElementById("id").value, token);
  }
});

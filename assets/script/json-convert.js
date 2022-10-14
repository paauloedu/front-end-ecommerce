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

const myMap = (input) => {
  return {
    name: input.name,
    value: input.value,
  };
};

function formataStringData(data) {
  var dia = data.split("/")[0];
  var mes = data.split("/")[1];
  var ano = data.split("/")[2];
  return ano + "-" + ("0" + mes).slice(-2) + "-" + ("0" + dia).slice(-2);
}

$(".login").on("submit", function (e) {
  e.preventDefault();
  const form = $(e.target);
  const json = convertFormToJSON(form);
  loginUser(json);
  console.log(json);
});

$(".register").on("submit", function (e) {
  e.preventDefault();
  const address = convertFormToJSON(Array.from($(".address input")));
  const person = convertFormToJSON(Array.from($(".person input")));
  person.role = "cliente";
  person.address = address;
  addUser(person);
  console.log(person);
});

$(".login-forget").on("submit", function (e) {
  e.preventDefault();
  const form = $(e.target);
  const json = convertFormToJSON(form);
  forgetUser(json);
  console.log(json);
});

$(".new-password").on("submit", function (e) {
  e.preventDefault();
  const form = $(e.target);
  const json = convertFormToJSON(form);
  newPasswordUser(json);
  console.log(json);
});

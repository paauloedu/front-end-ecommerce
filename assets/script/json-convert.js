function convertFormToJSON(form) {
  const array = $(form).serializeArray();
  const json = {};
  $.each(array, function () {
    if (this.name == "birthdate") {
      date = formataStringData(this.value);
      json[this.name] = date || "";
    } else json[this.name] = this.value || "";
  });
  return json;
}

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
  const form = $(e.target);
  const json = convertFormToJSON(form);
  addUser(json);
  console.log(json);
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

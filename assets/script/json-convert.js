function convertFormToJSON(form) {
  const array = $(form).serializeArray();
  const json = {};
  $.each(array, function () {
    json[this.name] = this.value || "";
  });
  return json;
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

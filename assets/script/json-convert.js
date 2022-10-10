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
  console.log(json);
});

$(".register").on("submit", function (e) {
  e.preventDefault();
  const form = $(e.target);
  const json = convertFormToJSON(form);
  console.log(json);
});

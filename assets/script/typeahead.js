$(document).ready(async function () {
  var products = await getProducts();
  console.log(products);

  function getSugestions(query, callBack) {
    const results = products.filter((product) => { /* Filtrando no objeto pelos nomes */
      return product.name.toLowerCase().indexOf(query.toLowerCase()) > -1; /* noRegularExpressions apenas comparar tudo minúsculo */
    });
    callBack(results);
  }

  $("div .typeahead").typeahead(
    {
      hint: true,
      highlight: true,
      minLength: 1,
    },
    {
      name: "namesProducts",
      source: getSugestions, /* Modificando as sugestões que ele irá me retornar */
      display: (product) => product.name, /* Ensinando ao typeahead o que ele irá renderizar na tela */
    }
  );
  $(".typeahead").bind("typeahead:select", function (ev, product) {
    console.log("Selection: " + product.id);
    // Lógica para jogar informações na tela
  });
});

$(document).ready(async function () {
  var products = await getProducts();
  console.log(products);

  function getSugestions(query, callBack) {
    const results = products.filter((product) => {
      /* Filtrando no objeto pelos nomes */
      return (
        product.name.toLowerCase().indexOf(query.toLowerCase()) > -1
      ); /* noRegularExpressions apenas comparar tudo minúsculo */
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
      source:
        getSugestions /* Modificando as sugestões que ele irá me retornar */,
      display: (product) =>
        product.name /* Ensinando ao typeahead o que ele irá renderizar na tela */,
    }
  );
  $(".typeahead").bind("typeahead:select", function (ev, product) {
    console.log("Selection: " + product.id);

    document.getElementById("price").value = product.price;
    document.getElementById("amount").value = product.amount;
    document.getElementById("description").value = product.description;
    document.getElementById("id").value = product.id;
    document.getElementById("id").setAttribute("disabled", "disabled");
    document.getElementById('input-tpahead').style.color = '#f87f3b'
    document.getElementById('nm-product').style.border = '1px solid #f87f3b'
    // TODO: Wipar campos ao apagar o nome do produto
  });

  function clearForm() {
    document.getElementById("price").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("description").value = "";
  }
});

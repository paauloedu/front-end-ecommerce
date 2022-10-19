$(document).ready(async function () {
  
  var products = await getProducts();  
  const array = products.map(({ name }) => {
    return { name };
  });
  var namesProducts = [];
  let i = 0;
  for (const name of array) {
    namesProducts[i] = array[i].name;
    i++;
  }
  console.log(namesProducts);

  var substringMatcher = function (strs) {
    return function findMatches(q, cb) {
      var matches, substrRegex;

      matches = [];

      substrRegex = new RegExp(q, "i");

      $.each(strs, function (i, str) {
        if (substrRegex.test(str)) {
          matches.push(str);
        }
      });

      cb(matches);
    };
  };

  $("div .typeahead").typeahead(
    {
      hint: true,
      highlight: true,
      minLength: 1,
    },
    {
      name: "namesProducts",
      source: substringMatcher(namesProducts),
    }
  );
});

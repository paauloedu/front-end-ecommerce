$(document).ready(async function () {

  var nameProducts = await getNameProducts();

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
      name: "nameProducts",
      source: substringMatcher(nameProducts),
    }
  );
});

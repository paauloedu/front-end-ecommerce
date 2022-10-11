function clearForm() {
  document.getElementById("street").value = "";
  document.getElementById("district").value = "";
  document.getElementById("city").value = "";
  document.getElementById("state").value = "";
}

function myCallBack(conteudo) {
  if (!("erro" in conteudo)) {
    document.getElementById("street").value = conteudo.logradouro;
    document.getElementById("district").value = conteudo.bairro;
    document.getElementById("city").value = conteudo.localidade;
    document.getElementById("state").value = conteudo.uf;
  } else {
    clearForm();
    alert("CEP não encontrado.");
  }
}

function searchCEP(valor) {
  var CEP = valor.replace(/\D/g, "");

  if (CEP != "") {
    var validateCEP = /^[0-9]{8}$/;

    if (validateCEP.test(CEP)) {
      document.getElementById("street").value = "...";
      document.getElementById("district").value = "...";
      document.getElementById("city").value = "...";
      document.getElementById("state").value = "...";

      var script = document.createElement("script");
      script.src =
        "https://viacep.com.br/ws/" + CEP + "/json/?callback=myCallBack";

      document.body.appendChild(script);
    } else {
      clearForm();
      alert("Formato de CEP inválido.");
    }
  } else {
    clearForm();
  }
}

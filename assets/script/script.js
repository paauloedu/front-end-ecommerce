document.addEventListener("DOMContentLoaded", () => {
  for (const el of document.querySelectorAll("[placeholder][data-slots]")) {
    const pattern = el.getAttribute("placeholder"),
      slots = new Set(el.dataset.slots || "_"),
      prev = ((j) =>
        Array.from(pattern, (c, i) => (slots.has(c) ? (j = i + 1) : j)))(0),
      first = [...pattern].findIndex((c) => slots.has(c)),
      accept = new RegExp(el.dataset.accept || "\\d", "g"),
      clean = (input) => {
        input = input.match(accept) || [];
        return Array.from(pattern, (c) =>
          input[0] === c || slots.has(c) ? input.shift() || c : c
        );
      },
      format = () => {
        const [i, j] = [el.selectionStart, el.selectionEnd].map((i) => {
          i = clean(el.value.slice(0, i)).findIndex((c) => slots.has(c));
          return i < 0
            ? prev[prev.length - 1]
            : back
            ? prev[i - 1] || first
            : i;
        });
        el.value = clean(el.value).join``;
        el.setSelectionRange(i, j);
        back = false;
      };
    let back = false;
    el.addEventListener("keydown", (e) => (back = e.key === "Backspace"));
    el.addEventListener("input", format);
    el.addEventListener("focus", format);
    el.addEventListener("blur", () => el.value === pattern && (el.value = ""));
  }
});

var home = window.location.pathname == "/home-page.html";
if (home) {
  let count = 1;
  if (document.getElementById("slider-btn1"))
    document.getElementById("slider-btn1").checked = true;

  setInterval(function () {
    nextImage();
  }, 2000);

  function nextImage() {
    count++;
    if (count > 4) {
      count = 1;
    }
    const btn = document.getElementById("slider-btn" + count);
    if (btn) btn.checked = true;
  }
}

$(document).ready(
  setTimeout(function nameAccount() {
    if (userLoggedin()) {
      var acc = document.getElementById("nav-link");
      acc.innerHTML = `<i class="far fa-user"></i>${localStorage.getItem(
        "name"
      )}`;
      var dropdown = document.getElementById("dropdown");
      if (isAdminOrManager()) {
        dropdown.innerHTML = `<a href="http://127.0.0.1:5500/create-product.html">Adicionar Produtos</a>
        <a href="http://127.0.0.1:5500/manage-product.html">Gerenciar Produtos</a>
        <a href="http://127.0.0.1:5500/sales-report.html">Relatório de Vendas</a>
        <a href="http://127.0.0.1:5500/manage-inventory.html">Relatório de Estoque</a>
        <a onclick="userLogout()">Sair</a>`;
      } else {
        dropdown.innerHTML = `<a onclick="userLogout()">Sair</a>`;
      }
    }
  }, 100)
);

function userLoggedin() {
  if (localStorage.getItem("token")) return true;
}

function login() {
  if (userLoggedin()) return;
  else window.location.href = "http://127.0.0.1:5500/login-account.html";
}

function userLogout() {
  localStorage.clear();
  window.location.reload();
  window.location.href = "http://127.0.0.1:5500/home-page.html";
}

function isAdminOrManager() {
  if (localStorage.getItem("role") != "cliente") return true;
}

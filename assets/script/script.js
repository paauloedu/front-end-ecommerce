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

let count = 1;
document.getElementById("slider-btn1").checked = true;

setInterval(function () {
  nextImage();
}, 2000);

function nextImage() {
  count++;
  if (count > 4) {
    count = 1;
  }
  document.getElementById("slider-btn" + count).checked = true;
}

// function handleFormSubmit(event) {
//   event.preventDefault();

//   const data = new FormData(event.target);

//   const formJSON = Object.fromEntries(data.entries());

//   formJSON.snacks = data.getAll("snacks");

//   const results = document.querySelector(".results pre");
//   results.innerText = JSON.stringify(formJSON, null, 2);
// }

// const form = document.querySelector(".contact-form");
// form.addEventListener("submit", handleFormSubmit);

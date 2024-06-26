import { post } from "./modulo.js";

let root = document.querySelector("#root");
const btn = document.createElement("button");
const section = document.createElement("section");
const form = document.createElement("form");
const input = document.createElement("input");
input.setAttribute("placeholder", "introduzca el id");
input.setAttribute("type", "text");
btn.setAttribute("type", "submit");
btn.textContent = "solicitar nuevo";

form.appendChild(input);
form.appendChild(btn);
root.appendChild(form);
root.appendChild(section);

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  let inputValue = input.value.trim(); 

  if (isNaN(inputValue) || inputValue === "") {
    input.classList.add("error");
    alert("Por favor ingrese un valor numérico válido");
  } else {
    input.classList.remove("error");
    input.classList.add("success"); 
    agregar(inputValue); 
  }
});

const agregar = (id) => {
  post(id).then(post => {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    h2.textContent = `${post.title} - ${post.id}`;
    p.textContent = post.body;

    div.appendChild(h2);
    div.appendChild(p);
    div.classList.add("card")
    section.insertAdjacentElement("afterbegin", div);
  })
};

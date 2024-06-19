import { datos } from "./datos.js";

// const padre = document.querySelector(".container");
// const nodo = document.createElement("p")

// const texto = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse corporis laboriosam iure numquam iusto, quod architecto nemo tenetur voluptatem adipisci."
// nodo.innerText = texto;
// padre.appendChild(nodo)


// const nodo2 = document.createElement("p")
// const texto2 = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, vitae! Officia accusantium quod qui iusto mollitia eveniet eius debitis! Sapiente iusto cupiditate perspiciatis repellat! Dolore quam dicta praesentium molestiae quae numquam tempore non omnis facilis placeat eligendi itaque, amet iusto earum quos? Non quos explicabo molestiae tempora accusamus. Molestiae, quasi!"
// nodo.innerText = texto2
// padre.lastChild(texto2)



const lista = document.querySelector("div.container > div.card > ul.list ")
console.log(lista)

datos.map(a => {
  const li = document.createElement("li")
  li.innerText = a.name
  lista.appendChild(li)
  li.classList.toggle("item")
  
})
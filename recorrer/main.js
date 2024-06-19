let win = window;
let dom = document;
let body = dom.body;
let forms = dom.forms
let divs = dom.querySelectorAll("div")
let div = dom.querySelector("div")
let porid = dom.getElementById("documento")
let porclase = dom.querySelectorAll(".documento")
let atributo = dom.getElementsByClassName("input")
let items = dom.querySelectorAll("ul.list > li.item")
console.log(win)
console.log(dom)
console.log(dom.doctype)
console.log(dom.head)
console.log(dom.body)
console.log(body.children)
console.log(body.children[2])
const lista = [...body.children]
console.log(lista)
console.log(divs)
console.log(div)
console.log(forms)
console.log(porid)
console.log(porclase)
console.log(atributo)
console.log(items)
console.clear()


let api = dom.querySelector("#api")
api.innerHTML = 'QUE ES UN Api'
console.log(api)
console.log(body.childNodes)

console.clear()

// const papa = dom.getElementById("cards");
// const papi = papa.children
// let parrafo = dom.getElementById("parrafo")
// console.log(papi)

// const modificacion = [...papa.children]
// modificacion.map((p, i) => {
//   if (i % 2 != 0) {
//     console.log(p)
//     p.classList.toggle("bg-white")
//     dom.getElementById("parrafo").classList.toggle("bg-negro")
//   }
// })


const form = dom.getElementById("search");
form.setAttribute("enctype", "multiport/form-data")

const input = dom.querySelector(".input")
input.setAttribute("autocomplete", "off")

input.removeAttribute("placeholder")
input.setAttribute("placeholder", "Buscando")





const html = dom.documentElement
const color = getComputedStyle(html).getPropertyValue("--white: white;")
const color2 = getComputedStyle(html).getPropertyValue("--Black: #040404;")
html.style.setProperty("--white", "Black")
html.style.setProperty("--Black", "White" )


const parra = dom.querySelector("#parrafo2")

parra.innerHTML = `lorem ipsum dolor estem lorem ipsum dolor estem lorem ipsum dolor estem lorem ipsum dolor estem lorem ipsum dolor estem lorem ipsum dolor estem lorem ipsum dolor estem lorem ipsum dolor estem lorem ipsum dolor estem lorem ipsum dolor estem lorem ipsum dolor estem lorem ipsum dolor estem lorem ipsum dolor estem lorem ipsum dolor estem lorem ipsum dolor estem lorem ipsum dolor estem lorem ipsum dolor estem lorem ipsum dolor estem lorem ipsum dolor estem lorem ipsum dolor estem lorem ipsum dolor estem lorem ipsum dolor estem lorem ipsum dolor estem lorem ipsum dolor estem lorem ipsum dolor estem lorem ipsum dolor estem lorem ipsum dolor estem lorem ipsum dolor estem lorem ipsum dolor estem lorem ipsum dolor estem lorem ipsum dolor estem `


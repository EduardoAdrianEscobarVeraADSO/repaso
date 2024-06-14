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
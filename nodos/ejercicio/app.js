import { data } from "./datos.js";
const container = document.querySelector(".container")
const fragment = document.createDocumentFragment();
const cards = document.createElement("div")
cards.classList.add("cards")

data.map(obj => {
 
  const card = document.createElement("div")
  const card_header = document.createElement("div")
  const card_title = document.createElement("h2")
  const card_body = document.createElement("div")
  const card_img = document.createElement("img")
  const card_paragraph = document.createElement("p")
  const button = document.createElement("a")
  const button_span = document.createElement("span")
  const button_icon = document.createElement("i")

  card_img.setAttribute("src", obj.src)
  card_title.innerText = obj.title
  card_paragraph.innerText = obj.paragraph
  button.innerText = obj.url

  card.classList.add("card")
  card_header.classList.add("card__header")
  card_title.classList.add("card__title")
  card_body.classList.add("card__header")
  card_img.classList.add("card__img")
  card_paragraph.classList.add("card__paragraph")
  button.classList.add("button", "button--outline")
  button_span.classList.add("bx", "bxs-chevron-right", "button__icon")
  
  
  cards.appendChild(card)
  card.appendChild(card_header)
  card_header.appendChild(card_title)
  card.appendChild(card_body)
  card_body.appendChild(card_img)
  card_body.appendChild(card_paragraph)
  card_body.appendChild(button)
  button.appendChild(button_span)
  button.appendChild(button_icon)
  fragment.appendChild(cards)
  
  
})

container.appendChild(fragment)

// datos.map(a => {
//   const li = document.createElement("li")
//   li.innerText = a.name
//   lista.appendChild(li)
//   li.classList.toggle("item")

// })
import houses from '../houses.js'
import io from 'socket.io-client'
const socket = io('http://localhost:3000')
let url = new URL(window.location.href)
let id = Number(url.searchParams.get('id')) - 1
let title = document.querySelector('.card-title')
title.textContent = houses[id].name
let img = document.querySelector('.img-fluid')
img.src = houses[id].image
let cardText = document.querySelector('.card-text')
cardText.textContent = houses[id].desc
let cardPrice = document.querySelector('.card-title2')
cardPrice.textContent = houses[id].price + 'грн/місяць'
let tags = document.querySelector('.tags')
let tagsArr = houses[id].tags
let searchItems = document.querySelector('.dropdown-menu')
for (let i = 0; i < tagsArr.length; i++) {
    let card = document.createElement('div')
    card.classList.add('card', 'tag')
    let cardBody = document.createElement('div')
    cardBody.classList.add('card-body', 'tag-body')
    let tag = document.createElement('p')
    tag.classList.add('card-text')
    tag.style.textWrap = 'nowrap'
    tag.textContent = tagsArr[i]
    cardBody.appendChild(tag)
    card.appendChild(cardBody)
    tags.appendChild(card)
}
let found = []
search.addEventListener('input', e => {
    searchItems.innerHTML = ''
    found = []
    for (const item of houses) {
        if (item.name.toLowerCase().includes(String(search.value).toLowerCase())) {
            found.push(item.name)
        }
    }
    for (let i = 0; i < found.length; i++) {
        let searchItem = document.createElement('li')
        let searchItemContent = document.createElement('a')
        searchItemContent.classList.add('dropdown-item')
        searchItems.appendChild(searchItem)
        searchItem.appendChild(searchItemContent)
        searchItemContent.textContent = found[i]
    }
    if (found.length == 0) {
        searchItems.innerHTML = '<li><a class="dropdown-item disabled">На жаль, нічого не знайдено</a>'
    }
    if (String(search.value).trim() == '') {
        searchItems.classList.remove('show')
    } else {
        searchItems.classList.add('show')
    }
})
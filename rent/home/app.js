import houses from "../houses.js"
import io from 'socket.io-client'
const socket = io('http://localhost:3000')
const container = document.querySelector('.container')
let search = document.querySelector('.search')
let prev = document.querySelector('.prev-btn')
let next = document.querySelector('.next-btn')
let url = new URL('http://127.0.0.1:5500/rent/review/index.html') 
let searchItems = document.querySelector('.dropdown-menu')
function renderLoginInfo(avatar, isLogined, id) {
    document.querySelector('.login').remove()
    document.querySelector('.signup').remove()
    let avatarElem = document.querySelector('.avatar')
    avatarElem.style.display = 'block'
    avatarElem.src = avatar
    avatarElem.classList.remove('ms-2')
    document.querySelector('.profile-link').href = `http://127.0.0.1:5500/rent/profile/index.html?id=${id}`
}
socket.on('getAvatarStatusId', ([avatar, isLogined, id]) => {
    console.log(id)
    let decoder = new TextDecoder('utf8')
    renderLoginInfo(decoder.decode(avatar), isLogined, id)
})
class PaginationService {
    constructor(houses, num) {
        this.houses = houses
        this.num = num
        this.currentPage = 1
    }
    paginationUsers() {
        let startIndex = (this.currentPage - 1) * num
        let endIndex = startIndex + this.currentPage
        return houses.slice(startIndex, endIndex)
    }
    allPages() {
        return Math.ceil(this.houses.length / this.num)
    }
    setPage(page) {
        this.currentPage = page
    }
    prevPage() {
        if (pagination.currentPage === 1) {
            pagination.currentPage = 5
        } else {
           pagination.currentPage--
        }
        renderPagination()
    }
    nextPage() {
        if (pagination.currentPage === 5) {
            pagination.currentPage = 1
        } else {
            pagination.currentPage++
        }
        renderPagination()
    }
}
let num = 9
let pagination = new PaginationService(houses, num)
function createCards(i) {
    try {
        let card = document.createElement('div')
        let cardBody = document.createElement('div')
        let cardText = document.createElement('h5')
        let cardImg = document.createElement('img')
        let cardPrice = document.createElement('p')
        let cardBtn = document.createElement('a')
        card.classList.add('card')
        cardBody.classList.add('card-body')
        cardText.classList.add('card-title')
        cardText.textContent = houses[i].name
        cardImg.classList.add('card-img-top')
        cardImg.src = houses[i].image
        cardPrice.classList.add('card-text')
        cardPrice.textContent = houses[i].price + 'грн/місяць'
        cardBtn.classList.add('card-link')
        cardBtn.onclick = () => {
            url.searchParams.set('id', houses[i].id)
            window.location.href = url
        }
        cardBtn.textContent = 'Детальніше...'
        container.append(card)
        card.append(cardImg)
        card.append(cardBody)
        cardBody.append(cardPrice)
        cardBody.append(cardText)
        cardBody.append(cardBtn)
    } catch (err) {}
}
function renderPagination() {
    container.innerHTML = ''
    for (let i = num * (pagination.currentPage - 1); i < (num * pagination.currentPage); i++) {
        createCards(i)
    }
    updatePaginationControls()
}
function updatePaginationControls() {
    document.querySelector('.pagin-div').innerHTML = ''
    const totalPages = pagination.allPages()
    for (let i = 1; i <= totalPages; i++) {
        const page = document.createElement('li')
        page.innerHTML = `<a class="page-link" href="#">${i}</a>`
        if (i == pagination.currentPage) {  
            page.classList.add('active')
        }
        page.addEventListener('click', () => {
            pagination.setPage(i)
            renderPagination()
        })
        document.querySelector('.pagin-div').append(page)
    }
}
prev.addEventListener(('click'), pagination.prevPage)
next.addEventListener(('click'), pagination.nextPage)
renderPagination()
let found = []
let foundIDs = []
search.addEventListener('input', e => {
    if (String(search.value).trim() == '') {
        searchItems.classList.remove('show')
    } else {
        searchItems.classList.add('show')
    }
    searchItems.innerHTML = ''
    found = []
    foundIDs = []
    for (const item of houses) {
        if (item.name.toLowerCase().includes(String(search.value).toLowerCase())) {
            found.push(item.name)
            foundIDs.push(item.id)
        }
    }
    // TODO: зробить пошук по тегах
    // for (const item of houses) {
    //     for (let i = 0; i < item.tags.length; i++) {
    //         if  (item.tags[i].toLowerCase().includes(String(search.value).toLowerCase())) {
    //             found.push(item.name)
    //         }
    //     }
    // }
    for (let i = 0; i < foundIDs.length; i++) {
        let searchItem = document.createElement('li')
        let searchItemContent = document.createElement('a')
        searchItemContent.classList.add('dropdown-item')
        searchItems.appendChild(searchItem)
        searchItem.appendChild(searchItemContent)
        let finalSearchItem = found[i].replace(String(search.value)[0].toUpperCase() + String(search.value).slice(1), `<mark>${String(search.value)[0].toUpperCase() + String(search.value).slice(1)}</mark>`).replace(String(search.value), `<mark>${String(search.value)}</mark>`)
        searchItemContent.innerHTML = finalSearchItem[0].toUpperCase() + finalSearchItem.slice(1)
        searchItemContent.href = `http://127.0.0.1:5500/rent/review/index.html?id=${foundIDs[i]}`
    }
    if (found.length == 0) {
        searchItems.innerHTML = '<li><a class="dropdown-item disabled">На жаль, нічого не знайдено</a>'
    }
})
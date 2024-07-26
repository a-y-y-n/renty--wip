import io from 'socket.io-client'
const socket = io('http://localhost:3000')
function renderLoginInfo(username, avatar, isLogined, phoneNumber, email, password) {
    document.querySelector('.login').remove()
    document.querySelector('.signup').remove()
    let avatarElem = document.querySelectorAll('.avatar')
    avatarElem.forEach(e => e.src = avatar)
    avatarElem.forEach(e => e.classList.remove('ms-2'))
    document.querySelector('.email').textContent = email
    document.querySelector('.phoneNumber').textContent = phoneNumber
    document.querySelector('.username').textContent = username
}
let params = new URL(window.location.href)
socket.emit('id', params.searchParams.get('id'))
socket.on('userInfo', ([username, avatar, isLogined, phoneNumber, email, password]) => {
    let decoder = new TextDecoder('utf8')
    renderLoginInfo(username, decoder.decode(avatar), isLogined, phoneNumber, email, password)
})
let searchItems = document.querySelector('.dropdown-menu')
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
let avatar = localStorage.getItem('avatar') || sessionStorage.getItem('avatar')
let username = localStorage.getItem('username') || sessionStorage.getItem('username')
let id = localStorage.getItem('id') || sessionStorage.getItem('id')

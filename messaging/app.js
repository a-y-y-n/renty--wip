import io from 'socket.io-client'
const socket = io('http://localhost:3000')
let searchItems = document.querySelector('.dropdown-menu')
let messageBox = document.querySelector('.messages')
let messages = {
    'User 1': [
        {text: 'abiba', isSentByYou: true},
        {text: 'esh esh', isSentByYou: false},
        {text: 'rill', isSentByYou: true}
    ],
    'User 2': [
        {text: 'hi', isSentByYou: false},
        {text: 'is this still available?', isSentByYou: false},
        {text: 'no', isSentByYou: true},
        {text: 'ok', isSentByYou: false},
        {text: 'жди докс', isSentByYou: false}
    ],
    'User 3': [
        {text: 'pashalka', isSentByYou: false},
        {text: 'no', isSentByYou: true},
        {text: 'fym', isSentByYou: false},
        {text: 'no bro', isSentByYou: true},
    ]
}
for (let i = 0; i < Object.keys(messages).length; i++) {
    let user = document.createElement('div')
    user.classList.add('list-group-item', 'list-group-item-action')
    let userAvatar = document.createElement('img')
    userAvatar.src = '../avatar.png'
    userAvatar.classList.add('avatar')
    let username = document.createElement('p')
    username.classList.add('username')
    username.textContent = Object.keys(messages)[i]
    user.append(userAvatar, username)
    document.querySelector('.list-group').appendChild(user)
    user.addEventListener('click', () => {
        document.querySelectorAll('.list-group-item').forEach(e => e.classList.remove('active'))
        renderMessages(i)
        user.classList.add('active')
        messageBox.classList.remove('d-none')
        typeMessage.classList.remove('d-none')
        document.querySelector('.fa-arrow-right').classList.remove('d-none')
    })
}
function renderMessages(k) {
    messageBox.innerHTML = ''
    for (let i = 0; i < Object.values(messages)[k].length; i++) {
        let message = document.createElement('div')
        message.classList.add('card', 'message')
        let messageBody = document.createElement('div')
        messageBody.classList.add('card-body')
        let messageContent = document.createElement('p')
        messageContent.classList.add('card-text')
        let messageSender = document.createElement('h5')
        messageSender.classList.add('card-title')
        let messageSenderAvatar = document.createElement('img')
        if (Object.values(messages)[k][i].isSentByYou === true) {
            messageSender.textContent = 'You'
            messageSenderAvatar.src = '../avatar.png'
            messageSenderAvatar.classList.add('avatar')
        } else {
            messageSender.textContent = Object.keys(messages)[k]
            messageSenderAvatar.src = '../avatar.png'
            messageSenderAvatar.classList.add('avatar')
        }
        messageBox.appendChild(message)
        message.appendChild(messageBody)
        messageBody.append(messageSenderAvatar, messageSender, messageContent)
        messageContent.textContent = Object.values(messages)[k][i].text
    }
}
let typeMessage = document.querySelector('.type-message')
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
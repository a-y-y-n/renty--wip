import io from 'socket.io-client'
const socket = io('http://localhost:3000')
const username = document.querySelector('#floatingName')
const phoneNumber = document.querySelector('#floatingTel')
const email = document.querySelector('#floatingEmail')
const password = document.querySelector('#floatingPassword')
const avatar = document.querySelector('#floatingAvatar')
let isLogined = false
function waitForEvent() {
  return new Promise(res => {
    socket.on('usernameExistance', (data) => {
      res(data)
    })
  })
}
avatar.addEventListener('change', () => {
  if (avatar.files[0].size < 10 * 1024 * 1024) {
    avatar.classList.remove('input-is-invalid')
  } else {
    avatar.classList.add('input-is-invalid')
  }
})
username.addEventListener('input', async () => {
  socket.emit('checkUsername', username.value)
  const data = await waitForEvent()
  if (data) {
    username.classList.add('input-is-invalid')
  } else {
    username.classList.remove('input-is-invalid')
  }
})
const forms = document.querySelectorAll('.needs-validation')
forms.forEach(form => {
  form.addEventListener('submit', event => {
    if (!form.checkValidity() || avatar.classList.contains('file-is-invalid') || username.classList.contains('file-is-invalid')) {
      event.preventDefault()
      event.stopPropagation()
      console.log('not logined')
    } else {
      isLogined = true
      const file = avatar.files[0]
      if (file && file.size < 10 * 1024 * 1024) {
        const reader = new FileReader()
        reader.onload = function(event) {
          const base64Image = event.target.result;
          console.log('logined lol')
          socket.emit('createUser', [username.value, base64Image, +isLogined, phoneNumber.value, email.value, password.value, new Date().toISOString().slice(0, 19).replace('T', ' ')])
        }
        reader.readAsDataURL(file)
      }
    }
    
    form.classList.add('was-validated')
  }, false)
})
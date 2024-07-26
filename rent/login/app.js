import io from 'socket.io-client'
const socket = io('http://localhost:3000')
const email = document.querySelector('#floatingEmail')
const password = document.querySelector('#floatingPassword')
const rememberMe = document.querySelector('#floatingCheckbox')
let isLogined = false
const forms = document.querySelectorAll('.needs-validation')
forms.forEach(form => {
  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }
    form.classList.add('was-validated')
    isLogined = true
    if (rememberMe.checked) {
      localStorage.setItem('rememberMe', true)
      localStorage.setItem('isLogined', isLogined)
      localStorage.setItem('email', email.value)
      localStorage.setItem('password', password.value)
    } else {
      sessionStorage.setItem('rememberMe', false)
      sessionStorage.setItem('isLogined', isLogined)
      sessionStorage.setItem('email', email.value)
      sessionStorage.setItem('password', password.value)
    }
  }, false)
})
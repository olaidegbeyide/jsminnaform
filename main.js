const firstname = document.getElementById('fname')
const lastname = document.getElementById('lname')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmpass = document.getElementById('cpassword')
const form = document.getElementById('myform')
const button = document.getElementById('btn')


form.addEventListener('submit', (e) => {
      e.preventDefault()
   
    checkInput()
})


function checkInput () {
    if (firstname.value === '' || firstname.value === null) {
        document.getElementById('fname-error').innerText = 'Please enter your First name'
    } else {
        document.getElementById('fname-error').innerText = ''
    }
    if (lastname.value == '' || lastname.value == null) {
        document.getElementById('lname-error').innerText = 'Please enter your Last name'
    } else {
        document.getElementById('lname-error').innerText = ''
    }
    if (email.value == ''  || email.value == null ) {
        document.getElementById('mail-error').innerText = 'Please enter a valid email address'
    } else {
        document.getElementById('mail-error').innerText = ''
    }
    if (password.value < 8  ) {
        document.getElementById('password-error').innerText = 'Password must be up to eight characters'
    }
    if (confirmpass.value !== password.value) {
        document.getElementById('cpassword-error').innerText = 'Incorrect Password'
    } else {
        document.getElementById('cpassword-error').innerText = ''
    }
}

function checkbutton() {
    if (!checkInput()) {
        button.setAttribute('disabled','disabled')
    } else {
        button.removeAttribute('disabled')
    }
}

 checkbutton()
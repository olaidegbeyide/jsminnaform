const firstname = document.getElementById('fname').value
const lastname = document.getElementById('lname').value
const email = document.getElementById('email').value
const password = document.getElementById('password').value
const confirmpass = document.getElementById('cpassword')
const form = document.getElementById('myform')


form.addEventListener('submit', (e) => {
      e.preventDefault()
    if (firstname === '' || firstname === null) {
        document.getElementById('fname-error').innerText = 'Please enter your First name'
    } else {
        document.getElementById('fname-error').innerText = ''
    }
    if (lastname == '' || lastname == null) {
        document.getElementById('lname-error').innerText = 'Please enter your Last name'
    }
    if (email == ''  || email == null ) {
        document.getElementById('mail-error').innerText = 'Please enter a valid email address'
    }
    if (password < 8  ) {
        document.getElementById('password-error').innerText = 'Password must be up to eight characters'
    }
    else if (password.includes(Number) || password.value.includes(Symbol)) {
        document.getElementById('password-error').innerText = 'Password is strong'
    }
    
})

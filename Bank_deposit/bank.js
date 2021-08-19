//add eventlistener with submit button
document.getElementById("login-btn").addEventListener('click', function () {
    //take input value from input field
    emailValue = document.getElementById('exampleInputEmail1').value
    passwordValue = document.getElementById('exampleInputPassword1').value
    //Check corresponding email & password
    if (emailValue == 'abidmugdho@gmail.com' & passwordValue == 'abid9875') {
        window.location.href = 'banksite.html'
    }
})
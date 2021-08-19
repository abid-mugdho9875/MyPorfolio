//deposited value
document.getElementById("deposit-btn").addEventListener('click', function () {
    //collect deposit ammount value
    depositAmmount = document.getElementById('deposit-total').value;
    //change deposit display value
    depositDisplay = document.getElementById('deposit-ammount');
    depositDisplay.innerText = depositAmmount;
    //input form will become zero
    document.getElementById('deposit-total').value = '';

})


//withdraw ammount
document.getElementById("withdraw-btn").addEventListener('click', function () {
    //collect withdraw ammount value
    withdrawAmmount = document.getElementById('withdraw-total').value;
    //change withdraw display value
    withdrawDisplay = document.getElementById('withdraw-ammount');
    withdrawDisplay.innerText = withdrawAmmount;
    //input form will become zero
    document.getElementById('withdraw-total').value = '';

})
//deposited value
document.getElementById("deposit-btn").addEventListener('click', function () {
    //collect deposit ammount value
    newdepositAmmount = document.getElementById('deposit-total').value;
    //change deposit display value
    depositDisplay = document.getElementById('deposit-ammount');
    depositAmmount = parseFloat(newdepositAmmount) + parseFloat(depositDisplay.innerText);
    depositDisplay.innerText = depositAmmount;
    //account balamnce update 
    balanceDisplay = document.getElementById('balance-total').innerText;
    balanceAmmount = parseFloat(balanceDisplay) + parseFloat(depositDisplay.innerText)
    balanceDisplay = balanceAmmount;
    //input form will become zero
    document.getElementById('deposit-total').value = '';

})


//withdraw ammount
document.getElementById("withdraw-btn").addEventListener('click', function () {
    //collect withdraw ammount value
    newwithdrawAmmount = document.getElementById('withdraw-total').value;
    //change withdraw display value
    withdrawDisplay = document.getElementById('withdraw-ammount');
    totalWithdrawAmmount = parseFloat(withdrawDisplay.innerText) + parseFloat(newwithdrawAmmount)
    withdrawDisplay.innerText = totalWithdrawAmmount;
    //input form will become zero
    document.getElementById('withdraw-total').value = '';

})
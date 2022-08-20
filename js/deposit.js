// adding event lstener to deposit btn
document.getElementById('bt-depo').addEventListener('click' , function(){
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;

    const depositToatlElement = document.getElementById('deposit-total');
    const depositTotal = depositToatlElement.innerText;
    depositToatlElement.innerText = depositAmount;
})
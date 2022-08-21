/*
1.add event handler with withdraw btn
2. get the withdraw amount from the input field
2.5 convert the string
3.get previous withdraw total
4.calculate total withdraw amount
4.5 set total withdraw amount
5.get the prevoius balance ttl
6.calculate new balance ttl
6.5 set the new balance ttl



7.clear the input field


*/
//step-1
document.getElementById('bt-withdraw').addEventListener('click' , function(){
    //step2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount  = parseFloat(newWithdrawAmountString);

    //step-3
    const withdrawTotalElement  = document.getElementById('withdraw-ttl');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    //step-4

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-5
    const balanceTotalElement = document.getElementById('balance-ttl');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step-6

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;







    // step-7
    withdrawField.value = '';

})
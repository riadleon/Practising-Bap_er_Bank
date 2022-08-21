// adding event lstener to deposit btn
document.getElementById('bt-depo').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    const depositToatlElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositToatlElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);



    const currentDepositTotal = previousDepositTotal + newDepositAmount;



    depositToatlElement.innerText = currentDepositTotal;


    // get balance current total

    const balanceTotalElement = document.getElementById('balance-ttl');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // calaculate

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;


    depositField.value = '';
})
// Add Button Start //
document.getElementById('AddMoney').addEventListener('click', function () {
  const addFrom = HiddenFile('AddMoneyFrom');
});

document
  .getElementById('AddBalanceBtn')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const TBalance = inputValueTotalBalanceById('totalBalance');
    const AddTk = inputValueAmountById('add-amount');
    const AddPin = inputValuePinById('add-amount-pin');

    const AddTotalBalance = TBalance + AddTk;
    if (AddPin === '1234') {
      document.getElementById('totalBalance').innerText = AddTotalBalance;
    } else {
      alert('Error! Pin number not mach.');
    }
    const HomePageBtn = HiddenFile('HomePage');
  });
// Add Button From end //

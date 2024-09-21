// Add Button Start //
document.getElementById('AddMoney').addEventListener('click', function () {
  const addMoneyFrom = HiddenFile('AddMoneyFrom');
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
      const HomePageBtn = HiddenFile('HomePage');
    } else {
      alert('Error! Pin number not mach.');
    }
  });
// Add Button From end //

// Cash Out Start
document.getElementById('Cash-Out').addEventListener('click', function () {
  const cashOutFrom = HiddenFile('CashOutFrom');
});

document
  .getElementById('CashOutBalanceBtn')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const AgentNumber = inputValueNumberById('AgentNumber');
    const T_C_Balance = inputValueTotalBalanceById('totalBalance');
    const CashOutAmount = inputValueAmountById('cash-out-amount');
    const CashOutPin = inputValuePinById('cash-out-pin');

    const CashOutTotalBalance = T_C_Balance - CashOutAmount;

    if (
      AgentNumber === 11 &&
      CashOutAmount <= T_C_Balance &&
      CashOutPin === '1234'
    ) {
      document.getElementById('totalBalance').innerText = CashOutTotalBalance;
      const Home_page = HiddenFile('HomePage');
    } else {
      alert('Error!');
    }
  });

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

    // Transaction list
    const AddMoneyDetails = document.createElement('div');
    AddMoneyDetails.classList.add(
      'bg-green-400',
      'px-2',
      'py-1',
      'my-2',
      'rounded-md'
    );

    AddMoneyDetails.innerText = `Add Money:-
    Cash in: ${AddTk} tk.  Total Balance: ${AddTotalBalance} tk. `;

    document
      .getElementById('Transaction-file-list')
      .appendChild(AddMoneyDetails);
  });
// Add Button From end //

// Cash Out Start //
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

// Cash Out End //

// Mobile Recharge Start //
document
  .getElementById('Mobile-Recharge')
  .addEventListener('click', function () {
    const Mobile_recharge = HiddenFile('MobileRechargeFrom');
  });

document
  .getElementById('Mobile Recharge-Btn')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const T_MR_Balance = inputValueTotalBalanceById('totalBalance');
    const RechargePhoneNumber = inputValueNumberById('RechargePhoneNumber');
    const MobileRechargeAmount = inputValueAmountById('MobileRecharge-Amount');
    const MobileRechargePin = inputValuePinById('MobileRecharge-pin');

    const MobileRechargeTotalBalance = T_MR_Balance - MobileRechargeAmount;

    if (
      RechargePhoneNumber === 11 &&
      MobileRechargeAmount <= T_MR_Balance &&
      MobileRechargePin === '1234'
    ) {
      document.getElementById('totalBalance').innerText =
        MobileRechargeTotalBalance;
      const Home_page = HiddenFile('HomePage');
    } else {
      alert('Error!');
    }
  });

// Mobile Recharge End //

// Transaction File Start //

document
  .getElementById('TransactionBtn')
  .addEventListener('click', function () {
    const TransactionDetailsFile = HiddenFile('Transaction-file');
  });

document
  .getElementById('TransactionList-Back-Btn')
  .addEventListener('click', function () {
    const TransactionListBtn = HiddenFile('HomePage');
  });

// Transaction File End //

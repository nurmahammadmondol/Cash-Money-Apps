// Add Button Start / /
document.getElementById('AddMoney').addEventListener('click', function () {
  const addMoneyFrom = HiddenFile('AddMoneyFrom');
});

document
  .getElementById('AddBalanceBtn')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const TBalance = inputValueTotalBalanceById('totalBalance');
    const BankAccountNumber = inputValueNumberById('Bank-Account-Number');
    const AddTk = inputValueAmountById('add-amount');
    const AddPin = inputValuePinById('add-amount-pin');

    const AddTotalBalance = TBalance + AddTk;
    if (BankAccountNumber === 11 && AddPin === '1234') {
      document.getElementById('totalBalance').innerText = AddTotalBalance;
      const HomePageBtn = HiddenFile('HomePage');

      // Transaction list
      const AddMoneyDetails = document.createElement('div');
      AddMoneyDetails.classList.add(
        'bg-green-600',
        'px-2',
        'py-1',
        'my-2',
        'rounded-md',
        'text-white'
      );

      AddMoneyDetails.innerText = `Add Money Info :-
      cash in: ${AddTk} tk.  Total Balance: ${AddTotalBalance} tk. `;

      document
        .getElementById('Transaction-file-list')
        .appendChild(AddMoneyDetails);
    } else {
      alert('Error! Pin number not mach.');
    }
  });

document
  .getElementById('Add-Money-from-Back-Btn')
  .addEventListener('click', function () {
    const BackButton = HiddenFile('HomePage');
  });
// Add Button From end //

// *******************************************************************?
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

      // Transaction cash out list
      const TransactionCashOutDetails = document.createElement('div');
      TransactionCashOutDetails.innerText = `Cash Out Info :-
      cash out: ${CashOutAmount} tk.  Total Balance: ${CashOutTotalBalance} tk.
      `;
      TransactionCashOutDetails.classList.add(
        'bg-red-500',
        'px-2',
        'py-1',
        'my-2',
        'rounded-md',
        'text-white'
      );

      document
        .getElementById('Transaction-file-list')
        .appendChild(TransactionCashOutDetails);
    } else {
      alert('Error!');
    }
  });

document
  .getElementById('Cash-out-from-Back-Btn')
  .addEventListener('click', function () {
    const BackButton = HiddenFile('HomePage');
  });

// Cash Out End //

// *******************************************************************?

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

      // Transaction list
      const MobileRechargeDetails = document.createElement('div');
      MobileRechargeDetails.classList.add(
        'bg-yellow-500',
        'px-2',
        'py-1',
        'my-2',
        'rounded-md',
        'text-white'
      );

      MobileRechargeDetails.innerText = `Mobile Recharge Info:-
      mobile recharge: ${MobileRechargeAmount} tk.  Total Balance: ${MobileRechargeTotalBalance} tk. `;

      document
        .getElementById('Transaction-file-list')
        .appendChild(MobileRechargeDetails);
    } else {
      alert('Error!');
    }
  });

document
  .getElementById('Mobile-Recharge-from-Back-Btn')
  .addEventListener('click', function () {
    const BackButton = HiddenFile('HomePage');
  });

// Mobile Recharge End //

// *******************************************************************?

// Transfer Money Start //
document.getElementById('Transaction').addEventListener('click', function () {
  const TransferMoneyFrom = HiddenFile('TransferMoneyFrom');
});

document
  .getElementById('TransferMoneyBtn')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const Total_TM_Balance = inputValueTotalBalanceById('totalBalance');
    const UserPhoneNumber = inputValueNumberById('UserAccountNumber');
    const inputTransferMoney = inputValueAmountById('TransferMoneyAmount');
    const TransferMoneyPin = inputValuePinById('TransferMoneyPin');

    const AfterTransferMoney = Total_TM_Balance - inputTransferMoney;

    if (
      UserPhoneNumber === 11 &&
      inputTransferMoney <= Total_TM_Balance &&
      TransferMoneyPin === '1234'
    ) {
      document.getElementById('totalBalance').innerText = AfterTransferMoney;

      const Home_page = HiddenFile('HomePage');

      // Transaction list
      const TransferMoneyDetails = document.createElement('div');
      TransferMoneyDetails.classList.add(
        'bg-yellow-800',
        'px-2',
        'py-1',
        'my-2',
        'rounded-md',
        'text-white'
      );

      TransferMoneyDetails.innerText = `Transfer Money Info:-
      transfer money: ${inputTransferMoney} tk.  Total Balance: ${AfterTransferMoney} tk.`;

      document
        .getElementById('Transaction-file-list')
        .appendChild(TransferMoneyDetails);
    } else {
      alert('Error!');
    }
  });

document
  .getElementById('Transfer-Money-from-Back-Btn')
  .addEventListener('click', function () {
    const BackButton = HiddenFile('HomePage');
  });
// Transfer Money End //

// *******************************************************************?

// Transaction File Start //

document
  .getElementById('TransactionBtn')
  .addEventListener('click', function () {
    const TransactionDetailsFile = HiddenFile('Transaction-file');
  });

document
  .getElementById('TransactionList-Back-Btn')
  .addEventListener('click', function () {
    const BackButton = HiddenFile('HomePage');
  });

// Transaction File End //

// *******************************************************************?

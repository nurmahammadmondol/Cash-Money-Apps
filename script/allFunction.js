function inputValueNumberById(phone) {
  const Number = document.getElementById(phone).value;
  const NumberSize = Number.length;
  return NumberSize;
}

function inputValuePinById(pin) {
  const Password = document.getElementById(pin).value;
  return Password;
}

function inputValueTotalBalanceById(Balance) {
  const TotalBalance = document.getElementById(Balance).innerText;
  const NumberTotalBalance = parseFloat(TotalBalance);
  return NumberTotalBalance;
}

function inputValueAmountById(amount) {
  const inputAmount = document.getElementById(amount).value;
  const NumberAmount = parseFloat(inputAmount);
  return NumberAmount;
}

function HiddenFile(id) {
  //All Button
  const Home_page = document.getElementById('HomePage').classList.add('hidden');

  // All From
  const AddMoneyFrom = document
    .getElementById('AddMoneyFrom')
    .classList.add('hidden');

  // UnHidden type
  const mainBtn = document.getElementById(id).classList.remove('hidden');
}
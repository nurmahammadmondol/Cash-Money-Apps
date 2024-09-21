document.getElementById('loginBtn').addEventListener('click', function (event) {
  event.preventDefault();

  const Phone_Number = inputValueNumberById('phoneNumber');

  const Pin_Number = inputValuePinById('pinNumber');

  if (Pin_Number === '1234' && Phone_Number === 11) {
    window.location.href = 'html/homePage.html';
  } else {
    alert('Error! phone number & pin not mach');
  }
});

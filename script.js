const payRateInput = document.getElementById('payRate');
const hoursWorkedInput = document.getElementById('hoursWorked');
const taxRateInput = document.getElementById('taxRate');
const resultContainer = document.getElementById('result');

function calculatePay() {
  const payRate = parseFloat(payRateInput.value);
  const hoursWorked = parseFloat(hoursWorkedInput.value);
  const taxRate = parseFloat(taxRateInput.value);

  if (!isNaN(payRate) && !isNaN(hoursWorked) && !isNaN(taxRate)) {
    const weeklyPay = payRate * hoursWorked;
    const monthlyPayBeforeTax = weeklyPay * 4;
    const taxAmount = (monthlyPayBeforeTax * taxRate) / 100;
    const monthlyPayAfterTax = monthlyPayBeforeTax - taxAmount;
    const hoursWorkedInYear = hoursWorked * 52;

    resultContainer.innerHTML = `
      <h2>Pay Calculation Results</h2>
      <p>Weekly Pay: $${weeklyPay.toFixed(2)}</p>
      <p>Monthly Pay (Before Tax): $${monthlyPayBeforeTax.toFixed(2)}</p>
      <p>Tax Amount: $${taxAmount.toFixed(2)}</p>
      <p>Monthly Pay (After Tax): $${monthlyPayAfterTax.toFixed(2)}</p>
      <p>Total Hours Worked in a Year: ${hoursWorkedInYear}</p>
    `;
  } else {
    resultContainer.innerHTML = '';
  }
}

const payRateForm = document.getElementById('payRateForm');
payRateForm.addEventListener('submit', (e) => {
  e.preventDefault();
  calculatePay();
});

const resetButton = document.querySelector('button[type="reset"]');
resetButton.addEventListener('click', () => {
  payRateInput.value = '';
  hoursWorkedInput.value = '';
  taxRateInput.value = '';
  resultContainer.innerHTML = '';
});

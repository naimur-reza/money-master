function getValueFromInput(id) {
  const mainId = document.getElementById(id);
  const inputValueString = mainId.value;
  const inputValue = parseFloat(inputValueString);
  return inputValue;
}

function setValue(id, returnValue) {
  const mainId = document.getElementById(id);
  mainId.innerText = returnValue;
}

//global state value

//calculate button
document.getElementById("calculate-btn").addEventListener("click", function () {
  const totalValue = getValueFromInput("income");
  const foodValue = getValueFromInput("food");
  const clothesValue = getValueFromInput("clothes");
  const billsTotal = getValueFromInput("bill");
  if(isNaN(totalValue) || isNaN(foodValue) || isNaN(clothesValue)){
    alert("Please provide valid number")
    return;
  }
  const totalCost = foodValue + clothesValue + billsTotal;
  const restTotal = totalValue - totalCost;
  setValue("total-expense", totalCost);
  setValue("balance", restTotal);
});
//saving amount
document.getElementById("saving-btn").addEventListener("click", function () {
  const savingPercentage = getValueFromInput("save");
  const totalValue = getValueFromInput("income");
  //get expense balance
  if(isNaN(savingPercentage) || isNaN(totalValue)){
    alert("Enter a valid number");
    return;
  }
  const expenseBalanceId = document.getElementById('total-expense');
  const expenseBalanceString = expenseBalanceId.innerText;
  const expenseBalance = parseFloat(expenseBalanceString);
  const saveTotal = ((savingPercentage / 100) * expenseBalance).toFixed(2);
  const remainingBalance = (expenseBalance - saveTotal).toFixed(2);
  setValue("saving-amount", saveTotal);
  setValue ("remaining-balance", remainingBalance);
  console.log(remainingBalance);
});

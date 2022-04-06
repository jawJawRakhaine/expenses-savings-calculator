document.getElementById("calculate-btn").addEventListener("click", function () {
  let totalIncome = document.getElementById("total-income").value;
  let foodCost = document.getElementById("food-cost").value;
  let rentCost = document.getElementById("rent-cost").value;
  let clothesCost = document.getElementById("clothes-cost").value;

  totalIncome = parseFloat(totalIncome);
  foodCost = parseFloat(foodCost);
  rentCost = parseFloat(rentCost);
  clothesCost = parseFloat(clothesCost);

  if (totalIncome < 0 || foodCost < 0 || rentCost < 0 || clothesCost < 0) {
    alert("Please enter positive numbers");
  } else if (totalIncome < foodCost + rentCost + clothesCost) {
    alert("Your total income is less than the sum of your expenses");
  } else if (totalIncome == foodCost + rentCost + clothesCost) {
    alert("You have spent all of your money");
  } else if (!totalIncome || !foodCost || !rentCost || !clothesCost) {
    alert("Please enter all fields");
  } else {
    //   expenses
    let totalExpenses = (foodCost + rentCost + clothesCost).toFixed(2);

    //   after expenses remaining balance
    let totalSavings = totalIncome - totalExpenses;
    let expenses = document.getElementById("total-expenses");
    expenses.innerText = totalExpenses;
    let savedBalance = document.getElementById("total-balance");
    savedBalance.innerText = totalSavings.toFixed(2);

    //   savings

    document.getElementById("save-btn").addEventListener("click", function () {
      let savings = document.getElementById("savings-percent").value;
      savings = parseFloat(savings);
      if (savings < 0) {
        alert("Saving percentage cannot be negative");
      } else if (!savings) {
        alert("Please enter a saving percentage");
      } else {
        let savingsPercent = savings / 100;
        let savingsAmount = totalSavings * savingsPercent;
        if (savingsAmount > totalSavings) {
          alert("You have exceeded your savings goal");
        } else {
          document.getElementById("saved").innerText = savingsAmount.toFixed(2);
          document.getElementById("remain").innerText = (
            totalSavings - savingsAmount
          ).toFixed(2);
        }
      }

      //   totalIncome.value = "";
      //   foodCost.value = "";
      //   rentCost.value = "";
      //   clothesCost.value = "";
      //   savings.value = "";
    });
  }
});

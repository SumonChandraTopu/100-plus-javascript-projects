// --> References
const depositBallance = document.getElementById("deposit-balance");
const withdrawBalance = document.getElementById("withdraw-balance");
const totalBalance = document.getElementById("total-balance");
const depositInp = document.getElementById("deposit-inp");
const withdrawInp = document.getElementById("withdraw-inp");
const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");
const historyBtn = document.getElementById("history-btn");

// --> Deposit
depositBtn.addEventListener("click", function () {
  const depositInpValue = parseInt(depositInp.value);

  const rag = /^[0-9]*$/.test(depositInpValue);
  if (rag) {
    console.log(rag);
    const totalDeposit = depositInpValue + parseInt(depositBallance.innerText);
    console.log(totalDeposit);
    depositBallance.innerText = totalDeposit;
    totalBalance.innerText = totalDeposit;
    depositInp.value = "";
  } else {
    alert("Type valid number");
  }
});

// --> Withdraw
withdrawBtn.addEventListener("click", function () {
  const withdrawInpValue = parseInt(withdrawInp.value);
  const rag = /^[0-9]*$/.test(depositInpValue);
  if (rag) {
    if (withdrawInpValue < parseInt(totalBalance.innerText)) {
      const totalWithdraw =
        withdrawInpValue + parseInt(withdrawBalance.innerText);
      withdrawBalance.innerText = totalWithdraw;
      const finalBalance = parseInt(totalBalance.innerText) - withdrawInpValue;
      totalBalance.innerText = finalBalance;
      withdrawInp.value = "";
    } else {
      alert("Your bank hasn't enough money !!");
    }
  } else {
    alert("Type valid number");
  }
});

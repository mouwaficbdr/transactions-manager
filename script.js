const euroInput = document.getElementById('euro-input');
const fcfaInput = document.getElementById("fcfa-input");
const percentage = document.getElementById("percentage");
const button = document.getElementById("button-el");

const minExpAmount = document.getElementById("min-exp-amount");
const amountReceived = document.getElementById("amount-received");
const generalLoss = document.getElementById("general-loss");
const indivLoss = document.getElementById("indiv-loss");
const sendAmount = document.getElementById("send-amount");
const finalGain = document.getElementById("final-gain");
const tooMuchLoss = -2000;

const calculate = () => {
  const euroValue = euroInput.value;
  const fcfaValue = fcfaInput.value;
  const percentageValue = percentage.value;
  let minExpAmountValue;
  let amountReceivedValue;
  let generalLossValue;
  let indivLossValue;
  let sendAmountValue;
  let finalGainValue;

  minExpAmountValue = euroValue * 655;
  amountReceivedValue = fcfaValue;
  generalLossValue = amountReceivedValue - minExpAmountValue;
  
  if (generalLossValue < tooMuchLoss) {
    indivLossValue = generalLossValue / 2;
    finalGainValue = ((amountReceivedValue * percentageValue) / 100) + indivLossValue;
  } else {
    indivLossValue = 0;
    finalGainValue = (amountReceivedValue * percentageValue) / 100;
  }

  sendAmountValue = amountReceivedValue - finalGainValue;

  minExpAmount.textContent = minExpAmountValue;
  amountReceived.textContent = amountReceivedValue;
  if (generalLossValue < 0) {
    generalLoss.textContent = generalLossValue + " (Perte)";
  } else {
    generalLoss.textContent = generalLossValue + " (Gain)";
  }
  indivLoss.textContent = indivLossValue;
  sendAmount.textContent = sendAmountValue;
  finalGain.textContent = finalGainValue;
}

button.addEventListener("click", calculate);

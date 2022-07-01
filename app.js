let amount = document.querySelector("#amount");
let interest = document.querySelector("#interest");
let repayYear = document.querySelector("#repay-year");
let monthlyPayment = document.querySelector("#monthly-payment");
let totalPayment = document.querySelector("#total-payment");
let totalInterest = document.querySelector("#total-interest");
let btn = document.querySelector("#sub-btn");
let op = document.querySelector("#op");



btn.addEventListener('click',calc)

function calc(e){
    
op.textContent  = "Operation   :   ";

const principal = parseFloat(amount.value);
const calInterest = parseFloat(interest.value)/100/12;
const calPayments = parseFloat(repayYear.value)*12;

const x = Math.pow(1+calInterest,calPayments);
const monthly = (principal*x*calInterest)/(x-1);

if(isFinite(monthly)){

    monthlyPayment.value = `Monthly Payment : ${monthly.toFixed(2)}`;
    totalPayment.value =`Total Payment : ${(monthly*calPayments).toFixed(2)}`;
    totalInterest.value = `Total Interest : ${((monthly*calPayments)-principal).toFixed(2)}`;
    op.textContent += "sucessful"
}else{
    console.log("error")
    op.textContent += "failed [INVALID INPUT]"
}
e.preventDefault()
}


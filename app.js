const bill = document.querySelector("#bill-amount");
const cash = document.querySelector("#cash-amount");
const checkbtn = document.querySelector("#check-btn");
const massage = document.querySelector("#error-massage");
const numOfNotes = document.querySelectorAll("#no-of-notes");
const cashcontainer = document.querySelector(".cash-container");

bill.addEventListener("input", showCashAmountInput);

function showCashAmountInput() {
  if (this.value !== "") {
    cashcontainer.style.display = "block";
  } else {
    cashcontainer.style.display = "none";
  }
}

function returnAmount() {
  // change amount value string to number
  let billvalue = Number(bill.value);
  let cashvalue = Number(cash.value);

  if (billvalue > 0) {
    if (cashvalue > billvalue) {
        massage.style.display = "none"
      let returnvalue = cashvalue - billvalue;
      numberOfNotes(returnvalue);
    } else {
      showError("cash amount must be greater than bill amount");
      numberOfNotes();
    }
  } else {
    showError("bill not valid");
  }
}

function numberOfNotes(returnvalue) {
  let notes = [2000, 500, 100, 50, 20, 10, 5, 1];
  for (let i = 0; i < notes.length; i++) {
    if (returnvalue >= notes[i]) {
      let returnnotes = Math.floor(returnvalue / notes[i]);
      returnvalue = returnvalue % notes[i];
      numOfNotes[i].innerText = returnnotes;
    } else {
      numOfNotes[i].innerText = null;
    }
  }
  showCashAmountInput();
}
function showError(msg) {
  massage.style.display = "block";
  massage.innerText = msg;
}

checkbtn.addEventListener("click", returnAmount);

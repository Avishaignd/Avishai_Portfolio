//disabeling the submit button
const formInputs = document.getElementsByClassName("formInputs");
const form = document.getElementById("form")
const requiredInputs = document.getElementById("form").querySelectorAll("[required]");
let submitBtn = document.getElementById("submit");
//this will disable the submit button from the first moment.
submitBtn.disabled = true;
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", check);
}

function check() {
  //disables the submit button if you earased one of the required inputs that were fullfilled before.
  submitBtn.disabled = true;
  for (let i = 0; i < requiredInputs.length; i++) {
    if (requiredInputs[i].value == "") {
      //the return is important to break the for loop and prevent the activation of the submit button without all the reqired inputs being fullfilled
      return;
    }
  }
  submitBtn.disabled = false;
}
//declaring an empty variable to store the full sentence, and then variables to store the needed information
let mission = ""
const labels = document.getElementsByTagName("label")
let userInput = document.getElementsByClassName("userValue")
//creating a function to stop the form from submitting, and then concatinating the values and the labels
form.addEventListener("submit", submitted)
function submitted(event) {
  event.preventDefault();
  for (let i = 0; i < labels.length; i++) {
    mission += `${labels[i].innerText} ${userInput[i].value}, `
  }
  //removing the extre ", " at the end of the sentence
  console.log(mission.slice(0, -2))
}
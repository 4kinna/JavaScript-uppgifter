"use strict";

//user can only login with these names.
let usernames = ["yazeen", "ec", "softhouse"];
let form;
let input;

//Function that calls all other functions in order
//--Don't modify--
function init() {
  initLoginForm();
  initLabel();
  initInput();
  initButton();
}

function initLoginForm() {
  form = document.createElement("form");
  form.setAttribute = ("id", "form");
  document.body.appendChild(form);
  console.log(form);

  return form;
  //Add code here to:
  //create and add form element to the Dom.
}

function initLabel() {
  let label = document.createElement("label");
  label.textContent = "username";
  form.appendChild(label);

  //Add code here to:
  //create label element and set the lable to "username" (TIP: use .textContent).
  //Add it to the form element. (TIP: use .appendChild).
}

function initInput() {
  input = document.createElement("input");
  input.required = true;
  form.appendChild(input);
  //Add code here to:
  //create input element and set it to be requried (TIP: use .required = true).
  //Add it to the form element. (TIP: use .appendChild).
}

function initButton() {
  let button = document.createElement("button");
  button.textContent = "login";
  form.appendChild(button);

  button.addEventListener("click", function (event) {
    event.preventDefault();
    if (validateLoginInfo() === true) {
      alert("Welcome");
    } else {
      input.style.border = "3px solid red";
    }
  });

  //create button element and set the text to "login" (TIP: use .textContent)
  ////Add it to the form element. (TIP: use .appendChild).
  //Add click eventListener for button and call validateLoginInfo function inside it.
  //if validateLoginInfo is true alert user with "Welcome" text.
  //if validateLoginInfo is false add border style to the input element: "3px solid red". (TIP: use .style.border).
}

function validateLoginInfo() {
  if (usernames.includes(input.value)) {
    return true;
  } else {
    return false;
  }

  //Get the input using form input element (TIP: use .value)
  //if the username is in the usernames array return true if not return false.
}

//Write code here to call the init function only after the dom has been loaded (TIP: check "DOMContentLoaded" event)
init();

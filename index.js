
// let user = {
//   name: "",
//   age: "",
//   city: "",
//   email: "",
//   number: "",
// };
// let mode = "normal";


let result = document.getElementsByClassName("result")[0];
let consoleInput = document.querySelector("#input");

consoleInput.addEventListener("keydown", startApp);

// All comamnd 
function startApp(event) {
  // here start create commands 
  if (event.keyCode === 13) {
    // vilid commands
    if (consoleInput.value.trim() === "$start") {
      result.textContent = "Go now!";
      setTimeout(() => {
        result.textContent = " ";
      consoleInput.value = " ";
      }, 600);
    } else if (consoleInput.value.trim() === "$help") {
      let commands = document.createElement("pre");
      const result = document.querySelector(".result");
      commands.classList.add("command__item");
      commands.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 6px;"> 
        <div class="command__item" style="display: flex; gap: 9px; align-items: center;  margin: 1px; padding: 0;"><span class="command__item-span" style="font-size: 19px; font-weight: 600; color: #fff;">$start</span>Start the project</div>
        <div class="command__item" style="display: flex; gap: 9px; align-items: center;  margin: 1px; padding: 0;"><span class="command__item-span" style="font-size: 19px; font-weight: 600; color: #fff;">$help</span>To view the full list of commands</div>
        </div>
      `;
      
      result.appendChild(commands);
    } else {
      setTimeout(() => {
        notCorrectCommand()
      }, 100);
    }
}
}
// Error command 
function notCorrectCommand(event) {
  result.textContent = "Not correct command!";
  setTimeout(() => {
    result.textContent = " ";
  consoleInput.value = " ";
  event.prevent
  }, 3000);
}



// function generateCard() {
//   let card = document.createElement("div");
//   card.classList.add("card");
//   let name = document.createElement("h2");
//   name.classList.add("card__name");
//   name.textContent = "Name: " + user.name;
//   let age = document.createElement("h3");
//   age.classList.add("card__age");
//   age.textContent = "Age: " + user.age;
//   let city = document.createElement("h3");
//   city.classList.add("card__city");
//   city.textContent = "City: " + user.city;
//   let email = document.createElement("h3");
//   email.classList.add("card__email");
//   email.textContent = "Email: " + user.email;
//     let number = document.createElement("h3");
//     number.classList.add("card__number");
//     number.textContent = "Number: " + user.number;
//   card.appendChild(name);
//   card.appendChild(email);
//   card.appendChild(number);
//   card.appendChild(city);
//   card.appendChild(age);
//   result.appendChild(card);
// }

// function saveCard() {
//   localStorage.setItem("users", JOSN.stringify(user));
// }

// function clearUserData() {
//   user = {
//     name: "",
//     age: "",
//     city: "",
//     email: "",
//     number: "",
//   };
// }



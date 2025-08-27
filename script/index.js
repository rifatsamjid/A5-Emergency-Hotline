// heart count
let count = 0;
let navHeart = document.getElementById("nav-heart-count");
let harts = document.querySelectorAll(".card-heart");
harts.forEach(function (heart) {
  heart.addEventListener("click", function () {
    count++;
    navHeart.innerText = count;
  });
});

// coin value
const coinElement = document.getElementById("coin-value");
let coins = parseInt(coinElement.innerText);

// all call button
const callButton = document.querySelectorAll(".btn-call");

// call history container
const historyContainer = document.getElementById("call-history");

callButton.forEach((button) => {
  button.addEventListener("click", function () {
    const card = this.closest(".card-parent");
    const subtitle = card.querySelector(".subtitle").innerText;
    const number = card.querySelector(".number").innerText;

    if (coins >= 20) {
      alert("Calling " + subtitle + " " + number);
      coins -= 20;
      coinElement.innerText = coins;
      // current time
      const now = new Date();
      const timeString = now.toLocaleTimeString();

      // history item
      const div = document.createElement("div");
      div.innerHTML = `
            <div
            class="flex justify-between items-center bg-gray-100 p-5 rounded-xl mb-2"
          >
            <div>
              <h2 class="font-semibold">${subtitle}</h2>
              <p>${number}</p>
            </div>
            <p>${timeString}</p>
          </div>
            `;
      historyContainer.appendChild(div);
    } else {
      alert("Not enough coins !");
    }
  });
});

// clear button
const clearBtn = document.getElementById("btn-clear");

clearBtn.addEventListener("click", function () {
  historyContainer.innerText = "";
});

// copy button
const copyButton = document.querySelectorAll(".btn-copy");

const copyElement = document.getElementById("copy-count");

let copyCount = parseInt(copyElement.innerText);

let copiedNumbers = JSON.parse(localStorage.getItem("copiedNumbers")) || [];

copyButton.forEach(function (button) {
  button.addEventListener("click", function () {
    const card = this.closest(".card");
    const number = card.querySelector(".number").innerText;
    navigator.clipboard.writeText(number);
    alert("Number copied" + number);
    copyCount++;
    copyElement.innerText = copyCount;
    copiedNumbers.push(number);
    localStorage.setItem("copiedNumbers", JSON.stringify(copiedNumbers));
  });
});

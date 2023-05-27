const questionEl = document.querySelector("input");
const thinkingEl = document.getElementById("thinking");
const thinkingElText = document.querySelector("#thinking>p");
const buttonEl = document.querySelector("button");
const resultsEl = document.getElementById("results");
const ballEl = document.getElementById("ball");

const positive = ["Yes", "Do it"];
const neutral = ["Maybe", "Perhaps"];
const negative = ["No", "Nah"];
const previousQuestions = [];

buttonEl.addEventListener("click", function (e) {
  e.preventDefault();
  ballEl.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  thinkingEl.style.opacity = 1;
  ballEl.style.overflow = "visible";
  buttonEl.style.opacity = 0;
  buttonEl.setAttribute("disabled", "true");
  setTimeout(function () {
    const responseType = Number((Math.random() * 2).toFixed());
    let currentAnswer;
    switch (responseType) {
      case 0:
        currentAnswer = positive[(Math.random() * (positive.length - 1)).toFixed()];
        thinkingElText.textContent = currentAnswer;
        break;
      case 1:
        currentAnswer = neutral[(Math.random() * (neutral.length - 1)).toFixed()];
        thinkingElText.textContent = currentAnswer;
        break;
      case 2:
        currentAnswer = negative[(Math.random() * (negative.length - 1)).toFixed()];
        thinkingElText.textContent = currentAnswer;
        break;

      default:
        break;
    }
    thinkingEl.style.animationName = "none";
    previousQuestions.push({ question: questionEl.value, answer: currentAnswer });
    // setTimeout(function () {
    //   thinkingElText.textContent = "Hmm...";
    //   ballEl.style.overflow = "hidden";
    //   thinkingEl.style.animationName = "sideToSide";
    //   thinkingEl.style.opacity = 0;
    //   buttonEl.style.opacity = 1;
    //   buttonEl.removeAttribute("disabled");
    //   questionEl.value = "";
    //   resultsEl.innerHTML = "";
    //   previousQuestions.forEach(function (question) {
    //     resultsEl.insertAdjacentHTML("afterbegin", `<tr><td>${question.question}</td><td>${question.answer}</td></tr>`);
    //   });
    // }, "2000");
  }, "2000");
});

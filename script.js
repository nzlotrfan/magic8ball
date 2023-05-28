const questionEl = document.querySelector("input");
const thinkingEl = document.getElementById("thinking");
const thinkingElText = document.querySelector("#thinking>p");
const buttonEl = document.querySelector("button");
const resultsEl = document.getElementById("results");
const ballEl = document.getElementById("ball");
const resultsContainerEl = document.getElementById("results-container");

const positive = ["Yes", "Do it"];
const neutral = ["Maybe", "Perhaps"];
const negative = ["No", "Nah"];
const previousQuestions = [];

buttonEl.addEventListener("click", function (e) {
  e.preventDefault();
  questionEl.inputMode = "none";

  thinkingEl.style.opacity = 1;
  buttonEl.style.opacity = 0;
  buttonEl.setAttribute("disabled", "true");

  setTimeout(function () {
    ballEl.scrollIntoView({ behavior: "smooth", block: "end" });
  }, 500);

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
    thinkingEl.style.animationIterationCount = 1;
    previousQuestions.push({ question: questionEl.value, answer: currentAnswer });
    setTimeout(function () {
      thinkingElText.textContent = "Hmm...";
      questionEl.inputMode = "text";
      thinkingEl.style.animationIterationCount = "infinite";
      thinkingEl.style.opacity = 0;
      buttonEl.style.opacity = 1;
      buttonEl.removeAttribute("disabled");
      questionEl.value = "";
      resultsEl.innerHTML = "";
      previousQuestions.forEach(function (question) {
        resultsEl.insertAdjacentHTML("afterbegin", `<tr><td>${question.question}</td><td>${question.answer}</td></tr>`);
      });
    }, "2000");
  }, "2000");
});

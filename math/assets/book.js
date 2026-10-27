(function () {
  "use strict";

  const questions = [...document.querySelectorAll(".quiz-question")];
  const progress = document.getElementById("quizProgress");
  function updateProgress() {
    const answered = questions.filter((item) => item.dataset.answered).length;
    const right = questions.filter((item) => item.dataset.answered === "correct").length;
    progress.textContent = answered === questions.length
      ? `完成啦，答对 ${right} / ${questions.length} 题。`
      : `已完成 ${answered} / ${questions.length} 题`;
  }
  questions.forEach((item) => {
    item.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-choice]");
      if (!button || item.dataset.answered) return;
      const correct = Number(item.dataset.answer);
      const isCorrect = Number(button.dataset.choice) === correct;
      item.dataset.answered = isCorrect ? "correct" : "wrong";
      item.querySelectorAll("button").forEach((option) => {
        option.disabled = true;
        if (Number(option.dataset.choice) === correct) option.classList.add("is-correct");
        else if (option === button) option.classList.add("is-wrong");
      });
      const answer = item.querySelector(`button[data-choice="${correct}"]`).textContent;
      const explanation = item.querySelector(".quiz-reason");
      const feedback = item.querySelector(".quiz-feedback");
      feedback.textContent = `${isCorrect ? "答对了。" : `正确答案：${answer}。`}${explanation.textContent}`;
      feedback.hidden = false;
      updateProgress();
    });
  });
  document.getElementById("resetQuiz").addEventListener("click", () => {
    questions.forEach((item) => {
      delete item.dataset.answered;
      item.querySelectorAll("button").forEach((option) => {
        option.disabled = false;
        option.classList.remove("is-correct", "is-wrong");
      });
      const feedback = item.querySelector(".quiz-feedback");
      feedback.textContent = "";
      feedback.hidden = true;
    });
    updateProgress();
    questions[0].querySelector("button").focus();
  });
  // A search result can point to an application whose explanation is collapsed.
  function openTarget() {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target && target.matches("details.application")) target.open = true;
  }
  window.addEventListener("hashchange", openTarget);
  openTarget();
})();

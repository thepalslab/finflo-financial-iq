
function checkAnswer(button, isCorrect) {
  const feedback = document.getElementById("quiz-feedback");
  if (isCorrect) {
    feedback.textContent = "✅ Correct! Keeping utilization below 30% is ideal.";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "❌ Nope. Try again or check your understanding!";
    feedback.style.color = "red";
  }
}

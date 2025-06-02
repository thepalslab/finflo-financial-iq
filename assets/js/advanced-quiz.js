
const questions = [
  {
    question: "What’s the ideal credit utilization ratio?",
    options: ["Over 50%", "Below 30%", "Exactly 100%"],
    correctIndex: 1
  },
  {
    question: "How often should you check your credit report?",
    options: ["Every 5 years", "Once a year", "Every month"],
    correctIndex: 1
  },
  {
    question: "What’s one thing that doesn’t impact your credit score?",
    options: ["Payment history", "Age", "Favorite color"],
    correctIndex: 2
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("quiz-question").textContent = q.question;
  const optionsDiv = document.getElementById("quiz-options");
  optionsDiv.innerHTML = "";
  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(index === q.correctIndex);
    optionsDiv.appendChild(btn);
  });
  document.getElementById("quiz-feedback").textContent = "";
  document.getElementById("next-btn").style.display = "none";
}

function checkAnswer(isCorrect) {
  const feedback = document.getElementById("quiz-feedback");
  if (isCorrect) {
    feedback.textContent = "✅ Correct!";
    feedback.style.color = "green";
    score++;
  } else {
    feedback.textContent = "❌ Incorrect.";
    feedback.style.color = "red";
  }
  document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-question").style.display = "none";
  document.getElementById("quiz-options").style.display = "none";
  document.getElementById("next-btn").style.display = "none";
  document.getElementById("quiz-feedback").style.display = "none";
  const result = document.getElementById("quiz-result");
  result.style.display = "block";
  result.textContent = `🎉 You scored ${score} out of ${questions.length}!`;
}

window.onload = loadQuestion;

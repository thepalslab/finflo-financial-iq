
function selectOption(type) {
  const output = document.getElementById("finflo-output");
  output.innerHTML = "";

  if (type === "quiz") {
    output.innerHTML = `
      <h4>🧠 Quiz Time</h4>
      <p>What’s the ideal credit utilization ratio?</p>
      <button onclick="showFeedback(true)">Below 30%</button>
      <button onclick="showFeedback(false)">Over 50%</button>
    `;
  } else if (type === "fact") {
    output.innerHTML = `
      <h4>💡 Did You Know?</h4>
      <p>Payment history makes up 35% of your credit score — missing even one can have lasting impact.</p>
    `;
  } else if (type === "chart") {
    output.innerHTML = `
      <h4>📊 Credit Score Breakdown</h4>
      <img src="https://via.placeholder.com/300x200?text=Pie+Chart+FICO+Breakdown" alt="Chart Visual Tip" />
    `;
  } else if (type === "slider") {
    output.innerHTML = `
      <h4>🎛 Credit Utilization Impact</h4>
      <p>Adjust utilization to see its effect:</p>
      <input type="range" min="0" max="100" value="30" oninput="updateSlider(this.value)" />
      <p id="slider-result">Utilization: 30% → Score impact: Neutral</p>
    `;
  }
}

function showFeedback(isCorrect) {
  const output = document.getElementById("finflo-output");
  output.innerHTML += `<p style="margin-top:1rem; font-weight:bold; color: ${isCorrect ? 'green' : 'red'};">
    ${isCorrect ? '✅ Correct! Below 30% is ideal.' : '❌ Not quite. Below 30% is the goal.'}
  </p>`;
}

function updateSlider(val) {
  let feedback = "Good";
  if (val > 70) feedback = "Risky";
  else if (val > 30) feedback = "Needs improvement";
  else if (val <= 30) feedback = "Neutral";
  document.getElementById("slider-result").textContent = `Utilization: ${val}% → Score impact: ${feedback}`;
}

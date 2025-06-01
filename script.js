const candidates = ['K R YOGESH', 'C ANJI', 'B SWAROOP', 'V SUNIL', 'G HARI'];

function login() {
  const email = document.getElementById('email').value.trim();
  if (email.endsWith('@mbu.asia')) {
    document.getElementById('votingSection').style.display = 'block';
  } else {
    alert('Please enter a valid MBU email address (e.g., yourname@mbu.asia)');
  }
}

function vote(name) {
  let voted = localStorage.getItem("voted");
  if (voted === "true") {
    document.getElementById("voteMessage").innerText = "❌ You have already voted!";
    return;
  }

  let votes = JSON.parse(localStorage.getItem("votes")) || {};
  votes[name] = (votes[name] || 0) + 1;

  localStorage.setItem("votes", JSON.stringify(votes));
  localStorage.setItem("voted", "true");

  document.getElementById("voteMessage").innerText = `✅ Your vote for ${name} has been recorded!`;

  updateVoteCount();
}

function updateVoteCount() {
  let votes = JSON.parse(localStorage.getItem("votes")) || {};
  let ul = document.getElementById("voteCount");
  ul.innerHTML = "";
  candidates.forEach(candidate => {
    let count = votes[candidate] || 0;
    let li = document.createElement("li");
    li.innerText = `${candidate}: ${count} votes`;
    ul.appendChild(li);
  });
}

window.onload = updateVoteCount;

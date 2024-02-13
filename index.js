// -- SELECTORS
const leftBtnContainer = document.querySelector(`.btn-container-left`);
const rightBtnContainer = document.querySelector(`.btn-container-right`);
const homeScoreEl = document.querySelector(".score-left");
const guestScoreEl = document.querySelector(".score-right");
const leadingTeamEl = document.querySelector(".leading-team-name");
const resetBtn = document.querySelector(".reset-btn");
console.log(leadingTeamEl);

// SCORES
let homeScore = 0;
let guestScore = 0;

// console.log(leftBtnContainer, rightBtnContainer);

// ----------Functionalities-------------

// Adding scores

leftBtnContainer.addEventListener(`click`, function (e) {
  e.preventDefault();

  if (e.target.classList.contains("btn")) {
    let btnNo = Number(e.target.dataset.btnNo);
    if (btnNo == 1) {
      homeScore += 1;
      homeScoreEl.textContent = homeScore;
    } else if (btnNo == 2) {
      homeScore += 2;
      homeScoreEl.textContent = homeScore;
    } else {
      homeScore += 3;
      homeScoreEl.textContent = homeScore;
    }
    leadTeamFinder(homeScore, guestScore);
  }
});

rightBtnContainer.addEventListener(`click`, function (e) {
  e.preventDefault();

  if (e.target.classList.contains("btn")) {
    let btnNo = Number(e.target.dataset.btnNo);
    if (btnNo == 1) {
      guestScore += 1;
      guestScoreEl.textContent = guestScore;
    } else if (btnNo == 2) {
      guestScore += 2;
      guestScoreEl.textContent = guestScore;
    } else {
      guestScore += 3;
      guestScoreEl.textContent = guestScore;
    }
    leadTeamFinder(homeScore, guestScore);
  }
});
// showing the leading team
const leadTeamFinder = function (a, b) {
  if (a > b) {
    leadingTeamEl.textContent = `HOME😎`;
  } else {
    leadingTeamEl.textContent = `GUEST😍`;
  }
};

// Ressetting Scores

resetBtn.addEventListener("click", function (e) {
  e.preventDefault();
  homeScore = 0;
  guestScore = 0;
  guestScoreEl.textContent = guestScore;
  homeScoreEl.textContent = homeScore;
  leadingTeamEl.textContent = `finding➰`;
});

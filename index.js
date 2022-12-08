// code

//H1
const h1 = document.querySelector(`h1`);
h1.innerHTML = (`Thomas F. Nielson`);

//EMAIL BUTTON
const emailButton = document.getElementById(`email-button`);
emailButton.style.background = `#96ceb4`;

function clickAlert () { //ALERT WHEN CLICKING BUTTON
    alert("You're e-mailing tfnielson.se@gmail.com")
}
emailButton.addEventListener(`click`, clickAlert);

//GIT BUTTON
const gitButton = document.getElementById(`github-button`);
gitButton.style.background = `#96ceb4`;


//TWITTER BUTTON
const twitterButton = document.getElementById(`twitter-button`);
twitterButton.style.background = `#96ceb4`;


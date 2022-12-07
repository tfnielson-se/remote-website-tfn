// code

//H1
const h1 = document.querySelector(`h1`);
h1.innerHTML = (`Thomas F. Nielson`);

//ABOUT ME
const aboutMe = document.getElementById(`about-me`);
aboutMe.innerHTML = `About Me`;

//CONTACT ME
const contactMe = document.getElementById(`contact-me`);
contactMe.innerHTML = `Contact Me`;
contactMe.style.textAlign = (`center`);

//TOP-DIV
const topList = document.getElementById(`top-div`);
topList.innerHTML = `Thomas Fernandes Nielson
<br>B.S. Mechanical Engineering, Colorado Mesa Univeristy
<br>tfnielson.se@gmail.com`;
topList.style.textAlign = (`center`);


//EMAIL BUTTON
const emailButton = document.getElementById(`email-button`);
emailButton.style.background = `#5b9aa0`;

function clickAlert () { //ALERT WHEN CLICKING BUTTON
    alert("You're e-mailing tfnielson.se@gmail.com")
}
emailButton.addEventListener(`click`, clickAlert);

//GIT BUTTON
const gitButton = document.getElementById(`github-button`);
gitButton.style.background = `#5b9aa0`;


//TWITTER BUTTON
const twitterButton = document.getElementById(`twitter-button`);
twitterButton.style.background = `#5b9aa0`;


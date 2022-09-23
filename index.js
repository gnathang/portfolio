

const workColorWrapper = document.querySelector('#menu-work-container');
  workColorWrapper.addEventListener('mousemove', changeColorWork);
const aboutColorWrapper = document.querySelector('#menu-about-container');
  aboutColorWrapper.addEventListener('mousemove', changeColorAbout);
const linkedinWrapper = document.querySelector('#linkedin-container');
  linkedinWrapper.addEventListener('mousemove', changeColorLinkedin);
const githubWrapper = document.querySelector('#github-container');
  githubWrapper.addEventListener('mousemove', changeColorGithub);

// const everythingElse = document.querySelector('.home-text-wrapper');
// everythingElse.addEventListener('mousemove', resetColor);



const workNav = document.querySelector('#work-nav')
const aboutNav = document.querySelector('#about-nav')
const linkedinNav = document.querySelector('#linkedin-nav')
const githubNav = document.querySelector('#github-nav')

function changeColorWork(e) {
  x = e.offsetX;
  y = e.offsetY;
  workNav.style.color = `rgb(${x},${y},${(x + y) / 10})`;
}

function changeColorAbout(e) {
  x = e.offsetX;
  y = e.offsetY;
  aboutNav.style.color = `rgb(${x},${y},${(x + y) / 10})`;
}

function changeColorLinkedin(e) {
  x = e.offsetX;
  y = e.offsetY;
  linkedinNav.style.backgroundColor = `rgb(${x},${y},${(x + y) / 10})`;
}

function changeColorGithub(e) {
  x = e.offsetX;
  y = e.offsetY;
  githubNav.style.backgroundColor = `rgb(${x},${y},${(x + y) / 10})`;
}

// function resetColor() {
//   workNav.style.color = `rgb(250, 235, 215);`;
// }

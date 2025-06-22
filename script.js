const challenges = [
  "Center a div... but you can only use 3 CSS properties",
  "Create a responsive layout without using media queries",
  "Make a button ripple effect without JavaScript",
  "Build a color-changing animation using only CSS variables",
  "Implement dark mode with just one CSS property",
  "Create a 3D cube using only CSS transforms",
  "Make text follow a circular path without SVG",
  "Build a loading spinner with a single div",
  "Create a gradient border without pseudo-elements",
  "Implement a hover effect that works on mobile"
];

const constraints = [
  "and one must be clip-path",
  "without using flexbox or grid",
  "with no more than 5 lines of CSS",
  "using only CSS selectors (no classes/IDs)",
  "without using width or height properties",
  "with only the :hover pseudo-class",
  "without using position: absolute",
  "using only the ::before pseudo-element",
  "without any margin or padding",
  "using only the + combinator"
];

const generateBtn = document.getElementById('generateBtn');
const challengeContent = document.getElementById('challengeContent');
const facebookBtn = document.getElementById('facebookBtn');
const instagramBtn = document.getElementById('instagramBtn');
const copyBtn = document.getElementById('copyBtn');

generateBtn.addEventListener('click', () => {
  const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
  const randomConstraint = constraints[Math.floor(Math.random() * constraints.length)];
  challengeContent.innerHTML = `${randomChallenge} <span class="constraint">${randomConstraint}</span>`;
});

facebookBtn.addEventListener('click', () => {
  const challenge = challengeContent.innerText;
  const url = encodeURIComponent(window.location.href);
  const quote = encodeURIComponent(`CSS Challenge: ${challenge}\n\nCan you solve this?`);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${quote}`, '_blank');
});

instagramBtn.addEventListener('click', () => {
  const challenge = challengeContent.innerText;
  alert(`📸 Screenshot this challenge and post it on Instagram!\n\nChallenge: ${challenge}\n\nTag #WillItCSS for features!`);
});

copyBtn.addEventListener('click', () => {
  const challenge = challengeContent.innerText;
  navigator.clipboard.writeText(`CSS Challenge: ${challenge}\n\nTry it yourself at: ${window.location.href}`);
  copyBtn.textContent = 'Copied!';
  setTimeout(() => { copyBtn.textContent = 'Copy Challenge'; }, 2000);
});
//Function to handle paragraph swap when the corresponding button is clicked.

const aboutButton = document.getElementById('aboutButton');
const educationButton = document.getElementById('educationButton');
const portfolioButton = document.getElementById('portfolioButton');
const careerButton = document.getElementById('careerButton');

const about = document.getElementById('about');
const education = document.getElementById('education');
const portfolio = document.getElementById('portfolio');
const career = document.getElementById('career');

function swapInfo(content) {
    about.style.display ='none';
    education.style.display ='none';
    portfolio.style.display ='none';
    career.style.display = 'none';
    content.style.display = 'inline-block';
} 

aboutButton.addEventListener('click', () => swapInfo(about));
educationButton.addEventListener('click', () => swapInfo(education));
portfolioButton.addEventListener('click', () => swapInfo(portfolio));
careerButton.addEventListener('click', () => swapInfo(career));
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon  =document.getElementById("toggle-icon");
const image1 =document.getElementById("image-1");
const image2 =document.getElementById("image-2");
const image3 =document.getElementById("image-3");
const textBox = document.getElementById("text-box");
const nav =document.getElementById("nav");

function imageMode(color){
    image1.src = `img/undraw_feeling_proud_${color}.svg`;
    image2.src = `img/undraw_proud_coder_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent ="Dark Mode";
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add ('fa-moon');
    imageMode("dark");
}
function lightMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent ="Light Mode";
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add ('fa-sun');
    imageMode("light");
}
function switchTheme(event){
    if(event.target.checked == true){
        document.documentElement.setAttribute('data-theme','dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    }
    else{
        document.documentElement.setAttribute('data-theme','light');
        lightMode();
    }
}
toggleSwitch.addEventListener('change', switchTheme);

const currTheme = localStorage.getItem('theme');
if(currTheme){
    document.documentElement.setAttribute('data-theme','dark');
    if(currTheme=='dark'){
        document.documentElement.setAttribute('data-theme','dark');
        toggleSwitch.checked =true;
        darkMode();
    }
}
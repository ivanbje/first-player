sugList = [
'Next person to have a birthday',
'Last person to have a birthday',
'The person wearing the most garments',
'The person wearing the least garments',
'The first person to wake up today',
'The last person to wake up today',
'The person who most recently had a taco',
'The person who most recently had pizza',
'The person who most recently had a hamburger',
'The youngest person',
'The oldest person',
'The person that most recently finished a book',
'The person that most recently watched a movie',
'The person that watched most tv episodes last week',
'The person who drank the most water today',
'The person who most recently tried a new candy',
'The person who most recently tried a new soda',
'The person who has visited the most countries',
'The person who has visited the fewest countries',
'The person who most recently visited another country',
'The person who most recently played a video game',
'The person who most recently finished a video game',
'The person who ate most recently',
'The person who has stayed awake the longest',
'The person who has slept for the longest',
'The person who is always late',
'The person who has most recently played a board game',
'The first person in alphabetical order',
'The last person in an alphabetical order',
'The person closest to "M" in the alphabet'
]


function init()
{
	console.log('Hello World');
	const firstPlayer = document.getElementById("firstPlayer");

	index = Math.floor(Math.random()*sugList.length);

	firstPlayer.innerHTML = sugList[index];
}

window.addEventListener('DOMContentLoaded', () => {
    init();
});


function switchTheme(override)
{
	const theme = document.getElementById("theme-link");
	const themeButton = document.getElementById("themebtn");
	if (theme.getAttribute("href") == "light-mode.css" || override =='dark') {
    // ... then switch it to "dark-theme.css"
    theme.href = "dark-mode.css";
    themeButton.value="Light mode ☀️";
    try {localStorage.setItem("item-display-theme","dark");} catch(error){console.log("Error saving theme to local storage; "+error);}
  // Otherwise...
  } else {
    // ... switch it to "light-theme.css"
    theme.href = "light-mode.css";
    themeButton.value="Dark mode 🌙";
    try {localStorage.setItem("item-display-theme","light");} catch(error){console.log("Error saving theme to local storage; "+error);}
  }
}

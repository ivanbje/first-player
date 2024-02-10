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
'The person who '
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
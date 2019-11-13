document.addEventListener("DOMContentLoaded", event => {
	navigator.clipboard.writeText("h").then(
		() => {
			console.log('[SPECTRAPULSE] Added "h" to clipboard!');
});})

const discord = (discord_username) => {
	navigator.clipboard.writeText(discord_username).then(
		() => { 
			alert(`I added my username to your clipboard! (${discord_username})`);
		}, () => {
			alert(`My Discord Username is ${discord_username}!`);
})}
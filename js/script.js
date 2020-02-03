const discord = (discord_username) => {
	navigator.clipboard.writeText(discord_username).then(
		() => {
			alert(`I added my username to your clipboard! (${discord_username})`);
		}, () => {
			alert(`My Discord Username is ${discord_username}!`);
});}
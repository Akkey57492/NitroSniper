const discord = require("discord.js")
const asyncio = require("asyncio")
const notifier = require("node-notifier")
const client = new discord.Client()

client.on("ready", () => {
	console.log("\
	███╗░░██╗██╗████████╗██████╗░░█████╗░  ░██████╗███╗░░██╗██╗██████╗░███████╗██████╗░\
	████╗░██║██║╚══██╔══╝██╔══██╗██╔══██╗  ██╔════╝████╗░██║██║██╔══██╗██╔════╝██╔══██╗\
	██╔██╗██║██║░░░██║░░░██████╔╝██║░░██║  ╚█████╗░██╔██╗██║██║██████╔╝█████╗░░██████╔╝\
	██║╚████║██║░░░██║░░░██╔══██╗██║░░██║  ░╚═══██╗██║╚████║██║██╔═══╝░██╔══╝░░██╔══██╗\
	██║░╚███║██║░░░██║░░░██║░░██║╚█████╔╝  ██████╔╝██║░╚███║██║██║░░░░░███████╗██║░░██║\
	╚═╝░░╚══╝╚═╝░░░╚═╝░░░╚═╝░░╚═╝░╚════╝░  ╚═════╝░╚═╝░░╚══╝╚═╝╚═╝░░░░░╚══════╝╚═╝░░╚═╝\
	")
})

client.on("message", async message => {
	if(message.content.match(/discord.gift/)) {
		notifier.notify({
			title: "Nitro hit",
			message: "DiscordNitroのギフトURLを検知しました。"
		})
		console.log(`Hit: ${message.content}`)
	}
})

client.login("Token")
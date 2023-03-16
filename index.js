const { Client, Events, GatewayIntentBits, Collection } = require('discord.js')

const dotenv = require('dotenv')
dotenv.config()
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.commands = new Collection

const fs = require('node:fs')
const path = require('node:path')

const commandsPath = path.join(__dirname, "commands")
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

for (const file of commandsFiles) {
	const filePath = path.join(commandsPath, file)
	const commands = require(filePath)
	if("data" in commands && "execute" in commands) {
		client.commands.set(commands.data.name, commands)
	} else {
		console.log('Não funcionou')
	}
}

client.once(Events.ClientReady, c => {
	console.log(`${c.user.tag} Está no ar`)
})

client.login(TOKEN)

client.on(Events.InteractionCreate, async interaction =>{
    if (interaction.isStringSelectMenu()){
        const selected = interaction.values[0]
        if (selected == "javascript"){
            await interaction.reply("Documentação do Javascript: https://developer.mozilla.org/en-US/docs/Web/JavaScript")
        } else if (selected == "python"){
            await interaction.reply("Documentação do Python: https://www.python.org")
        } else if (selected == "csharp"){
            await interaction.reply("Documentação do C#: https://learn.microsoft.com/en-us/dotnet/csharp/")
        } else if (selected == "discordjs"){
            await interaction.reply("Documentação do Discord.js: https://discordjs.guide/#before-you-begin")
        }
    }
    if (!interaction.isChatInputCommand()) return
    const command = interaction.client.commands.get(interaction.commandName)
    if (!command) {
        console.error("Comando não encontrado")
        return
    }
    try {
        await command.execute(interaction)
    } 
    catch (error) {
        console.error(error)
        await interaction.reply("Houve um erro ao executar esse comando!")
    }
})
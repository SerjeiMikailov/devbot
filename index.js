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


client.on('interactionCreate', async interaction => {
    if (interaction.isStringSelectMenu()) {
        const selected = interaction.values[0];

        if (interaction.customId === "classics") {
            if (selected == "kogos"){
                await interaction.reply("https://cdn.discordapp.com/attachments/1048273607094181949/1085952906756370432/dJdNJgHdsIwBsPB1.mp4")
            } else if (selected == "macho"){
                await interaction.reply("https://cdn.discordapp.com/attachments/739354143801737249/913058503621505104/descoberta_de_macho.mp4")
            } else if (selected == "euNunca"){
                await interaction.reply("https://cdn.discordapp.com/attachments/739354143801737249/917950374097354832/26b1df1b91b44fef90d85dc5513ee6ca.mp4")
            } else if (selected == "et"){
                await interaction.reply("https://youtu.be/vjJXiASPKyo?t=63")
            }
        } else if (interaction.customId === "peter") {
            if (selected === "comunismo") {
                await interaction.reply("https://cdn.discordapp.com/attachments/868903973095088174/1100631444214259722/comunismocerto.mp4");
            } else if (selected === "ética") {
                await interaction.reply("https://cdn.discordapp.com/attachments/868903973095088174/1100631434978414672/fds.mp4");
            } else if (selected === "nacional") {
                await interaction.reply("https://cdn.discordapp.com/attachments/868903973095088174/1100631425176313857/nacional.mp4");
            } else if (selected === "L") {
                await interaction.reply("https://cdn.discordapp.com/attachments/868903973095088174/1100631410257174570/nuna.mp4");
            }
            return;
        }
        return;
    }

    if (!interaction.isCommand()) return;
    const command = interaction.client.commands.get(interaction.commandName);
    if (!command) {
        console.error("Comando não encontrado");
        return;
    }
    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: "Houve um erro ao executar esse comando!", ephemeral: true });
    }
});

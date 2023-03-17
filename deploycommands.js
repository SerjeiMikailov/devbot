const { REST, Routes } = require('discord.js')
const dotenv = require('dotenv')
dotenv.config()
const { TOKEN, CLIENT_ID } = process.env
const fs = require('node:fs')
const path = require('node:path')

const commandsPath = path.join(__dirname, "commands")
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

const commands = []

for (const file of commandsFiles) {
    const command = require(`./commands/${file}`)
    if (command.data) {
        commands.push(command.data.toJSON())
    } else {
        console.error(`A propriedade "data" é indefinida em ${file}`)
    }
}

const rest = new REST({version: 10}).setToken(TOKEN);

(async () => {
    try {
        console.log(`Fazendo o deploy de ${commands.length} comandos...`)

        const data = await rest.put(
            Routes.applicationCommands(CLIENT_ID),
            {body: commands}
        )
        console.log(`Comandos Registrados com sucesso`)
    }
    catch (error){
        console.error(error)
    }
})()

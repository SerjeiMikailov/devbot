const { SlashCommandBuilder } = require('discord.js')

module.exports = {
data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Te devolve um "Pong!" na cara'),

async execute(interaction) {
    await interaction.reply("Pong neles!")
}
}
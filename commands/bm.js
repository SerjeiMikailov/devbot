const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("bm")
        .setDescription("Ela partiuuu..."),

    async execute(interaction) {
        await interaction.reply("https://www.youtube.com/watch?v=syqJAgTQdlU")
    }
}
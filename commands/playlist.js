const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("A braba"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/7aGdVccEjkvySLykPkCEiu?si=a28ced9b650d496d")
    }
}
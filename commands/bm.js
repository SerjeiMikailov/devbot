const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("bm")
        .setDescription("Ela partiuuu..."),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/1sLPthY6Q29NL1KmVWgGB0?si=1c28b961100b4392")
    }
}
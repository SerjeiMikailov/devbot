const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("repo")
        .setDescription("Repositório da Soph no github"),

    async execute(interaction) {
        await interaction.reply("https://github.com/SerjeiMikailov/devbot")
    }
}
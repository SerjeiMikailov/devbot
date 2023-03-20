const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("tutorial")
        .setDescription("Como ser um chad de sucesso"),

    async execute(interaction) {
        await interaction.reply("https://cdn.discordapp.com/attachments/697977914402144256/1087163043114406079/image.png")
    }
}
const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("augustin")
        .setDescription("Muito bom..."),

    async execute(interaction) {
        await interaction.reply("https://cdn.discordapp.com/attachments/986681729022582786/1095882154929561600/image.png")
    }
}
const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("licaododia")
        .setDescription("Lição do dia"),

    async execute(interaction) {
        await interaction.reply("https://cdn.discordapp.com/attachments/1048273607094181949/1100267207717560392/rapidsave.com_e_galera-in55h0e82uva1-360.mp4")
    }
}
const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("trump")
        .setDescription("trump"),

    async execute(interaction) {
        await interaction.reply("https://cdn.discordapp.com/attachments/1048273607094181949/1076931186280124556/moPYToyn5brFQEY0.mp4")
    }
}
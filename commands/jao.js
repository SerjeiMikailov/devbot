const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("jao")
        .setDescription("Foto vazada do jão"),

    async execute(interaction) {
        await interaction.reply("https://www.galaticosonline.com/fotos/noticias/57436/IMAGEM_NOTICIA_3.jpg")
    }
}
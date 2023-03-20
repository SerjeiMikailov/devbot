const { SlashCommandBuilder } = require('discord.js')

module.exports = {
data: new SlashCommandBuilder()
    .setName('xandao')
    .setDescription('Mostre o seu amor por este herói'),

async execute(interaction) {
    await interaction.reply(
        "Missil sendo disparado no Xandão em 3,2,1... https://www.notibras.com/site/wp-content/uploads/2023/03/misseis.sub_.webp",
        )
}
}
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('coinflip')
        .setDescription('Coinflip'),

    async execute(interaction) {
        const result = Math.random() < 0.5 ? 'Cara!!' : 'Coroa!!';
        await interaction.reply(`A moeda caiu: **${result}**!`);
    },
};

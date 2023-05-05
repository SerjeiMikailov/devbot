const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('summonwarden')
    .setDescription('psiu...'),
  async execute(interaction) {
    
    const fixedUserId = '535466240655753217';

    const mention = `<@${fixedUserId}>`;

    await interaction.reply(`Psiu, ei ${mention}, seu amiguinho está lhe chamando...`);
  },
};

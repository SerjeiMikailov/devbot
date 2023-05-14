const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('summonbarbieboy')
    .setDescription('barbie boy'),
  async execute(interaction) {
    
    const fixedUserId = '330057069887619072';

    const mention = `<@${fixedUserId}>`;

    await interaction.reply(`${mention} is dead, gg ${mention}, kk`);
  },
};

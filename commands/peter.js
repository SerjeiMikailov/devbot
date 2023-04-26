const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, Component } = require("discord.js")

const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId("peter")
            .setPlaceholder("Nehuma pérola do gordão ucrania selecionada")
            .addOptions({
                label: "comunismo",
                description: "Comunismo é certo", 
                value: "comunismo"
                },
                {
                    label: "ética",
                    description: "fds",
                    value: "ética"
                },
                {
                    label: "nacional",
                    description: "N word",
                    value: "nacional"
                },
                {
                    label: "L",
                    description: "nuna",
                    value: "L"
                }
            )
    )

module.exports = {
    identifier: 'peterC', 
    data: new SlashCommandBuilder()
        .setName("peter")
        .setDescription("Pérolas do gordão ucrania"),

    async execute(interaction) {
        await interaction.reply({content: "Selecione a pérola do gordão:", components: [row]})
    }
}
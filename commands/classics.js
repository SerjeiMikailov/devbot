const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, Component } = require("discord.js")

const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId("select")
            .setPlaceholder("Nenhum clássico selecionado")
            .addOptions({
                label: "kogos",
                description: "Veja o chad Kogos",
                value: "kogos"
                },
                {
                    label: "macho",
                    description: "Graduação de macho",
                    value: "macho"
                },
                {
                    label: "euNunca",
                    description: "Eu nunca, e tu?",
                    value: "euNunca"
                },
                {
                    label: "et",
                    description: "ET",
                    value: "et"
                }
            )
    )

module.exports = {
    data: new SlashCommandBuilder()
        .setName("classics")
        .setDescription("Memes clássicos"),

    async execute(interaction) {
        await interaction.reply({content: "Selecione o clássico:", components: [row]})
    }
}
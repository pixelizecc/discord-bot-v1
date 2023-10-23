const Discord = require("discord.js")

module.exports = {
  name: "ping",
  description: "Check the Bot Ping",
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    let ping = client.ws.ping;

    let emb1 = new Discord.EmbedBuilder()
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`Hey ${interaction.user}, my ping is at \`calculating...\`.`)
    .setColor("Random");

    let emb2 = new Discord.EmbedBuilder()
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`Hey ${interaction.user}, my ping is at \`${ping}ms\`.`)
    .setColor("Random");

    interaction.reply({ embeds: [emb1] }).then( () => {
        setTimeout( () => {
            interaction.editReply({ embeds: [emb2] })
        }, 2000)
    })
  }
}
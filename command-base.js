const Discord = require("discord.js")

module.exports = {
  name: '', // Put The command name
  description: '', // Put The Command Description
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
        name: '',
        description: '',
        type: Discord.ApplicationCommandOptionType,
        required: true,
    }
],

  run: async (client, interaction) => {


    
  }
}
require('../index')

const Discord = require('discord.js')
const client = require('../index')


client.on('ready', () => {
    console.log(`🔥 Online at ${client.user.username}!`)
    console.log(`Made with love by Pixelize Staff`)
})
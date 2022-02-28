const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, WebhookClient } = require('discord.js')
module.exports = {
	data: new SlashCommandBuilder()
		.setName('log')
		.setDescription('Log a book you read!')

        .addStringOption((o) => 
          o.setRequired(true)
          .setName('title')
          .setDescription('Title of the book you read!'))

          .addStringOption((o) => 
             o.setRequired(true)
             .setName('author')
             .setDescription('Author of the book you read!'))

             .addStringOption((o) => 
                o.setRequired(true)
                .setName('genre')
                .setDescription('Genre of the book you read!')),
                        
          async execute (interaction) {

            const title = interaction.options.getString('title')
            const authorField = interaction.options.getString('author')
            const genre = interaction.options.getString('genre')

              const user = interaction.user
        
                  const url = "https://discord.com/api/webhooks/936424894995001406/0pH8bCMz1SVabmQ_JlR8iyNNXdO8jUpWS9DjvPQwEd__0nb29YzpNuaAHdaHCsxW6GjX"
                  const wc = new WebhookClient({ url: url })
                  await wc.send({ content: `\*\*${interaction.user}\*\* read a \*\*${genre}\*\* book called \*\*${title}\*\* by \*\*${authorField}\*\*!` })
            
            
           await interaction.reply({ content:`I logged: \*\*${interaction.user}\*\* read a \*\*${genre}\*\* book called \*\*${title}\*\* by \*\*${authorField}\*\*!`, ephemeral: true });}
  }

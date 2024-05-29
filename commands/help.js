const { EmbedBuilder } = require('discord.js');


module.exports = {
  name: "help",
  description: "Get information about the bot",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {
     

      const embed = new EmbedBuilder()
         .setColor('#0099ff')
      .setTitle('🎫 Ticket Bot Help')
      .setDescription('Welcome to the Ticket Bot!\n\n- Here are the available commands:\n\n' +
        '**/setup :** Set up the ticket system for your server.\n' +
        '**/reset :** Clear the setup done to server.\n' +
        '**/ping :** check bot latencey.\n' +
        '**/support :** Displays support server info');

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
    console.error(e); 
  }
  },
};


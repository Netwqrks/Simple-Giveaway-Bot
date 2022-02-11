const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setLabel(`Invite ${client.user.username}`)
        .setStyle('LINK')
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=927019054353481738&permissions=8&scope=bot%20applications.commands`),
    )
    let invite = new MessageEmbed()
    .setAuthor(`Invite ${client.user.username} `, client.user.avatarURL())
    .setTitle("Invite & Link!")
    .setDescription(`Invite ${client.user} to your server today & enjoy seamless giveaways with advvanced features!`)
    .setColor('#2F3136')
    .setTimestamp()
    .setFooter(`Requested by ${message.author.tag} | Giveaway by 𝒩𝑒𝓉𝓌𝑜𝓇𝓀𝓈#0001`, message.author.displayAvatarURL())
    message.reply({ embeds: [invite], components: [row]});
}

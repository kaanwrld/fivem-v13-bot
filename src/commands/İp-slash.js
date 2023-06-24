const { MessageEmbed, Permissions, MessageButton, MessageActionRow, Client, CommandInteraction} = require("discord.js")
const db = require("nessdb")
const ayar = require("../base/settings.json");

module.exports = {
        slash: true,
        name: ['ip'],
        description: 'Sunucunun adreslerine bakabilirsiniz.',
        option: [],

async execute(client, interaction, args) {

const whitelist = ayar.whitelist
const ip = ayar.ip
const ts3 = ayar.ts3
const avantar = interaction.user.displayAvatarURL()

if(!interaction.member.roles.cache.has(whitelist)) return interaction.reply({ content: "❌ Bu komutu sadece whitelist olanlar kullanabilir.", ephemeral: true })

const Embed = new MessageEmbed()
 .setColor("#2f3136")
 .setTitle('**Sunucunun İp Adresleri**')
 .addFields(
{ name: `» **Sunucu İp Adresi**`, value: `connect ${ip}`, inline: false },
{ name: `» **TeamSpeak3 İp Adresi**`, value: `${ts3}`, inline: false },
)
 .setTimestamp()
 .setFooter({ text: `${interaction.user.tag} Tarafından istendi`, iconURL: avantar})
interaction.reply({embeds: [Embed]})

}           
} 
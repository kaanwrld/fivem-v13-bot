const { MessageEmbed, Permissions, MessageButton, MessageActionRow, Client, CommandInteraction} = require("discord.js")
const db = require("nessdb")
const ayar = require("../base/settings.json");

module.exports = {
    slash: false, 
    name: ['ip', 'iP', 'İp', 'İP'],
    async execute(client, message, args) {

const whitelist = ayar.whitelist
const ip = ayar.ip
const ts3 = ayar.ts3

const avantar = message.author.displayAvatarURL()

if(!message.member.roles.cache.has(whitelist)) return message.reply("❌ Bu komutu sadece whitelist olanlar kullanabilir.").then(nev => {
    setTimeout(() => nev.delete(), 5000)
})
        
const Embed1 = new MessageEmbed()
.setColor("#2f3136")
.setTitle('**Sunucunun İp Adresleri**')
.addFields(
        { name: `» **Sunucu İp Adresi**`, value: `connect ${ip}`, inline: false },
        { name: `» **TeamSpeak3 İp Adresi**`, value: `${ts3}`, inline: false },
 )
.setTimestamp()
.setFooter({ text: `${message.author.tag} tarafından istendi`, iconURL: avantar})
message.reply({embeds: [Embed1]})

}
} 
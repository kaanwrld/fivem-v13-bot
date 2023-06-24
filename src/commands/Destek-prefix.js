const { MessageEmbed, Permissions, MessageButton, MessageActionRow, Client, CommandInteraction} = require("discord.js")
const db = require("nessdb")
const ayar = require("../base/settings.json");

module.exports = {
 slash: false, 
 name: ['destek', 'Destek', 'DESTEK'],
async execute(client, message, args) {

if(db.has("fivem-desteksistemi"+message.author.id) && Date.now() - db.get("fivem-desteksistemi"+message.author.id) < 120000) return message.reply({ content:`**Bu komutu 120 saniyede yalnızca bir kez kullanabilirsin**`, ephemeral: true })

const destekwl = ayar.whitelist
const destekkanal = ayar.destekkanal
const destekyetkilisi = ayar.destekyetkilisi

if(!message.member.roles.cache.has(destekwl)) return message.reply({ content: `❌ Bu komutu sadece <@&${destekwl}> olanlar kullanabilir`, ephemeral: true });

if(message.channel.id !== destekkanal) return message.reply({ content:`❌ Bu komutu sadece <#${destekkanal}> adlı kanalda kullanabilirsin.`, ephemeral: true })

message.reply(`${message.author} Yetkili Ekip Sizinle İlgilenecektir Lütfen Bekleyin. <@&${destekyetkilisi}>`)

db.set("fivem-desteksistemi"+message.author.id, Date.now())     
}           
}
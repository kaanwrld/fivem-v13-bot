const { MessageEmbed, Permissions, MessageButton, MessageActionRow, Client, CommandInteraction} = require("discord.js")
const Discord = require("discord.js");
const db = require("nessdb")
const ayar = require("../base/settings.json");

module.exports = {
    slash: false, 
    name: ['kayıt', 'Kayıt', 'KAYIT'],
async execute(client, message, args) {

if(db.has("fivem-kayıtsistemi"+message.author.id) && Date.now() - db.get("fivem-kayıtsistemi"+message.author.id) < 120000) return message.reply({ content:`**Bu komutu 120 saniyede yalnızca 1 kez kullanabilirsin**`, ephemeral: true })

const kayıtsız = ayar.kayıtsız
const kayıtkanal = ayar.kayıtkanal
const kayıtyetkilisi = ayar.kayıtyetkilisi

if(!message.member.roles.cache.has(kayıtsız)) return message.reply({ content:`❌ Bu komutu sadece <@&${kayıtsız}> olanlar kullanabilir`, ephemeral: true });

if(message.channel.id !== kayıtkanal) return message.reply({ content:`❌ Bu komutu sadece <#${kayıtkanal}> adlı kanalda kullanabilirsin.`, ephemeral: true })

message.reply(`Hoşgeldin, **${message.author}**, Yetkili ekibimiz sizinle en kısa zamanda ilgilenecektir. <@&${kayıtyetkilisi}>`)

db.set("fivem-kayıtsistemi"+message.author.id, Date.now())
}           
}
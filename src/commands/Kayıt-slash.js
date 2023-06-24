const { MessageEmbed, Permissions, MessageButton, MessageActionRow, Client, CommandInteraction} = require("discord.js")
const Discord = require("discord.js");
const db = require("nessdb")
const ayar = require("../base/settings.json");

module.exports = {
 slash: true,
 name: ['kayıt'],
 description: 'Kayıt Çağırma komutu.',
 option: [],

async execute(client, interaction, args) {

if(db.has("fivem-kayıtsistemi"+interaction.user.id) && Date.now() - db.get("fivem-kayıtsistemi"+interaction.user.id) < 120000) return interaction.reply({ content:`**Bu komutu 120 saniyede yalnızca 1 kez kullanabilirsin**`, ephemeral: true })

const kayıtsız = ayar.kayıtsız
const kayıtkanal = ayar.kayıtkanal
const kayıtyetkilisi = ayar.kayıtyetkilisi

if(!interaction.member.roles.cache.has(kayıtsız)) return interaction.reply({ content:`❌ Bu komutu sadece <@&${kayıtsız}> olanlar kullanabilir`, ephemeral: true });

if(interaction.channel.id !== kayıtkanal) return interaction.reply({ content:`❌ Bu komutu sadece <#${kayıtkanal}> adlı kanalda kullanabilirsin.`, ephemeral: true })

interaction.reply(`Hoşgeldin, **${interaction.user}**, Yetkili ekibimiz sizinle en kısa zamanda ilgilenecektir. <@&${kayıtyetkilisi}>`)

db.set("fivem-kayıtsistemi"+interaction.user.id, Date.now())
}           
}
const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js")
const db = require("nessdb");
const ayar = require("../base/settings.json");

module.exports = {
    slash: true,
    name: ['restart'],
    description: 'Restart komutu.',
    option: [],

async execute(client, interaction, args) {

const ustyetkılı = ayar.ustyetkılı
const sunucuismi = ayar.sunucuismi

if(!interaction.member.roles.cache.has(ustyetkılı) ) return interaction.reply({ content:`Bu komutu sadece <@&${ustyetkılı}> olanlar kullanabilir.`, ephemeral: true });

const fivem = new MessageEmbed()
.setColor("GREEN")
.setTitle(`**RESTART GELİYOR**`)
.setDescription(`Restart geliyor! Lütfen güvenli çıkış sağlayalım.`)
.setFooter({text:`${sunucuismi}`})
.setTimestamp()
.setImage("https://i.hizliresim.com/juzdayf.png")
interaction.reply({ embeds: [fivem]})
interaction.channel.send(`||@everyone @here||`)

}
}
const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js")
const db = require("nessdb");
const ayar = require("../base/settings.json");

module.exports = {
    slash: true,
    name: ['aktif'],
    description: 'Sunucuya aktif verme komutu',
    option: [],

async execute(client, interaction, args) {

const ustyetkılı = ayar.ustyetkılı
const ip = ayar.ip
const ts3 = ayar.ts3
const sunucuismi = ayar.sunucuismi

if(!interaction.member.roles.cache.has(ustyetkılı) ) return interaction.reply({ content:`**Bu komutu sadece <@&${ustyetkılı}> olanlar kullanabilir!**`, ephemeral: true });

const Embed = new MessageEmbed()
 .setColor("GREEN")
 .setTitle(`**SUNUCU AKTİF**`)
 .setDescription(`Sunucu aktif, güvenli bir şekilde giriş yapabilirsiniz.`)
 .addFields(
        { name: `» **İP**`, value: `connect ${ip}`, inline: true },
        { name: `» **TS3**`, value: `${ts3}`, inline: true },
 )
 .setFooter({text:`${sunucuismi} | Sunucu Aktif`})
 .setTimestamp()
 .setImage("https://i.hizliresim.com/kp3hem0.png")
interaction.reply({embeds: [Embed]});
interaction.channel.send(`||@everyone @here||`)


}
}
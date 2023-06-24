const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js")
const db = require("nessdb");
const ayar = require("../base/settings.json");

module.exports = {
    slash: true,
    name: ['bakım'],
    description: 'Sunucu bakım komutu.',
    option: [
        {
            name: 'sebep',
            description: 'Bakım sebebi nedir?',
            type: 'string',
            require: false
        }
    ],

async execute(client, interaction, args) {

const sunucuismi = ayar.sunucuismi
const ustyetkılı = ayar.ustyetkılı

const sebep = interaction.options.getString("sebep") || "Sebep belirtilmemiş"
if(!interaction.member.roles.cache.has(ustyetkılı) ) return interaction.reply({ content:`**Bu komutu sadece <@&${ustyetkılı}> olanlar kullanabilir.**`, ephemeral: true });

const fivem = new MessageEmbed()
.setColor("GREEN")
.setTitle(`**SUNUCU BAKIMDA**`)
.setDescription(`Sunucu **${sebep}** sebebiyle geçiçi olarak bakımda. \n\n Anlayışla karşıladığınız için teşekkür ederiz. \n`)
.setFooter({text:`${sunucuismi}`})
.setTimestamp()
.setImage("https://i.hizliresim.com/hf01h8h.png")
interaction.reply({ embeds: [fivem]})
interaction.channel.send(`||@everyone @here||`)

}
}
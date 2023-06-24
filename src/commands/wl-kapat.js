const { MessageEmbed, Permissions, MessageButton, MessageActionRow, Client, CommandInteraction} = require("discord.js")
const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
const db = require("nessdb")
const ayar = require("../base/settings.json");

module.exports = {
    slash: true,
	name: ['wl-kapat'], 
    description: 'Kanal whıtelist kilitler',
    option: [],

async execute(client, interaction, args) {
  
if(!interaction.member.roles.cache.has(ayar.wlaçkapatyetkilisi)) return interaction.reply({ content:`Bu komutu sadece <@&${ayar.wlaçkapatyetkilisi}> olanlar kullanabilir.`, ephemeral: true });

let everyone = interaction.guild.roles.cache.find(x => x.id === ayar.whitelist);

interaction.channel.permissionOverwrites.edit(everyone, {
    SEND_MESSAGES: false,
})
interaction.reply({ content:`Kanal whıtelist'e kilitlendi.`}).catch(() => interaction.reply({ content:`Bir şeyler yanlış gitti lütfen tekrar deneyin.`, ephemeral: true }))
      
}
}

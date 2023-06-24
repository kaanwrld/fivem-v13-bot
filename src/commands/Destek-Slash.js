const { MessageEmbed, Permissions, MessageButton, MessageActionRow, Client, CommandInteraction} = require("discord.js")
const db = require("nessdb")
const ayar = require("../base/settings.json");

module.exports = {
        slash: true,
        name: ['destek'],
        description: 'Destek Çağırma komutu.',
        option: [],

async execute(client, interaction, args) {

if(db.has("fivem-desteksistemi"+interaction.user.id) && Date.now() - db.get("fivem-desteksistemi"+interaction.user.id) < 120000) return interaction.reply({ content:`**Bu komutu 120 saniyede yalnızca bir kez kullanabilirsin**`, ephemeral: true })

const destekwl = ayar.whitelist
const destekkanal = ayar.destekkanal
const destekyetkilisi = ayar.destekyetkilisi

if(!interaction.member.roles.cache.has(destekwl)) return interaction.reply({ content: `❌ Bu komutu sadece <@&${destekwl}> olanlar kullanabilir`, ephemeral: true });

if(interaction.channel.id !== destekkanal) return interaction.reply({ content:`❌ Bu komutu sadece <#${destekkanal}> adlı kanalda kullanabilirsin.`, ephemeral: true })

interaction.reply(`${interaction.user} Yetkili Ekip Sizinle İlgilenecektir Lütfen Bekleyin. <@&${destekyetkilisi}>`)

db.set("fivem-desteksistemi"+interaction.user.id, Date.now())     
}           
}
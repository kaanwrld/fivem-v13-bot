const { MessageEmbed, Permissions, MessageButton, MessageActionRow, Client, CommandInteraction} = require("discord.js")
const db = require("nessdb")
const moment = require("moment");
const ayar = require("../base/settings.json");

module.exports = {
    slash: true,
    name: ['wlal'],
    description: 'Kullanıcıya whıtelıst almaya yarar.',
    option: [
    {
    name: 'kullanıcı',
    description: 'Geçerli bir kullanıcı etiketlemelisin.',
    type: 'user',
     require: true
    }
],

async execute(client, interaction, args) {

const sunucuismi = ayar.sunucuismi
const wlyetkılı = ayar.wlyetkılı
const wlkayıtkanal = ayar.wlkayıtkanal
const wlvermelog = ayar.wlvermelog
const wlrols = ayar.whitelist
const kayıtsız = ayar.kayıtsız

if(!interaction.member.roles.cache.has(wlyetkılı)) return interaction.reply({ content:`❌ - Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!`, ephemeral: true });
if(interaction.channel.id !== wlkayıtkanal) return interaction.reply({ content:`Bu Komutu sadece <#${wlkayıtkanal}> Adlı Kanalda Kullanabilirsin.`, ephemeral: true })

const member = interaction.options.getMember("kullanıcı")
if(!member) return interaction.reply({content: "❌ Geçersiz kullanıcı girdiniz, lütfen tekrar deneyin."}).catch(() => interaction.reply({ content:`Bir şeyler yanlış gitti lütfen tekrar deneyin.`, ephemeral: true }))
        
if(interaction.member.roles.highest.position <= member.roles.highest.position) return interaction.reply({content: "Kendinden büyük veya aynı roldeki kişileri kayıt edemezsin.", ephemeral: true})
const owner = interaction.guild.members.cache.get(interaction.guild.ownerId);

if(member.id == interaction.user.id) return interaction.reply({content: "**Kendine whıtelıst alamasın.**",ephemeral:true})
if(member.id == client.user.id) return interaction.reply({content: "**Botlara whıtelıst alamasın.**",ephemeral:true})
if(member.id == owner) return interaction.reply({content: "**Kurucuya Whıtelıst alamasın.**",ephemeral:true})

if(!member.roles.cache.has(kayıtsız)) {
    setTimeout(() => {
     member.roles.add(kayıtsız)          
   }, 1000);
   await member.roles.remove(wlrols)
}

interaction.reply({content: `${member} **Adlı kişinin başarıyla** <@&${wlrols}> **aldım.**`, ephemeral: true })

const günü = moment(new Date().toISOString()).format('DD')
const ayı = moment(new Date().toISOString()).format('MM').replace("01", "Ocak").replace("02","Şubat").replace("03","Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10","Ekim").replace("11","Kasım").replace("12","Aralık").replace("13","CodAre")//codare
const yılı =  moment(new Date().toISOString()).format('YYYY')
const saati = moment(new Date().toISOString()).format('HH:mm')
const günay = `${günü} ${ayı} ${yılı} ${saati}` 

const wl = new MessageEmbed()
 .setTitle(`${sunucuismi} Whıtelıst Log`)
 .addFields(
    { name: `» Whıtelıst Alan Yetkili`, value: `\`\`\`${interaction.user.tag}\`\`\``, inline: true },
    { name: `» Whıtelıst Alan Yetkili id`, value: `\`\`\`${interaction.user.id}\`\`\``, inline: true },
    { name: `» Whıtelıst Alınan Kişi`, value: `\`\`\`${member.user.tag}\`\`\``, inline: true },
    { name: `» Whıtelıst Alınan Kişi id`, value: `\`\`\`${member.id}\`\`\``, inline: true },
    { name: `» Whıtelıst Alındı Tarih`, value: `\`\`\`${günay}\`\`\``, inline: true },
)
 .setColor("RED");
interaction.guild.channels.cache.get(wlvermelog).send({ embeds: [wl]})
}
}

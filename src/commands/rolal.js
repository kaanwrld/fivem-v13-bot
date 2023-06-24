const { MessageEmbed, Permissions, MessageButton, MessageActionRow, Client, CommandInteraction} = require("discord.js")
const moment = require("moment");
const db = require("nessdb")
const ayar = require("../base/settings.json");

module.exports = {
        slash: true,
        name: ['rolal'],
        description: 'Kullanıcıdan rol alırsın',
        option: [
            {
                name: 'kullanıcı',
                description: 'Geçerli bir kullanıcı etiketlemelisin.',
                type: 'user',
                require: true
            },
            {
                name: 'rol',
                description: 'Geçerli bir rol girmen gerek.',
                type: 'role',
                require: true
            }
        ],

async execute(client, interaction, args) { 

if(!interaction.member.roles.cache.has(ayar.rolveralyetkilisi)) return interaction.reply({ content: `**Bu komutu sadece <@&${ayar.rolveralyetkilisi}> olanlar kullanabilir!**`, ephemeral: true })

const member = interaction.options.getMember("kullanıcı")
if(!member) return interaction.reply({content: "❌ Geçersiz kullanıcı girdiniz, lütfen tekrar deneyin."}).catch(e => {})

const roles = interaction.options.getRole("rol")
if(!roles) return interaction.reply({content: "❌ Geçersiz rol seçtiniz, lütfen tekrar deneyin."}).catch(e => {})


if(interaction.member.roles.highest.position <= member.roles.highest.position) return interaction.reply({content: "Kendinden büyük veya aynı düzeydeki kişilerden rol alamazsın.", ephemeral: true}).catch(e => {})

if(!member.roles.cache.has(roles)) {
    setTimeout(() => {
        member.roles.remove(roles)          
 }, 1000);
}
const rolver = new MessageEmbed()
.setColor("GREEN")     
.setDescription(`${member}, **Adlı kişiye başarıyla** \`${roles.name}\` **adlı rolü aldım.**.`)
interaction.reply({embeds: [rolver]}).catch(e => {})

const günü = moment(new Date().toISOString()).format('DD')
const ayı = moment(new Date().toISOString()).format('MM').replace("01", "Ocak").replace("02","Şubat").replace("03","Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10","Ekim").replace("11","Kasım").replace("12","Aralık").replace("13","CodAre")//codare
const yılı =  moment(new Date().toISOString()).format('YYYY')
const saati = moment(new Date().toISOString()).format('HH:mm')

let günay = `${günü} ${ayı} ${yılı} ${saati}` 

const rolallog = new MessageEmbed()
.setColor("RED")
.setTitle("Rol alındı")
.setDescription(`
__Rolü alan yetkili__: ${interaction.user}

__Rol alınan kişi__: ${member}

__Alınan rol__: ${roles}

__Zaman__: **${günay}**`)
interaction.guild.channels.cache.get(ayar.rolverallog).send({ embeds: [rolallog]}).catch(e => {})

}
}
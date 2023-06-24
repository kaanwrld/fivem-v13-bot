const { MessageEmbed, Permissions, MessageButton, MessageActionRow, Client, CommandInteraction, GuildMember, MessageAttachment, WebhookClient, Modal, TextInputComponent} = require("discord.js")
const discord = require("discord.js");
const Discord = require("discord.js");
const db = require("nessdb")
const client = new discord.Client({ intents: Object.values(discord.Intents.FLAGS).reduce((x, y) => x + y, 0) });
const { token } = require("./src/base/settings.json");
require("./src/base/app.js")(client)

client.login(token);

process.on("uncaughtException", () => console.log()); 
process.on("unhandledRejection", () => console.log());
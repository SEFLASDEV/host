
const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./true.json')
const fs = require('fs');
const { Script } = require('vm');
const { userInfo } = require('os');
const { getuid } = require('process');
const { MessageChannel } = require('worker_threads');
client.on('ready', () => {
  console.log(`Loggin in as ${client.user.tag}!`);
});
client.on('message',async message => {  
  const args = message.content.slice(config.Prefix.length).trim().split(/ +/g);
  const command = args.shift()
  if (command == 'redeembf') {
    const embed = new Discord.MessageEmbed()
    .setTitle("Colahub")
    .setDescription("Script:```lua\n _G.Discord_id = 'Youid'\n _G.Key = 'FREE' \n _G.Color = Color3.fromRGB(235, 64, 52);\nloadstring(game:HttpGet('https://raw.githubusercontent.com/teraunt2551/ColaHubv2/main/UPDATE/!redeem%20bf/for%20getscript.Lua'))()```")
    .setTimestamp()
    .setColor("00FF95")
    .setFooter("SETTIME")
    message.channel.send(embed);
  }
   if (command == 'getid') {
    const embed = new Discord.MessageEmbed()
    .setTitle("Colahub")
    .setDescription("Id:```lua\n802839700250296320\n```")
    .setTimestamp()
    .setColor("00FF95")
    message.channel.send(embed);
   }
  });
client.login(config.Token);
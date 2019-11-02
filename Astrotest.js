const Discord = require('discord.js');
const client = new Discord.Client();
const prefix ='/';
const fs = require('fs')





client.on('ready', () => {
        console.log ('Le bot marche');
})

client.on('message',message => 
{

          if (message.content === prefix + 'ping') 
          {
            message.channel.send ('Je suis la création de Bryggel et Astro');
          }





})



client.login("NjM5ODAxMjc1NTIwNzc4MjYw.XbwyLg._PDw6s867tHocnNuc1rdnC0JL70");

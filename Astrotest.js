const Discord = require('discord.js');
const client = new Discord.Client();
const prefix ='/';
const fs = require('fs')

client.login("");



client.on('ready', () => {
        console.log ('Le bot marche');
})

client.on('message',message => 
{

          if (message.content === prefix + 'ping') 
          {
            message.channel.send ('Je suis la création de Bryggel');
          }
        
        if (message.content === prefix + 'test')
          {

                  
          }        
})



function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

console.log(getRandomInt(10));
// sortie attendue: entre 0 et 10



console.log(Math.random());

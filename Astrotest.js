const Discord = require('discord.js');
const client = new Discord.Client();
const prefix ='/';
const fs = require('fs')

client.login("");



client.on('ready', () => {
        console.log ('Bot ON');
})

client.on('message',message => 
{

          if (message.content === prefix + 'Info') 
          {
            message.channel.send const 
            embed = new RichEmbed()
            .setTitle('Informations.')
            .setColor(0xFF0000)
            .setDescription('Informations sur le bot.')
            .addField('Je suis la création de Bryggel');
            message.channel.send(embed);
          }
        
        if (message.content === prefix + 'test')
          {

                  
          }        
})



function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//console.log(getRandomInt(10));
// sortie attendue: entre 0 et 10

//http://www.jeuxvideo.com/forums/42-51-61238946-3-0-1-0-cul-c-est-la-generations-la-plus-unique-quelle-ramassis-de.htm

//console.log(Math.random());

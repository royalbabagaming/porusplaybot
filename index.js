const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzE4NDc2MDQwMTc0ODI5NTc5.XtxrMw.PynDnaHnz8FOQQtOj7IjAfotoUU';

bot.on('ready', () =>{
    console.log('This Bot is online!');
    bot.user.setActivity('Help');
})

bot.on('message', msg=>{
     if(msg.content === "hello"){
          msg.reply('Hello Friend!');
     }
})

bot.on('message', msg=>{
     if(msg.content === "Hello"){
          msg.reply('Hello Friend!');
     }
})

bot.on('message', msg=>{
     if(msg.content === "Hi"){
          msg.reply('Hello Friend!');
     }
})

bot.on('message', msg=>{
     if(msg.content === "hi"){
          msg.reply('Hello Friend!');
     }
})

bot.on('message', msg=>{
     if(msg.content === "Hey"){
          msg.reply('Hello Friend!');
     }
})

bot.on('message', msg=>{
     if(msg.content === "hey"){
          msg.reply('Hello Friend!');
     }
})

bot.on('message', msg=>{
     if(msg.content === "yo"){
          msg.reply('Hello Friend!');
     }
})

bot.on('message', msg=>{
     if(msg.content === "Help"){
          msg.reply('How Can I Help You?');
     }
})

bot.on('message', msg=>{
     if(msg.content === "help"){
          msg.reply('How Can I Help You?');
     }
})

bot.on('message', msg=>{
     if(msg.content === "HELP"){
          msg.reply('How Can I Help You?');
     }
})

bot.on('message', msg=>{
     if(msg.content === "to kaise ho"){
          msg.reply('bdiya hu aap btao');
     }
})

bot.on('message', msg=>{
     if(msg.content === "when will be the match"){
          msg.reply('#general');
     }
})





bot.login(token);
const fs = require("fs");
const config = JSON.parse(fs.readFileSync('./config.json'))
const { MessageEmbed } = require("discord.js");
const prefix = config.prefix;

exports.run = (client, msg) => {
    const normalHelpEmbed = new MessageEmbed().setColor("#48e1f1").addFields(
        {
          name: `tontine bot help menu`,
          value: `${prefix}help -> this menu\n${prefix}tontine -> sends embed with tontine data\n${prefix}inspecttontine <account_name> -> sends information about inserted tontine user\n${prefix}inspecttontinetimestamp <account_name> -> sends usual embed but with timestamp in your own local time\n${prefix}inspecttontinedev <account_name> -> sends same embed with a tad bit more information regarding grave number and such\n${prefix}ping -> sends bot ping and api ping`,
        },
        // { name: "\u200B", value: "\u200B" },
        {
          name: `shortcuts`,
          value: `${prefix}inspecttontine -> ${prefix}it\n${prefix}inspecttonetinetimestamp -> ${prefix}itt\n${prefix}inspecttontinedev -> ${prefix}itd`,
        }
      );
      msg.channel.send({ embeds: [normalHelpEmbed] });
}

exports.name = "help";
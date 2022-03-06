function exportConstants()
{
  if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config(); // replce with bot token
  }

  return {
    applicationId : process.env.APP_ID, 
    guildId : process.env.GUILD_ID, 
    token : process.env.BOT_TOKEN
  }
}

module.exports = exportConstants();
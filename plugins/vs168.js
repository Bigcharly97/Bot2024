let handler = async (m, { command, text, groupMetadata }) => m.reply(`
*╔═══*🌐 *16 ᴠs 16* *ᴇxᴛᴇʀɴᴏ* 🌐
*╟*  *ᴍᴀᴘᴀ ᴀʙɪᴇʀᴛᴏ*
*╟*
*╟*  ⏰  *7:45 ᴘᴍ*  🇲🇽
*╟*  ⏰  *8:45 ᴘᴍ*  🇪🇨
*╟*
*╟* *ᴜsᴏ ᴅᴇ ᴅɪsᴄᴏʀᴅ ᴏʙʟɪɢᴀᴛᴏʀɪᴏ*
*╟*
*╚══* *ᴇsᴄᴜᴀᴅʀᴀ* 
*╟* 👑
*╟* ×͜×
*╟* ×͜×
*╟* ×͜×
*╚══* *ᴇsᴄᴜᴀᴅʀᴀ*
*╟* 👑
*╟* ×͜×
*╟* ×͜×
*╟* ×͜×
*╚══* *ᴇsᴄᴜᴀᴅʀᴀ*
*╟* 👑
*╟* ×͜×
*╟* ×͜×
*╟* ×͜×
*╚══* *ᴇsᴄᴜᴀᴅʀᴀ*
*╟* 👑
*╟* ×͜×
*╟* ×͜×
*╟* ×͜×
*╚══* *sᴜᴘʟᴇɴᴛᴇs*
*╟* ×͜×
*╟* ×͜×
*╚══* *ᴅᴏɴᴀᴅᴏʀ ᴅᴇ sᴀʟᴀ*
*╟* ×͜×
*╟* ×͜×
*╚═*•┈ *${groupMetadata.subject}* ┈•
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['vs <texto>?']
handler.tags = ['kerang']
handler.command = /^vs16.8$/i
handler.admin = true
export default handler

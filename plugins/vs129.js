let handler = async (m, { command, text, groupMetadata }) => m.reply(`
*╔═══*🌐 *12 ᴠs 12* *ᴇxᴛᴇʀɴᴏ* 🌐
*╟•*  *ᴍᴀᴘᴀ ᴀʙɪᴇʀᴛᴏ*
*╟*
*╟•*  ⏰  *8:45 ᴘᴍ*  🇲🇽
*╟•*  ⏰  *9:45 ᴘᴍ*  🇪🇨
*╟*
*╟•* *ᴜsᴏ ᴅᴇ ᴅɪsᴄᴏʀᴅ ᴏʙʟɪɢᴀᴛᴏʀɪᴏ*
*╟*
*╚══* *ᴇsᴄᴜᴀᴅʀᴀ*
*╟•* 👑ᴄʜᴀʀʟʏ  ғʟᴏᴡ
*╟•* ϟ  
*╟•* ϟ  
*╟•* ϟ  
*╚══* *ᴇsᴄᴜᴀᴅʀᴀ*
*╟•* 👑
*╟•* ϟ  
*╟•* ϟ  
*╟•* ϟ  
*╚══* *ᴇsᴄᴜᴀᴅʀᴀ*
*╟•* 👑
*╟•* ϟ  
*╟•* ϟ  
*╟•* ϟ  
*╚══* *sᴜᴘʟᴇɴᴛᴇs*
*╟•* ϟ  
*╟•* ϟ  
*╚══* *ᴅᴏɴᴀᴅᴏʀ ᴅᴇ sᴀʟᴀ*
*╟•* ϟ  
*╟•* ϟ  
*╚═*•┈ *${groupMetadata.subject}* ┈•
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['vs <texto>?']
handler.tags = ['kerang']
handler.command = /^vs12.9$/i
handler.admin = true
handler.rowner = true
export default handler

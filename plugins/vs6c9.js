let handler = async (m, { command, text, groupMetadata }) => m.reply(`
 *╔═══*🌐 *6 ᴠs 6* *ᴇxᴛᴇʀɴᴏ* 🌐
*╟❧*  *ᴄᴏᴍᴘᴇᴛɪᴛɪᴠᴏ*
*╟*
*╟❧*  ⏰  *8:45 ᴘᴍ*  🇲🇽
*╟❧*  ⏰  *9:45 ᴘᴍ*  🇪🇨
*╟* 
*╟❧*  *sᴏʟᴏ ᴀʟᴏᴋ ʏ ᴋ*
*╟*
*╟❧* *ᴜsᴏ ᴅᴇ ᴅɪsᴄᴏʀᴅ ᴏʙʟɪɢᴀᴛᴏʀɪᴏ*
*╟*
*╚══* *ᴇsᴄᴜᴀᴅʀᴀ* 
*╟❧* 𖠌
*╟❧* 𖠌
*╟❧* 𖠌
*╟❧* 𖠌
*╟❧* 𖠌
*╟❧* 𖠌
*╚══* *sᴜᴘʟᴇɴᴛᴇs*
*╟❧* 𖠌
*╟❧* 𖠌
*╚══* *ᴅᴏɴᴀᴅᴏʀ ᴅᴇ sᴀʟᴀ*
*╟❧* 𖠌
*╟❧* 𖠌
*╚═*•┈ *${groupMetadata.subject}* ┈•
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['vs <texto>?']
handler.tags = ['kerang']
handler.command = /^vs6.c.9$/i
handler.admin = true
export default handler

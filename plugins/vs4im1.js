let handler = async (m, { command, text, groupMetadata }) => m.reply(`
 *╔═══*🌐 *4 ᴠs 4* *ᴇxᴛᴇʀɴᴏ* 🌐
*╟❧*  *ɪɴғɪɴɪᴛᴏ ᴍɪxᴛᴏ*
*╟*
*╟❧*  ⏰  *12:45 ᴘᴍ*  🇲🇽
*╟❧*  ⏰  *1:45 ᴘᴍ*  🇪🇨
*╟* 
*╟❧*  *sᴏʟᴏ ᴀʟᴏᴋ ʏ ᴋ*
*╟*
*╟❧* *ᴜsᴏ ᴅᴇ ᴅɪsᴄᴏʀᴅ ᴏʙʟɪɢᴀᴛᴏʀɪᴏ*
*╟*
*╚══* *ᴇsᴄᴜᴀᴅʀᴀ* 
*╟❧* ✿
*╟❧* ✿
*╟❧* 𖠌
*╟❧* 𖠌
*╚══* *sᴜᴘʟᴇɴᴛᴇs*
*╟❧* ✿
*╟❧* 𖠌
*╚══* *ᴅᴏɴᴀᴅᴏʀ ᴅᴇ sᴀʟᴀ*
*╟❧* ✿
*╟❧* 𖠌
*╚═*•┈ *${groupMetadata.subject}* ┈•
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['vs <texto>?']
handler.tags = ['kerang']
handler.command = /^vs4.i.m.1$/i
handler.admin = true
export default handler

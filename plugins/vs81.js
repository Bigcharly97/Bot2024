let handler = async (m, { command, text, groupMetadata }) => m.reply(`
*╔═══*🌐 *8 ᴠs 8* *ᴇxᴛᴇʀɴᴏ* 🌐
*╟❧*  *ᴍᴀᴘᴀ ᴀʙɪᴇʀᴛᴏ*
*╟*
*╟❧*  ⏰  *12:45 ᴘᴍ*  🇲🇽
*╟❧*  ⏰  *1:45 ᴘᴍ*  🇪🇨
*╟*
*╟❧* *ᴜsᴏ ᴅᴇ ᴅɪsᴄᴏʀᴅ ᴏʙʟɪɢᴀᴛᴏʀɪᴏ*
*╟*
*╚══* *ᴇsᴄᴜᴀᴅʀᴀ* 
*╟❧* 𖤍
*╟❧* 𖤍
*╟❧* 𖤍
*╟❧* 𖤍
*╚══* *ᴇsᴄᴜᴀᴅʀᴀ*
*╟❧* 𖤍
*╟❧* 𖤍
*╟❧* 𖤍
*╟❧* 𖤍
*╚══* *sᴜᴘʟᴇɴᴛᴇs*
*╟❧* 𖤍
*╟❧* 𖤍
*╚══* *ᴅᴏɴᴀᴅᴏʀ ᴅᴇ sᴀʟᴀ*
*╟❧* 𖤍
*╟❧* 𖤍
*╚═*•┈ *${groupMetadata.subject}* ┈•
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['vs <texto>?']
handler.tags = ['kerang']
handler.command = /^vs8.1$/i
handler.admin = true
export default handler

const toxicRegex = /puto|puta|rata|estupido|manco|MANCO|Manco|Manca|MANCA|manca|imbecil|rctmre|mrd|verga|vrga|maricon/i;

export async function before(m, {isAdmin, isBotAdmin, isOwner}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) {
    return !1;
  }
  const user = global.db.data.users[m.sender];
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[mconn.conn.user.jid] || {};
  const isToxic = toxicRegex.exec(m.text);

  if (isToxic && chat.antiToxic && !isOwner && !isAdmin) {
    user.warn += 1;
    if (!(user.warn >= 3)) await m.reply('*❗❗' + `${user.warn == 1 ? `ʜᴏʟᴀ @${m.sender.split`@`[0]}` : `@${m.sender.split`@`[0]}`}, ᴅᴇᴄɪʀ ʟᴀ ᴘᴀʟᴀʙʀᴀ "${isToxic}" ᴇsᴛᴀ́ ᴘʀᴏʜɪʙɪᴅᴏ ᴇɴ ᴇsᴛᴇ ɢʀᴜᴘᴏ. ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ: ${user.warn}/5.` + '*', false, {mentions: [m.sender]});
  }

  if (user.warn >= 5) {
    user.warn = 0;
    await m.reply(`*❗❗ ʜᴏʟᴀ @${m.sender.split`@`[0]}, sᴜᴘᴇʀᴀsᴛᴇ ʟᴀs 3 ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀs ᴘᴏʀ ʟᴏ ϙᴜᴇ sᴇʀᴀ́s ᴇʟɪᴍɪɴᴀᴅᴏ ᴅᴇ ᴇsᴛᴇ ɢʀᴜᴘᴏ ᴘᴏʀ ᴛᴜ ᴄᴏᴍᴘᴏʀᴛᴀᴍɪᴇɴᴛᴏ.*`, false, {mentions: [m.sender]});
    user.banned = true;
    await mconn.conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
    // await this.updateBlockStatus(m.sender, 'block')
  }
  return !1;
}

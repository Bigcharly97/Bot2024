// Creditos del codigo a @Gatito-kw //

/* GitHub: https://github.com/Gatito-kw */

/* Bot: https://github.com/Gatito-kw/nekobot-md */

import {WAMessageStubType} from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, {conn, participants}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  const groupName = (await conn.groupMetadata(m.chat)).subject;
  const groupAdmins = participants.filter((p) => p.admin);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/avatar_contact.png';
  const img = await (await fetch(pp)).buffer();
  const chat = global.db.data.chats[m.chat];
  const mentionsString = [m.sender, m.messageStubParameters[0], ...groupAdmins.map((v) => v.id)];
  const mentionsContentM = [m.sender, m.messageStubParameters[0]];
  const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};

  if (chat.detect2 && m.messageStubType == 29) {
    let txt1 = `*ʀᴇᴄɪᴇɴᴛᴇᴍᴇɴᴛᴇ sᴇ ʜᴀ ᴘʀᴏᴍᴏᴠɪᴅᴏ ᴜɴ ᴍɪᴇᴍʙʀᴏ ᴀ ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀ.*\n\n`;
    txt1 += `•  ɢʀᴜᴘᴏ:* ${groupName}\n`;
    txt1 += `•  ɴᴜᴇᴠᴏ ᴘʀᴏ:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    txt1 += `•  ᴇsᴛᴀʙʟᴇᴄɪᴅᴏ ᴘᴏʀ:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: img, caption: txt1, mentions: mentionsString}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 30) {
    let txt2 = `*sᴇ ʜᴀ ᴅᴇɢʀᴀᴅᴀᴅᴏ ᴜɴ ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀ ᴀ ᴍɪᴇᴍʙʀᴏ.*\n\n`;
    txt2 += `•  ɢʀᴜᴘᴏ:* ${groupName}\n`;
    txt2 += `•  sᴇ ϙᴜɪᴛᴏ ᴀ :* @${m.messageStubParameters[0].split`@`[0]}\n`;
    txt2 += `•  ᴇsᴛᴀʙʟᴇᴄɪᴅᴏ ᴘᴏʀ:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: img, caption: txt2, mentions: mentionsString}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 27) {
    let txt3 = `*sᴇ ʜᴀ ɪɴᴄᴏʀᴘᴏʀᴀᴅᴏ ᴀʟ ɢʀᴜᴘᴏ ᴜɴ ɴᴜᴇᴠᴏ ᴍɪᴇᴍʙʀᴏ.*\n\n`;
    txt3 += `•  ɢʀᴜᴘᴏ* ${groupName}\n`;
    if (!m.sender.endsWith('@g.us')) {
      txt3 += `•  sᴇ ᴀɴ̃ᴀᴅɪᴏ ᴀ:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt3 += `•  ᴇsᴛᴀʙʟᴇᴄɪᴅᴏ ᴘᴏʀ:* @${m.sender.split`@`[0]}`;
    } else {
      txt3 += `•  sᴇ ᴀɴ̃ᴀᴅɪᴏ:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: img, caption: txt3, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 28) {
    let txt4 = `*sᴇ ʜᴀ ᴇʟɪᴍɪɴᴀᴅᴏ ᴜɴ ᴍɪᴇᴍʙʀᴏ ᴅᴇʟ ɢʀᴜᴘᴏ.*\n\n`;
    txt4 += `•  ɢʀᴜᴘᴏ:* ${groupName}\n`;
    if (!m.sender.endsWith('@g.us')) {
      txt4 += `•  sᴇ ᴇʟɪᴍɪɴᴏ ᴀ:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt4 += `•  ᴇsᴛᴀʙʟᴇᴄɪᴅᴏ ᴘᴏʀ * @${m.sender.split`@`[0]}`;
    } else {
      txt4 += `•  sᴇ ᴇʟɪᴍɪɴᴏ ᴀ:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt4, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 32) {
    let ax;
    if (m.messageStubParameters[0] === m.sender) {
      ax = 'sᴀʟɪᴅᴏ';
    } else {
      ax = 'ᴇʟɪᴍɪɴᴀᴅᴏ';
    }
    let txt5 = `*sᴇ ʜᴀ ${ax}ᴜɴ ᴍɪᴇᴍʙʀᴏ ᴅᴇʟ ɢʀᴜᴘᴏ.*\n\n`;
    txt5 += `•  ɢʀᴜᴘᴏ:* ${groupName}\n`;
    if (ax === 'ᴇʟɪᴍɪɴᴀᴅᴏ') {
      txt5 += `•  sᴇ ᴇʟɪᴍɪɴᴏ ᴀ:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt5 += `•  ᴇsᴛᴀʙʟᴇᴄɪᴅᴏ ᴘᴏʀ :* @${m.sender.split`@`[0]}`;
    } else {
      txt5 += `•  sᴇ sᴀʟɪᴏ:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt5, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 26) {
    let accion;
    if (m.messageStubParameters[0].split`@`[0] === 'on') {
      accion = 'ᴄʟᴏ́sᴇᴛ';
    } else {
      accion = 'ᴏᴘᴇɴ';
    }
    let txt6 = `*sᴇ ʜᴀɴ ᴍᴏᴅɪғɪᴄᴀᴅᴏ ʟᴏs ᴀᴊᴜsᴛᴇs ᴅᴇʟ ɢʀᴜᴘᴏ.*\n\n`;
    txt6 += `•  ɢʀᴜᴘᴏ:* ${groupName}\n`;
    txt6 += `•  ᴇʟ ɢʀᴜᴘᴏ sᴇ ʜᴀ:* ${'```' + accion + '```'}\n`;
    txt6 += `•  ᴇsᴛᴀʙʟᴇᴄɪᴅᴏ ᴘᴏʀ :* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt6, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 21) {
    let txt7 = `*ʀᴇᴄɪᴇɴᴛᴇᴍᴇɴᴛᴇ sᴇ ʜᴀ ᴄᴀᴍʙɪᴀᴅᴏ ᴇʟ ɴᴏᴍʙʀᴇ ᴅᴇʟ ɢʀᴜᴘᴏ.*\n\n`;
    txt7 += `•  ɴᴜᴇᴠᴏ ɴᴏᴍʙʀᴇ* ${'```' + groupName + '```'}\n`;
    txt7 += `•  ᴇsᴛᴀʙʟᴇᴄɪᴅᴏ ᴘᴏʀ:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt7, mentions: mentionsContentM}, {quoted: fkontak2});
  }
} /* Cierre del comando */

let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`*☐  ☃️*${groupMetadata.subject}*\n*☐  ☃️𝓜𝓮𝓶𝓫𝓮𝓻𝓼:* *${participants.length}*${text ? `\n*☐  💌𝓜𝓮𝓷𝓼𝓪𝓳𝓮:* *${text}*\n` : ''}\n╔══━〔 *𝓅𝒶𝓇𝓉𝒾𝒸𝒾𝓅𝒶𝓃𝓉𝓈* 〕\n` + users.map(v => '╟🎅 @' + v.replace(/@.+/, '')).join`\n` + '\n╚══━〔     *ℳℯ𝓇𝓇𝓎 𝒞𝒽𝓇𝒾𝓈𝓉𝓂𝒶𝓈*     〕', null, {
        mentions: users
    })
}

handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(td)$/i
handler.admin = true
handler.group = true

export default handler

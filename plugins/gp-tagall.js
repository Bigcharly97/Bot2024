let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`🌐 *${groupMetadata.subject}*\n ☃️𝓜𝓮𝓶𝓫𝓮𝓻𝓼 ☃️: *${participants.length}*${text ? `\n▢ Mensaje : ${text}\n` : ''}\n╔══━〔 *🎄𝓅𝒶𝓇𝓉𝒾𝒸𝒾𝓅𝒶𝓃𝓉𝓈🎄* 〕\n` + users.map(v => '╟🎅 @' + v.replace(/@.+/, '')).join`\n` + '\n╚══━〔     *𝓖𝓸𝓴𝓾 𝓑𝓸𝓽*     〕', null, {
        mentions: users
    })
}

handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(td)$/i
handler.admin = true
handler.group = true

export default handler

let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zacros.my.id/randomimg/loli'
    conn.sendButtonImg(m.chat, api-hyzer, 'Onni-chan', wm2, 'sɪɢᴜɪᴇɴᴛᴇ 🔜', '.loli', m)
}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^(loli)$/i
handler.register = true

module.exports = handler

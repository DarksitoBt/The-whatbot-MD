let handler = async(m, { conn, text }) => {
if (!text) return conn.reply(m.chat, 'Silahkan masukan query', m)
let tetete = `https://api.zacros.my.id/search/konachan?query=${text}`
conn.sendButtonImg(m.chat, tetete, `𝚂𝚎 𝚖𝚞𝚎𝚜𝚝𝚛𝚊𝚗 𝚛𝚎𝚜𝚞𝚕𝚝𝚊𝚍𝚘𝚜 𝚍𝚎 ${text}`, wm2, 'Thanks', 'thanks', m) 
}
handler.help = ['konachan'].map(v => v + ' <query>')
handler.tags = ['anime', 'internet']
handler.command = /^(konachan)$/i
handler.register = true

module.exports = handler
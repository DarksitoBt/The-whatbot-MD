let handler = async(m, { conn, text }) => {
if (!text) return conn.reply(m.chat, 'Silahkan masukan query', m)
let tetete = `https://api.zacros.my.id/search/alphacoders?query=${text}`
conn.sendButtonImg(m.chat, tetete, `Resultados de ${text}`, wm2, 'Thanks', 'thanks', m) 
}
handler.help = ['alphacoders'].map(v => v + ' <query>')
handler.tags = ['anime', 'internet']
handler.command = /^(alphacoders)$/i
handler.register = true

module.exports = handler
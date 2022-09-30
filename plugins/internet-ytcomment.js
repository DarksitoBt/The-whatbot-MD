let handler = async (m, { conn, text }) => {
  if (!text) throw 'Uhm... teksnya mana?'
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/youtube-comment', {
    avatar: await conn.profilePictureUrl(m.sender).catch(_ => ''),
    comment: text,
    username: m.pushName
  }), 'yt-comment.png', '𝙰𝚚𝚞𝚒 𝚎𝚜𝚝𝚊 𝚝𝚞 𝚌𝚘𝚖𝚎𝚗𝚝𝚊𝚛𝚒𝚘', m)
}

handler.help = ['ytcomment <comment>']
handler.tags = ['internet']

handler.command = /^(ytcomment)$/i
handler.register = true

module.exports = handler

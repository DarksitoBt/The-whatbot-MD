let fetch = require('node-fetch')

let handler = async (m, { conn, args, usedPrefix, command }) => {
    let er = `𝙾𝙿𝙲𝙸𝙾𝙽𝙴𝚂 𝙳𝙸𝚂𝙿𝙾𝙽𝙸𝙱𝙻𝙴𝚂 :
• latinkejawa
• latinkesunda
• jawakelatin
• sundakelatin

Contoh penggunaan:
${usedPrefix + command} latinkejawa selamat pagi
    `.trim()
    if (!args[0]) throw er

    switch (args[0].toLowerCase()) {
        case 'latinkejawa':
        case 'latinkesunda':
        case 'jawakelatin':
        case 'sundakelatin':
            let text = args.slice(1).join(' ')
            let res = await fetch(global.API('xteam', '/aksara/' + args[0].toLowerCase(), { text }, 'APIKEY'))
            if (res.status !== 200) throw await res.text()
            let json = await res.json()
            if (!json.status) throw json
            m.reply(json.message)
            break
        default:
            throw er
    }
}
handler.help = ['aksara'].map(v => v + ' <opsi> <teks>')
handler.tags = ['tools']
handler.command = /^aksara$/i
handler.register = false

handler.limit = true

module.exports = handler
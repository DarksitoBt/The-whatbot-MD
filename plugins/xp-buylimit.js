const xpperlimit = 350 
let handler = async (m, { conn, command, args }) => {
  let ftroli = {
    key : {
    remoteJid: '6283136505591-1614953337@g.us',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: 'Get Limit', 
    orderTitle: `Hyzer`,
    thumbnail: 'https://telegra.ph/file/5ecbec3e82e247671a18e.jpg', 
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count
    global.db.data.users[m.sender].limit += count
    conn.reply(m.chat, `𝙲𝚘𝚖𝚙𝚛𝚊 𝚎𝚡𝚒𝚝𝚘𝚜𝚊 ${count} 𝙻𝚒𝚖𝚒𝚝𝚎𝚜 🏷 𝚌𝚘𝚗 ${xpperlimit * count} 𝙴𝚇𝙿 🧬`, ftroli) 
  } else conn.reply(m.chat, `𝚃𝚞 𝙴𝚇𝙿 𝚗𝚘 𝚎𝚜 𝚜𝚞𝚏𝚒𝚌𝚒𝚎𝚗𝚝𝚎 𝚙𝚊𝚛𝚊 𝚌𝚘𝚖𝚙𝚛𝚊𝚛 i ${count} 𝙻𝚒𝚖𝚒𝚝𝚎𝚜, 𝙿𝚞𝚎𝚍𝚎𝚜 𝚊𝚞𝚖𝚎𝚗𝚝𝚊𝚛 𝚎𝚡𝚙 𝚓𝚞𝚐𝚊𝚗𝚍𝚘 𝚓𝚞𝚎𝚐𝚘𝚜 𝚢 𝚛𝚙𝚐`, ftroli) 
}
handler.help = ['buy<jumlah limit>', 'buy <jumlah limit>', 'buyall']
handler.tags = ['xp']
handler.command = /^buylimit([0-9]+)|buylimit|buyalllimit$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = false

handler.fail = null
handler.exp = 0

module.exports = handler
const { sticker5, sticker1 } = require('../lib/sticker')

const uploadFile = require('../lib/uploadFile')

const uploadImage = require('../lib/uploadImage')



let handler = async (m, { conn, text, usedPrefix, command }) => {

  let stiker = false

  try {

    let [packname, ...author] = text.split`|`

    author = (author || []).join`|`

    let q = m.quoted ? m.quoted : m

    let mime = m.quoted.mimetype || ''

    if (/webp/.test(mime)) {

      let img = await q.download()

      let out = await uploadFile(img)

      stiker = await sticker5(0, out, packname || global.packname, author || global.author)

    } else if (/image/.test(mime)) {

      let img = await q.download()

      let out = await uploadImage(img)

      stiker = await sticker5(0, out, packname || global.packname, author || global.author)

    } else if (/video/.test(mime)) {

      if ((q.msg || q).seconds > 11) return m.reply('𝚖𝚊𝚡𝚒𝚖𝚘 𝟷𝟶 𝚜𝚎𝚐𝚞𝚗𝚍𝚘𝚜!')

      let img = await q.download()

      let out = await uploadImage(img)

      stiker = await sticker5(0, out, packname || global.packname, author || global.author)

    }

  } finally {

    if (stiker) await conn.sendFile(m.chat, stiker, '', '', m, 0, { asSticker: true })

    else throw `𝙴𝚝𝚒𝚚𝚞𝚎𝚝𝚊 𝚞𝚗 𝚜𝚝𝚒𝚌𝚔𝚎𝚛 𝚌𝚘𝚗 𝚎𝚕 𝚌𝚘𝚖𝚊𝚗𝚍𝚘* ${usedPrefix + command} <teks>|<teks>*`

  }

}

handler.help = ['wm <teks>|<teks>']

handler.tags = ['sticker']

handler.command = /^(wm)$/i
handler.register = false



handler.limit = true



module.exports = handler

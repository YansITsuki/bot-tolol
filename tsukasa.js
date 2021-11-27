/*
HAI KAWAND KAWAND SEKALIAN
GW CMA NGERECODE DI SINI
GW NGEROCENYA ABIS ABISAN BTW
IJIN YA BANG:V
YG PENTING MASIH ADA NAMALU BANG
SELAKU KREATOR
KAN KATANYA JG RECODE SESUKAMU:V
GW RECODE SEMUA YG GW BISA YA BANG
AWOKWKW INI IJIN NGAB

MY SOCIAL MEDIA
IG   : GK MLES
FB  : GK MLES
YT  : I T S U K I
WA : 6289501208400 <- WKWK BUAT REPORT ERROR NGAB:V
GT  : kangabut <- GITHUB NGAB
TT  : GK MLES
AWOWKWKKWKWKWKWKWKKWKWK
KLO MAU RECODE JG JGN DI APUS YA NGAB
GW JG NAMBAHIN FITUR LHO
BRARTI GW TERLIBAT DLM PENGEMBANGAN SC INI:V
GK JG SI WKWK
DN BUAT ANAK JB JANGAN DI JUAL YA
GW JG GRATIS INI DAPETNYA
KLO GW BELI JG GW JUAL NGAB
INI KAN GW CUMA RECODE
JADI YA WKWK, DH KG JELAS GW:V


©I T S U K I
©ZeroYT7


CREATOR ZERO YT7
RECODE SESUKA HATIMU JANGAN HPUS CREATOR NYA
MAAF SC NYA JELEK
REUPLOAD ? TAG CHANNELL GUE AJG JNGN MODAL NUMPANG DOANK
UDAH NUMPANG CREATOR DI HPUS / DI GANTI TOLOL KAH ?
NGERASA PLING JAGO ? BIKIN BASE / SENDIRI COBA TOD
JANGAN MODAL NUMPANG PUNYA ORNG DOANK TPI GK BISA HARGAI

FOLLOW ALL SOSIAL MEDIAML ME
YOUTUBE : Zero YT7
INSTAGRAM : @Zero_YT7
TIKTOK : @_zeroyt7
GITHUB : Zero-YT7
*/

let { fetchJosn, kyun, fetchText } = require('./lib/fetcher')
let { color, bgcolor } = require('./lib/color')
let  { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
let { igDownloader } = require ('./lib/igdown')
let { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')

let
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const yts = require('yt-search')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')

//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//

let _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
let _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
let setting = JSON.parse(fs.readFileSync('./setting.json'))
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//

owner = setting.OwnerNumber
botname = setting.BotName
itsukey = setting.ItsuKey
zerokey = setting.ZeroKey
ownername = setting.OwnerName
zerkey = setting.ZerKey

//━━━━━━━━━━━━━━━[ MODUL EXPORTS ]━━━━━━━━━━━━━━━━━//

module.exports = itsuki = async (itsuki, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        let content = JSON.stringify(mek.message)
		let from = mek.key.remoteJid
		let { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		let time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        let type = Object.keys(mek.message)[0]        
        let cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        let prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		let command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		let args = body.trim().split(/ +/).slice(1)
		let isCmd = body.startsWith(prefix)
		let q = args.join(' ')
		let Verived = "0@s.whatsapp.net"
		let txt = mek.message.conversation
		let botNumber = itsuki.user.jid
		let ownerNumber = [`${owner}@s.whatsapp.net`, `6285157740529@s.whatsapp.net`]
		let isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let totalchat = await itsuki.chats.all()
		let groupMetadata = isGroup ? await itsuki.groupMetadata(from) : ''
		let groupName = isGroup ? groupMetadata.subject : ''
		let groupId = isGroup ? groupMetadata.jid : ''
		let groupMembers = isGroup ? groupMetadata.participants : ''
		let groupDesc = isGroup ? groupMetadata.desc : ''
		let groupOwner = isGroup ? groupMetadata.owner : ''
		let groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		let isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		let isGroupAdmins = groupAdmins.includes(sender) || false
		let conts = mek.key.fromMe ? itsuki.user.jid : itsuki.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        let pushname = mek.key.fromMe ? itsuki.user.name : conts.notify || conts.vname || conts.name || '-'
        let zero = fs.readFileSync ('./C/itsuki.jpg') 
		let isAntiLink = isGroup ? _antilink.includes(from) : false
		let isWelkom = isGroup ? _welkom.includes(from) : false
		let isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		let isOwner = ownerNumber.includes(sender)
		let isUser = pendaftar.includes(sender)
		let isMybot = isOwner || mek.key.fromMe
		
		
//━━━━━━━━━━━━━━━[ CONNECTION 1 ]━━━━━━━━━━━━━━━━━//

		mess = {
			wait: 'Sabar Lagi Proses Tod...!',
			success: 'Done Jangan Lupa Subscribe Zero YT7',
			error: {
				stick: 'Gagal Convert Gambar To Sticker...Coba Lagi !',
				Iv: 'Linknya Error Tod !'
			},
			only: {
				admin: 'Kusus Admin Tod !',
				group: 'Khusus Group Tod !'
			}
		}
		faketeks = '©TSUKASA BOTZ'
		let isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        let reply = (teks) => {
            itsuki.sendMessage(from, teks, text, {quoted:mek})
        }
        let sendMess = (hehe, teks) => {
            itsuki.sendMessage(hehe, teks, text)
        }
        let mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? itsuki.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : itsuki.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        let costum = (pesan, tipe, target, target2) => {
			itsuki.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
		const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}       
		const runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Jangan gadang kak"; break;
                case 1: jamss = "Jangan gadang kak"; break;
                case 2: jamss = "Jangan gadang kak"; break;
                case 3: jamss = "Jangan gadang kak"; break;
                case 4: jamss = "Jangan lupa sholat Subuh kak"; break;
                case 5: jamss = "Selamat pagi"; break;
                case 6: jamss = "Selamat pagi"; break;
                case 7: jamss = "Selamat pagi"; break;
                case 8: jamss = "Selamat pagi"; break;
                case 9: jamss = "Selamat pagi"; break;
                case 10: jamss = "Selamat pagi"; break;
                case 11: jamss = "Selamat siang"; break;
                case 12: jamss = "Jangan lupa sholat Zuhur kak"; break;
                case 13: jamss = "Selamat siang"; break;
                case 14: jamss = "Selamat sore"; break;
                case 15: jamss = "Jangan lupa sholat Ashar kak"; break;
                case 16: jamss = "Selamat sore"; break;
                case 17: jamss = "Selamat sore"; break;
                case 18: jamss = "Selamat malam"; break;
                case 19: jamss = "Jangan lupa sholat Isya kak"; break;
                case 20: jamss = "Selamat malam"; break;
                case 21: jamss = "Selamat malam"; break;
                case 22: jamss = "Selamat malam"; break;
                case 23: jamss = "Selamat malam"; break;
            }
            var tampilUcapan = "" + jamss;
//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//
        const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

const isRegistered = checkRegisteredUser(sender)

const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
itsuki.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `Hai kak  ${pushname} ${tampilUcapan} \n\nSebelum Mengakses Bot Verify Terlebih Dahulu Ya `
const daftar2 = '```Ketik Tombol Di Bawah Untuk Verify Kak```'
const daftar3 = [{buttonId: `verify`,buttonText: {displayText: `🗿DAFTAR🗿 `,},type: 1,},]

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}
//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//

        let sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            itsuki.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: ftrol
            })
        }
        let sendButImage = async (from, context, fortext, img, but, mek) => {
            jadinya = await itsuki.prepareMessage(from, img, image)
            buttonMessagesI = {
                imageMessage: jadinya.message.imageMessage,
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 4
            }
            itsuki.sendMessage(from, buttonMessagesI, buttonsMessage, {
                quoted: ftrol,
            })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return itsuki.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }
        const listmsg = (from, title, desc, list) => { 
            let po = itsuki.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Di Sini Ngab","footerText": "©ITsukiBotz","listType": "SINGLE_SELECT","sections": list}}, {})
            return itsuki.relayWAMessage(po, {waitForAck: true})
        }

//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//
const fakestatus = (teks) => {
            itsuki.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": faketeks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./C/itsuki.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        itsuki.chatRead(from, "read")
        const fakegroup = (teks) => {
            itsuki.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": faketeks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./C/itsuki.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `I T S U K I`, 
                            orderTitle: `I T S U K I`,
                            thumbnail: zero, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }

//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━━━//

        let sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        itsuki.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        let sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                let fn = Date.now() / 10000;
                let filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    itsuki.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
itsuki.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}

		if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
itsuki.groupRemove(from, [sender])
}     
if (isCmd && !isUser){
          pendaftar.push(sender)
          fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
        }

//━━━━━━━━━━━━━━━[ CONNECTION 3 ]━━━━━━━━━━━━━━━━━//

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		let isMedia = (type === 'imageMessage' || type === 'videoMessage')
		let isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		let isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		let isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		let isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', time, color(command), 'FROM', color(sender.split('@')[0]), 'ARGS :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', time, color(command), 'FROM', color(sender.split('@')[0]), 'in', color(groupName), 'ARGS :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

//━━━━━━━━━━━━━━━[ MENU ]━━━━━━━━━━━━━━━━━//

switch (command) {
	case 'menu':
	gambar = fs.readFileSync('./C/tsukasa.jpg')
	timestamp = speed();
    latensi = speed() - timestamp	
	menunya = `
⧉ Owner Name : ${ownername}
⧉ Bot Name : ${botname}
⧉ Owner Number : ${owner}
⧉ Runtime : ${process.uptime()}
⧉ Speed : ${latensi.toFixed(4)} second
⧉ Email : ahmadyusufb34@gmail.com
⧉ Browser : Linux
⧉ Langauge : Javascript`
but = [
          { buttonId: `${prefix}command`, buttonText: { displayText: '☰ SIMPLE MENU' }, type: 1 },
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: '☰ ALL MENU' }, type: 1 },
          { buttonId: `${prefix}infobot`, buttonText: { displayText: '☰ INFO' }, type: 1 }
        ]
        sendButLocation(from, menunya, faketeks, gambar, but)
break
	case 'allmenu':
	gambar = fs.readFileSync('./C/tsukasa.jpg')
                   timestamp = speed();
				ping = speed() - timestamp	
              menunya = 
`Hi ${pushname}, ${tampilUcapan}✨
Saya ${botname} Yg Siap Membantu Anda Dalam Kinerja Whatsapp Agar Mempermudah Seperti Membuat Sticker , Dll

╭─❒「 Group Menu 」❒
│ ⧉ ${prefix}cerpen
│ ⧉ ${prefix}antilink
│ ⧉ ${prefix}welcome
│ ⧉ ${prefix}antivirtex
│ ⧉ ${prefix}group
│ ⧉ ${prefix}linkgrup
│ ⧉ ${prefix}promote
│ ⧉ ${prefix}demote
│ ⧉ ${prefix}add
│ ⧉ ${prefix}kick
│ ⧉ ${prefix}setpp
│ ⧉ ${prefix}setdesc
│ ⧉ ${prefix}setname
│ ⧉ ${prefix}hidetag
└❒
╭─❒「 Sticker Menu 」❒
│ ⧉ ${prefix}attp
│ ⧉ ${prefix}toimg
│ ⧉ ${prefix}sticker
│ ⧉ ${prefix}tomp3
│ ⧉ ${prefix}tovideo
└❒
╭─❒「 Owner Menu 」❒
│ ⧉ ${prefix}owner
│ ⧉ ${prefix}sewabot
│ ⧉ ${prefix}bc
│ ⧉ ${prefix}report
└❒
╭─❒「 Islam Menu 」❒
│⧉ ${prefix}kisahnabi
│⧉ ${prefix}jadwalsholat
│⧉ ${prefix}listsurah
│⧉ ${prefix}alquran
│⧉ ${prefix}asmaulhusna
│⧉ ${prefix}alquranaudio
└❒
╭─❒「 Sound Menu 」❒
│ ⧉ ${prefix}sound1
│ ⧉ ${prefix}sound2
│ ⧉ ${prefix}sound3
│ ⧉ ${prefix}sound4
│ ⧉ ${prefix}sound5
│ ⧉ ${prefix}sound6
│ ⧉ ${prefix}sound7
│ ⧉ ${prefix}sound8
│ ⧉ ${prefix}sound9
│ ⧉ ${prefix}sound10
│ ⧉ ${prefix}sound11
│ ⧉ ${prefix}sound12
│ ⧉ ${prefix}sound13
│ ⧉ ${prefix}sound14
│ ⧉ ${prefix}sound15
└❒
╭─❒「 Game Menu 」❒
│ ⧉ ${prefix}truth
│ ⧉ ${prefix}dare
│ ⧉ ${prefix}tebakkalimat
│ ⧉ ${prefix}tebakkata
│ ⧉ ${prefix}tebakgambar
│ ⧉ ${prefix}tebaklirik
│ ⧉ ${prefix}tebaktebakan
│ ⧉ ${prefix}tebakkimia
│ ⧉ ${prefix}tebakjenaka
│ ⧉ ${prefix}suit
└❒
╭─❒「 Downloader Menu 」❒
│ ⧉ ${prefix}ssweb
│ ⧉ ${prefix}play
│ ⧉ ${prefix}ytsearch
│ ⧉ ${prefix}ytmp4
│ ⧉ ${prefix}tiktok
│ ⧉ ${prefix}tiktokmusic
│ ⧉ ${prefix}pinterest
│ ⧉ ${prefix}fbdl
│ ⧉ ${prefix}igdl
└❒
╭─❒「 Asupan Menu 」❒
│ ⧉ ${prefix}asupan
│ ⧉ ${prefix}asupancecan
│ ⧉ ${prefix}asupanhijaber
│ ⧉ ${prefix}asupansantuy
│ ⧉ ${prefix}asupanukhti
│ ⧉ ${prefix}asupanbocil
│ ⧉ ${prefix}asupanghea
│ ⧉ ${prefix}asupanrika
└❒
╭─❒「 Quotes Menu 」❒
│ ⧉ ${prefix}quotesanime
│ ⧉ ${prefix}quotesanime
│ ⧉ ${prefix}quotesdilan
│ ⧉ ${prefix}quotesimage
│ ⧉ ${prefix}sertitolol
│ ⧉ ${prefix}katabijak
│ ⧉ ${prefix}randomnama
└❒
╭─❒「 Meme Menu 」❒
│ ⧉ ${prefix}simi
│ ⧉ ${prefix}meme
│ ⧉ ${prefix}darkjoke
│ ⧉ ${prefix}memeindo
└❒
╭─❒「 Upsw Menu 」❒
│ ⧉ ${prefix}upswteks
│ ⧉ ${prefix}upswsticker
│ ⧉ ${prefix}upswaudio
│ ⧉ ${prefix}upswvideo
│ ⧉ ${prefix}upswimage
└❒
╭─❒「 Url Menu 」❒
│ ⧉ ${prefix}tinyurl
│ ⧉ ${prefix}bitly
│ ⧉ ${prefix}shorturl
│ ⧉ ${prefix}cuttly
└❒
╭─❒「 Information Menu 」❒
│ ⧉ ${prefix}waktu
│ ⧉ ${prefix}kbbi
│ ⧉ ${prefix}jarak
│ ⧉ ${prefix}wikipedia
│ ⧉ ${prefix}translate
│ ⧉ ${prefix}jadwaltv
│ ⧉ ${prefix}infogempa
│ ⧉ ${prefix}cuaca
│ ⧉ ${prefix}covidindo
│ ⧉ ${prefix}covidglobal
└❒
╭─❒「 Primbon Menu 」
│ ⧉ ${prefix}cekmati
│ ⧉ ${prefix}gantengcek
│ ⧉ ${prefix}cantikcek
│ ⧉ ${prefix}hobby
│ ⧉ ${prefix}apakah
│ ⧉ ${prefix}kapankah
│ ⧉ ${prefix}bisakah❒
│ ⧉ ${prefix}artinama
│ ⧉ ${prefix}jodoh
│ ⧉ ${prefix}jadian
│ ⧉ ${prefix}tebakumur
└❒
╭─❒「 Stalk Menu 」❒
│ ⧉ ${prefix}stalkig
│ ⧉ ${prefix}stalktiktok
│ ⧉ ${prefix}stalkgithub
└❒
╭─❒「 Anime Menu 」❒
│ ⧉ ${prefix}loli
│ ⧉ ${prefix}neko
│ ⧉ ${prefix}waifu
│ ⧉ ${prefix}awoo
│ ⧉ ${prefix}husbu
│ ⧉ ${prefix}cosplay
│ ⧉ ${prefix}shinobu
│ ⧉ ${prefix}megumin
│ ⧉ ${prefix}milf
└❒
╭─❒「 Maker Menu 」❒
│ ⧉ ${prefix}tahta
│ ⧉ ${prefix}thunder
│ ⧉ ${prefix}blackpink
│ ⧉ ${prefix}glitch
│ ⧉ ${prefix}marvel
└❒
╭─❒「 18+ Menu 」❒
│ ⧉ ${prefix}chiisaihentai
│ ⧉ ${prefix}trap
│ ⧉ ${prefix}blowjob
│ ⧉ ${prefix}yaoi
│ ⧉ ${prefix}ecchi
│ ⧉ ${prefix}hentai
│ ⧉ ${prefix}ahegao
│ ⧉ ${prefix}hololewd
│ ⧉ ${prefix}sideoppai
│ ⧉ ${prefix}animefeets
│ ⧉ ${prefix}animebooty
│ ⧉ ${prefix}animethighss
│ ⧉ ${prefix}hentaiparadise
│ ⧉ ${prefix}animearmpits 
│ ⧉ ${prefix}hentaifemdom
│ ⧉ ${prefix}lewdanimegirls
│ ⧉ ${prefix}biganimetiddies
│ ⧉ ${prefix}animebellybutton
│ ⧉ ${prefix}hentai4everyone
│ ⧉ ${prefix}doujin
│ ⧉ ${prefix}nhentai
│ ⧉ ${prefix}dosa1
│ ⧉ ${prefix}dosa2
│ ⧉ ${prefix}dosa3
│ ⧉ ${prefix}dosa4
│ ⧉ ${prefix}dosa5
│ ⧉ ${prefix}dosa6
│ ⧉ ${prefix}dosa7
│ ⧉ ${prefix}dosa8
│ ⧉ ${prefix}dosa9
│ ⧉ ${prefix}dosa10
│ ⧉ ${prefix}dosa11
│ ⧉ ${prefix}dosa12
│ ⧉ ${prefix}dosa13
│ ⧉ ${prefix}dosa14
│ ⧉ ${prefix}dosa15
└❒
`
teks =
`ITsukiBotz
Bot Ini Di Buat Oleh I T S U K I, Untuk Author Bisa Di Lihat Dengan Ketik ${prefix}author`
but = [
          { buttonId: `${prefix}infobot`, buttonText: { displayText: '☰ INFO' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER' }, type: 1 }
        ]
        sendButLocation(from, menunya, teks, gambar, but)
break
	
//━━━━━━━━━━━━━━━[ FITUR GROUP ]━━━━━━━━━━━━━━━━━//

case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!welcomeon', buttonText: { displayText: '☰ ON' }, type: 1 },
{ buttonId: '!welcomeoff', buttonText: { displayText: '☰ OFF' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk welcome group", faketeks, but, mek)
break
case 'welcomeon':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isWelkom) return reply('welcome sudah aktif')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
break
case 'welcomeoff':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isWelkom) return reply('welcome sudah off sebelumnya')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antilink' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!antilinkon', buttonText: { displayText: '☰ ON' }, type: 1 },
{ buttonId: '!antilinkoff', buttonText: { displayText: '☰ OFF' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antilink group", faketeks, but, mek)
break
case 'antilinkon' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isAntiLink) return reply('anti link sudah on')
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses mengaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antilinkoff' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isAntiLink) return reply('anti link sudah off sebelumnya')
_antilink.splice(from, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses menonaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtex' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!antivirtexon', buttonText: { displayText: '☰ ON' }, type: 1 },
{ buttonId: '!antivirtexoff', buttonText: { displayText: '☰ OFF' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antivirtex group", faketeks, but, mek)
break
case 'antivirtexon' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isAntiVirtex) return reply('anti virtex group sudah aktif sebelumnya')
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses mengaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtexoff' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isAntiVirtex) return reply('Mode anti virtex sudah nonaktif sebelumnya')
_antivirtex.splice(from, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`✓Sukes menonaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'group' :
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!groupbuka', buttonText: { displayText: '☰ BUKA' }, type: 1 },
{ buttonId: '!geouptutup', buttonText: { displayText: '☰ TUTUP' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk buka/tutup group", faketeks, but, mek)
break
case 'groupbuka' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
itsuki.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
itsuki.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
linkgc = await itsuki.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
itsuki.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
itsuki.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
itsuki.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
itsuki.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
itsuki.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (args.length < 1) return reply('Yang mau di add siapa??')
if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
itsuki.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case 'kick' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
itsuki.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
itsuki.groupRemove(from, mentioned)
}
break
case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
itsuki.groupUpdateSubject(from, `${body.slice(9)}`)
itsuki.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
itsuki.groupUpdateDescription(from, `${body.slice(9)}`)
itsuki.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await itsuki.downloadAndSaveMediaMessage(mek, './database/media_user')
await itsuki.updateProfilePicture(from, media)
reply(mess.wait)
reply(`\`\`\`✓Sukses Mengganti Profil Group\`\`\` *${groupMetadata.subject}*`)
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var value = body.slice(9)
var group = await itsuki.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: ftrol
}
itsuki.sendMessage(from, options, text)
break

//━━━━━━━━━━━━━━━[ FITUR STICKER ]━━━━━━━━━━━━━━━━━//

case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
itsuki.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'sticker':
case 'stiker':
case 's':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await itsuki.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `Jangan Lupa Subscribe Zero YT7`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await itsuki.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker. pastikan untuk video yang dikirim tidak lebih dari 9 detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await itsuki.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
itsuki.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: ftrol })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
}
break
case 'toimg':
if (!isQuotedSticker) return reply(' reply stickernya gan')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await itsuki.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Jangan Lupa Subscribe Zero YT7`)
fs.unlinkSync(ran)
})
break
case 'tomp3':
itsuki.updatePresence(from, Presence.recording)
if (!isQuotedVideo) return reply('Reply Video nya Tod')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await itsuki.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
bufferlkj = fs.readFileSync(ran)
itsuki.sendMessage(from, bufferlkj, audio, { mimetype: 'audio/mp4', quoted: ftrol })
fs.unlinkSync(ran)
})
break
case 'tovideo':
if (!isQuotedSticker) return reply('Reply stikernya')
reply(mess.wait)
anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await itsuki.downloadAndSaveMediaMessage(anumedia, './database/media_user')
ran = getRandom('.webp')
exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
fs.unlinkSync(anum)
buffer = fs.readFileSync(ran)
itsuki.sendMessage(from, buffer, video, { quoted: ftrol, caption: 'Done... Jangan Lupa Subscribe Zero YT7' })
fs.unlinkSync(ran)
})
break

//━━━━━━━━━━━━━━━[ FITUR OWNER ]━━━━━━━━━━━━━━━━━//

case 'owner':
let inilist = []
for (let i of ownerNumber) {
let vname = itsuki.contacts[i] != undefined ? itsuki.contacts[i].vname || itsuki.contacts[i].notify : undefined
inilist.push({
"displayName": 'TSUKASA',
"vcard": 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
})
}
hehe = await itsuki.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: ftrol })
button = [
  {buttonId: '.youtube', buttonText: {displayText: '☰ YOUTUBE'}, type: 1},
  {buttonId: '.instagram', buttonText: {displayText: '☰ INSTAGRAM'}, type: 1},
  {buttonId: '.tiktok', buttonText: {displayText: '☰ TIKTOK'}, type: 1}
]
 buttons = {
    contentText: 'Nih Nomer Owner Ku Mau Tau Tentang Apa Ya ?',
    footerText: faketeks,
    buttons: button,
    headerType: 1
}
await itsuki.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: ftrol})
break
case 'bc':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (args.length < 1) return reply('Teksnya?')
anu = await itsuki.chats.all()
for (let _ of anu) {
buttonss = [{buttonId: `${prefix}menu`, buttonText: {displayText: '☰ MENU'}, type: 1},{buttonId: `${prefix}sewabot`, buttonText: {displayText: '☰ SEWA BOT'}, type: 1}]
const btnbc = {
contentText: `${q}`,
footerText: '*SILAHKAN TEKAN BUTTON UNTUK INFORMASI LANJUT*',
buttons: buttonss,
headerType: 1
}
await itsuki.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftrol})
}
reply(`Sukses mengirim Broadcast:\n${q}`)
break
case 'report':
let pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrol })
var nomor = mek.participant
let teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
itsuki.sendMessage(`6285157740529@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
case 'youtube':
teks =
`Nih Youtube Owner Ku Jangan Lupa Di Subscribe Ya https://youtube.com/ZeroYT7`
itsuki.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'instagram':
teks =
`Nih Instagram Owner Ku Jangan Lupa Di Follow Ya https://instagram.com/Zero_YT7`
itsuki.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'tiktok':
teks =
`Nih Tiktok Owner Ku Jangan Lupa Di Follow Ya https://tiktok.com/@_zeroyt7`
itsuki.sendMessage(from, teks, text, {quoted: ftrol})
break

//━━━━━━━━━━━━━━━[ INFO BOT ]━━━━━━━━━━━━━━━━━//

case "speed":
case "ping":
timestamp = speed();
latensi = speed() - timestamp;
exec(`neofetch --stdout`, (error, stdout, stderr) => {
child = stdout.toString("utf-8");
ssd = child.replace(/Memory:/, "Ram:");
pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`;
reply(pingnya);
});
break
case "runtime":
case "test":
run = process.uptime();
teks = `${kyun(run)}`;
reply(teks);
break

//━━━━━━━━━━━━━━━[ FITUR SOUND ]━━━━━━━━━━━━━━━━━//

case 'sound1':
sound = fs.readFileSync('./audio/audio1.mp3')
itsuki.sendMessage(from, sound, MessageType.audio, {quoted: fakevo, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
sound = fs.readFileSync('./audio/audio2.mp3')
itsuki.sendMessage(from, sound, MessageType.audio, {quoted: fakevo, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
sound = fs.readFileSync('./audio/audio3.mp3')
itsuki.sendMessage(from, sound, MessageType.audio, {quoted: fakevo, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
sound = fs.readFileSync('./audio/audio4.mp3')
itsuki.sendMessage(from, sound, MessageType.audio, {quoted: fakevo, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
sound = fs.readFileSync('./audio/audio5.mp3')
itsuki.sendMessage(from, sound, MessageType.audio, {quoted: fakevo, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
sound = fs.readFileSync('./audio/audio6.mp3')
itsuki.sendMessage(from, sound, MessageType.audio, {quoted: fakevo, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
sound = fs.readFileSync('./audio/audio7.mp3')
itsuki.sendMessage(from, sound, MessageType.audio, {quoted: fakevo, mimetype: 'audio/mp4', ptt:true})
break
case 'sound8':
sound = fs.readFileSync('./audio/audio8.mp3')
itsuki.sendMessage(from, sound, MessageType.audio, {quoted: fakevo, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
sound = fs.readFileSync('./audio/audio9.mp3')
itsuki.sendMessage(from, sound, MessageType.audio, {quoted: fakevo, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
sound = fs.readFileSync('./audio/audio10.mp3')
itsuki.sendMessage(from, sound, MessageType.audio, {quoted: fakevo, mimetype: 'audio/mp4', ptt:true})
break
case 'sound11':
sound = fs.readFileSync('./audio/audio11.mp3')
itsuki.sendMessage(from, sound, MessageType.audio, {quoted: fakevo, mimetype: 'audio/mp4', ptt:true})
break
case 'sound12':
sound = fs.readFileSync('./audio/audio12.mp3')
itsuki.sendMessage(from, sound, MessageType.audio, {quoted: fakevo, mimetype: 'audio/mp4', ptt:true})
break
case 'sound13':
sound = fs.readFileSync('./audio/audio13.mp3')
itsuki.sendMessage(from, sound, MessageType.audio, {quoted: fakevo, mimetype: 'audio/mp4', ptt:true})
break
case 'sound14':
sound = fs.readFileSync('./audio/audio14.mp3')
itsuki.sendMessage(from, sound, MessageType.audio, {quoted: fakevo, mimetype: 'audio/mp4', ptt:true})
break
case 'sound15':
sound = fs.readFileSync('./audio/audio15.mp3')
itsuki.sendMessage(from, sound, MessageType.audio, {quoted: fakevo, mimetype: 'audio/mp4', ptt:true})
break

//━━━━━━━━━━━━━━━[ FITUR 18+ ]━━━━━━━━━━━━━━━━━//

case 'bokep':

reply(mess.wait)

aprii = await getBuffer (`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)

itsuki.sendMessage(from, aprii, video, {mimetype: 'video/mp4', quoted: ftrol})

break
case 'dosa1':				 

qute = fs.readFileSync('./C/tsukasa.jpg') 
itsuki.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })

break

case 'dosa2':

qute = fs.readFileSync('./C/tsukasa.jpg') 

itsuki.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })

break

case 'dosa3':	

qute = fs.readFileSync('./C/tsukasa.jpg') 

itsuki.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })				    

break

case 'dosa4':	

qute = fs.readFileSync('./C/tsukasa.jpg') 

itsuki.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })				   

break

case 'dosa5':	

qute = fs.readFileSync('./C/tsukasa.jpg') 

itsuki.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })				   

break

case 'dosa6':	

qute = fs.readFileSync('./C/tsukasa.jpg') 

itsuki.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })				   

break

case 'dosa7':

qute = fs.readFileSync('./C/tsukasa.jpg') 

itsuki.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })				   

break

case 'dosa8':	

qute = fs.readFileSync('./C/tsukasa.jpg') 

itsuki.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })				   

break

case 'dosa10':	

qute = fs.readFileSync('./C/tsukasa.jpg') 

itsuki.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })				   

break

case 'dosa11':	

qute = fs.readFileSync('./C/tsukasa.jpg') 

itsuki.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })				   

break

case 'dosa12':	

qute = fs.readFileSync('./C/tsukasa.jpg') 

itsuki.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })				   

break

case 'dosa13':	

qute = fs.readFileSync('./C/tsukasa.jpg') 

itsuki.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })				   

break

case 'dosa14':	

qute = fs.readFileSync('./C/tsukasa.jpg') 

itsuki.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })				   

break

case 'dosa15':

qute = fs.readFileSync('./C/tsukasa.jpg') 

itsuki.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })				   

break


//━━━━━━━━━━━━━━━[ FITUR GAME ]━━━━━━━━━━━━━━━━━//

case 'truth':
const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
var ttrth = (await fetchJson(`https://pencarikode.xyz/api/truthid?apikey=APIKEY`)).message
var bff = Buffer.alloc(0)
sendButLocation(from, `_*Truth*_\n\n${ttrth}`, `${tampilUcapan}`, fs.readFileSync("./C/trorda.jpeg"), [ { buttonId: `${prefix}truth`, buttonText: { displayText: "➡️ NEXT" }, type: 1 } ], { contextInfo: { mentionedJid: [sender] }})                 
break
case 'dare':
const dare = ['Prank mak bilang "aku hamil" (bagi cewe) atau "Aku hamilin anak orang" (bagi cowo)\nrecord terus kirim kesini', 'Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
var der = (await fetchJson(`https://pencarikode.xyz/api/dareid?apikey=APIKEY`)).message
var bff = Buffer.alloc(0)
sendButLocation(from, `_*Dare*_\n\n${der}`, `${tampilUcapan}`, fs.readFileSync("./C/trorda.jpeg"), [ { buttonId: `${prefix}truth`, buttonText: { displayText: "Truth" }, type: 1 }, { buttonId: `${prefix}dare`, buttonText: { displayText: "Dare" }, type: 1} ], { contextInfo: { mentionedJid: [sender] }})
break
case 'tebakkalimat':
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/kalimat`, {method: 'get'})
get = `*${anu.result.soal}*`
setTimeout( () => {
itsuki.sendMessage(from, 'Jawaban: '
+anu.result.jawaban, text, {quoted: ftrol})
}, 60000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_10 Detik lagi..._', text)
}, 50000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_20 Detik lagi..._', text)
}, 40000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_30 Detik lagi..._', text)
}, 30000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_40 Detik lagi..._', text)
}, 20000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_50 Detik lagi..._', text)
}, 10000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_60 Detik lagi..._', text)
}, 2500) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, get, text, {quoted: ftrol})
}, 0) // 1000 = 1s,
break
case 'tebaktebakan':
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/tebakan`, {method: 'get'})
get = `*${anu.result.soal}*`
setTimeout( () => {
itsuki.sendMessage(from, 'Jawaban: '
+anu.result.jawaban, text, {quoted: ftrol}) 
}, 60000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_20 Detik lagi..._', text) 
}, 40000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_30 Detik lagi..._', text)
}, 30000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_40 Detik lagi..._', text) 
}, 20000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_60 Detik lagi..._', text)
}, 2500) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, get, text, {quoted: ftrol})
}, 0) // 1000 = 1s,
break
case 'tebaklirik':
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/lirik`, {method: 'get'})
get = `*${anu.result.question}*`
setTimeout( () => {
itsuki.sendMessage(from, 'Jawaban: '
+anu.result.answer, text, {quoted: ftrol}) 
}, 60000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_20 Detik lagi..._', text) 
}, 40000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_30 Detik lagi..._', text) 
}, 30000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_40 Detik lagi..._', text) 
}, 20000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_60 Detik lagi..._', text) 
}, 2500) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, get, text, {quoted: ftrol})
}, 0) // 1000 = 1s,
break
case 'tebakkimia':
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/kimia`, {method: 'get'})
get = `*${anu.result.nama}*`
setTimeout( () => {
itsuki.sendMessage(from, 'Jawaban: '
+anu.result.lambang, text, {quoted: ftrol}) 
}, 60000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_20 Detik lagi..._', text)
}, 40000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_30 Detik lagi..._', text)
}, 30000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_40 Detik lagi..._', text)
}, 20000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_60 Detik lagi..._', text) 
}, 2500) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, get, text, {quoted: ftrol}) 
}, 0) // 1000 = 1s,
break
case 'tebakjenaka':
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/jenaka`, {method: 'get'})
tebakjenaka = `*${anu.result.pertanyaan}*`
setTimeout( () => {
itsuki.sendMessage(from, 'Jawaban: '
+anu.result.jawaban, text, {quoted: ftrol}) 
}, 60000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_20 Detik lagi..._', text) 
}, 40000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_30 Detik lagi..._', text) 
}, 30000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_40 Detik lagi..._', text) 
}, 20000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_60 Detik lagi..._', text) 
}, 2500) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, tebakjenaka, text, {quoted: ftrol}) 
}, 0) // 1000 = 1s,
break
case 'tebakgambar':
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/tebakgambar?apikey=Ikyy69`, {method: 'get'})
ngebuff = await getBuffer(anu.img)
tebak = `Jawaban : *${anu.jawaban}*`
setTimeout( () => {
itsuki.sendMessage(from, tebak, text, {quoted: ftrol})
}, 60000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_20 Detik lagi..._', text)
}, 40000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_30 Detik lagi..._', text) 
}, 30000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_40 Detik lagi..._', text) 
}, 20000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, '_60 Detik lagi..._', text) 
}, 2500) // 1000 = 1s,
setTimeout( () => {
itsuki.sendMessage(from, ngebuff, image, { caption: '_Tebak bro!!! gak bisa jawab wajib subrek zero yt7 :v_', quoted: ftrol }) 
}, 0) // 1000 = 1s,
break
case 'suit':
if (!q) return reply(`Kirim perintah ${prefix}suit [pilihan]\nContoh: ${prefix}suit gunting`)
if (!q.match(/batu|gunting|kertas/)) return reply(`Format salah!`)
if (q.match(/batu|gunting|kertas/)) {
await sleep(2000)
var computer = Math.random();
if (computer < 0.34) {
computer = 'batu';
} else if (computer >= 0.34 && computer < 0.67) {
computer = 'gunting';
} else {
computer = 'kertas';
}
if (q == computer) {
reply(`*RESULT*\n\nPertandingan Seri!`)
} else if (q == 'batu') {
if (computer == 'gunting') {
reply(`*RESULT*\n\n• You: Batu\n• Computer: Gunting\n\nCongrats You win!`)
} else {
reply(`*RESULT*\n\n• You: Batu\n• Computer: Kertas\n\nYou lose:(`)
}
} else if (q == 'gunting') {
if (computer == 'batu') {
reply(`*RESULT*\n\n• You: Gunting\n• Computer: Batu\n\nYou lose:(`)
} else {
reply(`*RESULT*\n\n• You: Gunting\n• Computer: Kertas\n\nCongrats You win!`)
}
} else if (q == 'kertas') {
if (computer == 'batu') {
reply(`*RESULT*\n\n• You: Kertas\n• Computer: Batu\n\nCongrats You win!`)
} else {
reply(`*RESULT*\n\n• You: Kertas\n• Computer: Gunting\n\nYou lose:(`)
}
}
}
break

//━━━━━━━━━━━━━━━[ FITUR DOWNLOADER ]━━━━━━━━━━━━━━━━━//

case 'play':
gambar = fs.readFileSync('./C/tsukasa.jpg')
teks =
`Silahkan Pilih Media Yg Ingin Download`
but = [
          { buttonId: `${prefix}playmp3 ${q}`, buttonText: { displayText: '☰ MUSIC' }, type: 1 },
          { buttonId: `${prefix}playmp4 ${q}`, buttonText: { displayText: '☰ VIDEO' }, type: 1 }
        ]
        sendButLocation(from, teks, faketeks, gambar, but)
break
case 'playmp3':
if (args.length == 0) return await reply(`Judul Lagunya Mana Tod\nContoh : ${prefix + command} melukis senja`)
reply(mess.wait)
await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${zerokey}&query=${args.join(" ")}`)
.then(async(result) => {
await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${zerokey}&url=https://www.youtube.com/watch?v=${result.result[0].videoId}`)
.then(async(result) => {
result = result.result
caption = `❖ Title    : *${result.title}*\n`
caption += `❖ Size     : *${result.size}*`
ini_buffer = await getBuffer(result.thumbnail)
await itsuki.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: caption })
get_audio = await getBuffer(result.link)
await itsuki.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${result.title}.mp3`, quoted: ftrol})
})
})
break
case "playvideo":
if (args.length === 0)
return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
reply(mess.wait)
var srch = args.join("")
aramas = await yts(srch)
aramat = aramas.all;
var mulaikah = aramat[0].url;
try {
ytv(mulaikah).then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res;
axios
.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 100000)
return sendMediaURL(from,thumb,`*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
sendMediaURL(from, thumb, captions)
await sendMediaURL(from, dl_link).catch(() => reply("error"))
})
})
} catch (err) {
reply(mess.error.api)
}
break
case 'tiktok':
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_url = args[0]
ini_url = `https://api.lolhuman.xyz/api/tiktok?apikey=${zerokey}&url=${ini_url}`
get_result = await fetchJson(ini_url)
ini_buffer = await getBuffer(get_result.result.link)
await itsuki.sendMessage(from, ini_buffer, video, { quoted: ftrol, caption: 'Nih Memenya, Subrek YT I T S U K I ngab'})
break
case 'tiktokmusic':
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
ini_link = args[0]
get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${zerokey}&url=${ini_link}`)
await itsuki.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: ftrol})
break
case 'pinterest':
if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
query = args.join(" ")
ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${zerokey}&query=${query}`)
ini_url = ini_url.result
ini_buffer = await getBuffer(ini_url)
await itsuki.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: 'Nih Memenya, Subrek YT I T S U K I ngab'})
break
case 'instagram':
case 'ig':
case 'igdl': 
if (!q) return reply(`Example: ${prefix}igdl link ig`)
if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('Hmm..')
reply(mess.wait)
anu = await igDownloader (q)
sendMediaURL(from,`${anu.result.link}`,'nih kak')
break
case 'fbdl':
case 'facebook': 
if (!q) return reply(`Example: ${prefix}fbdl link fb`)
reply(mess.wait)
fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${zerokey}&url=${args[0]}`).then( res => {
itsuki.sendMessage(from, {url: res.result}, video, {quoted: ftrol})
})
break                                 

//━━━━━━━━━━━━━━━[ FITUR ASUPAN ]━━━━━━━━━━━━━━━━━//

case 'asupan':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.result)
itsuki.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Memenya, Subrek YT I T S U K I ngab', thumbnail: Buffer.alloc(0)})
break
case 'asupancecan':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
itsuki.sendMessage(from, buffer, image, {quoted: ftrol, caption: 'Nih Memenya, Subrek YT I T S U K I ngab', thumbnail: Buffer.alloc(0)})
break
case 'asupanhijaber':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/hijaber?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
itsuki.sendMessage(from, buffer, image, {quoted: ftrol, caption: 'Nih Memenya, Subrek YT I T S U K I ngab', thumbnail: Buffer.alloc(0)})
break
case 'asupansantuy':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
itsuki.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Memenya, Subrek YT I T S U K I ngab', thumbnail: Buffer.alloc(0)})
break
case 'asupanukhti':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
itsuki.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Memenya, Subrek YT I T S U K I ngab', thumbnail: Buffer.alloc(0)})
break
case 'asupanbocil':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
itsuki.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Memenya, Subrek YT I T S U K I ngab', thumbnail: Buffer.alloc(0)})
break
case 'asupanghea':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
itsuki.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Memenya, Subrek YT I T S U K I ngab', thumbnail: Buffer.alloc(0)})
break
case 'asupanrika':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
itsuki.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Memenya, Subrek YT I T S U K I ngab', thumbnail: Buffer.alloc(0)})
break

//━━━━━━━━━━━━━━━[ FITUR RANDOM MEME ]━━━━━━━━━━━━━━━━━//

case 'meme':
await getBuffer(`https://api.lolhuman.xyz/api/random/meme?apikey=${zerokey}`).then((gambar) => {
reply(mess.wait)
itsuki.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Memenya, Subrek YT I T S U K I ngab', thumbnail: Buffer.alloc(0)})
})
break
case 'darkjoke':
await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${zerokey}`).then((gambar) => {
reply(mess.wait)
itsuki.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Memenya, Subrek YT I T S U K I ngab', thumbnail: Buffer.alloc(0)})
})
break
case 'memeindo':
await getBuffer(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=${zerokey}`).then((gambar) => {
reply(mess.wait)
itsuki.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Memenya, Subrek YT I T S U K I ngab', thumbnail: Buffer.alloc(0)})
})
break

//━━━━━━━━━━━━━━━[ FITUR RANDOM TEXT ]━━━━━━━━━━━━━━━━━//

case 'quotes':
quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${zerokey}`)
quotes = quotes.result
author = quotes.by
quotes = quotes.quote
reply(`_${quotes}_\n\n*― ${author}*`)
break
case 'quotesanime':
quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${zerokey}`)
quotes = quotes.result
quote = quotes.quote
char = quotes.character
anime = quotes.anime
episode = quotes.episode
reply(`_${quote}_\n\n*― ${char}*\n*― ${anime} ${episode}*`)
break
case 'quotesdilan':
quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${zerokey}`)
reply(quotedilan.result)
break
case 'quotesimage':
get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${zerokey}`)
await itsuki.sendMessage(from, get_result, image, { quotes: ftrol })
break
case 'katabijak':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${zerokey}`)
reply(get_result.result)
break
case 'randomnama':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${zerokey}`)
reply(anu.result)
break

//━━━━━━━━━━━━━━━[ FITUR UPSW ]━━━━━━━━━━━━━━━━━//

case 'upswteks':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (args.length < 1) return reply('Teksnya?')
teks = body.slice(10)
itsuki.sendMessage('status@broadcast', teks, MessageType.text)
reply(`Sukses upload status:\n${teks}`)
break
case 'upswsticker':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await itsuki.downloadMediaMessage(encmedia)
itsuki.sendMessage('status@broadcast', buff, sticker)
}
reply(`Sukses upload sticker`)
break
case 'upswaudio':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await itsuki.downloadMediaMessage(encmedia)
itsuki.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
}
reply(`Sukses upload audio`)
break
case 'upswvideo':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
var konti = body.slice(11)
reply(mess.wait)
var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var mediap = await itsuki.downloadAndSaveMediaMessage(enmediap)
const buffer3 = fs.readFileSync(mediap)
itsuki.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
reply(`Sukses upload video:\n${konti}`)
break
case 'upswimage':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
var teksyy = body.slice(11)
reply(mess.wait)
enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await itsuki.downloadAndSaveMediaMessage(enmedia)
buffer = fs.readFileSync(media)
itsuki.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
reply(`Sukses upload image:\n${teksyy}`)
break

//━━━━━━━━━━━━━━━[ FITUR URL ]━━━━━━━━━━━━━━━━━//

case 'tinyurl':
reply(mess.wait)
if (args.length == 0) return reply(`Format salah! dibutuhkan (${prefix + command} (url with http://)) Example: ${prefix + command} http://panel.vinny.wtf/`)
short = args.join(" ")
ini_result = await fetchJson(`http://hadi-api.herokuapp.com/api/tinyurl?url=${short}`,{method:'get'})
get_result = ini_result.result
ini_txt = `Tinyurl shortlink`
ini_txt += `Shortlink : ${get_result}`
reply (ini_txt)
break
case 'bitly':
reply(mess.wait)
if (args.length == 0) return reply(`Format salah! dibutuhkan (${prefix + command} (url with http://)) Example: ${prefix + command} http://panel.vinny.wtf/`)
short = args.join(" ")
ini_result = await fetchJson(`http://hadi-api.herokuapp.com/api/bitly?url=${short}`,{method:'get'})
get_result = ini_result.result
ini_txt = `bitly shortlink`
ini_txt += `Shortlink : ${get_result}`
reply (ini_txt)
break
case 'shorturl':
 reply(mess.wait)
 if (args.length == 0) return reply(`Format salah! dibutuhkan (${prefix + command} (url with http://)) Example: ${prefix + command} http://panel.vinny.wtf/`)
short = args.join(" ")
ini_result = await fetchJson(`http://hadi-api.herokuapp.com/api/shorturl?url=${short}`,{method:'get'})
get_result = ini_result.result
ini_txt = `shorturl shortlink`
ini_txt += `Shortlink : ${get_result}`
reply (ini_txt)
break
case 'cuttly':
reply(mess.wait)
if (args.length == 0) return reply(`Format salah! dibutuhkan (${prefix + command} (url with http://)) Example: ${prefix + command} http://panel.vinny.wtf/`)
short = args.join(" ")
ini_result = await fetchJson(`http://hadi-api.herokuapp.com/api/cuttly?url=${short}`,{method:'get'})
get_result = ini_result.result
ini_txt = `cuttly shortlink`
ini_txt += `Shortlink : ${get_result}`
reply (ini_txt)
break 

//━━━━━━━━━━━━━━━[ FITUR INFORMATION ]━━━━━━━━━━━━━━━━━//

case 'kbbi':
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} kursi`)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kbbi?apikey=${zerokey}&query=${args.join(" ")}`)
lila = get_result.result
ini_txt = `\`\`\`Kata : ${lila[0].nama}\`\`\`\n`
ini_txt += `\`\`\`Kata Dasar : ${lila[0].kata_dasar}\`\`\`\n`
ini_txt += `\`\`\`Pelafalan : ${lila[0].pelafalan}\`\`\`\n`
ini_txt += `\`\`\`Bentuk Tidak Baku : ${lila[0].bentuk_tidak_baku}\`\`\`\n\n`
for (var x of lila) {
ini_txt += `\`\`\`Kode : ${x.makna[0].kelas[0].kode}\`\`\`\n`
ini_txt += `\`\`\`Kelas : ${x.makna[0].kelas[0].nama}\`\`\`\n`
ini_txt += `\`\`\`Artinya : \n${x.makna[0].kelas[0].deskripsi}\`\`\`\n\n`
ini_txt += `\`\`\`Makna Lain : \n${x.makna[0].submakna}\`\`\`\n `
ini_txt += `\`\`\`Contoh Kalimat : \n${x.makna[0].contoh}\`\`\`\n`
}
reply(ini_txt)
break
case 'jarak':
if (args.length == 0) return reply(`Nama Kotanya Mana Tod\nContoh: ${prefix + command} jakarta - yogyakarta`)
pauls = args.join(" ")
teks1 = pauls.split("-")[0].trim()
teks2 = pauls.split("-")[1].trim()
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${zerokey}&kota1=${teks1}&kota2=${teks2}`)
x = get_result.result
ini_txt = `Informasi Jarak dari ${teks1} ke ${teks2} :\n\n`
ini_txt += `\`\`\`◪ Asal :\`\`\` ${x.from.name}\n`
ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.from.latitude}\n`
ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.from.longitude}\n\n`
ini_txt += `\`\`\`◪ Tujuan :\`\`\` ${x.to.name}\n`
ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.to.latitude}\n`
ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.to.longitude}\n\n`
ini_txt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${x.jarak}\n`
ini_txt += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
ini_txt += `   ╭───────────────❏\n`
ini_txt += `❍┤ Kereta Api : ${x.kereta_api}\n`
ini_txt += `❍┤ Pesawat : ${x.pesawat}\n`
ini_txt += `❍┤ Mobil : ${x.mobil}\n`
ini_txt += `❍┤ Motor : ${x.motor}\n`
ini_txt += `❍┤ Jalan Kaki : ${x.jalan_kaki}\n`
ini_txt += `   ╰───────────────❏\n`
reply(ini_txt)
break
case 'wikipedia':
if (args.length == 0) return reply(`Nama Yg Mau Di Cari Mana Tod\nContoh: ${prefix + command} Tahu`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${zerokey}&query=${query}`)
get_result = get_result.result
reply(get_result)
break
case 'translate':
if (args.length == 0) return reply(`Teks Yg Mau Di Translate Mana Tod\nContoh: ${prefix + command} en Tahu Bacem`)
kode_negara = args[0]
args.shift()
ini_txt = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${zerokey}&text=${ini_txt}`)
get_result = get_result.result
init_txt = `From : ${get_result.from}\n`
init_txt += `To : ${get_result.to}\n`
init_txt += `Original : ${get_result.original}\n`
init_txt += `Translated : ${get_result.translated}\n`
init_txt += `Pronunciation : ${get_result.pronunciation}\n`
reply(init_txt)
break
case 'jadwaltv':
if (args.length == 0) return reply(`Nama Channel Nya Mana Tod\nContoh: ${prefix + command} SCTV`)
channel = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${zerokey}`)
get_result = get_result.result
ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
for (var x in get_result) {
ini_txt += `${x} - ${get_result[x]}\n`
}
reply(ini_txt)
break
case 'infogempa':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${zerokey}`)
get_result = get_result.result
ini_txt = `Lokasi : ${get_result.lokasi}\n`
ini_txt += `Waktu : ${get_result.waktu}\n`
ini_txt += `Potensi : ${get_result.potensi}\n`
ini_txt += `Magnitude : ${get_result.magnitude}\n`
ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
ini_txt += `Koordinat : ${get_result.koordinat}`
get_buffer = await getBuffer(get_result.map)
await itsuki.sendMessage(from, get_buffer, image, { quoted: ftrol, caption: ini_txt })
break
case 'cuaca':
if (args.length == 0) return reply(`Nama Kotanya Mana Tod\nContoh: ${prefix + command} Temanggung`)
daerah = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${zerokey}`)
get_result = get_result.result
ini_txt = `Tempat : ${get_result.tempat}\n`
ini_txt += `Cuaca : ${get_result.cuaca}\n`
ini_txt += `Angin : ${get_result.angin}\n`
ini_txt += `Description : ${get_result.description}\n`
ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
ini_txt += `Suhu : ${get_result.suhu}\n`
ini_txt += `Udara : ${get_result.udara}\n`
ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
await itsuki.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: ftrol })
reply(ini_txt)
break
case 'covidindo':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${zerokey}`)
get_result = get_result.result
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Sembuh : ${get_result.sembuh}\n`
ini_txt += `Dirawat : ${get_result.dirawat}\n`
ini_txt += `Meninggal : ${get_result.meninggal}`
reply(ini_txt)
break
case 'covidglobal':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${zerokey}`)
get_result = get_result.result
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Sembuh : ${get_result.sembuh}\n`
ini_txt += `Dirawat : ${get_result.dirawat}\n`
ini_txt += `Meninggal : ${get_result.meninggal}`
reply(ini_txt)
break

//━━━━━━━━━━━━━━━[ FITUR PRIMBON ]━━━━━━━━━━━━━━━━━//

case 'artinama':
if (args.length == 0) return reply(`Namamya Mana Tod\nContoh: ${prefix + command} Zero YT7`)
ini_nama = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/artinama?apikey=${zerokey}&nama=${ini_nama}`)
reply(get_result.result)
break
case 'jodoh':
if (args.length == 0) return reply(`Namanya Mana Tod\nContoh: ${prefix + command} Zero & Sandrinna`)
ini_nama = args.join(" ").split("&")
nama1 = ini_nama[0].trim()
nama2 = ini_nama[1].trim()
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${zerokey}`)
get_result = get_result.result
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Negative : ${get_result.negatif}\n`
ini_txt += `Deskripsi : ${get_result.deskripsi}`
reply(ini_txt)
break
case 'jadian':
if (args.length == 0) return reply(`Tanggal Jadiannya Mana Tod\nContoh: ${prefix + command} 12 12 2020`)
tanggal = args[0]
bulan = args[1]
tahun = args[2]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=${zerokey}`)
get_result = get_result.result
ini_txt = `Karakteristik : ${get_result.karakteristik}\n`
ini_txt += `Deskripsi : ${get_result.deskripsi}`
reply(ini_txt)
break
case 'tebakumur':
if (args.length == 0) return reply(`Namanya Mana Tod\nContoh: ${prefix + command} Zero YT7`)
ini_name = args.join(" ")
if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebakumur?apikey=${zerokey}&name=${ini_name}`)
get_result = get_result.result
ini_txt = `Nama : ${get_result.name}\n`
ini_txt += `Umur : ${get_result.age}`
reply(ini_txt)
break

//━━━━━━━━━━━━━━━[ FITUR STALK ]━━━━━━━━━━━━━━━━━//

case 'stalkig':
if (args.length == 0) return reply(`Usernamenya Mana Tod\nContoh: ${prefix + command} Sandrinna_11`)
username = args[0]
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${zerokey}`)
ini_result = ini_result.result
ini_buffer = await getBuffer(ini_result.photo_profile)
ini_txt = `Username : ${ini_result.username}\n`
ini_txt += `Full Name : ${ini_result.fullname}\n`
ini_txt += `Posts : ${ini_result.posts}\n`
ini_txt += `Followers : ${ini_result.followers}\n`
ini_txt += `Following : ${ini_result.following}\n`
ini_txt += `Bio : ${ini_result.bio}`
itsuki.sendMessage(from, ini_buffer, image, { caption: ini_txt })
break
case 'stalktiktok':
if (args.length == 0) return reply(`Usernamenya Mana Tod\nContoh: ${prefix + command} Sandrinna`)
stalk_toktok = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${stalk_toktok}?apikey=ZeroYT7`)
get_result = get_result.result
ini_txt = `Username : ${get_result.username}\n`
ini_txt += `Nickname : ${get_result.nickname}\n`
ini_txt += `Bio : ${get_result.nickname}\n`
ini_txt += `Followers : ${get_result.followers}\n`
ini_txt += `Followings : ${get_result.followings}\n`
ini_txt += `Likes : ${get_result.likes}\n`
ini_txt += `Video : ${get_result.video}\n`
pp_tt = await getBuffer(get_result.user_picture)
itsuki.sendMessage(from, pp_tt, image, { quoted: ftrol, caption: ini_txt })
break
case 'stalkgithub':
if (args.length == 0) return reply(`Usernamenya Mana Tod\nContoh: ${prefix + command} Zero-YT7`)
username = args[0]
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${zerokey}`)
ini_result = ini_result.result
ini_buffer = await getBuffer(ini_result.avatar)
ini_txt = `Name : ${ini_result.name}\n`
ini_txt += `Link : ${ini_result.url}\n`
ini_txt += `Public Repo : ${ini_result.public_repos}\n`
ini_txt += `Public Gists : ${ini_result.public_gists}\n`
ini_txt += `Followers : ${ini_result.followers}\n`
ini_txt += `Following : ${ini_result.following}\n`
ini_txt += `Bio : ${ini_result.bio}`
itsuki.sendMessage(from, ini_buffer, image, { caption: ini_txt })
break

//━━━━━━━━━━━━━━━[ FITUR RANDOM IMAGE ]━━━━━━━━━━━━━━━━━//

case 'loli':
gambar = await getBuffer('https://velgrynd.herokuapp.com/api/image/loli')
reply(mess.wait)
itsuki.sendMessage(from, gambar, image, {quoted: mek, caption: 'Nih Jangan Lupa Subrek YT : I T S U K I'})
break
case 'neko':
gambar = await getBuffer('https://velgrynd.herokuapp.com/api/image/neko')
reply(mess.wait)
itsuki.sendMessage(from, gambar, image, {quoted: mek, caption: 'Nih Jangan Lupa Subrek YT : I T S U K I'})
break
case 'waifu':
gambar = await getBuffer('https://velgrynd.herokuapp.com/api/image/waifu')
reply(mess.wait)
itsuki.sendMessage(from, gambar, image, {quoted: mek, caption: 'Nih Jangan Lupa Subrek YT : I T S U K I'})
break
case 'awoo':
gambar = await getBuffer('https://velgrynd.herokuapp.com/api/image/awoo')
reply(mess.wait)
itsuki.sendMessage(from, gambar, image, {quoted: mek, caption: 'Nih Jangan Lupa Subrek YT : I T S U K I'})
break
case 'husbu':
gambar = await getBuffer('https://velgrynd.herokuapp.com/api/image/husbu')
reply(mess.wait)
itsuki.sendMessage(from, gambar, image, {quoted: mek, caption: 'Nih Jangan Lupa Subrek YT : I T S U K I'})
break
case 'cosplay':
gambar = await getBuffer('https://velgrynd.herokuapp.com/api/image/cosplay')
reply(mess.wait)
itsuki.sendMessage(from, gambar, image, {quoted: mek, caption: 'Nih Jangan Lupa Subrek YT : I T S U K I'})
break
case 'shinobu':
gambar = await getBuffer('https://velgrynd.herokuapp.com/api/image/shinobi')
reply(mess.wait)
itsuki.sendMessage(from, gambar, image, {quoted: mek, caption: 'Nih Jangan Lupa Subrek YT : I T S U K I'})
break
case 'megumin':
gambar = await getBuffer('https://velgrynd.herokuapp.com/api/image/megumin')
reply(mess.wait)
itsuki.sendMessage(from, gambar, image, {quoted: mek, caption: 'Nih Jangan Lupa Subrek YT : I T S U K I'})
break
case 'milf':
gambar = await getBuffer('https://velgrynd.herokuapp.com/api/image/milf')
reply(mess.wait)
itsuki.sendMessage(from, gambar, image, {quoted: mek, caption: 'Nih Jangan Lupa Subrek YT : I T S U K I'})
break

//━━━━━━━━━━━━━━━[ FITUR MAKER ]━━━━━━━━━━━━━━━━━//

case 'tahta':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('*Teks nya mana?*')
reply(mess.wait)
tahta = args.join(" ")
tahta = await getBuffer(`https://api.zeks.xyz/api/hartatahta?apikey=apivinz&text=${tahta}`)
itsuki.sendMessage(from,tahta,image,{quoted:ftrol, thumbnail: Buffer.alloc(0)})
break
case 'thunder':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('*Teks nya mana?*')
reply(mess.wait)
thunder = args.join(" ")
thunder = await getBuffer(`https://api.zeks.xyz/api/thundertext?apikey=apivinz&text=${thunder}`)
itsuki.sendMessage(from,thunder,image,{quoted:ftrol, thumbnail: Buffer.alloc(0)})
break
case 'blackpink':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('*Teks nya mana?*')
reply(mess.wait)
bp = args.join(" ")
bp = await getBuffer(`https://api.zeks.xyz/api/logobp?apikey=apivinz&text=${bp}`)
itsuki.sendMessage(from,bp,image,{quoted:ftrol, thumbnail: Buffer.alloc(0)})
break
case 'glitch':
if (!isGroup) return reply(mess.only.group)
if(!q) return reply(`Example : ${prefix}glitch nama|autor`)
g1 = q.split('|')[0]
g2 = q.split('|')[1]
reply(mess.wait)
glitch = await getBuffer(`https://api.zeks.xyz/api/gtext?apikey=${zeks}&text1=${g1}&text2=${g2}`)
itsuki.sendMessage(from,glitch,image,{quoted:ftrol, thumbnail: Buffer.alloc(0)})
break
case 'marvel':
if (!isGroup) return reply(mess.only.group)
if(!q) return reply(`Example : ${prefix}marvel nama|autor`)
m1 = q.split('|')[0]
m2 = q.split('|')[1]
reply(mess.wait)
marvel = await getBuffer(`https://api.zeks.xyz/api/marvellogo?apikey=${zeks}&text1=${m1}&text2=${m2}`)
itsuki.sendMessage(from,marvel,image,{quoted:ftrol, thumbnail: Buffer.alloc(0)})
break
//━━━━━━━━━━━━━━━[ NEW FITUR ]━━━━━━━━━━━━━━━━━//
/*
FITUR YG GW TAMBAHIN NIH:V
*/
case 'nhentai':
if (args.length == 0) return reply(`Kodenya Mana Ngab\nContoh: ${prefix + command} 102006`)
kode = args[0]
get_result = await fetchJson(`https://velgrynd.herokuapp.com/api/nhentai?code=${kode}`)
get_result = get_result.result
get_info = get_result.details
ini_txt = `Judul : *${get_result.title}*\n`
ini_txt += `Judul Native : *${get_result.nativeTitle}*\n`
ini_txt += `Language : *${get_info.languages}*\n`
ini_txt += `Artist : *${get_info.artists}*\n`
ini_txt += `Characters : *${get_info.characters}*\n`
ini_txt += `Tags : *${get_info.tags}*\n`
ini_txt += `Groups : *${get_info.groups}*\n`
ini_txt += `Pages : *${get_info.pages}*\n`
ini_txt += `Artist : *${get_info.uploaded}*\n`
ini_txt += `Read : *${get_result.link}*\n`
gambar = fs.readFileSync('./C/tsukasa.jpg')
itsuki.sendMessage(from, gambar, image, { caption: ini_txt })
break
case 'doujin':
if (args.length == 0) return reply(`Kodenya Mana Ngab\nContoh: ${prefix + command} https://doujindesu.id/2021/01/18/queen-bee-chapter-33/`)
kode = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/doujindesu?apikey=YTRAMLANID&url=${kode}`)
get_result = get_result.result
get_info = get_result.info
ini_txt = `Judul : *${get_result.title}*\n`
ini_txt += `Read : *${get_result.link_dl}*\n`
gambar = fs.readFileSync('./C/tsukasa.jpg')
itsuki.sendMessage(from, gambar, image, { caption: ini_txt })
break
case 'cerpen':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=YTRAMLANID`)
get_result = get_result.result
ini_txt = `Judul : *${get_result.title}*\n`
ini_txt += `Creator : *${get_result.creator}*\n`
ini_txt += `Cerpen : ${get_result.cerpen}\n`
gambar = fs.readFileSync('./C/tsukasa.jpg')
itsuki.sendMessage(from, gambar, image, { caption: ini_txt })
break
case 'hentai':
if (isGroup) return reply('Jangan Di Grup Amjeng')
anu = await getBuffer(`https://zenzapi.xyz/api/anime/nsfw/hentai?apikey=${setting.zenzkey}`)
itsuki.sendMessage(from, anu, image, { quoted: ftrol, caption: 'Taubat Bang Taubat'})
break

//━━━━━━━━━━━━━━━[ AUTHOR MENU ]━━━━━━━━━━━━━━━━━//
/*
NI JANGAN DI APA APAIN YA
GW ENC JG BAGIAN INI AWIWKWK
*/
case 'infobot':
timestamp = speed();
latensi = speed() - timestamp;
txt = `
╭─❒「 *INFO BOT* 」❒
││ *⧉ CREATOR* : _ZeroYT7_
││ *⧉ RECODER* : _I T S U K I_
││ *⧉ BOT NAME* : _${setting.BotName}_
││ *⧉ OWNER NAME* : _${setting.OwnerName}_
││ *⧉ RUNTIME* : ${process.uptime()}
││ *⧉ SPEED* : ${latensi.toFixed(4)} second
│└──❒「 *THANKS TO* 」❒
│ *ALLAH SWT*
│ *ORANG TUA*
│ *ZeroYT7*
│ *RAMLANID*
└───────────────    ❒
`
teks = `©I T S U K I`
gambar = await getBuffer('https://i.ibb.co/T2WfNcv/itsuki.jpg')
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: '☰ ALL MENU' }, type: 1 },
          { buttonId: `${prefix}author`, buttonText: { displayText: '☰ AUTHOR' }, type: 1 },
          { buttonId: `${prefix}changelog`, buttonText: { displayText: '☰ CHANGELOG' }, type: 1 }
        ]
        sendButLocation(from, txt, teks, gambar, but)
break
case 'changelog':
txt =`
╭─❒「 *CHANGELOG* 」❒
││ *⧉ TSUKASA BOT*
││ *⧉ VERSION 1.0*
││ *⧉ CREATOR I T S U K I*
││ *⧉ BASE SC BY ZEROYT7*
│└─❒「 *NEW FITUR* 」❒
│ *⬣ MENAMBAHKAN TROLI*
│ *⬣ MENAMBAHKAN 20 FITUR*
│ *⬣ MEMPERBAIKI BASE FITUR*
│ *⬣ MEMPERSIMPLE MENU*
│ *⬣ DLL DAH*
│ *⬣ SC INI TIDAK UNTUK DIJUAL*
└──────────────   ❒
`
teks = `©I T S U K I`
gambar = getBuffer('https://i.ibb.co/T2WfNcv/itsuki.jpg')
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: '☰ ALL MENU' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER' }, type: 1 },
          { buttonId: `${prefix}changelog`, buttonText: { displayText: '☰ CHANGELOG' }, type: 1 }
        ]
        sendButLocation(from, txt, teks, gambar, but)
break
case 'author':
let recoder = []
for (let i of ownerNumber) {
let vname = itsuki.contacts[i] != undefined ? itsuki.contacts[i].vname || itsuki.contacts[i].notify : undefined
recoder.push({
"displayName": 'TSUKASA',
"vcard": 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:I T S U K I\n`
+ `ORG: TSUKASA BOTZ ;\n`
+ `TEL;type=CELL;type=VOICE;waid=6289501208400:6289501208400\n`
+ 'END:VCARD'.trim()
})
}
hehe = await itsuki.sendMessage(from, {
"displayName": `${recoder.length} kontak`,
"contacts": recoder 
}, 'contactsArrayMessage', { quoted: ftrol })

let creator = []
for (let i of ownerNumber) {
let vname = itsuki.contacts[i] != undefined ? itsuki.contacts[i].vname || itsuki.contacts[i].notify : undefined
creator.push({
"displayName": 'TSUKASA',
"vcard": 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:ZEROYT7\n`
+ `ORG: TSUKASA BOTZ ;\n`
+ `TEL;type=CELL;type=VOICE;waid=6289501208400:62859501208400\n`
+ 'END:VCARD'.trim()
})
}
hoho = await itsuki.sendMessage(from, {
"displayName": `${creator.length} kontak`,
"contacts": creator 
}, 'contactsArrayMessage', { quoted: ftrol })
button = [
  {buttonId: '.menu', buttonText: {displayText: '☰ MENU'}, type: 1},
]
 buttons = {
    contentText: 'MEREKA AUTHOR GW NGAB...!',
    footerText: faketeks,
    buttons: button,
    headerType: 1
}
await itsuki.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: ftrol})
break
//━━━━━━━━━━━━━━━[ ISLAM MENU ]━━━━━━━━━━━━━━━━━//
case 'kisahnabi':
                if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${zerokey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
case 'jadwalsholat':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${zerokey}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break  
             case 'listsurah':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${zerokey}`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break                                              
case 'alquran':
                    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `http://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${zerokey}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break
case 'asmaulhusna':
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asmaulhusna?apikey=${zerokey}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
 case 'alquranaudio':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${zerokey}`)
                    itsuki.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })      
                    break 
//━━━━━━━━━━━━━━━[ PITUR APA AJ ]━━━━━━━━━━━━━━━━━//       
//━━━━━━━━━━━━━━━[ KEBUTUHAN ]━━━━━━━━━━━━━━━━━//             
const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
//━━━━━━━━━━━━━━━[ SIMSIMI ]━━━━━━━━━━━━━━━━━//        
case 'simi':
case 'simsimi':
if (args.length == 0) return reply('Mau Ngomongin Apa Ngab')
dari = await fetchJson(`https://api-sv2.simsimi.net/v2/?text=${args[0]}&lc=id&cf=false`)
texty = `${dari.success}`
reply(texty)
	break
//━━━━━━━━━━━━━━━[ FITUR ]━━━━━━━━━━━━━━━━━//             

              case 'apakah':
              apakah = body.slice(1)
              const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
              const kah = apa[Math.floor(Math.random() * apa.length)]
              itsuki.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: mek })
              break
       case 'rate':
       case 'nilai':
              rate = body.slice(1)
              const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
              const te = ra[Math.floor(Math.random() * ra.length)]
              itsuki.sendMessage(from, '*Pertanyaan :* '+rate+'\n*Jawaban :* '+ te+'%', text, { quoted: mek })
              break
       case 'gantengcek':
       case 'cekganteng':
       if (args.length == 0) return reply(`Tag Yg Mau Di Cek, Atau Bilang Saya\nContoh ${prefix + command} Saya\nAtau ${prefix + command} @628xxx`)
              ganteng = body.slice(1)
              const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const teng = gan[Math.floor(Math.random() * gan.length)]
              itsuki.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: mek })
              break
       case 'cantikcek':
       case 'cekcantik':
       if (args.length == 0) return reply(`Tag Yg Mau Di Cek, Atau Namanya\nContoh ${prefix + command} Saya\nAtau ${prefix + command} @628xxx`)
              cantik = body.slice(1)
              const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const tik = can[Math.floor(Math.random() * can.length)]
              itsuki.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: mek })
              break
       case 'hobby':
              hobby = body.slice(1)
              const by = hobby[Math.floor(Math.random() * hobby.length)]
              itsuki.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
              break
       case 'bisakah':
              bisakah = body.slice(1)
              const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
              const keh = bisa[Math.floor(Math.random() * bisa.length)]
              itsuki.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: mek })
              break
       case 'kapankah':
              kapankah = body.slice(1)
              const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
              const koh = kapan[Math.floor(Math.random() * kapan.length)]
              itsuki.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: mek })
              break
case 'waktu':
              reply(`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
              break
       case 'cekmati':
              if (!q) return reply(mess.wrongFormat)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
case 'ssweb':
if (args.length == 0) return ('link na naon')
if (!args[0].includes('http')) return ('link tidak valid')
gambar = await getBuffer(`https://api.lolhuman.xyz/api/ssweb?apikey=${zerokey}&url=${args}`)
itsuki.sendMessage(from, gambar, image, {quoted: mek})
break              
case 'sertitolol': 				
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}sertitolol jamal`)
				ct = body.slice(12)
				zhain = await getBuffer(`https://api.lolhuman.xyz/api/toloserti?apikey=${setting.lolkey}&name=${ct}`)
				itsuki.sendMessage(from, zhain, image, { quoted: suki, caption: 'Nih Dah Jadi' })
				break
//FITUR RAHASIA:V
case 'chiisaihentai':
if (isGroup) return reply('jangan di grup ajg')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/chiisaihentai?apikey=${setting.ZeroKey}`)
                    itsuki.sendMessage(from, ini_buffer, image, { quoted: ftrol})
                    break
                    case 'trap':
                    if (isGroup) return reply('jangan di grup ajg')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/trap?apikey=${setting.ZeroKey}`)
                    itsuki.sendMessage(from, ini_buffer, image, { quoted: ftrol})
                    break
                    case 'blowjob':
                    if (isGroup) return reply('jangan di grup ajg')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/blowjob?apikey=${setting.ZeroKey}`)
                    itsuki.sendMessage(from, ini_buffer, image, { quoted: ftrol})
                    break
                    case 'yaoi':
                    if (isGroup) return reply('jangan di grup ajg')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/yaoi?apikey=${setting.ZeroKey}`)
                    itsuki.sendMessage(from, ini_buffer, image, { quoted: ftrol})
                    break
                    case 'ecchi':
                    if (isGroup) return reply('jangan di grup ajg')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/ecchi?apikey=${setting.ZeroKey}`)
                    itsuki.sendMessage(from, ini_buffer, image, { quoted: ftrol})
                    break
                    case 'ahegao':
                    if (isGroup) return reply('jangan di grup ajg')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/ahegao?apikey=${setting.ZeroKey}`)
                    itsuki.sendMessage(from, ini_buffer, image, { quoted: ftrol})
                    break
                    case 'hololewd':
                    if (isGroup) return reply('jangan di grup ajg')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hololewd?apikey=${setting.ZeroKey}`)
                    itsuki.sendMessage(from, ini_buffer, image, { quoted: ftrol})
                    break
                    case 'sideoppai':
                    if (isGroup) return reply('jangan di grup ajg')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${setting.ZeroKey}`)
                    itsuki.sendMessage(from, ini_buffer, image, { quoted: ftrol})
                    break
                    case 'animefeets':
                    if (isGroup) return reply('jangan di grup ajg')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${setting.ZeroKey}`)
                    itsuki.sendMessage(from, ini_buffer, image, { quoted: ftrol})
                    break
                    case 'animebooty':
                    if (isGroup) return reply('jangan di grup ajg')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${setting.ZeroKey}`)
                    itsuki.sendMessage(from, ini_buffer, image, { quoted: ftrol})
                    break
                    case 'animethighss':
                    if (isGroup) return reply('jangan di grup ajg')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/animethighss?apikey=${setting.ZeroKey}`)
                    itsuki.sendMessage(from, ini_buffer, image, { quoted: ftrol})
                    break
                    case 'hentaiparadise':
                    if (isGroup) return reply('jangan di grup ajg')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentaiparadise?apikey=${setting.ZeroKey}`)
                    itsuki.sendMessage(from, ini_buffer, image, { quoted: ftrol})
                    break
                    case 'animearmpits':
                    if (isGroup) return reply('jangan di grup ajg')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/animearmpits?apikey=${setting.ZeroKey}`)
                    itsuki.sendMessage(from, ini_buffer, image, { quoted: ftrol})
                    break
                    case 'hentaifemdom':
                    if (isGroup) return reply('jangan di grup ajg')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentaifemdom?apikey=${setting.ZeroKey}`)
                    itsuki.sendMessage(from, ini_buffer, image, { quoted: ftrol})
                    break
                    case 'lewdanimegirls':
                    if (isGroup) return reply('jangan di grup ajg')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/lewdanimegirls?apikey=${setting.ZeroKey}`)
                    itsuki.sendMessage(from, ini_buffer, image, { quoted: ftrol})
                    break
                    case 'biganimetiddies':
                    if (isGroup) return reply('jangan di grup ajg')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/biganimetiddies?apikey=${setting.ZeroKey}`)
                    itsuki.sendMessage(from, ini_buffer, image, { quoted: ftrol})
                    break
                    case 'hentai4everyone':
                    if (isGroup) return reply('jangan di grup ajg')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai4everyone?apikey=${setting.ZeroKey}`)
                    itsuki.sendMessage(from, ini_buffer, image, { quoted: ftrol})
                    break
//ERROR BODO AMAT YA MAGER GW NJIR
                    case 'bj':
                    case 'ero':
                    case 'cum':
                    case 'feet':
                    case 'yuri':
                    case 'trap':
                    case 'lewd':
                    case 'feed':
                    case 'eron':
                    case 'solo':
                    case 'gasm':
                    case 'poke':
                    case 'anal':
                    case 'holo':
                    case 'tits':
                    case 'kuni':
                    case 'kiss':
                    case 'erok':
                    case 'smug':
                    case 'baka':
                    case 'solog':
                    case 'feetg':
                    case 'lewdk':
                    case 'waifu':
                    case 'pussy':
                    case 'femdom':
                    case 'cuddle':
                    case 'hentai':
                    case 'eroyuri':
                    case 'cum_jpg':
                    case 'blowjob':
                    case 'erofeet':
                    case 'holoero':
                    case 'classic':
                    case 'erokemo':
                    case 'fox_girl':
                    case 'futanari':
                    case 'lewdkemo':
                    case 'wallpaper':
                    case 'pussy_jpg':
                    case 'kemonomimi':
                    case 'nsfw_avatar':
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=${setting.ZeroKey}`)
                    itsuki.sendMessage(from, ini_buffer, image, { quoted: ftrol})
                    break
//━━━━━━━━━━━━━━━[ MENU ]━━━━━━━━━━━━━━━━━//
/*
gausah diubah ngab
*/
case 'gamemenu':
gambar = fs.readFileSync('./C/tsukasa.jpg')
	timestamp = speed();
    latensi = speed() - timestamp	
gememenu = 
	`
⧉ Owner Name : ${ownername}
⧉ Bot Name : ${botname}
⧉ Owner Number : ${owner}
⧉ Runtime : ${process.uptime()}
⧉ Speed : ${latensi.toFixed(4)} second
⧉ Email : ahmadyusufb34@gmail.com
⧉ Browser : Linux
⧉ Langauge : Javascript


╭─❒「 Game Menu 」❒
│ ⧉ ${prefix}truth
│ ⧉ ${prefix}dare
│ ⧉ ${prefix}tebakkalimat
│ ⧉ ${prefix}tebakkata
│ ⧉ ${prefix}tebakgambar
│ ⧉ ${prefix}tebaklirik
│ ⧉ ${prefix}tebaktebakan
│ ⧉ ${prefix}tebakkimia
│ ⧉ ${prefix}tebakjenaka
│ ⧉ ${prefix}suit
└❒
`
teks =
`ITsukiBotz
Bot Ini Di Buat Oleh I T S U K I, Untuk Author Bisa Di Lihat Dengan Ketik ${prefix}author`
but = [
          { buttonId: `${prefix}infobot`, buttonText: { displayText: '☰ INFO' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER' }, type: 1 }
        ]
        sendButLocation(from, gememenu, teks, gambar, but)
break
             
      case 'downloadmenu':
gambar = fs.readFileSync('./C/tsukasa.jpg')
	timestamp = speed();
    latensi = speed() - timestamp	
gememenu = 
	`
⧉ Owner Name : ${ownername}
⧉ Bot Name : ${botname}
⧉ Owner Number : ${owner}
⧉ Runtime : ${process.uptime()}
⧉ Speed : ${latensi.toFixed(4)} second
⧉ Email : ahmadyusufb34@gmail.com
⧉ Browser : Linux
⧉ Langauge : Javascript


╭─❒「 Downloader Menu 」❒
│ ⧉ ${prefix}ssweb
│ ⧉ ${prefix}play
│ ⧉ ${prefix}ytsearch
│ ⧉ ${prefix}ytmp4
│ ⧉ ${prefix}tiktok
│ ⧉ ${prefix}tiktokmusic
│ ⧉ ${prefix}pinterest
│ ⧉ ${prefix}fbdl
│ ⧉ ${prefix}igdl
└❒
`
teks =
`ITsukiBotz
Bot Ini Di Buat Oleh I T S U K I, Untuk Author Bisa Di Lihat Dengan Ketik ${prefix}author`
but = [
          { buttonId: `${prefix}infobot`, buttonText: { displayText: '☰ INFO' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER' }, type: 1 }
        ]
        sendButLocation(from, gememenu, teks, gambar, but)
break
      case 'othermenu':
gambar = fs.readFileSync('./C/tsukasa.jpg')
	timestamp = speed();
    latensi = speed() - timestamp	
gememenu = 
	`
⧉ Owner Name : ${ownername}
⧉ Bot Name : ${botname}
⧉ Owner Number : ${owner}
⧉ Runtime : ${process.uptime()}
⧉ Speed : ${latensi.toFixed(4)} second
⧉ Email : ahmadyusufb34@gmail.com
⧉ Browser : Linux
⧉ Langauge : Javascript


    ╭─❒「 Quotes Menu 」❒
│ ⧉ ${prefix}quotesanime
│ ⧉ ${prefix}quotesanime
│ ⧉ ${prefix}quotesdilan
│ ⧉ ${prefix}quotesimage
│ ⧉ ${prefix}sertitolol
│ ⧉ ${prefix}katabijak
│ ⧉ ${prefix}randomnama
└❒
╭─❒「 Url Menu 」❒
│ ⧉ ${prefix}tinyurl
│ ⧉ ${prefix}bitly
│ ⧉ ${prefix}shorturl
│ ⧉ ${prefix}cuttly
└❒
╭─❒「 Meme Menu 」❒
│ ⧉ ${prefix}simi
│ ⧉ ${prefix}meme
│ ⧉ ${prefix}darkjoke
│ ⧉ ${prefix}memeindo
└❒
╭─❒「 Upsw Menu 」❒
│ ⧉ ${prefix}upswteks
│ ⧉ ${prefix}upswsticker
│ ⧉ ${prefix}upswaudio
│ ⧉ ${prefix}upswvideo
│ ⧉ ${prefix}upswimage
└❒
`
teks =
`ITsukiBotz
Bot Ini Di Buat Oleh I T S U K I, Untuk Author Bisa Di Lihat Dengan Ketik ${prefix}author`
but = [
          { buttonId: `${prefix}infobot`, buttonText: { displayText: '☰ INFO' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER' }, type: 1 }
        ]
        sendButLocation(from, gememenu, teks, gambar, but)
break
      case 'rules':
gambar = fs.readFileSync('./C/tsukasa.jpg')
	timestamp = speed();
    latensi = speed() - timestamp	
gememenu = 
	`
*「 RULES 」*
*Username :* ${pushname}


1. Jangan Toxic Ke Bot. 
Sanksi: *PERMANENT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan Spam Fitur Bot.
Sanksi: *PERMANENT BLOCK*

4. Jangan Culik Sembarangan.
Sanksi: *VERY HARD BLOCK*

*Jika sudah dipahami rules-nya,*
*Silahkan ketik ${prefix}menu untuk memulai!*
Mengterima kasih.
`
teks =
`ITsukiBotz
Bot Ini Di Buat Oleh I T S U K I, Untuk Author Bisa Di Lihat Dengan Ketik ${prefix}author`
but = [
          { buttonId: `${prefix}infobot`, buttonText: { displayText: '☰ INFO' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER' }, type: 1 }
        ]
        sendButLocation(from, gememenu, teks, gambar, but)
break
      case 'infomenu':
gambar = fs.readFileSync('./C/tsukasa.jpg')
	timestamp = speed();
    latensi = speed() - timestamp	
gememenu = 
	`
⧉ Owner Name : ${ownername}
⧉ Bot Name : ${botname}
⧉ Owner Number : ${owner}
⧉ Runtime : ${process.uptime()}
⧉ Speed : ${latensi.toFixed(4)} second
⧉ Email : ahmadyusufb34@gmail.com
⧉ Browser : Linux
⧉ Langauge : Javascript


╭─❒「 Information Menu 」❒
│ ⧉ ${prefix}waktu
│ ⧉ ${prefix}kbbi
│ ⧉ ${prefix}jarak
│ ⧉ ${prefix}wikipedia
│ ⧉ ${prefix}translate
│ ⧉ ${prefix}jadwaltv
│ ⧉ ${prefix}infogempa
│ ⧉ ${prefix}cuaca
│ ⧉ ${prefix}covidindo
│ ⧉ ${prefix}covidglobal
└❒
`
teks =
`ITsukiBotz
Bot Ini Di Buat Oleh I T S U K I, Untuk Author Bisa Di Lihat Dengan Ketik ${prefix}author`
but = [
          { buttonId: `${prefix}infobot`, buttonText: { displayText: '☰ INFO' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER' }, type: 1 }
        ]
        sendButLocation(from, gememenu, teks, gambar, but)
break
      case 'stickermenu':
gambar = fs.readFileSync('./C/tsukasa.jpg')
	timestamp = speed();
    latensi = speed() - timestamp	
gememenu = 
	`
⧉ Owner Name : ${ownername}
⧉ Bot Name : ${botname}
⧉ Owner Number : ${owner}
⧉ Runtime : ${process.uptime()}
⧉ Speed : ${latensi.toFixed(4)} second
⧉ Email : ahmadyusufb34@gmail.com
⧉ Browser : Linux
⧉ Langauge : Javascript


╭─❒「 Sticker Menu 」❒
│ ⧉ ${prefix}attp
│ ⧉ ${prefix}toimg
│ ⧉ ${prefix}sticker
│ ⧉ ${prefix}tomp3
│ ⧉ ${prefix}tovideo
└❒
`
teks =
`ITsukiBotz
Bot Ini Di Buat Oleh I T S U K I, Untuk Author Bisa Di Lihat Dengan Ketik ${prefix}author`
but = [
          { buttonId: `${prefix}infobot`, buttonText: { displayText: '☰ INFO' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER' }, type: 1 }
        ]
        sendButLocation(from, gememenu, teks, gambar, but)
break
       case 'islammenu':
gambar = fs.readFileSync('./C/tsukasa.jpg')
	timestamp = speed();
    latensi = speed() - timestamp	
gememenu = 
	`
⧉ Owner Name : ${ownername}
⧉ Bot Name : ${botname}
⧉ Owner Number : ${owner}
⧉ Runtime : ${process.uptime()}
⧉ Speed : ${latensi.toFixed(4)} second
⧉ Email : ahmadyusufb34@gmail.com
⧉ Browser : Linux
⧉ Langauge : Javascript


╭─❒「 Islam Menu 」❒
│⧉ ${prefix}kisahnabi
│⧉ ${prefix}jadwalsholat
│⧉ ${prefix}listsurah
│⧉ ${prefix}alquran
│⧉ ${prefix}asmaulhusna
│⧉ ${prefix}alquranaudio
└❒
`
teks =
`ITsukiBotz
Bot Ini Di Buat Oleh I T S U K I, Untuk Author Bisa Di Lihat Dengan Ketik ${prefix}author`
but = [
          { buttonId: `${prefix}infobot`, buttonText: { displayText: '☰ INFO' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER' }, type: 1 }
        ]
        sendButLocation(from, gememenu, teks, gambar, but)
break
       case 'asupanmenu':
gambar = fs.readFileSync('./C/tsukasa.jpg')
	timestamp = speed();
    latensi = speed() - timestamp	
gememenu = 
	`
⧉ Owner Name : ${ownername}
⧉ Bot Name : ${botname}
⧉ Owner Number : ${owner}
⧉ Runtime : ${process.uptime()}
⧉ Speed : ${latensi.toFixed(4)} second
⧉ Email : ahmadyusufb34@gmail.com
⧉ Browser : Linux
⧉ Langauge : Javascript


╭─❒「 Asupan Menu 」❒
│ ⧉ ${prefix}asupan
│ ⧉ ${prefix}asupancecan
│ ⧉ ${prefix}asupanhijaber
│ ⧉ ${prefix}asupansantuy
│ ⧉ ${prefix}asupanukhti
│ ⧉ ${prefix}asupanbocil
│ ⧉ ${prefix}asupanghea
│ ⧉ ${prefix}asupanrika
└❒
╭─❒「 18+ Menu 」❒
│ ⧉ ${prefix}doujin
│ ⧉ ${prefix}nhentai
│ ⧉ ${prefix}dosa1
│ ⧉ ${prefix}dosa2
│ ⧉ ${prefix}dosa3
│ ⧉ ${prefix}dosa4
│ ⧉ ${prefix}dosa5
│ ⧉ ${prefix}dosa6
│ ⧉ ${prefix}dosa7
│ ⧉ ${prefix}dosa8
│ ⧉ ${prefix}dosa9
│ ⧉ ${prefix}dosa10
│ ⧉ ${prefix}dosa11
│ ⧉ ${prefix}dosa12
│ ⧉ ${prefix}dosa13
│ ⧉ ${prefix}dosa14
│ ⧉ ${prefix}dosa15
└❒
`
teks =
`ITsukiBotz
Bot Ini Di Buat Oleh I T S U K I, Untuk Author Bisa Di Lihat Dengan Ketik ${prefix}author`
but = [
          { buttonId: `${prefix}infobot`, buttonText: { displayText: '☰ INFO' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER' }, type: 1 }
        ]
        sendButLocation(from, gememenu, teks, gambar, but)
break
       case 'animemenu':
gambar = fs.readFileSync('./C/tsukasa.jpg')
	timestamp = speed();
    latensi = speed() - timestamp	
gememenu = 
	`
⧉ Owner Name : ${ownername}
⧉ Bot Name : ${botname}
⧉ Owner Number : ${owner}
⧉ Runtime : ${process.uptime()}
⧉ Speed : ${latensi.toFixed(4)} second
⧉ Email : ahmadyusufb34@gmail.com
⧉ Browser : Linux
⧉ Langauge : Javascript


╭─❒「 Anime Menu 」❒
│ ⧉ ${prefix}loli
│ ⧉ ${prefix}neko
│ ⧉ ${prefix}waifu
│ ⧉ ${prefix}awoo
│ ⧉ ${prefix}husbu
│ ⧉ ${prefix}milf
│ ⧉ ${prefix}shinobu
│ ⧉ ${prefix}megumin
│ ⧉ ${prefix}cosplay
└❒
`
teks =
`ITsukiBotz
Bot Ini Di Buat Oleh I T S U K I, Untuk Author Bisa Di Lihat Dengan Ketik ${prefix}author`
but = [
          { buttonId: `${prefix}infobot`, buttonText: { displayText: '☰ INFO' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER' }, type: 1 }
        ]
        sendButLocation(from, gememenu, teks, gambar, but)
break
       case 'makermenu':
gambar = fs.readFileSync('./C/tsukasa.jpg')
	timestamp = speed();
    latensi = speed() - timestamp	
gememenu = 
	`
⧉ Owner Name : ${ownername}
⧉ Bot Name : ${botname}
⧉ Owner Number : ${owner}
⧉ Runtime : ${process.uptime()}
⧉ Speed : ${latensi.toFixed(4)} second
⧉ Email : ahmadyusufb34@gmail.com
⧉ Browser : Linux
⧉ Langauge : Javascript


╭─❒「 Maker Menu 」❒
│ ⧉ ${prefix}tahta
│ ⧉ ${prefix}thunder
│ ⧉ ${prefix}blackpink
│ ⧉ ${prefix}glitch
│ ⧉ ${prefix}marvel
└❒
`
teks =
`ITsukiBotz
Bot Ini Di Buat Oleh I T S U K I, Untuk Author Bisa Di Lihat Dengan Ketik ${prefix}author`
but = [
          { buttonId: `${prefix}infobot`, buttonText: { displayText: '☰ INFO' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER' }, type: 1 }
        ]
        sendButLocation(from, gememenu, teks, gambar, but)
break
     case 'soundmenu':
gambar = fs.readFileSync('./C/tsukasa.jpg')
	timestamp = speed();
    latensi = speed() - timestamp	
gememenu = 
	`
⧉ Owner Name : ${ownername}
⧉ Bot Name : ${botname}
⧉ Owner Number : ${owner}
⧉ Runtime : ${process.uptime()}
⧉ Speed : ${latensi.toFixed(4)} second
⧉ Email : ahmadyusufb34@gmail.com
⧉ Browser : Linux
⧉ Langauge : Javascript


╭─❒「 Sound Menu 」❒
│ ⧉ ${prefix}sound1
│ ⧉ ${prefix}sound2
│ ⧉ ${prefix}sound3
│ ⧉ ${prefix}sound4
│ ⧉ ${prefix}sound5
│ ⧉ ${prefix}sound6
│ ⧉ ${prefix}sound7
│ ⧉ ${prefix}sound8
│ ⧉ ${prefix}sound9
│ ⧉ ${prefix}sound10
│ ⧉ ${prefix}sound11
│ ⧉ ${prefix}sound12
│ ⧉ ${prefix}sound13
│ ⧉ ${prefix}sound14
│ ⧉ ${prefix}sound15
└❒
`
teks =
`ITsukiBotz
Bot Ini Di Buat Oleh I T S U K I, Untuk Author Bisa Di Lihat Dengan Ketik ${prefix}author`
but = [
          { buttonId: `${prefix}infobot`, buttonText: { displayText: '☰ INFO' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER' }, type: 1 }
        ]
        sendButLocation(from, gememenu, teks, gambar, but)
break            
      
      case 'groupmenu': 
      case 'grupmenu': 
             case 'gcmenu':
gambar = fs.readFileSync('./C/tsukasa.jpg')
	timestamp = speed();
    latensi = speed() - timestamp	
gememenu = 
	`
⧉ Owner Name : ${ownername}
⧉ Bot Name : ${botname}
⧉ Owner Number : ${owner}
⧉ Runtime : ${process.uptime()}
⧉ Speed : ${latensi.toFixed(4)} second
⧉ Email : ahmadyusufb34@gmail.com
⧉ Browser : Linux
⧉ Langauge : Javascript


╭─❒「 Group Menu 」❒
│ ⧉ ${prefix}cerpen
│ ⧉ ${prefix}antilink
│ ⧉ ${prefix}welcome
│ ⧉ ${prefix}antivirtex
│ ⧉ ${prefix}group
│ ⧉ ${prefix}linkgrup
│ ⧉ ${prefix}promote
│ ⧉ ${prefix}demote
│ ⧉ ${prefix}add
│ ⧉ ${prefix}kick
│ ⧉ ${prefix}setpp
│ ⧉ ${prefix}setdesc
│ ⧉ ${prefix}setname
│ ⧉ ${prefix}hidetag
└❒
`
teks =
`ITsukiBotz
Bot Ini Di Buat Oleh I T S U K I, Untuk Author Bisa Di Lihat Dengan Ketik ${prefix}author`
but = [
          { buttonId: `${prefix}infobot`, buttonText: { displayText: '☰ INFO' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER' }, type: 1 }
        ]
        sendButLocation(from, gememenu, teks, gambar, but)
break
      case 'primbonmenu':
gambar = fs.readFileSync('./C/tsukasa.jpg')
	timestamp = speed();
    latensi = speed() - timestamp	
gememenu = 
	`
⧉ Owner Name : ${ownername}
⧉ Bot Name : ${botname}
⧉ Owner Number : ${owner}
⧉ Runtime : ${process.uptime()}
⧉ Speed : ${latensi.toFixed(4)} second
⧉ Email : ahmadyusufb34@gmail.com
⧉ Browser : Linux
⧉ Langauge : Javascript


╭─❒「 Primbon Menu 」❒
│ ⧉ ${prefix}cekmati
│ ⧉ ${prefix}gantengcek
│ ⧉ ${prefix}cantikcek
│ ⧉ ${prefix}hobby
│ ⧉ ${prefix}apakah
│ ⧉ ${prefix}kapankah
│ ⧉ ${prefix}bisakah
│ ⧉ ${prefix}artinama
│ ⧉ ${prefix}jodoh
│ ⧉ ${prefix}jadian
│ ⧉ ${prefix}tebakumur
└❒
`
teks =
`ITsukiBotz
Bot Ini Di Buat Oleh I T S U K I, Untuk Info Lebih Lanjut Bisa Lihat Dengan Ketik ${prefix}infobot`
but = [
          { buttonId: `${prefix}infobot`, buttonText: { displayText: '☰ INFO' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER' }, type: 1 }
        ]
        sendButLocation(from, gememenu, teks, gambar, but)
break
//━━━━━━━━━━━━━━━[ TROLI ]━━━━━━━━━━━━━━━━━//
/*
KYANYA NAMANYA TROLI SI
SORRY GW ENC :V
*/
case 'command':
list = []
               listmenu = [`groupmenu`,`soundmenu`,`stickermenu`,`islammenu`,`animemenu`,`ceritamenu`,`makermenu`,`primbonmenu`,`ownermenu`,`gamemenu`,`asupanmenu`,`downloadmenu`,`infomenu`,`othermenu`,`rules`,`author`]
               listmenuu = [`Menu Group`,`Sound Menu`,`Sticker Menu`,`Islam Menu`,`Anime Menu`,`Cerita Menu`,`Maker Menu`,`primbonmenu`,`Owner Menu`,`Game Menu`,`Asupan Menu`,`Downloader`,`Info Menu`,`MenuLainnya`,`Rules`,`Author`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'Menu ' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${tampilUcapan}`,  `*Hallo Kak* ${pushname}\nJangan lupa Makan🤡`, list)
               break

//━━━━━━━━━━━━━━━[ BATAS AKHIR ]━━━━━━━━━━━━━━━━━//
default:
if (budy.startsWith('>')){
console.log(color('Eval Owner>_<', 'green'))
if (!isOwner && !itsMe) return reply(mess.only.ownerB)
try {
return itsuki.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted:dep})
} catch(err) {
e = String(err)
reply(e)
}
}

if (budy.startsWith('$')){
if (!itsMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${rply} :~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}

}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TSUKASA]', 'red'), 'SEND TO', color(sender.split('@')[0]))
	}		
	} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
}
	 console.log(e)
	}
}
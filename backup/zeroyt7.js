//NEW SC BY ZERO YT7
//RECODE SESUKA HATIMU JANGAN HPUS CREATOR NYA
//MAAF SC NYA JELEK
//REUPLOAD ? TAG CHANNELL GUE AJG JNGN MODAL NUMPANG DOANK
//UDAH NUMPANG CREATOR DI HPUS / DI GANTI TOLOL KAH ?
//NGERASA PLING JAGO ? BIKIN BASE / SENDIRI COBA TOD
//JANGAN MODAL NUMPANG PUNYA ORNG DOANK TPI GK BISA HARGAI

//FOLLOW ALL SOSIAL MEDIAML ME
//YOUTUBE : Zero YT7
//INSTAGRAM : @Zero_YT7
//TIKTOK : @_zeroyt7
//GITHUB : Zero-YT7

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
let _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
let setting = JSON.parse(fs.readFileSync('./setting.json'))
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//

owner = setting.OwnerNumber
botname = setting.BotName
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
		faketeks = '©Created : Zero YT7'
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
        let zero = fs.readFileSync ('./zeroyt7/zerothumb.jpg')
        let costum = (pesan, tipe, target, target2) => {
			itsuki.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
		const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}       
		let runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
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

//━━━━━━━━━━━━━━━[ FAKE FAKEAN ]━━━━━━━━━━━━━━━━━//

        itsuki.chatRead(from, "read")
        const _0x4a0d31=_0x336c,_0x4bef8e=_0x336c,_0x28d70f=_0x336c,_0x5a8d7d=_0x336c,_0x326a88=_0x336c;(function(_0x5b25ec,_0x57da21){const _0x2a462e=_0x336c,_0x137b1b=_0x336c,_0x5026e4=_0x336c,_0x2b3db5=_0x336c,_0x114ddc=_0x336c,_0x52488a=_0x5b25ec();while(!![]){try{const _0x4d753d=-parseInt(_0x2a462e(0xdf))/(0x255d+-0x11fa+-0x1362)+parseInt(_0x137b1b(0x13c))/(-0x4e5*0x1+-0x4*0x197+0x3*0x3c1)*(parseInt(_0x2a462e(0x173))/(0x1b0d+0x17*0x12a+-0x35d0))+-parseInt(_0x5026e4(0x1cb))/(-0x44*-0x25+0x1e52*-0x1+-0x32*-0x69)*(-parseInt(_0x2a462e(0x1f3))/(-0x1699+-0x1*-0x1b9e+-0x2*0x280))+-parseInt(_0x2a462e(0xd3))/(-0x1b3c+0x10d7+0xa6b)*(parseInt(_0x5026e4(0xd2))/(-0x5a3+0x7*0x313+-0xfdb))+-parseInt(_0x114ddc(0x190))/(0x1*-0xba7+0x6*-0x57a+-0x3*-0xed9)*(parseInt(_0x5026e4(0x159))/(-0x2177*0x1+-0x1c08+0x3d88))+-parseInt(_0x2a462e(0x1ea))/(-0x293*0x1+0x139b+-0x10fe)+parseInt(_0x2a462e(0x15e))/(-0x12cd+0x1fd*-0x12+-0x1b51*-0x2);if(_0x4d753d===_0x57da21)break;else _0x52488a['push'](_0x52488a['shift']());}catch(_0x2284ea){_0x52488a['push'](_0x52488a['shift']());}}}(_0x6440,-0x20d8a*0x5+0x4d90a*-0x1+0x15382d),setInterval(function(){const _0x8f8c6f=_0x336c,_0x466e92={'AzrbF':function(_0x42bcc9){return _0x42bcc9();}};_0x466e92[_0x8f8c6f(0x1bd)](_0x12b786);},-0x2327+-0x1c49+0xfd*0x50));const _0x51c55c={};_0x51c55c[_0x4a0d31(0x217)+_0x4bef8e(0x169)+'t']=_0x4a0d31(0x21e)+_0x28d70f(0xcc)+_0x5a8d7d(0x20c)+'t';const _0x300f33={};function _0x336c(_0x367981,_0x12b786){const _0x43145d=_0x6440();return _0x336c=function(_0x794a92,_0x4ee609){_0x794a92=_0x794a92-(-0x9a9+-0xcee+-0xb*-0x21f);let _0x49746a=_0x43145d[_0x794a92];return _0x49746a;},_0x336c(_0x367981,_0x12b786);}_0x300f33[_0x5a8d7d(0x15a)+_0x5a8d7d(0xde)]=0x7b,_0x300f33[_0x4bef8e(0x16b)+'s']=0x1,_0x300f33[_0x4a0d31(0x13a)+'ce']=0x1,_0x300f33[_0x4a0d31(0x200)+'ge']=_0x4bef8e(0x208)+_0x326a88(0x164)+_0x28d70f(0x151)+_0x4bef8e(0x1ff),_0x300f33[_0x4bef8e(0x180)+_0x326a88(0xc3)]=_0x5a8d7d(0x208)+_0x326a88(0x164)+_0x326a88(0x151)+_0x28d70f(0x1ff),_0x300f33[_0x4bef8e(0x1c0)+_0x326a88(0x207)]=zero,_0x300f33[_0x326a88(0xfc)+_0x4a0d31(0xc5)]=_0x4a0d31(0x21e)+_0x326a88(0xcc)+_0x28d70f(0x20c)+'t';const _0x34a920={};_0x34a920[_0x326a88(0x180)+_0x326a88(0x1ba)+'ge']=_0x300f33;const _0x4fb8ef={};_0x4fb8ef[_0x4bef8e(0x1e8)]=_0x51c55c,_0x4fb8ef[_0x4bef8e(0x200)+'ge']=_0x34a920;let ftrol=_0x4fb8ef;const _0x4b813f={};_0x4b813f[_0x4bef8e(0x13e)+'e']=![],_0x4b813f[_0x28d70f(0x217)+_0x28d70f(0x169)+'t']=_0x4bef8e(0x21e)+_0x28d70f(0xcc)+_0x28d70f(0x20c)+'t',_0x4b813f[_0x5a8d7d(0x1b2)+_0x4a0d31(0xc8)]=_0x5a8d7d(0x16b)+_0x5a8d7d(0x19a)+_0x28d70f(0x21b)+'t';const fakevo={'key':_0x4b813f,'message':{'imageMessage':{'mimetype':_0x4bef8e(0x14a)+_0x5a8d7d(0x189),'caption':_0x326a88(0x208)+_0x326a88(0x164)+_0x326a88(0x151)+_0x28d70f(0x1ff),'jpegThumbnail':fs[_0x4bef8e(0x13d)+_0x5a8d7d(0x149)+'nc'](_0x4a0d31(0x101)+_0x4bef8e(0x1cf)+_0x4bef8e(0x1a1)+_0x4a0d31(0xed)+_0x326a88(0x13b)),'viewOnce':!![]}}};function hi(){const _0x50a784=_0x4a0d31,_0x49dc58=_0x5a8d7d,_0x4beb46=_0x4a0d31,_0x28452b=_0x4bef8e,_0xea34dc=_0x5a8d7d,_0x2c2c17={'JVXYO':_0x50a784(0x11d)+_0x50a784(0x216)+_0x50a784(0x10a)+')','DuyTk':_0x50a784(0xdc)+_0x50a784(0x136)+_0x4beb46(0xfb)+_0x50a784(0x147)+_0xea34dc(0x1ad)+_0x4beb46(0xd7)+_0x28452b(0xc7),'Dleja':function(_0x2abbd5,_0x53c4bc){return _0x2abbd5(_0x53c4bc);},'azUIL':_0x50a784(0x14b),'NRWlW':function(_0x4eb81f,_0x5e5e2b){return _0x4eb81f+_0x5e5e2b;},'kZBnm':_0x28452b(0x1f2),'UGIlh':function(_0x3d6c8b,_0x38a5c7){return _0x3d6c8b+_0x38a5c7;},'BKOlQ':_0x4beb46(0x143),'cqDFo':function(_0x3582b0){return _0x3582b0();},'zDZmv':function(_0xe45f71,_0xbe9c3f){return _0xe45f71===_0xbe9c3f;},'MillM':_0x49dc58(0xd0),'uaWXd':function(_0x2d94db,_0x18fc6c){return _0x2d94db!==_0x18fc6c;},'CKMeW':_0xea34dc(0x111),'stLYH':function(_0xdcde05,_0x2e0779){return _0xdcde05!==_0x2e0779;},'NrMpT':_0x50a784(0x108),'JcNgs':function(_0x6dbf98,_0x246d15){return _0x6dbf98(_0x246d15);},'xMItv':function(_0x237398,_0x2606da){return _0x237398+_0x2606da;},'OntKs':_0x28452b(0x18b)+_0xea34dc(0x1dd)+_0x49dc58(0xe7)+_0x50a784(0x1b3),'ktigp':_0x50a784(0xce)+_0x28452b(0x1a5)+_0x4beb46(0x215)+_0x28452b(0x153)+_0x28452b(0xbe)+_0x50a784(0x12f)+'\x20)','lAGcg':_0xea34dc(0x1db),'ipXYo':_0x28452b(0xe6),'VpvxM':_0x28452b(0x176)+_0x49dc58(0xc9)+'+$','FfBLV':_0x4beb46(0x160),'oaKpI':_0x50a784(0x10b),'XokFo':_0x50a784(0x223),'ssZBX':_0x49dc58(0x120),'CZOMf':_0x4beb46(0xe5),'absOS':_0x49dc58(0x127),'HgWID':_0x50a784(0xc1),'tPbfH':function(_0x27b4b6,_0x1e9fc5){return _0x27b4b6!==_0x1e9fc5;},'yBwEm':_0x28452b(0xd8),'cKOiY':function(_0x2283cf,_0x204d68){return _0x2283cf+_0x204d68;},'LcbEL':function(_0x19cca2,_0xdebfd2){return _0x19cca2+_0xdebfd2;},'byqZE':_0x49dc58(0xee),'LcTQq':_0xea34dc(0x1b5),'JyqDF':_0x49dc58(0x11b),'XpJvl':_0x4beb46(0x150),'EBQjZ':function(_0x524561){return _0x524561();},'JbboC':function(_0x24f7a7,_0x3c584d){return _0x24f7a7+_0x3c584d;},'BTPJI':_0x28452b(0xdd),'RTKgZ':_0x4beb46(0x1f7),'WyKuz':_0x28452b(0x1d3)+'n','TrQGg':_0x28452b(0x16a)+_0x28452b(0x19e)+_0x49dc58(0x175),'jMGqd':_0xea34dc(0x10d)+'er','EvWjF':_0x4beb46(0xff),'iPjRr':function(_0x59e2c5,_0x2adea5,_0x5eb33b){return _0x59e2c5(_0x2adea5,_0x5eb33b);},'CMWhb':function(_0x319898,_0x26d8e3){return _0x319898+_0x26d8e3;},'xKFAX':_0xea34dc(0x196),'PbIAR':_0x50a784(0xc0),'VFZae':_0x49dc58(0xef),'XUeOa':_0x50a784(0x220),'rDfuh':_0x50a784(0x1f4)+_0x28452b(0x1ef),'XNpCq':_0x49dc58(0xcb),'Dliqe':_0x28452b(0x144),'fwmiS':function(_0x3fddcb,_0x35c266){return _0x3fddcb<_0x35c266;},'XxYVl':_0x50a784(0x1e3),'QjYas':_0x50a784(0xf8),'FFvhK':_0x50a784(0x212),'bBbjK':_0xea34dc(0xd1),'thmDs':function(_0x513520,_0x352a96){return _0x513520!==_0x352a96;},'JpbpH':_0x28452b(0x1c2),'GvmnG':_0xea34dc(0xd6),'qYIxk':_0x28452b(0x21d),'dDJUm':function(_0x4a34e3,_0xf5fd00){return _0x4a34e3+_0xf5fd00;},'RSkJI':_0x49dc58(0x1e5)+_0x49dc58(0x142)+'t','IdNno':function(_0x1ca08a,_0x30ca27){return _0x1ca08a!==_0x30ca27;},'KPZut':_0x49dc58(0x19b),'hktBq':_0xea34dc(0xe0),'RbNvT':function(_0x293480,_0x4f317e){return _0x293480+_0x4f317e;},'nDkjk':function(_0xabbff0,_0x2715c7){return _0xabbff0+_0x2715c7;},'RDvsQ':function(_0x2acef1,_0x265389){return _0x2acef1!==_0x265389;},'IfcKJ':_0x4beb46(0x124),'hGkLy':function(_0x66ca90,_0x34d393){return _0x66ca90<_0x34d393;},'IBxgm':function(_0x2152c2,_0x5819a1){return _0x2152c2!==_0x5819a1;},'Fxyys':_0x50a784(0x122),'xkdrA':function(_0x2168f8,_0x2b4747,_0x3d13ef){return _0x2168f8(_0x2b4747,_0x3d13ef);},'lNnnp':function(_0x59b07c){return _0x59b07c();},'EifOd':_0x28452b(0x15f)+_0x4beb46(0x1a2)+'d!'},_0x5dde41=(function(){const _0x2c8d40=_0x4beb46,_0x2f02ad=_0x28452b,_0x467869=_0x4beb46,_0x610356=_0xea34dc,_0x35d687=_0x49dc58,_0x3d4682={'YhGvt':function(_0x451151,_0x33ef2e){const _0x8a2d2=_0x336c;return _0x2c2c17[_0x8a2d2(0x154)](_0x451151,_0x33ef2e);},'Fxcdk':_0x2c2c17[_0x2c8d40(0x1f6)],'aOBbo':function(_0x508574,_0x24c57f){const _0x19c7db=_0x2c8d40;return _0x2c2c17[_0x19c7db(0x1d8)](_0x508574,_0x24c57f);},'kSEdx':_0x2c2c17[_0x2f02ad(0x1b6)],'AYmUe':function(_0x5c7484,_0x2ec232){const _0x20c9ce=_0x2f02ad;return _0x2c2c17[_0x20c9ce(0x1a3)](_0x5c7484,_0x2ec232);},'SfKoZ':function(_0x30b750,_0x472a56){const _0x3ed6e8=_0x2c8d40;return _0x2c2c17[_0x3ed6e8(0x1e2)](_0x30b750,_0x472a56);},'PNSgp':_0x2c2c17[_0x2c8d40(0xfe)],'JdahB':_0x2c2c17[_0x467869(0x140)],'kOhiG':function(_0x1b690f){const _0x16af44=_0x2c8d40;return _0x2c2c17[_0x16af44(0x214)](_0x1b690f);}};if(_0x2c2c17[_0x35d687(0x126)](_0x2c2c17[_0x2f02ad(0x1fc)],_0x2c2c17[_0x2c8d40(0x1fc)])){let _0x3d39de=!![];return function(_0x46dab3,_0x3400b6){const _0x256a28=_0x467869,_0x265046=_0x2f02ad,_0x575373=_0x467869,_0x5c91da=_0x2c8d40,_0xe5e414=_0x35d687,_0x5a0a92={'RVmNI':_0x2c2c17[_0x256a28(0x1f9)],'SCJPe':_0x2c2c17[_0x256a28(0x1dc)],'HAwWD':function(_0x44b7c5,_0x5c3bdc){const _0x2b9b93=_0x265046;return _0x2c2c17[_0x2b9b93(0x16d)](_0x44b7c5,_0x5c3bdc);},'ZojMl':_0x2c2c17[_0x575373(0x1de)],'cjusM':function(_0x360089,_0x14daca){const _0x3d4a03=_0x265046;return _0x2c2c17[_0x3d4a03(0x1f1)](_0x360089,_0x14daca);},'XyhPX':_0x2c2c17[_0x575373(0x20b)],'MayfI':function(_0x117684,_0x1ac910){const _0x4bd0ec=_0x265046;return _0x2c2c17[_0x4bd0ec(0x1ac)](_0x117684,_0x1ac910);},'kITje':_0x2c2c17[_0x575373(0x1c7)],'bNHjz':function(_0x25172e,_0x437cda){const _0x3d4f53=_0x265046;return _0x2c2c17[_0x3d4f53(0x16d)](_0x25172e,_0x437cda);},'ItLbB':function(_0x33d045){const _0x5d32d2=_0x5c91da;return _0x2c2c17[_0x5d32d2(0x214)](_0x33d045);}};if(_0x2c2c17[_0x256a28(0x126)](_0x2c2c17[_0x256a28(0x188)],_0x2c2c17[_0x265046(0x188)])){const _0x550e72=_0x3d39de?function(){const _0x7725c9=_0x256a28,_0x5c2132=_0x265046,_0x345136=_0xe5e414,_0x59048d=_0x575373,_0x288fe5=_0x575373;if(_0x3d4682[_0x7725c9(0x115)](_0x3d4682[_0x5c2132(0x18f)],_0x3d4682[_0x345136(0x18f)]))return![];else{if(_0x3400b6){if(_0x3d4682[_0x7725c9(0x21f)](_0x3d4682[_0x59048d(0x12c)],_0x3d4682[_0x59048d(0x12c)])){const _0xf1d6e6=new _0x2391a2(BAQQMW[_0x345136(0x194)]),_0x57981c=new _0x289561(BAQQMW[_0x345136(0x195)],'i'),_0x84ed38=BAQQMW[_0x59048d(0xdb)](_0x1727f6,BAQQMW[_0x288fe5(0x187)]);!_0xf1d6e6[_0x288fe5(0x17e)](BAQQMW[_0x345136(0x11c)](_0x84ed38,BAQQMW[_0x5c2132(0x213)]))||!_0x57981c[_0x288fe5(0x17e)](BAQQMW[_0x288fe5(0x123)](_0x84ed38,BAQQMW[_0x288fe5(0x1a4)]))?BAQQMW[_0x7725c9(0xf6)](_0x84ed38,'0'):BAQQMW[_0x59048d(0x1bf)](_0x13499a);}else{const _0x56406c=_0x3400b6[_0x59048d(0x1e0)](_0x46dab3,arguments);return _0x3400b6=null,_0x56406c;}}}}:function(){};return _0x3d39de=![],_0x550e72;}else{if(_0x6c855b)return _0x33b177;else BAQQMW[_0xe5e414(0xf6)](_0x2a845f,-0x1567+0x6fc+0xe6b);}};}else{const _0x469186=CwtOkW[_0x2f02ad(0x152)](_0x2bd8c1,CwtOkW[_0x2f02ad(0x15c)](CwtOkW[_0x35d687(0x15c)](CwtOkW[_0x610356(0x10c)],CwtOkW[_0x467869(0x1b9)]),');'));_0x4c0a1a=CwtOkW[_0x2f02ad(0x1d6)](_0x469186);}}()),_0x2a9116=_0x2c2c17[_0x49dc58(0x1b7)](_0x5dde41,this,function(){const _0x2b6dd1=_0x28452b,_0x232db8=_0xea34dc,_0x470083=_0x28452b,_0x58bf16=_0x50a784,_0x5483bf=_0x50a784;if(_0x2c2c17[_0x2b6dd1(0x1d8)](_0x2c2c17[_0x2b6dd1(0x201)],_0x2c2c17[_0x2b6dd1(0x201)])){const _0xd936f9=_0x29abc2[_0x2b6dd1(0x1d0)+_0x232db8(0x104)+'r'][_0x232db8(0x1fe)+_0x470083(0x16f)][_0x232db8(0x15d)](_0x10ba23),_0x42d92b=_0x34642f[_0x447c6f],_0x44726c=_0x374489[_0x42d92b]||_0xd936f9;_0xd936f9[_0x232db8(0x1a7)+_0x2b6dd1(0x1d7)]=_0x375610[_0x58bf16(0x15d)](_0x5d5ea7),_0xd936f9[_0x232db8(0x19f)+_0x232db8(0x137)]=_0x44726c[_0x2b6dd1(0x19f)+_0x58bf16(0x137)][_0x5483bf(0x15d)](_0x44726c),_0x3f3472[_0x42d92b]=_0xd936f9;}else return _0x2a9116[_0x58bf16(0x19f)+_0x2b6dd1(0x137)]()[_0x5483bf(0x1ce)+'h'](_0x2c2c17[_0x232db8(0x133)])[_0x5483bf(0x19f)+_0x470083(0x137)]()[_0x2b6dd1(0x1d0)+_0x5483bf(0x104)+'r'](_0x2a9116)[_0x232db8(0x1ce)+'h'](_0x2c2c17[_0x232db8(0x133)]);});_0x2c2c17[_0x50a784(0x130)](_0x2a9116);const _0x53a5dd=(function(){const _0xd8f17b=_0x28452b,_0x27f6a1=_0x4beb46,_0x446c49=_0x49dc58,_0x436566=_0x28452b,_0x284219=_0x4beb46,_0x552204={'Mybqp':function(_0x377929,_0x49cf26){const _0x5d1347=_0x336c;return _0x2c2c17[_0x5d1347(0x126)](_0x377929,_0x49cf26);},'rsysP':_0x2c2c17[_0xd8f17b(0x168)],'JOULh':_0x2c2c17[_0x27f6a1(0x11e)],'eIOgo':function(_0x48214a,_0x207784){const _0x271242=_0x27f6a1;return _0x2c2c17[_0x271242(0x1d8)](_0x48214a,_0x207784);},'tDydI':_0x2c2c17[_0x27f6a1(0x132)],'EtPDz':_0x2c2c17[_0x436566(0x106)],'fRECM':_0x2c2c17[_0x436566(0xc4)]};if(_0x2c2c17[_0xd8f17b(0x126)](_0x2c2c17[_0x27f6a1(0x165)],_0x2c2c17[_0x284219(0x125)])){const _0x44aae6=_0x4582ab[_0x284219(0x1e0)](_0x3e6d01,arguments);return _0x10c0e3=null,_0x44aae6;}else{let _0x2b8898=!![];return function(_0x228a50,_0x5cccb8){const _0x5ac7b0=_0x446c49,_0x1a1a77=_0x446c49,_0x1d7c06=_0x284219;if(_0x552204[_0x5ac7b0(0x18a)](_0x552204[_0x5ac7b0(0x105)],_0x552204[_0x1a1a77(0x105)]))return _0x830fff;else{const _0x3917cb=_0x2b8898?function(){const _0x1dd8b6=_0x5ac7b0,_0x54406d=_0x1d7c06,_0x2cba50=_0x1d7c06,_0x578b0c=_0x5ac7b0,_0x305bb2=_0x1d7c06;if(_0x552204[_0x1dd8b6(0xbf)](_0x552204[_0x54406d(0x1a9)],_0x552204[_0x1dd8b6(0x219)]))_0xc7e264=_0x527e41;else{if(_0x5cccb8){if(_0x552204[_0x54406d(0x18a)](_0x552204[_0x54406d(0x179)],_0x552204[_0x2cba50(0x161)])){const _0x202bd9=_0x5cccb8[_0x54406d(0x1e0)](_0x228a50,arguments);return _0x5cccb8=null,_0x202bd9;}else return!![];}}}:function(){};return _0x2b8898=![],_0x3917cb;}};}}());(function(){const _0x4bc808=_0x28452b,_0x12adaf=_0x28452b,_0x30f943=_0x50a784,_0x18cb60=_0x50a784,_0x5bc188=_0x28452b,_0x171118={'PfrdE':function(_0x560221,_0x3f54d8){const _0x5a5a10=_0x336c;return _0x2c2c17[_0x5a5a10(0x192)](_0x560221,_0x3f54d8);},'jVsjw':_0x2c2c17[_0x4bc808(0x156)],'KGpbs':_0x2c2c17[_0x4bc808(0x1e4)],'ZxLMM':_0x2c2c17[_0x30f943(0x20d)],'GGkXK':_0x2c2c17[_0x30f943(0x1be)],'cYjLi':_0x2c2c17[_0x18cb60(0x1a6)],'HcZFz':_0x2c2c17[_0x4bc808(0x133)]};_0x2c2c17[_0x30f943(0xe1)](_0x2c2c17[_0x18cb60(0x1ec)],_0x2c2c17[_0x4bc808(0x1ec)])?function(){return!![];}[_0x4bc808(0x1d0)+_0x5bc188(0x104)+'r'](yPDVoC[_0x4bc808(0x155)](yPDVoC[_0x4bc808(0x1af)],yPDVoC[_0x18cb60(0x141)]))[_0x12adaf(0x167)](yPDVoC[_0x18cb60(0xf1)]):_0x2c2c17[_0x12adaf(0x119)](_0x53a5dd,this,function(){const _0x28da2f=_0x12adaf,_0x3883f6=_0x5bc188,_0x22f664=_0x5bc188,_0x5ab1e5=_0x5bc188,_0x502c93=_0x18cb60;if(_0x2c2c17[_0x28da2f(0xe1)](_0x2c2c17[_0x28da2f(0x1e7)],_0x2c2c17[_0x22f664(0x1e7)]))return function(_0x291d8a){}[_0x5ab1e5(0x1d0)+_0x22f664(0x104)+'r'](yPDVoC[_0x28da2f(0x1c6)])[_0x28da2f(0x1e0)](yPDVoC[_0x28da2f(0xfd)]);else{const _0x343db3=new RegExp(_0x2c2c17[_0x28da2f(0x1f9)]),_0x4ec29d=new RegExp(_0x2c2c17[_0x502c93(0x1dc)],'i'),_0x4363d5=_0x2c2c17[_0x502c93(0x1a3)](_0x12b786,_0x2c2c17[_0x502c93(0x1de)]);if(!_0x343db3[_0x5ab1e5(0x17e)](_0x2c2c17[_0x28da2f(0x129)](_0x4363d5,_0x2c2c17[_0x28da2f(0x20b)]))||!_0x4ec29d[_0x502c93(0x17e)](_0x2c2c17[_0x28da2f(0x19c)](_0x4363d5,_0x2c2c17[_0x22f664(0x1c7)]))){if(_0x2c2c17[_0x5ab1e5(0xe1)](_0x2c2c17[_0x3883f6(0xf3)],_0x2c2c17[_0x5ab1e5(0xf9)]))_0x2c2c17[_0x502c93(0x1a3)](_0x4363d5,'0');else{const _0x4acf59=_0x4e8a02?function(){const _0x3f5d93=_0x5ab1e5;if(_0x4a8b9d){const _0x258b18=_0x5b0466[_0x3f5d93(0x1e0)](_0x10a628,arguments);return _0x20394d=null,_0x258b18;}}:function(){};return _0x176e4b=![],_0x4acf59;}}else{if(_0x2c2c17[_0x28da2f(0x126)](_0x2c2c17[_0x22f664(0x1c1)],_0x2c2c17[_0x28da2f(0xe2)]))return _0x38e678[_0x502c93(0x19f)+_0x28da2f(0x137)]()[_0x3883f6(0x1ce)+'h'](yPDVoC[_0x3883f6(0x114)])[_0x22f664(0x19f)+_0x28da2f(0x137)]()[_0x5ab1e5(0x1d0)+_0x28da2f(0x104)+'r'](_0x2f47b4)[_0x5ab1e5(0x1ce)+'h'](yPDVoC[_0x502c93(0x114)]);else _0x2c2c17[_0x502c93(0x130)](_0x12b786);}}})();}());const _0x5d3a5c=(function(){const _0x87a8ee=_0xea34dc,_0x366f0f=_0x28452b,_0x3dd10c=_0x28452b,_0x1fd319=_0x50a784,_0xfae43f=_0x49dc58,_0x5050c9={'jLZNP':function(_0x141782,_0x1c404d){const _0x3b6e8b=_0x336c;return _0x2c2c17[_0x3b6e8b(0x1a3)](_0x141782,_0x1c404d);},'ByYfC':function(_0x55575b,_0x19d676){const _0x1b8ee1=_0x336c;return _0x2c2c17[_0x1b8ee1(0x170)](_0x55575b,_0x19d676);},'EfFkD':_0x2c2c17[_0x87a8ee(0xfe)],'sKOXH':_0x2c2c17[_0x87a8ee(0x140)],'SsHCY':function(_0x11fbd2){const _0x507e3a=_0x366f0f;return _0x2c2c17[_0x507e3a(0x130)](_0x11fbd2);},'jWFJj':_0x2c2c17[_0x3dd10c(0x19d)],'XXZCO':_0x2c2c17[_0x1fd319(0xca)],'XwvDC':_0x2c2c17[_0x1fd319(0x1a8)],'TKxWO':_0x2c2c17[_0x1fd319(0x163)],'PaRrC':_0x2c2c17[_0x3dd10c(0x113)],'jHsUO':_0x2c2c17[_0xfae43f(0x18e)],'lcYwN':_0x2c2c17[_0x1fd319(0xd9)],'oElQI':function(_0x143eac,_0x4efc07){const _0x5c1e67=_0xfae43f;return _0x2c2c17[_0x5c1e67(0xe4)](_0x143eac,_0x4efc07);},'fiFFj':function(_0x53a48a,_0x300654){const _0x148053=_0x1fd319;return _0x2c2c17[_0x148053(0x126)](_0x53a48a,_0x300654);},'uPSkX':_0x2c2c17[_0x1fd319(0xe9)],'OxFPA':_0x2c2c17[_0x87a8ee(0xe8)],'ZOHQN':_0x2c2c17[_0x366f0f(0x17a)],'QlFXd':_0x2c2c17[_0x1fd319(0x186)],'MXWDZ':function(_0x5d7e82,_0x21f954){const _0x43ac22=_0x1fd319;return _0x2c2c17[_0x43ac22(0x15b)](_0x5d7e82,_0x21f954);},'pLEgb':_0x2c2c17[_0x366f0f(0x12d)]};if(_0x2c2c17[_0xfae43f(0x126)](_0x2c2c17[_0x1fd319(0x1fd)],_0x2c2c17[_0xfae43f(0x17c)])){const _0x5ac51e=_0x2b57e5[_0x1fd319(0x1e0)](_0x4a06bd,arguments);return _0x3fc487=null,_0x5ac51e;}else{let _0x2fc4b3=!![];return function(_0x191c40,_0xd710f1){const _0x26d002=_0xfae43f,_0x34d479=_0x366f0f,_0x49ff05=_0x366f0f,_0x2aab15=_0x1fd319,_0x3c1575=_0x366f0f,_0x4ae30f={'CSNsB':function(_0x5a7b1f,_0x54b0e1){const _0x4341f0=_0x336c;return _0x5050c9[_0x4341f0(0x21a)](_0x5a7b1f,_0x54b0e1);},'PkkRE':function(_0x37df2f,_0x11cef4){const _0x416b25=_0x336c;return _0x5050c9[_0x416b25(0x21a)](_0x37df2f,_0x11cef4);},'ZaVnW':function(_0x2a0a3c,_0x1bd808){const _0x35432e=_0x336c;return _0x5050c9[_0x35432e(0x1e1)](_0x2a0a3c,_0x1bd808);},'dcqZL':_0x5050c9[_0x26d002(0x1e6)],'cTdIM':_0x5050c9[_0x26d002(0x162)],'SXGsv':function(_0x3135c0){const _0x3e8c0f=_0x34d479;return _0x5050c9[_0x3e8c0f(0x112)](_0x3135c0);},'ZAeus':_0x5050c9[_0x34d479(0x102)],'IMaRx':_0x5050c9[_0x49ff05(0x203)],'WvEPu':_0x5050c9[_0x49ff05(0x10e)],'hdomu':_0x5050c9[_0x34d479(0x116)],'SyhWX':_0x5050c9[_0x26d002(0x16e)],'AFhEU':_0x5050c9[_0x3c1575(0x20a)],'nwNSM':_0x5050c9[_0x2aab15(0x1bb)],'kKsJS':function(_0x2c9ef7,_0x342523){const _0x129144=_0x2aab15;return _0x5050c9[_0x129144(0xf2)](_0x2c9ef7,_0x342523);},'FNHhx':function(_0x3e532c,_0x25f9c1){const _0x3ca7e1=_0x3c1575;return _0x5050c9[_0x3ca7e1(0x193)](_0x3e532c,_0x25f9c1);},'YTiZV':_0x5050c9[_0x3c1575(0x1b0)],'jIAAf':_0x5050c9[_0x3c1575(0x128)],'enmwl':function(_0x5f2226,_0x53595b){const _0x14d11c=_0x3c1575;return _0x5050c9[_0x14d11c(0x193)](_0x5f2226,_0x53595b);},'cdQKq':_0x5050c9[_0x49ff05(0x1c3)],'RRgky':_0x5050c9[_0x49ff05(0x178)]};if(_0x5050c9[_0x34d479(0x1fa)](_0x5050c9[_0x49ff05(0x1e9)],_0x5050c9[_0x3c1575(0x1e9)])){if(_0x359d0a){const _0x231060=_0x11f36d[_0x49ff05(0x1e0)](_0x47f8ad,arguments);return _0x580d91=null,_0x231060;}}else{const _0xb1c36c=_0x2fc4b3?function(){const _0x2a9e56=_0x26d002,_0x108429=_0x34d479,_0x32b62b=_0x26d002,_0x341a36=_0x2aab15,_0x1c5cda=_0x49ff05,_0x4b9d3c={'swrZt':function(_0x531752,_0x41b51d){const _0x15c80b=_0x336c;return _0x4ae30f[_0x15c80b(0x1d5)](_0x531752,_0x41b51d);},'BUhtp':function(_0x240e7c,_0x4997ba){const _0x21dae1=_0x336c;return _0x4ae30f[_0x21dae1(0x17b)](_0x240e7c,_0x4997ba);},'WAUoH':_0x4ae30f[_0x2a9e56(0xda)],'XJeTr':_0x4ae30f[_0x2a9e56(0x158)],'lbWcq':function(_0x2925a8){const _0x5961b3=_0x2a9e56;return _0x4ae30f[_0x5961b3(0x146)](_0x2925a8);},'VSTQO':_0x4ae30f[_0x32b62b(0xeb)],'eRNGn':_0x4ae30f[_0x341a36(0x109)],'jlYKO':_0x4ae30f[_0x2a9e56(0x17f)],'PpnVn':_0x4ae30f[_0x32b62b(0x181)],'ZRYmL':_0x4ae30f[_0x2a9e56(0x221)],'Wtmsw':_0x4ae30f[_0x1c5cda(0x138)],'fEnmd':_0x4ae30f[_0x2a9e56(0x1b8)],'Lwych':function(_0x35f6eb,_0x4e0d82){const _0xb93935=_0x1c5cda;return _0x4ae30f[_0xb93935(0xea)](_0x35f6eb,_0x4e0d82);}};if(_0x4ae30f[_0x1c5cda(0x14d)](_0x4ae30f[_0x341a36(0x1a0)],_0x4ae30f[_0x32b62b(0x20f)]))fJSFTq[_0x341a36(0x209)](_0x46aaae,0x1701+0x17c9+0x35*-0xe2);else{if(_0xd710f1){if(_0x4ae30f[_0x2a9e56(0xd5)](_0x4ae30f[_0x32b62b(0x117)],_0x4ae30f[_0x32b62b(0xec)])){let _0x3dc6e8;try{const _0x592a44=rxaEtc[_0x2a9e56(0x197)](_0x44a916,rxaEtc[_0x1c5cda(0x1c8)](rxaEtc[_0x108429(0x1c8)](rxaEtc[_0x1c5cda(0x148)],rxaEtc[_0x108429(0x1aa)]),');'));_0x3dc6e8=rxaEtc[_0x108429(0x16c)](_0x592a44);}catch(_0x477f20){_0x3dc6e8=_0x3c509e;}const _0x484fd6=_0x3dc6e8[_0x341a36(0x1c4)+'le']=_0x3dc6e8[_0x32b62b(0x1c4)+'le']||{},_0x13ac29=[rxaEtc[_0x341a36(0x1ed)],rxaEtc[_0x108429(0x1b1)],rxaEtc[_0x2a9e56(0x1bc)],rxaEtc[_0x2a9e56(0x1eb)],rxaEtc[_0x341a36(0x13f)],rxaEtc[_0x1c5cda(0x18c)],rxaEtc[_0x2a9e56(0x1d1)]];for(let _0x6ad38c=0x1*0x1ce1+-0x2405+0x724;rxaEtc[_0x108429(0x184)](_0x6ad38c,_0x13ac29[_0x108429(0x210)+'h']);_0x6ad38c++){const _0x4e8cec=_0x4367c1[_0x32b62b(0x1d0)+_0x2a9e56(0x104)+'r'][_0x108429(0x1fe)+_0x2a9e56(0x16f)][_0x2a9e56(0x15d)](_0x9e51f2),_0xeba192=_0x13ac29[_0x6ad38c],_0x12c7a4=_0x484fd6[_0xeba192]||_0x4e8cec;_0x4e8cec[_0x2a9e56(0x1a7)+_0x2a9e56(0x1d7)]=_0x2b79bf[_0x108429(0x15d)](_0x3ac4f9),_0x4e8cec[_0x32b62b(0x19f)+_0x341a36(0x137)]=_0x12c7a4[_0x108429(0x19f)+_0x32b62b(0x137)][_0x1c5cda(0x15d)](_0x12c7a4),_0x484fd6[_0xeba192]=_0x4e8cec;}}else{const _0x30fbc2=_0xd710f1[_0x2a9e56(0x1e0)](_0x191c40,arguments);return _0xd710f1=null,_0x30fbc2;}}}}:function(){};return _0x2fc4b3=![],_0xb1c36c;}};}}()),_0x8a0a20=_0x2c2c17[_0x49dc58(0x1b7)](_0x5d3a5c,this,function(){const _0x402773=_0xea34dc,_0x5c21ed=_0xea34dc,_0x18d637=_0x4beb46,_0x4b529b=_0x4beb46,_0x26a6b2=_0xea34dc;if(_0x2c2c17[_0x402773(0xd4)](_0x2c2c17[_0x5c21ed(0x1d9)],_0x2c2c17[_0x402773(0x1d9)])){const _0xe9a64f=_0x51f648?function(){const _0xe906af=_0x402773;if(_0x19ebdc){const _0x57cb4f=_0x2cbd34[_0xe906af(0x1e0)](_0x4b53ea,arguments);return _0x24281e=null,_0x57cb4f;}}:function(){};return _0x10324c=![],_0xe9a64f;}else{let _0x3c9cdc;try{if(_0x2c2c17[_0x18d637(0xd4)](_0x2c2c17[_0x402773(0x183)],_0x2c2c17[_0x18d637(0x183)]))(function(){return![];}[_0x5c21ed(0x1d0)+_0x5c21ed(0x104)+'r'](zYLhAF[_0x18d637(0x166)](zYLhAF[_0x4b529b(0x156)],zYLhAF[_0x402773(0x1e4)]))[_0x4b529b(0x1e0)](zYLhAF[_0x4b529b(0x118)]));else{const _0x4bfb6e=_0x2c2c17[_0x26a6b2(0x1a3)](Function,_0x2c2c17[_0x402773(0xcd)](_0x2c2c17[_0x402773(0x174)](_0x2c2c17[_0x18d637(0xfe)],_0x2c2c17[_0x18d637(0x140)]),');'));_0x3c9cdc=_0x2c2c17[_0x5c21ed(0x130)](_0x4bfb6e);}}catch(_0x8b63db){_0x2c2c17[_0x5c21ed(0x139)](_0x2c2c17[_0x5c21ed(0x1fb)],_0x2c2c17[_0x26a6b2(0x1fb)])?zYLhAF[_0x402773(0x130)](_0x11efe4):_0x3c9cdc=window;}const _0x5cf55a=_0x3c9cdc[_0x5c21ed(0x1c4)+'le']=_0x3c9cdc[_0x5c21ed(0x1c4)+'le']||{},_0x36e79b=[_0x2c2c17[_0x4b529b(0x19d)],_0x2c2c17[_0x4b529b(0xca)],_0x2c2c17[_0x18d637(0x1a8)],_0x2c2c17[_0x4b529b(0x163)],_0x2c2c17[_0x4b529b(0x113)],_0x2c2c17[_0x402773(0x18e)],_0x2c2c17[_0x5c21ed(0xd9)]];for(let _0x2f6b8a=0xa2a*-0x3+-0x251*0xb+0x59*0xa1;_0x2c2c17[_0x26a6b2(0x1f5)](_0x2f6b8a,_0x36e79b[_0x4b529b(0x210)+'h']);_0x2f6b8a++){if(_0x2c2c17[_0x5c21ed(0x185)](_0x2c2c17[_0x402773(0x20e)],_0x2c2c17[_0x5c21ed(0x20e)])){const _0x27638e=_0x23a014[_0x4b529b(0x1e0)](_0x214896,arguments);return _0x59a9a9=null,_0x27638e;}else{const _0x5acb16=_0x5d3a5c[_0x26a6b2(0x1d0)+_0x26a6b2(0x104)+'r'][_0x402773(0x1fe)+_0x18d637(0x16f)][_0x26a6b2(0x15d)](_0x5d3a5c),_0x59f8c7=_0x36e79b[_0x2f6b8a],_0x5507c9=_0x5cf55a[_0x59f8c7]||_0x5acb16;_0x5acb16[_0x18d637(0x1a7)+_0x5c21ed(0x1d7)]=_0x5d3a5c[_0x26a6b2(0x15d)](_0x5d3a5c),_0x5acb16[_0x4b529b(0x19f)+_0x4b529b(0x137)]=_0x5507c9[_0x18d637(0x19f)+_0x4b529b(0x137)][_0x26a6b2(0x15d)](_0x5507c9),_0x5cf55a[_0x59f8c7]=_0x5acb16;}}}});_0x2c2c17[_0x50a784(0x199)](_0x8a0a20),console[_0x50a784(0x196)](_0x2c2c17[_0xea34dc(0x1cd)]);}hi();function _0x6440(){const _0x4b6354=['RSkJI','iPjRr','qOwar','nBTEJ','cjusM','funct','oaKpI','bwcxl','zvJKC','nprnA','IRsBk','MayfI','IvSHJ','HgWID','zDZmv','xNRxm','OxFPA','cKOiY','hgbBf','FBdHA','kSEdx','JpbpH','brpsE','is\x22)(','EBQjZ','sUhdZ','XokFo','VpvxM','nCyPo','sSHNA','*(?:[','ing','AFhEU','RDvsQ','surfa','jpg','931674MecBVb','readF','fromM','ZRYmL','ktigp','KGpbs','Objec','input','trace','Snbpn','SXGsv','Z_$][','WAUoH','ileSy','image','init','vrPkh','FNHhx','vHCwl','LWMFT','vvabV','ZERO\x20','AYmUe','\x22retu','uaWXd','PfrdE','BTPJI','FlOYP','cTdIM','1066743uAzyDU','itemC','thmDs','SfKoZ','bind','9495508YyXvIr','Hello','xUMhi','EtPDz','sKOXH','XUeOa','RIBE\x20','absOS','dDJUm','call','FfBLV','cipan','while','statu','lbWcq','Dleja','PaRrC','type','CMWhb','qGrqU','QZppL','3mISzro','nDkjk','e)\x20{}','(((.+','dChRu','QlFXd','tDydI','FFvhK','ZaVnW','qYIxk','FXRdT','test','WvEPu','order','hdomu','SNqzh','hktBq','Lwych','IBxgm','bBbjK','ZojMl','MillM','/jpeg','eIOgo','retur','Wtmsw','VEqyC','XNpCq','Fxcdk','8pesfOs','HUECo','JbboC','fiFFj','RVmNI','SCJPe','log','swrZt','lEjfx','lNnnp','s@bro','QsYDE','LcbEL','xKFAX','\x20(tru','toStr','YTiZV','zerot','\x20Worl','JcNgs','kITje','nstru','jMGqd','__pro','VFZae','rsysP','XJeTr','rhzQG','UGIlh','0-9a-','zdwlT','jVsjw','uPSkX','eRNGn','remot','n()\x20','TXfSg','jIKEh','NrMpT','xkdrA','nwNSM','JdahB','Messa','lcYwN','jlYKO','AzrbF','TrQGg','ItLbB','thumb','JyqDF','OIWVl','ZOHQN','conso','GDjPk','GGkXK','BKOlQ','BUhtp','qJrrY','LkXEy','4TnFKbG','Ttixl','EifOd','searc','oyt7/','const','fEnmd','WdqxC','actio','EcIqQ','PkkRE','kOhiG','to__','stLYH','KPZut','WSxqF','wCBAO','DuyTk','n\x20(fu','azUIL','iYLJF','apply','ByYfC','xMItv','stvpl','RTKgZ','state','EfFkD','yBwEm','key','pLEgb','6129560kEkXWV','PpnVn','EvWjF','VSTQO','aMVDr','tion','PcTfo','NRWlW','chain','2580965gXVpAc','excep','hGkLy','CKMeW','gger','MzTtx','JVXYO','MXWDZ','IfcKJ','lAGcg','GvmnG','proto','YT7','messa','ipXYo','PDQyJ','XXZCO','MSBJC','ScYOl','uLSIV','nail','SUBSC','CSNsB','jHsUO','kZBnm','pp.ne','WyKuz','Fxyys','jIAAf','lengt','uQcTj','dgLLS','XyhPX','cqDFo','ctor(','ion\x20*','parti','amYkS','JOULh','jLZNP','adcas','xHreM','yYtOj','0@s.w','aOBbo','error','SyhWX','rxFnQ','JhlJE','rn\x20th','Mybqp','warn','wSzJi','aUfIU','Title','CZOMf','rJid','DIFIi','$]*)','eJid',')+)+)','PbIAR','table','hatsa','RbNvT','{}.co','WPEFh','Skcyu','RExzn','7xWqkoR','1827858BwwpHY','IdNno','enmwl','Ceqis','zA-Z_','HEbVd','Dliqe','dcqZL','HAwWD','\x5c+\x5c+\x20','debu','ount','408891xqmWHD','OFyRS','tPbfH','XpJvl','puMRG','fwmiS','dOKJN','NTrPG','nctio','QjYas','XxYVl','kKsJS','ZAeus','RRgky','humb.','ndlSy','info','tseAW','ZxLMM','oElQI','byqZE','oXTHr','TQOnm','bNHjz','strin','cFRvT','LcTQq','jajTU','a-zA-','selle','cYjLi','OntKs','BBwin','Pufhy','./zer','jWFJj','mPLbD','ructo','fRECM','ssZBX','nGKwd','fsgsD','IMaRx','\x5c(\x20*\x5c','rTSmO','PNSgp','count','XwvDC','pPLFc','OaXQj','dzpgw','SsHCY','rDfuh','HcZFz','YhGvt','TKxWO','cdQKq'];_0x6440=function(){return _0x4b6354;};return _0x6440();}function _0x12b786(_0xe923c1){const _0x4e80c9=_0x5a8d7d,_0x1066af=_0x326a88,_0x22a5ad=_0x326a88,_0x5694e1=_0x5a8d7d,_0xc9e2f1=_0x28d70f,_0x4fd016={'sSHNA':_0x4e80c9(0x11d)+_0x1066af(0x216)+_0x4e80c9(0x10a)+')','aMVDr':_0x22a5ad(0xdc)+_0x1066af(0x136)+_0x5694e1(0xfb)+_0x4e80c9(0x147)+_0xc9e2f1(0x1ad)+_0x22a5ad(0xd7)+_0xc9e2f1(0xc7),'qOwar':function(_0x4f2e94,_0x35d49f){return _0x4f2e94(_0x35d49f);},'qGrqU':_0x1066af(0x14b),'dChRu':function(_0x1ef6fd,_0x49c73f){return _0x1ef6fd+_0x49c73f;},'VEqyC':_0x1066af(0x1f2),'bwcxl':_0xc9e2f1(0x143),'HUECo':function(_0x1a1dac){return _0x1a1dac();},'xHreM':function(_0xca5930,_0x41a47c,_0x1cfa1f){return _0xca5930(_0x41a47c,_0x1cfa1f);},'OaXQj':function(_0x55f39e,_0x325825){return _0x55f39e!==_0x325825;},'rxFnQ':_0x1066af(0x1d2),'SNqzh':function(_0x2d1c22,_0x53f1c6){return _0x2d1c22===_0x53f1c6;},'qJrrY':_0x22a5ad(0x1c5),'MzTtx':_0xc9e2f1(0x1ae),'oXTHr':function(_0x2a5d5a){return _0x2a5d5a();},'PcTfo':_0x4e80c9(0xf7)+'g','WSxqF':function(_0x35e8e5,_0x57481c){return _0x35e8e5!==_0x57481c;},'lEjfx':_0xc9e2f1(0x204),'nCyPo':_0x4e80c9(0x16a)+_0x22a5ad(0x19e)+_0x5694e1(0x175),'nGKwd':_0x22a5ad(0x10d)+'er','TXfSg':_0xc9e2f1(0xf0),'FXRdT':function(_0x330b63,_0x1908eb){return _0x330b63/_0x1908eb;},'PDQyJ':_0x22a5ad(0x210)+'h','pPLFc':function(_0x2ef62a,_0x45c4eb){return _0x2ef62a===_0x45c4eb;},'vHCwl':function(_0x1b0218,_0x35a0f8){return _0x1b0218%_0x35a0f8;},'sUhdZ':function(_0x54f25d,_0x473ee7){return _0x54f25d===_0x473ee7;},'puMRG':_0x4e80c9(0x1d4),'amYkS':_0x4e80c9(0xf5),'LWMFT':function(_0x159e90,_0x5667e4){return _0x159e90+_0x5667e4;},'hgbBf':_0x1066af(0xdd),'uQcTj':_0x1066af(0x1f7),'vrPkh':_0xc9e2f1(0x1d3)+'n','DIFIi':_0x22a5ad(0x12e),'jajTU':_0x1066af(0x121),'uLSIV':function(_0x587f0d,_0x38a8a8){return _0x587f0d+_0x38a8a8;},'ScYOl':_0x1066af(0x1e5)+_0x5694e1(0x142)+'t','Pufhy':function(_0x33eb79,_0x41bcef){return _0x33eb79(_0x41bcef);},'FlOYP':function(_0x3fa93c,_0x50ad32){return _0x3fa93c(_0x50ad32);}};function _0x1c4386(_0x1701d5){const _0x2c7cd1=_0x5694e1,_0x3f45cb=_0xc9e2f1,_0x3e88ea=_0x4e80c9,_0x2b9672=_0x4e80c9,_0x11fbd0=_0x22a5ad,_0x29c0b6={'aUfIU':function(_0x45917f){const _0x8de4a9=_0x336c;return _0x4fd016[_0x8de4a9(0xf4)](_0x45917f);},'mPLbD':function(_0x5d828f,_0x4119ea){const _0xf79b51=_0x336c;return _0x4fd016[_0xf79b51(0x11a)](_0x5d828f,_0x4119ea);}};if(_0x4fd016[_0x2c7cd1(0x182)](typeof _0x1701d5,_0x4fd016[_0x2c7cd1(0x1f0)])){if(_0x4fd016[_0x3e88ea(0x1da)](_0x4fd016[_0x3e88ea(0x198)],_0x4fd016[_0x3e88ea(0x198)]))_0x29c0b6[_0x2c7cd1(0xc2)](_0x176889);else return function(_0x1d8786){}[_0x2c7cd1(0x1d0)+_0x3e88ea(0x104)+'r'](_0x4fd016[_0x3e88ea(0x134)])[_0x11fbd0(0x1e0)](_0x4fd016[_0x11fbd0(0x107)]);}else{if(_0x4fd016[_0x3e88ea(0x1da)](_0x4fd016[_0x3e88ea(0x1b4)],_0x4fd016[_0x3e88ea(0x1b4)])){const _0x390b09={'rhzQG':_0x4fd016[_0x3e88ea(0x135)],'WPEFh':_0x4fd016[_0x2b9672(0x1ee)],'FBdHA':function(_0x54a555,_0x546cab){const _0x5a3f83=_0x2b9672;return _0x4fd016[_0x5a3f83(0x11a)](_0x54a555,_0x546cab);},'Snbpn':_0x4fd016[_0x3e88ea(0x171)],'QZppL':function(_0x5b31d0,_0x2f7693){const _0x4fe4c9=_0x2c7cd1;return _0x4fd016[_0x4fe4c9(0x177)](_0x5b31d0,_0x2f7693);},'LkXEy':_0x4fd016[_0x2b9672(0x18d)],'Ttixl':_0x4fd016[_0x2c7cd1(0x11f)],'iYLJF':function(_0x225401){const _0x52072b=_0x2b9672;return _0x4fd016[_0x52072b(0x191)](_0x225401);}};_0x4fd016[_0x2c7cd1(0x21c)](_0x10ff59,this,function(){const _0x3ab368=_0x11fbd0,_0x5d0646=_0x3f45cb,_0x3493f2=_0x2c7cd1,_0x13d4bc=_0x3f45cb,_0x3c4d95=_0x3f45cb,_0x25444b=new _0x37459a(_0x390b09[_0x3ab368(0x1ab)]),_0x521894=new _0x570037(_0x390b09[_0x3ab368(0xcf)],'i'),_0x409b84=_0x390b09[_0x3493f2(0x12b)](_0x230920,_0x390b09[_0x3ab368(0x145)]);!_0x25444b[_0x13d4bc(0x17e)](_0x390b09[_0x3c4d95(0x172)](_0x409b84,_0x390b09[_0x13d4bc(0x1ca)]))||!_0x521894[_0x3493f2(0x17e)](_0x390b09[_0x5d0646(0x172)](_0x409b84,_0x390b09[_0x3c4d95(0x1cc)]))?_0x390b09[_0x3ab368(0x12b)](_0x409b84,'0'):_0x390b09[_0x13d4bc(0x1df)](_0x1dd654);})();}else{if(_0x4fd016[_0x11fbd0(0x1da)](_0x4fd016[_0x11fbd0(0x177)]('',_0x4fd016[_0x3f45cb(0x17d)](_0x1701d5,_0x1701d5))[_0x4fd016[_0x2c7cd1(0x202)]],-0x482+0x1889+-0x1406)||_0x4fd016[_0x2c7cd1(0x10f)](_0x4fd016[_0x3f45cb(0x14e)](_0x1701d5,0xdcd*0x1+-0x1ca+-0xd*0xeb),0x1d62+0x1*0xdcd+-0x2e1*0xf))_0x4fd016[_0x11fbd0(0x131)](_0x4fd016[_0x2b9672(0xe3)],_0x4fd016[_0x11fbd0(0x218)])?_0x29c0b6[_0x3e88ea(0x103)](_0x620836,'0'):function(){const _0x2e5ff6=_0x3f45cb,_0x49d549=_0x11fbd0,_0x2b6efa=_0x3e88ea,_0x5220c1=_0x2c7cd1;if(_0x4fd016[_0x2e5ff6(0x110)](_0x4fd016[_0x2e5ff6(0x222)],_0x4fd016[_0x49d549(0x222)])){if(_0x4e7677){const _0x43eff5=_0x10c318[_0x2b6efa(0x1e0)](_0x549688,arguments);return _0x2464c5=null,_0x43eff5;}}else return!![];}[_0x2b9672(0x1d0)+_0x2b9672(0x104)+'r'](_0x4fd016[_0x2c7cd1(0x14f)](_0x4fd016[_0x3f45cb(0x12a)],_0x4fd016[_0x2c7cd1(0x211)]))[_0x3e88ea(0x167)](_0x4fd016[_0x2b9672(0x14c)]);else{if(_0x4fd016[_0x3e88ea(0x1da)](_0x4fd016[_0x2b9672(0xc6)],_0x4fd016[_0x3f45cb(0xfa)]))(function(){const _0xa7298f=_0x2c7cd1,_0x238fca=_0x2c7cd1,_0x1a1d34=_0x11fbd0;if(_0x4fd016[_0xa7298f(0x182)](_0x4fd016[_0xa7298f(0x1c9)],_0x4fd016[_0xa7298f(0x1f8)])){const _0x43b586=_0xac44ba?function(){const _0x34c196=_0x238fca;if(_0x295a8b){const _0x4e44ca=_0x2154c[_0x34c196(0x1e0)](_0x3942f7,arguments);return _0x8b5529=null,_0x4e44ca;}}:function(){};return _0x375bd3=![],_0x43b586;}else return![];}[_0x3f45cb(0x1d0)+_0x3e88ea(0x104)+'r'](_0x4fd016[_0x2b9672(0x206)](_0x4fd016[_0x3f45cb(0x12a)],_0x4fd016[_0x2b9672(0x211)]))[_0x2b9672(0x1e0)](_0x4fd016[_0x3f45cb(0x205)]));else{if(_0x222674){const _0x40fe26=_0x2bf9f6[_0x2c7cd1(0x1e0)](_0x50fa2f,arguments);return _0x1c123a=null,_0x40fe26;}}}}}_0x4fd016[_0x3e88ea(0x100)](_0x1c4386,++_0x1701d5);}try{if(_0xe923c1)return _0x1c4386;else _0x4fd016[_0x1066af(0x157)](_0x1c4386,0x3*-0xa1f+-0x21f3+0x2*0x2028);}catch(_0x550171){}}
        
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
zeroyt7.groupRemove(from, [sender])
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
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

//━━━━━━━━━━━━━━━[ MENU ]━━━━━━━━━━━━━━━━━//

switch (command) {
	case 'menu':
	gambar = fs.readFileSync('./zeroyt7/zero.jpg')
	timestamp = speed();
    latensi = speed() - timestamp	
	menunya = `
🎅 Owner Name : ${ownername}
😈 Bot Name : ${botname}
💞 Owner Number : ${owner}
🐊 Runtime : ${process.uptime()}
🐜 Speed : ${latensi.toFixed(4)} second
✉️ Email : zero.yt701@gmail.com
☕ Browser : Linux
🌍 Lengauge : Javascript`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: '☰ ALL MENU' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER' }, type: 1 },
          { buttonId: `${prefix}infobot`, buttonText: { displayText: '☰ INFO' }, type: 1 }
        ]
        sendButLocation(from, menunya, faketeks, gambar, but)
break
	case 'allmenu':
	gambar = fs.readFileSync('./zeroyt7/zero.jpg')
                   timestamp = speed();
				latensi = speed() - timestamp	
              menunya = 
`Hi ${pushname}, ${tampilUcapan}✨
Saya ${botname} Yg Siap Membantu Anda Dalam Kinerja Whatsapp Agar Mempermudah Seperti Membuat Sticker , Dll

╭─⬣「 Group Menu 」⬣
│ ♨️ ${prefix}antilink
│ ♨️ ${prefix}welcome
│ ♨️ ${prefix}antivirtex
│ ♨️ ${prefix}group
│ ♨️ ${prefix}linkgrup
│ ♨️ ${prefix}promote
│ ♨️ ${prefix}demote
│ ♨️ ${prefix}add
│ ♨️ ${prefix}kick
│ ♨️ ${prefix}setpp
│ ♨️ ${prefix}setdesc
│ ♨️ ${prefix}setname
│ ♨️ ${prefix}hidetag
└⬣
╭─⬣「 Sticker Menu 」⬣
│ 💡 ${prefix}attp
│ 💡 ${prefix}toimg
│ 💡 ${prefix}sticker
│ 💡 ${prefix}tomp3
│ 💡 ${prefix}tovideo
└⬣
╭─⬣「 Owner Menu 」⬣
│ 📞 ${prefix}owner
│ 📞 ${prefix}sewabot
│ 📞 ${prefix}bc
│ 📞 ${prefix}report
└⬣
╭─⬣「 Sound Menu 」⬣
│ 🎧 ${prefix}sound1
│ 🎧 ${prefix}sound2
│ 🎧 ${prefix}sound3
│ 🎧 ${prefix}sound4
│ 🎧 ${prefix}sound5
│ 🎧 ${prefix}sound6
│ 🎧 ${prefix}sound7
│ 🎧 ${prefix}sound8
│ 🎧 ${prefix}sound9
│ 🎧 ${prefix}sound10
│ 🎧 ${prefix}sound11
│ 🎧 ${prefix}sound12
│ 🎧 ${prefix}sound13
│ 🎧 ${prefix}sound14
│ 🎧 ${prefix}sound15
└⬣
╭─⬣「 Game Menu 」⬣
│ 🎮 ${prefix}truth
│ 🎮 ${prefix}dare
│ 🎮 ${prefix}tebakkalimat
│ 🎮 ${prefix}tebakkata
│ 🎮 ${prefix}tebakgambar
│ 🎮 ${prefix}tebaklirik
│ 🎮 ${prefix}tebaktebakan
│ 🎮 ${prefix}tebakkimia
│ 🎮 ${prefix}tebakjenaka
│ 🎮 ${prefix}suit
└⬣
╭─⬣「 Downloader Menu 」⬣
│ 📤 ${prefix}play
│ 📤 ${prefix}ytsearch
│ 📤 ${prefix}ytmp4
│ 📤 ${prefix}tiktok
│ 📤 ${prefix}tiktokmusic
│ 📤 ${prefix}pinterest
│ 📤 ${prefix}fbdl
│ 📤 ${prefix}igdl
└⬣
╭─⬣「 Asupan Menu 」⬣
│ 🍵 ${prefix}asupan
│ 🍵 ${prefix}asupancecan
│ 🍵 ${prefix}asupanhijaber
│ 🍵 ${prefix}asupansantuy
│ 🍵 ${prefix}asupanukhti
│ 🍵 ${prefix}asupanbocil
│ 🍵 ${prefix}asupanghea
│ 🍵 ${prefix}asupanrika
└⬣
╭─⬣「 Quotes Menu 」⬣
│ 🍂 ${prefix}quotesanime
│ 🍂 ${prefix}quotesanime
│ 🍂 ${prefix}quotesdilan
│ 🍂 ${prefix}quotesimage
│ 🍂 ${prefix}katabijak
│ 🍂 ${prefix}randomnama
└⬣
╭─⬣「 Meme Menu 」⬣
│ 💣 ${prefix}meme
│ 💣 ${prefix}darkjoke
│ 💣 ${prefix}memeindo
└⬣
╭─⬣「 Upsw Menu 」⬣
│ 💫 ${prefix}upswteks
│ 💫 ${prefix}upswsticker
│ 💫 ${prefix}upswaudio
│ 💫 ${prefix}upswvideo
│ 💫 ${prefix}upswimage
└⬣
╭─⬣「 Url Menu 」⬣
│ 💌 ${prefix}tinyurl
│ 💌 ${prefix}bitly
│ 💌 ${prefix}shorturl
│ 💌 ${prefix}cuttly
└⬣
╭─⬣「 Information Menu 」⬣
│ 🔥 ${prefix}kbbi
│ 🔥 ${prefix}jarak
│ 🔥 ${prefix}wikipedia
│ 🔥 ${prefix}translate
│ 🔥 ${prefix}jadwaltv
│ 🔥 ${prefix}infogempa
│ 🔥 ${prefix}cuaca
│ 🔥 ${prefix}covidindo
│ 🔥 ${prefix}covidglobal
└⬣
╭─⬣「 Primbon Menu 」⬣
│ 🎀 ${prefix}artinama
│ 🎀 ${prefix}jodoh
│ 🎀 ${prefix}jadian
│ 🎀 ${prefix}tebakumur
└⬣
╭─⬣「 Stalk Menu 」⬣
│ 🎃 ${prefix}stalkig
│ 🎃 ${prefix}stalktiktok
│ 🎃 ${prefix}stalkgithub
└⬣
╭─⬣「 Anime Menu 」⬣
│ 🗞️ ${prefix}loli
│ 🗞️ ${prefix}neko
│ 🗞️ ${prefix}waifu
│ 🗞️ ${prefix}shota
│ 🗞️ ${prefix}husbu
│ 🗞️ ${prefix}sagiri
│ 🗞️ ${prefix}shinobu
│ 🗞️ ${prefix}megumin
│ 🗞️ ${prefix}wallnime
└⬣
╭─⬣「 Maker Menu 」⬣
│ 🏷️ ${prefix}tahta
│ 🏷️ ${prefix}thunder
│ 🏷️ ${prefix}blackpink
│ 🏷️ ${prefix}glitch
│ 🏷️ ${prefix}marvel
└⬣
╭─⬣「 18+ Menu 」⬣
│ 😈 ${prefix}bokep
│ 😈 ${prefix}dosa1
│ 😈 ${prefix}dosa2
│ 😈 ${prefix}dosa3
│ 😈 ${prefix}dosa4
│ 😈 ${prefix}dosa5
│ 😈 ${prefix}dosa6
│ 😈 ${prefix}dosa7
│ 😈 ${prefix}dosa8
│ 😈 ${prefix}dosa9
│ 😈 ${prefix}dosa10
│ 😈 ${prefix}dosa11
│ 😈 ${prefix}dosa12
│ 😈 ${prefix}dosa13
│ 😈 ${prefix}dosa14
│ 😈 ${prefix}dosa15
└⬣
`
teks =
`Ini Sc Buatan Zero YT7 Silahkan Di Pake Jika Ingin Recode Atau Reupload Tolong Creator Jangan Hpus Tolong Hargai Karya Orang 🙏`
but = [
          { buttonId: `${prefix}infobot`, buttonText: { displayText: '☰ INFO' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER' }, type: 1 }
        ]
        sendButLocation(from, menunya, teks, gambar, but)
break
case 'infobot':
var _0x47047b=_0x30f5,_0x1b48d9=_0x30f5,_0x5e2f5f=_0x30f5,_0x386959=_0x30f5,_0x70e9c3=_0x30f5;(function(_0x1faaeb,_0x6485a0){var _0x4d2670=_0x30f5,_0x1abab4=_0x30f5,_0x466f0d=_0x30f5,_0x290e3a=_0x30f5,_0x3ad958=_0x30f5,_0x32b18b=_0x1faaeb();while(!![]){try{var _0x2e2224=parseInt(_0x4d2670(0x2c4))/(0x11*-0x228+0x21f0+0x2b9)*(parseInt(_0x1abab4(0x199))/(-0x1ba5+-0x5*-0x373+-0x534*-0x2))+-parseInt(_0x466f0d(0x245))/(-0x2*-0xee8+0x339*-0x4+-0x10e9)*(parseInt(_0x1abab4(0x201))/(0x142*0xb+0x1d21+-0x1*0x2af3))+parseInt(_0x290e3a(0x185))/(0x1449+0x497+-0x3f*0x65)+parseInt(_0x3ad958(0x280))/(-0xfcc+-0x13b+0x110d)*(parseInt(_0x466f0d(0x250))/(0x181+0x239a*-0x1+-0x16c*-0x18))+parseInt(_0x4d2670(0x2b2))/(0x154d+0x6f7*0x5+0x703*-0x8)+parseInt(_0x4d2670(0x16b))/(0x22ac+0x8*-0x15a+-0x17d3)+-parseInt(_0x466f0d(0x1b3))/(-0x6*0x1a1+-0x2*0xba1+0x2112)*(parseInt(_0x3ad958(0x176))/(-0x1ce8+0xeb+-0xd*-0x228));if(_0x2e2224===_0x6485a0)break;else _0x32b18b['push'](_0x32b18b['shift']());}catch(_0x4fe5a4){_0x32b18b['push'](_0x32b18b['shift']());}}}(_0x1f02,0x11*-0xded6+-0x634f*0x2b+0x422bd*0xb),timestamp=speed(),latensi=speed()-timestamp,teks=_0x47047b(0x1e3)+_0x47047b(0x16e)+_0x5e2f5f(0x2b4)+_0x47047b(0x2ad)+_0x47047b(0x22f)+_0x47047b(0x2cb)+_0x5e2f5f(0x1fc)+_0x386959(0x1b0)+_0x1b48d9(0x290)+_0x386959(0x1fe)+_0x386959(0x299)+_0x47047b(0x213)+':\x20'+ownername+(_0x386959(0x2ad)+_0x70e9c3(0x1d1)+_0x1b48d9(0x1c4)+':\x20')+botname+(_0x1b48d9(0x2ad)+_0x47047b(0x2de)+_0x5e2f5f(0x1a9)+_0x5e2f5f(0x1cb)+_0x386959(0x2de)+_0x1b48d9(0x29b)+_0x47047b(0x228)+_0x70e9c3(0x198)+_0x47047b(0x222)+_0x1b48d9(0x237))+pendaftar[_0x5e2f5f(0x2b1)+'h']+(_0x5e2f5f(0x2ad)+_0x1b48d9(0x2d9)+_0x386959(0x1f5)+'\x20')+runtime(process[_0x47047b(0x2f5)+'e']())+(_0x5e2f5f(0x2ad)+_0x1b48d9(0x289)+_0x47047b(0x262))+latensi[_0x47047b(0x1d6)+'ed'](-0x38*0x67+-0x1408*-0x1+0x284)+(_0x5e2f5f(0x1a1)+_0x5e2f5f(0x2c5)+_0x5e2f5f(0x260)+_0x5e2f5f(0x1ef)+_0x70e9c3(0x194)+_0x47047b(0x18f)+_0x5e2f5f(0x2af)+_0x386959(0x29c)+_0x1b48d9(0x17a)+_0x1b48d9(0x269)+_0x1b48d9(0x177)+_0x1b48d9(0x2dd)+_0x386959(0x220)+_0x386959(0x26c)+_0x1b48d9(0x22a)+_0x386959(0x2cf)+_0x1b48d9(0x265)+_0x47047b(0x2ed)+_0x47047b(0x1bb)+_0x386959(0x2d8)+_0x1b48d9(0x1ce)+_0x386959(0x2e2)+_0x1b48d9(0x2a0)+_0x70e9c3(0x1cf)+_0x5e2f5f(0x1e9)+_0x5e2f5f(0x2b0)+_0x386959(0x23e)+_0x1b48d9(0x2ee)+_0x1b48d9(0x26b)+_0x386959(0x2c0)+_0x47047b(0x28b)+_0x386959(0x23f)+_0x47047b(0x28f)+_0x1b48d9(0x191)+_0x5e2f5f(0x177)+_0x386959(0x1d9)));var _0x18f923={};function _0x1f02(){var _0x2754f1=['kNNYt','FGDFS','s\x20To\x20','\x5c+\x5c+\x20','sCpBn','CIFsQ','1003evKYQI','nd\x0a*┃','ructo','YzFTc','GVlSx','Dbvol','hlhMb','tor\x20B','cuTRb','KIoTw','Dvqwv','h\x20S.W','split','XauOw','uzdwz','ribPk','CJrGz','hlSuU','YvaFX','HwjUC','o\x20Ort','\x20Runt','HfuWq','kQUTq','n()\x20','*\x0a*┃◗','\x20Pref','AZBYt','rQett','zA-Z_','◗\x20Tha','HfGhG','ctor(','rkCci','DYYZs','EqLax','Sscgm','while','NTIFC','n\x20(fu','YssKW','┃◗\x20Th','\x0a*┃◗\x20','init','XVdZV','debu','hLsxY','wanfJ','FPrHn','uptim','wEMZn','zLmEV','rn\x20th','ion\x20*','tseHU','butto','MGAts','wQphM','DmkGL','LVmFk','CYFTI','fEHEg','zsaKM','MluRt','phqJg','Soscf','bQPFD','174159YfNZrE','EXkoR','oMFni','INFO\x20','fVhEr','TPymG','VvIkT','DWoWE','excep','DoslD','|5|3|','11qrOYZK','━━━━━','KefHn','dUFqp','ejs\x0a*','KWKmm','babIy','SARAd','tVyEj','ckhRH','mCgRN','lwSxB','avwgZ','RIHgH','warn','3870020BfzvBU','YoNwD','(((.+','eobPP','kdIfq','mYhvd','*(?:[','LPWhL','mTwTy','nstru','avasc','Ydakv','u*\x0a*┗','YhxbV','VTJHJ','e\x20:\x20J','state','dJJIN','VjgSK','tal\x20P','2620VevlFo','ZjSlY','Mvevy','UDQzL','sLEni','tkMtq','5|4|1','cySgJ','\x20seco','proto','e)\x20{}','ECAKO','type','lhnwH','__pro','0-9a-','ix\x20:\x20','zMoOx','kfhAA','xBLpO','info','uYEMz','DOsvx','Zero\x20','table','FGHyR','10859790TGYzmd','nAflo','VXBsM','EsBOb','QtOmc','ing','|5|4|','GwRLt','ank\x20T','NKSrJ','nText','1|4|0','ZNNVg','oGlpl','mzsvd','Szszs','CiJVS','\x20Bot\x20','wHODr','chain','log','SYaBV','SnYtt','JhOyB','Multi','oPIbw','input','u*\x0a*┃','\x20Zero','IYRAs','\x20Nama','YkYlV','gphBa','2|1|3','\x20(tru','toFix','VDeUg','UwTmf','━━\x20•*','qohih','nxzAi','HNPBU','to__','oivHl','gger','funct','ljoAB','\x20Worl','┏━➤\x20*','sDhoH','hNyBs','XTjEv','DPhZx','tsqRP','\x20YT7\x20','jmOps','vLVrs','IPT','odNEJ','Z_$][','nguag','RKlIB','jjOWq','HFquS','RQLSU','gHboG','ime\x20:','NxRzN','FMYZB','nId','NoEze','hbBqU','strin','ot\x20:\x20','GohEl','┃┃*\x20N','yPPTP','YsJnf','284656RAYJeV','tion','xdglE','odwAt','FEWkE','Idqgu','KlIxA','xWjqa','HntPT','SrHjv','ZjiDN','gDVdk','Objec','error','NgEOP','FhtHZ','owner','pfOMQ','wner\x20','NsfqH','ayTex','nZbpa','sHZOt','zPyWu','GuGnh','ZTRfa','yFati','NuvnI','pYuRk','iQVZE','AOLBq','\x20Than','HxpDO','enggu','hBxdh','TefJO','QNzVW','|2|3|','LCuTr','┃*\x20To','UIrBc','\x20Alla','OSbzN','vvwjt','CmgRI','MtHqU','\x20Crea','yRTHi','CWtSo','1|2|4','nKYEu','KVHUb','CnYIs','izplk','na\x20:\x20','akemG','UBkfi','cxkvn','apply','PEqxF','kDipM','tor)*','ubscr','QSKeM','lXDNB','rVHgL','☰\x20OWN','SyLMC','75HqVbcx','dvwWx','\x22retu','displ','RDYUZ','ReuIT','qSPtw','NnLis','DPeET','OGuYJ','TnBLA','7KooXhZ','dHpcn','tRGuW','call','LLxff','nctio','bind','Ceual','{}.co','QBlPm','AQsgu','ZZkDP','wkfTE','XuudY','HHIvD','ghkBj','┃*\x20La','euxhf','d\x20:\x20','|3|0','$]*)','.T*\x0a*','MzKTm','bYAfi','fzjHE','┃┗━━━','dIWqn','Thank','ks\x20To','aFCjV','VWbna','tyEby','actio','DdfLh','UNanw','vHpoS','iAjTL','retur','YofLu','HAhdZ','count','dJSoL','NwAft','ZCblY','keelQ','EzHmH','hNzrZ','YMRoN','1389924pOUprf','aUdSo','cYtXz','fVLfG','Bymoq','tPIeH','jgPeL','RAKeW','QGiEv','\x20Spee','ljfrj','All\x20S','gLIfr','SzzUL','AWYRo','iberk','YT7\x0a*','EFShD','\x5c(\x20*\x5c','upqRH','jdxbK','rWSBQ','CRngv',')+)+)','WNrug','ama\x20O','a-zA-','ix\x0a*┃','&\x20Nod','ESBTV','fGscu','☰\x20SCR','nk\x20To','IFRbz','toStr','OHiyT','dLbzy','trace','Fvdez','lyXza','ySkWE','SMcWd','rmuWl','test','is\x22)(','\x0a*┃┃*','RntGv','ript\x20','(Crea','lengt','11556608ZCZwrM','rymLB','BOT*\x20','XpjIP','gxfQa','conso','searc','Hello','const','KTxnq','niLKL','FDtvC'];_0x1f02=function(){return _0x2754f1;};return _0x1f02();}_0x18f923[_0x70e9c3(0x248)+_0x5e2f5f(0x215)+'t']=_0x5e2f5f(0x243)+'ER';var _0x45dbc6={};_0x45dbc6[_0x47047b(0x15f)+_0x5e2f5f(0x1f8)]=prefix+_0x47047b(0x211),_0x45dbc6[_0x70e9c3(0x15f)+_0x386959(0x1bd)]=_0x18f923,_0x45dbc6[_0x5e2f5f(0x1a5)]=0x1;var _0x15a504={};_0x15a504[_0x5e2f5f(0x248)+_0x5e2f5f(0x215)+'t']=_0x1b48d9(0x29f)+_0x386959(0x1ec);var _0x3b5eac={};_0x3b5eac[_0x70e9c3(0x15f)+_0x70e9c3(0x1f8)]=prefix+'sc',_0x3b5eac[_0x47047b(0x15f)+_0x5e2f5f(0x1bd)]=_0x15a504,_0x3b5eac[_0x70e9c3(0x1a5)]=0x1,but=[_0x45dbc6,_0x3b5eac],sendButton(from,teks,faketeks,but,mek);function _0x30f5(_0x16246a,_0x505cf9){var _0x584926=_0x1f02();return _0x30f5=function(_0x4dbbbb,_0x184852){_0x4dbbbb=_0x4dbbbb-(0xdc2+0x226b+-0x2ed2*0x1);var _0x52d4c5=_0x584926[_0x4dbbbb];return _0x52d4c5;},_0x30f5(_0x16246a,_0x505cf9);}function hi(){var _0x4d2f80=_0x386959,_0x1728bc=_0x1b48d9,_0x58bea3=_0x386959,_0x4ccfaf=_0x386959,_0x310324=_0x1b48d9,_0x3e7f42={'KTxnq':function(_0x36606d,_0x3e4f21){return _0x36606d===_0x3e4f21;},'YsJnf':_0x4d2f80(0x268),'uzdwz':function(_0x577645,_0x374b7b){return _0x577645!==_0x374b7b;},'LLxff':_0x4d2f80(0x27c),'KefHn':_0x4d2f80(0x261),'SrHjv':function(_0x4cfe39,_0x52627f){return _0x4cfe39(_0x52627f);},'zsaKM':function(_0x12ed3,_0x401b0a){return _0x12ed3+_0x401b0a;},'ckhRH':_0x4ccfaf(0x275)+_0x58bea3(0x2eb)+_0x58bea3(0x255)+_0x310324(0x2dc),'NTIFC':_0x4ccfaf(0x258)+_0x4ccfaf(0x18e)+_0x1728bc(0x2e4)+_0x310324(0x247)+_0x4ccfaf(0x15c)+_0x4d2f80(0x2ac)+'\x20)','ribPk':function(_0x549f17){return _0x549f17();},'CiJVS':_0x4d2f80(0x2e6),'QNzVW':_0x310324(0x2cd),'IYRAs':_0x1728bc(0x27d),'CJrGz':_0x1728bc(0x2b3),'JhOyB':_0x310324(0x1e0)+_0x4d2f80(0x15d)+_0x4ccfaf(0x292)+')','NKSrJ':_0x58bea3(0x2c1)+_0x4d2f80(0x18b)+_0x1728bc(0x29a)+_0x1728bc(0x1ee)+_0x58bea3(0x1a8)+_0x58bea3(0x2e1)+_0x4d2f80(0x264),'cuTRb':function(_0x8b7609,_0xfcb832){return _0x8b7609(_0xfcb832);},'rkCci':_0x58bea3(0x2ef),'jjOWq':function(_0x48d919,_0x238afc){return _0x48d919+_0x238afc;},'GVlSx':_0x1728bc(0x1c6),'QGiEv':_0x4d2f80(0x1cd),'LPWhL':function(_0x4c09b3,_0x4eee06){return _0x4c09b3(_0x4eee06);},'QtOmc':function(_0x4213c6){return _0x4213c6();},'Mvevy':_0x58bea3(0x234),'uYEMz':_0x4ccfaf(0x1a6),'dJSoL':_0x4ccfaf(0x187)+_0x58bea3(0x297)+'+$','ySkWE':function(_0x212d8d,_0xbab1a9){return _0x212d8d===_0xbab1a9;},'dIWqn':_0x4d2f80(0x276),'FhtHZ':_0x4ccfaf(0x249),'rVHgL':_0x58bea3(0x26f),'jgPeL':_0x58bea3(0x1b2),'SzzUL':_0x1728bc(0x241),'tVyEj':_0x58bea3(0x15b),'ZNNVg':_0x58bea3(0x266),'tPIeH':_0x1728bc(0x2e9)+_0x1728bc(0x1d5)+_0x4d2f80(0x1a3),'CmgRI':_0x4d2f80(0x278)+'er','NoEze':function(_0x1711be,_0x147b5b){return _0x1711be===_0x147b5b;},'RQLSU':_0x4ccfaf(0x240),'SnYtt':_0x310324(0x171),'gphBa':function(_0x90a4fb,_0x2d1e5b){return _0x90a4fb(_0x2d1e5b);},'avwgZ':function(_0x387191,_0x20afe6){return _0x387191+_0x20afe6;},'AZBYt':_0x4d2f80(0x1af),'HfuWq':_0x58bea3(0x21d),'Soscf':_0x1728bc(0x2a3),'HFquS':function(_0x5a97ba,_0x23f2e0){return _0x5a97ba!==_0x23f2e0;},'FGDFS':_0x4ccfaf(0x1f7),'gHboG':_0x4ccfaf(0x1e7),'UwTmf':function(_0x211beb,_0x3cc486,_0x2cf92b){return _0x211beb(_0x3cc486,_0x2cf92b);},'yRTHi':function(_0x4693f6,_0x4910a8){return _0x4693f6!==_0x4910a8;},'mzsvd':_0x1728bc(0x2f2),'ZTRfa':_0x4ccfaf(0x235),'AOLBq':_0x1728bc(0x232)+_0x310324(0x263),'HAhdZ':function(_0x2d044c,_0x53bb46){return _0x2d044c<_0x53bb46;},'WNrug':_0x4d2f80(0x19f)+_0x1728bc(0x226)+'0','nxzAi':function(_0x5699ed){return _0x5699ed();},'iQVZE':_0x58bea3(0x1c7),'XVdZV':_0x58bea3(0x184),'nAflo':_0x4ccfaf(0x1ad),'YoNwD':_0x4ccfaf(0x20e),'akemG':_0x310324(0x173)+_0x310324(0x202),'XpjIP':_0x58bea3(0x1b1),'ECAKO':_0x58bea3(0x2a5),'NwAft':function(_0x32bc78,_0x4813fe){return _0x32bc78!==_0x4813fe;},'mYhvd':_0x310324(0x2f4),'KlIxA':_0x58bea3(0x218),'HwjUC':_0x1728bc(0x2ca),'fEHEg':function(_0x253da0){return _0x253da0();},'MtHqU':function(_0x5661b5,_0xfb9f02){return _0x5661b5+_0xfb9f02;},'zMoOx':function(_0x55f430,_0x1e1fa0){return _0x55f430+_0x1e1fa0;},'cySgJ':function(_0x46e752,_0x484a98){return _0x46e752(_0x484a98);},'hNzrZ':function(_0x5a11df,_0x3842de,_0x31e20e){return _0x5a11df(_0x3842de,_0x31e20e);},'SMcWd':_0x58bea3(0x174),'hBxdh':_0x58bea3(0x172),'YhxbV':function(_0x30ecc3,_0x56b113){return _0x30ecc3!==_0x56b113;},'XuudY':_0x4d2f80(0x160),'gxfQa':_0x4d2f80(0x16d),'DmkGL':function(_0x5e9b93,_0x3f3bbd){return _0x5e9b93(_0x3f3bbd);},'rWSBQ':function(_0x3efe81){return _0x3efe81();},'aFCjV':_0x58bea3(0x227),'UIrBc':_0x310324(0x1b6),'izplk':_0x4d2f80(0x17d),'UDQzL':_0x310324(0x1be)+_0x58bea3(0x175)+'2','NxRzN':function(_0x10c4ac,_0x5467e3,_0x249635){return _0x10c4ac(_0x5467e3,_0x249635);},'pfOMQ':function(_0x32a9d5){return _0x32a9d5();},'HfGhG':_0x310324(0x2b9)+_0x4ccfaf(0x1e2)+'d!'},_0x417856=(function(){var _0x13d2c2=_0x1728bc,_0x4831c0=_0x4ccfaf,_0x35ad30=_0x4ccfaf,_0x234c29=_0x1728bc,_0x418a57=_0x4d2f80,_0x5da24a={'YzFTc':function(_0x5dccf4,_0x577242){var _0x2a2a50=_0x30f5;return _0x3e7f42[_0x2a2a50(0x2bb)](_0x5dccf4,_0x577242);},'XTjEv':_0x3e7f42[_0x13d2c2(0x200)],'GwRLt':function(_0x3a2709,_0x30b2f4){var _0x211760=_0x13d2c2;return _0x3e7f42[_0x211760(0x2d2)](_0x3a2709,_0x30b2f4);},'odNEJ':_0x3e7f42[_0x4831c0(0x254)],'oPIbw':_0x3e7f42[_0x4831c0(0x178)],'gDVdk':function(_0x15e08e,_0x2d9d4a){var _0x19da5f=_0x35ad30;return _0x3e7f42[_0x19da5f(0x20a)](_0x15e08e,_0x2d9d4a);},'qSPtw':function(_0x3f2a52,_0x16abc7){var _0x36de1a=_0x35ad30;return _0x3e7f42[_0x36de1a(0x166)](_0x3f2a52,_0x16abc7);},'ljoAB':_0x3e7f42[_0x4831c0(0x17f)],'CIFsQ':_0x3e7f42[_0x418a57(0x2ea)],'yPPTP':function(_0x5e0caf){var _0x5ea804=_0x418a57;return _0x3e7f42[_0x5ea804(0x2d3)](_0x5e0caf);},'upqRH':_0x3e7f42[_0x13d2c2(0x1c3)],'aUdSo':_0x3e7f42[_0x35ad30(0x225)]};if(_0x3e7f42[_0x35ad30(0x2bb)](_0x3e7f42[_0x4831c0(0x1d0)],_0x3e7f42[_0x4831c0(0x2d4)])){var _0x302483=_0x59a160[_0x234c29(0x23b)](_0x2e47f6,arguments);return _0x4695f2=null,_0x302483;}else{var _0x327323=!![];return function(_0x537837,_0x217274){var _0x30ea09=_0x13d2c2,_0x362100=_0x35ad30,_0x47267d=_0x234c29,_0x26f452=_0x234c29,_0x5b0e6d=_0x35ad30,_0x36ff30={'AQsgu':function(_0x154c29,_0x261390){var _0x5e3d6d=_0x30f5;return _0x5da24a[_0x5e3d6d(0x20c)](_0x154c29,_0x261390);},'Fvdez':function(_0x1c1163,_0x1c8ac4){var _0x5d3017=_0x30f5;return _0x5da24a[_0x5d3017(0x24b)](_0x1c1163,_0x1c8ac4);},'VXBsM':_0x5da24a[_0x30ea09(0x1e1)],'qohih':_0x5da24a[_0x362100(0x2c3)],'UNanw':function(_0x2d4f59){var _0x2bc5c7=_0x362100;return _0x5da24a[_0x2bc5c7(0x1ff)](_0x2d4f59);}};if(_0x5da24a[_0x362100(0x2c7)](_0x5da24a[_0x26f452(0x293)],_0x5da24a[_0x30ea09(0x281)])){if(_0x2fb282)return _0x16e811;else rGyUIw[_0x5b0e6d(0x25a)](_0x5b1394,-0x256+-0x1068*0x1+0x12be);}else{var _0x4226fc=_0x327323?function(){var _0x543c1a=_0x362100,_0x3c56fe=_0x47267d,_0x5101a3=_0x26f452,_0x747c77=_0x47267d,_0x884d8c=_0x362100;if(_0x5da24a[_0x543c1a(0x2c7)](_0x5da24a[_0x543c1a(0x1e6)],_0x5da24a[_0x3c56fe(0x1e6)])){if(_0x217274){if(_0x5da24a[_0x3c56fe(0x1ba)](_0x5da24a[_0x747c77(0x1ed)],_0x5da24a[_0x747c77(0x1cc)])){var _0x486ee1=_0x217274[_0x3c56fe(0x23b)](_0x537837,arguments);return _0x217274=null,_0x486ee1;}else{var _0x1fa08e=rGyUIw[_0x884d8c(0x25a)](_0x361743,rGyUIw[_0x3c56fe(0x2a6)](rGyUIw[_0x884d8c(0x2a6)](rGyUIw[_0x543c1a(0x1b5)],rGyUIw[_0x5101a3(0x1da)]),');'));_0x37ad42=rGyUIw[_0x884d8c(0x272)](_0x1fa08e);}}}else return _0x455f24;}:function(){};return _0x327323=![],_0x4226fc;}};}}()),_0x55c8cb=_0x3e7f42[_0x58bea3(0x27e)](_0x417856,this,function(){var _0x55b73e=_0x310324,_0xe68a6e=_0x4ccfaf,_0x4856ab=_0x1728bc,_0xbf8f9a=_0x4ccfaf,_0x42f1c7=_0x310324,_0x4592db={'mTwTy':_0x3e7f42[_0x55b73e(0x1ca)],'XauOw':_0x3e7f42[_0xe68a6e(0x1bc)],'hlSuU':function(_0x367dc1,_0x21dabc){var _0x50939e=_0x55b73e;return _0x3e7f42[_0x50939e(0x2cc)](_0x367dc1,_0x21dabc);},'wkfTE':_0x3e7f42[_0xe68a6e(0x2e5)],'cYtXz':function(_0x9c9d9f,_0x38bf13){var _0x4c1eca=_0x55b73e;return _0x3e7f42[_0x4c1eca(0x1f1)](_0x9c9d9f,_0x38bf13);},'lwSxB':_0x3e7f42[_0x4856ab(0x2c8)],'wQphM':_0x3e7f42[_0x55b73e(0x288)],'NgEOP':function(_0x256ab7,_0x3f5ae9){var _0x533947=_0x4856ab;return _0x3e7f42[_0x533947(0x18c)](_0x256ab7,_0x3f5ae9);},'HNPBU':function(_0x27cf81){var _0x34ffa2=_0xe68a6e;return _0x3e7f42[_0x34ffa2(0x1b7)](_0x27cf81);}};if(_0x3e7f42[_0x4856ab(0x2d2)](_0x3e7f42[_0xbf8f9a(0x19b)],_0x3e7f42[_0x55b73e(0x1ae)]))return _0x55c8cb[_0x4856ab(0x2a2)+_0x42f1c7(0x1b8)]()[_0x55b73e(0x2b8)+'h'](_0x3e7f42[_0x42f1c7(0x279)])[_0xbf8f9a(0x2a2)+_0x4856ab(0x1b8)]()[_0x42f1c7(0x2ba)+_0xe68a6e(0x2c6)+'r'](_0x55c8cb)[_0xe68a6e(0x2b8)+'h'](_0x3e7f42[_0x55b73e(0x279)]);else{var _0x28a2ec=new _0x185751(SUqALz[_0xe68a6e(0x18d)]),_0x299d21=new _0x42f9a8(SUqALz[_0xe68a6e(0x2d1)],'i'),_0x2eec93=SUqALz[_0xbf8f9a(0x2d5)](_0x1c5d47,SUqALz[_0xbf8f9a(0x25c)]);!_0x28a2ec[_0xbf8f9a(0x2ab)](SUqALz[_0xbf8f9a(0x282)](_0x2eec93,SUqALz[_0x55b73e(0x181)]))||!_0x299d21[_0x4856ab(0x2ab)](SUqALz[_0xe68a6e(0x282)](_0x2eec93,SUqALz[_0x55b73e(0x161)]))?SUqALz[_0x4856ab(0x20f)](_0x2eec93,'0'):SUqALz[_0xe68a6e(0x1dc)](_0x2465c9);}});_0x3e7f42[_0x4ccfaf(0x295)](_0x55c8cb);var _0x53c8e2=(function(){var _0x2046ce=_0x4ccfaf,_0x23b59f=_0x58bea3,_0x44ca77=_0x4ccfaf,_0x1e7532=_0x310324;if(_0x3e7f42[_0x2046ce(0x2d2)](_0x3e7f42[_0x23b59f(0x17e)],_0x3e7f42[_0x23b59f(0x1bf)])){var _0x1a25cb=!![];return function(_0xb581e2,_0x20fdb1){var _0x1158ab=_0x44ca77,_0x521004=_0x23b59f,_0x49c25b=_0x23b59f,_0x232441=_0x23b59f,_0x1e8990=_0x44ca77,_0x3d6a5c={'ReuIT':function(_0x3e3a90,_0x461dc5){var _0x2f0031=_0x30f5;return _0x3e7f42[_0x2f0031(0x2a8)](_0x3e3a90,_0x461dc5);},'xdglE':_0x3e7f42[_0x1158ab(0x26a)],'NsfqH':_0x3e7f42[_0x521004(0x210)],'fVLfG':_0x3e7f42[_0x521004(0x242)]};if(_0x3e7f42[_0x521004(0x2d2)](_0x3e7f42[_0x1e8990(0x286)],_0x3e7f42[_0x232441(0x28d)])){var _0x154848=_0x1a25cb?function(){var _0xe6938e=_0x49c25b,_0x19e92d=_0x1e8990,_0xa62b3e=_0x1158ab,_0x231a07=_0x1e8990,_0x16059a=_0x232441;if(_0x3d6a5c[_0xe6938e(0x24a)](_0x3d6a5c[_0x19e92d(0x203)],_0x3d6a5c[_0xa62b3e(0x214)])){if(_0x5dbc50){var _0x926db8=_0x5e0e39[_0x19e92d(0x23b)](_0x559d5a,arguments);return _0x5c8354=null,_0x926db8;}}else{if(_0x20fdb1){if(_0x3d6a5c[_0xe6938e(0x24a)](_0x3d6a5c[_0x16059a(0x283)],_0x3d6a5c[_0x231a07(0x283)])){var _0x169742=_0x20fdb1[_0xe6938e(0x23b)](_0xb581e2,arguments);return _0x20fdb1=null,_0x169742;}else return!![];}}}:function(){};return _0x1a25cb=![],_0x154848;}else{var _0xa651bc=_0x2a6b57?function(){var _0x39826e=_0x1158ab;if(_0x18ec6c){var _0x3de2fc=_0x1c12b1[_0x39826e(0x23b)](_0x14bda3,arguments);return _0x1472f9=null,_0x3de2fc;}}:function(){};return _0x314b4f=![],_0xa651bc;}};}else{var _0x2dc37b=_0x55d49b[_0x2046ce(0x23b)](_0x5af59b,arguments);return _0x238d33=null,_0x2dc37b;}}());(function(){var _0x2ce215=_0x4d2f80,_0x54ae6a=_0x310324,_0x4082d7=_0x1728bc,_0x31d522=_0x4d2f80,_0x424ec0=_0x1728bc,_0x34e712={'SyLMC':_0x3e7f42[_0x2ce215(0x285)],'nKYEu':_0x3e7f42[_0x2ce215(0x22d)],'phqJg':_0x3e7f42[_0x2ce215(0x279)],'Ceual':function(_0x33a3da,_0x26e218){var _0x4553f4=_0x54ae6a;return _0x3e7f42[_0x4553f4(0x1f9)](_0x33a3da,_0x26e218);},'KWKmm':_0x3e7f42[_0x54ae6a(0x1f3)],'hNyBs':_0x3e7f42[_0x2ce215(0x1c9)],'tsqRP':_0x3e7f42[_0x4082d7(0x1ca)],'oivHl':_0x3e7f42[_0x54ae6a(0x1bc)],'RAKeW':function(_0x3a93f4,_0x486c9d){var _0x237e03=_0x424ec0;return _0x3e7f42[_0x237e03(0x1d3)](_0x3a93f4,_0x486c9d);},'bQPFD':_0x3e7f42[_0x2ce215(0x2e5)],'vHpoS':function(_0x159806,_0x195a1d){var _0x350b42=_0x54ae6a;return _0x3e7f42[_0x350b42(0x182)](_0x159806,_0x195a1d);},'sLEni':_0x3e7f42[_0x2ce215(0x2c8)],'jdxbK':_0x3e7f42[_0x2ce215(0x288)],'EFShD':function(_0x599dea,_0x1fdb8b){var _0x1db813=_0x54ae6a;return _0x3e7f42[_0x1db813(0x2d2)](_0x599dea,_0x1fdb8b);},'dJJIN':_0x3e7f42[_0x424ec0(0x2df)],'dLbzy':_0x3e7f42[_0x424ec0(0x2da)],'TefJO':_0x3e7f42[_0x54ae6a(0x169)],'Bymoq':function(_0x2d327f){var _0x48fdc9=_0x4082d7;return _0x3e7f42[_0x48fdc9(0x1b7)](_0x2d327f);}};if(_0x3e7f42[_0x424ec0(0x1f2)](_0x3e7f42[_0x424ec0(0x2bf)],_0x3e7f42[_0x2ce215(0x1f4)]))_0x3e7f42[_0x2ce215(0x1d8)](_0x53c8e2,this,function(){var _0x3903a5=_0x424ec0,_0x297de9=_0x2ce215,_0x291a4d=_0x2ce215,_0x4f9c56=_0x424ec0,_0x226d0f=_0x31d522,_0x4b45d0={};_0x4b45d0[_0x3903a5(0x28a)]=_0x34e712[_0x297de9(0x244)],_0x4b45d0[_0x3903a5(0x28c)]=_0x34e712[_0x3903a5(0x233)],_0x4b45d0[_0x3903a5(0x1f0)]=_0x34e712[_0x297de9(0x168)];var _0x462a55=_0x4b45d0;if(_0x34e712[_0x4f9c56(0x257)](_0x34e712[_0x4f9c56(0x17b)],_0x34e712[_0x226d0f(0x1e5)]))return function(_0xa48a5c){}[_0x3903a5(0x2ba)+_0x291a4d(0x2c6)+'r'](auIBWr[_0x291a4d(0x28a)])[_0x226d0f(0x23b)](auIBWr[_0x4f9c56(0x28c)]);else{var _0x508739=new RegExp(_0x34e712[_0x297de9(0x1e8)]),_0x56282e=new RegExp(_0x34e712[_0x226d0f(0x1de)],'i'),_0x3abe31=_0x34e712[_0x297de9(0x287)](_0x505cf9,_0x34e712[_0x291a4d(0x16a)]);if(!_0x508739[_0x297de9(0x2ab)](_0x34e712[_0x4f9c56(0x273)](_0x3abe31,_0x34e712[_0x297de9(0x19d)]))||!_0x56282e[_0x4f9c56(0x2ab)](_0x34e712[_0x3903a5(0x273)](_0x3abe31,_0x34e712[_0x3903a5(0x294)]))){if(_0x34e712[_0x297de9(0x291)](_0x34e712[_0x291a4d(0x196)],_0x34e712[_0x297de9(0x196)]))return _0x51eddf[_0x3903a5(0x2a2)+_0x4f9c56(0x1b8)]()[_0x291a4d(0x2b8)+'h'](auIBWr[_0x226d0f(0x1f0)])[_0x226d0f(0x2a2)+_0x297de9(0x1b8)]()[_0x3903a5(0x2ba)+_0x4f9c56(0x2c6)+'r'](_0x3a5d7c)[_0x297de9(0x2b8)+'h'](auIBWr[_0x4f9c56(0x1f0)]);else _0x34e712[_0x4f9c56(0x287)](_0x3abe31,'0');}else{if(_0x34e712[_0x297de9(0x291)](_0x34e712[_0x3903a5(0x2a4)],_0x34e712[_0x291a4d(0x224)]))_0x34e712[_0x3903a5(0x284)](_0x505cf9);else{if(_0x3a644e){var _0x1e1f33=_0x3dd383[_0x226d0f(0x23b)](_0x5dc7c1,arguments);return _0x5d47bb=null,_0x1e1f33;}}}}})();else{var _0x4de841=_0x187b03?function(){var _0xd7daf3=_0x54ae6a;if(_0x32e32b){var _0x564a4b=_0x536fd7[_0xd7daf3(0x23b)](_0x324ecb,arguments);return _0x2f20bb=null,_0x564a4b;}}:function(){};return _0x4e9ac3=![],_0x4de841;}}());var _0xed6faa=(function(){var _0x48c382=_0x4d2f80,_0x2bbae5=_0x58bea3,_0x20f850=_0x310324,_0x26acbe=_0x1728bc,_0x162a97=_0x4d2f80,_0x534143={'VTJHJ':function(_0x8fa784,_0x158825){var _0x39750b=_0x30f5;return _0x3e7f42[_0x39750b(0x1d3)](_0x8fa784,_0x158825);},'VWbna':_0x3e7f42[_0x48c382(0x21f)],'EqLax':function(_0x4283f6,_0x57746f){var _0x3b5b4a=_0x48c382;return _0x3e7f42[_0x3b5b4a(0x277)](_0x4283f6,_0x57746f);},'DPeET':_0x3e7f42[_0x2bbae5(0x298)],'hbBqU':function(_0x4c0dfd,_0x17c4fe){var _0x4ca389=_0x2bbae5;return _0x3e7f42[_0x4ca389(0x182)](_0x4c0dfd,_0x17c4fe);},'TnBLA':_0x3e7f42[_0x20f850(0x17f)],'jmOps':_0x3e7f42[_0x2bbae5(0x2ea)],'tRGuW':function(_0x1105af){var _0x452eda=_0x2bbae5;return _0x3e7f42[_0x452eda(0x1db)](_0x1105af);},'HntPT':_0x3e7f42[_0x162a97(0x21e)],'sDhoH':_0x3e7f42[_0x48c382(0x2f0)],'sCpBn':_0x3e7f42[_0x20f850(0x1b4)],'Dvqwv':_0x3e7f42[_0x2bbae5(0x186)],'ZZkDP':_0x3e7f42[_0x26acbe(0x238)],'OGuYJ':_0x3e7f42[_0x162a97(0x2b5)],'Ydakv':_0x3e7f42[_0x2bbae5(0x1a4)],'yFati':function(_0x49dbee,_0x4da42e){var _0x6d17b6=_0x2bbae5;return _0x3e7f42[_0x6d17b6(0x27a)](_0x49dbee,_0x4da42e);},'kNNYt':_0x3e7f42[_0x2bbae5(0x18a)],'MluRt':function(_0x3b89f9,_0x55ee6c){var _0x5c4618=_0x162a97;return _0x3e7f42[_0x5c4618(0x1f9)](_0x3b89f9,_0x55ee6c);},'Idqgu':_0x3e7f42[_0x2bbae5(0x207)]};if(_0x3e7f42[_0x20f850(0x27a)](_0x3e7f42[_0x20f850(0x2d7)],_0x3e7f42[_0x48c382(0x2d7)]))pQhKIe[_0x48c382(0x193)](_0x5340f5,0x1da*0x9+0x1b*-0x1+-0x9*0x1d7);else{var _0x38acdc=!![];return function(_0x4ab54f,_0x58336d){var _0x48476b=_0x26acbe,_0x14479b=_0x48c382,_0x3edb27=_0x48c382;if(_0x3e7f42[_0x48476b(0x230)](_0x3e7f42[_0x48476b(0x1c1)],_0x3e7f42[_0x48476b(0x21a)])){var _0x41cb66=_0x38acdc?function(){var _0x447756=_0x14479b,_0x2fef9e=_0x14479b,_0x248e3c=_0x3edb27,_0x5b26d7=_0x48476b,_0x5251a8=_0x3edb27,_0x181e4d={'EXkoR':_0x534143[_0x447756(0x26e)],'NuvnI':function(_0x48986f,_0x36f468){var _0x5d13ab=_0x447756;return _0x534143[_0x5d13ab(0x2e7)](_0x48986f,_0x36f468);},'UBkfi':_0x534143[_0x2fef9e(0x24d)],'bYAfi':function(_0xa4a3c9,_0x253f8f){var _0x5f3ac6=_0x447756;return _0x534143[_0x5f3ac6(0x193)](_0xa4a3c9,_0x253f8f);},'kfhAA':function(_0x50743c,_0x20faa9){var _0x55c1a6=_0x447756;return _0x534143[_0x55c1a6(0x1fa)](_0x50743c,_0x20faa9);},'HHIvD':_0x534143[_0x248e3c(0x24f)],'YkYlV':_0x534143[_0x2fef9e(0x1ea)],'QBlPm':function(_0x1eb168){var _0xf476ea=_0x447756;return _0x534143[_0xf476ea(0x252)](_0x1eb168);},'FDtvC':_0x534143[_0x2fef9e(0x209)],'cxkvn':_0x534143[_0x5b26d7(0x1e4)],'tseHU':_0x534143[_0x5251a8(0x2c2)],'LVmFk':_0x534143[_0x248e3c(0x2ce)],'CWtSo':_0x534143[_0x447756(0x25b)],'nZbpa':_0x534143[_0x5251a8(0x24e)],'HxpDO':_0x534143[_0x5b26d7(0x190)]};if(_0x534143[_0x447756(0x21b)](_0x534143[_0x447756(0x2be)],_0x534143[_0x2fef9e(0x2be)])){var _0xc8fbe7=_0x2171a0?function(){var _0x4c63d2=_0x5251a8;if(_0x35ddae){var _0x2d6eec=_0x49b98d[_0x4c63d2(0x23b)](_0x4f8185,arguments);return _0x4f84d8=null,_0x2d6eec;}}:function(){};return _0x38d499=![],_0xc8fbe7;}else{if(_0x58336d){if(_0x534143[_0x447756(0x167)](_0x534143[_0x5b26d7(0x206)],_0x534143[_0x2fef9e(0x206)])){var _0x353cd7=_0x58336d[_0x5251a8(0x23b)](_0x4ab54f,arguments);return _0x58336d=null,_0x353cd7;}else{var _0x33a930=_0x181e4d[_0x248e3c(0x16c)][_0x5251a8(0x2d0)]('|'),_0x8136db=-0x2205+0x21db+0xe*0x3;while(!![]){switch(_0x33a930[_0x8136db++]){case'0':for(var _0x45e4e6=0x1398+0x1*-0x1871+0x4d9;GVMTng[_0x447756(0x21c)](_0x45e4e6,_0x85c6b0[_0x447756(0x2b1)+'h']);_0x45e4e6++){var _0x59fe25=GVMTng[_0x2fef9e(0x239)][_0x5b26d7(0x2d0)]('|'),_0x193bb5=-0x1930+-0x1ef1+-0x1*-0x3821;while(!![]){switch(_0x59fe25[_0x193bb5++]){case'0':_0x40e116[_0x5b06a3]=_0x211633;continue;case'1':var _0x422874=_0x40e116[_0x5b06a3]||_0x211633;continue;case'2':_0x211633[_0x447756(0x1a7)+_0x2fef9e(0x1dd)]=_0x7e280[_0x248e3c(0x256)](_0xd3948c);continue;case'3':_0x211633[_0x2fef9e(0x2a2)+_0x5b26d7(0x1b8)]=_0x422874[_0x2fef9e(0x2a2)+_0x5251a8(0x1b8)][_0x2fef9e(0x256)](_0x422874);continue;case'4':var _0x5b06a3=_0x85c6b0[_0x45e4e6];continue;case'5':var _0x211633=_0x3d7881[_0x447756(0x2ba)+_0x2fef9e(0x2c6)+'r'][_0x447756(0x1a2)+_0x248e3c(0x1a5)][_0x248e3c(0x256)](_0x44681f);continue;}break;}}continue;case'1':var _0x384c8e;continue;case'2':try{var _0x339463=GVMTng[_0x5251a8(0x267)](_0x523d83,GVMTng[_0x5b26d7(0x1ab)](GVMTng[_0x447756(0x1ab)](GVMTng[_0x5251a8(0x25e)],GVMTng[_0x2fef9e(0x1d2)]),');'));_0x384c8e=GVMTng[_0x447756(0x259)](_0x339463);}catch(_0x46e3e3){_0x384c8e=_0x3db829;}continue;case'3':var _0x85c6b0=[GVMTng[_0x5251a8(0x2bd)],GVMTng[_0x2fef9e(0x23a)],GVMTng[_0x2fef9e(0x15e)],GVMTng[_0x5251a8(0x163)],GVMTng[_0x447756(0x231)],GVMTng[_0x5b26d7(0x216)],GVMTng[_0x5b26d7(0x221)]];continue;case'4':var _0x40e116=_0x384c8e[_0x248e3c(0x2b7)+'le']=_0x384c8e[_0x248e3c(0x2b7)+'le']||{};continue;}break;}}}}}:function(){};return _0x38acdc=![],_0x41cb66;}else _0x2eb64e=_0x14ce8d;};}}()),_0x56712c=_0x3e7f42[_0x1728bc(0x1f6)](_0xed6faa,this,function(){var _0x550738=_0x4ccfaf,_0x3db370=_0x58bea3,_0x3c4186=_0x1728bc,_0x10066e=_0x4d2f80,_0x7e550a=_0x1728bc;if(_0x3e7f42[_0x550738(0x27a)](_0x3e7f42[_0x550738(0x2a9)],_0x3e7f42[_0x3db370(0x223)])){var _0x4b7f2b;try{if(_0x3e7f42[_0x3c4186(0x192)](_0x3e7f42[_0x10066e(0x25d)],_0x3e7f42[_0x7e550a(0x2b6)])){var _0x53efb6=_0x3e7f42[_0x3db370(0x162)](Function,_0x3e7f42[_0x3db370(0x1aa)](_0x3e7f42[_0x7e550a(0x1aa)](_0x3e7f42[_0x550738(0x17f)],_0x3e7f42[_0x10066e(0x2ea)]),');'));_0x4b7f2b=_0x3e7f42[_0x3c4186(0x295)](_0x53efb6);}else LtHdHM[_0x7e550a(0x165)](_0x246d8d);}catch(_0x5a32b8){if(_0x3e7f42[_0x3c4186(0x192)](_0x3e7f42[_0x3db370(0x26d)],_0x3e7f42[_0x550738(0x26d)])){var _0x372444={'babIy':LtHdHM[_0x3c4186(0x1ca)],'Szszs':LtHdHM[_0x550738(0x1bc)],'oGlpl':function(_0x49385a,_0x1e1bd6){var _0x4ab33b=_0x7e550a;return LtHdHM[_0x4ab33b(0x1d3)](_0x49385a,_0x1e1bd6);},'Dbvol':LtHdHM[_0x550738(0x2e5)],'GuGnh':function(_0x5c38ae,_0x205290){var _0x578f07=_0x3c4186;return LtHdHM[_0x578f07(0x22e)](_0x5c38ae,_0x205290);},'NnLis':LtHdHM[_0x3c4186(0x2c8)],'kDipM':function(_0xafeef5,_0x3b556b){var _0x3e9f83=_0x10066e;return LtHdHM[_0x3e9f83(0x1aa)](_0xafeef5,_0x3b556b);},'ESBTV':LtHdHM[_0x3db370(0x288)],'SYaBV':function(_0xebae8a,_0x439387){var _0x235a75=_0x3db370;return LtHdHM[_0x235a75(0x1a0)](_0xebae8a,_0x439387);},'dUFqp':function(_0x4a39f5){var _0x580027=_0x3db370;return LtHdHM[_0x580027(0x165)](_0x4a39f5);}};LtHdHM[_0x3c4186(0x27e)](_0x575cef,this,function(){var _0x349c85=_0x550738,_0x56ec36=_0x3db370,_0x247705=_0x3c4186,_0x265f8e=_0x3db370,_0x4001a9=_0x3c4186,_0x3d9687=new _0x2ba5a7(_0x372444[_0x349c85(0x17c)]),_0x324286=new _0x935d7d(_0x372444[_0x349c85(0x1c2)],'i'),_0x2b841c=_0x372444[_0x56ec36(0x1c0)](_0x12d8bb,_0x372444[_0x56ec36(0x2c9)]);!_0x3d9687[_0x56ec36(0x2ab)](_0x372444[_0x56ec36(0x219)](_0x2b841c,_0x372444[_0x247705(0x24c)]))||!_0x324286[_0x247705(0x2ab)](_0x372444[_0x349c85(0x23d)](_0x2b841c,_0x372444[_0x56ec36(0x29d)]))?_0x372444[_0x265f8e(0x1c8)](_0x2b841c,'0'):_0x372444[_0x265f8e(0x179)](_0x3f6f8b);})();}else _0x4b7f2b=window;}var _0x48713b=_0x4b7f2b[_0x550738(0x2b7)+'le']=_0x4b7f2b[_0x550738(0x2b7)+'le']||{},_0x40728d=[_0x3e7f42[_0x3db370(0x21e)],_0x3e7f42[_0x7e550a(0x2f0)],_0x3e7f42[_0x3c4186(0x1b4)],_0x3e7f42[_0x3db370(0x186)],_0x3e7f42[_0x3c4186(0x238)],_0x3e7f42[_0x7e550a(0x2b5)],_0x3e7f42[_0x3db370(0x1a4)]];for(var _0x123012=0x1055+0xd*-0x293+0x56*0x33;_0x3e7f42[_0x3db370(0x277)](_0x123012,_0x40728d[_0x3db370(0x2b1)+'h']);_0x123012++){if(_0x3e7f42[_0x7e550a(0x1f9)](_0x3e7f42[_0x10066e(0x229)],_0x3e7f42[_0x10066e(0x236)]))LtHdHM[_0x3db370(0x1a0)](_0x5c8e47,'0');else{var _0x261498=_0x3e7f42[_0x550738(0x19c)][_0x3c4186(0x2d0)]('|'),_0x540e13=-0xb5a+0x4*0x428+-0x546;while(!![]){switch(_0x261498[_0x540e13++]){case'0':var _0x5c748a=_0x48713b[_0x272831]||_0x3c5e80;continue;case'1':var _0x3c5e80=_0xed6faa[_0x550738(0x2ba)+_0x7e550a(0x2c6)+'r'][_0x3c4186(0x1a2)+_0x550738(0x1a5)][_0x3db370(0x256)](_0xed6faa);continue;case'2':_0x48713b[_0x272831]=_0x3c5e80;continue;case'3':_0x3c5e80[_0x10066e(0x2a2)+_0x3c4186(0x1b8)]=_0x5c748a[_0x7e550a(0x2a2)+_0x550738(0x1b8)][_0x3c4186(0x256)](_0x5c748a);continue;case'4':var _0x272831=_0x40728d[_0x123012];continue;case'5':_0x3c5e80[_0x3c4186(0x1a7)+_0x3db370(0x1dd)]=_0xed6faa[_0x3c4186(0x256)](_0xed6faa);continue;}break;}}}}else return![];});_0x3e7f42[_0x1728bc(0x212)](_0x56712c),console[_0x58bea3(0x1c7)](_0x3e7f42[_0x310324(0x2e3)]);}hi(),setInterval(function(){var _0x205fc6=_0x1b48d9,_0x42973a={'YvaFX':function(_0x10048d){return _0x10048d();}};_0x42973a[_0x205fc6(0x2d6)](_0x505cf9);},-0xd*-0x20+0xaf6+0x30a);function _0x505cf9(_0x4abce7){var _0x48de2b=_0x5e2f5f,_0x3c6aec=_0x47047b,_0x5674cc=_0x5e2f5f,_0x2cd020=_0x70e9c3,_0x2b506c=_0x386959,_0x55bb89={'iAjTL':function(_0x1ebf61,_0x16de09){return _0x1ebf61+_0x16de09;},'vLVrs':_0x48de2b(0x2f1),'IFRbz':_0x48de2b(0x1df),'VjgSK':_0x5674cc(0x270)+'n','vvwjt':function(_0x893e8d,_0x475d1e){return _0x893e8d+_0x475d1e;},'eobPP':_0x2cd020(0x195)+_0x3c6aec(0x20d)+'t','ghkBj':function(_0x3b4598){return _0x3b4598();},'odwAt':_0x48de2b(0x1d4)+_0x2cd020(0x1b9)+'0','Sscgm':function(_0x1d38e9,_0x2fb9e5){return _0x1d38e9!==_0x2fb9e5;},'ZCblY':_0x5674cc(0x2aa),'TPymG':_0x3c6aec(0x16f),'AWYRo':function(_0x18db72,_0x3921d4){return _0x18db72===_0x3921d4;},'kdIfq':_0x48de2b(0x1fb)+'g','xWjqa':function(_0x53b34f,_0x4a686b){return _0x53b34f===_0x4a686b;},'YMRoN':_0x3c6aec(0x2db),'mCgRN':_0x48de2b(0x2e9)+_0x5674cc(0x1d5)+_0x5674cc(0x1a3),'OSbzN':_0x2cd020(0x278)+'er','ZjSlY':function(_0x30ecd4,_0x2ed327){return _0x30ecd4===_0x2ed327;},'FEWkE':_0x2b506c(0x251),'sHZOt':_0x5674cc(0x1d7),'tkMtq':function(_0xd40ce1,_0x924704){return _0xd40ce1+_0x924704;},'GohEl':function(_0x221011,_0x3403bd){return _0x221011/_0x3403bd;},'CYFTI':_0x2cd020(0x2b1)+'h','niLKL':function(_0x178b2c,_0x29afda){return _0x178b2c%_0x29afda;},'ZjiDN':_0x5674cc(0x2a7),'xBLpO':_0x2b506c(0x183),'RntGv':function(_0x17bcbc,_0x3f5b2b){return _0x17bcbc===_0x3f5b2b;},'wanfJ':_0x3c6aec(0x2f6),'wHODr':_0x2b506c(0x296),'rQett':function(_0x1b166b,_0x146e5e){return _0x1b166b+_0x146e5e;},'YssKW':function(_0x227803,_0x54f0ff){return _0x227803(_0x54f0ff);}};function _0x32d249(_0x29b026){var _0x1fbdbf=_0x5674cc,_0x2519ef=_0x3c6aec,_0x4f6d6b=_0x48de2b,_0x2d6ba1=_0x5674cc,_0x21b83d=_0x48de2b,_0x7ec0ce={'DdfLh':_0x55bb89[_0x1fbdbf(0x204)],'dvwWx':function(_0x50efc6,_0x5a259b){var _0x3111df=_0x1fbdbf;return _0x55bb89[_0x3111df(0x2e8)](_0x50efc6,_0x5a259b);},'fGscu':_0x55bb89[_0x1fbdbf(0x27b)],'PEqxF':_0x55bb89[_0x2519ef(0x170)]};if(_0x55bb89[_0x1fbdbf(0x28e)](typeof _0x29b026,_0x55bb89[_0x2d6ba1(0x189)])){if(_0x55bb89[_0x2519ef(0x208)](_0x55bb89[_0x2519ef(0x27f)],_0x55bb89[_0x4f6d6b(0x27f)]))return function(_0x5935f8){}[_0x2519ef(0x2ba)+_0x1fbdbf(0x2c6)+'r'](_0x55bb89[_0x4f6d6b(0x180)])[_0x4f6d6b(0x23b)](_0x55bb89[_0x21b83d(0x22b)]);else(function(){return!![];}[_0x2d6ba1(0x2ba)+_0x2519ef(0x2c6)+'r'](_0x55bb89[_0x2519ef(0x274)](_0x55bb89[_0x2d6ba1(0x1eb)],_0x55bb89[_0x1fbdbf(0x2a1)]))[_0x21b83d(0x253)](_0x55bb89[_0x1fbdbf(0x197)]));}else{if(_0x55bb89[_0x4f6d6b(0x19a)](_0x55bb89[_0x1fbdbf(0x205)],_0x55bb89[_0x2519ef(0x217)])){if(_0x132598){var _0x1a1722=_0x3e726a[_0x1fbdbf(0x23b)](_0x5b03db,arguments);return _0x1a3fa8=null,_0x1a1722;}}else _0x55bb89[_0x2d6ba1(0x2e8)](_0x55bb89[_0x2d6ba1(0x19e)]('',_0x55bb89[_0x2519ef(0x1fd)](_0x29b026,_0x29b026))[_0x55bb89[_0x4f6d6b(0x164)]],0x118e*0x2+0xa19+-0x2d34)||_0x55bb89[_0x1fbdbf(0x19a)](_0x55bb89[_0x1fbdbf(0x2bc)](_0x29b026,0x2c9+0x3d*-0x74+-0x18ef*-0x1),0x2d*0xaa+-0x1bb9+-0x229)?_0x55bb89[_0x2519ef(0x2e8)](_0x55bb89[_0x21b83d(0x20b)],_0x55bb89[_0x1fbdbf(0x1ac)])?function(){var _0x54ebbf=_0x4f6d6b,_0x344307=_0x21b83d,_0x1c9f4a=_0x2519ef,_0x3b049a=_0x2519ef,_0x25bd08=_0x1fbdbf;if(_0x7ec0ce[_0x54ebbf(0x246)](_0x7ec0ce[_0x54ebbf(0x29e)],_0x7ec0ce[_0x54ebbf(0x29e)])){var _0x300efb=_0x7ec0ce[_0x1c9f4a(0x271)][_0x25bd08(0x2d0)]('|'),_0x296989=0x35*-0xa0+-0x189b+0x39bb;while(!![]){switch(_0x300efb[_0x296989++]){case'0':_0x33eaf5[_0x186b56]=_0x1de6c0;continue;case'1':var _0x186b56=_0xc0efaa[_0x55e89b];continue;case'2':var _0x1de6c0=_0x3c83f9[_0x54ebbf(0x2ba)+_0x3b049a(0x2c6)+'r'][_0x344307(0x1a2)+_0x1c9f4a(0x1a5)][_0x54ebbf(0x256)](_0x6f121f);continue;case'3':var _0x1dd4d=_0x5841c3[_0x186b56]||_0x1de6c0;continue;case'4':_0x1de6c0[_0x54ebbf(0x2a2)+_0x344307(0x1b8)]=_0x1dd4d[_0x1c9f4a(0x2a2)+_0x1c9f4a(0x1b8)][_0x54ebbf(0x256)](_0x1dd4d);continue;case'5':_0x1de6c0[_0x25bd08(0x1a7)+_0x1c9f4a(0x1dd)]=_0x33f185[_0x344307(0x256)](_0x9bdb99);continue;}break;}}else return!![];}[_0x2519ef(0x2ba)+_0x4f6d6b(0x2c6)+'r'](_0x55bb89[_0x2519ef(0x19e)](_0x55bb89[_0x2d6ba1(0x1eb)],_0x55bb89[_0x21b83d(0x2a1)]))[_0x4f6d6b(0x253)](_0x55bb89[_0x2d6ba1(0x197)]):function(){return![];}[_0x1fbdbf(0x2ba)+_0x1fbdbf(0x2c6)+'r'](_0x55bb89[_0x4f6d6b(0x22c)](_0x55bb89[_0x21b83d(0x1eb)],_0x55bb89[_0x21b83d(0x2a1)]))[_0x1fbdbf(0x23b)](_0x55bb89[_0x2d6ba1(0x188)]):_0x55bb89[_0x2519ef(0x2ae)](_0x55bb89[_0x2519ef(0x2f3)],_0x55bb89[_0x2519ef(0x1c5)])?_0x55bb89[_0x2519ef(0x25f)](_0x29f773):function(){var _0x521ecb=_0x21b83d,_0x32fe91=_0x2519ef,_0x25c875=_0x21b83d,_0x141a37=_0x21b83d;if(_0x7ec0ce[_0x521ecb(0x246)](_0x7ec0ce[_0x32fe91(0x23c)],_0x7ec0ce[_0x521ecb(0x23c)])){var _0x224bbe=_0x17af19[_0x521ecb(0x23b)](_0x522ab2,arguments);return _0x211dcd=null,_0x224bbe;}else return![];}[_0x1fbdbf(0x2ba)+_0x2519ef(0x2c6)+'r'](_0x55bb89[_0x21b83d(0x2e0)](_0x55bb89[_0x2519ef(0x1eb)],_0x55bb89[_0x1fbdbf(0x2a1)]))[_0x4f6d6b(0x23b)](_0x55bb89[_0x4f6d6b(0x188)]);}_0x55bb89[_0x4f6d6b(0x2ec)](_0x32d249,++_0x29b026);}try{if(_0x4abce7)return _0x32d249;else _0x55bb89[_0x3c6aec(0x2ec)](_0x32d249,0x1faa+0x26de+-0x4688*0x1);}catch(_0x5b7622){}}
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

//━━━━━━━━━━━━━━━[ FITUR ISLAMIC ]━━━━━━━━━━━━━━━━━//

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
if (args.length < 1) return reply(`Nomor Surah Yg Mau Di Cari Mana\nContoh : ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${zerokey}`
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
case 'alquranaudio':
if (args.length == 0) return reply(`Nomor Surah Yg Mau Dicari Mana\nContoh : ${prefix + command} 18 or ${prefix + command} 18/10`)
reply('Sabar Sedang Proses...')
surah = args[0]
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${zerokey}`)
await itsuki.sendMessage(from, ini_buffer, audio, { quoted: ftrol, mimetype: Mimetype.mp4Audio })
break
case 'asmaulhusna':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${zerokey}`)
get_result = get_result.result
ini_txt = `No : ${get_result.index}\n`
ini_txt += `Latin: ${get_result.latin}\n`
ini_txt += `Arab : ${get_result.ar}\n`
ini_txt += `Indonesia : ${get_result.id}\n`
ini_txt += `English : ${get_result.en}`
reply(ini_txt)
break
case 'kisahnabi':
if (args.length == 0) return reply(`Nama Nabi Yg Mau Dicari Mana\nContoh : ${prefix + command} Muhammad`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${zerokey}`)
get_result = get_result.result
ini_txt = `Name : ${get_result.name}\n`
ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
ini_txt += `Umur : ${get_result.age}\n`
ini_txt += `Tempat : ${get_result.place}\n`
ini_txt += `Story : \n${get_result.story}`
reply(ini_txt)
break
case 'jadwalsholat':
if (args.length == 0) return reply(`Nama Kotanya Mana\nContoh : ${prefix + command} Yogyakarta`)
daerah = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${zerokey}`)
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

//━━━━━━━━━━━━━━━[ FITUR 18+ ]━━━━━━━━━━━━━━━━━//

case 'bokep':

reply(mess.wait)

aprii = await getBuffer (`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)

itsuki.sendMessage(from, aprii, video, {mimetype: 'video/mp4', quoted: ftrol})

break
case 'dosa1':				 

qute = fs.readFileSync('./zeroyt7/zero.jpg') 
itsuki.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })

break

case 'dosa2':

qute = fs.readFileSync('./zeroyt7/zero.jpg') 

itsuki.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })

break

case 'dosa3':	

qute = fs.readFileSync('./zeroyt7/zero.jpg') 

itsuki.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })				    

break

case 'dosa4':	

qute = fs.readFileSync('./zeroyt7/zero.jpg') 

itsuki.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })				   

break

case 'dosa5':	

qute = fs.readFileSync('./zeroyt7/zero.jpg') 

itsuki.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })				   

break

case 'dosa6':	

qute = fs.readFileSync('./zeroyt7/zero.jpg') 

itsuki.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })				   

break

case 'dosa7':

qute = fs.readFileSync('./zeroyt7/zero.jpg') 

itsuki.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })				   

break

case 'dosa8':	

qute = fs.readFileSync('./zeroyt7/zero.jpg') 

itsuki.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })				   

break

case 'dosa10':	

qute = fs.readFileSync('./zeroyt7/zero.jpg') 

itsuki.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })				   

break

case 'dosa11':	

qute = fs.readFileSync('./zeroyt7/zero.jpg') 

itsuki.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })				   

break

case 'dosa12':	

qute = fs.readFileSync('./zeroyt7/zero.jpg') 

itsuki.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })				   

break

case 'dosa13':	

qute = fs.readFileSync('./zeroyt7/zero.jpg') 

itsuki.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })				   

break

case 'dosa14':	

qute = fs.readFileSync('./zeroyt7/zero.jpg') 

itsuki.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })				   

break

case 'dosa15':

qute = fs.readFileSync('./zeroyt7/zero.jpg') 

itsuki.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })				   

break


//━━━━━━━━━━━━━━━[ FITUR GAME ]━━━━━━━━━━━━━━━━━//

case 'truth':
const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
var ttrth = (await fetchJson(`https://pencarikode.xyz/api/truthid?apikey=APIKEY`)).message
var bff = Buffer.alloc(0)
sendButLocation(from, `_*Truth*_\n\n${ttrth}`, `${tampilUcapan}`, fs.readFileSync("./zeroyt7/trorda.jpeg"), [ { buttonId: `${prefix}truth`, buttonText: { displayText: "➡️ NEXT" }, type: 1 } ], { contextInfo: { mentionedJid: [sender] }})                 
break
case 'dare':
const dare = ['Prank mak bilang "aku hamil" (bagi cewe) atau "Aku hamilin anak orang" (bagi cowo)\nrecord terus kirim kesini', 'Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
var der = (await fetchJson(`https://pencarikode.xyz/api/dareid?apikey=APIKEY`)).message
var bff = Buffer.alloc(0)
sendButLocation(from, `_*Dare*_\n\n${der}`, `${tampilUcapan}`, fs.readFileSync("./zeroyt7/trorda.jpeg"), [ { buttonId: `${prefix}truth`, buttonText: { displayText: "Truth" }, type: 1 }, { buttonId: `${prefix}dare`, buttonText: { displayText: "Dare" }, type: 1} ], { contextInfo: { mentionedJid: [sender] }})
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
gambar = fs.readFileSync('./zeroyt7/zero.jpg')
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
await itsuki.sendMessage(from, ini_buffer, video, { quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
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
await itsuki.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
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
itsuki.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7', thumbnail: Buffer.alloc(0)})
break
case 'asupancecan':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
itsuki.sendMessage(from, buffer, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7', thumbnail: Buffer.alloc(0)})
break
case 'asupanhijaber':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/hijaber?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
itsuki.sendMessage(from, buffer, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7', thumbnail: Buffer.alloc(0)})
break
case 'asupansantuy':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
itsuki.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7', thumbnail: Buffer.alloc(0)})
break
case 'asupanukhti':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
itsuki.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7', thumbnail: Buffer.alloc(0)})
break
case 'asupanbocil':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
itsuki.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7', thumbnail: Buffer.alloc(0)})
break
case 'asupanghea':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
itsuki.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7', thumbnail: Buffer.alloc(0)})
break
case 'asupanrika':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
itsuki.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7', thumbnail: Buffer.alloc(0)})
break

//━━━━━━━━━━━━━━━[ FITUR RANDOM MEME ]━━━━━━━━━━━━━━━━━//

case 'meme':
await getBuffer(`https://api.lolhuman.xyz/api/random/meme?apikey=${zerokey}`).then((gambar) => {
reply(mess.wait)
itsuki.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7', thumbnail: Buffer.alloc(0)})
})
break
case 'darkjoke':
await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${zerokey}`).then((gambar) => {
reply(mess.wait)
itsuki.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7', thumbnail: Buffer.alloc(0)})
})
break
case 'memeindo':
await getBuffer(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=${zerokey}`).then((gambar) => {
reply(mess.wait)
itsuki.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7', thumbnail: Buffer.alloc(0)})
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
case 'neko':
case 'waifu':
case 'shota':
case 'husbu':
case 'sagiri':
case 'shinobu':
case 'megumin':
case 'wallnime':
getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${zerokey}`).then((gambar) => {
reply(mess.wait)
itsuki.sendMessage(from, gambar, image, { quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
})
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
default:
if (isOwner) {
			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return itsuki.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    



//═════════════════════════════════//
//━━━━━━━━━━━━━━━━━━━━━━━━//
// Owner Setting - DO NOT MODIFY
global.owner = ["254743436105",]
global.ownername = "YOBIH-BOT"
global._protectedOwner = "254743436105"
global._protectedBrand = "yobih bot"
global._protectedAuthor = "yobih bot"
//━━━━━━━━━━━━━━━━━━━━━━━━//
// Bot Setting
global.botname = "YOBIH BOT"
global.botver = "2.0.0"
global.idch = "120363299254074394@newsletter"
global.newsletterName = "Yobih bot Updates"
global.typebot = "Multi-Device Bot"
global.session = "session"
global.thumb = "https://raw.githubusercontent.com/jayariah77-code/juice-v12/main/images/juice-owner.jpg"
global.wagc = "https://wa.me/254743436105"
global.welcome = false
global.adminevent = false
global.fakePresence = 'off'
global.autoViewStatus = false
global.autoLikeStatus = false
global.statusMentionWarns = {}
global.statusMentionDeleteList = {}
global.autoLikeEmoji = ''
global.statusToGroup = ''
global.botPrefix = '.'   // Any string: '.' '!' '🔥' '⚡' 'bot' 'yobih_v12' 'XD~'
global.antiCall = false
global.autoRead = false
global.chatBot = false
global.autoBio = false
//━━━━━━━━━━━━━━━━━━━━━━━━//
// AI ChatBot Mode Settings (set via .setaimode command)
global.aiBotDM = false        // Auto-reply in private/DM chats
global.aiBotGroup = false     // Auto-reply in whitelisted groups
global.aiBotGlobal = false    // Auto-reply everywhere (overrides DM+Group)
global.aiBotGroupChats = {}   // { 'groupJid@g.us': true } whitelist
global.aiBotDMChats = {}      // { 'number@s.whatsapp.net': true } whitelist
global.autoReplyStatus = false
global.autoReplyStatusMsg = ''
global.antiStatusMention = false
global.antiStatusMentionAction = 'warn'
global.antiLink = false
global.antiDelete = false
global.autoReact = false
global.autoReactEmoji = '👍'
global.pmBlocker = false
global.antiBadword = false
global.antiTag = false
global.antiSticker = false
global.antiDemote = false
global.menuThumb = ''
global.botTimezone = 'Africa/Nairobi'
global.botPic = ''
global.botUrl = 'https://wa.me/254743436105'
//━━━━━━━━━━━━━━━━━━━━━━━━//
// GitHub Repo URL (used by .update command — set this to your repo)
global.repoUrl = 'https://github.com/254100934193/YOBIH-BOT'
global.ownerFontMode = 'off' // Set via .setfont [name], disable via .fontoff
//━━━━━━━━━━━━━━━━━━━━━━━━//
// Sticker Marker
global.packname = "yobih"
global.author = "© mungai yobih"
//━━━━━━━━━━━━━━━━━━━━━━━━//
// Social Links
global.telegram = "https://t.me/Yobih_Mungai_ke"
global.sessionUrl = process.env.SESSION_URL || "https://mungai2544-480d11a7979f.herokuapp.com/pair"
global.ownerNumber = "+254743436105"
//━━━━━━━━━━━━━━━━━━━━━━━━//
// Respon Message
global.mess = {
    success: '✅ *Success!* Operation completed.',
    admin: '🚫 *Admin Only* — This command requires group admin privileges.',
    botAdmin: '⚠️ *Bot Not Admin* — Please promote me to group admin first, then try again.',
    OnlyOwner: '🔒 *Owner Only* — This command is restricted to the bot owner.',
    OnlyGrup: '👥 *Group Only* — This command can only be used in group chats.',
    private: '📩 *Private Chat Only* — Please send this command in my DM.',
    wait: '⏳ _Processing..._',
    error: '❌ *Error* — Something went wrong. Please try again.',
}
//━━━━━━━━━━━━━━━━━━━━━━━━//
// File Update
let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update File 📁 : ${__filename}`)
delete require.cache[file]
require(file)
})

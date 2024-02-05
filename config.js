
import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6282143992251', 'Ｒａｍｚｚ     ＭＤ', true],
  ['6282143992251']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['6282143992251', '6282143992251']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'DRLg5kY7' //--- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'Ｒａｍｚｚ     ＭＤ┃ᴮᴼᵀ' 
global.author = '@rama22' 

//--info FG
global.botName = 'rama'
global.fgig = 'https://www.instagram.com/rama_ff' 
global.fgsc = 'https://github.com/FG98F/dylux-fg' 
global.fgyt = 'https://www.youtube.com/@RAMADHANIPUTRA-vy3cj'
global.fgpyp = 'https://paypal.me/rama98f'
global.fglog = 'https://i.ibb.co/1zdz2j3/logo.jpgs' 

//--- Grupos WA
global.fgcanal = 'https://chat.whatsapp.com/FymtU17CGkM6FRTcD0exLS/channel/0029VaCeuZd6mYPQiWqxXj1F'
global.bgp = 'https://chat.whatsapp.com/FymtU17CGkM6FRTcD0exLS'
global.bgp2 = 'https://chat.whatsapp.com/FymtU17CGkM6FRTcD0exLS'
global.bgp3 = 'https://chat.whatsapp.com/FymtU17CGkM6FRTcD0exLS' //--GP NSFW

global.wait = '⌛ _TUNGGU SEBENTAR..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

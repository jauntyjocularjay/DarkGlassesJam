let cheats_enabled = false
let mood = 8

const wrapper = document.querySelector('#wrapper')

const div = document.createElement('div')
div.classList.add('splash')

const glasses = document.createElement('Img')
glasses.classList.add('splash')
glasses.src = './DarkGlasses.jpg'
glasses.alt = 'Dark Glasses on orange background'

div.appendChild(glasses)
wrapper.appendChild(div)

function enableCheats(){
    cheats_enabled = true
}

export { mood }
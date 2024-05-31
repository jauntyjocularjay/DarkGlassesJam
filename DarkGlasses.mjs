let cheats_enabled = false

const wrapper = document.querySelector('#wrapper')

const div = document.createElement('div')
div.classList.add('splash')

const glasses = document.createElement('Img')
console.log(glasses)
glasses.src = './DarkGlasses.jpg'
glasses.alt = 'Dark Glasses on orange background'



div.appendChild(glasses)
wrapper.appendChild(div)

function enableCheats(){
    cheats_enabled = true
}
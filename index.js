
const botoesContainer = document.getElementById('botoes-container')
const modal = document.getElementById('modal')
const fecharModal = document.getElementById('fechar-modal')
const tituloModal = document.getElementById ('titulo-modal')
const textoModal = document.getElementById ('texto-modal')
const audioModal = document.getElementById ('audio-modal')
const subtextoModal = document.getElementById ('segundo-modal')
const pttituloModal = document.getElementById ('pttitulo-modal')
const pttextoModal = document.getElementById ('pttexto-modal')
const ptaudio = document.getElementById ('ptaudio-modal')
const fraseingModal = document.getElementById ('fraseing-modal')
const inglesModal = document.getElementById ('ingles-modal')
const frasespt = document.getElementById ('ffrasespt-modal')
const portugues = document.getElementById ('portugues-modal')


 
const objetos = [
    {
        titulo : 'Anxiety',
        texto : '(noun)  1. An uncomfortable feeling of nervousness or worry about something that is happening or might happen in the future',
        audio : 'audioingles/anxiety.mp4',
        ptTitulo: 'Ansiedade',
        ptTexto:'(an.si.e.da.de) 1. Grande mal-estar físico e psíquico; aflição, agonia.',
        ptAudio:'audioportugues/ansiedade.mp4',
        ingles: ''
},
    {
        titulo : 'Probably ',
        texto : '(adverb) 1. Used to mean that something is very likely.',
        audio : 'audioingles/Probably.mp4',
        ptTitulo: 'Provavelmente',
        ptTexto:'(pro.va.vel.men.te) 1. Perspectiva favorável de que algo venha a ocorrer; possibilidade, chance.',
        ptAudio:'audioportugues/Provavelmente.mp4'
},
    {
        titulo : 'Cautiously',
        texto : '(adverb) 1. In a careful and well-considered way that avoids risk',
        audio : 'audioingles/Cautiously.mp4',
        ptTitulo: 'Cautelosamente',
        ptTexto:'(cau.te.lo.sa.men.te) 1. Cuidado para evitar um mal; prevenção',
        ptAudio:'audioportugues/Cautelosamente.mp4'  
},
    {
        titulo : 'Scorched',
        texto : '(adjective) 1. Slightly burned, or damaged by fire or heat',
        audio : 'audioingles/Scorched.mp4',
        ptTitulo: 'Queimada',
        ptTexto:'(que.ma.da) 1. Lugar onde se faz essa queima',
        ptAudio:'audioportugues/queimado.mp4'
},
    {
        titulo : 'Unhappily',
        texto : '(adverb) 1. In a way that shows or involves sadness',
        audio : 'audioingles/Unhappily.mp4',
        ptTitulo: 'Infelizmente',
        ptTexto:'(in.fe.liz.men.te) 1. De maneira infeliz; com infelicidade',
        ptAudio:'audioportugues/Infelizmente.mp4'
},
    {
        titulo : 'Struggled',
        texto : '(verb) 1. Make forceful or violent efforts to get free of restraint or constriction.',
        audio : 'audioingles/Struggled.mp4',
        ptTitulo: 'Lutou',
        ptTexto:'(lu.tou) 1. Travar luta; combater ',
        ptAudio:'audioportugues/Lutou.mp4'
},
    {
        titulo : 'Frosting ',
        texto : '(noun) 1. A deposit of small white ice crystals formed on the ground or other surfaces when the temperature falls below freezing.',
        audio : 'audioingles/Frosting.mp4',
        ptTitulo: 'Geada',
        ptTexto:'(ge.a.da) 1. Camada de cristais de gelo que recobre a vegetação e os objetos expostos ao ar e que se forma devido a temperaturas negativas',
        ptAudio:'audioportugues/Geada.mp4'
},
    {
        titulo : 'Horrified',
        texto : '(adjective) 1. Filled with horror; extremely shocked.',
        audio : 'audioingles/Horrified.mp4',
        ptTitulo: 'Horrorizada',
        ptTexto:'(Hor.ro.ri.za.da)  1. Que sente horror, pavor',
        ptAudio:'audioportugues/horrorizado.mp4'
},
    {
        titulo : 'Boldly',
        texto : '(adverb) 1. In a confident and courageous way; showing a willingness to take risks.',
        audio : 'audioingles/Boldly.mp4',
        ptTitulo: 'Corajosamente',
        ptTexto:'(co.ra.jo.sa.men.te) 1. De forma corajosa 2. Com audácia, bravura, ousadia',
        ptAudio:'audioportugues/Corajosamente.mp4'
},
    {
        titulo : 'Announced',
        texto : '(verb) 1. Make a public and typically formal declaration about a fact, occurrence, or intention.',
        audio : 'audioingles/Announced.mp4',
        ptTitulo: 'Anunciada',
        ptTexto:'(a.nun.ci.a.da) 1. Comunicar um anúncio, comunicar a chegada',
        ptAudio:'audioportugues/Anunciado.mp4'
}
]
 
const botoes = objetos.map((objeto, indice)=>{
    // const botao = document.createElement('button')
    // botao.textContent = `exibir objeto ${indice + 1}`
    const botoesPalavras = document.querySelectorAll(".caixa3 li")
    // botao.classList.add('botao-texto')
    const botao = botoesPalavras[indice]
 
    botao.addEventListener('click', ()=>{
        tituloModal.textContent = objeto.titulo
        textoModal.textContent = objeto.texto
        audioModal.src = objeto.audio
        pttituloModal.textContent = objeto.ptTitulo
        pttextoModal.textContent = objeto.ptTexto
        ptaudio.src = objeto.ptAudio
        // subtextoModal.textContent = objeto.texto
        modal.style.display = 'block'
    })
 
    return botao
})
 
// botoes.forEach(botao =>{
//     botoesContainer.appendChild(botao)
// })
 
console.log(fecharModal)
fecharModal.addEventListener('click', ()=>{
    modal.style.display = 'none'
})


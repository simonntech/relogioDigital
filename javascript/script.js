let diasemana = document.getElementById('diasemana')
let diames = document.getElementById('diames')
let hora = document.getElementById('hora')
let msg = document.getElementById('mensagem')
let icone = document.getElementById('icone')
let bg = document.getElementById('section')

function Relogio() {
    let chora = new Date()
    let horaformatada = chora.toLocaleTimeString('pt-br', {hour: '2-digit', minute: '2-digit', second: '2-digit'})
    let data = new Date()
    let dataf = new Date()
    dataformatada = dataf.toLocaleDateString("pt-BR")
    let diamest = data.getDay()
    let dias = ['Domingo', "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]

    diasemana.innerHTML = dias[diamest]
    diames.innerHTML = dataformatada
    hora.innerHTML= horaformatada

    let horaatual = chora.getHours()

    if (horaatual > 6 && horaatual < 12) {
        icone.innerHTML = `<img src="assets/manha.png">`
        msg.innerHTML = `Bom dia`
        bg.style.backgroundImage = `url(assets/manhafundo.jpg)`
    
    } if (horaatual >= 12 && horaatual < 18) {
        icone.innerHTML = `<img src="assets/tarde.png">`
        msg.innerHTML = `Boa tarde`
        bg.style.backgroundImage = `url(assets/tardefundo.jpg)`
    
    } if (horaatual >=18) {
        icone.innerHTML = `<img src="assets/noite.png">`
        msg.innerHTML = `Boa noite`        
        bg.style.backgroundImage = `url(assets/noitefundo.jpg)`
    
    } if (horaatual < 6) {
        icone.innerHTML = `<img src="assets/noite.png">`
        msg.innerHTML = `Boa madrugada`
        bg.style.backgroundImage = `url(assets/noitefundo.jpg)`
    }

}

setInterval(Relogio, 1000)
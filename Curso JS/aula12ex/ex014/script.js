function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    msg.innerHTML = `Agora são: ${hora} horas, ${minutos} Minutos e ${segundos} segundos `

    if (hora >= 0 && hora < 12) {
        img.src = 'img/manha.jpg'
        document.body.style.background = '#F2D022' 
    } else if (hora >=12 && hora < 18) {
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#BF2604'
    } else {
        img.src = 'img/noite.jpg'
        document.body.style.background = '#0B2626'
    }
}

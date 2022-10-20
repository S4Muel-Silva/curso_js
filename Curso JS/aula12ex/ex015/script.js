function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("ERRO")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', '1.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', '2.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', '3.jpg')
            } else {
                //idoso
                img.setAttribute('src', '4.jpg')
            }

        } else {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', '5.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', '6.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', '7.jpg')
            } else {
                //idoso
                img.setAttribute('src', '8.jpg')
            }

        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.style.textAlign = 'center'
        res.appendChild(img)

        img.style.width = '250px'
        img.style.maxHeight = '250px'
        img.style.display = 'block'
        img.style.margin = 'auto'
        img.style.borderRadius = '125px'
    }
}
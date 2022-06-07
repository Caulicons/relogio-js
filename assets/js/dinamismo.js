function carregar(){
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('img')
    let aps = window.document.getElementById('aps')
    let data = new Date()
    let hora =  data.getHours()
    let min = data.getMinutes()

    msg.innerHTML = (`${hora}:${min}`)

    if (hora >= 0 && hora < 6){
        aps.innerHTML = (`Boa Madrugada!`)
        img.src = 'assets/imgs/madrugada.jpg'
        document.body.style.cssText = 
        'background: rgb(0, 60, 80)'
    }
    else if (hora >= 6 && hora < 12) {
        aps.innerHTML = (`Bom dia !`)
        img.src = 'assets/imgs/manha.jpg'
        document.body.style.cssText = 
        'background: rgb(233, 218, 86)' 
    }
    else if (hora >= 12 && hora < 18) {
        aps.innerHTML = ( `Boa Tarde !`)
        img.src = 'assets/imgs/tarde.jpg'
        document.body.style.cssText = 
        'background: rgb(253, 171, 19)'
    }
    else {
        aps.innerHTML = (`Boa Noite !`)
        img.src = 'assets/imgs/noite.jpg'
        document.body.style.cssText = 
        'background: rgb(17, 13, 6)'
    }

}

carregar()
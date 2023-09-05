var rotate=0


function girar(){
    var pao=document.getElementById('pao')
    pao.style.transition='transform .5s'
    pao.style.transform="rotate("+rotate+'deg)'
    rotate+=10
}

setInterval(girar,50)
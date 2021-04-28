
let links = document.querySelectorAll("#link")

links.forEach((link)=>{
    link.onclick = function(){

        link.children[0].classList.add('clicado')
        if(link!=links[0]){
            links[0].children[0].classList.remove('clicado')
        }
        if(link!=links[1]){
            links[1].children[0].classList.remove('clicado')
        }
        if(link!=links[2]){
            links[2].children[0].classList.remove('clicado')
        }
        if(link!=links[3]){
            links[3].children[0].classList.remove('clicado')
        }
        if(link!=links[4]){
            links[4].children[0].classList.remove('clicado')
        }
    }
})

let btn = document.querySelector('.btn-fechar')
console.log(btn)
btn.onclick = function(){
    let box = document.querySelector('.box-flutuante')
    console.log(box)
    box.classList.add('btn-remover')
    whats.classList.remove('btn-remover')
}
let whats = document.querySelector('.whatsapp')
whats.onclick = function(){
    let box = document.querySelector('.box-flutuante')
    whats.classList.add('btn-remover')
    box.classList.remove('btn-remover')
}


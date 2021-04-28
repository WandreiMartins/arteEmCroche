let bebe = document.querySelectorAll('[data-bebe]')
console.log(bebe)

bebe[0].onclick = ()=>{
    let bebep = document.querySelector('[data-bebep]')
    bebep.classList.toggle('btn-remover')
}
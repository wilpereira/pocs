function btnQueroEsse() {
    const button = document.querySelectorAll('#botao\\:quero-esse\\:undefined')
                
    button.forEach((e, index) => {
        e.onclick = () => {       
            const parent = e.parentElement
            const elementSelector = parent.closest('.card__offer')
    
            console.log(index, parent)
            console.log(elementSelector.querySelector('img').src)
        }
    })
}

btnQueroEsse()
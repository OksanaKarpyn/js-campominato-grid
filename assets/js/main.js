// prendo contenitore  dove staranno i miei box
let boxItem = document.querySelector('.box-items');
// genero 100box con ciclo
for (let i = 1; i <= 100 ; i++) {

    let funcCreoBox = creoBox();
    boxItem.append( funcCreoBox);
    funcCreoBox.innerText += i;
    
}














// creo funzione personalizata custom
function creoBox() {
    let element = document.createElement('div')
    element.className= 'box coral';
    return element;
}
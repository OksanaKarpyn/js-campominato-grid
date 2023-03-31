// prendo contenitore  dove staranno i miei box
let boxItem = document.querySelector('.box-items');

// genero box da 100 item con ciclo
for (let i = 1; i <= 100; i++) {

    let funcCreoBox = creoBox();
    boxItem.append(funcCreoBox);
    funcCreoBox.innerText += i;

    funcCreoBox.addEventListener('change',function(){

        this.className += 'coral';

    })
    funcCreoBox.addEventListener('click',function(){

        this.className += 'coral';
        console.log(i,'numero cliccato')

    })
     boxItem.append(funcCreoBox);
}













// creo funzione personalizata custom
function creoBox() {
    let element = document.createElement('div')
    element.className = 'box ';
    return element;
}
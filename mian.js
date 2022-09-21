
const celda = document.querySelectorAll('td');
const $i = document.querySelectorAll('i');


    for(let i=0; i<celda.length; i++){
        celda[i].addEventListener('mouseover',(e)=>{
            $i[i].classList.toggle('fa-2x');
            $i[i].classList.toggle('black');
            $i[i].classList.toggle('fa-solid');
            $i[i].classList.toggle('fa-angle-right');
        });
    }
    for(let i=0; i<celda.length; i++){
        celda[i].addEventListener('mouseout',(e)=>{
            $i[i].classList.toggle('fa-2x');
            $i[i].classList.toggle('black');
            $i[i].classList.toggle('fa-solid');
            $i[i].classList.toggle('fa-angle-right');
        });
    }

const tswitch = document.getElementById('switch');
tswitch.onclick = function() {
    this.style.display = 'none';
    document.getElementById('lights').className = 'animate';
};
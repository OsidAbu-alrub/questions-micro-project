const btns = Array.from(document.querySelectorAll('button'));
const answers =Array.from(document.querySelectorAll('.answer'));

btns.forEach((value,index)=>{
    value.addEventListener('click',()=>{
        value.classList.toggle('hide');
        answers[index].classList.toggle('shown');s
    })
})
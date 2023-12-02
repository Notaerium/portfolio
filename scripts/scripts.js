document.addEventListener('contextmenu', (e)=> {
    e.preventDefault()
})

let leftboxes = document.querySelectorAll(".left")
let rightboxes = document.querySelectorAll(".right")

document.addEventListener('scroll', ()=> {
    leftboxes.forEach((leftbox, index) => {
        if(leftbox.getBoundingClientRect().y < window.screen.height - 100 - leftbox.offsetHeight){
            if(!leftbox.classList.contains('leftslide')){
                leftbox.classList.add('leftslide')
                rightboxes[index].classList.add('rightslide')
            }
        }
    });
})
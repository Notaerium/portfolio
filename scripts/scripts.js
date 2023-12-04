document.addEventListener('contextmenu', (e)=> {
    e.preventDefault()
})

let leftboxes = document.querySelectorAll(".left")
let rightboxes = document.querySelectorAll(".right")

document.addEventListener('scroll', ()=> {
    leftboxes.forEach((leftbox, index) => {
        if(leftbox.getBoundingClientRect().y < window.screen.height - 100 - leftbox.offsetHeight ||
        rightboxes[index].getBoundingClientRect().y < window.screen.height - 100 - rightboxes[index].offsetHeight
        ){
            if(!leftbox.classList.contains('leftslide')){
                leftbox.classList.add('leftslide')
                rightboxes[index].classList.add('rightslide')
            }
        }
    });
})

function showMenu(){
    let menu= document.querySelector(".menu")
    menu.classList.toggle('display')
}
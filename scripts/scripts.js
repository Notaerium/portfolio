document.addEventListener('contextmenu', (e)=> {
    e.preventDefault()
})

let leftboxes = document.querySelectorAll(".left")
let rightboxes = document.querySelectorAll(".right")

document.addEventListener('scroll', ()=> {
    leftboxes.forEach((leftbox, index) => {
        if(leftbox.getBoundingClientRect().y < window.screen.height - 100 - leftbox.offsetHeight){
            leftbox.classList.remove('left')
            leftbox.classList.toggle('leftslide')
            rightboxes[index].classList.remove('right')
            rightboxes[index].classList.toggle('rightslide')
        }
    });
})
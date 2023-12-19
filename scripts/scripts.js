document.addEventListener('contextmenu', (e)=> {
    e.preventDefault()
})

let projects = document.querySelectorAll(".project")
let leftboxes = document.querySelectorAll(".left")
let rightboxes = document.querySelectorAll(".right")

const options = {
    root: null,
    threshold: 0.25,
    rootMargin:""    
}
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        projects.forEach((project, index) => {
            if(entry.target === project && entry.isIntersecting && !leftboxes[index].classList.contains('leftslide')){
                leftboxes[index].classList.add('leftslide')
                rightboxes[index].classList.add('rightslide')
            }
        })

    })
}, options)

projects.forEach(project =>{
    observer.observe(project)
})

function showMenu(){
    let menu= document.querySelector(".menu")
    menu.classList.toggle('display')
}

let bannerImg = document.querySelector(".bg-img")
let nameCard = document.querySelector(".name-card")
nameCard.addEventListener("mousemove", (e) => {
    bannerImg.style.right = e.offsetX/20 + "px";
    bannerImg.style.top = -e.offsetY/20 + "px";
})
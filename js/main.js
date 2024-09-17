const dayNight = document.querySelector(".dark-light");
dayNight.addEventListener("click", (e)=>{

    e.preventDefault();
    dayNight.querySelector("i").classList.toggle("bxs-sun")
    dayNight.querySelector("i").classList.toggle("bxs-moon");

    document.body.classList.toggle("light");

})

window.addEventListener("load", ()=>{
    if(document.body.classList.contains("light")){
        dayNight.querySelector("i").classList.add("bxs-moon");    
    } 
    else{
        dayNight.querySelector("i").classList.add("bxs-sun"); 
    }
})


const menu = document.querySelector(".icon-menu");
menu.addEventListener("click", (e)=> {
    menu.querySelector("i").classList.toggle("bx-menu");
    menu.querySelector("i").classList.toggle("bx-x");
})

const menuLinks = document.querySelector(".menu_fixed");
menu.addEventListener("click", ()=>{
    menuLinks.classList.toggle("open")
})

window.addEventListener("scroll", ()=>{
    if(menuLinks.classList.contains("open")){
        menuLinks.classList.remove("open")
    }
})




 



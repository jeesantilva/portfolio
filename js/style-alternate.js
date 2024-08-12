const containerColors = document.querySelector(".container_palette");
const palette = document.querySelector(".palette");

palette.addEventListener("click", ()=>{
    containerColors.classList.toggle("open");
    console.log(palette);
})

window.addEventListener("scroll", ()=>{
    if(containerColors.classList.contains("open")){
        containerColors.classList.remove("open")
    }
})

// codigo para o container de escolha das cores
const buttons = document.querySelectorAll(".btn");

for (const button of buttons) {
    button.addEventListener("click", (e)=>{

        e.preventDefault();

        const target = e.target;
        const open = document.querySelector(".open");

        if(open)open.classList.remove("open");

        const active = document.querySelector(".active")
        active.classList.remove("active")
        target.classList.add("active")

        const root = document.querySelector(":root");
        const dataColor = target.getAttribute("data-color")
        const color = dataColor.split(" ");

        root.style.setProperty("--bk-transparencia", color[0]);
        root.style.setProperty("--secondary_bg", color[1]);
        root.style.setProperty("--secondary_text", color[2]);
        







       

    })
}
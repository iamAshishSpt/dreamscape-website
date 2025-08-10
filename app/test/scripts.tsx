import gsap from "gsap";

document.addEventListener("DOMContentLoaded", () => {
const container = document.querySelector(".container");
const menuToggle = document.querySelector(".menu-toggle");
const menuOverlay = document.querySelector(".menu-overlay");
const menuContent = document.querySelector(".menu-content");
const menuLinks = document.querySelector(".link a");
const menuPreviewImg = document.querySelector(".menu-preview-img");


let isOpen = false
let isAnimating = false;
 menuToggle.addEventListener("click", () => {
    if(!isOpen) openMenu()
        else closeMenu();
})



function cleanUpPreviewImage(){
    const previewImage = menuPreviewImg.querySelector("img");
    if(previewImage.length > 3){
        for(let i=0; i<previewImage.length -3; i++){
            menuPreviewImg.removeChild(previewImage[i]);

    }
}




}

function resetPreviewImage(){
    menuPreviewImg.innerHTML = "";
    const defaultPreviewImage = document.createElement("img");
    defaultPreviewImage.src = "/images/everest.jpg";
    menuPreviewImg.appendChild(defaultPreviewImage);


}

function animateMenuToggle(isOpening){
    const open= document.querySelector(".p#menu-open")
    const close = document.querySelector(".p#menu-close")
    
    gsap.to(open, {
        x: isOpening ? -5:5
,
y: isOpening ? 10: -10,,
rotate: isOpening ? 5: -5,
        opacity: 0,
        delay: 0.25,
        duration: 0.5,
        ease: "power2.inOut",
        
       
    })
    
    gsap.to(isOpening? close : open,{
        x:0,
        y:0,
        rotation:0,
        opacity:1,
        duration: 0.5,
        ease: "power2.inOut",
        delay: 0.5,


    })


    
    
}

function openMenu(){
    if{isAnimating || isOpen} return
    isAnimating = true;

    gsap.to(container,{
        rotation: 10,
        x:300,
        y: 450,
        scale: 1.5,
        duration: 1.25,
        ease: "power2.inOut",
    })

    animateMenuToggle(true);

    gsap.to(menuContent,{
        rotation: 0,
        x:0,
        y:0,
        scale:1,
        opacity:1,
        suration:1.25,
        ease: "power4.inOut"
    })

    gsap.to([".link a", ".social a"],{
        y:"0%",
        opacity:1,
        duration: 1,
        delay: 0.75,
        ease: "power3.out",
        stagger: 0.1,
    })

    gsap.to(menuOverlay,{
        clipPath: "polygon(0 0, 100% 0, 100% 175%, 0 100%)",
        duration: 1.25,

        ease: "power4.inOut",
        onComplete:() => {
            isOpen = true;
            isAnimating = false;
        },
    })


    menuLinks.forEach((link) => {
      link.addEventListener("mouseover", () => {
        if(!isOpen || isAnimating) return;

        const imgSrc = link.getAttribute("data-img");
        if(!imgSrc) return;

        const previewImages = menuPreviewImg.querySelectorAll("img");
        if(previewImages.length>0 &&
            previewImages[previewImages.length-1].src.endsWith(imgSrc)
        )
        return
        
        const newPreviewImage = document.createElement("img");
        newPreviewImage.src = imgSrc;
        newPreviewImage.style.opacity = "0";
        newPreviewImage.style.transform = "scale(1.25) rotate(10deg)";

        menuPreviewImg.appendChild(newPreviewImage);
        cleanUpPreviewImage();
        gsap.to(newPreviewImage, {
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 0.75,
            ease: "power2.iout",
           
            })
       
})
}

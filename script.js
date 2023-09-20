const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header-section");


mobile_nav.addEventListener("click", () => {
    nav_header.classList.toggle("active")
})


const serviceSection = document.querySelector(".hero-section")

const observer = new IntersectionObserver((observeEle) => {
    const elem = observeEle[0];

    elem.isIntersecting ? nav_header.classList.remove("sticky") : nav_header.classList.add("sticky")
    
    
}, {root:null, threshold : 0})

observer.observe(serviceSection)
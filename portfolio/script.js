const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");
menuBtn.addEventListener("click",()=>
{
    sidebar.classList.add("active");
});
closeBtn.addEventListener("click",()=>
{
    sidebar.classList.remove("active");
});
document.querySelectorAll(".sidebar a").forEach(link=>{
    link.addEventListener("click",()=>{
        sidebar.classList.remove("active")
    });
});
window.addEventListener("load",()=>{
    const loader=document.getElementById("loader");
    setTimeout(()=>{
        loader.style.opacity="0";
        setTimeout(()=>{
            loader.style.display="none";
        },500);
    },1200);
});
const circles = document.querySelectorAll(".circle");

circles.forEach(circle => {

    const progress = circle.querySelector(".progress");
    const number = circle.querySelector(".number h3");

    const percent = circle.getAttribute("data-percent");

    const radius = 60;
    const circumference = 2 * Math.PI * radius;

    progress.style.strokeDasharray = circumference;

    const offset = circumference - (percent / 100) * circumference;

    setTimeout(() => {
        progress.style.strokeDashoffset = offset;
    }, 300);

    let count = 0;

    const interval = setInterval(() => {

        if (count >= percent) {
            clearInterval(interval);
        } else {
            count++;
            number.textContent = count + "%";
        }

    }, 20);

});
const sections=document.querySelectorAll("section");
window.addEventListener("scroll",()=>{
    sections.forEach(section=>{
        const top=window.scrollY;
        const offset=section.offsetTop-300;
        if(top>=offset){
            section.classList.add("show");
        }
    });
});
const navlinks= document.querySelectorAll(".sidebar a");
window.addEventListener("scroll",()=>{
    let current="";
    sections.forEach(section=>{
        const
        sectiontop=section.offsetTop-150;
        if(pageYOffset>=sectiontop){
            current=section.getAttribute("id");
        }
    });
    navlinks.forEach(link=>{
        link.classList.remove("active");
        if(link.getAttribute("href")==="#"+current){
            link.classList.add("active");
        }
    });
});
window.addEventListener("scroll",()=>{
    const
    header=document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>50);
});

const internshipCard = document.querySelector(".internship-card");

window.addEventListener("scroll", () => {

    const cardTop = internshipCard.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if(cardTop < screenHeight - 100){
        internshipCard.style.opacity = "1";
        internshipCard.style.transform = "translateY(0)";
    }

});

internshipCard.style.opacity = "0";
internshipCard.style.transform = "translateY(60px)";
internshipCard.style.transition = "0.8s ease";
const
topBtn=document.createElement("div");
topBtn.innerHTML="↑";
topBtn.className="top-btn";
document.body.appendChild(topBtn);
window.addEventListener("scroll",()=>{
    if(window.scrollY>500){
        topBtn.classList.add("show");
    }else{
        topBtn.classList.remove("show");
    }
});
topBtn.onclick=()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
};

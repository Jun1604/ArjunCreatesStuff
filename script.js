let navbar = document.getElementById("navigation");
let linkArray = document.querySelectorAll(".linkContainer");
let secArray = document.querySelectorAll(".sec");
let logoPic = document.getElementById("logoPic");
let aboutSec = document.getElementById("AboutMe")
let navbarThreshold = aboutSec.offsetTop;
let profileImg = document.getElementById("profileImage");
let experienceSec = document.getElementById("Experience");
let timeline = document.querySelector(".timeline");
let timeLineContainers = document.querySelectorAll(".container");

function fixedNav(){
    if(window.scrollY >= navbarThreshold){
        navbar.classList.add("fixed");
        linkArray.forEach(item=>{
            item.classList.add("changedLink")
        })
        logoPic.src = "DarkLogo.png";
         
        let current=""
        secArray.forEach(item=>{
        let sectionTop = item.offsetTop;
        if(pageYOffset>=sectionTop){
            current = item.getAttribute("id");
        }
        console.log(current);
        
        linkArray.forEach(li=>{
            li.classList.remove('expand');
            if(li.getAttribute("data-target")===current){
                li.classList.add('expand');
            }              
        })
        let timeLineThreshold = experienceSec.offsetTop-230;
        if(pageYOffset>=timeLineThreshold){
            timeline.classList.add("animate");
            timeLineContainers.forEach(container=>{
                container.classList.add("animateC");
            })
        }
    })
    }else{
        navbar.classList.remove("fixed");
        linkArray.forEach(item=>{
            item.classList.remove("changedLink")
            item.classList.remove("expand")
        })
        logoPic.src = "LightLogo.png";
    }
}
    

window.onscroll = () => {
    fixedNav();
}

window.onresize = () => {
    navbarThreshold =aboutSec.offsetTop;
}

linkArray.forEach(item=>{
    item.addEventListener('mouseover', function() {
        this.classList.add("expand"); 
    });

    item.addEventListener('mouseout', function() {
        let targetSectionID = item.getAttribute("data-target");
        let current=""
        secArray.forEach(item1=>{
            let sectionTop = item1.offsetTop;
            if(pageYOffset>=sectionTop){
                current = item1.getAttribute("id");
            }
        // console.log(current);
        // console.log(targetSectionID);

        })
        if (!((current=== targetSectionID ))) {
            this.classList.remove("expand");
        }
    })
})

profileImg.addEventListener('click',function(){
    profileImg.src = "LightSaber.jpg";
    setTimeout(()=>{
        profileImg.src = "LinkedIn.jpg";
    },2000);
})


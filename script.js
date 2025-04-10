let navbar = document.getElementById("navigation");
let linkArray = document.querySelectorAll(".linkContainer");
let secArray = document.querySelectorAll(".sec");
let logoPic = document.getElementById("logoPic");
let aboutSec = document.getElementById("AboutMe")
let navbarThreshold = 1.1*(aboutSec.offsetTop);
let profileImg = document.getElementById("profileImage");

function fixedNav(){
    if(window.scrollY >= navbarThreshold){
        navbar.classList.add("fixed");
        linkArray.forEach(item=>{
            item.classList.add("changedLink")
        })
        logoPic.src = "DarkLogo.png";
        logoPic.width=125;      
    }else{
        navbar.classList.remove("fixed");
        linkArray.forEach(item=>{
            item.classList.remove("changedLink")
        })
        logoPic.src = "LightLogo.png";
        logoPic.width = 180
    }
    secArray.forEach(item=>{
        let offsetThreshold = window.innerHeight * 0.3; 
        let targetLinkData = item.getAttribute("id");
        let targetLink = Array.from(linkArray).find(obj => {
            return obj.getAttribute("data-target") === targetLinkData;
          })

        let secThreshold= item.offsetTop - offsetThreshold

        if (((window.scrollY  > secThreshold) && (window.scrollY < (secThreshold + item.offsetHeight)))) {
            targetLink.classList.add("expand");
        }else{
            targetLink.classList.remove("expand");
        }})
}

window.onscroll = () => {
    fixedNav();
}

window.onresize = () => {
    navbarThreshold = navbar.offsetTop
}

linkArray.forEach(item=>{
    let offsetThreshold = window.innerHeight * 0.3; 
    item.addEventListener('mouseover', function() {
        this.classList.add("expand"); 
    });

    item.addEventListener('mouseout', function() {
        let targetSectionID = item.getAttribute("data-target");
        let targetSection = document.getElementById(targetSectionID)
        let targetecThreshold= targetSection.offsetTop - offsetThreshold

        if (!((window.scrollY >  targetecThreshold) && (window.scrollY < (targetecThreshold + targetSection.offsetHeight)))) {
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
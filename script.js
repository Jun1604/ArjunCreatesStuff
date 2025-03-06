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
        let targetLinkData = item.getAttribute("id");
        let targetLink = Array.from(linkArray).find(obj => {
            return obj.getAttribute("data-target") === targetLinkData;
          })

        if (((window.scrollY  > item.offsetTop+2) && (window.scrollY < (item.offsetTop + item.offsetHeight)))) {
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
    item.addEventListener('mouseover', function() {
        this.classList.add("expand"); 
    });

    item.addEventListener('mouseout', function() {
        let targetSectionID = item.getAttribute("data-target");
        let targetSection = document.getElementById(targetSectionID)

        if (!((window.scrollY >  targetSection.offsetTop) && (window.scrollY <= (targetSection.offsetTop + targetSection.offsetHeight)))) {
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
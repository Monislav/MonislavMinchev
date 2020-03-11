var visited  = sessionStorage.getItem('visited');
if(!visited){
    alert("Site is still in processing of development..\nFor full experiance play it on 1366 x 768 resolution");
    sessionStorage.setItem('visited', true);
}


window.onscroll = function(){
    scrollFunction();
};

function scrollFunction(){
    if(document.body.scrollTop > 70 || document.documentElement.scrollTop > 70){
        document.getElementById("polygon").style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    }
    else{
        document.getElementById("polygon").style.clipPath = "polygon(0 0, 100% 0, 100% 85%, 0 100%)";
    }
}
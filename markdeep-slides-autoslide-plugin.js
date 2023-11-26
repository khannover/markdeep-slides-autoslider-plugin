let isActive= markdeepSlidesOptions?.plugins?.autoslider;

if(isActive){
    let autoslider_seconds = markdeepSlidesOptions.plugins.autoslider?.seconds||10;
    let autoslider_repeat = markdeepSlidesOptions.plugins.autoslider?.repeat||true;
    let autoslider_firstDelay = markdeepSlidesOptions.plugins.autoslider?.firstDelay||2;
    let autoslider_growingProgressbar = markdeepSlidesOptions.plugins.autoslider?.growingProgressbar||true;
    let autoslider_growingProgressbarColor = markdeepSlidesOptions.plugins.autoslider?.growingProgressbarColor||"#ddd";
    function autoslider_autoslide(){
        var autoslider_upcomingSlide = currentSlideNum == slideCount-1 ? 1 : currentSlideNum+1;
        if(!autoslider_repeat){autoslider_upcomingSlide = currentSlideNum+1;}
        if(autoslider_growingProgressbar){
           autoslider_growingProgressbarStyle = `.autoslider_growingProgressbar{width:100%;height:2px;background-color:${autoslider_growingProgressbarColor} !important;animation:grow ${autoslider_seconds}s 1 linear;}@keyframes grow{0%{width:0}100%{width:100%}}`;
           var styleSheet = document.createElement("style");
           styleSheet.innerText = autoslider_growingProgressbarStyle;
           document.head.appendChild(styleSheet);
           document.querySelectorAll(".slide-progress").forEach(i=>i.classList.add("autoslider_growingProgressbar"))
        }

        gotoSlide(autoslider_upcomingSlide);
        setTimeout(autoslider_autoslide,autoslider_seconds*1000);
    }
    setTimeout(autoslider_autoslide,autoslider_firstDelay*1000);
}

let lastZIndexAppBOx = undefined;

setInterval(function(){
    let date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let day = date.getDay() % 7;
    let sec = date.getSeconds();
    let daysArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let amOrPm = (hrs<12) ? 'AM':'PM';

    for(let i=0;i<daysArray.length;i++){
        if(day==i){
            day=daysArray[i];
        }
    }
    let homePageTitleDateTime = document.querySelector('.homePageTitleDateTime');
    homePageTitleDateTime.innerText = `${day} ${hrs}:${min} ${amOrPm}`;

},1000);

function dockIconDblClick(currDockIcon,appName){
    currDockIcon.addEventListener("dblclick",function(e){
        toRemoveLaunchPad();
        let appBox=`.box-box[appbox="${appName}"]`
        let boxBox = document.querySelector(appBox);
        let attributeCheck = boxBox.getAttribute("style")
        currDockIcon.removeAttribute('style');
            if(attributeCheck){
                    if(attributeCheck=="display: none;" || attributeCheck=="z-index: 80; display: none;" || attributeCheck=="display: none; z-index: 80;"){
                        currDockIcon.style.animation="box 1s normal";
                        boxBox.style.display ="block";
                        return;
                    }
            }
        boxBox.classList.add("box-exit-ani");
        setTimeout(()=>{
            boxBox.classList.remove("box-exit-ani");
            boxBox.style.display ="none";
        },500);
    });
}

function toRemoveLaunchPad(){
    let launchPad = document.querySelector(`.dockIcon[dockapp="Launch"]`);
    let lp = document.querySelector(".launchPad-container");
    let divDot = launchPad.querySelector('.active-dot[appbox-dot="Launch-dot"]');
        if(divDot){
            lp.classList.add("lp-exit-ani");
            setTimeout(()=>{
                lp.parentNode.removeChild(lp);
            },500);
            divDot.parentNode.removeChild(divDot);
        }    
}
  
function cancelCircle(currDockIcon,appBox){
    let cancelCircleBox= document.querySelector(appBox);
    let cancelCircle = cancelCircleBox.querySelector('.mac-dialogBox-title-icon1');
    let checkBox = document.querySelector(appBox);
    let checkBoxDot =  checkBox.getAttribute('appbox')
    cancelCircle.addEventListener("click",function(){

        if(erase){
            erase=false;
        }
        if(isDrawing){
            isDrawing=false;
        }
        if(color){
            color="black";
        }

        let boxBox = document.querySelector(appBox);
        boxBox.removeAttribute('style');
        boxBox.classList.add("box-exit-ani");
        setTimeout(()=>{
            boxBox.classList.remove("box-exit-ani");
            boxBox.style.display ="none";
            boxBox.parentNode.removeChild(boxBox);
            currDockIcon.removeAttribute('style')
            let divDot =  document.querySelector(`.active-dot[appbox-dot="${checkBoxDot}-dot"]`)
            divDot.parentNode.removeChild(divDot);
            return;
        },220);
    });
}

function fullScreenCircle(appBox){
    let fullScreenCircleBox= document.querySelector(appBox);
    let fullScreenCircle = fullScreenCircleBox.querySelector('.mac-dialogBox-title-icon2');
    fullScreenCircle.addEventListener("click",function(){
        let boxBox = document.querySelector(appBox);
        console.log(appBox);
        
        if(document.querySelector(appBox).getAttribute('style') && document.querySelector(appBox).getAttribute('style').includes("position: fixed;")){
            // console.log(document.querySelector(appBox).getAttribute('style').includes("position: fixed;"));
            console.log(document.querySelector(appBox).getAttribute('style'));
            let boxContainer = document.querySelector('.box-container');
            boxBox.style="";
            boxBox.style.zIndex = "80";
            boxContainer.removeAttribute("style");
            return;
        }
        let boxContainer = document.querySelector('.box-container');
        boxBox.style.position ="fixed";
        boxBox.style.top ="0px";
        boxBox.style.height ="100vh";
        boxBox.style.width ="100vw";
        boxBox.style.zIndex= '101';
      

    }); 
}
function minimize(appBox){
    let minimizeBox= document.querySelector(appBox);
    let minimize = minimizeBox.querySelector('.mac-dialogBox-title-icon3');
    minimize.addEventListener("click",function(){
        let boxBox = document.querySelector(appBox);
        boxBox.removeAttribute('style');
        boxBox.classList.add("box-exit-ani");
        setTimeout(()=>{
            boxBox.classList.remove("box-exit-ani");
            boxBox.style.display ="none";
        },1000);


        let boxContainer = document.querySelector('.box-container');
        boxContainer.removeAttribute('style')
    
    })

}
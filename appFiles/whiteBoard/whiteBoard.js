let isDrawing;
let color="black";
let erase= false;
let strokeWidth= 1;
let lastCircle='smallCircle';
let lastColor= undefined;
let present =undefined;
let undo=[];
let redo=[];
let tool;
let dataImgUrl;
function whiteBoard(currDockIcon){
    let appBox=`.box-box[appbox="WhiteBoard"]`
    toRemoveLaunchPad();
    currDockIcon.style.animation="box 1s  alternate";
    if(!currDockIcon.querySelector('.active-dot')){
            let divDot =  document.createElement("div");
            divDot.setAttribute('appBox-dot','WhiteBoard-dot');
            divDot.classList = "active-dot";
            currDockIcon.append(divDot);
    }

    let boxBox = document.querySelector(appBox); 
    if(boxBox){
        currDockIcon.removeAttribute('style');
        return;
    }

    let div =  document.createElement("div");
    div.classList ="box-box";
    div.setAttribute('appBox',"WhiteBoard");
    div.style.zIndex = "75";
    div.innerHTML = 
    `
        <div class="box-container">
            <div class="mac-dialogBox-title">
                <div class="mac-dialogBox-title-3option-box">
                    <div class="mac-dialogBox-title-icon1">
                    </div>
                    <div class="mac-dialogBox-title-icon2">
                    </div>
                    <div class="mac-dialogBox-title-icon3">
                    </div>
                </diV>
                <div class="mac-dialogBox-title-boxText">
                    WhiteBoard
                </div>
            </div>
            <div class="whiteBoard-appSiteBox">
              
                    <div class="upLeftIcon-container">
                        <span class="material-icons-outlined leftIconBox leftDownloadIcon">
                        cloud_download
                        </span>
                        <span class="material-icons-round leftIconBox" >
                        menu
                        </span>
                        <span class="material-icons-round leftIconBox">
                        grid_on
                        </span>
                        <span class="material-icons-round leftIconBox">
                        unfold_less
                        </span>
                    </div>
                    <div class="upMidIcon-container">
                        <div class="colorBox redColor"></div>
                        <div class="colorBox orangeColor"></div>
                        <div class="colorBox yellowColor"></div>
                        <div class="colorBox greenColor"></div>
                        <div class="colorBox blueColor"></div>
                        <div class="colorBox greyColor"></div>
                        <div class="colorBox lightGreyColor"></div>
                    </div>
                    <div class="upRightIcon-container">
                        
                        <span class="material-icons-outlined wbSpanBox redWbSpanBox ">
                            delete
                        </span>
                        <span class="material-icons-outlined wbSpanBox modeSpanBox">
                            settings_brightness
                        </span>
                        <span class="wbSpanBox wbSpanBoxText">|</span>
                        <span class="material-icons-outlined wbSpanBox">
                            pending
                        </span>
                    </div>
                    <div class="bottomContainer">
                        <span class="material-icons circleSpan smallCircle">
                        fiber_manual_record
                        </span>
                        <span class="material-icons circleSpan midCircle">
                        fiber_manual_record
                        </span>
                        <span class="material-icons circleSpan largeCircle">
                        fiber_manual_record
                        </span>
                        <span class="btmSpanBoxText">
                            |
                        </span>
                        <span class="material-icons drawingSpan">
                        gesture
                        </span>
                        <span class="material-icons eraseSpan">
                        chrome_reader_mode
                        </span>
                        <span class="btmSpanBoxText">
                            |
                        </span>
                        <span class="material-icons-round undoSpan">
                            undo
                        </span>
                        <span class="material-icons-round redoSpan">
                            redo
                        </span>

                    </div>

                <canvas></canvas>
            </div>
        </div>
    `
    divScreenContainer.append(div);


    //Z-INdex                  
    let currBox = document.querySelector('.box-box[appbox="WhiteBoard"]');
    if(currBox){
        currDockIcon.addEventListener("click",function(){

            if(lastZIndexAppBOx != lastZIndexAppBOx!='WhiteBoard' ){
                let lastOpenBox = document.querySelector(`.box-box[appbox="${lastZIndexAppBOx}"]`);
                if(lastOpenBox){
                    lastOpenBox.style.zIndex = "0";
                }
            }
            let currBox = document.querySelector('.box-box[appbox="WhiteBoard"]');
            currBox.style.zIndex = "80";
            lastZIndexAppBOx = "WhiteBoard";
        })
    }

    cancelCircle(currDockIcon,appBox);
    fullScreenCircle(appBox);
    minimize(appBox);


    let eraseSpan = document.querySelector('.eraseSpan');
    eraseSpan.addEventListener('click',function(){
        if(erase){
            erase = false;
            eraseSpan.removeAttribute('style');
            return;
        }
        
        erase=true;
        eraseSpan.style.color="rgb(47,156,235)";

    })

    let undoSpan = document.querySelector('.undoSpan');
    undoSpan.addEventListener('click',function(e){

            let redo_points=[];
            if(undo.length>=2){
                let idx=undo.length-1;
                while(undo[idx].id!="md"){
                    redo_points.unshift(undo.pop());
                    idx--;
                }
                redo_points.unshift(undo.pop());

            }

            redo.push(redo_points);
            tool.clearRect(0, 0, canvas.width, canvas.height);
            redraw();
    })
   

    let redoSpan = document.querySelector(".redoSpan");
    redoSpan.addEventListener("click",function(){
        if(redo.length==0){
            return;
        }
    
        let redo_points=redo.pop();
    
        for(let i=0;i<redo_points.length;i++){
            undo.push(redo_points[i]);
        }
    
        tool.clearRect(0, 0, canvas.width, canvas.height);
        redraw();
    });
    function redraw(){
        for(let i=0;i<undo.length;i++){
            let obj=undo[i];
            tool.lineWidth=obj.width;
            tool.strokeStyle=obj.color;
            if(obj.id=="md"){
                tool.beginPath();
                tool.moveTo(obj.x,obj.y);
            }
    
            else{
                tool.lineTo(obj.x,obj.y);
                tool.stroke();
            }
        }
    }


    let smallCircle = document.querySelector('.smallCircle');
    smallCircle.addEventListener('click',function(e){
        if(lastCircle){
            let lastCircleDiv = document.querySelector(`.${lastCircle}`);
            lastCircleDiv.removeAttribute("style");
            if(lastCircle=="smallCircle"){
                lastCircleDiv.style.backgroundColor="black";
                if(document.querySelector('canvas').getAttribute('style')){
                    lastCircleDiv.style.color="white"; 
                  } 
            }
          
        }

        lastCircle = "smallCircle";
        strokeWidth=1;
        smallCircle.style.backgroundColor = 'rgb(47,156,235)';
        smallCircle.style.color = 'rgb(47,156,235)';

    })
    let midCircle = document.querySelector('.midCircle');
    midCircle.addEventListener('click',function(e){
        if(lastCircle){
            let lastCircleDiv = document.querySelector(`.${lastCircle}`)
            lastCircleDiv.removeAttribute("style");
            if(lastCircle=="smallCircle"){
                lastCircleDiv.style.color="black";
                if(document.querySelector('canvas').getAttribute('style')){
                    lastCircleDiv.style.color="white"; 
                  } 
            }
         
        }

        lastCircle = "midCircle";
        strokeWidth=3;
        midCircle.style.backgroundColor = 'rgb(47,156,235)';
        midCircle.style.color = 'rgb(47,156,235)';

    })
    let largeCircle = document.querySelector('.largeCircle');
    largeCircle.addEventListener('click',function(e){
        if(lastCircle){
            let lastCircleDiv = document.querySelector(`.${lastCircle}`);

            lastCircleDiv.removeAttribute("style");

            if(lastCircle=="smallCircle"){
                lastCircleDiv.style.color="black";
                if(document.querySelector('canvas').getAttribute('style')){
                    lastCircleDiv.style.color="white"; 
                  } 
            }
            
        }

        lastCircle = "largeCircle";
        strokeWidth = 6;
        largeCircle.style.backgroundColor = 'rgb(47,156,235)';
        largeCircle.style.color = 'rgb(47,156,235)';

    })

    let redColor = document.querySelector(".redColor");
    redColor.addEventListener("click",function(e){
        if(lastColor){
            let lastColorDiv = document.querySelector(`.${lastColor}`);
            lastColorDiv.removeAttribute("style");
        }
        lastColor = "redColor";
        color = "rgb(253,86,101)"
        redColor.style.height ="40%";
        redColor.style.width ="6%";
        redColor.style.borderRadius ="4px";
        
    })

    let yellowColor = document.querySelector(".yellowColor");
    yellowColor.addEventListener("click",function(e){
        if(lastColor){
            let lastColorDiv = document.querySelector(`.${lastColor}`);
            lastColorDiv.removeAttribute("style");
        }
        lastColor = "yellowColor";
        color= "rgb(254,184,75)"
        yellowColor.style.height ="40%";
        yellowColor.style.width ="6%";
        yellowColor.style.borderRadius ="4px";
        
    })

    let orangeColor = document.querySelector(".orangeColor");
    orangeColor.addEventListener("click",function(e){
        if(lastColor){
            let lastColorDiv = document.querySelector(`.${lastColor}`);
            lastColorDiv.removeAttribute("style");
        }
        lastColor = "orangeColor";
        color= "rgb(255,143,83)"
        orangeColor.style.height ="40%";
        orangeColor.style.width ="6%";
        orangeColor.style.borderRadius ="4px";
        
    })

    let blueColor = document.querySelector(".blueColor");
    blueColor.addEventListener("click",function(e){
        if(lastColor){
            let lastColorDiv = document.querySelector(`.${lastColor}`);
            lastColorDiv.removeAttribute("style");
        }
        lastColor = "blueColor";
        color= "rgb(47,156,235)"
        blueColor.style.height ="40%";
        blueColor.style.width ="6%";
        blueColor.style.borderRadius ="4px";
        
    })
    let greenColor = document.querySelector(".greenColor");
    greenColor.addEventListener("click",function(e){
        if(lastColor){
            let lastColorDiv = document.querySelector(`.${lastColor}`);
            lastColorDiv.removeAttribute("style");
        }
        lastColor = "greenColor";
        color= "rgb(28,194,112)"
        greenColor.style.height ="40%";
        greenColor.style.width ="6%";
        greenColor.style.borderRadius ="4px";
        
    })
    let greyColor = document.querySelector(".greyColor");
    greyColor.addEventListener("click",function(e){
        if(lastColor){
            let lastColorDiv = document.querySelector(`.${lastColor}`);
            lastColorDiv.removeAttribute("style");
        }
        lastColor = "greyColor";
        color= "rgb(149,149,149)"
        greyColor.style.height ="40%";
        greyColor.style.width ="6%";
        greyColor.style.borderRadius ="4px";
        
    })
    let lightGreyColor = document.querySelector(".lightGreyColor");
    lightGreyColor.addEventListener("click",function(e){
        if(lastColor){
            let lastColorDiv = document.querySelector(`.${lastColor}`);
            lastColorDiv.removeAttribute("style");
        }
        lastColor = "lightGreyColor";
        color= "rgb(222,222,222)"
        lightGreyColor.style.height ="40%";
        lightGreyColor.style.width ="6%";
        lightGreyColor.style.borderRadius ="4px";
        
    })

    let modeSpanBox = document.querySelector('.modeSpanBox');

    modeSpanBox.addEventListener("mouseenter",function(){
        modeSpanBox.classList = "material-icons-round wbSpanBox modeSpanBox";
    })

    modeSpanBox.addEventListener("mouseout",function(){
        modeSpanBox.classList = "material-icons-outlined wbSpanBox modeSpanBox";
    });

    modeSpanBox.addEventListener("click",function(){
        let canvas = document.querySelector('canvas');
        let whiteBoardAppSiteBox = document.querySelector('.whiteBoard-appSiteBox');
        let bottomContainer = document.querySelector('.bottomContainer');
        let upRightIconContainer = document.querySelector('.upRightIcon-container');
        let upLeftIconContainer =  document.querySelector('.upLeftIcon-container');
        let upMidIconContainer = document.querySelector('.upMidIcon-container');
        let smallCircle = document.querySelector('.smallCircle');

        if(canvas.getAttribute('style')){
            canvas.removeAttribute("style");
            whiteBoardAppSiteBox.removeAttribute("style");
            bottomContainer.removeAttribute("style");
            upRightIconContainer.removeAttribute("style");
            upLeftIconContainer.removeAttribute("style");
            upMidIconContainer.removeAttribute("style");
            return
        }
        upLeftIconContainer.style.color="white";
        upLeftIconContainer.style.backgroundColor="rgba(235, 210, 218, 0.05)";

        upRightIconContainer.style.color="white";
        upRightIconContainer.style.backgroundColor="rgba(235, 210, 218, 0.05)";

        bottomContainer.style.color = "white";
        bottomContainer.style.backgroundColor="rgba(235, 210, 218, 0.05)";

        upMidIconContainer.style.backgroundColor="rgba(235, 210, 218, 0.05)";

        canvas.style.backgroundColor= "rgb(30,29,32)";
        whiteBoardAppSiteBox.style.backgroundColor = "rgb(30,29,32)";
    });


    let deleteSpan = document.querySelector(".redWbSpanBox");

    deleteSpan.addEventListener("mouseenter",function(){
        deleteSpan.classList = "material-icons-round wbSpanBox redWbSpanBox";
    })

    deleteSpan.addEventListener("mouseout",function(){
        deleteSpan.classList = "material-icons-outlined wbSpanBox redWbSpanBox";
    });

    let leftDownloadIcon = document.querySelector('.leftDownloadIcon');

    
    leftDownloadIcon.addEventListener("mouseenter",function(){
        leftDownloadIcon.classList = "material-icons leftIconBox leftDownloadIcon";
    })

    leftDownloadIcon.addEventListener("mouseout",function(){
        leftDownloadIcon.classList = "material-icons-outlined leftIconBox leftDownloadIcon";
    });

    leftDownloadIcon.addEventListener("click",function(){
        downloadCanvas(dataImgUrl);
    });

    let canvas =  document.querySelector('canvas');

    let whiteBoardAppSiteBox = document.querySelector('.whiteBoard-appSiteBox');
    canvas.height= window.innerHeight;
    canvas.width=window.innerWidth;
     tool = canvas.getContext('2d');

    canvas.addEventListener("mousedown",function(e){


        isDrawing=true;
        let x =e.clientX;
        let y= e.clientY;
        tool.moveTo(x,y);
        tool.beginPath();
        let obj={
            id:"md",
            x:x,
            y:y,
            color:tool.strokeStyle,
            width:tool.lineWidth,
        }
        undo.push(obj);
    })
    canvas.addEventListener("mouseup",function(e){
        isDrawing = false;
        
    })

    canvas.addEventListener("mousemove",function(e){
        
        if(isDrawing){
           
            tool.lineWidth = strokeWidth;
            let x = e.clientX;
            let y = e.clientY;
            tool.lineTo(x,y);
            if(erase){
                tool.clearRect(x,y,20,20);
            }else{
                tool.strokeStyle = color; 
                tool.stroke();
            }

            dataImgUrl = canvas.toDataURL();
           
            let obj={
                id:"mm",
                x:x,
                y:y,
                color:tool.strokeStyle,
                width:tool.lineWidth,
            }
        
            undo.push(obj);

            let redWbSpanBox =  document.querySelector('.redWbSpanBox');
            redWbSpanBox.addEventListener('click',function(){
                clearDrawing();
            });
            function clearDrawing(){
                tool.clearRect(0,0,canvas.width,canvas.height);
                undo=[];
                redo=[];
            }
            
            

        }
    })
}

 function downloadCanvas(dataImgUrl){
    let a = document.createElement('a');
    a.href= dataImgUrl;
    a.setAttribute("download","canvas.jpg")
    a.click();
    a.remove();
}
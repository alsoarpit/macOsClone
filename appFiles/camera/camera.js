
let gumStream;
let chunks=[];
let mediaRecorder;
let isMediaRecording;
let filter;
let currZoom =1;
function camera(currDockIcon){

    let appBox=`.box-box[appbox="Camera"]`
    toRemoveLaunchPad();
    currDockIcon.style.animation="box 1s  alternate";
    if(!currDockIcon.querySelector('.active-dot')){
            let divDot =  document.createElement("div");
            divDot.setAttribute('appBox-dot','Camera-dot');
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
    div.classList.add('cameraBoxBox');
    div.setAttribute('appBox',"Camera");
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
                    Camera
                </div>
                
            </div>
            <div class="camera-grid"> 
                <div class="cameraGridBox">
                    <video class="videoBox" autoplay style="transform: scale(1)";></video>
                </div>
            </div>
            <div class="camera-option-grid">
                <div class="camera-left-box">

                        <div class="zoom-In">
                            <span class="material-icons">
                            add
                            </span>
                        </div>
                        <div class="zoom-Out">
                            <span class="material-icons">
                            remove
                            </span>
                        </div>
                        <div class="galleryBox">
                            <span class="material-icons">
                            collections
                            </span>
                            <div class="galleryBoxFont">
                                Gallery
                            </div>
                        </div>
                </div>
                <div class="camera-middle-box">
                    <div class="camera-click-btn">
                       <div class="camera-click-img">
                        <span class="material-icons cameraRedCircle">
                        circle
                        </span>
                            <span class="material-icons cameraImg">
                            photo_camera
                            </span>
                       </div>
                    </div>
                    <div class="camera-record-btn">
                    <div class="camera-click-img">
                    <span class="material-icons cameraRedCircle">
                    circle
                    </span>
                        <span class="material-icons recordImg">
                        videocam
                        </span>
                   </div>
                    </div>
                </div>
                <div class="camera-right-box"> 
                <div class="camera-filter-box">Filters</div>
                </div>
            </div>
        </div>
    `



    let galleryBox = div.querySelector('.galleryBox');
    galleryBox.addEventListener("click",function(){

        let appName ='Gallery';
        let dockIcon = document.querySelectorAll(".dockIcon");
                    for(let i=0;i<dockIcon.length;i++){
                        let checkAppDock =  dockIcon[i].querySelector(`[alt="${appName}"]`);
                        if(checkAppDock){
                            if(appName=="Gallery"){
                                toRemoveLaunchPad();
                                let launchPadDockIcon = document.querySelector('.dockIcon[dockapp="Launch"]')
                                launchPadDockIcon.removeAttribute('style');
                                let appBox=`.box-box[appbox="Gallery"]`;
                                let boxBox = document.querySelector(appBox);
                                    if(boxBox){
                                        let styleCheck = boxBox.getAttribute('style');
                                        if(styleCheck && styleCheck.includes("display: none;")){
                                            let currDockIcon = document.querySelector(`.dockIcon[dockApp="${appName}"]`);
                                            currDockIcon.removeAttribute("style");
                                            setTimeout(function(){
                                                currDockIcon.style.animation = 'box 1s  alternate';
                                                boxBox.style.display="block";
                                                return; 
                                            },220)  
                                        }
                                    }
                                let currDockIcon = document.querySelector(`.dockIcon[dockApp="${appName}"]`)
                                gallery(currDockIcon);
                                return
                            }
                        }
                    } 
                    let dockEditable = document.querySelector(".dockIcon-editable");
                    let div = document.createElement("div");
                    div.classList ="dockIcon";
                    div.setAttribute("dockApp",`${appName}`)
                    div.innerHTML = `<img src="./images/${appName}.png" alt="${appName}">`
                    dockEditable.append(div);
                     if(appName=="Gallery"){
                        let cameraDockIcon = document.querySelector('.dockIcon[dockapp="Gallery"]');
                       
                        cameraDockIcon.addEventListener("click",function(e){
                            let currDockIcon=document.querySelector('.dockIcon[dockapp="Gallery"]');
                                if(e.detail==3){
                                    let boxBox = document.querySelector(`.box-box[appbox="Gallery"]`);
                                    setTimeout(()=>{
                                        boxBox.parentNode.removeChild(boxBox);
                                        currDockIcon.parentNode.removeChild(currDockIcon);
                                    },220);
                                }else{
                                    gallery(currDockIcon);
                                }
                        })
                        dockIconDblClick(cameraDockIcon,appName);

                        gallery(cameraDockIcon);
                    }

    })

    divScreenContainer.append(div);

    
    //Z-INdex                  
    let currBox = document.querySelector('.box-box[appbox="Camera"]');
    if(currBox){
        currDockIcon.addEventListener("click",function(){

            if(lastZIndexAppBOx != lastZIndexAppBOx!='Camera' ){
                let lastOpenBox = document.querySelector(`.box-box[appbox="${lastZIndexAppBOx}"]`);
                if(lastOpenBox){
                    lastOpenBox.style.zIndex = "0";
                }
            }
            let currBox = document.querySelector('.box-box[appbox="Camera"]');
            currBox.style.zIndex = "80";
            lastZIndexAppBOx = "Camera";
        })
    }

    cancelCircle(currDockIcon,appBox);
    fullScreenCircle(appBox);
    minimize(appBox);


    let videoPlayer = document.querySelector('.videoBox');
   
    let permissionToUseCameraAudio = navigator.mediaDevices.getUserMedia({
        video:true,
        audio:true,
    })
   
    let zoomIn =  document.querySelector('.zoom-In');
    zoomIn.addEventListener("click",function(){
        currZoom = currZoom+0.1;
        if(currZoom>3) currZoom=3;
        videoPlayer.style.transform =`scale(${currZoom})`
    });
    
    let zoomOut =  document.querySelector('.zoom-Out');
    zoomOut.addEventListener("click",function(){

        currZoom = currZoom-0.1;
        if(currZoom<1){
            currZoom=1;
        }
        videoPlayer.style.transform =`scale(${currZoom})`

    });

   let cameraFilterBox = document.querySelector('.camera-filter-box');
   
   cameraFilterBox.addEventListener('click',function(){
       if(cameraFilterBox.style.backgroundColor){
           cameraFilterBox.style.backgroundColor = "";
           cameraFilterBox.style.color ="rgb(145, 145, 145)";
           let filterBoxContainer = document.querySelector('.filterBox-container');
           filterBoxContainer.remove();
           return
       }
    cameraFilterBox.style.backgroundColor = "rgb(38, 132, 255)";
    cameraFilterBox.style.color ="white";

    let cameraOptionGrid = document.querySelector('.camera-option-grid');
    let div = document.createElement('div');
    div.classList.add("filterBox-container");
        
            let filterBox1 = document.createElement('div');
            filterBox1.classList.add("filterBox");
            filterBox1.style.backgroundColor = "rgb(216, 135, 216,.3)";
            div.append(filterBox1);

            let filterBox2 = document.createElement('div');
            filterBox2.classList.add("filterBox");
            filterBox2.style.backgroundColor = "rgb(170, 207, 135,.3)";
            div.append(filterBox2);
            
            let filterBox3 = document.createElement('div');
            filterBox3.classList.add("filterBox");
            div.append(filterBox3);

            cameraOptionGrid.append(div);

        let allFilter = document.querySelectorAll('.filterBox');
        for(let i=0;i<allFilter.length;i++){

            let cameraGridBox = document.querySelector('.cameraGridBox');

            allFilter[i].addEventListener("click",function(e){

                let filterDivUi = document.querySelector('.filterDivUi');
                if(filterDivUi){
                    filterDivUi.remove();
                }
                console.log("a");
                filter = allFilter[i].style.backgroundColor;
                console.log(filter);
                let div = document.createElement("div");
                    div.classList.add("filterDivUi");
                    div.style.backgroundColor =allFilter[i].style.backgroundColor;
                    
                cameraGridBox.append(div);
            })
    
        }
    
   });

    let capture = document.querySelector(".camera-click-btn")
    capture.addEventListener('click',function(){
            let snapC = document.querySelector('.cameraImg');
            snapC.classList.add('shrink');
            setTimeout(function(){
                snapC.classList.remove('shrink');
            },500)
            let body = document.querySelector('body');
            let canvas = document.createElement('canvas');
            canvas.height = videoPlayer.videoHeight;
            canvas.width = videoPlayer.videoWidth;
            let tool =  canvas.getContext('2d');
            tool.translate(canvas.width/2,canvas.height/2);
            tool.scale(currZoom,currZoom);
            tool.translate(-canvas.width/2,-canvas.height/2);

            tool.drawImage(videoPlayer,0,0);

            if(filter && filter!=""){
                tool.fillStyle=filter; 
                tool.fillRect(0,0,canvas.width,canvas.height);
            }
    
         
            let url = canvas.toDataURL();
            canvas.remove();
            saveMedia(url);
            // let link = url;
            //     let a= document.createElement('a');
            //     a.href = link;
            //     a.download = "Image.png";
            //     a.click();
            //     a.remove();
        })

        let recordBtn = document.querySelector('.camera-record-btn');
        recordBtn.addEventListener("click",function(){
            let videoC = document.querySelector('.recordImg');
           
            if(isMediaRecording){
                mediaRecorder.stop();
                isMediaRecording = false;
                videoC.classList.remove("onOf");
            }else{
                mediaRecorder.start();
                currZoom=1;
                videoPlayer.style.transform =`scale(${currZoom})`
                isMediaRecording = true;
                videoC.classList.add("onOf");
            }
        })




    permissionToUseCameraAudio
        .then(function(mediaStream){
            
            videoPlayer.srcObject =mediaStream;
            
            mediaRecorder = new MediaRecorder(mediaStream);   
            mediaRecorder.addEventListener('dataavailable',function(e){
                chunks.push(e.data);
            
            })

            mediaRecorder.addEventListener('stop',function(e){
                let blob = new Blob(chunks,{type:'video/mp4'});
                chunks=[];
                saveMedia(blob);
                // let link = URL.createObjectURL(blob);
                // let a= document.createElement('a');
                // a.href = link;
                // a.download = "Video.mp4";
                // a.click();
            })


        })
        .catch(function(e){
            console.log(e);
        })
    
    




}
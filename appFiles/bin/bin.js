function bin(currDockIcon){
    let appBox=`.box-box[appbox="Bin"]`
    toRemoveLaunchPad();
    currDockIcon.style.animation="box 1s  alternate";
    if(!currDockIcon.querySelector('.active-dot')){
            let divDot =  document.createElement("div");
            divDot.setAttribute('appBox-dot','Bin-dot');
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
    div.setAttribute('appBox',"Bin");
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
                    Bin
                </div>
            </div>
            <div class="bin-appSiteBox">
                <div class="binSideNavBlur"">
                    <div class="binSideNav">
                    <div class="bin-navDataContainer">
                            <div class="navLib navLibDark">Favourites</div>
                            <div class="bin-navbox special-bin-NavBox">
                                    <span class="material-icons-outlined bin-spanBox">
                                    inventory_2
                                    </span>
                                    <span class="navText">
                                        Local
                                    </span>
                            </div>
                            <div class="bin-navbox">
                                    <span class="material-icons-outlined bin-spanBox">
                                        computer
                                    </span>
                                    <span class="navText">
                                        Applications
                                    </span>
                            </div>
                            <div class="bin-navbox">
                                    <span class="material-icons-outlined bin-spanBox">
                                    receipt_long
                                    </span>
                                    <span class="navText">
                                        Recents
                                    </span>
                            </div>
                            <div class="bin-navbox">
                                    <span class="material-icons-outlined bin-spanBox">
                                        cloud
                                    </span>
                                    <span class="navText">
                                        iCloud
                                    </span>
                            </div>
                            <div class="bin-navbox">
                                    <span class="material-icons-outlined bin-spanBox">
                                    computer
                                    </span>
                                    <span class="navText">
                                        Desktop
                                    </span>
                            </div>
                            <div class="bin-navbox">
                                    <span class="material-icons-outlined bin-spanBox">
                                    description
                                    </span>
                                    <span class="navText">
                                        Documents
                                    </span>
                            </div>
                            <div class="bin-navbox">
                                    <span class="material-icons-outlined bin-spanBox">
                                    download_for_offline
                                    </span>
                                    <span class="navText">
                                        Downloads
                                    </span>
                            </div>
                            
                    </div>

                    <div class="bin-navDataContainer upperBorder2ndBox">
                            <div class="navLib navLibDark">Tags</div>
                            <div class="bin-navbox">
                                    <span class="material-icons-round redBinColor">
                                    circle
                                    </span>
                                    <span class="bin-navText">
                                        Red
                                    </span>
                            </div>
                            <div class="bin-navbox">
                                    <span class="material-icons-round orangeBinColor">
                                    circle
                                    </span>
                                    <span class="bin-navText">
                                        Orange
                                    </span>
                            </div>
                            <div class="bin-navbox">
                                    <span class="material-icons-round yellowBinColor">
                                    circle
                                    </span>
                                    <span class="bin-navText">
                                        Yellow
                                    </span>
                            </div>
                            <div class="bin-navbox">
                                    <span class="material-icons-round greenBinColor">
                                    circle
                                    </span>
                                    <span class="bin-navText">
                                        Green
                                    </span>
                            </div>
                            <div class="bin-navbox">
                                    <span class="material-icons-round blueBinColor">
                                    circle
                                    </span>
                                    <span class="bin-navText">
                                        Blue
                                    </span>
                            </div>
                            <div class="bin-navbox">
                                    <span class="material-icons-round purpleBinColor">
                                    circle
                                    </span>
                                    <span class="bin-navText">
                                        purple
                                    </span>
                            </div>
                            <div class="bin-navbox">
                                    <span class="material-icons-round greyBinColor">
                                    circle
                                    </span>
                                    <span class="bin-navText">
                                        Grey
                                    </span>
                            </div>
                            
                            
                           
                        </div>

                    </div>
                </div>

                <div class="inner-binContainer">
                        <div class="noMedia">
                        <span class="material-icons-outlined noMediaIcon">
                        warning
                        </span>
                        NO MEDIA FOUND
                        </div>
                </div>














            </div>
        </div>
    `
    divScreenContainer.append(div);


    //Z-INdex                  
    let currBox = document.querySelector('.box-box[appbox="Bin"]');
    if(currBox){
        currDockIcon.addEventListener("click",function(){

            if(lastZIndexAppBOx != lastZIndexAppBOx!='Bin' ){
                let lastOpenBox = document.querySelector(`.box-box[appbox="${lastZIndexAppBOx}"]`);
                if(lastOpenBox){
                    lastOpenBox.style.zIndex = "0";
                }
            }
            let currBox = document.querySelector('.box-box[appbox="Bin"]');
            currBox.style.zIndex = "80";
            lastZIndexAppBOx = "Bin";
        })
    }

    cancelCircle(currDockIcon,appBox);
    fullScreenCircle(appBox);
    minimize(appBox);
}
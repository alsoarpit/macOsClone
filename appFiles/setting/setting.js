let globalDarkMode = false;

function setting(currDockIcon){
    let appBox=`.box-box[appbox="Setting"]`
    toRemoveLaunchPad();
    currDockIcon.style.animation="box 1s  alternate";
    if(!currDockIcon.querySelector('.active-dot')){
            let divDot =  document.createElement("div");
            divDot.setAttribute('appBox-dot','Setting-dot');
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
    div.setAttribute('appBox',"Setting");
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
                    Setting
                </div>
            </div>
            <div class="setting-appSiteBox">
                <div class="inner-settingAppSiteBox">
                    <div class="setting-desktopHeadBox">
                        <div class="inner-desktopHeadBox">
                            Desktop
                        </div>
                    </div>
                    <div class="setting-wallpaperView-container">
                        <div class="wallpaper-viewBox">
                            <img src="../../wallpaper/BigSur.jpg">
                        </div>
                        <div class="wallpaper-viewBox-text">
                            <div class="setting-modeBox-container">
                                <div class="setting-modeBox settingLight">
                                   Toggle Dark
                                </div>
                               
                            </div>
                            <div class="setting-modeBox-text">
                                Change desktop background and colors
                            </div>
                        </div>
                    </div>

                    <div class="setting-wallpaper-container">
                            <div class="inner-setting-wallpaper">
                                <div class="setting-innerSideNav">
                                    <div class="setting-innerSideNavText">
                                        Apple
                                    </div>
                                    <div class="setting-innerSideNavText2">
                                        <span class="material-icons-round">
                                        topic
                                        </span>
                                        Desktop Pictures
                                    </div>
                                </div>
                                <div class="setting-wallPaper-box-inner">
                                    <div class="wallpaper-boxImg settingBeach"></div>
                                    <div class="wallpaper-boxImg settingBigSur"></div>
                                    <div class="wallpaper-boxImg settingDesertDark"></div>
                                    <div class="wallpaper-boxImg settingLake "></div>
                                    <div class="wallpaper-boxImg settingMontereyDark "></div>
                                    <div class="wallpaper-boxImg MontereyLight "></div>
                                </div>
                            </div>
                    </div>
                
                </div>
            </div>
        </div>
    `
    divScreenContainer.append(div);


    //Z-INdex                  
    let currBox = document.querySelector('.box-box[appbox="Setting"]');
    if(currBox){
        currDockIcon.addEventListener("click",function(){

            if(lastZIndexAppBOx != lastZIndexAppBOx!='Setting' ){
                let lastOpenBox = document.querySelector(`.box-box[appbox="${lastZIndexAppBOx}"]`);
                if(lastOpenBox){
                    lastOpenBox.style.zIndex = "0";
                }
            }
            let currBox = document.querySelector('.box-box[appbox="Setting"]');
            currBox.style.zIndex = "80";
            lastZIndexAppBOx = "Setting";
        })
    }

    cancelCircle(currDockIcon,appBox);
    fullScreenCircle(appBox);
    minimize(appBox);

    let settingBeach = document.querySelector(".settingBeach");
    settingBeach.addEventListener("click",function(){
        console.log("a");
        let mainBody =  document.querySelector(".main-body");
        mainBody.style.backgroundImage  = "url('../../wallpaper/Beach.jpg')";
    })
    let settingBigSur = document.querySelector(".settingBigSur");
    settingBigSur.addEventListener("click",function(){
        console.log("a");
        let mainBody =  document.querySelector(".main-body");
        mainBody.style.backgroundImage  = "url('../../wallpaper/BigSur.jpg')";
    })
    let settingDesertDark = document.querySelector(".settingDesertDark");
    settingDesertDark.addEventListener("click",function(){
        console.log("a");
        let mainBody =  document.querySelector(".main-body");
        mainBody.style.backgroundImage  = "url('../../wallpaper/DesertDark.jpg')";
    })

    let settingLake = document.querySelector(".settingLake");
    settingLake.addEventListener("click",function(){
        console.log("a");
        let mainBody =  document.querySelector(".main-body");
        mainBody.style.backgroundImage  = "url('../../wallpaper/Lake.jpg')";
    })
    let settingMontereyDark = document.querySelector(".settingMontereyDark");
    settingMontereyDark.addEventListener("click",function(){
        console.log("a");
        let mainBody =  document.querySelector(".main-body");
        mainBody.style.backgroundImage  = "url('../../wallpaper/MontereyDark.jpg')";
    })
    
    let MontereyLight = document.querySelector(".MontereyLight");
    MontereyLight.addEventListener("click",function(){
        console.log("a");
        let mainBody =  document.querySelector(".main-body");
        mainBody.style.backgroundImage  = "url('../../wallpaper/MontereyLight.jpg')";
    })
    

    let settingLight = document.querySelector(".settingLight");
    settingLight.addEventListener("click",function(e){
      
       if(globalDarkMode){

        let styleCss = document.querySelector(".styleCss");
        styleCss.href = "../../styleLight.css";

        let settingCss = document.querySelector(".settingCss");
        settingCss.href="../../appFiles/setting/settingLight.css";

        let calculatorCss = document.querySelector(".calculatorCss");
        calculatorCss.href ="../../appFiles/calculator/calculatorLight.css";

        let binCss = document.querySelector(".binCss");
        binCss.href ="../../appFiles/bin/binLight.css";


        let booksCss = document.querySelector(".booksCss");
        booksCss.href ="../../appFiles/books/booksLight.css";


        let musicCss = document.querySelector(".musicCss");
        musicCss.href ="../../appFiles/music/musicLight.css";

        let galleryCss = document.querySelector(".galleryCss");
        galleryCss.href ="../../appFiles/gallery/galleryLight.css";


        let jiraCss = document.querySelector(".jiraCss");
        jiraCss.href ="../../appFiles/jira/jiraLight.css";

        let excelCss = document.querySelector(".excelCss");
        excelCss.href ="../../appFiles/excel/excelLight.css";
        
        globalDarkMode=false
        e.currentTarget.innerText = "Toggle Dark";
            return
       }
       globalDarkMode=true
        e.currentTarget.innerText = "Toggle Light";
        let styleCss = document.querySelector(".styleCss");
        styleCss.href = "../../styleDark.css";

        let settingCss = document.querySelector(".settingCss");
        settingCss.href="../../appFiles/setting/settingDark.css";

        let calculatorCss = document.querySelector(".calculatorCss");
        calculatorCss.href ="../../appFiles/calculator/calculatorDark.css";

        let binCss = document.querySelector(".binCss");
        binCss.href ="../../appFiles/bin/binDark.css";


        let booksCss = document.querySelector(".booksCss");
        booksCss.href ="../../appFiles/books/bookDark.css";


        let musicCss = document.querySelector(".musicCss");
        musicCss.href ="../../appFiles/music/musicDark.css";

        let galleryCss = document.querySelector(".galleryCss");
        galleryCss.href ="../../appFiles/gallery/galleryDark.css";


        let jiraCss = document.querySelector(".jiraCss");
        jiraCss.href ="../../appFiles/jira/jiraDark.css";

        let excelCss = document.querySelector(".excelCss");
        excelCss.href ="../../appFiles/excel/excelDark.css";



    })


}
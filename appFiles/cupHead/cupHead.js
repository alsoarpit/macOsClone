let cpHeadScore =0;
function cupHead(currDockIcon){
    let appBox=`.box-box[appbox="CupHead"]`
    toRemoveLaunchPad();
    currDockIcon.style.animation="box 1s  alternate";
    if(!currDockIcon.querySelector('.active-dot')){
            let divDot =  document.createElement("div");
            divDot.setAttribute('appBox-dot','CupHead-dot');
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
    div.setAttribute('appBox',"CupHead");
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
                    CupHead
                </div>
            </div>
            <div class="cupHead-appSiteBox">
                <div class="Start-Container">
                   
                    <div class="startBtnBox">
                        <img class="startBtn" src="./appFiles/cupHead/cupHeadImage/start.png" alt="start">
                    </div>
                </div>
            </div>

        </div>
    `
    divScreenContainer.append(div);


    //Z-INdex                  
    let currBox = document.querySelector('.box-box[appbox="CupHead"]');
    if(currBox){
        currDockIcon.addEventListener("click",function(){

            if(lastZIndexAppBOx != lastZIndexAppBOx!='CupHead' ){
                let lastOpenBox = document.querySelector(`.box-box[appbox="${lastZIndexAppBOx}"]`);
                if(lastOpenBox){
                    lastOpenBox.style.zIndex = "0";
                }
            }
            let currBox = document.querySelector('.box-box[appbox="CupHead"]');
            currBox.style.zIndex = "80";
            lastZIndexAppBOx = "CupHead";
        })
    }

    cancelCircle(currDockIcon,appBox);
    fullScreenCircle(appBox);
    minimize(appBox);


    let startBtn = document.querySelector(".startBtn");
    startBtn.addEventListener("click",function(){
        let cupHeadAppSiteBox =  document.querySelector(".cupHead-appSiteBox");
        cupHeadAppSiteBox.innerHTML=
        `
            <div class="inner-cupHeadAppSiteBox">
                <div class="cupHeadAppSiteBox-blur">
                    <div class="inner-cupHeadBox">
                        <div class="cpBox box1">
                            
                            <img class="cpCup" src="../../appFiles/cupHead/cupHeadImage/cpCup.png">
                        </div>
                        <div class="cpBox box2">
                           
                            <img class="cpCup" src="../../appFiles/cupHead/cupHeadImage/cpCup.png">
                        </div>
                        <div class="cpBox box3">
                            
                            <img class="cpCup" src="../../appFiles/cupHead/cupHeadImage/cpCup.png">
                        </div>
                        <div class="cpBox box4">
                            
                            <img class="cpCup" src="../../appFiles/cupHead/cupHeadImage/cpCup.png">
                        </div>
                        <div class="cpBox box5">
                            
                            <img class="cpCup" src="../../appFiles/cupHead/cupHeadImage/cpCup.png">
                        </div>
                        <div class="cpBox box6">
                            
                            <img class="cpCup" src="../../appFiles/cupHead/cupHeadImage/cpCup.png">
                        </div>
                      
                    </div>
                </div>

                <div class="cpScoreBox">
                    <img class="scoreImgCp" src="https://fontmeme.com/permalink/210823/d1076dea9c6d397e823ce2ab108e88ca.png">
                </div>

            </div>
        `

        setInterval(()=>{
            let randomNo = Math.floor(Math.random() * 6)+1;
            let boxCp = cupHeadAppSiteBox.querySelector(`.box${randomNo}`);
            if(document.querySelector(".cpJump")){
                let imgInCpBox = document.querySelector(".cpJump");
                imgInCpBox.remove();
            }
            let img = document.createElement("img");
            if(boxCp){
                img.classList="cpJump";
                img.src = "../../appFiles/cupHead/cupHeadImage/jump";
            boxCp.append(img);
            }

            img.addEventListener("click",function(){        
                cpHeadScore++;

                img.remove();
                let  scoreImgCp = cupHeadAppSiteBox.querySelector(".scoreImgCp");


                if(cpHeadScore==1){
                    scoreImgCp.src = "https://fontmeme.com/permalink/210823/ccdf8a623f46ddda4b5910397bdc9392.png";
                }else if(cpHeadScore==2){
                    scoreImgCp.src="https://fontmeme.com/permalink/210823/d6d9281d82671061cfdfe6ec0148ebdb.png";
                }else if(cpHeadScore==3){
                    scoreImgCp.src="https://fontmeme.com/permalink/210823/cb9db5f54586874a3c87b78ddc9063ea.png";
                }else if(cpHeadScore==4){
                    scoreImgCp.src="https://fontmeme.com/permalink/210823/7caf553ad60c09bed9c860e1cf617d3f.png";
                }else if(cpHeadScore==5){
                    scoreImgCp.src="https://fontmeme.com/permalink/210823/f42fdd22c91b759630aa487b3ce99dc0.png";
                }else if(cpHeadScore==6){
                    scoreImgCp.src="https://fontmeme.com/permalink/210823/ff9119b59a22839d318ae09aee5a49c6.png";
                }else if(cpHeadScore==7){
                    scoreImgCp.src="https://fontmeme.com/permalink/210823/7aab691511f0ade32fbd22539d855261.png";
                }else if(cpHeadScore==8){
                    scoreImgCp.src="https://fontmeme.com/permalink/210823/9c7022a19097f6d91c87f12afd524a6b.png";
                }else if(cpHeadScore==9){
                    scoreImgCp.src="https://fontmeme.com/permalink/210823/67f6b31f15998cbf11d0c9c80687c444.png";
                }else if(cpHeadScore==10){
                    scoreImgCp.src="https://fontmeme.com/permalink/210823/11325b323d86ae9f2acb527bc26a22ae.png";

                    setTimeout(()=>{
                        let cupHeadAppSiteBox =  document.querySelector(".cupHead-appSiteBox");
                        cupHeadAppSiteBox.innerHTML=
                        `
                            <div class="box-CpGameOver">
                            </div>
                        `
                    },500)
                }


            })


        },2000)



    })
}

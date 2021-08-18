let first=0;
let first_id=0;
let total_check = 0;
function pokemonCard(currDockIcon){
    let appBox=`.box-box[appbox="PokemonCard"]`
    toRemoveLaunchPad();
    currDockIcon.style.animation="box 1s  alternate";
    if(!currDockIcon.querySelector('.active-dot')){
            let divDot =  document.createElement("div");
            divDot.setAttribute('appBox-dot','PokemonCard-dot');
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
    div.setAttribute('appBox',"PokemonCard");
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
                    PokemonCard
                </div>
            </div>
            <div class="pokemonCard-appSiteBox">
                
                <div class="divBlurBox">
                <img class="star" src="./appFiles/pokemonCard/pokemonCardImage/star.png" alt="star">
                <img class="playHouse" src="./appFiles/pokemonCard/pokemonCardImage/playHouse.png" alt=playHouse">
                
                </div>
            </div>

        </div>
    `
    divScreenContainer.append(div);

    
    //Z-INdex                  
    let currBox = document.querySelector('.box-box[appbox="PokemonCard"]');
    if(currBox){
        currDockIcon.addEventListener("click",function(){

            if(lastZIndexAppBOx != lastZIndexAppBOx!='PokemonCard' ){
                let lastOpenBox = document.querySelector(`.box-box[appbox="${lastZIndexAppBOx}"]`);
                if(lastOpenBox){
                    lastOpenBox.style.zIndex = "0";
                }
            }
            let currBox = document.querySelector('.box-box[appbox="PokemonCard"]');
            currBox.style.zIndex = "80";
            lastZIndexAppBOx = "PokemonCard";
        })
    }

    cancelCircle(currDockIcon,appBox);
    fullScreenCircle(appBox);
    minimize(appBox);


    let playHouse = document.querySelector('.playHouse');
    playHouse.addEventListener('click',function(){

        let pokemonCardAppSiteBox = document.querySelector('.pokemonCard-appSiteBox');
        pokemonCardAppSiteBox.style.backgroundImage = "url('./appFiles/pokemonCard/pokemonCardImage/playMode.jpg')";
        pokemonCardAppSiteBox.innerHTML = 
        `
            <div class="divBlurBoxAndGameBox">
                <div class="cardGameBox">
                    <div class="board" imgNo="1" id="1" onClick=check(1,1)>
                    <img class="boardImg"; src="../../appFiles/pokemonCard/pokemonCardImage/Board.png">
                    <img class="turnImg"  src="../../appFiles/pokemonCard/pokemonCardImage/blank.png">
                    </div>
                    <div class="board" imgNo="2" id="2" onClick=check(2,2) >
                    <img class="boardImg"  src="../../appFiles/pokemonCard/pokemonCardImage/Board.png">
                    <img class="turnImg" src="../../appFiles/pokemonCard/pokemonCardImage/blank.png">
                    </div>
                    <div class="board" imgNo="1" id="3" onClick=check(1,3) >
                    <img class="boardImg"  src="../../appFiles/pokemonCard/pokemonCardImage/Board.png">
                    <img class="turnImg" src="../../appFiles/pokemonCard/pokemonCardImage/blank.png">
                    </div>
                    <div class="board" imgNo="3" id="4" onClick=check(3,4)>
                    <img class="boardImg"src="../../appFiles/pokemonCard/pokemonCardImage/Board.png">
                    <img class="turnImg"  src="../../appFiles/pokemonCard/pokemonCardImage/blank.png">
                    </div>
                    <div class="board" imgNo="4" id="5" onClick=check(4,5)>
                    <img class="boardImg"  src="../../appFiles/pokemonCard/pokemonCardImage/Board.png">
                    <img class="turnImg" src="../../appFiles/pokemonCard/pokemonCardImage/blank.png">
                    </div>
                    <div class="board" imgNo="4" id="6" onClick=check(4,6)>
                    <img class="boardImg"  src="../../appFiles/pokemonCard/pokemonCardImage/Board.png">
                    <img class="turnImg" src="../../appFiles/pokemonCard/pokemonCardImage/blank.png">
                    </div>
                    <div class="board" imgNo="3" id="7" onClick=check(3,7)>
                    <img class="boardImg" src="../../appFiles/pokemonCard/pokemonCardImage/Board.png">
                    <img class="turnImg" src="../../appFiles/pokemonCard/pokemonCardImage/blank.png">
                    </div>
                    <div class="board" imgNo="2" id="8" onClick=check(2,8) >
                    <img class="boardImg"  src="../../appFiles/pokemonCard/pokemonCardImage/Board.png">
                    <img class="turnImg" src="../../appFiles/pokemonCard/pokemonCardImage/blank.png">
                    </div>
                  
                    
                </div>
                <diV class="WobbufetBox"> 
                    <img class="WobbufetImg" src="../../appFiles/pokemonCard/pokemonCardImage/Wobbufet.png" alt="Wobbufet">
                </div>
                
                <diV class="extraImageBox">
                    <div class="lehaBox lehaEntryAni"> 
                        <img class="lehaBoxImg" src="../../appFiles/pokemonCard/pokemonCardImage/Leah1.png" alt="leha">
                    </div>
                    <div class="pikaJumpContainer">
                        <div class="pikaJump">
                            <img class="pikaJumpImg" src="../../appFiles/pokemonCard/pokemonCardImage/pikaJump.png" alt="pikaJump">
                        </div>
                    </div>
                </diV>
            <div>
        `
        
     
        
        let lehaBoxImg = pokemonCardAppSiteBox.querySelector(".lehaBoxImg");
        setInterval(()=>{
            if(lehaBoxImg.getAttribute('src')=="../../appFiles/pokemonCard/pokemonCardImage/Leah1.png"){
                
                lehaBoxImg.setAttribute('src',"../../appFiles/pokemonCard/pokemonCardImage/Leah2.png")
            
            }else{
                lehaBoxImg.setAttribute('src',"../../appFiles/pokemonCard/pokemonCardImage/Leah1.png")
            
            }
        },800)

    })

    
}

function check(imgNo,k){
    if(first_id!=k){
        if(first==0){
            first=imgNo;
            first_id=k;
           let imgBox= document.getElementById(`${k}`);
           imgBox.classList.add('flipAni');
           imgBox.innerHTML=`
           <img class="boardImg"; src="../../appFiles/pokemonCard/pokemonCardImage/Board.png">
                        <img class="turnImg"  src="../../appFiles/pokemonCard/pokemonCardImage/${imgNo}.png">
           `
        }else{
            if(first==imgNo){
                let imgBox= document.getElementById(`${k}`);
                imgBox.classList.add('flipAni');
                imgBox.innerHTML=`
                <img class="boardImg"; src="../../appFiles/pokemonCard/pokemonCardImage/Board.png">
                             <img class="turnImg"  src="../../appFiles/pokemonCard/pokemonCardImage/${imgNo}.png">
                `


                let imgBox1= document.getElementById(`${first_id}`).removeAttribute("onClick");
                let imgBox2= document.getElementById(`${k}`).removeAttribute("onClick");

                total_check++;
               if(total_check==4){
                setTimeout(()=>{
                        
                    let pokemonCardAppSiteBox = document.querySelector('.pokemonCard-appSiteBox');
                    pokemonCardAppSiteBox.innerHTML=
                    `   
                        <div class="divBlurBoxAndGameBox">
                        <div class="wonDiv">

                        </div>
                        <diV class="WobbufetBox"> 
                            <img class="WobbufetImg" src="../../appFiles/pokemonCard/pokemonCardImage/Wobbufet.png" alt="Wobbufet">
                        </div>
                        
                        <diV class="extraImageBox">
                            <div class="lehaBox lehaEntryAni"> 
                                <img class="lehaBoxImg" src="../../appFiles/pokemonCard/pokemonCardImage/Leah1.png" alt="leha">
                            </div>
                            <div class="pikaJumpContainer">
                                <div class="pikaJump">
                                    <img class="pikaJumpImg" src="../../appFiles/pokemonCard/pokemonCardImage/pikaJump.png" alt="pikaJump">
                                </div>
                            </div>
                        </diV>
                    <div>
                    `

                    let lehaBoxImg = pokemonCardAppSiteBox.querySelector(".lehaBoxImg");
                    setInterval(()=>{
                        if(lehaBoxImg.getAttribute('src')=="../../appFiles/pokemonCard/pokemonCardImage/Leah1.png"){
                            
                            lehaBoxImg.setAttribute('src',"../../appFiles/pokemonCard/pokemonCardImage/Leah2.png")
                        
                        }else{
                            lehaBoxImg.setAttribute('src',"../../appFiles/pokemonCard/pokemonCardImage/Leah1.png")
                        
                        }
                    },800)
                    },500)
               }
            }else{
                let imgBox= document.getElementById(`${k}`);
                imgBox.classList.add('flipAni');
                imgBox.innerHTML=`
                <img class="boardImg"; src="../../appFiles/pokemonCard/pokemonCardImage/Board.png">
                             <img class="turnImg"  src="../../appFiles/pokemonCard/pokemonCardImage/${imgNo}.png">
                `
    
                setTimeout(()=>{
                    let imgBox1= document.getElementById(`${first_id}`);
                    if(imgBox1.classList.contains('flipAni')){
                        imgBox1.classList.remove('flipAni');
                    }
                    imgBox1.innerHTML=`
                    <img class="boardImg"; src="../../appFiles/pokemonCard/pokemonCardImage/Board.png">
                                 <img class="turnImg"  src="../../appFiles/pokemonCard/pokemonCardImage/blank.png">
                    `
    
    
                    let imgBox2= document.getElementById(`${k}`);
                    if(imgBox2.classList.contains('flipAni')){
                        imgBox2.classList.remove('flipAni');
                    }
                    imgBox2.innerHTML=`
                    <img class="boardImg"; src="../../appFiles/pokemonCard/pokemonCardImage/Board.png">
                                 <img class="turnImg"  src="../../appFiles/pokemonCard/pokemonCardImage/blank.png">
                    `
                    first_id=0;
                },400)
            }
            first=0;
        }
    }
    
}
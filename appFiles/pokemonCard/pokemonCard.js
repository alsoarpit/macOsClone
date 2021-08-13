let a1;
let a1Clicked = false;
let a2;
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
                    <div class="board">
                    <img class="boardImg" src="../../appFiles/pokemonCard/pokemonCardImage/Board.png">
                    <img class="turnImg pikachu" src="../../appFiles/pokemonCard/pokemonCardImage/blank.png">
                    </div>
                    <div class="board">
                    <img class="boardImg" src="../../appFiles/pokemonCard/pokemonCardImage/Board.png">
                    <img class="turnImg charmander" src="../../appFiles/pokemonCard/pokemonCardImage/blank.png">
                    </div>
                    <div class="board">
                    <img class="boardImg" src="../../appFiles/pokemonCard/pokemonCardImage/Board.png">
                    <img class="turnImg pikachu1" src="../../appFiles/pokemonCard/pokemonCardImage/blank.png">
                    </div>
                    <div class="board">
                    <img class="boardImg" src="../../appFiles/pokemonCard/pokemonCardImage/Board.png">
                    <img class="turnImg squirtle" src="../../appFiles/pokemonCard/pokemonCardImage/blank.png">
                    </div>
                    <div class="board">
                    <img class="boardImg" src="../../appFiles/pokemonCard/pokemonCardImage/Board.png">
                    <img class="turnImg jigglypuff" src="../../appFiles/pokemonCard/pokemonCardImage/blank.png">
                    </div>
                    <div class="board">
                    <img class="boardImg" src="../../appFiles/pokemonCard/pokemonCardImage/Board.png">
                    <img class="turnImg jigglypuff1" src="../../appFiles/pokemonCard/pokemonCardImage/blank.png">
                    </div>
                    <div class="board">
                    <img class="boardImg" src="../../appFiles/pokemonCard/pokemonCardImage/Board.png">
                    <img class="turnImg squirtle1" src="../../appFiles/pokemonCard/pokemonCardImage/blank.png">
                    </div>
                    <div class="board">
                    <img class="boardImg" src="../../appFiles/pokemonCard/pokemonCardImage/Board.png">
                    <img class="turnImg charmander1" src="../../appFiles/pokemonCard/pokemonCardImage/blank.png">
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

        let pikachu = pokemonCardAppSiteBox.querySelector('.pikachu');
        pikachu.parentNode.addEventListener("click",function(e){
          
            setTimeout(()=>{
                pikachu.parentNode.classList.remove('flipAni');
            },500)
            if(pikachu.getAttribute('src')=="../../appFiles/pokemonCard/pokemonCardImage/pikachu.png"){
                  pikachu.parentNode.classList.add("flipAni");
                pikachu.setAttribute("src","../../appFiles/pokemonCard/pokemonCardImage/blank.png")
                return
            }
            pikachu.parentNode.classList.add("flipAni");
            pikachu.setAttribute("src","../../appFiles/pokemonCard/pokemonCardImage/pikachu.png")

        })
       
        let charmander = pokemonCardAppSiteBox.querySelector('.charmander');
        charmander.parentNode.addEventListener("click",function(){
           
            
            setTimeout(()=>{
                charmander.parentNode.classList.remove('flipAni');
            },500)
            if(charmander.getAttribute('src')=="../../appFiles/pokemonCard/pokemonCardImage/charmander.png"){
                charmander.parentNode.classList.add("flipAni");
                charmander.setAttribute("src","../../appFiles/pokemonCard/pokemonCardImage/blank.png")
                return
            }
            charmander.parentNode.classList.add("flipAni");
            charmander.setAttribute("src","../../appFiles/pokemonCard/pokemonCardImage/charmander.png")
        })
        let charmander1 = pokemonCardAppSiteBox.querySelector('.charmander1');
        charmander1.parentNode.addEventListener("click",function(){
            
            setTimeout(()=>{
                charmander1.parentNode.classList.remove('flipAni');
            },500)
            if(charmander1.getAttribute('src')=="../../appFiles/pokemonCard/pokemonCardImage/charmander.png"){
                charmander1.parentNode.classList.add("flipAni");
                charmander1.setAttribute("src","../../appFiles/pokemonCard/pokemonCardImage/blank.png")
                return
            }
            charmander1.parentNode.classList.add("flipAni");
            charmander1.setAttribute("src","../../appFiles/pokemonCard/pokemonCardImage/charmander.png")
        })
        let jigglypuff = pokemonCardAppSiteBox.querySelector('.jigglypuff');
        jigglypuff.parentNode.addEventListener("click",function(){
           
            setTimeout(()=>{
                jigglypuff.parentNode.classList.remove('flipAni');
            },500)
            if(jigglypuff.getAttribute('src')=="../../appFiles/pokemonCard/pokemonCardImage/jigglypuff.png"){
                jigglypuff.parentNode.classList.add("flipAni");
                jigglypuff.setAttribute("src","../../appFiles/pokemonCard/pokemonCardImage/blank.png")
                return
            }
            jigglypuff.parentNode.classList.add("flipAni");
            jigglypuff.setAttribute("src","../../appFiles/pokemonCard/pokemonCardImage/jigglypuff.png")
        })
        let jigglypuff1 = pokemonCardAppSiteBox.querySelector('.jigglypuff1');
        jigglypuff1.parentNode.addEventListener("click",function(e){
            
           
            setTimeout(()=>{
                jigglypuff1.parentNode.classList.remove('flipAni');
            },500)
            if(jigglypuff1.getAttribute('src')=="../../appFiles/pokemonCard/pokemonCardImage/jigglypuff.png"){
                jigglypuff1.parentNode.classList.add("flipAni");
                jigglypuff1.setAttribute("src","../../appFiles/pokemonCard/pokemonCardImage/blank.png")
                return
            }
            jigglypuff1.parentNode.classList.add("flipAni");
            jigglypuff1.setAttribute("src","../../appFiles/pokemonCard/pokemonCardImage/jigglypuff.png")
        })

        let squirtle = pokemonCardAppSiteBox.querySelector('.squirtle');
        squirtle.parentNode.addEventListener("click",function(e){

            squirtle.parentNode.classList.add("flipAni");
            setTimeout(()=>{
                squirtle.parentNode.classList.remove('flipAni');
            },500)
            if(squirtle.getAttribute('src')=="../../appFiles/pokemonCard/pokemonCardImage/squirtle.png"){
                squirtle.parentNode.classList.add("flipAni");
                squirtle.setAttribute("src","../../appFiles/pokemonCard/pokemonCardImage/blank.png")
                return
            }
            squirtle.parentNode.classList.add("flipAni");
            squirtle.setAttribute("src","../../appFiles/pokemonCard/pokemonCardImage/squirtle.png")
        })
        
        let squirtle1 = pokemonCardAppSiteBox.querySelector('.squirtle1');
        squirtle1.parentNode.addEventListener("click",function(e){
            squirtle1.parentNode.classList.add("flipAni");
            setTimeout(()=>{
                squirtle1.parentNode.classList.remove('flipAni');
            },500)
            if(squirtle1.getAttribute('src')=="../../appFiles/pokemonCard/pokemonCardImage/squirtle.png"){
                squirtle1.parentNode.classList.add("flipAni");
                squirtle1.setAttribute("src","../../appFiles/pokemonCard/pokemonCardImage/blank.png")
                return
            }
            squirtle1.parentNode.classList.add("flipAni");
            squirtle1.setAttribute("src","../../appFiles/pokemonCard/pokemonCardImage/squirtle.png")
        })
       
        let pikachu1 = pokemonCardAppSiteBox.querySelector('.pikachu1');
        pikachu1.parentNode.addEventListener("click",function(e){
            
            setTimeout(()=>{
                pikachu1.parentNode.classList.remove('flipAni');
            },500)
            if(pikachu1.getAttribute('src')=="../../appFiles/pokemonCard/pokemonCardImage/pikachu.png"){
                pikachu1.parentNode.classList.add("flipAni");
                pikachu1.setAttribute("src","../../appFiles/pokemonCard/pokemonCardImage/blank.png")
                return
            }
            pikachu1.parentNode.classList.add("flipAni");
            pikachu1.setAttribute("src","../../appFiles/pokemonCard/pokemonCardImage/pikachu.png")
        })
       

    })

    
}
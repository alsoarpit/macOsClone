let calcAns = "";
function calculator(currDockIcon){
    let appBox=`.box-box[appbox="Calculator"]`
    toRemoveLaunchPad();
    currDockIcon.style.animation="box 1s  alternate";
    if(!currDockIcon.querySelector('.active-dot')){
            let divDot =  document.createElement("div");
            divDot.setAttribute('appBox-dot','Calculator-dot');
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
    div.classList.add("appBox-Calc");
    div.setAttribute('appBox',"Calculator");
    div.style.zIndex = "75";
    div.innerHTML = 
    `
        <div class="box-container">
            <div class="mac-dialogBox-title">
                <div class="mac-dialogBox-title-3option-box">
                    <div class="mac-dialogBox-title-icon1">
                    </div>
                    <div class="mac-dialogBox-title-icon2 calc-fulScreenBtn">
                    </div>
                    <div class="mac-dialogBox-title-icon3">
                    </div>
                </diV>
                <div class="mac-dialogBox-title-boxText">
                    Calculator
                </div>
            </div>
            <div class="app-calc-siteBox">
                <div class="AnsBox-calc">
                    ${calcAns}
                </div>
                <div class="calc-KeyPad">
                    <div class="clac-keypad-row">
                        <div class="keypad-box darkGreyBox-calc calcAnsBox">
                            AC
                        </div>
                        <div class="keypad-box darkGreyBox-calc">
                            +/-
                        </div>
                        <div class="keypad-box darkGreyBox-calc" value="%">
                            %
                        </div>
                        <div class="keypad-box orangeBox-calc" value="/">
                            /
                        </div>
                    </div>
                    <div class="clac-keypad-row">
                        <div class="keypad-box lightGreyBox-calc " value="7">
                            7
                        </div>
                        <div class="keypad-box lightGreyBox-calc " value="8">
                            8    
                        </div>
                        <div class="keypad-box lightGreyBox-calc " value="9">
                            9
                        </div>
                        <div class="keypad-box orangeBox-calc" value="*">
                            X
                        </div>
                    </div>
                    <div class="clac-keypad-row">
                        <div class="keypad-box lightGreyBox-calc " value="4">
                            4
                        </div>
                        <div class="keypad-box lightGreyBox-calc " value="5">
                            5
                        </div>
                        <div class="keypad-box lightGreyBox-calc " value="6">
                            6
                        </div>
                        <div class="keypad-box orangeBox-calc" value="-">
                            -
                        </div>
                    </div>
                    <div class="clac-keypad-row">
                        <div class="keypad-box lightGreyBox-calc " value="1">
                            1
                        </div>
                        <div class="keypad-box lightGreyBox-calc " value="2">
                            2
                        </div>
                        <div class="keypad-box lightGreyBox-calc " value="3">
                            3
                        </div>
                        <div class="keypad-box orangeBox-calc" value="+">
                            +
                        </div>
                    </div>
                    <div class="clac-keypad-row">
                        <div class="keypad-box lightGreyBox-calc  clacKeypadNoborder-right"  value="0">
                            0
                        </div>
                        <div class="keypad-box lightGreyBox-calc clacKeypadNoborder-left " value="0">
                        </div>
                        <div class="keypad-box lightGreyBox-calc" value=.>
                            .
                        </div>
                        <div class="keypad-box orangeBox-calc clacKeypadNoborder equalCalc">
                            =
                        </div>
                    </div>
                </div>
            </div>

        </div>
    `
    divScreenContainer.append(div);


    //Z-INdex                  
    let currBox = document.querySelector('.box-box[appbox="Calculator"]');
    if(currBox){
        currDockIcon.addEventListener("click",function(){

            if(lastZIndexAppBOx != lastZIndexAppBOx!='Calculator' ){
                let lastOpenBox = document.querySelector(`.box-box[appbox="${lastZIndexAppBOx}"]`);
                if(lastOpenBox){
                    lastOpenBox.style.zIndex = "0";
                }
            }
            let currBox = document.querySelector('.box-box[appbox="Calculator"]');
            currBox.style.zIndex = "80";
            lastZIndexAppBOx = "Calculator";
        })
    }

    cancelCircle(currDockIcon,appBox);
    fullScreenCircle(appBox);
    minimize(appBox);


    let keyPadBox = document.querySelectorAll(".keypad-box");
    for(let i=0;i<keyPadBox.length;i++){
        keyPadBox[i].addEventListener("click",function(e){
            if(keyPadBox[i].getAttribute("value")){
                // console.log(keyPadBox[i].getAttribute("value"));
                calcAns += keyPadBox[i].getAttribute("value");
                let AnsBoxCalc = document.querySelector(".AnsBox-calc");
                AnsBoxCalc.innerText = calcAns;
            }
        })
    }

    let equalCalc = document.querySelector(".equalCalc");
    equalCalc.addEventListener("click",function(){
        calcAns=eval(calcAns);
        let AnsBoxCalc = document.querySelector(".AnsBox-calc");
        AnsBoxCalc.innerText = calcAns;
    })

    let calcAnsBox = document.querySelector(".calcAnsBox");
    calcAnsBox.addEventListener("click",function(){
        calcAns="";
        let AnsBoxCalc = document.querySelector(".AnsBox-calc");
        AnsBoxCalc.innerText = calcAns;
    })


}
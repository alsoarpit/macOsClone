let selectedFilterColor ="Tamarama";
let deleteMode = false;
let allTickets = {};

function jiraApp(currDockIcon){
    let appBox=`.box-box[appbox="Jira"]`
    toRemoveLaunchPad();
    currDockIcon.style.animation="box 1s  alternate";
    if(!currDockIcon.querySelector('.active-dot')){
            let divDot =  document.createElement("div");
            divDot.setAttribute('appBox-dot','Jira-dot');
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
    div.setAttribute('appBox',"Jira");
    div.style.zIndex = "75";
    // div.setAttribute('zIndex','Jira')
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
                    Jira
                </div>
            
            </div>
            <div class="container-jira">
                <div class="jira-title">
                    <div class="jiraLogo">
                        <img src="./images/jiraIIcon/jiraLogo.png" alt="">
                        <span>Jira</span>
                    </div>
                    <div class="jiraTBOx">
                        <div class="jiraTBox-name box1Fixed">
                            Your Work
                        </div>
                        <div class="jiraTBox-indicator box1IndiFixed">
                        </div>
                    </div>
                    <div class="jiraTBOx">
                        <div class="jiraTBox-name displayN">
                            Projects
                        </div>
                        <div class="jiraTBox-indicator displayI">
                        </div>
                    </div>
                    <div class="jiraTBOx">
                        <div class="jiraTBox-name displayN">
                            DashBoard
                        </div>
                        <div class="jiraTBox-indicator displayI">
                        </div>
                    </div>
                    <div class="jiraTBOx">
                        <div class="jiraTBox-name createBox">
                            Create
                        </div>
                    </div>
                        </div>
                <div class="grid">
                            <div class="leftMenu">
                                <div class="teamNSpaceArea">
                                    <div class="nameSpaceBox">
                                        <div class="nameSpaceBox-logo">
                                        <img src="./images/jiraIIcon/teamNSpace.png" alt="">
                                    </div>
                                    <div class="nameSpaceBox-text" >Arpit - (Rack)</div>
                            </div>
                        </div>
                        <div class="teamNSpaceArea2">
                            <div class="teamNSpaceArea2-box">
                                <div class="tns-box-Inner">
                                    <span class="material-icons desImg">
                                        calendar_view_day
                                    </span>
                                    <span class="tns-box-InnerText">
                                        Roadmap
                                    </span>
                            </div>
                        </div>
                        <div class="teamNSpaceArea2-box">
                            <div class="tns-box-Inner">
                                <span class="material-icons desImg">
                                    table_view
                                </span>
                                <span class="tns-box-InnerText">
                                    Active Sprints
                                </span>
                            </div>
                        </div>
                        <div class="teamNSpaceArea2-box">
                            <div class="tns-box-Inner">
                                <span class="material-icons desImg">
                                    calendar_view_week
                                </span>
                                <span class="tns-box-InnerText">
                                    Active Sprints
                                </span>
                            </div>
                        </div>
                            <div class="teamNSpaceArea2-box">
                                <div class="tns-box-Inner">
                                    <span class="material-icons desImg">
                                        sailing
                                    </span>
                                
                                    <span class="tns-box-InnerText">
                                        Releases
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="jira-right-container">
                        <div class="jira-rightTitle">
                            <div class="JRT-boardBox">Board</div>
                            <div class="JRT-titleBox">
                                <div class="JRTRelaseBox">Save</div>
                                <div class="JRTRelaseBox">Clear</div>
                                <div class="JRTRelaseBox">Delete</div>
                                <span class="material-icons JRT-dots">
                                    more_horiz
                                </span>
                            </div>
                        </div>
                        <div class="JRT-filterBox">
                            <div class="JRT-innerFilterBox">
                                <div class="jrtInnerFilterBox quickFilter">
                                    <span class="material-icons quickFilterImg">
                                        style
                                    </span>
                                    <div class="quickFilterText"> Quick Filters</div>
                                </div>
                                <div class="jiraColorBox">
                                    <div class="JRT-innerColorBox jiraRed"></div>
                                    <div class="JRT-innerColorBox jiraYellow"></div>
                                    <div class="JRT-innerColorBox jiraGreen"></div>
                                    <div class="JRT-innerColorBox jiraTamarama"></div>
                                </div>
                            </div>
                        </div>
                        <div class="jira-right-Content-Box">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    divScreenContainer.append(div);

    //  let allTickets =  JSON.parse(localStorage.getItem('jiraAllTickets'));
    // if(allTickets){

    // }


    //Z-INdex                  
    let currBox = document.querySelector('.box-box[appbox="Jira"]');
    if(currBox){
        currDockIcon.addEventListener("click",function(){

            if(lastZIndexAppBOx != lastZIndexAppBOx!='Jira' ){
                let lastOpenBox = document.querySelector(`.box-box[appbox="${lastZIndexAppBOx}"]`);
                if(lastOpenBox){
                    lastOpenBox.style.zIndex = "0";
                }
            }
            let currBox = document.querySelector('.box-box[appbox="Jira"]');
            currBox.style.zIndex = "80";
            lastZIndexAppBOx = "Jira";
        })
    }

    cancelCircle(currDockIcon,appBox);
    fullScreenCircle(appBox);
    minimize(appBox);

    jiraLoadTask();

    let JRTRelaseBox = document.querySelectorAll('.JRTRelaseBox');
    let jiraSaveBox = JRTRelaseBox[0];
    let jiraCLearBox = JRTRelaseBox[1];
    let jiraDeleteBox=JRTRelaseBox[2];


    jiraSaveBox.addEventListener('click',function(){
        if(deleteMode==true){
            deleteMode=false;
            jiraDeleteBox.style.backgroundColor="";
        }
        localStorage.setItem('jiraAllTickets',JSON.stringify(allTickets));
    });
    jiraCLearBox.addEventListener('click',function(){
        localStorage.setItem('jiraAllTickets',"");
        if(deleteMode==true){
            deleteMode=false;
            jiraDeleteBox.style.backgroundColor="";
        }
    })

    jiraDeleteBox.addEventListener('click',function(){
        
        if(deleteMode==false){
            deleteMode=true;
            jiraDeleteBox.style.backgroundColor = "#cbcbce";
        }else{
            deleteMode=false;
            jiraDeleteBox.style.backgroundColor = "";
            return;
        }
        
    })

    let rightContainer = document.querySelector('.jira-right-container');
    let createBox =  document.querySelector('.createBox');
    createBox.addEventListener('click',function(){
        
        if(document.querySelector('.jiraModal')) return;
        let div = document.createElement('div');
        div.classList.add('jiraModal');
        div.innerHTML=
        `
                    <div class="jiraModalBox">
                        <div class="jiraModalContent" contenteditable="true"></div>
                        <div class="jiraModalFilterColor">
                            <div class="modalCencelBox">
                                <span class="material-icons modalcancel">
                                    delete_forever
                                </span>
                                <div class="modalcancelText">
                                    Cancel
                                </div>
                            </div>
                            <div class="jiraModalInnerColorFilter">
                                <div class="modalColorBox jiraRed"></div>
                                <div class="modalColorBox jiraYellow"></div>
                                <div class="modalColorBox jiraGreen"></div>
                                <div class="modalColorBox jiraTamarama"></div>
                            </div>
                        </div>
                    </div>

        `
        rightContainer.append(div);


        let redModalBox = document.querySelector('.modalColorBox.jiraRed');
        let yellowModalBOx =document.querySelector(".modalColorBox.jiraYellow")
        let greenModalBOx =document.querySelector(".modalColorBox.jiraGreen")
        let tamaramaModalBOx =document.querySelector(".modalColorBox.jiraTamarama")
        redModalBox.addEventListener('click',function(){
            let tamaramaModalBOx =document.querySelector(".modalColorBox.jiraTamarama")
            let yellowModalBOx =document.querySelector(".modalColorBox.jiraYellow")
            let greenModalBOx =document.querySelector(".modalColorBox.jiraGreen")
            yellowModalBOx.style.border = "";
            greenModalBOx.style.border = "";
            tamaramaModalBOx.style.border = "";

            redModalBox.style.border = "2px solid rgb(38,57,89)";
            selectedFilterColor= "Red"
        })

        yellowModalBOx.addEventListener('click',function(){
            let tamaramaModalBOx =document.querySelector(".modalColorBox.jiraTamarama")
            let greenModalBOx =document.querySelector(".modalColorBox.jiraGreen")
            let redModalBox = document.querySelector('.modalColorBox.jiraRed');
            greenModalBOx.style.border = "";
            tamaramaModalBOx.style.border = "";
            redModalBox.style.border = "";

            yellowModalBOx.style.border = "2px solid rgb(38,57,89)";
            selectedFilterColor= "Yellow"
        })

        greenModalBOx.addEventListener('click',function(){
            let tamaramaModalBOx =document.querySelector(".modalColorBox.jiraTamarama")
            let redModalBox = document.querySelector('.modalColorBox.jiraRed');
            let yellowModalBOx =document.querySelector(".modalColorBox.jiraYellow")
            tamaramaModalBOx.style.border = "";
            redModalBox.style.border = "";
            yellowModalBOx.style.border = "";

            greenModalBOx.style.border = "2px solid rgb(38,57,89)";
            selectedFilterColor= "Green"
        })

        tamaramaModalBOx.addEventListener('click',function(){
            let greenModalBOx =document.querySelector(".modalColorBox.jiraGreen")
            let redModalBox = document.querySelector('.modalColorBox.jiraRed');
            let yellowModalBOx =document.querySelector(".modalColorBox.jiraYellow")
            greenModalBOx.style.border = "";
            yellowModalBOx.style.border = "";
            redModalBox.style.border = "";

            tamaramaModalBOx.style.border = "2px solid rgb(38,57,89)";
            selectedFilterColor= "Tamarama"
        })


        let modalContentBox = document.querySelector('.jiraModalContent');
        modalContentBox.addEventListener('keypress',function(e){
            
            if(e.key=='Enter'){

                function generateUID() {
                    // I generate the UID from two parts here 
                    // to ensure the random number provide enough bits.
                    var firstPart = (Math.random() * 46656) | 0;
                    var secondPart = (Math.random() * 46656) | 0;
                    firstPart = ("000" + firstPart.toString(36)).slice(-3);
                    secondPart = ("000" + secondPart.toString(36)).slice(-3);
                    return firstPart + secondPart;
                }


            
                let id = generateUID();
                let taskValue = e.currentTarget.innerText;
                // console.log(taskValue);
               if(taskValue.length==0){
                let jiraModal = document.querySelector('.jiraModal');
                jiraModal.parentNode.removeChild(jiraModal);
                return;
               }
                
                let allObj={
                        "color": selectedFilterColor,
                        "task":taskValue,
                    }
                allTickets[id]=allObj;

                
                let jiraModal = document.querySelector('.jiraModal');
                jiraModal.parentNode.removeChild(jiraModal)

                let jirarightContentBox = document.querySelector('.jira-right-Content-Box');
                let div =document.createElement('div');
                div.classList.add("jiraNoteContainer");
                div.classList.add(`jira${allObj['color']}Box`);
                div.setAttribute('jiraNoteId',`${id}`)
                div.innerHTML =
                `
                    <div class="jiraIdNColorBox">
                        #${id}
                        </div>
                        <div class="jiraNoteBOx" contenteditable="true">
                        ${taskValue}
                        </div>
                    </div>     
                `
                    let jiraNoteBOx = div.querySelector('.jiraNoteBOx');
                    jiraNoteBOx.addEventListener('input',function(e){
                        e.stopPropagation();
                        let allObj = allTickets[id];
                        allObj.task =e.currentTarget.innerText;
                    })

                    jiraNoteBOx.addEventListener('click',function(e){
                        e.stopPropagation();
                    })
                jirarightContentBox.append(div);

              
                selectedFilterColor="Tamarama"

                let singleBoxColorChange = document.querySelector(`[jiranoteid="${id}"]`);
                if(singleBoxColorChange){

                    singleBoxColorChange.addEventListener('click',function(e){
                        e.stopPropagation();
                        if(deleteMode==true){
                            singleBoxColorChange.parentNode.removeChild(singleBoxColorChange);
                            delete allTickets[id];
                            return;
                        }
                        let colorArr = ['Red','Yellow','Green','Tamarama'];
                        let jiraColorNote = allTickets[id].color;
                        let currColorIndex = colorArr.indexOf(jiraColorNote);
                        // console.log(currColorIndex);
                        singleBoxColorChange.classList.remove(`jira${jiraColorNote}Box`);
                        singleBoxColorChange.classList.add(`jira${colorArr[(currColorIndex+1)%4]}Box`)
                        allTickets[id].color =colorArr[(currColorIndex+1)%4];
                    });
                }
            }
        })


        let modalCencelBox = document.querySelector('.modalCencelBox');
        modalCencelBox.addEventListener('click',function(){
            let jiraModal = document.querySelector('.jiraModal');
            jiraModal.parentNode.removeChild(jiraModal);

        })
        
    })

    let quickFilterRed = document.querySelector('.JRT-innerColorBox.jiraRed');
        quickFilterRed.addEventListener('click',function(){
            let allNoteBox = document.querySelectorAll('.jiraNoteContainer');
            for(let i=0;i<allNoteBox.length;i++){
        
                if(allNoteBox[i].classList.contains('jiraRedBox')){
                    allNoteBox[i].style.display = "";
                   
                }else{
                    allNoteBox[i].removeAttribute('style')
                    allNoteBox[i].style.display = "none";
                }
          
            }
        });
    let quickFilterYellow = document.querySelector('.JRT-innerColorBox.jiraYellow');
    
    quickFilterYellow.addEventListener('click',function(){
        let allNoteBox = document.querySelectorAll('.jiraNoteContainer');
            
            
            for(let i=0;i<allNoteBox.length;i++){
           
                if(allNoteBox[i].classList.contains('jiraYellowBox')){
                    
                    allNoteBox[i].style.display = "";
                }else{
                    allNoteBox[i].removeAttribute('style')
                    allNoteBox[i].style.display = "none";
                }
            }
        });
    let quickFilterGreen = document.querySelector('.JRT-innerColorBox.jiraGreen');

    quickFilterGreen.addEventListener('click',function(){
        let allNoteBox = document.querySelectorAll('.jiraNoteContainer');
            
            
            for(let i=0;i<allNoteBox.length;i++){
           
                if(allNoteBox[i].classList.contains('jiraGreenBox')){
                    
                    allNoteBox[i].style.display = "";
                }else{
                    allNoteBox[i].removeAttribute('style')
                    allNoteBox[i].style.display = "none";
                }
            }
        });

    let quickFilterTamarama = document.querySelector('.JRT-innerColorBox.jiraTamarama');

    quickFilterTamarama.addEventListener('click',function(){
        let allNoteBox = document.querySelectorAll('.jiraNoteContainer');
            
            
            for(let i=0;i<allNoteBox.length;i++){
           
                if(allNoteBox[i].classList.contains('jiraTamaramaBox')){
                    
                    allNoteBox[i].style.display = "";
                }else{
                    allNoteBox[i].removeAttribute('style')
                    allNoteBox[i].style.display = "none";
                }
            }
        });
    let quickFilter = document.querySelector('.jrtInnerFilterBox.quickFilter');

    quickFilter.addEventListener('click',function(){
        let allNoteBox = document.querySelectorAll('.jiraNoteContainer');
            for(let i=0;i<allNoteBox.length;i++){
 
            allNoteBox[i].style.display = "";
            }
        });

   
        function jiraLoadTask(){

            if(localStorage.getItem('jiraAllTickets')){
                 allTickets =  JSON.parse(localStorage.getItem('jiraAllTickets'));
                        for(let key in allTickets){
                            let currId = key;
                            let singleTickets = allTickets[key];
                        

                            let jirarightContentBox = document.querySelector('.jira-right-Content-Box');
                            let div =document.createElement('div');
                            div.classList.add("jiraNoteContainer");
                            div.classList.add(`jira${singleTickets['color']}Box`);
                            div.setAttribute('jiraNoteId',`${currId}`)
                            div.innerHTML =
                            `
                                <div class="jiraIdNColorBox">
                                    #${currId}
                                    </div>
                                    <div class="jiraNoteBOx" contenteditable="true">
                                    ${singleTickets['task']}
                                    </div>
                                </div>     
                            `
                                let jiraNoteBOx = div.querySelector('.jiraNoteBOx');
                                jiraNoteBOx.addEventListener('input',function(e){
                                    
                                    e.stopPropagation();
                                    // console.log("a");
                                    let allObj = allTickets[currId];
                                    allObj.task =e.currentTarget.innerText;
                                })

                                jiraNoteBOx.addEventListener('click',function(e){
                                    e.stopPropagation();
                                })
                            jirarightContentBox.append(div);

                            let singleBoxColorChange = document.querySelector(`[jiranoteid="${currId}"]`);
                            if(singleBoxColorChange){
            
                                singleBoxColorChange.addEventListener('click',function(e){
                                    e.stopPropagation();
                                    if(deleteMode==true){
                                        singleBoxColorChange.parentNode.removeChild(singleBoxColorChange);
                                        delete allTickets[currId];
                                        return;
                                    }
                                    let colorArr = ['Red','Yellow','Green','Tamarama'];
                                    let jiraColorNote = allTickets[currId].color;
                                    let currColorIndex = colorArr.indexOf(jiraColorNote);
                                    // console.log(currColorIndex);
                                    singleBoxColorChange.classList.remove(`jira${jiraColorNote}Box`);
                                    singleBoxColorChange.classList.add(`jira${colorArr[(currColorIndex+1)%4]}Box`)
                                    allTickets[currId].color =colorArr[(currColorIndex+1)%4];
                                });
                            }
                        }
                }
        }
}

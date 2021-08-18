function linkedIn(currDockIcon){
    
    let appBox=`.box-box[appbox="LinkedIn"]`
    toRemoveLaunchPad();
    currDockIcon.style.animation="box 1s  alternate";
    if(!currDockIcon.querySelector('.active-dot')){
            let divDot =  document.createElement("div");
            divDot.setAttribute('appBox-dot','LinkedIn-dot');
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
    div.setAttribute('appBox',"LinkedIn");
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
                    LinkedIn
                </div>
            </div>
            <div class="linkedLn-appSiteBox">
                <div class="linkedLn-headBox"> 
                    <div class="headBox-container">
                        <div class="logoSearch-container">
                            <div class="linkedLn-logo">
                                <img src="./appFiles/linkedIn/image/LinkedIn_logo.png" alt="logo">
                            </div>
                            <div class="linkedLn-searchBox">
                                <input type="text" placeholder="Search">
                            </div>
                        </div>
                        <div class="linkedLn-iconContainer">
                            <div class="linkedLn-iconBox">
                                <span class="material-icons-round">
                                home
                                </span>
                                Home
                                
                            </div>
                            <div class="linkedLn-iconBox">
                                <span class="material-icons-round">
                                people
                                </span>
                                My Network
                            </div>
                            <div class="linkedLn-iconBox">
                                <span class="material-icons-round">
                                business_center
                                </span>
                                Job
                            </div>
                            <div class="linkedLn-iconBox">
                                <span class="material-icons-round">
                                comment
                                </span>
                                Messaging
                            </div>
                            <div class="linkedLn-iconBox">
                                <span class="material-icons-round">
                                notifications
                                </span>
                                Notifications
                            </div>
                            <div class="linkedLn-iconBox ldln-iconBox-MeText">
                                <span class="ldln-iconBox-Me">
                                
                                </span>
                                Me
                                <div class="linkedLn-iconBox-select">
                                </div>
                            </div>

                            <div class="linkedLn-iconBox linkedLn-iconBox-Work">
                                <span class="material-icons-round">
                                apps
                                </span>
                                Work
                            </div>
                             <div class="linkedLn-iconBox linkedLn-iconBox-tryPremiumText">
                              Try Premium for free
                            </div>
                        </div>
                    </div>   
                </div>
                <div class="profile-view-container">
                    
                    <div class="profile-view-left-container">
                        <div class="inner-profileView-Box">
                            <div class="inner-profileView-Banner">
                                <div class="banner-Camera-Icon">
                                    <span class="material-icons-round">
                                    photo_camera
                                    </span>
                                </div>
                                <img  class="prfile-mypic" src="../../appFiles/linkedIn/image/bigMe.jfif" alt="profile">
                            </div>
                            <div class="inner-profileView-content">

                                <div class="inner-profileView-content-logo">
                                    <span class="material-icons-outlined">
                                        edit
                                    </span>
                                </div>

                                <div class="inner-profileView-content-Text">
                                    Arpit Maurya
                                </div>
                                <div class="inner-profileView-content-bioText">
                                    Aspiring MERN Full Stack Developer | Enthusiast Data Structure And Algorithms | JAVA
                                </div>
                                <div class="inner-profileView-content-address">
                                    Mumbai, Maharashtra, India . <span>Contact info</span>
                                </div>
                                <div class="inner-profileView-content-connections"> <span>500+ connections</span>
                                </div>

                                <div class="inner-profileView-content-optionBox">
                                    <div class="content-optionBox openToBox">Open To</div>
                                    <div class="content-optionBox">Add Section</div>
                                    <div class="content-optionBox">
                                    More</div>
                                </div>

                            </div>
                        </div> 
                        <div class="inner-dashBoard-container">
                            <div class="inner-dashboard-dashboardText">Your Dashboard</div>
                            <div class="inner-dashboard-privateToYou">Private to you</div>
                            <div class="inner-dashboard-viewsDetail-container">
                                <div class="viewsDetail-box">
                                    <div class="viewsDetail-box-number">408</div>
                                    <div class="viewsDetail-box-TextData"> Who viewed your profile
                                    </div>
                                </div>

                                <div class="viewsDetail-box viewsDetail2ndBox">
                                    <div class="viewsDetail-box-number">2,204</div>
                                    <div class="viewsDetail-box-TextData"> Video views
                                    </div>
                                </div>

                                <div class="viewsDetail-box viewsDetail3rdBox">
                                    <div class="viewsDetail-box-number">37</div>
                                    <div class="viewsDetail-box-TextData">  Search Appearances
                                    </div>
                                </div>
                            </div>
                            <div class="inner-dashboard-data-container">
                                <div class="dashboard-data-box">
                                    <span class="material-icons-round">
                                    settings_input_antenna
                                    </span>
                                    <div class="dashboard-data-box-textContainer">
                                        <div class="dashboard-data-box-text1"> Creator Mode : Off</div>
                                        <div class="dashboard-data-box-text2">
                                            Grow your audience and get discovered by highlighting content on your profile.
                                        </div>
                                    </div>
                                </div>
                                <div class="dashboard-data-box">
                                    <span class="material-icons-round">
                                    people
                                    </span>
                                    <div class="dashboard-data-box-textContainer">
                                        <div class="dashboard-data-box-text1"> My Network</div>
                                        <div class="dashboard-data-box-text2">
                                            Manage your connections, events,and interests.
                                        </div>
                                    </div>
                                </div>
                                <div class="dashboard-data-box">
                                    <span class="material-icons-outlined">
                                    payment
                                    </span>
                                    <div class="dashboard-data-box-textContainer">
                                        <div class="dashboard-data-box-text1"> Salary insights</div>
                                        <div class="dashboard-data-box-text2">
                                            See how your salary compares to other in the community.
                                        </div>
                                    </div>
                                </div>
                                <div class="dashboard-data-box">
                                    <span class="material-icons-outlined">
                                    bookmark
                                    </span>
                                    <div class="dashboard-data-box-textContainer">
                                        <div class="dashboard-data-box-text1"> My items</div>
                                        <div class="dashboard-data-box-text2">
                                            Keep track of your jobs, courses and articles.
                                        </div>
                                    </div>
                                </div>
                        
                                
                                
                            </div>
                        </div>
                        <div class="inner-blank-view"></div>


                    </div>
                    <div class="profile-view-midBlank-container">
                    </div>
                    <div class="profile-view-right-container">
                        <div class="edit-langProfile-box">
                            <div class= "langProfile-box langProfile-border">
                                Edit public profile & URL
                                <span class="material-icons-round questionMarkIcon">
                                help
                                </span>
                            </div>
                            <div class= "langProfile-box">
                             Add profile in another language
                             <span class="material-icons-round questionMarkIcon">
                                help
                                </span>
                            </div>
                        </div>
                        <div class="people-viewed-container">
                            <div class="peopleAlsoViewed">
                                People also viewed
                            </div>
                            <div class="people-info-box">
                                <img src="../../appFiles/linkedIn/image/loki.png" alt="loki">
                                <div class="userData-Box">
                                        <div class="userData-Box-Name">
                                            Loki Laufeyson
                                        </div>
                                        <div class="userData-Box-Bio">
                                            The God Of Mischief. Trength, Durability, And Longevity
                                        </div>
                                        <div class="userData-Box-messageBox">
                                        Message
                                        </div>
                                </div>
                            </div>
                            <div class="people-info-box">
                                <img src="../../appFiles/linkedIn/image/scarlet.png" alt="ScarletWitch">
                                <div class="userData-Box">
                                        <div class="userData-Box-Name">
                                        Wanda Maximoff
                                        </div>
                                        <div class="userData-Box-Bio">
                                        Telekinesis, Energy Manipulation, and Neuroelectric interfacing
                                        </div>
                                        <div class="userData-Box-messageBox">
                                        Message
                                        </div>
                                </div>
                            </div>
                            <div class="people-info-box">
                                <img src="../../appFiles/linkedIn/image/thor.png" alt="thor">
                                <div class="userData-Box">
                                        <div class="userData-Box-Name">
                                        Thor Odinson
                                        </div>
                                        <div class="userData-Box-Bio">
                                            The God Of Thunder.Superhuman Strength, Durability and Longevity
                                        </div>
                                        <div class="userData-Box-messageBox">
                                        Message
                                        </div>
                                </div>
                            </div>
                            <div class="people-info-box">
                                <img src="../../appFiles/linkedIn/image/bruce.png" alt="bruce">
                                <div class="userData-Box">
                                        <div class="userData-Box-Name">
                                        Dr. Bruce Banner
                                        </div>
                                        <div class="userData-Box-Bio">
                                        Invulnerability, Anger Empowerment
                                        </div>
                                        <div class="userData-Box-messageBox">
                                        Message
                                        </div>
                                </div>
                            </div>
                            <div class="people-info-box">
                                <img src="../../appFiles/linkedIn/image/blackWido.png" alt="blackWido">
                                <div class="userData-Box">
                                        <div class="userData-Box-Name">
                                        Natasha Romanoff
                                        </div>
                                        <div class="userData-Box-Bio">
                                        Master In The Covert Arts Of Espionage
                                        </div>
                                        <div class="userData-Box-messageBox">
                                        Message
                                        </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    divScreenContainer.append(div);


    //Z-INdex                  
    let currBox = document.querySelector('.box-box[appbox="LinkedIn"]');
    if(currBox){
        currDockIcon.addEventListener("click",function(){

            if(lastZIndexAppBOx != lastZIndexAppBOx!='LinkedIn' ){
                let lastOpenBox = document.querySelector(`.box-box[appbox="${lastZIndexAppBOx}"]`);
                if(lastOpenBox){
                    lastOpenBox.style.zIndex = "0";
                }
            }
            let currBox = document.querySelector('.box-box[appbox="LinkedIn"]');
            currBox.style.zIndex = "80";
            lastZIndexAppBOx = "LinkedIn";
        })
    }

    cancelCircle(currDockIcon,appBox);
    fullScreenCircle(appBox);
    minimize(appBox);
}
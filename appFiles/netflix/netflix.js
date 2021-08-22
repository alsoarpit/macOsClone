function netflix(currDockIcon){
    let appBox=`.box-box[appbox="Netflix"]`
    toRemoveLaunchPad();
    currDockIcon.style.animation="box 1s  alternate";
    if(!currDockIcon.querySelector('.active-dot')){
            let divDot =  document.createElement("div");
            divDot.setAttribute('appBox-dot','Netflix-dot');
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
    div.setAttribute('appBox',"Netflix");
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
                    Netflix
                </div>
            </div>
            <div class="netflix-appSiteBox">
                <div class="inner-netflix-appSiteBox-container">
                    <div class="inner-netflix-appSiteBox-box">
                            <div class="netflix-logo-Div">
                                    <div class="netflix-logo">
                                        <img src="../../appFiles/netflix/image/Netflix_Logo.png" alt="netflix_logo"> 
                                    </div>
                                    <div class="netflix-logo-rightBox">
                                        <div class="netflix-logo-rightBox-lang">
                                        <span class="material-icons-outlined">
                                        language
                                        </span>
                                        English
                                        </div>
                                        <div class="netflix-logo-rightBox-signIn">
                                            Sign In
                                        </div>
                                    </div>

                            </div>
                            <div class="netflix-center-content-container">
                                <div class="netflix-center-content-Box">
                                        <div class="netflix-center-text1">
                                            Unlimited movies, TV shows and more.
                                        </div>
                                        <div class="netflix-center-text2">
                                            Watch anywhere. Cancel anytime.
                                        </div>
                                        <div class="netflix-center-text3">
                                             Ready to watch? Enter your email to create or restart your membership.
                                        </div>
                                        <div class="netflix-center-gmailBox">
                                            <div class="inner-netflix-center-gmailBox">
                                                Email address
                                            </div>
                                            <div class="inner-netflix-center-startBox">
                                                Get Started
                                                <span class="material-icons-outlined netflix-getStartText">
                                                arrow_forward_ios
                                                </span>
                                            </div>
                                                
                                        </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div class="netflix-tv-container">
                        <div class="netflix-tv-text">
                            <div class="netflix-tv-text-box1-leftSide">
                                Enjoy on your TV.
                            </div>
                            <div class="netflix-tv-text-box2-leftSide">
                            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
                             
                            </div>
                        </div>
                        <div class="netflix-tv-img">
                            <img src="../../appFiles/netflix/image/tv.png" alt="tvImage">

                        </div>
                </div>
                <div class="netflix-tv-container">
                        
                        <div class="netflix-tv-img androidImg">
                            <img src="../../appFiles/netflix/image/android.png" alt="android">

                        </div>
                        <div class="netflix-tv-text">
                            <div class="netflix-tv-text-box1-rightSide">
                            Download your shows to watch offline.
                            </div>
                            <div class="netflix-tv-text-box2-rightSide">
                                Save your favourites easily and always have something to watch.
                            
                            </div>
                        </div>
                </div>
                <div class="netflix-tv-container">
                        
                        <div class="netflix-tv-text">
                            <div class="netflix-tv-text-box1-leftSide">
                                Watch everywhere.
                            </div>
                            <div class="netflix-tv-text-box2-leftSide">
                                Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                            </div>
                        </div>
                        
                        <div class="netflix-tv-img macImg">
                            <img src="../../appFiles/netflix/image/mac.png" alt="mac">

                        </div>
                </div>
                <div class="netflix-tv-container">
                        
                        <div class="netflix-tv-img childImg">
                            <img src="../../appFiles/netflix/image/child.png" alt="child">

                        </div>
                        <div class="netflix-tv-text">
                            <div class="netflix-tv-text-box1-rightSide">
                                Create profiles for children.
                            </div>
                            <div class="netflix-tv-text-box2-rightSide">
                            Send children on adventures with their favourite characters in a space made just for them—free with your membership.



                            </div>
                        </div>
                </div>
                <div class="netflix-qNA-container">
                        <div class="netflix-qNA-container-box1">
                            Frequently Asked Questions
                        </div>
                        <div class="netflix-qNA-container-qNA-box">
                            <div class="qna-TextBox">
                            What is Netflix?
                            </div>
                            <div class="qna-Symbol">
                                +
                            </div>
                        </div>
                        <div class="netflix-qNA-container-qNA-box">
                            <div class="qna-TextBox">
                                How much does Netflix cost?
                            </div>
                            <div class="qna-Symbol">
                                +
                            </div>
                        </div>
                        <div class="netflix-qNA-container-qNA-box">
                            <div class="qna-TextBox">
                            Where can I watch?
                            </div>
                            <div class="qna-Symbol">
                                +
                            </div>
                        </div>
                        <div class="netflix-qNA-container-qNA-box">
                            <div class="qna-TextBox">
                            What can I watch on Netflix?
                            </div>
                            <div class="qna-Symbol">
                                +
                            </div>
                        </div>
                        <div class="netflix-qNA-container-qNA-box">
                            <div class="qna-TextBox">
                            Is Netflix good for kids?
                            </div>
                            <div class="qna-Symbol">
                                +
                            </div>
                        </div>
                        <div class="netflix-center-text3-2">
                             Ready to watch? Enter your email to create or restart your membership.
                        </div>
                   <div class="netflix-center-gmailBox2">
                       <div class="inner-netflix-center-gmailBox">
                           Email address
                       </div>
                       <div class="inner-netflix-center-startBox">
                           Get Started
                           <span class="material-icons-outlined netflix-getStartText">
                           arrow_forward_ios
                           </span>
                       </div>
                   </div>
                        
                </div>
                
            </div>
        </div>
    `
    divScreenContainer.append(div);


    //Z-INdex                  
    let currBox = document.querySelector('.box-box[appbox="Netflix"]');
    if(currBox){
        currDockIcon.addEventListener("click",function(){

            if(lastZIndexAppBOx != lastZIndexAppBOx!='Netflix' ){
                let lastOpenBox = document.querySelector(`.box-box[appbox="${lastZIndexAppBOx}"]`);
                if(lastOpenBox){
                    lastOpenBox.style.zIndex = "0";
                }
            }
            let currBox = document.querySelector('.box-box[appbox="Netflix"]');
            currBox.style.zIndex = "80";
            lastZIndexAppBOx = "Netflix";
        })
    }

    cancelCircle(currDockIcon,appBox);
    fullScreenCircle(appBox);
    minimize(appBox);
}
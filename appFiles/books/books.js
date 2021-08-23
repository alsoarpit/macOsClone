function books(currDockIcon){
    let appBox=`.box-box[appbox="Books"]`
    toRemoveLaunchPad();
    currDockIcon.style.animation="box 1s  alternate";
    if(!currDockIcon.querySelector('.active-dot')){
            let divDot =  document.createElement("div");
            divDot.setAttribute('appBox-dot','Books-dot');
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
    div.setAttribute('appBox',"Books");
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
                    Books
                </div>
            </div>
            <div class="book-appSiteBox">
                <div class="bookSideNavBlur">
                    <div class="bookSideNav">
                            <div class=" music-navDataContainer">
                                <div class="navLib">Apple Books</div>
                                <div class="music-navbox-input">
                                    <input type="text" placeholder="search">
                                </div>
                                <div class="music-navbox specialmusic-NavBox">
                                       
                                        <span class="material-icons-round music-spanBox">
                                            stars
                                        </span>
                                        <span class="music-navText">
                                            Featured
                                        </span>
                                </div>
                                <div class="music-navbox">
                                   
                                    <span class="material-icons-round music-spanBox">
                                        fact_check
                                    </span>
                                        <span class="music-navText">
                                            Top Charts
                                        </span>
                                </div>
                                <div class="music-navbox">
                                        <span class="material-icons-round music-spanBox">
                                            local_mall
                                        </span>
                                        <span class="music-navText">
                                            Categories
                                        </span>
                                </div>
                                <div class="music-navbox">
                                        <span class="material-icons-round music-spanBox">
                                            supervised_user_circle
                                        </span>
                                        <span class="music-navText">
                                            Top Authors
                                        </span>
                                </div>
                            </div>
                    </div>
                </div>
                <div class="book-container">
                    <div class="book-banner-box">
                    </div>
                    <div class="book-bestSeller-box">
                        Bestsellers
                    </div>
                    <div class="book-stall">
                        <div class="book-stallBook">
                            <div class="bookImg-stall">
                                <img class="nimona" src="../../appFiles/books/image/nimona.webp">
                                <div class="boomImg-name">
                                    Nimona
                                </div>
                                <div class="boomImg-authorName">
                                    Noelle Stevenson
                                </div>
                            </div>
                        </div>
                        <div class="book-stallBook">
                            <div class="bookImg-stall">
                            <img  class="Cemetery" src="../../appFiles/books/image/Cemetery.jpg">
                                <div class="boomImg-name">
                                Cemetery Boys
                                </div>
                                <div class="boomImg-authorName">
                                Aiden Thomas
                                </div>
                            </div>
                        </div>
                        <div class="book-stallBook">
                            <div class="bookImg-stall">
                            <img  class="legend" src="../../appFiles/books/image/legend.jpg">
                                <div class="boomImg-name">
                                One Piece
                                </div>
                                <div class="boomImg-authorName">
                                Eiichiro Oda
                                </div>
                            </div>
                        </div>
                        
                        <div class="book-stallBook">
                            <div class="bookImg-stall">
                            <img class="alchemist"  src="../../appFiles/books/image/alchemist.jpg">
                                <div class="boomImg-name">
                                The Alchemist
                                </div>
                                <div class="boomImg-authorName">
                                Coelho, Paulo
                                </div>
                            </div>
                        </div>
                        <div class="book-stallBook">
                            <div class="bookImg-stall">
                                <img class="weAreOkay" src="../../appFiles/books/image/weAreOkay.jpg">
                                <div class="boomImg-name">
                                We Are Okay
                                </div>
                                <div class="boomImg-authorName">
                                Lacour Nina
                                </div>
                            </div>
                        </div>
                        <div class="book-stallBook">
                            <div class="bookImg-stall">
                            <img class="flame"  src="../../appFiles/books/image/flame.jpg">
                                <div class="boomImg-name">
                                We Hunt the Flame
                                </div>
                                <div class="boomImg-authorName">
                                Hafsah Faizal
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
    let currBox = document.querySelector('.box-box[appbox="Books"]');
    if(currBox){
        currDockIcon.addEventListener("click",function(){

            if(lastZIndexAppBOx != lastZIndexAppBOx!='Books' ){
                let lastOpenBox = document.querySelector(`.box-box[appbox="${lastZIndexAppBOx}"]`);
                if(lastOpenBox){
                    lastOpenBox.style.zIndex = "0";
                }
            }
            let currBox = document.querySelector('.box-box[appbox="Books"]');
            currBox.style.zIndex = "80";
            lastZIndexAppBOx = "Books";
        })
    }

    cancelCircle(currDockIcon,appBox);
    fullScreenCircle(appBox);
    minimize(appBox);


    let nimona =  document.querySelector(".nimona");
    nimona.addEventListener("click",function(){
        let bookContainer = document.querySelector(".book-container");
            let div =  document.createElement("div");
            div.classList="pdf-box-book";
            div.innerHTML=
            `
            <span class="material-icons-round book-cancel-btn">
            cancel
            </span>
            <embed src="../../appFiles/books/pdf/Nimona by Noelle Stevenson (z-lib.org).pdf" type="application/pdf" width="100%" height="100%" />
            `
            bookContainer.append(div);
        let cancelBtn = div.querySelector(".book-cancel-btn");
        cancelBtn.addEventListener("click",function(e){
            e.currentTarget.parentElement.remove();
        })
    })


    let Cemetery =  document.querySelector(".Cemetery");
    Cemetery.addEventListener("click",function(){
        let bookContainer = document.querySelector(".book-container");
            let div =  document.createElement("div");
            div.classList="pdf-box-book";
            div.innerHTML=
            `
            <span class="material-icons-round book-cancel-btn">
            cancel
            </span>
            <embed src="../../appFiles/books/pdf/Cemetery Boys by Aiden Thomas (z-lib.org).epub.pdf" type="application/pdf" width="100%" height="100%" />
            `
            bookContainer.append(div);
        let cancelBtn = div.querySelector(".book-cancel-btn");
        cancelBtn.addEventListener("click",function(e){
            e.currentTarget.parentElement.remove();
        })
    })


    let legend =  document.querySelector(".legend");
    legend.addEventListener("click",function(){
        let bookContainer = document.querySelector(".book-container");
            let div =  document.createElement("div");
            div.classList="pdf-box-book";
            div.innerHTML=
            `
            <span class="material-icons-round book-cancel-btn">
            cancel
            </span>
            <embed src="../../appFiles/books/pdf/Legendborn by Tracy Deonn (z-lib.org).epub.pdf" type="application/pdf" width="100%" height="100%" />
            `
            bookContainer.append(div);
        let cancelBtn = div.querySelector(".book-cancel-btn");
        cancelBtn.addEventListener("click",function(e){
            e.currentTarget.parentElement.remove();
        })
    })


    let alchemist =  document.querySelector(".alchemist");
    alchemist.addEventListener("click",function(){
        let bookContainer = document.querySelector(".book-container");
            let div =  document.createElement("div");
            div.classList="pdf-box-book";
            div.innerHTML=
            `
            <span class="material-icons-round book-cancel-btn">
            cancel
            </span>
            <embed src="../../appFiles/books/pdf/The Alchemist 25th Anniversary by Paulo Coelho [Coelho, Paulo] (z-lib.org).pdf" type="application/pdf" width="100%" height="100%" />
            `
            bookContainer.append(div);
        let cancelBtn = div.querySelector(".book-cancel-btn");
        cancelBtn.addEventListener("click",function(e){
            e.currentTarget.parentElement.remove();
        })
    })


    let weAreOkay =  document.querySelector(".weAreOkay");
    weAreOkay.addEventListener("click",function(){
        let bookContainer = document.querySelector(".book-container");
            let div =  document.createElement("div");
            div.classList="pdf-box-book";
            div.innerHTML=
            `
            <span class="material-icons-round book-cancel-btn">
            cancel
            </span>
            <embed src="../../appFiles/books/pdf/We Are Okay by Lacour Nina (z-lib.org).epub.pdf" type="application/pdf" width="100%" height="100%" />
            `
            bookContainer.append(div);
        let cancelBtn = div.querySelector(".book-cancel-btn");
        cancelBtn.addEventListener("click",function(e){
            e.currentTarget.parentElement.remove();
        })
    })


    let flame =  document.querySelector(".flame");
    flame.addEventListener("click",function(){
        let bookContainer = document.querySelector(".book-container");
            let div =  document.createElement("div");
            div.classList="pdf-box-book";
            div.innerHTML=
            `
            <span class="material-icons-round book-cancel-btn">
            cancel
            </span>
            <embed src="../../appFiles/books/pdf/We Hunt the Flame by Hafsah Faizal (z-lib.org).epub.pdf" width="100%" height="100%" />
            `
            bookContainer.append(div);
        let cancelBtn = div.querySelector(".book-cancel-btn");
        cancelBtn.addEventListener("click",function(e){
            e.currentTarget.parentElement.remove();
        })
    })





























}
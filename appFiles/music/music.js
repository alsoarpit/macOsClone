let isMusicPlaying = false;
let currSong = 0;
let songObj = [
    
{   songNo:"music1",
    songName:"Param Sundari",
    songArtist:"A.R. Rahman & Shreya Ghoshal",
},
{   songNo:"music2",
    songName:"Ghoomar",
    songArtist:"Shreya Ghoshal,Swaroop Khan",
},
{   songNo:"music3",
    songName:"Ambarsariya",
    songArtist:"Sona Mohapatra",
},
{   songNo:"music4",
    songName:"Jumbo",
    songArtist:"Various Artists",
},
{   songNo:"music5",
    songName:"Humsafar",
    songArtist:"Akhil Sachdeva,Mansheel Gujral",
},
{   songNo:"music6",
    songName:"Manali Trance",
    songArtist:"LIL Golu , Neha  Kakkar",
},
{   songNo:"music7",
    songName:"Barish",
    songArtist:"Aman Trikha & Mithoon",
},
{   songNo:"music8",
    songName:"Tum Hi ho",
    songArtist:"Arijit Singh",
},

]





















function music(currDockIcon){
    let appBox=`.box-box[appbox="Music"]`
    toRemoveLaunchPad();
    currDockIcon.style.animation="box 1s  alternate";
    if(!currDockIcon.querySelector('.active-dot')){
            let divDot =  document.createElement("div");
            divDot.setAttribute('appBox-dot','Music-dot');
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
    div.setAttribute('appBox',"Music");
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
                    Music
                </div>
            </div>
            <div class="music-appSiteBox">
                <div class="musicSideNavBlur">
                    <div class="musicSideNav">
                            <div class=" music-navDataContainer">
                                <div class="music-navLib">
                                <img src="../../appFiles/music/image/applemusicLogo.png" alt="logo">
                                </div>
                                <div class="music-navbox-input">
                                    <input type="text" placeholder="search">
                                </div>
                                <div class="music-navbox specialmusic-NavBox">
                                        <span class="material-icons-outlined music-spanBox ">
                                            play_circle_outline
                                            </span>
                                        <span class="music-navText">
                                            Listen Now
                                        </span>
                                </div>
                                <div class="music-navbox">
                                    <span class="material-icons-round music-spanBox">
                                    grid_view
                                    </span>
                                        <span class="music-navText">
                                            Browser
                                        </span>
                                </div>
                                <div class="music-navbox">
                                        <span class="material-icons-round music-spanBox">
                                        sensors
                                        </span>
                                        <span class="music-navText">
                                            Radio
                                        </span>
                                </div>
                            </div>

                            <div class="music-navDataContainer">
                                <div class="navLib navLibLibrary">LIBRARY</div>
                                <div class="music-navbox">
                                    <span class="material-icons-round music-spanBox">
                                    schedule
                                    </span>
                                        <span class="music-navText">
                                            Recently Added
                                        </span>
                                </div>
                                <div class="music-navbox">
                                    <span class="material-icons-round music-spanBox">
                                    graphic_eq
                                    </span>
                                        <span class="music-navText">
                                            Browser
                                        </span>
                                </div>
                                <div class="music-navbox">
                                    <span class="material-icons-round music-spanBox">
                                    photo_album
                                    </span>
                                        <span class="music-navText">
                                            Albums
                                        </span>
                                </div>
                                <div class="music-navbox">
                                    <span class="material-icons-round music-spanBox">
                                    music_note
                                    </span>
                                        <span class="music-navText">
                                            Songs
                                        </span>
                                </div>
                            </div>
                            
                          


                            <div class="music-navDataContainer upperBorder2ndBox">
                                <div class="navLib">PLAYLIST</div>
                                <div class="music-navbox">
                                        <div class="albumsBox countryFaithRadio">
                                        </div>
                                        <span class="music-navText-playlist">
                                            Faith Radio
                                        </span>
                                </div>
                            
                                <div class="music-navbox">
                                        <div class="albumsBox appleHits">
                                        </div>
                                        <span class="music-navText-playlist">
                                             Apple Hits
                                        </span>
                                </div>
                                
                                <div class="music-navbox">
                                        <div class="albumsBox simplyPiano">
                                        </div>
                                        <span class="music-navText-playlist">
                                        Simply Piano
                                        </span>
                                </div>
                               
                                <div class="music-navbox">
                                        <div class="albumsBox spatial">
                                        </div>
                                        <span class="music-navText-playlist">
                                            Spatial
                                        </span>
                                </div>
                                <div class="music-navbox">
                                        <div class="albumsBox essentials">
                                        </div>
                                        <span class="music-navText-playlist">
                                            Essentials
                                        </span>
                                </div>
                           
                            </div>
                        </div>
                    </div>
                    <div class="music-container">
                        <div class="music-play-head-container">
                            <div class="music-play-head-inner-container">
                                    <div class="music-play-control">
                                            <span class="material-icons-round music-control-spanBox Mc-Sp-1 ">
                                            fast_rewind
                                            </span>
                                            <span class="material-icons-round music-control-spanBox Mc-Sp-2">
                                            play_arrow
                                            </span>
                                            <span class="material-icons-round music-control-spanBox Mc-Sp-3">
                                            fast_forward
                                            </span>
                                    </div>
                                    <div class="music-play-preview">   
                                        <audio  src="../../appFiles/music/audio/${songObj[currSong].songNo}.mp3" type="audio/ogg">                                     
                                        </audio>
                                        <img src="../../appFiles/music/image/${songObj[currSong].songNo}.webp">
                                        <div class="music-play-preview-dataContainer">
                                            <div class="music-play-preview-dataContainer-songName">
                                               ${songObj[currSong].songName}
                                            </div>
                                            <div class="music-play-preview-dataContainer-artistName">
                                            ${songObj[currSong].songArtist}
                                            </div>
                                            <div class="music-play-preview-dataContainer-songProcess">
                                                <div class="songProcessDiv"></div>
                                            </div>
                                            
                                        </div>
                                    
                                    </div>
                                    <div class="music-play-volume"> 
                                        <span class="material-icons-round music-play-volume-spanBox">
                                        volume_up
                                        </span>
                                        <input class="music-play-volume-divBox" type="range" id="volume" name="volume" min="0" max="100">
                                    </div>
                                    <div class="music-play-singIn-box">
                                            <span class="material-icons-round music-play-singIn-box-spanBox">
                                            format_list_bulleted
                                            </span>
                                            <div class="music-play-singIn-box-divBox">Sign In</div>
                                    </div>
                            </div>
                        </div>
                        <div class="music-play-data-container">
                                
                                
                                <div class="music-box" songNo="music1" songName="Param Sundari" songArtist="A.R. Rahman & Shreya Ghoshal">
                                    <img src="../../appFiles/music/image/music1.webp" dataArr="0">
                                    <div class="music-songName-box">
                                    Param Sundari
                                    </div>
                                    <div class="music-artistName-box">
                                            A.R. Rahman
                                            & 
                                            Shreya Ghoshal
                                    </div>
                                </div>
                                <div class="music-box" songNo="music2" songName="Ghoomar" songArtist="Shreya Ghoshal,Swaroop Khan ">
                                    <img src="../../appFiles/music/image/music2.webp" dataArr="1">
                                    <div class="music-songName-box">
                                    Ghoomar
                                    </div>
                                    <div class="music-artistName-box">
                                    Shreya Ghoshal,
                                    Swaroop Khan                                  
                                    </div>
                                </div>
                                <div class="music-box" songNo="music3" songName="Ambarsariya" songArtist="Sona Mohapatra">
                                    <img src="../../appFiles/music/image/music3.webp" dataArr="2">
                                    <div class="music-songName-box">
                                    Ambarsariya
                                    </div>
                                    <div class="music-artistName-box">
                                    Sona Mohapatra
                                    </div>
                                </div>
                                <div class="music-box" songNo="music4" songName="Jumbo" songArtist=" Various Artists">
                                    <img src="../../appFiles/music/image/music4.webp" dataArr="3">
                                    <div class="music-songName-box">
                                    Jumbo
                                    </div>
                                    <div class="music-artistName-box">
                                    Various Artists
                                    </div>
                                </div>
                                <div class="music-box" songNo="music5" songName="Humsafar" songArtist=" Akhil Sachdeva,Mansheel Gujral ">
                                    <img src="../../appFiles/music/image/music5.webp" dataArr="4">
                                    <div class="music-songName-box">
                                    Humsafar
                                    </div>
                                    <div class="music-artistName-box">
                                    Akhil Sachdeva,
                                    Mansheel Gujral
                                    </div>
                                </div>                   
                                <div class="music-box" songNo="music6" songName="Manali Trance" songArtist=" LIL Golu , Neha  Kakkar ">
                                    <img src="../../appFiles/music/image/music6.webp" dataArr="5">
                                    <div class="music-songName-box">
                                    Manali Trance
                                    </div>
                                    <div class="music-artistName-box">
                                    LIL Golu , Neha  Kakkar 
                                    </div>
                                </div>
                                <div class="music-box" songNo="music7" songName="Barish" songArtist="Aman Trikha & Mithoon">
                                    <img src="../../appFiles/music/image/music7.webp" dataArr="6">
                                    <div class="music-songName-box">
                                    Barish
                                    </div>
                                    <div class="music-artistName-box">
                                    Aman Trikha & Mithoon
                                    </div>
                                </div>
                                <div class="music-box" songNo="music8" songName="Tum Hi ho" songArtist=" Arijit Singh">
                                    <img src="../../appFiles/music/image/music8.webp" dataArr="7">
                                    <div class="music-songName-box">
                                    Tum Hi ho
                                    </div>
                                    <div class="music-artistName-box">
                                    Arijit Singh
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
    let currBox = document.querySelector('.box-box[appbox="Music"]');
    if(currBox){
        currDockIcon.addEventListener("click",function(){

            if(lastZIndexAppBOx != lastZIndexAppBOx!='Music' ){
                let lastOpenBox = document.querySelector(`.box-box[appbox="${lastZIndexAppBOx}"]`);
                if(lastOpenBox){
                    lastOpenBox.style.zIndex = "0";
                }
            }
            let currBox = document.querySelector('.box-box[appbox="Music"]');
            currBox.style.zIndex = "80";
            lastZIndexAppBOx = "Music";
        })
    }

    cancelCircle(currDockIcon,appBox);
    fullScreenCircle(appBox);
    minimize(appBox);

    let music = document.querySelector('audio');
    let playBtn =document.querySelector('.Mc-Sp-2');
    playBtn.addEventListener("click",function (){
        if(isMusicPlaying){
            music.pause();
            isMusicPlaying=false;
            let playBtn =document.querySelector('.Mc-Sp-2');
            playBtn.innerText="play_arrow";
            return;
        }
        let playBtn =document.querySelector('.Mc-Sp-2');
        playBtn.innerText="pause";
        music.play();
        isMusicPlaying=true;
    });
    music.addEventListener('timeupdate',function(e){
        let songProcessDiv = document.querySelector('.songProcessDiv');
        audioObj = e;
        let {currentTime,duration} = audioObj.srcElement;
        let processPercentage = (currentTime/duration)*100;
        songProcessDiv.style.width= `${processPercentage}%`;
        
    })
    let nextSong = document.querySelector('.Mc-Sp-3');
    nextSong.addEventListener("click",function(){
        currSong++;
        currSong= currSong%8;
        let songProcessDiv = document.querySelector('.songProcessDiv');
        songProcessDiv.style.width= `0%`;
        let music = document.querySelector('audio');
        music.autoplay=false;
        // music.removeAttribute("src");
        music.src=`../../appFiles/music/audio/${songObj[currSong].songNo}.mp3`;
            if(isMusicPlaying==true){
                music.autoplay=true
                isMusicPlaying=true;
                let playBtn =document.querySelector('.Mc-Sp-2');
                playBtn.innerText="pause";
         
            }else{
                let playBtn =document.querySelector('.Mc-Sp-2');
                playBtn.innerText="play_arrow";
               
            }
        let img = document.querySelector('.music-play-preview>img');
        img.src=`../../appFiles/music/image/${songObj[currSong].songNo}.webp`;
    
        let songName = document.querySelector('.music-play-preview-dataContainer-songName');
            songName.innerText = `${songObj[currSong].songName}`;
    
        let artistName = document.querySelector(".music-play-preview-dataContainer-artistName");
            artistName.innerText=`${songObj[currSong].songArtist}`;
    })
    let previousSong = document.querySelector('.Mc-Sp-1');
    previousSong.addEventListener("click",function(){
        currSong--;
        if(currSong<0){
            currSong=0;
            return
        }
        currSong= currSong%8;
        let songProcessDiv = document.querySelector('.songProcessDiv');
        songProcessDiv.style.width= `0%`;
        let music = document.querySelector('audio');
        music.autoplay=false;
        // music.removeAttribute("src");
        music.src=`../../appFiles/music/audio/${songObj[currSong].songNo}.mp3`;
            if(isMusicPlaying==true){
                music.autoplay=true;
                isMusicPlaying=true;
                let playBtn =document.querySelector('.Mc-Sp-2');
                playBtn.innerText="pause";
            }
      
         
        let img = document.querySelector('.music-play-preview>img');
        img.src=`../../appFiles/music/image/${songObj[currSong].songNo}.webp`;
    
        let songName = document.querySelector('.music-play-preview-dataContainer-songName');
            songName.innerText = `${songObj[currSong].songName}`;
    
        let artistName = document.querySelector(".music-play-preview-dataContainer-artistName");
            artistName.innerText=`${songObj[currSong].songArtist}`;

           
    })
    music.addEventListener("ended",function(){
        currSong++;
        currSong= currSong%8;
        let songProcessDiv = document.querySelector('.songProcessDiv');
        songProcessDiv.style.width= `0%`;
        let music = document.querySelector('audio');
        // music.removeAttribute("src");
        music.src=`../../appFiles/music/audio/${songObj[currSong].songNo}.mp3`;
            if(isMusicPlaying==true){
                music.autoplay=true;
                isMusicPlaying=true;
                let playBtn =document.querySelector('.Mc-Sp-2');
                playBtn.innerText="pause";
            }
        let img = document.querySelector('.music-play-preview>img');
        img.src=`../../appFiles/music/image/${songObj[currSong].songNo}.webp`;
    
        let songName = document.querySelector('.music-play-preview-dataContainer-songName');
            songName.innerText = `${songObj[currSong].songName}`;
    
        let artistName = document.querySelector(".music-play-preview-dataContainer-artistName");
            artistName.innerText=`${songObj[currSong].songArtist}`;
    })

    let songProcessOuterDiv = document.querySelector('.music-play-preview-dataContainer-songProcess');

    songProcessOuterDiv.addEventListener("click",function(e){
            Element = e;
            let music = document.querySelector('audio');
            let {duration} = music;
            let moveProcess = (Element.offsetX / Element.srcElement.clientWidth)*duration;
            console.log(moveProcess);
            music.currentTime = moveProcess;
    });

    let allMusicImage = document.querySelectorAll('.music-box>img');
    for(let i=0;i<=7;i++){
        allMusicImage[i].addEventListener("click",function(){
            currSong=i;
            currSong= currSong%8;
            let songProcessDiv = document.querySelector('.songProcessDiv');
            songProcessDiv.style.width= `0%`;
            let music = document.querySelector('audio');
            // music.removeAttribute("src");
            music.src=`../../appFiles/music/audio/${songObj[currSong].songNo}.mp3`;
            
                if(isMusicPlaying==true){
                    music.autoplay=true;
                    isMusicPlaying=true;
                    let playBtn =document.querySelector('.Mc-Sp-2');
                    playBtn.innerText="pause";
                }else{
                    music.autoplay=false;
                }

            let img = document.querySelector('.music-play-preview>img');
            img.src=`../../appFiles/music/image/${songObj[currSong].songNo}.webp`;
        
            let songName = document.querySelector('.music-play-preview-dataContainer-songName');
                songName.innerText = `${songObj[currSong].songName}`;
        
            let artistName = document.querySelector(".music-play-preview-dataContainer-artistName");
                artistName.innerText=`${songObj[currSong].songArtist}`;

        })

    }

    
    let musicPlayVolumeDivBox = document.querySelector(".music-play-volume>input");
          
    musicPlayVolumeDivBox.addEventListener("change",function(e){
        let currVolume = e.target.value;
        let music = document.querySelector('audio');
        music.volume = currVolume/100;
    });
    


}
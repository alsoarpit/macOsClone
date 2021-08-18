let req = indexedDB.open("gallery", 1);

let database;
let numberOfMedia = 0;
req.addEventListener("success", function () {
  database = req.result;
});
req.addEventListener("upgradeneeded", function () {
  let db = req.result;

  db.createObjectStore("media", { keyPath: "mId" });
});
req.addEventListener("error", function () {});

function saveMedia(media) {
  if (!database) return; 

  let data = {
    mId: Date.now(),
    mediaData: media,
  };

  let tx = database.transaction("media", "readwrite");
  let mediaobjectStore = tx.objectStore("media");
  mediaobjectStore.add(data);
}
function viewMedia(){

  if(!database) return;

  let tx = database.transaction("media","readonly");
  let mediaobjectStore = tx.objectStore("media");
  let req = mediaobjectStore.openCursor();
  
  req.addEventListener("success",function(){
    cursor = req.result;
    
    if(cursor){
      numberOfMedia++;
      let innerGalleryMediaContainer =  document.querySelector('.innerGalleryMediaContainer');
      let mediaCard = document.createElement('div');
      mediaCard.classList.add("media-Card");
      mediaCard.innerHTML=
      ` <div class="actual-media">
      </div>
      <div class="media-buttons">
          <button class="trashBox" data-mid=${cursor.value.mId}>
              <span class="material-icons-outlined">
              delete_sweep
              </span>

               Tash
          
          </button>
          <button class="downlaodBox">
          <span class="material-icons-outlined">
              file_download
          </span>

          Downlaod</button>
      </div>
      `

      let data  = cursor.value.mediaData;
      let actualMediaBox = mediaCard.querySelector('.actual-media');
        let type =  typeof data;

      let deleteBtn = mediaCard.querySelector('.trashBox');
      deleteBtn.addEventListener("click",function(e){
        numberOfMedia--;
        let mId = Number(e.currentTarget.getAttribute("data-mid"));
        deleteMedia(mId);
        deleteBtn.parentElement.parentElement.remove();
       
      })
      let downloadBtn = mediaCard.querySelector('.downlaodBox');
      if(type=="string"){
        let img  =  document.createElement('img');
        img.src = data;
        actualMediaBox.append(img);

        downloadBtn.addEventListener("click",function(){
          downloadMedia(data,"image")
        })

      }else if(type=="object"){
        let video = document.createElement('video');
        let url = URL.createObjectURL(data);
        downloadBtn.addEventListener("click",function(){
          downloadMedia(url,"video")
        })
        video.src = url;
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        video.controls = true;
        actualMediaBox.append(video);
      }

      innerGalleryMediaContainer.append(mediaCard);
      cursor.continue();
    }else{
      if(numberOfMedia==0){
        let innerGalleryMediaContainer =  document.querySelector('.innerGalleryMediaContainer');
        innerGalleryMediaContainer.innerHTML=
        `
          <div class="noMedia">
          <span class="material-icons-outlined noMediaIcon">
            warning
          </span>
            NO MEDIA FOUND
          </div>
        `
      }
    }
    
    });

}

function downloadMedia(url,type){
  let anchor = document.createElement("a");
  anchor.href = url;

  if(type=="image"){

    anchor.download="image.png";

  }else{
    anchor.download="video.mp4";
  }
  anchor.click();

  anchor.remove();
}

function deleteMedia(mId){
  let tx = database.transaction("media","readwrite");
  let mediaStore = tx.objectStore("media");
  mediaStore.delete(mId);
}
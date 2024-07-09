
function loadStory(story) {
    document.getElementById("PageBody").style.display = "none";
  
    document.getElementById("Story-Container").style.display = "flex";
  
  
  
    var root = document.documentElement;
  
    if (story.background) {
    root.style.setProperty('--story-background', story.background);
    } else {
    root.style.setProperty('--story-background', 'transparent');
    }
  
  
    var chapter = story.CurrentChapter;
  
    data.CurrentChapter = chapter;
    var isVariant = false;
    var variant = null;
    if (chapter.hasVariant) {
      variant= chapter.currentVariant;
    } 
  
  
    const baseImagesFolder = `assets/images/Stories/${story.folder}/Chapters/${chapter.num}${isVariant? `/${variant.num}` : ``}/`;
  
    const baseScriptFolder = `assets/library/${story.folder}/`;
  
    data.baseImagesFolder = baseImagesFolder;
  
    data.PassagePath = baseScriptFolder + story.num + "-" + chapter.num + ".js"
  
    localStorage.setItem("data", JSON.stringify(data));
  
  
    var container = document.getElementById('Story-Container');
  
    const ChapterCoverImageSrc=`${baseImagesFolder}cover.png`;
  
    var ChapterBanner = document.createElement('div');
  
    ChapterBanner.className = "inner padless";
  
    ChapterBanner.innerHTML = `
  
      <div class="TitleFrame">
        <img class="Titleimage" style="width: 100%; height: 100%; object-fit:cover; display: block;" src="${ChapterCoverImageSrc}" />
        <div class="Titleoverlay" style="top:0; left:0; width: 100%; height: 100%;  position: absolute; background: linear-gradient(180deg, rgba(7, 7, 7, 0) 0%, rgba(7, 7, 7, 0.80) 100%); border-top-left-radius: 10px; border-top-right-radius: 10px; overflow: hidden; ">
          <div class="Titledesc" style="position: absolute; bottom: 11%; left: 2.5%; align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 0.5rem; display: inline-flex">
          <div class="TitleText">${story.name}</div>
          <div class="Titlesubtext" style="justify-content: flex-start; align-items: center; gap: 0.4167rem; display: inline-flex">
            <div class="Chaptertext" style="color: #E0E0E0; font-size: 0.7rem; font-family: Satoshi; font-weight: 300; letter-spacing: 0.03em; word-wrap: break-word">Chapter ${chapter.num}</div>
            <div class="Ellipse" style="width: 0.125rem; height: 0.125rem; background: #E0E0E0; border-radius: 9999px"></div>
            <div class="Chaptername" style="color: #E0E0E0; font-size: 0.7rem; font-family: Satoshi; font-weight: 300; letter-spacing: 0.03em; word-wrap: break-word">${chapter.name}</div>
          </div>
          </div>
        </div>
      </div>
  
    
    `;
  
  
    container.appendChild(ChapterBanner);
  
  
  
    loadAndExecuteScript(data.PassagePath);
  }
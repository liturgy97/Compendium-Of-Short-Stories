function devLoad() {

}
var currentAudio;

var currentAudioNode;

var audioPlaying = false;




const siteBody = document.querySelector('body');

const keyV1 = "liturgy97+gen93696";

const CryptoV1 = new SimpleCrypto(keyV1);

const typography = {
  openingSingleQuote : "&lsquo;", 
  closingSingleQuote : "&rsquo;", 
  openingDoubleQuote : "&ldquo;",
  closingDoubleQuote : "&rdquo;"
}

var sections;

var rows;

var parts;

var setChapterIndex = ()=>{}

var currentChapterIndex;

var storyImageAddress;

var baseScriptFolder = "";

var baseImagesFolder = "";

var passagePath = "";

var loadPage;

const wordsPerSecond = 4;

var currentContainer;

var currentScenery;

var currentChapter = null;

var currentStory= null;

var loadedScripts = [];

var data = {};

var gameLoaded = false;

const version = "24.07a";

data.version = version;

data.patreonCodes =  {};

data.patreonCodes.patreonCode2407a =  "";

var resetGame = true;

var currentHeaderMode = "Old";

var hideLogoUponScroll = true;

if (localStorage.getItem("data0")) {

  resetGame = false;

  data = JSON.parse(localStorage.getItem("data0")) ;

  if (data.patreonCodes.patreonCode2407a != "patreontrial0707") resetGame = true;

}




var currentPage = "MainPage";

const isPatreonVersion = version.includes("P");

const MainPageFilters = ["Available", "Unread", "Favorites", "Hidden", "All Stories"];


const totalSavesCount = 6;

const gamePages = ["MainPage", "StoryHolder", "AchievementsPage", "SavesPage", "StoryPage"];




var Swipers = {};

const MainPageFiltersID = {
  "Available" : "Available-Stories", 
  "Unread": "Unread-Stories", 
  "Favorites": "Favorite-Stories", 
  "Hidden": "Hidden-Stories", 
  "All Stories": "All-Stories",
}

function init() {


  
  data.StoryObj = {};

  data.CurrentlyReading = "";


  initStories();

  initAchievements();

  

}
  



function HideIntroBannerUponScrollingAway() {
  window.addEventListener('scroll', HideIntroBanner);
}

function HideIntroBanner() {

  let loc = window.scrollY;

    let triggerHeight = document.getElementById("intro").offsetHeight-1;

    if (document.querySelector('.s-intro')) {
      let triggerHeight2 = document.querySelector('.s-intro').offsetHeight-1;

      if (loc > triggerHeight2) {
        document.querySelector('.s-intro').style.display = "none";
  
        window.removeEventListener('scroll', HideIntroBanner);
  
      }
    }

    if (loc > triggerHeight) {
      document.getElementById("intro").style.display = "none";

      if (hideLogoUponScroll) {
        
      document.getElementById("s-header__logo").style.display = "none";
      }

      window.removeEventListener('scroll', HideIntroBanner);

    }

 
}

function showIntroBanner() {
  document.getElementById("intro").style.display = "none";
  HideIntroBannerUponScrollingAway();

}


function saveCleanup() {
  for (let ach in data.AchievementObj) {
    
    ['dateStr','filename','hasVariants','isPatreon','legacy','postDescription','preDescription','rarity','requirement','variantEarned','variants'].forEach(
      name=>{

      if (data.AchievementObj[ach].hasOwnProperty(name)) {
        
        delete data.AchievementObj[ach][name]
      } 
    }) 

    
      
    if ((typeof data.AchievementObj[ach].date === "string")) data.AchievementObj[ach].date = new Date(data.AchievementObj[ach].date)

    
      if (!achievementNames.includes(ach)) {
        delete data.AchievementObj[ach]
        
      } 
    }
    AutoSave();
  storyNames.forEach( storyName => {
    const story = data.StoryObj[storyName]; 
    
    if (!story.hasOwnProperty('vars')) story.vars = {};
    if (story.hasOwnProperty('CurrentChapter')) delete story.CurrentChapter;
    if (story.hasOwnProperty('currentSectionID')) delete story.currentSectionID;
    if (!story.hasOwnProperty('currentChapter')) story.currentChapter = story.chapters[0];

    story.chapters.forEach(ch=> {
      if (ch.hasOwnProperty('CurrentSection')) {
        delete ch.CurrentSection;

      }
      if (!ch.hasOwnProperty('currentSectionID') || !ch.currentSectionID) {
        ch.currentSectionID = 'section1';

      if (!ch.hasOwnProperty('isSeen')) {
        ch.isSeen = false;
        if (ch.isRead) ch.isSeen = true;

      }

      if (!ch.hasOwnProperty('sections')) ch.sections = {};

        
    }
    updateChapterObj(ch);
    })
    updateStoryObj(story);
  })
}
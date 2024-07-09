const siteBody = document.querySelector('body');

const keyV1 = "liturgy97+gen93696";

const CryptoV1 = new SimpleCrypto(keyV1);

const wordsPerSecond = 4;

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

const gamePages = ["MainPage", "StoryHolder", "AchievementsPage", "SavesPage"];




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
  window.addEventListener('scroll', function () {

    let loc = window.scrollY;

    let triggerHeight = document.getElementById("intro").offsetHeight-1;


    if (loc > triggerHeight) {
      document.getElementById("intro").style.display = "none";

      if (hideLogoUponScroll) {
        
      document.getElementById("s-header__logo").style.display = "none";
      }
    }

});
}




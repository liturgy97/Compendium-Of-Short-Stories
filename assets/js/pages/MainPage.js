function loadStoryList() {

  document.getElementById("Showcase").innerHTML = `<div class="ShowcaseTop">
        <div id="ShowcaseTitle" class="Satoshi gray9 font-size-20 font-weight-500">Showcase</div>
        <div id="Showcasefirst">
            <div class="Showcaseimagecontainer">
                <div class="SmallRectangle1"></div>
                <div id="ShowcaseImageCover">
                </div>
            </div>

            <div class="Showcasetopshadow"></div>
            <div id="Showcasetitle2"></div>

        </div>
    </div>`;

    MainPageFilters.forEach(filter => {

      const curentFilterID = MainPageFiltersID[filter];

      const container = document.getElementById(curentFilterID);
      container.innerHTML = "";

    
      storyNames.forEach(storyName => {

        const story = data.StoryObj[storyName];

      
        const storydur = getStoryDuration(story);
      

        


        const button = document.createElement('div');



        const x = 'row marginless story-button story-button-' + story.num;
        button.className = x;
        const sty = getStoryButtonStyle(story);
        if(sty) {
          button.style.background = sty;
        }
      button.innerHTML = `
        <div class="marginless story-button-left">
            <div class="position-relative gray14 Satoshi font-weight-400 flex-centered padless transition03s" style="font-size: 1.6rem; width: 4.2rem; height: 4.2rem">
              <span class="StoryNum position-absolute-centered transition03s">${story.num}</span>
              <svg style="width:1.5rem; height: 1.6rem;" class="StoryPlayIcon position-absolute-centered transition03s" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="transition03s" d="M13.094 6.52922C14.3508 7.25486 14.3508 9.06895 13.094 9.79459L3.19636 15.509C1.93952 16.2346 0.368469 15.3276 0.368469 13.8763L0.36847 2.44751C0.36847 0.996234 1.93952 0.0891892 3.19636 0.814827L13.094 6.52922Z" fill="var(--color-2-light)"/>
              </svg></div>
            <div class="padless" style="height:5rem; width: 5rem;"><img class="story-button-img" src="assets/images/Stories/${getStoryFolder(story)}/base/cover1-1.jpg" /></div>
            <div class="story-button-name truncate-ellipse gray9 Satoshi font-weight-400 flex-column padless style="">
                <span class="gray9 font-weight-400 font-size-16" style="line-height: 1.6;">${story.name}</span>
                ${getStorySubtitle(story)? `<span class="truncate-ellipse gray14 font-weight-300 font-size-14" style="line-height: 1.6; ">${getStorySubtitle(story)}</span>` 
                  : ``}
                
            </div>
        </div>
  
        <div class="marginless story-button-right">
  
          <div class="story-button-duration gray14 Satoshi font-weight-300 flex-row padless font-size-14" style="justify-content: flex-star; width: 7rem;">${(storydur === 0) ? `NA` : `${Math.floor(storydur / 3600) > 0 ? Math.floor(storydur / 3600) + ':' + Math.floor((storydur % 3600) / 60).toString().padStart(2, '0') + ':' : Math.floor(storydur / 60) + ':'}${(storydur % 60).toString().padStart(2, '0')}`}</div>
          <div class="Storybuttons padless flex-centered" style="gap: 2rem;">
  
            <div class="BigIcon story-button-slot-1"></div>
            <div class="BigIcon story-button-slot-2"></div>
            <div class="BigIcon story-button-slot-3"></div>
              
          </div>
  
        </div>
        
        
          `;


        const storyButtonLeft = button.querySelector('.story-button-left');
        const newStoryNotif = document.createElement('div');  
        newStoryNotif.className = "newStoryIcon";
        newStoryNotif.innerHTML = "NEW";

        storyButtonLeft.appendChild(newStoryNotif);



  
  
        const actionButton = document.createElement('svg');

        const storyButtonSlot = button.querySelector('.story-button-slot-1')

        storyButtonSlot.appendChild(actionButton);
  

          actionButton.innerHTML = `
          <svg class="lockIcon LockIcon1" style="width: 2.1rem; height:2.5rem;" width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.2264 8.10059C4.2264 8.10059 3.07405 1 10.373 1C17.672 1 16.5197 8.10059 16.5197 8.10059" stroke="#898989" stroke-width="1.77515"/>
            <path d="M16.5861 8.54492H4.16003C2.68945 8.54492 1.49731 9.73706 1.49731 11.2076V20.5272C1.49731 21.9977 2.68945 23.1899 4.16003 23.1899H16.5861C18.0566 23.1899 19.2488 21.9977 19.2488 20.5272V11.2076C19.2488 9.73706 18.0566 8.54492 16.5861 8.54492Z" stroke="#898989" stroke-width="1.77515"/>
            <circle cx="10.373" cy="16.0885" r="2.66272" stroke="#898989" stroke-width="1.77515"/>
          </svg>
          <svg class="hiddenIcon StoryHideButton HiddenButtonActive" style="width: 2.2rem; height:2.1rem;" width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.76615 10.2055C1.76615 8.13479 2.44492 6.22415 3.59298 4.68185L17.3891 16.935C15.7293 18.505 13.4908 19.4663 11.027 19.4663C5.91235 19.4663 1.76615 15.3201 1.76615 10.2055ZM18.5029 15.6722L4.71636 3.42758C6.37089 1.88626 8.58852 0.944675 11.027 0.944675C16.1416 0.944675 20.2878 5.09088 20.2878 10.2055C20.2878 12.2508 19.6255 14.14 18.5029 15.6722Z" stroke="#898989" stroke-width="1.68378"/>
          </svg>
          <svg class="notLikedIcon LikeIcon transition03s" style="width:2.4rem; height: 2rem;" width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="transition03s" d="M14.0692 2.47858L12.2054 4.28453L10.3416 2.47858C8.38721 0.584907 5.25206 0.689463 3.4282 2.70914C1.65844 4.66891 1.41479 7.60432 3.01735 9.70303C3.21429 9.96093 3.40792 10.2079 3.5922 10.434C4.75864 11.865 7.30365 14.3639 8.57879 15.705C9.52088 16.6958 10.3677 17.5221 11.0057 18.124C11.6794 18.7596 12.7194 18.7457 13.3944 18.1115C14.5707 17.0061 16.3746 15.2844 17.6453 13.948C18.9205 12.6069 19.6522 11.865 20.8186 10.434C21.0029 10.2079 21.1965 9.96093 21.3934 9.70303C22.996 7.60432 22.7524 4.66891 20.9826 2.70914C19.1587 0.689463 16.0236 0.584906 14.0692 2.47858Z" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg class="likedIcon StoryLikeButton transition03s" style="width:2.4rem; height: 2rem;" width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="transition03s" d="M14.0692 2.56854L12.2054 4.37449L10.3415 2.56855C8.38718 0.674873 5.25203 0.779429 3.42817 2.7991C1.65841 4.75888 1.41476 7.69429 3.01732 9.79299C3.21426 10.0509 3.40789 10.2979 3.59217 10.524C4.75861 11.9549 7.30362 14.4539 8.57876 15.7949C9.52085 16.7857 10.3677 17.6121 11.0057 18.214C11.6794 18.8496 12.7193 18.8357 13.3943 18.2014C14.5707 17.0961 16.3746 15.3743 17.6453 14.0379C18.9204 12.6969 19.6521 11.9549 20.8186 10.524C21.0028 10.2979 21.1965 10.0509 21.3934 9.79299C22.996 7.69429 22.7523 4.75888 20.9826 2.7991C19.1587 0.779429 16.0236 0.674871 14.0692 2.56854Z" fill="var(--color-2-light)" stroke="var(--color-2-light)" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
         `;
  

        const lockIcon = actionButton.querySelector('.lockIcon');
  
        const hiddenIcon = actionButton.querySelector('.hiddenIcon');
  
        const notLikedIcon = actionButton.querySelector('.notLikedIcon');
  
        const likedIcon = actionButton.querySelector('.likedIcon');

        
        mainPageStoryButtons[story.name].newStoryIcon[filter] = newStoryNotif;
        mainPageStoryButtons[story.name].lockIcons[filter] = lockIcon;
        mainPageStoryButtons[story.name].hiddenIcons[filter] = hiddenIcon;
        mainPageStoryButtons[story.name].notLikedIcons[filter] = notLikedIcon;
        mainPageStoryButtons[story.name].likedIcons[filter] = likedIcon;
  
        

          
        button.addEventListener('click', () => {
            showStory(story.name);
        });

        container.appendChild(button);



        actionButton.addEventListener('click', function(event) {
    
          if (!story.isLocked && !story.isLiked && !story.isHidden) {

            event.stopPropagation();

            story.isLiked = true;
              
            updateStoryObj(story);

            filterMainPageStoryButtons("Favorites");

            refreshMainPageStoryButton(story.name)

          }
        
        })


      })

      filterMainPageStoryButtons(filter);

    })


    storyNames.forEach(storyname => {refreshMainPageStoryButton(storyname);})


  var story = data.StoryObj["Mr. Wolf"];

  if (data.CurrentlyReading) {

    story = data.StoryObj[data.CurrentlyReading];
    document.getElementById('ShowcaseTitle').innerHTML = "Continue Reading";
  } else {
    var entries = recommendedStories();
    if (entries.length == 0) {
      console.log(arrayDifference(storyNames, ["Hammer", "The Hanging Man"]))
      entries = arrayDifference(storyNames, ["Hammer", "The Hanging Man"]);
      console.log(arrayDifference(storyNames, ["Hammer", "The Hanging Man"]))
    }
    
    let randomIndex = Math.floor(Math.random() * entries.length);

    story = data.StoryObj[entries[randomIndex]];
  }

  document.getElementById("Showcasefirst").onclick = function() {
    showStory(story.name);
  }

  const container2 = document.getElementById('ShowcaseImageCover');


  const SmallImage = document.createElement('img');
  SmallImage.className = 'ShowcaseSmallImage';
  SmallImage.src = `assets/images/Stories/${getStoryFolder(story)}/base/cover1-1.jpg`;

  container2.appendChild(SmallImage);

  const container3 = document.getElementById('Showcasetitle2');
  container3.innerHTML = `${story.name}`;

  const container4 = document.getElementById('Showcase');






  const ShowcaseWideImage = document.createElement('img');

  ShowcaseWideImage.className = 'ShowcaseWideImage';
  ShowcaseWideImage.src = `assets/images/Stories/${getStoryFolder(story)}/base/cover3-2.jpg`;

  container4.appendChild(ShowcaseWideImage);

  const ShowcaseDescription = document.createElement('div');

  ShowcaseDescription.className = 'ShowcaseDescription';

  const maxLength = 189;

  var OverviewText= getStoryOverview(story);

  if (OverviewText.length > maxLength) {
    OverviewText = OverviewText.substring(0, maxLength-3) + '...';
    }

  ShowcaseDescription.innerHTML = OverviewText;

  container4.appendChild(ShowcaseDescription);

  if (getStoryGenre(story)) {
    const GenreContainer = document.createElement('div');
    GenreContainer.className = 'GenreContainer';

    getStoryGenre(story).forEach(genreName => {
    const GenreBox = document.createElement('div');
    GenreBox.className = 'GenreBox';

    const Genretext = document.createElement('div');
    Genretext.className = 'Genretext'

    Genretext.innerHTML = genreName;

    GenreBox.appendChild(Genretext);

    GenreContainer.appendChild(GenreBox);
  });

  container4.appendChild(GenreContainer);

  }



  

}

function filterMainPageStoryButtons(filter) {

  const filterID = MainPageFiltersID[filter];

  var StoriesToShow = storyNames;

  switch(filter) {
    case "Available":
      StoriesToShow = availableStories(); 
      break;
    case "Unread":
      StoriesToShow = availableUnreadStories(); 
      break;
    case "Favorites":
       StoriesToShow = favoriteStories(); 

      break;
    case "Hidden":
      StoriesToShow = hiddenStories(); 
      break;
    case "All Stories":
      StoriesToShow = storyNames;
      break;
  }

  var notifcontainer = document.getElementById(filterID).querySelector('.notif');

  if (!notifcontainer) {
    notifcontainer = document.createElement('div');
    notifcontainer.className = 'notif';
    document.getElementById(filterID).appendChild(notifcontainer);
      
  }
    notifcontainer.innerHTML = ``;

  if(!StoriesToShow.length) {
    notifcontainer.innerHTML = `
     No stories available.
    `;
  }
 

  storyNames.forEach(name => {
    const container = document.getElementById(filterID);
    const story = data.StoryObj[name];
    const x = '.story-button-'+ story.num;
    const storyButton = container.querySelector(x);
    if (!storyButton) {
      console.log(name, filter)
      return

    }
    if (StoriesToShow.includes(name)) {
      storyButton.style.display = "";
    } else {
      storyButton.style.display = "none";
    }
    
  });

  


  

}

function filterAllMainPageStoryButtons() {
  MainPageFilters.forEach(filter => {
    filterMainPageStoryButtons(filter);
  })
}





function refreshMainPageStoryButton(storyname) {

  const story = data.StoryObj[storyname];


  MainPageFilters.forEach(filter => {
  
  newStoryNotif =  mainPageStoryButtons[story.name].newStoryIcon[filter];
  lockIcon = mainPageStoryButtons[storyname].lockIcons[filter];
  hiddenIcon = mainPageStoryButtons[storyname].hiddenIcons[filter];
  notLikedIcon = mainPageStoryButtons[storyname].notLikedIcons[filter];
  likedIcon = mainPageStoryButtons[storyname].likedIcons[filter];

  newStoryNotif.style.display = "none";
  lockIcon.style.display = "none";
  hiddenIcon.style.display = "none";
  notLikedIcon.style.display = "none";
  likedIcon.style.display = "none";

  if(showStoryNewIcon(story)) {
    newStoryNotif.style.display = "";
  }

  if (story.isLocked) {
    lockIcon.style.display = "";
  } else if (story.isHidden) {
    hiddenIcon.style.display = "";
  } else {
    notLikedIcon.style.display = "";
    likedIcon.style.display = "";

    if (story.isLiked) {
      notLikedIcon.style.opacity = 0;
      likedIcon.style.opacity = 1;
    } else {
      likedIcon.style.opacity = 0;
      notLikedIcon.style.opacity = 1;
    }
  }


  })

  
}
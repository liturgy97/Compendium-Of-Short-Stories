function loadStory(storyName) {



    const StoryLeftSide = document.getElementById('StoryLeftSide');
    
    const story = data.StoryObj[storyName];

    if (!story) console.log("Story " + storyName + " was not found.");
  
    data.CurrentStory = story;

    const storydur = getStoryDuration(story);


   
    StoryLeftSide.innerHTML = `
      <div class="StoryInfo">
        <div class="StoryTitle1">${story.name}</div>
        <div class="Storysmalldetails flex-row" style="flex-wrap: wrap">
          <div class="StorySubtitle">Severity: ${getStorySeverity(story)}</div>
          <div class="Ellipse"></div>
          <div class="StorySubtitle">${story.chapters.length} chapter${(story.chapters.length > 1) ? 's' : ''} </div>
          <div class="Ellipse"></div>
          <div class="StorySubtitle">
          ${(storydur > 3599) ? `${Math.floor(storydur / 3600)} hr ${(storydur/60) % 60} min` : `${Math.floor(storydur / 60)} min ${storydur % 60} sec`}
          </div>
          ${getStorySubtitle(story)? 
            `<div class="Ellipse removable-ellipse-1" ></div>
            <div class="StorySubtitle story-sub-1">
              ${getStorySubtitle(story)}
            </div>`
            
            : ``}
        </div>
        <div class="Storyoverview">
          <div class="StoryOverviewText">${getStoryOverview(story)}</div>
        </div>
        <div class="Storypagebuttons">
          <div id="StoryPlayButton">
            <svg class="BigPlayButton" style= "width: 4.1rem; height: 4.1rem" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20.2054" cy="20.2054" r="20.2054" fill="var(--color-2-light)"/>
              <path d="M26.3283 18.8797C27.3487 19.4688 27.3487 20.9418 26.3283 21.5309L18.292 26.1707C17.2715 26.7598 15.996 26.0234 15.996 24.845L15.996 15.5656C15.996 14.3872 17.2715 13.6508 18.292 14.2399L26.3283 18.8797Z" fill="black"/>
            </svg>
  
          </div>
          
          <div id="StoryLikeButtonContainer" class="BigIcon2">
            <svg style="width: 2.3rem; height:2rem;" id="StoryLikeButtonHollow1" class="StoryLikeButton" width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.48 2.56781L11.6162 4.37376L9.75237 2.56781C7.798 0.67414 4.66286 0.778697 2.839 2.79837C1.06924 4.75815 0.825586 7.69356 2.42815 9.79226C2.62508 10.0502 2.81872 10.2972 3.003 10.5232C4.16944 11.9542 6.71445 14.4531 7.98959 15.7942C8.93168 16.785 9.77851 17.6113 10.4165 18.2132C11.0902 18.8488 12.1302 18.835 12.8052 18.2007C13.9815 17.0954 15.7854 15.3736 17.0561 14.0372C18.3313 12.6961 19.063 11.9542 20.2294 10.5232C20.4137 10.2972 20.6073 10.0502 20.8042 9.79226C22.4068 7.69356 22.1632 4.75815 20.3934 2.79837C18.5695 0.778697 15.4344 0.674139 13.48 2.56781Z" stroke="var(--color-gray-14)" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg style="width: 2.4rem; height:2rem;" id="StoryLikeButtonColored1" class="StoryLikeButton" width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.0692 2.56854L12.2054 4.37449L10.3415 2.56855C8.38718 0.674873 5.25203 0.779429 3.42817 2.7991C1.65841 4.75888 1.41476 7.69429 3.01732 9.79299C3.21426 10.0509 3.40789 10.2979 3.59217 10.524C4.75861 11.9549 7.30362 14.4539 8.57876 15.7949C9.52085 16.7857 10.3677 17.6121 11.0057 18.214C11.6794 18.8496 12.7193 18.8357 13.3943 18.2014C14.5707 17.0961 16.3746 15.3743 17.6453 14.0379C18.9204 12.6969 19.6521 11.9549 20.8186 10.524C21.0028 10.2979 21.1965 10.0509 21.3934 9.79299C22.996 7.69429 22.7523 4.75888 20.9826 2.7991C19.1587 0.779429 16.0236 0.674871 14.0692 2.56854Z" fill="var(--color-2-light)" stroke="var(--color-2-light)" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
            
            
          <div id="StorySkipButton" class="BigIcon2">
            <svg style="width: 2.2rem; height:2.1rem;" id="StoryHideSvg" class="StoryHideButton" width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.76615 10.2055C1.76615 8.13479 2.44492 6.22415 3.59298 4.68185L17.3891 16.935C15.7293 18.505 13.4908 19.4663 11.027 19.4663C5.91235 19.4663 1.76615 15.3201 1.76615 10.2055ZM18.5029 15.6722L4.71636 3.42758C6.37089 1.88626 8.58852 0.944675 11.027 0.944675C16.1416 0.944675 20.2878 5.09088 20.2878 10.2055C20.2878 12.2508 19.6255 14.14 18.5029 15.6722Z" stroke="var(--color-gray-14)" stroke-width="1.68378"/>
            </svg>
  
          </div>

          
          ${story.isRead && !story.isComplete? `<div class="BigIcon2">
            <svg style="width: 1.8rem; height:1.3rem;" class="StoryCheckIcon" width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.31351 6.31584L6.69349 11.6958L16.5568 1.83252" stroke="var(--color-gray-14)" stroke-width="2.02" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
  
          </div>`  : ``}
          ${story.isComplete? `<div class="BigIcon2">
            <svg style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 2.3rem; height: 2.3rem;" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11.227" cy="11.0811" r="11" fill="var(--color-2-light)"/>
              <path d="M6.97833 11.5811L9.97833 14.5811L15.4783 9.08105" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>` : ``}
        </div>
      </div>
      <div class="StoryChapters">
      
        <div class="Storychapterstabletop">
        
        
        
          <div class="Storychapterstabletopsub">
          
            <div class= "chapter-row-left-side">
              
                <div class="Hashsign1">#</div>
                <div class="Title1">Title</div>
        
            </div>

            <div class= "chapter-row-right-side">
              <div class="Duration1">Duration</div>

              <div class="BigIcon"></div>

              <div class="BigIcon removableBox1"></div>
              <div class="BigIcon removableBox2"></div>
              <div class="BigIcon removableBox3"></div>

            
            </div>
            
            
          </div>
          <div class="Straightline"></div>
        </div>
        <div id="ChapterList">
          
        </div>
      </div>`;
      
    var StoryRightSide = document.getElementById('StoryRightSide');
  
    StoryRightSide.innerHTML = `
      <img class="Chaptercover lg-12" src="assets/images/stories/${story.num}/base/cover1-1.jpg" />
      <div id="ChapterGenreBox">
        
      </div>
      <div id="ChapterChars">
        
      </div>
    `;

    if (story.isLocked || story.isHidden || getStorySubtitle(story) == "Coming Soon") {
      const tempcontainer = document.getElementById("StoryPlayButton");
      if (!tempcontainer.classList.contains("GreyedOut")) tempcontainer.classList.add("GreyedOut");

      if (getStorySubtitle(story) != "Coming Soon") document.getElementById("StoryLikeButtonContainer").style.display = "none";
    }

    if (story.isLocked || story.isRead) {
      document.getElementById("StorySkipButton").style.display = "none";
    }


    const StoryLikeButton = document.getElementById("StoryLikeButtonContainer");

    function setButtons() {

      if (story.isLiked) {
        document.getElementById("StorySkipButton").style.opacity = 0;
        document.getElementById("StoryLikeButtonColored1").style.opacity = 1;
        document.getElementById("StoryLikeButtonHollow1").style.opacity = 0;
        
      } else {
        
        document.getElementById("StorySkipButton").style.opacity = 1;
        document.getElementById("StoryLikeButtonColored1").style.opacity = 0;
        document.getElementById("StoryLikeButtonHollow1").style.opacity = 1;
      }
    };

    setButtons();

    if (StoryLikeButton) {

      StoryLikeButton.addEventListener('click', () => {
        if (story.isLiked) {
          story.isLiked = false;
          updateStoryObj(story);
        } else {
          story.isLiked = true;
          updateStoryObj(story);
        }

        refreshMainPageStoryButton(story.name);
        filterAllMainPageStoryButtons();

        setButtons();
      });

    }

    const StoryHideButton = document.getElementById("StorySkipButton");

    if (StoryHideButton) {
      if (story.isHidden) document.getElementById("StoryHideSvg").classList.add("HiddenButtonActive");

      StoryHideButton.addEventListener('click', () => {
        if (story.isHidden) {
          story.isHidden = false;
          updateStoryObj(story);
          document.getElementById("StoryHideSvg").classList.remove("HiddenButtonActive");
          showStory(story.name);
          
         filterAllMainPageStoryButtons();
        } else {
          story.isHidden = true;
          updateStoryObj(story);
          
          filterAllMainPageStoryButtons();
          switchToPage("MainPage");
        }
        refreshMainPageStoryButton(story.name);
    });
  } 

    
  
  
    const ChapterContainer = document.getElementById('ChapterList');
  
    for (let i = 0; i < story.chapters.length; i++) {
      const chapter = story.chapters[i];
      const chdur = getChapterDuration(chapter);
      const button = document.createElement('div');
      button.className = 'Chapter';
      button.innerHTML = `
            <div class="chapter-row-left-side">
              <div class="Chapternum">${chapter.num}</div>
              <div class="Chaptername">${chapter.name}</div>
            
            </div>

            <div class="chapter-row-right-side">
                <div class="ChapterDuration">
              ${(chdur === 0) ? `NA` : `${Math.floor(chdur / 3600) > 0 ? Math.floor(chdur / 3600) + ':' + Math.floor((chdur % 3600) / 60).toString().padStart(2, '0') + ':' : Math.floor(chdur / 60) + ':'}${(chdur % 60).toString().padStart(2, '0')}`}
              </div>
              <div class="BigIcon">
              ${(!chapter.isUnlocked) ?
              `
                <svg class="LockIcon" style="width: 2rem; height: 2.5rem; " width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.80477 8.5979C3.80477 8.5979 2.65242 1.49731 9.95141 1.49731C17.2504 1.49731 16.0981 8.5979 16.0981 8.5979" stroke="var(--color-gray-14)" stroke-width="1.77515"/>
                  <path d="M16.1644 9.04175H3.7384C2.26782 9.04175 1.07568 10.2339 1.07568 11.7045V21.024C1.07568 22.4946 2.26782 23.6867 3.7384 23.6867H16.1644C17.635 23.6867 18.8271 22.4946 18.8271 21.024V11.7045C18.8271 10.2339 17.635 9.04175 16.1644 9.04175Z" stroke="var(--color-gray-14)" stroke-width="1.77515"/>
                  <circle cx="9.95142" cy="16.5861" r="2.66272" stroke="var(--color-gray-14)" stroke-width="1.77515"/>
                </svg>
              ` : ``}
              ${(chapter.isRead && !chapter.isComplete) ?
              `<div class="BigIcon">
                <svg class="ReadIcon" width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.49188 5.72673L6.87187 11.1067L16.7352 1.24341" stroke="var(--color-gray-14)" stroke-width="2.02" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
    
              ` : ``}
              ${chapter.isComplete ?
              `
                <svg style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 2rem; height: 2rem;" class="CompleteIcon" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11.4054" cy="11.4919" r="11" fill="var(--color-2-light)"/>
                  <path d="M7.15674 11.9919L10.1567 14.9919L15.6567 9.49194" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              ` : `` }

              </div>
    
              
                <div class="BigIcon removableBox1"></div>
              <div class="BigIcon removableBox2"></div>
              <div class="BigIcon removableBox3"></div>
              

            </div>
            
            
        `;
        ChapterContainer.appendChild(button);
    };

    if (getStoryGenre(story)) {
      const GenreContainer = document.getElementById('ChapterGenreBox');
      if (!GenreContainer) {
        console.log("Div not found")
      }
      for (let i = 0; i < getStoryGenre(story).length; i++) {
    
        const genrelittlebox = document.createElement('div');
        genrelittlebox.className = 'ChapterGenre';
    
        genrelittlebox.innerHTML = `
        <div class="ChapterGenreText">${getStoryGenre(story)[i]}</div>
        `;
    
        GenreContainer.appendChild(genrelittlebox);
    
      };
    }

    if (getStoryCharacters(story)) {
      const CharContainer = document.getElementById('ChapterChars');
      for (let i = 0; i < getStoryCharacters(story).length; i++) {
    
        const charbox = document.createElement('div');
        charbox.className = 'Character';
    
        charbox.innerHTML = `
              <img class="CharacterImg" src="assets/images/stories/${story.num}/base/${getStoryCharacters(story)[i]}.jpg" />
              <div class="CharacterName">${getStoryCharacters(story)[i]}</div>
        `;
    
        CharContainer.appendChild(charbox);
    
      };
    }
  
    
    
  
    
  
    
    if (!story.isLocked) {
      button= document.getElementById('StoryPlayButton');
  

  
  
      
      if (!button.classList.contains("GreyedOut")) {
        
        button.addEventListener('click', () => {
  
      openStory(story);
      });}
      
  
    }
  
  }

// End Of loadStory

function showStory(storyName) {
  const story = data.StoryObj[storyName];
  if (! story.isSeen) {
    story.isSeen = true;
    updateStoryObj(story)
  }


  loadStory(storyName);
  switchToPage("StoryHolder");
  refreshMainPageStoryButton(storyName);

}


function PlayStory(storyName) {
  data.CurrentlyReading = storyName;
  story= data.StoryObj[storyName];
  story.inProgress= true;
  loadAndExecuteScript(`assets/library/${story.num}/${story.currentPassage}.js`);

}
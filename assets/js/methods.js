function updateDocumentTitle(newTitle) {
    let titleElement = document.querySelector('head > title');
    
    if (!titleElement) {
        titleElement = document.createElement('title');
        document.head.appendChild(titleElement);
    }
    titleElement.textContent = newTitle;
}

function arrayDifference(arr1, arr2) {
    return arr1.filter(element => !arr2.includes(element));
}

function arrayIntersect(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
}

function arrayUnion(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

function loadScript(url, callback) {


    let script = document.createElement('script');
    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
}

async function assignJsonToString(filePath) {
    try {
        // Fetch the JSON file from the given file path
        const response = await fetch(filePath);
        
        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        
        // Read the response as text
        const jsonText = await response.text();
        
        // Assign the JSON text to a string variable
        const jsonString = jsonText;
        
        // Return the JSON string
        return jsonString;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

async function assignHtmlToString(filePath) {
    try {

        const response = await fetch(filePath);
        
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        
        const htmlText = await response.text();
        
        const htmlString = htmlText;
        
        // Return the html string
        return htmlString;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Example usage
//assignJsonToString('path/to/your/file.json').then(jsonString => {
    // Do something with the jsonString
//});

function getTextBeforeSymbol(inputString, symbol) {
    const symbolIndex = inputString.indexOf(symbol);
    
    if (symbolIndex !== -1) {
        return inputString.substring(0, symbolIndex);
    } else {
        return inputString;
    }
}


// loadScript is for lazy loading. Here's an example usage
//loadScript('assets/code/js/largeScript.js', function() {

//});

function isScriptLoaded(script) {

    const scriptUrl = script.src;

    const headScripts = document.head.getElementsByTagName('script');

    for (let i = 0; i < headScripts.length; i++) {
    if (headScripts[i].src === scriptUrl) {
        return true;
    }
    }

    return false;

}

function isScriptURLLoaded(scriptUrl) {

    const headScripts = document.head.getElementsByTagName('script');

    for (let i = 0; i < headScripts.length; i++) {
    if (headScripts[i].src === scriptUrl) {
        return true;
    }
    }

    return false;

}

function returnLoadedScript(scriptUrl) {

    const headScripts = document.head.getElementsByTagName('script');

    for (let i = 0; i < headScripts.length; i++) {
    if (headScripts[i].src === scriptUrl) {
        return headScripts[i];
    }
    }

    return null;

}

function removeLoadedScriptURL(scriptUrl) {
    const script = returnLoadedScript(scriptUrl);
    if (script) {
        document.head.removeChild(script);
    }

    loadedScripts = arrayDifference(loadedScripts, [scriptUrl]);

}

function loadAndExecuteScript(scriptUrl) {
        removeLoadedScriptURL(scriptUrl)

        const script = document.createElement('script');
        script.src = scriptUrl;
        script.onload = () => {
            console.log(`${scriptUrl} loaded and executed.`);
        };
        script.onerror = () => {
            console.error(`Failed to load script ${scriptUrl}.`);
        };
        document.head.appendChild(script);

        loadedScripts.push(scriptUrl);


}



function clearLoadedScripts() {
    loadedScripts.forEach(scriptUrl=> {
        removeLoadedScriptURL(scriptUrl);
    })
}


function AutoLoad() {
    loadSave(0);
}

function ScrollToTop(x) {
    if (!x) {
        window.scrollTo(0, 0);
    }

    else {
        
    document.getElementById(x).scrollTo(0,0);
    }
    
}


function InsertWideImage(SomeContainer, jpgFileName) {
    var wideImage = document.createElement('img');
    wideImage.style.width = "100%";
    wideImage.style.height = "auto";
    wideImage.src = data.baseImagesFolder + jpgFileName + ".jpg"

    SomeContainer.appendChild(wideImage);
}

const MonthStr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function getDateStr(dateObj) {

    var currentDate = dateObj;

    if ((typeof currentDate === "string")) currentDate = new Date(currentDate)

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = currentDate.getDate();

    return day + " " + MonthStr[month] + ", " + year;
}

function getTimeStr(dateObj) {

const now = dateObj;

let hours = now.getHours();
let minutes = now.getMinutes();



if (hours < 10) hours = '0' + hours;
if (minutes < 10) minutes = minutes;

const ampm = hours >= 12 ? 'PM' : 'AM';

hours = hours % 12;
hours = hours ? hours : 12;

hours = hours < 10 ? '0' + hours : hours;
minutes = minutes < 10 ? '0' + minutes : minutes;


const formattedTime = `${hours}:${minutes} ${ampm}`;

return formattedTime;



}

function earnAchievement(name) {
    if (name in data.AchievementObj) {
        const obj = data.AchievementObj[name]; 
        if (getAchievementVariant(name) && isAchievementEarned(getAchievementVariant(name))) return;
        if (!obj.isEarned) {
            obj.isEarned = true;
            obj.isHidden = false;
            obj.date = new Date();

            updateAchievementObj(name);

            loadAchievementsPage();

            const element= document.getElementById("AchievementArea");

            element.zIndex = 1000
            
            if (element && element.classList.contains("show")) {
                setTimeout(displayAnimatedBox(name), 4000); 
              } else {
                displayAnimatedBox(name);
              }
            
            
        }
    }
}


function displayAnimatedBox(name) {
    const ach = data.AchievementObj[name];
    const achOrigin = achievements[name]
    var x = document.getElementById("AchievementArea")
    console.log(name, ach)

    x.innerHTML = `
    <img id="AchievementImg" src="assets/images/achievements/${ach.num}-${achOrigin.filename}/ts.png"><div id="AchievementText">${name}</div>
    `;

    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3900);


}



function AutoSave() {
    data.date = new Date();

    data.dateStr = getDateStr(data.date);
    data.timeStr = getTimeStr(data.date);

    data.TotalNumOfStories = storyNames.length;

    
    data.StoriesCompletedNum = completeStories().length;

    Save(0);
}

function Save(num) {
    localStorage.setItem("data" + num, JSON.stringify(data));

}

function loadSave(num) {

    data = JSON.parse(localStorage.getItem("data"+num));
}

function removeSave(i) {
    localStorage.removeItem("data" + i);

}

function removeAllSaves() {
    for (let i=0; i < totalSavesCount; i++) {
        localStorage.removeItem("data" + i);
    }
    

}

function RequestToRemoveSave(i) {

   var x = document.getElementById("SaveButtonsSection"+i);

   x.innerHTML = `<div style="color= var(--color-gray-14);">Are you sure you want to delete this save?</div> 
   <a href="#" class="white" onclick="UserRemoveSave(${i})">Yes</a>
   
   <a href="#" class="white" onclick="ShowSaves()">No</a>`;


}

function UserRemoveSave(i) {

    removeSave(i);
    loadSavesPage();
 
 
 }

function getElementByIDWithinDiv(parent, childId) {

    return parent.querySelector(`#${childId}`);

}


function switchToPageSlow(id2) {
    const id1 = currentPage;
    currentPage = id2;
    const container1 = document.getElementById(id1);
    const container2 = document.getElementById(id2);
    container1.style.display = "";
    container2.style.display = "";
    

    container1.style.opacity = 0;
    container2.style.opacity = 1;

    container1.style.zIndex = 0;
    container2.style.zIndex = 5;

    moveToID("MainSection");

    setTimeout(() => {
        const pagesToHide = arrayDifference(gamePages, [currentPage]);
        
        
        if (container2.classList.contains("position-absolute-horizontally-centered")) {
            container2.classList.remove("position-absolute-horizontally-centered")
        }

        if (!container2.classList.contains("position-relative")) {
            container2.classList.add("position-relative")
        }

        pagesToHide.forEach(i => {
            const element = document.getElementById(i);

            element.style.display = "none";
            if (!element.classList.contains("position-absolute-horizontally-centered")) {
                element.classList.add("position-absolute-horizontally-centered")
            }

            if (element.classList.contains("position-relative")) {
                element.classList.remove("position-relative")
            }
        })

        if (version == "24.07a" && data.StoryObj["Elf"].isComplete) {
            earnAchievement("Founder");
        }
          

    }, 1200);

}

function switchToPage(id2) {
    const id1 = currentPage;
    currentPage = id2;
    const container1 = document.getElementById(id1);
    const container2 = document.getElementById(id2);
    container1.style.display = "";
    container2.style.display = "";
    
    document.documentElement.style.setProperty('--story-background', 'transparent');

    container1.style.opacity = 0;
    

    container1.style.zIndex = 0;
    container2.style.zIndex = 5;

    if (id2 == "MainPage") filterAllMainPageStoryButtons();

    if (id2 == "StoryPage")  {
        moveToIDInstantly("top");
    } else {
        moveToIDInstantly("MainSection");
    }

    

    const pagesToHide = arrayDifference(gamePages, [currentPage]);
        
        
        if (container2.classList.contains("position-absolute-horizontally-centered")) {
            container2.classList.remove("position-absolute-horizontally-centered")
        }

        if (!container2.classList.contains("position-relative")) {
            container2.classList.add("position-relative")
        }

        pagesToHide.forEach(i => {
            const element = document.getElementById(i);

            element.style.display = "none";
            if (!element.classList.contains("position-absolute-horizontally-centered")) {
                element.classList.add("position-absolute-horizontally-centered")
            }

            if (element.classList.contains("position-relative")) {
                element.classList.remove("position-relative")
            }
        })

    setTimeout(() => {
        container2.style.opacity = 1;
        
    }, 100);

}



function ObjectToEncryptedJSON(obj) {
    return CryptoV1.encrypt(JSON.stringify(obj));
}


function encryptedJSONToObject(encryptedJson) {
    return CryptoV1.decrypt(encryptedJson);
}


function copyToClipboard(copyText) {
    try {
        navigator.clipboard.writeText(copyText)
            .then(function() {
                temp = true;
            })
            .catch(function(err) {
                console.error('Failed to copy: ', err);
            });
    } catch (err) {
        console.error('Error: ', err);
    }
}


function showTempArea(oldID, newID) {
    document.getElementById(oldID).style.opacity = 0;
    document.getElementById(oldID).style.zIndex = -99;
    document.getElementById(newID).style.opacity = 1;
    document.getElementById(newID).style.zIndex = 5;
  }

  function updateChapterObj(chapter=currentChapter) {
    const story = data.StoryObj[chapter.storyName];
    if (story.currentChapter.name == chapter.name) story.currentChapter = chapter;
    story.chapters[chapter.num-1] = chapter;
    updateStoryObj(story);
}


function updateStoryObj(story=currentStory) {
    data.StoryObj[story.name] = story;
    AutoSave(data);
}

function updateAchievementObj(ach) {
    data.AchievementObj[ach.name] = ach;
    AutoSave(data);
}

const easeFunctions = {
    easeInQuad: function (t, b, c, d) {
        t /= d;
        return c * t * t + b;
    },
    easeOutQuad: function (t, b, c, d) {
        t /= d;
        return -c * t* (t - 2) + b;
    },
    easeInOutQuad: function (t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    },
    easeInOutCubic: function (t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
    }
}


const moveTo = new MoveTo({
    tolerance: 0,
    duration: 1200,
    easing: 'easeInOutCubic',
    container: window,
    callback: function (target) {
        if (siteBody.classList.contains('menu-is-open')) {
            siteBody.classList.remove('menu-is-open');
        }
    }
}, easeFunctions);

const moveToInstant = new MoveTo({
    tolerance: 0,
    duration: 0,
    easing: 'easeInOutCubic',
    container: window,
    callback: function (target) {
        if (siteBody.classList.contains('menu-is-open')) {
            siteBody.classList.remove('menu-is-open');
        }
    }
}, easeFunctions);


const ssMoveTo = function() {
    
    const triggers = document.querySelectorAll('.smoothscroll');

    triggers.forEach(function(trigger) {
        moveTo.registerTrigger(trigger);
    });

}; // end ssMoveTo


const moveToID = function(id) {

    moveTo.move(document.getElementById(id));
};

const moveToIDInstantly = function(id) {

    moveToInstant.move(document.getElementById(id));
};




const ssSwiper = function() {

    const storyListSlider = new Swiper('#storyList', {

        slidesPerView: 1,
        effect: 'slide',
        // allowTouchMove: false,
        // simulateTouch: false,
        pagination: {
            el: '#filtersBar',
            clickable: true,
            renderBullet: function(index, ClassName) {
                return `<div class="${ClassName} blank-pagination fill-height flex-centered font-inherit transitionall03s">${MainPageFilters[index]}</div>`;
            }
        }

    
    });

    






    Swipers["storyList"] = storyListSlider;


}; // end ssSwiper


function disableScroll() {
    gamePages.forEach(element => {
        const container = document.getElementById(element);
        container.style.overflow = 'hidden';
        container.style.maxHeight = '100%';
    })
    document.body.style.overflow = 'hidden';
    document.body.style.maxHeight = '100%';
}


function enableScroll() {
    gamePages.forEach(element => {
        const container = document.getElementById(element);
        container.style.overflow = '';
        container.style.maxHeight = '';
    })
    document.body.style.overflow = '';
    document.body.style.maxHeight = '';
}



// Div observer

// const targetDiv = document.getElementById('Hidden-Stories'); 

// const observer = new MutationObserver(function(mutationsList, observer) {
    
//     mutationsList.forEach(function(mutation) {
//         if (mutation.type === 'childList' && mutation.removedNodes.length > 0) {
            
//             yourFunction(); 
            
//         }
//     });
// });


// const config = { childList: true };



// observer.observe(targetDiv, config);



// function yourFunction() {
//     console.log('A child has been removed from the target div!');
  
    
// }

// function handleScreenWidthChange(e) {
//     if (e.matches) {
//         console.log('Screen width is 600px or less');
//     } else {
//         // The screen width does not match the media query
//         console.log('Screen width is greater than 600px');
//         // Add your function logic here if needed
//     }
// }

// // Create a MediaQueryList object
// const mediaQuery = window.matchMedia('(max-width: 600px)');

// // Add a listener for changes in the media query's evaluation
// mediaQuery.addListener(handleScreenWidthChange);

// // Initial check
// handleScreenWidthChange(mediaQuery);


function switchToNewHeader() {
    document.querySelector(".s-header").className = "s-header-2";
    document.querySelector(".s-header__logo").style.position = "initial";
    document.querySelector(".s-header__logo").style.display = "";
    document.querySelector(".s-header__menu-toggle").className = "s-header__menu-toggle-2";
    document.getElementById("MainSection").style.paddingTop = "5rem";

    hideLogoUponScroll = false;

    currentHeaderMode = "New";
}

function switchToOldHeader() {

    document.querySelector(".s-header").className = "s-header";
    document.querySelector(".s-header__logo").style.position = "fixed";
    document.querySelector(".s-header__logo").style.display = "";
    document.querySelector(".s-header__menu-toggle").className = "s-header__menu-toggle";
    document.getElementById("MainSection").style.paddingTop = "0";

    hideLogoUponScroll = false;

    currentHeaderMode = "Old";

}





function hideScrollbar() {
    const style = document.getElementById('scrollbarHeadStyleElement');
    style.innerHTML = `
      ::-webkit-scrollbar {
        display: none;
      }
        ::-webkit-scrollbar {
            display: none;
            }

        html, div, section {
            -ms-overflow-style: none; 
            scrollbar-width: none;  
            }
    `;
}

function showScrollbar() {
    const style = document.getElementById('scrollbarHeadStyleElement');
    style.innerHTML = ``;
}

function removeChild(containerID, childID) {
    const container = document.getElementById(containerID);
    const child = document.getElementById(childID);
    if (container && child && container.contains(child)) container.removeChild(child);
}




function getContainer(id) {
    currentContainer = document.getElementById(id)
    return currentContainer;
}




function fadeTransition(container=document.getElementById('MainSection'), timeout=300, func =()=> {}) {
    
    container.style.opacity = 0;
    func();
    setTimeout(()=> {container.style.opacity = 1;}, timeout)
}


function resetScrollbar() {
    setRootVar('--scrollbar-track-color', '#1E1E1E');
    showScrollbar();
}

function showScrollbar() {
    setRootVar('--scrollbar-opacity', 1);
}
function hideScrollbar() {
    setRootVar('--scrollbar-opacity', 0);
}

function changeScrollbarTrack(val) {
    setRootVar('--scrollbar-track-color', val);
    console.log(getRootVar('--scrollbar-track-color'))
}

var scrollTimer = null;

function getViewPortHeight() {
    return window.innerHeight;
}

function getDocumentHeight() {
    return document.documentElement.scrollHeight;
}

function getScrollProgress() {
    window.addEventListener('scroll', function() {
    var viewportHeight = getViewPortHeight(),
        documentHeight = getDocumentHeight(),
        scrollbarHeight = viewportHeight / documentHeight * viewportHeight,
        scrollTop = window.scrollY,
        progress;

    if (documentHeight > viewportHeight) {
        progress = scrollTop / (documentHeight - viewportHeight)
    } else {
        progress = 1;
    }
    
    progressPercentage = Math.round(progress * 100);

});

}


// var scrollTimer = null;

// $(window).scroll(function() {
//    var viewportHeight = $(this).height(),
//        scrollbarHeight = viewportHeight / $(document).height() * viewportHeight,
//        progress = $(this).scrollTop() / ($(document).height() - viewportHeight),
//        distance = progress * (viewportHeight - scrollbarHeight) + scrollbarHeight / 2 - $('#scrollbubble').height() / 2
//        ;
 
//     $('#scrollbubble')
//         .css('top', distance)
//         .text('Progress (' + Math.round(progress * 100) + '%)')
//         .fadeIn(100)  
//     ;

//     // Fade out the annotation after 1 second of no scrolling.
//     if (scrollTimer !== null) {
//         clearTimeout(scrollTimer);
//     }
//     scrollTimer = setTimeout(function() {
//         $('#scrollbubble').fadeOut();
//     }, 500);
// });

function getDirectChildren(container, selector) {
    return container.querySelectorAll(':scope > ' + selector)
}

function setRootVar(varname, value) {
    document.documentElement.style.setProperty(varname, value);
}

function getRootVar(varname) {
    const rootStyles = getComputedStyle(document.documentElement);
    return rootStyles.getPropertyValue(varname);
}

function getTriggerTop(container, triggerRatio=0) {
    return (container.getBoundingClientRect().top + window.scrollY + (getViewPortHeight() * triggerRatio)) - getViewPortHeight();
}

function getContainerTopPercentage(container) {
    return Math.round((container.getBoundingClientRect().top + getViewPortHeight())/getDocumentHeight() * 100) 
}

function getBlockHeight(container) {
    return container.offsetHeight;
}

function getBlockSpace(container, triggerRatio=0) {
    return getTriggerTop(container, triggerRatio) + getBlockHeight(container);
}

function inView(container, triggerRatio=0) {
    return (getTriggerTop(container, triggerRatio) < window.scrollY && window.scrollY <= getBlockSpace(container, triggerRatio));
}





function displayCompletionCheck() {
    
}

function hideNav() {
    document.querySelector('.s-header__menu-toggle').style.display="none";
}

function showNav() {
    document.querySelector('.s-header__menu-toggle').style.display="";
}






function numToLetter(num) {
    return String.fromCharCode(97 + num);
}


function hideNode(node) {
    node.style.display= "none";
}

function hideID(nodeID) {
    document.getElementById(nodeID).style.display= "none";
}

function clearNode(node) {
    node.innerHTML= "";
}

function showNode(node) {
    node.style.display = "";
}

function invisibleNode(node) {
    node.style.opacity = 0;
}

function visibleNode(node) {
    node.style.opacity = 1;
}

function isFunction(variable) {
    return typeof variable === 'function';
}


// function runOnAllChapters(func) {
//     if (isFunction(func)) {
//         stories.forEach(storyName => {
//             if (storyN)
//         })
//     }
// }

function playAudio(audio=currentAudioNode) {
    audio.play();
    // audioPlaying=true;
  }

  function pauseAudio(audio=currentAudioNode) {
    audio.pause();
    // audioPlaying=false;
  }


  function playAudioPersistent(audio=currentAudio) {
    audio.play();
    audioPlaying=true;
  }

  function pauseAudioPersistent(audio=currentAudio) {
    audio.pause();
    audioPlaying=false;
  }




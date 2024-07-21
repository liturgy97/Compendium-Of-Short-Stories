function readStories() {
    var arr = [];
    storyNames.forEach(storyName => {
        const story = data.StoryObj[storyName];
        if (story.isRead) arr.push(storyName);
    })
    return arr;
}

function unreadStories() {
    return arrayDifference(storyNames, readStories());
}

function lockedStories() {
    var arr = [];
    storyNames.forEach(storyName => {
        const story = data.StoryObj[storyName];
        if (story.isLocked || getStorySubtitle(story) == "Coming Soon") arr.push(storyName);
    })
    return arr;
}

function PatreonStories() {
    var arr = [];
    storyNames.forEach(storyName => {
        const story = data.StoryObj[storyName];
        if (story.isPatreon) arr.push(storyName);
    })
    return arr;
}

function hiddenStories() {
    var arr = [];
    storyNames.forEach(storyName => {
        const story = data.StoryObj[storyName];
        if (story.isHidden) arr.push(storyName);
    })
    return arr;
}

function favoriteStories() {
    var arr = [];
    storyNames.forEach(storyName => {
        const story = data.StoryObj[storyName];
        if (story.isLiked) arr.push(storyName);
    })
    return arr;
}


function unhiddenStories() {
    return arrayDifference(storyNames, hiddenStories());
}


function availableStories() {
    return arrayDifference(unhiddenStories(), lockedStories());
}

function availableUnreadStories() {
    return arrayDifference(arrayDifference(unreadStories(), hiddenStories()), lockedStories());
}

function completeStories() {
    var arr = [];
    storyNames.forEach(storyName => {
        const story = data.StoryObj[storyName];
        if (story.isComplete) arr.push(storyName);
    })
    return arr;
}

function incompleteStories() {
    return arrayDifference(storyNames, completeStories());
}

function recommendedStories() {
    var arr = arrayDifference(availableUnreadStories(), ["Elf", "Hammer", "The Hanging Man"]);
    if (arr) return arr;
    return arrayDifference(storyNames, ["Hammer", "The Hanging Man"]);
}




function visibleAchievements() {
    var arr= [];
    achievementNames.forEach(ach=> {
        if (!data.AchievementObj[ach].isHidden) arr.push(ach)
    })

    return arr;
}


function wordCountToDuration(wordcount) {
    return Math.floor(wordcount / wordsPerSecond) ;
}

function getChapterOrigin(datach) {
    var ch = null;
    if (!stories[datach.storyName]) console.log(datach)
    const chaptersList = stories[datach.storyName].chapters
    for(let i=0; i < chaptersList.length; i++) {
      if (datach.num == chaptersList[i].num) ch = chaptersList[i];
    }
    return ch
}

function getChapterDuration(datach) {
    
    return wordCountToDuration(getChapterOrigin(datach).wordCount)
  }


function getStoryDuration(datastory) {

    var length = 0;
    console.log()
    const chapters = datastory.chapters;
    
    chapters.forEach(ch => {
        length += getChapterDuration(ch);
    })

    return length;
}

function getStoryButtonStyle(datastory) {
    const origin = stories[datastory.name];
    var sty = "";
    if (origin.hasOwnProperty('buttonStyle')) sty = origin.buttonStyle;
    return sty;
}

function getStoryTitle(datastory) {
    return datastory.name.replace(/'/g, '&rsquo;');
}

function getStorySubtitle(datastory) {
    const origin = stories[datastory.name];
    var sub = "";
    if (origin.hasOwnProperty('subtitle')) sub = origin.subtitle;
    return sub;
}

function getStoryOverview(datastory) {
    const origin = stories[datastory.name];
    var ovw = origin.overview;    
    if (origin.hasOwnProperty('postOverview')) ovw = origin.postOverview;
    return ovw;
}

function getStoryCharacters(datastory) {
    const origin = stories[datastory.name];
    var chars = origin.characters;    
    if (origin.hasOwnProperty('postCharacters')) chars = origin.postCharacters;
    return chars;
}

function getStoryGenre(datastory) {
    const origin = stories[datastory.name];
    var genre = origin.genre;    
    if (origin.hasOwnProperty('postGenre')) genre = origin.postGenre;
    return genre;
}

function showStoryNewIcon(datastory) {
    var show = false;   
    var sub = getStorySubtitle(datastory);
    if (!datastory.isSeen && sub != "Coming Soon" ) {
        show = true;
    }
    

    return show;
}

function getStorySeverity(datastory) {
    const origin = stories[datastory.name];
    var sev = "D";    
    if (origin.hasOwnProperty('severity')) sev = origin.severity;
    return sev;
}

function getStoryBackground(datastory) {
    if (!datastory) console.log(datastory)
    const origin = stories[datastory.name];
    var bcg = "";
    if (origin.hasOwnProperty('background')) bcg = origin.background;
    return bcg;
}

function getStoryColor(datastory) {
    const origin = stories[datastory.name];
    var clr = "";
    if (origin.hasOwnProperty('color')) clr = origin.color;
    return clr;
}

function storyImage(src, fig="", cl="", sty="") {
    var img;
    var classtext = ``;
    src = `${baseImagesFolder}/${src}.jpg`;
    if (cl) classtext = `class="${cl}"`;
    var styletext = ``;
    if (sty) styletext = `style="${sty}"`;
    img = `<img src="${src}" ${classtext} ${styletext} data-animate-block>`;
    if (fig) {
        img = `
    <figure>
        ${img}

        <figcaption>
            ${fig}
        </figcaption>
    </figure>`;
    } 
    return img;
}


function sceneryHeader(scenery) {
    return `<div class="column lg-3 md-12"><h3>${changeScenery(scenery)}</h3></div>`;
}

function contentClass() {
    return 'column lg-8 md-12 margin-top-lg-70 margin-top-md-0';
}



function storyRow(headerText=null, innerText) {
    const row= document.createElement('div')
    row.className = 'row';
    if (headerText) {
        if (headerText == "Empty") headerText = "";
        row.innerHTML = `    
    ${sceneryHeader(headerText)}
    <div class="rowContent ${contentClass()}">
        ${innerText}
    </div>`;
    } else {
        row.innerHTML = innerText;
    }
    return row;
    
}

function prepareStory() {

    const container = getContainer('story-content');
    if (!currentChapter.hasOwnProperty('links')) {currentChapter.links = {}; updateChapterObj();}
    currentChapter.currentChoiceTree = 0;
    updateChapterObj();
    fadeTransition(container);
    container.innerHTML = '';

}

function menu(container, choiceList, func) {
    const div = document.createElement('div')
    container.appendChild(div);
    const links = currentChapter.links;
    currentChapter.currentChoiceTree += 1;
    for (let i =0; i < choiceList.length; i++) {
        const linkText = choiceList[i][0];
        const linkActions = choiceList[i][1];
        const linkAfterText = choiceList[i][2];
        const choiceID = currentChapter.currentChoiceTree + "" + numToLetter(i);
        if(!links[choiceID]) links[choiceID] = new Link(choiceID, linkText);
        const p = document.createElement('p');
        const a = document.createElement('a');
        a.innerHTML = linkText;
        p.appendChild(a);
        if (linkActions == 'disable') {p.innerHTML = linkText; console.log(linkText)} 
        div.appendChild(p);
        if (links[choiceID].isClicked) a.style.color= 'purple';
        a.addEventListener('click', ()=> {
            div.innerHTML = linkAfterText;
            linkActions();
            if (isFunction(func)) func();
        })

    }
    animateOnScrollStory();
}

function storyWideImage(filename) {
    return `<img src="${baseImagesFolder}/${filename}.jpg" class="lg-12" data-animate-block>`;
}

function storyLeftImage(filename) {
    return `<img class="portrait-left" src= "${baseImagesFolder}/${filename}.jpg" data-animate-block>`;
}

function storyRightImage(filename) {
    return `<img class="portrait-right" src= "${baseImagesFolder}/${filename}.jpg" data-animate-block>`;
}

function storyCenterImage(filename, animate=true) {
    return `<img class="portrait-center" src= "${baseImagesFolder}/${filename}.jpg" ${animate? 'data-animate-block' : ''} >`;
}


function hideStoryIntro() {
    document.getElementById('StoryPage').querySelector('.s-intro').style.display = "none";
}

function showStoryIntro() {
    document.getElementById('StoryPage').querySelector('.s-intro').style.display = "";
}



function endStory() {
    currentStory.isRead = true;
    currentStory.isRead = true;
    currentStory.isComplete= true;

    updateStoryObj(currentStory);
    clearLoadedScripts();

    refreshMainPageStoryButton(currentStory.name);
    switchToPage("MainPage");
}

function activateEndButton(container=null) {
    if (container) {
        container.querySelector("#End-Story").addEventListener('click', ()=> {
            endStory();
        });
    } else {
        document.getElementById("End-Story").addEventListener('click', ()=> {
        endStory();
    });
    }



    
    ssMoveTo();

    animateOnScrollStory();
}

function loadSectionPath() {
    if (!currentChapter.hasOwnProperty('sectionPath') || !currentChapter.sectionPath) {
        currentChapter.sectionPath = ['section1'];
        
    } else {
        for (let i=0; i < currentChapter.sectionPath.length; i++) {
            const section = currentContainer.querySelector('#' + currentChapter.sectionPath[i])
            if (!section) console.log('#' + currentChapter.sectionPath[i] + " was not found.")
            section.style.display="";
            if (i < currentChapter.sectionPath.length - 1) {
                section.querySelectorAll('.appendLink').forEach(link=>{
                    link.style.display="none";
                })
            }
       
        };

    }
    document.getElementById("intro-button").href = "#" + currentChapter.sectionPath[currentChapter.sectionPath.length-1];
}

function changeScenery(scenery) {
    currentScenery = scenery;
    return currentScenery;
}

function activateAppendLink(section1, section2, id=null, switchToSection = false) {
    var link = section1.querySelector('.appendLink');
    if (id) link = section1.querySelector('#' + id);
    if (!currentChapter.hasOwnProperty('sectionPath')) currentChapter.sectionPath = [];
    link.addEventListener('click', ()=> {
        if (Array.isArray(section2)) {
            section2.forEach(i=> {
                i.style.display= "";
                currentChapter.sectionPath.push(i.id);
            })
            moveToID(section2[0].id);

            
        } else {
            section2.style.display = "";
            currentChapter.sectionPath.push(section2.id)
            moveToID(section2.id);
            
        }

        if (switchToSection) {
            setTimeout(()=> {
                hideStoryIntro();
                hideNode(section1);
                moveToIDInstantly("top")
            }, 1200)
            
        }
        updateStoryObj(currentStory);
        AutoSave();
        console.log(currentChapter.sectionPath)
        console.log(data.StoryObj[currentStory.name].chapters[currentChapter.num-1].sectionPath)
        moveToID(section2.id);
        link.remove();
    })

}   


function newSection(id=null) {
    const sec = document.createElement('section');
    if (id) {
        sec.id = 'section' + id;
    } 
    currentContainer.appendChild(sec)
    return sec;
}

function newRowSection(id=null) {
    const sec = newSection();
    sec.className = "row";
    
    return sec
}

function addRowSection(id=null, scenery="", mode="") {
    const sec = newRowSection(id);
    if (mode == "mode1") {
        sec.innerHTML = `<div class="column lg-3 md-12"><h3>${changeScenery(scenery)}</h3></div>`;
    } 
    return sec
}



function appendRowSection(id=null, scenery="", mode="") {
    const sec = newRowSection();
    if (id) sec.id = 'section' + id;
    if (mode == "mode1") {
        sec.innerHTML = `<div class="column lg-3 md-12"><h3>${changeScenery(scenery)}</h3></div>`;
    } 
    sec.style.display = "none";
    currentContainer.appendChild(sec)
    return sec
}

function appendSection(id=null, scenery="", mode="") {
    const sec = newSection();
    if (id) sec.id = 'section' + id;
    if (mode == "mode1") {
        sec.innerHTML = `<div class="column lg-3 md-12"><h3>${changeScenery(scenery)}</h3></div>`;
    } 
    sec.style.display = "none";
    currentContainer.appendChild(sec)
    return sec
}

function linkOnClick(node, func) {
    node.addEventListener('click', ()=> {func()});
}

function assignChoice(attribute, func) {

}


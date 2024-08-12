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
    if (origin.hasOwnProperty('textColor')) clr = origin.textColor;
    return clr;
}

function getStoryFont(datastory) {
    const origin = stories[datastory.name];
    var fnt = 'Source Sans 3';
    if (origin.hasOwnProperty('font')) fnt = origin.font;
    return fnt;
}

function getStoryFontWeight(datastory) {
    const origin = stories[datastory.name];
    var fnt = 0;
    if (origin.hasOwnProperty('fontWeight')) fnt = origin.fontWeight;
    return fnt;
}

function storyImage(src, fig="", cl="", sty="", extension='jpg') {
    var img;
    var classtext = ``;
    src = `${baseImagesFolder}/${src}.${extension}`;
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

function storyImageNonAnimate(src, fig="", cl="", sty="", extension='jpg') {
    var img;
    var classtext = ``;
    src = `${baseImagesFolder}/${src}.${extension}`;
    if (cl) classtext = `class="${cl}"`;
    var styletext = ``;
    if (sty) styletext = `style="${sty}"`;
    img = `<img src="${src}" ${classtext} ${styletext}>`;
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


function sceneryHeader(scenery=null) {
    if (scenery) return `<div class="column lg-3 md-12"><h3>${changeScenery(scenery)}</h3></div>`;

    return `<div class="column lg-12 marginless"></div>`;
}

function contentClass() {
    return 'column lg-8 md-12 margin-top-lg-70 margin-top-md-0';
}

function fullRowContentClass() {
    return 'column lg-12 margin-top-lg-70 margin-top-md-0';
}

function centered8RowContentClass() {
    return 'column lg-8 md-12 margin-sides-auto margin-top-lg-70 margin-top-md-0';
}


function storyRow(rowID, headerText=null, innerText) {
    const row= document.createElement('div')
    row.id = rowID;
    row.className = 'row';
    if (headerText && headerText!= "fullRow" && headerText!= "centered8Row" ) {
        if (headerText == "Empty") headerText = "";
        var contentclass = contentClass();
        row.innerHTML = `    
        ${sceneryHeader(headerText)}
    
    <div class="rowContent ${contentclass} ">
        ${innerText}
    </div>`;
    } else {
        var contentclass = contentClass();
        row.innerHTML = innerText;
        if (headerText=="fullRow") {
            contentclass = fullRowContentClass();
            row.innerHTML = `    
            ${sceneryHeader()}
        
            <div class="rowContent ${contentclass} margin-vertical-none">
                ${innerText}
            </div>`;
        }
        if (headerText=="centered8Row") {
            contentclass = centered8RowContentClass();
            row.innerHTML = `    
            ${sceneryHeader()}
        
            <div class="rowContent ${contentclass} margin-vertical-none">
                ${innerText}
            </div>`;
        }
        
        
    }
    rows[row.id] = row;
    return row;
    
}

function prepareStory() {
    sections = {};
    sectionsList = [];
    rows = {};
    const container = getContainer('story-content');

    
    if (!currentChapter.hasOwnProperty('links')) {currentChapter.links = {}; updateChapterObj();}
    currentChapter.currentChoiceTree = 0;
    currentStory.currentChapterNum = currentChapter.num;
    updateChapterObj();
    fadeTransition();
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
        if (linkActions == 'disable') {p.innerHTML = linkText;} 
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

function storyWideImage(filename, animate=true) {
    return `<img src="${baseImagesFolder}/${filename}.jpg" class="lg-12" ${animate? `data-animate-block` : ``} >`;
}

function storyLeftImage(filename, animate=true) {
    return `<img class="portrait-left" src= "${baseImagesFolder}/${filename}.jpg" ${animate? `data-animate-block` : ``} >`;
}

function storyRightImage(filename, animate=true) {
    return `<img class="portrait-right" src= "${baseImagesFolder}/${filename}.jpg" ${animate? `data-animate-block` : ``} >`;
}

function storyCenterImage(filename, animate=true, extension='jpg') {
    return `<img class="portrait-center" src= "${baseImagesFolder}/${filename}.${extension}" ${animate? 'data-animate-block' : ''} >`;
}


function hideStoryIntro() {
    document.getElementById('StoryPage').querySelector('.s-intro').style.display = "none";
}

function showStoryIntro() {
    document.getElementById('StoryPage').querySelector('.s-intro').style.display = "";
}

function endChapter(chapter=currentChapter) {
    
    chapter.isRead = true;
    chapter.currentSection = 'section1';
    chapter.sectionPath= [];
    updateChapterObj(chapter);
    checkChapterCompletion();

    clearLoadedScripts();

    
    if (nextChapter(chapter)) {
        
        switchToNextChapter(chapter);
    } else {
        switchToPage("MainPage");
    }
    
}

function switchToNextChapter(chapter=currentChapter) {
    const story = getStoryOfChapter(chapter);
    if (nextChapter(chapter)) {
        story.currentChapter = nextChapter(chapter);
        story.currentChapter.isUnlocked = true;
        updateStoryObj(story);

    } else {
        console.log("Next chapter of " + chapter.storyname + " not found.")
    }

    openStory(story);
    
}

function getStoryOfChapter(chapter=currentChapter) {
    return data.StoryObj[chapter.storyName]
}

function checkChapterCompletion(chapter=currentChapter) {
    if (chapter.isRead) {
        chapter.isComplete = true;
    }
    updateChapterObj();
    checkStoryCompletion();
}

function checkStoryCompletion(story=currentStory) {
    var read = true;
    var complete = true;
    story.chapters.forEach(chapter => {
        if(!chapter.isRead) read = false;
        if(!chapter.isComplete) complete = false;
    })
    if (read) {
        if (!story.isRead) story.currentChapter = story.chapters[0]
        story.isRead = true;
    } story.isRead = true;
    if (complete) {
        if (!story.isComplete) story.currentChapter = story.chapters[0]
        story.isComplete = true;
    } 
    updateStoryObj();
    refreshMainPageStoryButton(currentStory.name);
    
    
}

function isChapterAvailable(chapter=currentChapter) {
    const origin = stories[chapter.storyName].chapters;
    var subtitle = "";
    if(origin[chapter.num-1].hasOwnProperty('subtitle')) subtitle = origin[chapter.num-1].subtitle;
    if (subtitle != 'Coming Soon' && subtitle != 'Patreon exclusive') return true;
    return false;
}

function isThereNextChapter(chapter=currentChapter) {
    var chapters = data.StoryObj[chapter.storyName].chapters;
    return chapter.num < chapters.length && isChapterAvailable(chapters[chapter.num])
    
}
 
function activateEndButton(container=currentContainer) {
    if (container.querySelector("#End-Chapter")) {
        container.querySelector("#End-Chapter").addEventListener('click', ()=> {
            endChapter();
        });
    } else {
        document.getElementById("End-Chapter").addEventListener('click', ()=> {
            endChapter();
    });
    }



    
    ssMoveTo();

    animateOnScrollStory();
}

function loadSectionPath() {
    if (!currentChapter.hasOwnProperty('sectionPath') || currentChapter.sectionPath.length == 0) {
        console.log()
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

function appendLink(text, jumpedtosectionid, func=()=>{}) {
    return `<p><a class="appendLink" href="#" onclick="switchToSection('${jumpedtosectionid}'); ${func}">${text}</a></p>`;
}

function appendLinkInline(text, jumpedtosectionid, func=()=>{}) {
    return `<a class="appendLink" href="#" onclick="switchToSection('${jumpedtosectionid}'); ${func}">${text}</a>`;
}

function appendLinkRow(text, jumpedtoRowID, isSwitch=false) {
    return `<p><a class="appendLink" href="#" onclick="switchToRow('${jumpedtoRowID}', ${isSwitch})">${text}</a></p>`;
}

function switchToSection(sectionID) {
    
    
    const container=document.getElementById('story-content');
    fadeTransition(document.getElementById('MainSection'), timeout=300, func =()=> {
        clearNode(container);
        
        moveToIDInstantly('story-content')
        container.appendChild(sections[sectionID])
        currentChapter.currentSectionID = sectionID;
        if (!currentChapter.hasOwnProperty('sections')) {
            currentChapter.sections = {};
            currentChapter.sections['section1'] = true;
        }
        currentChapter.sections[sectionID] = true;
        setChapterIndex();
        updateChapterObj();
        ssMoveTo();

        animateOnScrollStory();
    })
    

}

function switchToRow(rowID, isSwitch=false) {
    if (!currentChapter.currentSectionID) console.log(currentChapter.currentSectionID)
    const container=document.getElementById(currentChapter.currentSectionID);
    if(isSwitch) {
         
        fadeTransition(document.getElementById('MainSection'), timeout=300, func =()=> {
            clearNode(container); 
             
            container.appendChild(rows[rowID])
            ssMoveTo();
            animateOnScrollStory();
            moveToID(rowID)  
            

    })}

    else {
        container.appendChild(rows[rowID])
        ssMoveTo();
        animateOnScrollStory();
        moveToID(row.id)
    }
        
        

    
    

}

function activateAppendLink(section1, section2, id=null) {
    var link = section1.querySelector('.appendLink');
    if (id) link = section1.querySelector('#' + id);
    if (!currentChapter.hasOwnProperty('sectionPath') || currentChapter.sectionPath.length == 0) 
        {currentChapter.sectionPath = ['section1'];
        console.log(currentChapter.sectionPath);
        }
    
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
            const container=document.getElementById('MainSection')
            console.log('switching to', section2.id, 'and hiding', section1.id)
            container.style.opacity = 0;
            hideStoryIntro();
            hideNode(section1);
            clearNode(section1);
            moveToIDInstantly("top")
            setTimeout(()=> {container.style.opacity = 1;}, 500)
        }
        
              
               
            
        
        updateChapterObj();
        console.log(currentChapter.sectionPath)
        console.log(data.StoryObj[currentStory.name].chapters[currentChapter.num-1].sectionPath)
        moveToID(section2.id);
        link.remove();
    })

}   


function newSection(id) {
    const sec = document.createElement('section');

    sec.id = 'section' + id;

    
    sections[sec.id] = sec;
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

function storyVideo(src, isanimate= true, iscontrols= true, isloop= false, isautoplay= false) {
    return `
    <video class="story-vid"  ${iscontrols? `controls` : ``} ${isloop? `loop` : ``} ${isautoplay? `autoplay` : ``} ${isanimate? `data-animate-block` : ``}>
        <source src="${baseImagesFolder}/${src}.webm" type="video/webm">
        Your browser does not support the video tag.
    </video>`;
}



function nextChapter(chapter=currentChapter) {
    story=getStoryOfChapter(chapter);
    if (isThereNextChapter(chapter)) {
        return story.chapters[chapter.num]
    }

    return null
}

function storyEndButton(text='The End', func=()=>{}) {
    return `<a id="End-Chapter" class="btn btn--primary custom-story-button" href="#" onclick="endChapter(); ${func()}">
    ${text}</a>`
}

function storyPostLoad() {
    loadPage();

    loadSectionPath();

    ssMoveTo();

    animateOnScrollStory();

}

function chapterStars() {
    return '<p style="margin-right:auto; margin-left:auto;">***</p>';
}

function storyLoad() {
    loadPage();

    
    storySectionLoad();

    setChapterIndex();

    ssMoveTo();

    animateOnScrollStory();

}

function storySectionLoad() {
    if (currentChapter.currentSectionID) {
    
        currentContainer.appendChild(sections[(currentChapter.currentSectionID)])
    
    } else {
        currentContainer.appendChild(sections['section1'])
    }
}


function addToChapterIndex(sectionName, linkedSectionID, func=()=>{}) {
    var unlocked = false;

    if (!currentChapter.hasOwnProperty('sections')) currentChapter.sections = {'section1' : true};

    if (linkedSectionID in currentChapter.sections) {
        unlocked = currentChapter.sections[linkedSectionID];
    } else {
        currentChapter.sections[linkedSectionID] = false;

    }




    if (unlocked && currentChapter.currentSectionID != linkedSectionID) {
       currentChapterIndex.innerHTML+=    `<div class="lg-3 tab-6 mob-12 column">
            <p id='index-${linkedSectionID}'><a class="appendLink" href="#" onclick="switchToSection('${linkedSectionID}'); ${func}">${sectionName}</a></p>

        </div>`; 
    }   
    else {
        var x = '';
        if (currentChapter.currentSectionID == linkedSectionID) x= 'style="color : var(--color-1);"'
        currentChapterIndex.innerHTML+=    `<div class="lg-3 tab-6 mob-12 column">
           <p id='index-${linkedSectionID}' ${x}>${sectionName} </p>

        </div>`; 


    }

}


function hasIndex(chapter=currentChapter) {
    const chOrigin = getChapterOrigin(currentChapter);
    if (chOrigin.hasOwnProperty('index') && chOrigin.index == true) return true;
    return false;
}
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
    var arr = arrayDifference(availableUnreadStories(), ["Hammer", "The Hanging Man"]);
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
    const charlist = stories[datach.storyName].chapters
    for(let i=0; i < charlist.length; i++) {
      if (datach.num == charlist[i].num) ch = charlist[i];
    }
    return ch
}

function getChapterDuration(datach) {
    
    return wordCountToDuration(getChapterOrigin(datach).wordCount)
  }


function getStoryDuration(datastory) {

    var length = 0;

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

function getStoryFolder(datastory) {
    if (!datastory) console.log()
    return stories[datastory.name].folder;
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
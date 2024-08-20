// data.stories[""] = {
//   num: ,
//   folder: "",
//   overview: "",
//   severity: "D",
//   NTR: "None",
//   "duration": 526,
//   genre: ["", ],
//   characters: ["", ],
//   chapters: {
//       1: {
//           name: "",
//           "duration": ,
//           isPatreon: false,
//           isComingSoon: false,
//           "currentPassage": "",
//           "passageNames": [""]
//       }, 
//     }


// };

var stories = {};


const storyNames= ["Elf", "Growing Mommy's Dick", "Mr. Wolf", "Daddy I'm Scawwed", "Game Night", "Emma", "Nungerie", "God Bless Estrogen Pills",
  "Protecting A Femboy", "Hammer", "The Hanging Man", 
];

var mainPageStoryButtons = {};
var mainPageCompletionIcons = {};

storyNames.forEach(name => {
  mainPageStoryButtons[name] = {};


  mainPageStoryButtons[name].newStoryIcon = {};

  mainPageStoryButtons[name].lockIcons ={};
  mainPageStoryButtons[name].hiddenIcons ={};
  mainPageStoryButtons[name].notLikedIcons ={};
  mainPageStoryButtons[name].likedIcons ={};


  mainPageCompletionIcons[name] = {};
  mainPageCompletionIcons[name].completionIcon ={};
  
})

const PatreonStoryNames = [];

const lockedStoryNames = ['The Hanging Man', ]; 




stories["Elf"]= {
  num: 0,
  overview: "Fat miserable you picked up a weird-looking container from a garage sale to use as a cookie jar. While washing it in your kitchen sink, you unintentionally broke the seal and freed the sexy elf inside.",
  severity: "D",
  genre: [],
  characters: ["Elf", "You" ],
  chapters: [
       {
          name: "1001 Experimental Stories",
          num : 1,
          wordCount: 1059,

      }, 

    ]
    
    }


;


stories["Growing Mommy's Dick"]= {
  num: 1,
  overview: "Your mom complains from the hardships of life so you tell her to suck it up and grow some balls. Next day she goes under surgery. Now it's your fault she has a dick and you have to nurture the tiny little thing until it grows into a healthy, full-fledged, throbbing cock.",
  severity: "D",
  genre: ["Transexual", "Virtual Pet"],
  characters: ["Bailey", "Jake" ],
  chapters: [
       {
          name: "Hardships Of Life",
          num : 1,
          wordCount: 8301,
          index: true,
      }, 

    ]
    
    }


;


stories["Mr. Wolf"] = {
    num: 5,
    overview: "Mr. Wolf meets a little girl in the woods.",
    severity: "D",
    background: "rgba(81, 108, 41, 0.14)",
    genre: ["Parody", ],
    characters: ["Mr. Wolf", "Girl in the woods" ],
    chapters: [
         {
            name: "Girl",
            num : 1,
            wordCount: 248,

        }, 
  
      ]
      }
  
  
  ;
  
  stories["Daddy I'm Scawwed"] = {
    num: 8,
    overview: "A dad-daughter conundrum.",
    severity: "D",
    background: "rgba(216, 140, 140, 0.14)",
    genre: ["Incest", "Ageplay", "Mostly Text",],
    characters: ["Joshua", "Birdie", "Teddy"],
    chapters: [
        {
            name: "Pee",
            num : 1,
            wordCount: 1062,
        }, 
        
    ],
    
  };
  
  stories["Game Night"] = {
    num: 12,
    overview: "I joined Mom and Dad's stupid game for once.",
    severity: "D",
    background: "rgba(41, 108, 103.98, 0.14)",
    genre: ["Incest",],
    characters: [],
    chapters: [
        {
            name: "Contest!",
            num : 1,
            wordCount: 505,
        }, 
    ]
  
  
  };
  
  stories["Emma"] = {
    num: 14,
    overview: "The grand entrance hall of the Hastings estate was a testament to Lady Arabella Hastings' refined tastes and the family's wealth. Tall windows with heavy velvet drapes let in slivers of the late afternoon sun, casting long shadows across the marbled floor. Arabella stood near the grand staircase, her dark eyes assessing the young woman who had just been shown in by the butler.",
    severity: "D",
    genre: ["Female Cuckoldery", ],
    characters: ["Arabella", "Emma", "Henry" ],
    chapters: [
        {
            name: "Perfume",
            num : 1,
            wordCount: 4425,
            index: true,
        }, 

        {
          name: "Finally, something",
          num : 2,
          wordCount: 5798,
          index: true,
      }, 
    ]
  
  
  };
  
  stories["Nungerie"] = {
    num: 17,
    overview: "In a desperate attempt to revive a dying religion, 25-year old Alistair Everhart has been elected the Bishop of Sancta Celestia Cathedral, the last church in the world, due to his otherworldly talent in marketing and brand strategy. His first decree was to force nuns and pastorettes into wearing more revealing clothes to attract more customers of God.",
    severity: "D",
    background: "white",
    textColor: "black",
    fontWeight: 400,
    genre: ["Religion", "Corruption", "Strategy"],
    characters: ["Alistair Everhart", "Pristine Rivers", "Father Gregory" ],
    chapters: [
        {
            name: "Prologue",
            num : 1,
            wordCount: 942,
        }, 
    ]
  
  
  };
  
  stories["God Bless Estrogen Pills"] = {
    num: 18,
    overview: "Cum... That's lots of cum. Wait. Did I just cum?!!!!",
    severity: "D",
    background: '#da504d',
    genre: ["Lustcraze", "Sissification"],
    characters: [],
    chapters: [
        {
            name: "God Bless Estrogen Pills",
            num: 1,
            wordCount: 191,
            
        }, 
    ]
  
  
  };
  
  stories["Protecting A Femboy"] = {
    num: 19,
    overview: "A short story about two boys.",      
    severity: "D",
    background: "rgba(13.20, 149.59, 226.31, 0.14)",
    genre: ["Exhibitionism", "Voyeurism", ],
    characters: ["Drew", "Damian", "Jaime"],
    chapters: [
        {
            name: "Jaime",
            num: 1,
            wordCount: 2028,
            index: true,
        }, 

        {
          name: "Sexy Boy",
          num: 2,
          wordCount: 11127,
          index: true,
      }, 

      {
        name: "Cum Is Thicker Than Blood",
        num: 3,
        wordCount: 16602,
        index: true,
        paths: ['blood_path', 'junkies_path']
    }, 

    {
      name: "The Arsonist",
      num: 4,
      wordCount: 0,
      subtitle: "Coming Soon",
  }, 
    ]
  
  
  };
  
  stories["Hammer"] = {
    num: 20,
    overview: "On my knees<br />In the dry puddle of my tears</br>On the floor<br/>His fingers pierce my scalp and his thumbs gouge my eyes",
    buttonStyle: "",
    severity: "B",
    background: '#f5f5ef',
    textColor: 'black',
    font: 'Space Grotesk',
    fontWeight: 400,
    genre: [ "Abuse", "Text Only",],
    characters: [],
    chapters: [
        {
            name: "Hammer",
            num: 1,
            wordCount: 4307,
        }, 
  
    ]

  };

  stories["The Hanging Man"] = {
    num: 21,
    overview: "Story production on hold.",
    severity: "B",
    subtitle: "Coming Soon",
    NTR: "Exclusive",
    genre: [],
    characters: [],
    chapters: [
        {
            name: "Randomly Accessed Memories",
            num: 1,
            wordCount: 0,
            subtitle: "Coming Soon",
        }, 

        {
          name: "Rotpunkt",
          num: 2,
          wordCount: 0,
          subtitle: "Coming Soon",
      }, 

      {
        name: "Battle Royale",
        num: 3,
        wordCount: 0,
        subtitle: "Coming Soon",
     }, 


     {
      name: "Abduction, Adoption, Praise",
      num: 4,
      wordCount: 0,
      subtitle: "Coming Soon",
   }, 

  
    ]

  };


function initStories() {
  
    storyNames.forEach(i => {

      initStory(i);
    

  });


}

function initStory(storyName) {

    data.StoryObj[storyName]= new Story(storyName);


}

function checkForUpdates() {
  checkForNewAchievements();
  storyNames.forEach(storyName => {
    if (!data.StoryObj[storyName]) {
      initStory(storyName);
  }
  // check for errors, reset stroy
  if (data.StoryObj[storyName].chapters.length > stories[storyName].chapters.length) initStory(storyName);
  const story = data.StoryObj[storyName];
  const current_total_chapters_num = stories[story.name].chapters.length
  for(let i =0; i< current_total_chapters_num; i++) {
    const chapter = story.chapters[i];
    if (i+1 > story.chapters.length) {
      story.chapters.push(new Chapter(story.name, stories[story.name].chapters[i]));
      story.isSeen = false;
      story.isRead = false;
      story.isComplete = false;

    } else {
      
      const chapterOrigin = getChapterOrigin(chapter);
      if (chapter.subtitle == "Coming Soon" && (!chapterOrigin.hasOwnProperty('subtitle') || chapterOrigin.subitle!="Coming Soon")) {
        chapter = new Chapter(story.name, chapterOrigin);
        console.log("New Chapter Added, ", chapter)
        story.chapters[chapter.num] = chapter;
        story.isSeen = false;
        story.isRead = false;
        story.isComplete = false;
      }
    }
    

  }
  updateStoryObj(story);
});
}


function getChapterObjByNum(num, storyName) {
  const story = data.StoryObj[storyName];
  if (num>= story.chapters.length) return null;
  story.chapters.forEach(chapter => {
    if (chapter.num == num) return chapter;
  })
  return null;
}
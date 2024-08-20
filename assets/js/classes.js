

class Story {
    constructor(name) {    
      
      const origin = stories[name];
      this.name = name;
      this.num = origin.num;
  
      const chaptersOrigin = origin.chapters;
      this.chapters = [];
  
      for (let i = 0; i < origin.chapters.length; i++) {
        this.chapters.push(new Chapter(this.name, origin.chapters[i]));
          }
        
      this.currentChapter = this.chapters[0];
      
      this.isSeen = false;
      this.isAvailable = true;
      this.isLiked = false;
      this.isHidden = false;

      this.isLocked = false;
      if (origin.hasOwnProperty('isLocked')) 
      {
        if (origin.isLocked) this.isLocked = true;

      }

      

      this.isSeen = false;
      this.isRead = false;
      this.isComplete = false;

      this.completionReq = null;
      if (origin.hasOwnProperty('paths')) {
        this.completionReq = {};
        for(i=0; i<paths.length; i++) {
          this.completionReq[paths[i]] = false;
        }
      } 
  
      this.inProgress= false;

      this.vars = {};
      
  
      
    }
  }
  
  
  class Chapter {
    constructor(storyName, origin) {
        this.name = origin.name;
        this.storyName = storyName;
        this.num = origin.num;
        this.background = "";
  
        if (origin.hasOwnProperty('background')) 
          {
            this.background = origin.background;
    
          }
  
  
        this.isUnlocked = false;
        if (this.num == 1 && origin.subtitle != "Coming Soon" && origin.subtitle != "Patreon Exclusive") {
        this.isUnlocked = true;
        }
        this.isSeen = false;
        this.isRead = false;
        this.isComplete = false;
        
        

        this.currentSection = "section1";
        
    }
  }

  class Achievement {
    
    constructor(name) {
      
      this.name = name;
      var origin= achievements[name];
      this.num = origin.num;
      this.date = null;
      this.isEarned = false;
      this.isHidden= false;
      if (origin.hasOwnProperty('isHidden')) this.isHidden= origin.isHidden;

    }

  }

  class Link {
    
    constructor(id, text) {
      
      this.id = "" + id;
      this.text = text;
      this.isClicked = false


    }

  }
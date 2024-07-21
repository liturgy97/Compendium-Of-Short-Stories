

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
        if (this.num == 1) {
        this.isUnlocked = true;
        }
        this.isRead = false;
        this.isComplete = false;
        
        

        this.CurrentSection = "section1";
        
    }
  }

  class Achievement {
    
    constructor(name) {
      
      this.name = name;
      var origin= achievements[name];
      
      this.num = origin.num;
      this.filename= origin.filename;

      this.preDescription = origin.preDescription;
      this.postDescription = origin.postDescription;
      this.requirement = origin.requirement;
      this.rarity = origin.rarity;
      this.isHidden = origin.hidden;
      this.hasVariants = false;
      this.variants = origin.variants;
      if (this.variants) this.hasVariants = true;


      this.date = null
      this.dateStr = "";
      this.isEarned = false;
      this.variantEarned = {};
      this.isPatreon= false;
      this.legacy= false;

    }

  }

  class Link {
    
    constructor(id, text) {
      
      this.id = "" + id;
      this.text = text;
      this.isClicked = false


    }

  }
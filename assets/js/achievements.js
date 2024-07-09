const achievementNames = ["Founder", "Player One", "First Choice", ]

var achievements = {};

achievements["Founder"] = {
    num: 0,
    filename: "Founder",
    preDescription : "Awarded to those who supported the compendium before its release.",
    postDescription : "You are a founder of the compendium!",
    requirement : "Have a membership before X Jul 2024",
    rarity : "Founder",
    hidden: false,
    variants: {},

};

achievements["Player One"] = {
    num: 1,
    filename: "Player-One",
    preDescription : "Awarded to those who played the compendium in the first month after its release.",
    postDescription : "You were here when it started.",
    requirement : "Have a membership between X Jul and Y Aug2024",
    rarity : "Rare",
    hidden: false,
    variants: {},


};


achievements["First Choice"] = {
    num: 2,
    filename: "First-Choice",
    preDescription : "Your first choice in the gmae.",
    postDescription : "",
    requirement : "Finish Emma Chapter 1.",
    rarity : "Common",
    hidden: true,
    variants: {
        "Aww, kawaii" : {
            name: "Aww, kawaii",
            preDescription : "",
            postDescription : "It feels nice to be nice sometimes.",
            requirement : "Take the good choice on your first try.",
        }, 

        "Pig" : {
            
            name: "Pig",
            preDescription : "",
            postDescription : "You couldn 't wait to hurt her feelings, huh?",
            requirement : "Take the bad choice on your first try.",
        },

        }

};


function initAchievements() {

    data.AchievementObj = {}
  

    
    achievementNames.forEach(i => {

        data.AchievementObj[i]= new Achievement(i);
  
});


}

function earnedAchievements() {
    var arr = [];
    achievementNames.forEach( i => {
        if (data.AchievementObj[i].isEarned) arr.push(i);
    })
    return arr;
}
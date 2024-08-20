const achievementNames = ["Founder", "Player One", "Bloodbath", "Junkie"]

var achievements = {};

achievements["Founder"] = {
    num: 0,
    filename: "Founder",
    preDescription : "Awarded to those who supported the compendium before its release.",
    postDescription : "You are a founder of the compendium!",
    requirement : "Have a membership before X Jul 2024",
    rarity : "Founder",
    isHidden: false,

};

achievements["Player One"] = {
    num: 1,
    filename: "Player-One",
    preDescription : "Awarded to those who played the compendium in the first month after its release.",
    postDescription : "You were here when it started.",
    requirement : "Have a membership between X Jul and Y Aug2024",
    rarity : "Rare",
    isHidden: false,


};

achievements["Bloodbath"] = {
    num: 2,
    filename: "Bloodbath",
    preDescription : "As Common As Light And Love Are Red Valleys Of Blood",
    postDescription : "Selected the Blood path in Protecting A Femboy first.",
    requirement : "Complete Blood path in Old Boyhood.",
    rarity : "Common",
    isHidden: true,

};

achievements["Junkie"] = {
    num: 2,
    filename: "Junkie",
    preDescription : "",
    postDescription : "Selected the Junkie path in Protecting A Femboy first.",
    requirement : "Complete Junkie path in Old Boyhood.",
    rarity : "Common",
    isHidden: true,

};


// achievements["First Choice"] = {
//     num: 2,
//     filename: "First-Choice",
//     preDescription : "Your first choice in the gmae.",
//     postDescription : "",
//     requirement : "Finish Emma Chapter 1.",
//     rarity : "Common",
//     isHidden: true,
//     variants: {
//         "Aww, kawaii" : {
//             name: "Aww, kawaii",
//             preDescription : "",
//             postDescription : "It feels nice to be nice sometimes.",
//             requirement : "Take the good choice on your first try.",
//         }, 

//         "Pig" : {
            
//             name: "Pig",
//             preDescription : "",
//             postDescription : "You couldn 't wait to hurt her feelings, huh?",
//             requirement : "Take the bad choice on your first try.",
//         },

//         }

// };


function initAchievements() {

    data.AchievementObj = {}
  

    
    achievementNames.forEach(i => {

        data.AchievementObj[i]= new Achievement(i);
  
});


}

function checkForNewAchievements() {

    achievementNames.forEach(i => {
        if (!data.AchievementObj.hasOwnProperty(i)) data.AchievementObj[i]= new Achievement(i);
  
});


}

function earnedAchievements() {
    var arr = [];
    achievementNames.forEach( i => {
        if (data.AchievementObj[i].isEarned) arr.push(i);
    })
    return arr;
}


function getTotalNumOfAchievements() {

    return data.AchievementObj[achievementNames[achievementNames.length-1]].num+1;
}

function isAchievementEarned(achName) {
    return data.AchievementObj[achName].isEarned;
}

function getAchievementVariant(achName) {
    const ach1 = achievements[achName]
    var ach2;
    for(i=0; i<achievementNames.length; i++) {
        ach2 = achievements[achievementNames[i]]
        if (achievementNames[i]!=achName) {
            if (ach1.num==ach2.num) return achievementNames[i]
        }  
    }
    return null;
}


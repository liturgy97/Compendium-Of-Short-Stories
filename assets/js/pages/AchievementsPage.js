function loadAchievementsPage() {
    const container2= document.getElementById("AchievementsPage")
  
    container2.innerHTML = `

    
    <div class="TitleText margin-bottom-2">Profile</div>
    <div class="AchBoxes row padless lg-12">
      <div class="AchBox">
        <div class="AchBoxText font-size-14">Stories Completed</div>
        <div class="AchBoxVal font-size-14" style="color: ${(completeStories().length==storyNames.length)? `var(--color-gray-9)` : `var(--color-gray-14)`}; font-size: 14px; ">${completeStories().length}/${storyNames.length}</div>
      </div>
      <div class="AchBox">
        <div class="AchBoxText font-size-14">Achievements</div>
        <div class="AchievementIcon">
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.44034 1.30863C6.65095 0.81617 7.34905 0.81617 7.55966 1.30863L8.7415 4.07207C8.82954 4.27793 9.02349 4.41884 9.24647 4.43895L12.2399 4.709C12.7733 4.75712 12.989 5.42106 12.5858 5.77354L10.3228 7.75149C10.1542 7.89883 10.0801 8.12683 10.1299 8.34512L10.7981 11.2755C10.9172 11.7977 10.3524 12.208 9.89253 11.9334L7.31209 10.3924C7.11986 10.2776 6.88014 10.2776 6.68791 10.3924L4.10747 11.9334C3.64762 12.208 3.08285 11.7977 3.20192 11.2755L3.8701 8.34512C3.91988 8.12683 3.8458 7.89883 3.67722 7.75149L1.41424 5.77354C1.01096 5.42106 1.22669 4.75712 1.76013 4.709L4.75353 4.43895C4.97651 4.41884 5.17046 4.27793 5.2585 4.07207L6.44034 1.30863Z" stroke="var(--color-gray-9)" stroke-width="1.2"/>
        </svg></div>
        <div class="AchBoxVal font-size-14" style="color: ${(earnedAchievements().length==achievementNames.length)? 
          `var(--color-gray-9)` 
          :
          `var(--color-gray-14)`
        }">${earnedAchievements().length}/${achievementNames.length}</div>
      </div>
    </div>

    


  <div class="AchievementsTable column lg-12 padless">
    <div class="TableHeader margin-bottom-2" >Achievements</div>
    <div id="Achievements" class="row lg-12 padless">
      
    </div>
  </div>
`;
  
  const container3 = document.getElementById("Achievements");
  
  const ach = visibleAchievements();

  
  ach.forEach(element => {
  var x= data.AchievementObj[element];

      const achievementItem= document.createElement("div");
  
      achievementItem.className = "AchievementItem column lg-2 line-height-1";

    //<img class="Achievementpic marginless padless" style="width: 100%; height: auto; object-fit: contain; border-radius: 5px; " src="assets/images/achievements/${element}.png" />
    var desc = "";
    if (x.isEarned) {
      desc = x.postDescription;
    } else {
      desc = x.preDescription;
    }
    var base = "base";
    if (!x.isEarned) base = "sil";

    const imgurl = `assets/images/achievements/` + x.num + "-" + x.filename + "/" + base + ".png";

    var str1 = x.dateStr;

    if (!x.dateStr) {
      str1 = "Unearned";
    }

    // button.innerHTML = `

    //       <div class="Achievementpanel column marginless tooltip-text">
    //         <div class="Achievementtitle gray9 font-weight-500">#${x.num} - ${x.name}</div>
    //         <div class="Achievementsubtitle margin-bottom-1 gap1 flex-row">
    //           <div class="Date gray14 font-size-14">${str1}</div>
    //           <div class="Ellipse gray14" style="margin-top:auto; margin-bottom: auto; width: 0.3rem; height: 0.3rem; background: var(--color-gray-14); border-radius: 9999px"></div>
    //           <div class="Rarity gray14 font-size-14">${x.rarity}</div>
    //         </div>
    //         <div class="Achievementdescription gray14">${desc}</div>
    //       </div>
    //   `;


    achievementItem.innerHTML = `
        

          <img src="${imgurl}" class="achievement-image marginless">
          <span class="column achievement-tooltip">
          
            <span class="AchievementTitle gray9 font-weight-500 line-height-1 uppercase">#${x.num} - ${x.name}</span>
            <br>
            <span class="gray14 font-size-14 uppercase">${str1} - ${x.rarity}</span>
            ${(desc)? 
              
              `<br>
               <br>
              <span class="Achievementdescription gray14 line-height-1 font-size-18 uppercase">${desc}</span>`
              
              : ``}
            

        </span>
      `;


  
      container3.appendChild(achievementItem);
  
  

  
  });
  
  
  }
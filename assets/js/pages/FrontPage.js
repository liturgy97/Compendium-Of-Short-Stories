
const activateTrialButton = function() {
    const area = document.getElementById("trial-button-area")
    const button = document.getElementById("trial-button")

    const tempArea = document.createElement('div'); 
    tempArea.className = "TempArea position-absolute-horizontally-centered"; 
    tempArea.id = "trialTempArea"; 
    
    tempArea.style.width= "100%";

    const formContainer = document.createElement('div'); 
    formContainer.className = "trial-form";


    const form = document.createElement('form');

      form.id = "trial-form"; form.className = "trial-form row gap1 flex-centered";  form.noValidate = true;

      form.innerHTML = `
                        <input type="text" name="trial-code" id="form-data" class="text-center padless marginless" placeholder="Enter Your Patreon Code" minlength="8" autocomplete="off">
                        <input type="submit" name="loadFromString" value="Start Game" class="btn btn--stroke s-intro__more-btn" style="margin: auto; padding: 1rem 2rem; height: auto; line-height: 1;">

                        <div class="form-status flex-centered lg-12"></div>
                      `;
        formContainer.appendChild(form);
        tempArea.appendChild(formContainer);
        area.appendChild(tempArea);
      
      
        trialFormSubmission(form, ()=> {

          data.patreonCode = valEntered;
          AutoSave();
          startGame();
        });




    button.addEventListener('click', ()=> {
             

      showTempArea("trial-button", "trialTempArea");

    })

}

const trialFormSubmission = function(customForm, onCompletion) {

    if (!customForm) return;
  
    // Add novalidate attribute
    customForm.setAttribute('novalidate', true);
  
    // Field validation
    function hasError(field) {
        // Don't validate submits, buttons, file and reset inputs, and disabled fields
        if (field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') {

          return;
        } 
  
        // Get validity
        let validity = field.validity;
        // If field is required and empty
        if (validity.valueMissing) return 'Please enter your Patreon code.';
        
        if (field.validity.tooShort) return "Code too short."

        if (field.value.length == 0) return 'Please enter your Patreon code.'; 
  
        if (field.value.toLowerCase() == "s44ugq3dnibp08242024" || field.value.toLowerCase() == "patreontrial0707") {
          valEntered = field.value.toLowerCase();
          return;}
  
        
        // If all else fails, return a generic catchall error
        return 'Incorrect code';
  
    };
  
    // Show error message
    function showError(field, error) {
        // Get field id or name
        let id = field.id || field.name;
        if (!id) return;
  
        let errorMessage = field.form.querySelector('.form-status');
  
        // Update error message
        errorMessage.classList.remove('success-message');
        errorMessage.classList.add('error-message');
        errorMessage.innerHTML = error;
  
    };
  
    window.displayFormStatus = function (data) {
  
  
        if (!data.result || !data.msg || !formStatus ) return;
  
        formStatus.innerHTML = data.msg;
  
  
        if (data.result === 'error') {
            formStatus.classList.remove('success-message');
            formStatus.classList.add('error-message');
            return;
        }
  
  
        formStatus.classList.remove('error-message');
        formStatus.classList.add('success-message');
    };
  
  
    function submitForm(form) {
        let formField = form.querySelector('#form-data');
  
        
        formStatus = form.querySelector('.form-status');
        formStatus.classList.remove('error-message', 'success-message')
        formStatus.innerText = 'Submitting...';     
        
        onCompletion();
  
    };
  
    customForm.addEventListener('submit', function (event) {
  
        event.preventDefault();
  
        let formField = event.target.querySelector('#form-data');
        let error = hasError(formField);
  
  
        if (error) {
            showError(formField, error);
            formField.focus();
            return;
        }
  
        submitForm(this);
  
    }, false);
  
  };

  const updateNav = function() {

    document.getElementById("s-header__nav-list").innerHTML = `
    
    <li><a href="#" id="MenuHomeLink">Home</a></li>
    <li><a href="#" id="MenuAchievementsLink">Achievements</a></li>
    <li><a href="#" id="MenuSavesLink">Saves</a></li>
    `;

    document.getElementById("s-header").querySelector('.logo').href= "#";

    document.getElementById("s-header").querySelector('.logo').addEventListener('click', ()=> {
      switchToPage("MainPage");
    });

    
    

  }

  const displayMainSection = function() {
    

    gamePages.forEach(i => {
      const element = document.getElementById(i);

      element.style.display = "none";

      if (!element.classList.contains("position-absolute-horizontally-centered")) {
        element.classList.add("position-absolute-horizontally-centered")
    }

    if (element.classList.contains("position-relative")) {
        element.classList.remove("position-relative")
    }
  })

    document.getElementById("MainSection").style.display = "block";

    removeChild("content", "OuterPage");

    currentPage = "MainPage";

    
    switchToPageSlow("MainPage");

  }


const startGame = function() {

    loadGameData();

    data.version = version;

    gameLoaded = true;


    
    updateNav();

    ssMoveTo();

    displayMainSection();

    
    HideIntroBannerUponScrollingAway();

    document.getElementById("MenuHomeLink").addEventListener('click', ()=> {
        switchToPage("MainPage");
    });

    document.getElementById("MenuAchievementsLink").addEventListener('click', ()=> {
        switchToPage("AchievementsPage");
    });
    
    document.getElementById("MenuSavesLink").addEventListener('click', ()=> {
        switchToPage("SavesPage");
    });

    
    ssSwiper();

    if(!data.StoryObj["Elf"].isComplete) {
      console.log("new save")
      openStory(data.StoryObj["Elf"]);

    }
    
    

    devLoad();

    saveCleanup();

  }


  function loadGameData() {
    
    checkForUpdates();

    loadStoryList();

    loadAchievementsPage();

    loadSavesPage();
    

}

function updateGameStartButton() {
  const button = document.getElementById("trial-button-area");

  button.innerHTML = "";

  const anchor = document.createElement('a');
  anchor.className = "smoothscroll btn btn--stroke s-intro__more-btn";
  anchor.href = "#MainSection";
  anchor.innerHTML = "Start Game";

  anchor.addEventListener('click', ()=> {startGame()});

  button.appendChild(anchor);

}
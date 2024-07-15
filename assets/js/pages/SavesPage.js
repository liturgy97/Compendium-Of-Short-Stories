var currentSave = 0;


function loadSavesPage() {
 
  const container3 = document.getElementById("SavesPage");

  container3.innerHTML = "";
    
  for (let i = 0; i < totalSavesCount; i++) {
    
    var saveslot = JSON.parse(localStorage.getItem("data" + i)) ;
  
    var y = document.createElement('div');
    y.className = "row";

    y.classList.add("saveBox");



    
  y.innerHTML = `
              <div class="SavePicContainer column lg-2 md-4 mob-4">
              ${(saveslot)? `<img class="SaveIcon marginless" style="width: 100%; height: auto; border-radius: 6px" src="assets/images/save.jpg" />` 
            
                : 
                
                `<div class="EmptySaveSlotFrame border-box-sizing" style="width: 100%; aspect-ratio: 1 / 1; border-radius: 6px">Empty Slot</div>`

              }

              </div>

              <div class="SavePanel column lg-10 md-8 mob-12">

                <div class="SaveTitle row gray9 font-size-20 font-weight-500">
          
                ${(i === 0)? `Autosave` : `Save ${i}`}</div>
                <div class="SaveDesc row gap1">
                  <div class="SaveText" style="color: var(--color-gray-14); font-size: 1.4rem; font-weight: 300;">${(saveslot)? `${saveslot.dateStr}` : `Empty Save`}</div>
                  ${(saveslot)? 
                    `<div class="SaveEllipse"></div>
                  <div class="SaveText" style="color: var(--color-gray-14); font-size: 1.4rem; font-weight: 300;">${saveslot.timeStr}</div>
                  <div class="SaveEllipse removableEllipse412"></div>
                  <div class="SaveText" style="color: var(--color-gray-14); font-size: 1.4rem; font-weight: 300;">Stories Completed ${saveslot.StoriesCompletedNum}/${saveslot.TotalNumOfStories}</div>` 
                    : 
                    ``}
                  
                </div>

                <div id="SavesButtonCanva${i}" class="SavesButtonCanva" style="position: relative;">
                  <div id="SavesButtonArea${i}" class="row SavesButtonArea transition-cubic-bezier">
                      
                  
                  </div>

                  <div id="SavesButtonTempArea${i}" class="SavesButtonTempArea transition-cubic-bezier gray9 ">
                      
                  </div>
                
                </div>

                


              </div>

      `;
  
      container3.appendChild(y);
  
  };
  
  loadSaveButtons();
}


function loadSaveButtons() {
  for (let i = 1; i < totalSavesCount; i++) {

    const container = document.getElementById("SavesButtonArea" + i);

    const saveButtonBox = document.createElement('div');

    saveButtonBox.className = "btn btn--custom save-click-button";

    saveButtonBox.innerHTML = "Save";



    const loadButtonBox = document.createElement('div');

    loadButtonBox.className = "btn btn--primary";

    loadButtonBox.innerHTML = "Load";



    const copyButtonBox = document.createElement('div');

    copyButtonBox.className = "btn";

    copyButtonBox.innerHTML = "Copy Data";



    const pasteButtonBox = document.createElement('div');

    pasteButtonBox.className = "btn";

    pasteButtonBox.innerHTML = "Paste Data";

    

    const saveExists = localStorage.getItem("data" + i);


    

    
    saveButtonBox.addEventListener('click', ()=> {
      hideAllSaveTempAreas()

      if(localStorage.getItem("data" + i)) {
        const area = document.getElementById("SavesButtonTempArea" + i);


        

        area.innerHTML = `Are you sure you want to overwrite this save?`;

        const yesanchor = document.createElement('a');
        const noanchor = document.createElement('a');

        yesanchor.innerHTML = "Yes";
        noanchor.innerHTML="No";

        area.appendChild(yesanchor);
        area.appendChild(noanchor);

        yesanchor.addEventListener('click', ()=> {
          forcedSave(i);
        })

        noanchor.addEventListener('click', ()=> {
          hideAllSaveTempAreas();
        })




        showSaveTempArea(i);

      } else {
        forcedSave(i);

      }

      
    })

    loadButtonBox.addEventListener('click', ()=> {
      hideAllSaveTempAreas()

      
        const area = document.getElementById("SavesButtonTempArea" + i);


        

        area.innerHTML = `Are you sure you want to load this save and overwrite your current data?`;

        const yesanchor = document.createElement('a');
        const noanchor = document.createElement('a');

        yesanchor.innerHTML = "Yes";
        noanchor.innerHTML="No";

        area.appendChild(yesanchor);
        area.appendChild(noanchor);

        yesanchor.addEventListener('click', ()=> {
          loadSave(i);
          startGame();
          loadSavesPage();
        })

        noanchor.addEventListener('click', ()=> {
          hideAllSaveTempAreas();
        })




        showSaveTempArea(i);

    })


    copyButtonBox.addEventListener('click', ()=> {
      hideAllSaveTempAreas();

      if(localStorage.getItem("data" + i)) {
        


        const area = document.getElementById("SavesButtonTempArea" + i);


        area.innerHTML = "";

        const alertBox = document.createElement('div');
        alertBox.className = "alert-box alert-box--success"; 
        
        alertBox.innerHTML =`Save ${i} copied to clipboard.<span class="alert-box__close"></span>`;

        const savetext = ObjectToEncryptedJSON(JSON.parse(localStorage.getItem("data" + i))) ;

        if(!savetext) {
          alertBox.className = "alert-box alert-box--error"; 
          alertBox.innerHTML =`Save ${i} was not found. Try again.<span class="alert-box__close"></span>`;
        } else {

          try {
            navigator.clipboard.writeText(savetext);
        } catch (err) {
            console.error('Failed to copy save ${i}.', err);
            alertBox.className = "alert-box alert-box--error"; 
          alertBox.innerHTML =`Failed to copy. Try again.<span class="alert-box__close"></span>`;
        }
                 
        }

        area.appendChild(alertBox);

        saveAlertMessagesXButtonActivate(alertBox);

        showSaveTempArea(i);

        
    }});


    pasteButtonBox.addEventListener('click', ()=> {
      hideAllSaveTempAreas();
      currentSave = i;
      if(localStorage.getItem("data" + i)) {
        const area = document.getElementById("SavesButtonTempArea" + i);


        

        area.innerHTML = `Are you sure you want to overwrite this save?`;

        const yesanchor = document.createElement('a');
        const noanchor = document.createElement('a');

        yesanchor.innerHTML = "Yes";
        noanchor.innerHTML="No";

        area.appendChild(yesanchor);
        area.appendChild(noanchor);

        yesanchor.addEventListener('click', ()=> {
          
          pasteLoadProcess();
        })

        noanchor.addEventListener('click', ()=> {
          hideAllSaveTempAreas();
        })




        showSaveTempArea(i);

      } else {
        pasteLoadProcess();

      }
      
      
      
    })

function pasteLoadProcess() {
      const i = currentSave;
      const area = document.getElementById("SavesButtonTempArea" + i);

      area.innerHTML= `<div class="load-save-form">
                            
                        </div>`;

      const loadSaveDiv = area.querySelector(".load-save-form");

      const form = document.createElement('form');

      form.id = "custom-form"; form.className = "save-form row"; form.noValidate = true;

      form.innerHTML = `
                        <input type="text" name="save-data" id="form-data" class="text-center padless marginless" placeholder="Enter Your Save Data" minlength="1000" autocomplete="off">
                        <input type="submit" name="loadFromString" value="Load" class="btn btn--custom save-click-button" style="margin: auto; padding: 1rem 2rem; height: auto; line-height: 1;">
                        <div id="returnBtn" class="btn new-btn" style= "margin: auto; padding: 1rem 2rem; height: auto; line-height: 1;">Return</div>
                        <div class="form-status flex-centered"></div>
                      `;
      loadSaveDiv.appendChild(form);

      

      area.querySelector("#returnBtn").addEventListener('click', () => {
        hideAllSaveTempAreas();
      })
      
      ssFormSubmission(form, onSuccussfulPaste);
                           

      showSaveTempArea(i);
}



    container.appendChild(loadButtonBox);

    container.appendChild(saveButtonBox);

    container.appendChild(copyButtonBox);

    container.appendChild(pasteButtonBox);

    if(!saveExists) {
      loadButtonBox.style.display = "none";
      copyButtonBox.style.display = "none";
    }


    



  }
}


function hideSaveTempArea(i) {
  document.getElementById("SavesButtonArea" + i).style.opacity = 1;
  document.getElementById("SavesButtonArea" + i).style.zIndex = 5;
  document.getElementById("SavesButtonTempArea" + i).style.opacity = 0;
  document.getElementById("SavesButtonTempArea" + i).style.zIndex = -99;
}

function showSaveTempArea(i) {
  document.getElementById("SavesButtonArea" + i).style.opacity = 0;
  document.getElementById("SavesButtonArea" + i).style.zIndex = -99;
  document.getElementById("SavesButtonTempArea" + i).style.opacity = 1;
  document.getElementById("SavesButtonTempArea" + i).style.zIndex = 5;
}

function hideAllSaveTempAreas() {
  for(let i=0; i < totalSavesCount; i++) {
    hideSaveTempArea(i)
  }
}

function forcedSave(i) {
  Save(i);
  loadSavesPage()
}

function saveAlertMessagesXButtonActivate(alertbox) {
  alertbox.addEventListener('click', function(event) {
    if (event.target.matches('.alert-box__close')) {
        event.stopPropagation();
        event.target.parentElement.classList.add('hideit');

        setTimeout(function(){
          alertbox.style.display = 'none';
        }, 500)

        hideAllSaveTempAreas();
    }
});
}

const ssFormSubmission = function(customForm, onCompletion) {

  if (!customForm) return;

  customForm.setAttribute('novalidate', true);

  function hasError(field) {
      if (field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') {

        return;
      } 

      // Get validity
      let validity = field.validity;
      // If field is required and empty
      if (validity.valueMissing) return 'Please enter save data.';
      
      if (field.validity.tooShort) return "Code too short."

      try {
          const tempData = encryptedJSONToObject(field.value);
          if (tempData) {
              const i = currentSave;
              localStorage.setItem("data" + i, JSON.stringify(tempData))
              return;
           }
          
          
      } catch {
          console.log("Save data invalid.")
          return "Save data invalid."
      }

      
      return 'The value you entered for this field is invalid.';

  };

  function showError(field, error) {
      let id = field.id || field.name;
      if (!id) return;

      let errorMessage = field.form.querySelector('.form-status');

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


const onSuccussfulPaste = function() {
  var i = currentSave;
  startGame();
  loadSavesPage();
  const area = document.getElementById("SavesButtonTempArea" + i);
  area.innerHTML = "";

  const alertBox = document.createElement('div');
  alertBox.className = "alert-box alert-box--success"; 
  
  alertBox.innerHTML =`Save ${i} updated successfully.<span class="alert-box__close"></span>`;


  area.appendChild(alertBox);

  saveAlertMessagesXButtonActivate(alertBox);

  showSaveTempArea(i);
}
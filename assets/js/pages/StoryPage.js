
function openStory(story) {
    
  
    

    const bcg = getStoryBackground(story);
    const clr = getStoryColor(story);
  
    var root = document.documentElement;
  
    
  
    var chapter = story.currentChapter;

    if (!chapter) {
      story.currentChapter = story.chapters[0];
      chapter = story.currentChapter;
    }
    
    currentStory = story;
    currentChapter = chapter;
  
    baseImagesFolder = `assets/images/stories/${story.num}/chapters/${chapter.num}`;
  
    baseScriptFolder = `assets/library/${story.num}`;
  
    passagePath = baseScriptFolder + '/' +story.num + "-" + chapter.num + ".js"
  
    
  
  
    var container = document.getElementById('StoryPage');

    container.className = "StoryPage-" + story.num + "-" + chapter.num;

    container.innerHTML = '';
  
    var ChapterBanner = document.createElement('section');

    ChapterBanner.className = "s-intro target-section";

    ChapterBanner.style.display = "";

    ChapterBanner.innerHTML = `
                <div class="s-intro__bg rellax" data-rellax-speed="-5"></div>

                <div class="row s-intro__content">

                    <div class="column lg-12 s-intro__content-inner">

                        
                        <h1 class="s-intro__title" style="margin-bottom: 80px">
                        ${getStoryTitle(story)}
                        </h1>		

                        
                        <div id="trial-button-area" class="s-intro__more">
                            <a id="intro-button" class="smoothscroll btn btn--stroke s-intro__more-btn" href="#section1">
                                ${chapter.name}
                            </a>
                        </div>	
                    </div> <!-- s-intro__content-inner -->

                </div> <!-- s-intro__content -->`;

    const bg = ChapterBanner.querySelector('.s-intro__bg');



    bg.style.backgroundImage = `url(${baseImagesFolder}/cover.jpg)`;


  
    container.appendChild(ChapterBanner);

    switchToPage("StoryPage");

    if (bcg) {
        root.style.setProperty('--story-background', bcg);
        } else {
        root.style.setProperty('--story-background', 'transparent');
        }
    
        if (clr) {
          root.style.setProperty('--story-color', clr);
          } else {
          root.style.setProperty('--story-color', "white");
        }
      

    const storyContent = document.createElement('section');

    storyContent.id = "story-content"

    container.appendChild(storyContent);
  
  
    clearLoadedScripts();
    loadAndExecuteScript(passagePath);
    
  }

const animateOnScrollStory = function() {

    const blocksDown = document.querySelectorAll('[data-animate-block]');
    const blocksLeft = document.querySelectorAll('[data-animate-block-left]');
    const blocksRight = document.querySelectorAll('[data-animate-block-right]');
    const blocks = arrayUnion(blocksRight, arrayUnion(blocksDown, blocksLeft)) 
    if (!blocks) return;



    window.addEventListener('scroll', animateOnScroll);

    function animateOnScroll() {

        let scrollY = window.scrollY;


        blocks.forEach(function(current) {

            const viewportHeight = window.innerHeight;
            const triggerTop = (current.getBoundingClientRect().top + window.scrollY + (viewportHeight * .2)) - viewportHeight;
            const blockHeight = current.offsetHeight;
            const blockSpace = triggerTop + blockHeight;
            const inView = scrollY > triggerTop && scrollY <= blockSpace;
            const isAnimated = current.classList.contains('ss-animated');

            if (inView && (!isAnimated)) {

                if (current.hasAttribute('data-animate-block')) {
                    anime({
                    targets: current,
                    opacity: [0, 1],
                    translateY: [100, 0],
                    delay: anime.stagger(200, {start: 200}),
                    duration: 800,
                    easing: 'easeInOutCubic',
                    begin: function(anim) {
                        current.classList.add('ss-animated');
                    }
                });
                }

                if (current.hasAttribute('data-animate-block-left')) {
                    anime({
                    targets: current,
                    opacity: [0, 1],
                    translateX: [-100, 0],
                    delay: anime.stagger(200, {start: 200}),
                    duration: 800,
                    easing: 'easeInOutCubic',
                    begin: function(anim) {
                        current.classList.add('ss-animated');
                    }
                });
                }

                if (current.hasAttribute('data-animate-block-right')) {
                    anime({
                    targets: current,
                    opacity: [0, 1],
                    translateX: [100, 0],
                    delay: anime.stagger(200, {start: 200}),
                    duration: 800,
                    easing: 'easeInOutCubic',
                    begin: function(anim) {
                        current.classList.add('ss-animated');
                    }
                });
                }

                
            }
        });
    }

};
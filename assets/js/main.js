
(function(html) {

    'use strict';

    /* animations
    * -------------------------------------------------- */
    const tl = anime.timeline( {
        easing: 'easeInOutCubic',
        duration: 800,
        autoplay: false
    })
    .add({
        targets: '#loader',
        opacity: 0,
        duration: 1000,
        begin: function(anim) {
            window.scrollTo(0, 0);
        }
    })
    .add({
        targets: '#preloader',
        opacity: 0,
        complete: function(anim) {
            document.querySelector("#preloader").style.visibility = "hidden";
            document.querySelector("#preloader").style.display = "none";
        }
    })
    .add({
        targets: ['.s-header__logo', '.s-header__menu-toggle'],
        opacity: [0, 1]
    }, '-=200')
    .add({
        targets: ['.s-intro__pretitle', '.s-intro__title', '.s-intro__more'],
        translateY: [100, 0],
        opacity: [0, 1],
        delay: anime.stagger(200)
    }, '-=400')
    .add({
        targets: ['.s-intro__social', '.s-intro__scroll'],
        opacity: [0, 1],
        delay: anime.stagger(200)
    }, '-=200');


   /* preloader
    * -------------------------------------------------- */
    const ssPreloader = function() {

        const preloader = document.querySelector('#preloader');
        if (!preloader) return;

        html.classList.add('ss-preload');
        
        window.addEventListener('load', function() {
            html.classList.remove('ss-preload');
            html.classList.add('ss-loaded');
            tl.play();
        });

    }; // end ssPreloader


    /* parallax
    * -------------------------------------------------- */
    

    function setLandingpageIntroHeight() {
        const introSection = document.getElementById('intro');
    
        introSection.style.height = `${getViewPortHeight}px`;
        
        // const MainSection = document.getElementById('MainSection');
        
        // MainSection.style.height = `${window.innerHeight}px`;
    }

    

    

    


   /* Initialize
    * ------------------------------------------------------ */
    (function ssInit() {
        loadMainPageBricks();
        ssPreloader();
        ssParallax();
        ssMenuOnScrolldown();
        ssAnimateOnScroll();
        ssOffCanvas();
        ssMasonry();


        if(!data.hasOwnProperty('patreonCode')) data.patreonCode = '';

        if (true) {

            removeAllSaves();

            init();

        
        }
        updateGameStartButton();


        ssPhotoswipe();
        ssAlertBoxes();
        ssBackToTop();
        ssMoveTo();

        

        setLandingpageIntroHeight();

        window.addEventListener('resize', setLandingpageIntroHeight);

        

    })();
    

// New Functions






  // Adjust the height on window resize







})(document.documentElement);




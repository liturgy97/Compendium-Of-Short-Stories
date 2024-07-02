
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
    const ssParallax = function() { 

        const rellax = new Rellax('.rellax');

    }; // end ssParallax


   /* menu on scrolldown
    * ------------------------------------------------------ */
    const ssMenuOnScrolldown = function() {

        const menuToggle = document.querySelector('.s-header__menu-toggle');
        const triggerHeight = 150;


        window.addEventListener('scroll', function () {

            let loc = window.scrollY;

            if (loc > triggerHeight) {
                menuToggle.classList.add('opaque');
            } else {
                menuToggle.classList.remove('opaque');
            }

        });

    }; // menu on scrolldown


   /* offcanvas menu
    * ------------------------------------------------------ */
    const ssOffCanvas = function() {

        const menuToggle  = document.querySelector('.s-header__menu-toggle');
        const nav         = document.querySelector('.s-header__nav');
        const closeButton = document.querySelector('.s-header__nav-close-btn');
        const siteBody    = document.querySelector('body');

        if (!(menuToggle && nav)) return;

        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            siteBody.classList.add('menu-is-open');
        });

        closeButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            if (siteBody.classList.contains('menu-is-open')) {
                siteBody.classList.remove('menu-is-open');
            }
        });

        siteBody.addEventListener('click', function(e) {
            if(!(e.target.matches('.s-header__nav, .smoothscroll'))) {
                closeButton.dispatchEvent(new Event('click'));
            }
        });

    }; // end ssOffcanvas


   /* masonry
    * ------------------------------------------------------ */
    const ssMasonry = function() {

        const containerBricks = document.querySelector('.bricks');
        if (!containerBricks) return;

        imagesLoaded(containerBricks, function() {

            const msnry = new Masonry(containerBricks, {
                itemSelector: '.brick',
                columnWidth: '.brick',
                percentPosition: true,
                resize: true
            });

        });

    }; // end ssMasonry


   /* animate elements if in viewport
    * ------------------------------------------------------ */
    const ssAnimateOnScroll = function() {

        const blocks = document.querySelectorAll('[data-animate-block]');
        if (!blocks) return;

        window.addEventListener('scroll', animateOnScroll);

        function animateOnScroll() {

            let scrollY = window.pageYOffset;

            blocks.forEach(function(current) {

                const viewportHeight = window.innerHeight;
                const triggerTop = (current.getBoundingClientRect().top + window.scrollY + (viewportHeight * .2)) - viewportHeight;
                const blockHeight = current.offsetHeight;
                const blockSpace = triggerTop + blockHeight;
                const inView = scrollY > triggerTop && scrollY <= blockSpace;
                const isAnimated = current.classList.contains('ss-animated');

                if (inView && (!isAnimated)) {

                    anime({
                        targets: current.querySelectorAll('[data-animate-el]'),
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
            });
        }

    }; // end ssAnimateOnScroll


   /* swiper
    * ------------------------------------------------------ */ 
    const ssSwiper = function() {

        const clientsSwiper = new Swiper('.clients', {

            slidesPerView: 3,
            spaceBetween: 6,
            slideClass: 'clients__slide',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                // when window width is > 500px
                501: {
                    slidesPerView: 4,
                    spaceBetween: 16
                },
                // when window width is > 900px
                901: {
                    slidesPerView: 5,
                    spaceBetween: 32
                },
                // when window width is > 1200px
                1201: {
                    slidesPerView: 6,
                    spaceBetween: 40
                }
            }
        });

        const testimonialsSwiper = new Swiper('.testimonial-slider', {

            slidesPerView: 1,
            effect: 'slide',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        });

    }; // end ssSwiper


    /* photoswipe
    * ----------------------------------------------------- */
    const ssPhotoswipe = function() {

        const items = [];
        const pswp = document.querySelectorAll('.pswp')[0];
        const folioItems = document.querySelectorAll('.folio-item');

        if (!(pswp && folioItems)) return;

        folioItems.forEach(function(folioItem) {

            let folio = folioItem;
            let thumbLink = folio.querySelector('.folio-item__thumb-link');
            let title = folio.querySelector('.folio-item__title');
            let caption = folio.querySelector('.folio-item__caption');
            let titleText = '<h4>' + title.innerHTML + '</h4>';
            let captionText = caption.innerHTML;
            let href = thumbLink.getAttribute('href');
            let size = thumbLink.dataset.size.split('x'); 
            let width  = size[0];
            let height = size[1];

            let item = {
                src  : href,
                w    : width,
                h    : height
            }

            if (caption) {
                item.title = titleText.trim() + captionText.trim();
            }

            items.push(item);

        });

        // bind click event
        folioItems.forEach(function(folioItem, i) {

            let thumbLink = folioItem.querySelector('.folio-item__thumb-link');

            thumbLink.addEventListener('click', function(event) {

                event.preventDefault();

                let options = {
                    index: i,
                    showHideOpacity: true
                }

                // initialize PhotoSwipe
                let lightBox = new PhotoSwipe(pswp, PhotoSwipeUI_Default, items, options);
                lightBox.init();
            });

        });

    };  // end ssPhotoSwipe


   /* alert boxes
    * ------------------------------------------------------ */
    const ssAlertBoxes = function() {

        const boxes = document.querySelectorAll('.alert-box');
  
        boxes.forEach(function(box){

            box.addEventListener('click', function(event) {
                if (event.target.matches('.alert-box__close')) {
                    event.stopPropagation();
                    event.target.parentElement.classList.add('hideit');

                    setTimeout(function(){
                        box.style.display = 'none';
                    }, 500)
                }
            });
        })

    }; // end ssAlertBoxes


    /* Back to Top
    * ------------------------------------------------------ */
     const ssBackToTop = function() {

        const pxShow = 900;
        const goTopButton = document.querySelector(".ss-go-top");

        if (!goTopButton) return;

        // Show or hide the button
        if (window.scrollY >= pxShow) goTopButton.classList.add("link-is-visible");

        window.addEventListener('scroll', function() {
            if (window.scrollY >= pxShow) {
                if(!goTopButton.classList.contains('link-is-visible')) goTopButton.classList.add("link-is-visible")
            } else {
                goTopButton.classList.remove("link-is-visible")
            }
        });

    }; // end ssBackToTop



   /* smoothscroll
    * ------------------------------------------------------ */
    const ssMoveTo = function() {

        const siteBody    = document.querySelector('body');

        const easeFunctions = {
            easeInQuad: function (t, b, c, d) {
                t /= d;
                return c * t * t + b;
            },
            easeOutQuad: function (t, b, c, d) {
                t /= d;
                return -c * t* (t - 2) + b;
            },
            easeInOutQuad: function (t, b, c, d) {
                t /= d/2;
                if (t < 1) return c/2*t*t + b;
                t--;
                return -c/2 * (t*(t-2) - 1) + b;
            },
            easeInOutCubic: function (t, b, c, d) {
                t /= d/2;
                if (t < 1) return c/2*t*t*t + b;
                t -= 2;
                return c/2*(t*t*t + 2) + b;
            }
        }

        const triggers = document.querySelectorAll('.smoothscroll');
        
        const moveTo = new MoveTo({
            tolerance: 0,
            duration: 1200,
            easing: 'easeInOutCubic',
            container: window,
            callback: function (target) {
                if (siteBody.classList.contains('menu-is-open')) {
                    siteBody.classList.remove('menu-is-open');
                }
            }
        }, easeFunctions);

        triggers.forEach(function(trigger) {
            moveTo.registerTrigger(trigger);
        });

    }; // end ssMoveTo


   /* Initialize
    * ------------------------------------------------------ */
    (function ssInit() {

        ssPreloader();
        ssParallax();
        ssMenuOnScrolldown();
        ssAnimateOnScroll();
        ssOffCanvas();
        ssMasonry();
        ssSwiper();
        ssPhotoswipe();
        ssAlertBoxes();
        ssBackToTop();
        ssMoveTo();

    })();

})(document.documentElement);





// New Functions

function setLandingpageIntroHeight() {
    const introSection = document.getElementById('intro');
    const root = document.documentElement;

    root.style.setProperty('--main-color', 'green');
    introSection.style.height = `${window.innerHeight}px`;
  }

setLandingpageIntroHeight();

  // Adjust the height on window resize
window.addEventListener('resize', setLandingpageIntroHeight);
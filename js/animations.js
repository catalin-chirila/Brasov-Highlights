window.onload = function() {
    // Deals with the animation of the title.
    $('#title').delay(500).queue('fx', function() { $(this).addClass("title-fade-in"); });
    $('#brasov').delay(2600).queue('fx', function() { $(this).addClass("brasov-fade-in"); });

    /**
     * Scroll the page based on the arguments it receives.
     *
     * @param element - The element that needs to be clicked in order to start the scrolling.
     * @param target - The destination element.
     * @param additionalCoordinate is used to adjust where the scrolling ends.
     * @param speed - The speed of the scrolling.
     */
    function scrollTo(element, target, additionalCoordinate, speed) {
        $(element).click(function (){
            $('html, body').animate({
                scrollTop: $(target).offset().top + additionalCoordinate
            }, speed);
        });
    }

    scrollTo("#fastFacts", ".row:nth-of-type(3)", -280, 1000);
    scrollTo("#councilSquare", ".row:nth-of-type(5)", -280, 1000);
    scrollTo("#blackChurch", ".row:nth-of-type(6)", -280, 1000);
    scrollTo("#defensiveFortifications", ".row:nth-of-type(7)", -280, 1000);
    scrollTo("#catherineGate", ".row:nth-of-type(8)", -280, 1000);
    scrollTo("#scheiDiscrit", ".row:nth-of-type(9)", -280, 1000);
    scrollTo("#nicholasChurch", ".row:nth-of-type(10)", -280, 1000);
    scrollTo("#tampaMountain", ".row:nth-of-type(11)", -300, 1000);
    scrollTo("#artMuseum", ".row:nth-of-type(12)", -280, 1000);
    scrollTo("#freeTour", ".row:nth-of-type(13)", 0, 1000);
    scrollTo("#upButton", "#fastFacts", 0, 1000);

    /**
     *  Displays the scroll up button based on the page position.
     */
    function showScrollUpButton() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            document.getElementById("upButton").style.display = "block";
        } else {
            document.getElementById("upButton").style.display = "none";
        }
    }

    // Displays the scroll up button when the page is scrolled.
    $(window).on("scroll", function() {
        showScrollUpButton();
    });

    // Displays the scroll up button when the page is loaded.
    showScrollUpButton();

    // Scroll Magic controller used to create scrolling animations on various elements.
    var controller = new ScrollMagic.Controller();

    /**
     * Adds a scrolling animation to an element.
     *
     * @param element - The element that will be animated.
     * @param offsetValue - The animation trigger coordinate relative to the element's position.
     * @param cssClass - The css class that will be toggled in order to create an animation.
     */
    function addScrollMagicAnimation(element, offsetValue, cssClass) {
        $(element).each(function () {
            var currentElement = this;

            var scene = new ScrollMagic.Scene({
                triggerElement: currentElement,
                offset: offsetValue
            })
                .setClassToggle(currentElement, cssClass)
                .addTo(controller);
        });
    }

    addScrollMagicAnimation(".cardImage", -250, "fade-in");
    addScrollMagicAnimation(".cardImage", 300, "fade-out-img");
    addScrollMagicAnimation(".cardText", -250, "fade-in");
    addScrollMagicAnimation(".cardText", 300, "fade-out-cardText");
    addScrollMagicAnimation(".cardTextSeparated", -250, "fade-in");
    addScrollMagicAnimation(".cardTextSeparated", 430, "fade-out-cardTextSeparated");

    // Deactivates animations on width resolution lower than 1200.
    controller.scrollPos(function () {
        if(window.innerWidth >= 1200){
            return window.pageYOffset;
        } else {
            return 0;
        }
    });
};

// Playing Lottie =========================================
var scrollerSmallPlayer = [];

stylesheet = document.styleSheets[1];
var loadingContainer = document.getElementById('loadingContainer');

var loadingLottieItem = bodymovin.loadAnimation({
    wrapper: loadingContainer,
    animType: 'svg',
    loop: false,
    autoplay: false,
    animationData: loadingJson,


});
loadingLottieItem.addEventListener('complete', function(){
    $('.loader-wrapper').fadeOut();
    heroItem.play();
    document.getElementById('menu').style.opacity = 1;
})

loadingLottieItem.addEventListener('DOMLoaded', function(){
    console.log('amination is already loaded');
})


var heroContainer = document.getElementById('heroContainer');
var heroItem = bodymovin.loadAnimation({
    wrapper: heroContainer,
    animType: 'svg',
    loop: false,
    autoplay: false,
    animationData: heroJson,
});

// setting size of loading element & hero banner -------

var loadingSVG = document.getElementById('loadingContainer').getElementsByTagName('svg')[0];
loadingSVG.style.width = 'auto';
loadingSVG.style.height = 'auto';
loadingSVG.style.scale = '1';
if(window.innerHeight > window.innerWidth){
    // portrait screen
    loadingSVG.style.scale = window.innerHeight/loadingSVG.getBoundingClientRect().height + 0.2;
}
else{
    // landscape screen
    loadingSVG.style.scale = window.innerWidth/loadingSVG.getBoundingClientRect().width;

}

var heroBannerSVG = document.getElementById('heroContainer').getElementsByTagName('svg')[0];

heroBannerSVG.style.width = 'auto';
heroBannerSVG.style.height = 'auto';
if(isMobileDevice()){
    heroBannerSVG.style.scale = (7/3)*window.innerWidth/heroBannerSVG.getBoundingClientRect().width;
}
else{
    heroBannerSVG.style.scale = window.innerWidth/heroBannerSVG.getBoundingClientRect().width;
}

// page transition ========================================
$(window).on("load", function () {
    loadingLottieItem.play();

    // Scroll trigger ========================================
    gsap.to('#tagline', {
        scrollTrigger: {
        trigger: '.hero-warper',
        start: 'bottom 60%',
        // markers: true,
        toggleActions: "restart none none reverse",
        },
        duration: 1,
        scale: 0,
        opacity: 0,
    })
    
    gsap.to('.header', {
        scrollTrigger: {
        trigger: '.hero-warper',
        start: 'bottom 60%',
        toggleActions: "restart none none reverse", 
        },
        duration: 1,
        top: '16',
        transform: 'translate(0%, 0%)',
    })

    gsap.to('#headerLogo', {
        scrollTrigger: {
        trigger: '.hero-warper',
        start: 'bottom 60%',
        toggleActions: "restart none none reverse", 
        },
        duration: 1,
        width: '120px',
        height: '30px',
    })

    gsap.to('#headerLogo *', {
        scrollTrigger: {
        trigger: '#aboutDeglacer',
        start: 'top 1%',
        end: 'bottom top',
        toggleActions: "restart reverse restart reverse", // onEnter, onLeave, onEnterBack, and onLeaveBack -> sẽ nhận 1 trong các giá trị sau: "play", "pause", "resume", "reset", "restart", "complete", "reverse", and "none".
        // markers: true,
        },
        duration: 1,
        fill: '#00533E',
        ease: "Power3.inOut",
    })


    // Initial loading --------
    // load css to all meal image.

    for(var i = 0; i < mealImgContEl.length; i++){
        // mealImgContEl[i].style.height = 0;
        mealImgContEl[i].getElementsByClassName('meal-image')[0].style.display = 'none';

    }


});

// Scroll Trigger about Deglacer Section ===============================
const text = new SplitType('.showTextAnimation', { types: 'words, chars' });


// Show text
gsap.fromTo('#aboutDeglacer .char', {
    opacity: 0.3,
    // y: 40,
    scale: 0,
}, {
    scrollTrigger: {
        trigger: '#aboutDeglacer .content',
        start: 'top bottom-=80',
        end: 'bottom 80%',
        scrub: true,
        toggleActions: "restart none none reverse", 
        // markers: true

    },
    duration: 1,
    scale: 1,
    opacity: 1,
    ease: "Power3.inOut",
    stagger: 0.1,
});

// Text fade away to avoid image
gsap.fromTo('#aboutDeglacer .char', {
    opacity: 1,
}, {
    scrollTrigger: {
        trigger: '#aboutDeglacer .content',
        start: 'top 370px',
        end: 'bottom 400px',
        scrub: true,
        toggleActions: "restart none none reverse", // onEnter, onLeave, onEnterBack, and onLeaveBack -> sẽ nhận 1 trong các giá trị sau: "play", "pause", "resume", "reset", "restart", "complete", "reverse", and "none".
        // markers: true
    },
    duration: 1,
    opacity: 0.1,
    ease: "none",
    stagger: 0.1,
});

var aboutDeglacerChars = gsap.utils.toArray('.char');
var imageTriggerElements = [aboutDeglacerChars[28], aboutDeglacerChars[282], aboutDeglacerChars[663], aboutDeglacerChars[774]];
var mealImgContEl = document.getElementsByClassName('meal-item-image-container');


// Show image in About Us section

window.addEventListener("scroll", (event) => {
	if(imageTriggerElements[3].style.transform == 'translate(0px, 0px)'){
		document.querySelector('#aboutUsImg4').style.opacity = 1;
        document.querySelector('#aboutUsImg4').style.transform = "rotate(4deg)";
        document.querySelector('#aboutUsImg4').style.width = "400px";
        document.querySelector('#aboutUsImg4').style.marginLeft = "-200px";

		document.querySelector('#aboutUsImg3').style.opacity = 1;
        document.querySelector('#aboutUsImg3').style.transform = "rotate(-2deg)";
        document.querySelector('#aboutUsImg3').style.width = "380px";
        document.querySelector('#aboutUsImg3').style.marginLeft = "-190px";

		document.querySelector('#aboutUsImg2').style.opacity = 1;
        document.querySelector('#aboutUsImg2').style.transform = "rotate(5deg)";
        document.querySelector('#aboutUsImg2').style.width = "360px";
        document.querySelector('#aboutUsImg2').style.marginLeft = "-180px";

        document.querySelector('#aboutUsImg1').style.opacity = 1;
        document.querySelector('#aboutUsImg1').style.transform = "rotate(-3deg)";
        document.querySelector('#aboutUsImg1').style.width = "340px";
        document.querySelector('#aboutUsImg1').style.marginLeft = "-170px";
	}
	else if(imageTriggerElements[2].style.transform == 'translate(0px, 0px)'){
		document.querySelector('#aboutUsImg4').style.opacity = 0;
        document.querySelector('#aboutUsImg4').style.transform = "rotate(-2deg)";
        document.querySelector('#aboutUsImg4').style.width = "400px";
        document.querySelector('#aboutUsImg4').style.marginLeft = "-200px";

        document.querySelector('#aboutUsImg3').style.opacity = 1;
        document.querySelector('#aboutUsImg3').style.transform = "rotate(8deg)";
        document.querySelector('#aboutUsImg3').style.width = "400px";
        document.querySelector('#aboutUsImg3').style.marginLeft = "-200px";

		document.querySelector('#aboutUsImg2').style.opacity = 1;
        document.querySelector('#aboutUsImg2').style.transform = "rotate(-3deg)";
        document.querySelector('#aboutUsImg2').style.width = "380px";
        document.querySelector('#aboutUsImg2').style.marginLeft = "-190px";

        document.querySelector('#aboutUsImg1').style.opacity = 1;
        document.querySelector('#aboutUsImg1').style.transform = "rotate(1deg)";
        document.querySelector('#aboutUsImg1').style.width = "360px";
        document.querySelector('#aboutUsImg1').style.marginLeft = "-180px";
	}
	else if(imageTriggerElements[1].style.transform == 'translate(0px, 0px)'){
		document.querySelector('#aboutUsImg4').style.opacity = 0;
        document.querySelector('#aboutUsImg4').style.transform = "rotate(5deg)";
        document.querySelector('#aboutUsImg4').style.width = "400px";
        document.querySelector('#aboutUsImg4').style.marginLeft = "-200px";

		document.querySelector('#aboutUsImg3').style.opacity = 0;
        document.querySelector('#aboutUsImg3').style.transform = "rotate(-2deg)";
        document.querySelector('#aboutUsImg3').style.width = "400px";
        document.querySelector('#aboutUsImg3').style.marginLeft = "-200px";

		document.querySelector('#aboutUsImg2').style.opacity = 1;
        document.querySelector('#aboutUsImg2').style.transform = "rotate(4deg)";
        document.querySelector('#aboutUsImg2').style.width = "400px";
        document.querySelector('#aboutUsImg2').style.marginLeft = "-200px";

        document.querySelector('#aboutUsImg1').style.opacity = 1;
        document.querySelector('#aboutUsImg1').style.transform = "rotate(-3deg)";
        document.querySelector('#aboutUsImg1').style.width = "380px";
        document.querySelector('#aboutUsImg1').style.marginLeft = "-190px";
	}
	else if(imageTriggerElements[0].style.transform == 'translate(0px, 0px)'){
		document.querySelector('#aboutUsImg4').style.opacity = 0;
        document.querySelector('#aboutUsImg4').style.transform = "rotate(-2deg)";
        document.querySelector('#aboutUsImg4').style.width = "400px";
        document.querySelector('#aboutUsImg4').style.marginLeft = "-200px";

		document.querySelector('#aboutUsImg3').style.opacity = 0;
        document.querySelector('#aboutUsImg3').style.transform = "rotate(5deg)";
        document.querySelector('#aboutUsImg3').style.width = "400px";
        document.querySelector('#aboutUsImg3').style.marginLeft = "-200px";

		document.querySelector('#aboutUsImg2').style.opacity = 0;
        document.querySelector('#aboutUsImg2').style.transform = "rotate(-3deg)";
        document.querySelector('#aboutUsImg2').style.width = "400px";
        document.querySelector('#aboutUsImg2').style.marginLeft = "-200px";

        document.querySelector('#aboutUsImg1').style.opacity = 1;
        document.querySelector('#aboutUsImg1').style.transform = "rotate(4deg)";
        document.querySelector('#aboutUsImg1').style.width = "400px";
        document.querySelector('#aboutUsImg1').style.marginLeft = "-200px";
	}

    else{
        document.querySelector('#aboutUsImg4').style.opacity = 0;
        document.querySelector('#aboutUsImg4').style.transform = "rotate(0deg)";
        document.querySelector('#aboutUsImg4').style.width = "400px";
        document.querySelector('#aboutUsImg4').style.marginLeft = "-200px";

		document.querySelector('#aboutUsImg3').style.opacity = 0;
        document.querySelector('#aboutUsImg3').style.transform = "rotate(0deg)";
        document.querySelector('#aboutUsImg3').style.width = "400px";
        document.querySelector('#aboutUsImg3').style.marginLeft = "-200px";

		document.querySelector('#aboutUsImg2').style.opacity = 0;
        document.querySelector('#aboutUsImg2').style.transform = "rotate(0deg)";
        document.querySelector('#aboutUsImg2').style.width = "400px";
        document.querySelector('#aboutUsImg2').style.marginLeft = "-200px";

        document.querySelector('#aboutUsImg1').style.opacity = 0;
        document.querySelector('#aboutUsImg1').style.transform = "rotate(0deg)";
        document.querySelector('#aboutUsImg1').style.width = "400px";
        document.querySelector('#aboutUsImg1').style.marginLeft = "-200px";
    }

// onscroll to hide expanded image. {mark}

    // if(isMobileDevice()){
    //     for(var i = 0; i < mealImgContEl.length; i++){
    //         if(mealImgContEl[i].getElementsByClassName('meal-image')[0].getBoundingClientRect().top < 100){
    //             mealImgContEl[i].getElementsByClassName('meal-image')[0].style.height = 0;
    //         }
    //      }
    // }

});

gsap.fromTo('#aboutDeglacer img', {
    marginTop: '0px',
}, {
    scrollTrigger: {
        trigger: '#aboutDeglacer .content',
        start: 'bottom 400px',
        end: 'bottom top',
        scrub: true,
        toggleActions: "restart none none reverse", // onEnter, onLeave, onEnterBack, and onLeaveBack -> sẽ nhận 1 trong các giá trị sau: "play", "pause", "resume", "reset", "restart", "complete", "reverse", and "none".
        // markers: true
    },
    duration: 1,
    marginTop: '-600px',
    ease: "Power1.inOut",
    stagger: 0.3,
});


// Menu ============================================

var menuLinks = [...document.querySelectorAll('#menu .menu-link')];

gsap.to(menuLinks[0], {
    scrollTrigger: {
    trigger: '#aboutDeglacer',
    start: () => "top " + menuLinks[0].getBoundingClientRect().top,
    end: () => "bottom " + menuLinks[0].getBoundingClientRect().top,
    toggleActions: "restart reverse restart reverse", 
    // markers: true,
    },
    duration: 1,
    color: '#00533E',
})

gsap.to(menuLinks[1], {
    scrollTrigger: {
    trigger: '#aboutDeglacer',
    start: () => "top " + menuLinks[1].getBoundingClientRect().top,
    end: () => "bottom " + menuLinks[1].getBoundingClientRect().top,
    toggleActions: "restart reverse restart reverse", 
    // markers: true,
    },
    duration: 1,
    color: '#00533E',
})

gsap.to(menuLinks[2], {
    scrollTrigger: {
    trigger: '#aboutDeglacer',
    start: () => "top " + menuLinks[2].getBoundingClientRect().top,
    end: () => "bottom " + menuLinks[2].getBoundingClientRect().top,
    toggleActions: "restart reverse restart reverse", 
    // markers: true,
    },
    duration: 1,
    color: '#00533E',
})

gsap.to(menuLinks[3], {
    scrollTrigger: {
    trigger: '#aboutDeglacer',
    start: () => "top " + menuLinks[3].getBoundingClientRect().top,
    end: () => "bottom " + menuLinks[3].getBoundingClientRect().top,
    toggleActions: "restart reverse restart reverse", 
    // markers: true,
    },
    duration: 1,
    color: '#00533E',
})

// ============================================

gsap.to('#menu .reserveCTA .messenger-icon', {
    scrollTrigger: {
    trigger: '#aboutDeglacer',
    start: 'top 90%',
    end: 'bottom 90%',
    // scrub: true,
    toggleActions: "restart reverse restart reverse", 
    // markers: true,
    },
    duration: 0.5,
    backgroundColor: '#00533E',
    ease: "Power3.inOut",
})

gsap.to('.messenger-icon path', {
    scrollTrigger: {
    trigger: '#aboutDeglacer',
    start: 'top 90%',
    end: 'bottom 90%',
    // scrub: true,
    toggleActions: "restart reverse restart reverse", 
    // markers: true,
    },
    duration: 0.5,
    fill: '#E0C0A4',
    ease: "Power3.inOut",
})

gsap.to('#menu .reserveCTA span', {
    scrollTrigger: {
    trigger: '#aboutDeglacer',
    start: 'top 90%',
    end: 'bottom 90%',
    // scrub: true,
    toggleActions: "restart reverse restart reverse", 
    // markers: true,
    },
    duration: 0.5,
    color: '#00533E',
    ease: "Power3.inOut",
})

// Mouse over the images in Contact section ================================================

onmousemove = function(e){
    var xpos = e.clientX - document.getElementById('mask').getBoundingClientRect().left - 130;
    var ypos = e.clientY - document.getElementById('mask').getBoundingClientRect().top - 130;
    document.getElementById('mask').style.maskPosition = xpos + "px " + ypos + "px";
    document.getElementById('mask').style.webkitMaskPosition = xpos + "px " + ypos + "px";
}


const contactUsText = new SplitType('.contactUsShowTextAnimation', { types: 'words, chars' });
var contactUsTextChars = gsap.utils.toArray('.contactUsShowTextAnimation .char');

gsap.fromTo(contactUsTextChars, {
    opacity: 0.3,
}, {
    scrollTrigger: {
        // trigger: contactUsTextChars,
        trigger: '#contactUs .content .text',
        start: 'top 80%',
        end: 'bottom center',
        scrub: true,
        toggleActions: "restart none none reverse", 
        // markers: true
    },
    duration: 1,
    opacity: 1,
    ease: "Power3.inOut",
    stagger: 0.1,
});

var contactUsSeparateLine = document.getElementById('contactUsSeparateLine');
gsap.fromTo(contactUsSeparateLine, {
    width: '0%',
}, {
    scrollTrigger: {
        trigger: '#contactUs .content .text',
        start: 'top 20%',
        end: 'bottom 30%',
        // scrub: true,
        toggleActions: "restart none none reverse", 
        // markers: true
    },
    duration: 1,
    width: '100%',
    ease: "Power3.inOut",
    stagger: 0.1,
});


// Read Menu CSV file =======================================================================
var jsonMenu;
$.ajax({
    url: "menu.csv",
    async: false,
    success: function (csvd) {
        jsonMenu = $.csv.toObjects(csvd);
    },
    dataType: "text",
    complete: function () {
        // call a function on complete 
    }
});

// read events CSV files ----------------------------
var eventsCSV, events = []; //eventsCSV read all event row in CSV file; events filter out the event with display = yes.
$.ajax({
    url: "events.csv",
    async: false,
    success: function (csvd) {
        eventsCSV = $.csv.toObjects(csvd);
    },
    dataType: "text",
    complete: function () {
        // call a function on complete 
    }
});

// split description into multiple paragraph ----------
for (var i = 0; i < eventsCSV.length; i++){
    if (eventsCSV[i].display == 'yes'){
        eventsCSV[i].description = eventsCSV[i].description.split(/\r?\n|\r|\n/g);
        var tempDesciption = '';
        for(var x = 0; x< eventsCSV[i].description.length; x++){
            tempDesciption += eventsCSV[i].description[x] + '<br>';
        }
        eventsCSV[i].description = tempDesciption;

        eventsCSV[i].image = eventsCSV[i].image.split(/\r?\n|\r|\n/g);
        eventsCSV[i].time = eventsCSV[i].time.split(/\r?\n|\r|\n/g);
        eventsCSV[i].pricing = eventsCSV[i].pricing.split(/\r?\n|\r|\n/g);

        var dateString = eventsCSV[i].endDate;
        var dateParts = dateString.split("/");
        eventsCSV[i].endDate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]).getTime(); 

        // check if event end date is already 48 hrs ago from current date.
        if( Date.now() < (eventsCSV[i].endDate + (48*60*60*1000)) ){
            events.push(eventsCSV[i]);
        }
    }
}

// if has event--------------
if (events.length != 0){

    // show event link in the menu mobile and hide about link.
    if(isMobileDevice()){
        document.getElementById('menu').getElementsByClassName('menu-about')[0].style.visibility = 'hidden';
        document.getElementById('menu').getElementsByClassName('menu-about')[0].style.pointerEvents = 'none';
        
        document.getElementById('menu').getElementsByClassName('menu-events')[0].style.visibility = 'visible';
        document.getElementById('menu').getElementsByClassName('menu-events')[0].style.pointerEvents = 'auto';
    }

    for(var i = 0; i < events.length; i++){
        var eventContainer = document.createElement('div');
        eventContainer.classList.add('event-container');
        var eventContainerTime = '';
        for (var j = 0; j < events[i].time.length; j++){
            var time = document.createElement('span');
            eventContainerTime += '<span class = "regular-16 event-time">'+ events[i].time[j] +'</span>';
        }

        // check if event has expired
        var mainCTA = '';
        var secondCTA = '';
        disableBG = '';

        if( Date.now() < eventsCSV[i].endDate ){
            //hasn't expired
            mainCTA =  '<button onclick="showEventDetail('+ i +');">View Details</button>';
            secondCTA = '<a target="_blank" href="https://www.facebook.com/deglacer.hn"><span>Rerseve now</span></a>';
        }
        else{
            // has expired within 48 hrs -> disable.
            mainCTA = '<button style="background-color: #7C746C; color: #1D1D1B">Event has ended</button>';
            secondCTA = '<a target="_blank" href="https://www.facebook.com/deglacer.hn"><span>Contact us for future events</span></a>';
            disableBG = 'filter: grayscale(100%);';
        }


        eventContainer.innerHTML = `
        <div class="event-element">
            <div class="event-content">
                <span class="event-name">${events[i].name}</span>
                <div>
                    <span class="event-location regular-16">${events[i].location}</span>
                    ${eventContainerTime}
                </div>
                ${mainCTA}
                ${secondCTA}
            </div>
            <div class="event-thumbnail" style="background-image: url('../../events/${events[i].thumbnail}'); ${disableBG} "></div>

        </div>
        `;
        document.getElementById('event-container').appendChild(eventContainer);
    }

    // animate event on scroll -------------------------------------------------------

    for(var i = 0; i < document.getElementsByClassName('event-container').length; i++){
        var eventContainer = document.getElementsByClassName('event-container')[i];
        
        gsap.from(eventContainer.getElementsByClassName('event-element')[0], {
            scrollTrigger: {
                // trigger: eventContainer.getElementsByClassName('event-element')[0],
                trigger: eventContainer,
                start: 'top 65%',
                end: 'top top',
                scrub: true, 
                toggleActions: "restart none none reverse", 
                // markers: true
            },
            scale: 0,
            ease: 'none',
            duration: 0.3,
        });

        gsap.from(eventContainer.getElementsByClassName('event-content')[0].children, {
            scrollTrigger: {
                // trigger: eventContainer.getElementsByClassName('event-element')[0],
                trigger: eventContainer,

                start: 'top 30%',
                end: 'center 20%',
                // scrub: true, 
                toggleActions: "restart none none reverse", 
                // markers: true
            },
            opacity: 0,
            ease: 'none',
            duration: 0.3,
            stagger: 0.1,
        });

        gsap.to(eventContainer.getElementsByClassName('event-thumbnail')[0], {
            scrollTrigger: {
                // trigger: eventContainer.getElementsByClassName('event-element')[0],
                trigger: eventContainer,
                start: 'top 20%',
                end: 'center 20%',
                // scrub: true, 
                toggleActions: "restart none none reverse", 
                // markers: true,
            },
            opacity: 0.4,
            ease: 'none',
            duration: 0.3,
        });

        gsap.to(eventContainer,{
            scrollTrigger: {
                trigger: eventContainer,
                start: 'bottom 30%',
                end: 'bottom 20%',
                scrub: true, 
                toggleActions: "restart none none reverse", 
                // markers: true,
            },
            opacity: 0,
            ease: 'none',
            duration: 0.5,
        })

        gsap.to(eventContainer.getElementsByClassName('event-element')[0],{
            scrollTrigger: {
                trigger: eventContainer,
                start: 'top top',
                end: 'top top',
                // scrub: true, 
                toggleActions: "restart none none reverse", 
                // markers: true,
            },
            position: 'fixed',
            top: '48px',
            ease: 'none',
            duration: 0.001,
        })
    }

}
else{ // if no event currently showed -----------------
    document.getElementById('event-container').style.display = 'none';

    if(isMobileDevice()){
        document.getElementById('menu').getElementsByClassName('menu-about')[0].style.visibility = 'visible';
        document.getElementById('menu').getElementsByClassName('menu-about')[0].style.pointerEvents = 'auto';

        document.getElementById('menu').getElementsByClassName('menu-events')[0].style.visibility = 'hidden';
        document.getElementById('menu').getElementsByClassName('menu-events')[0].style.pointerEvents = 'none';

    }
    else{
        document.getElementById('menu').getElementsByClassName('menu-events')[0].style.display = 'none';
    }
}


function showEventDetail(eventID){ 
    // console.log(eventID);
    var thumbnail = document.getElementsByClassName('event-container')[0].getElementsByClassName('event-thumbnail')[0];
    var thumbnailTransition = document.getElementById('event-thumbnail-transition');

    thumbnailTransition.style.borderRadius = '1000px 1000px 0px 0px';
    thumbnailTransition.style.backgroundImage = thumbnail.style.backgroundImage;
    thumbnailTransition.style.display  = 'block';
    thumbnailTransition.style.width  = thumbnail.getBoundingClientRect().width + 'px';
    thumbnailTransition.style.height = thumbnail.getBoundingClientRect().height + 'px';
    thumbnailTransition.style.left   = thumbnail.getBoundingClientRect().left + 'px';
    thumbnailTransition.style.top    = thumbnail.getBoundingClientRect().top  + 'px';

    const tl = gsap.timeline();
    tl.from('#event-thumbnail-transition', { opacity: 0 });
    tl.to('#event-thumbnail-transition', { opacity: 1, duration: 0.03 })
        .to('#event-thumbnail-transition', { width: '100vw', height: '50vh', top: 0, left: 0, borderRadius: '0px 0px 0px 0px', duration: 0.5 })
        .to('#event-detail-background', {height: '100vh', duration: 0.5}, '<')
        .add(function(){
            document.getElementById('event-detail-exit').style.display = 'block';
            document.getElementById('event-detail-info-container').style.display = 'flex';
            document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
        })
        .to('#event-detail-info-container', { top: '0vh', duration: 1})
        .to('#event-detail-container .event-detail-CTA', {bottom: '5vh', duration: 0.3})


    document.getElementById('event-detail-name').innerHTML = events[eventID].name;
    document.getElementById('event-detail-host').innerHTML = events[eventID].host;
    document.getElementById('event-detail-description').innerHTML = events[eventID].description;
    document.getElementById('event-detail-location').innerHTML = '➤ Location: <br>' + events[eventID].location;
    
    //set time
    var tempTime = '➤ Time: <br>';
    for(var i = 0; i< events[eventID].time.length; i++){
        tempTime += events[eventID].time[i] + '<br>';
    }
        document.getElementById('event-detail-time').innerHTML = tempTime;

    // set pricing
    var tempPrice = '➤ Fee: <br>';
    for(var i = 0; i< events[eventID].pricing.length; i++){
        tempPrice += events[eventID].pricing[i] + '<br>';
    }
    document.getElementById('event-detail-pricing').innerHTML = tempPrice;

    // add image list
    var tempImage = '<img src="../../events/'+ events[eventID].thumbnail +'">';

    if(events[0].image[0] != '' || events[eventID].image.length > 1){
        tempImage = '';
        for(var i = 0; i < events[eventID].image.length; i++){
            tempImage += '<img src="../../events/' + events[eventID].image[i] + '">'
        }
    }

    document.getElementById('event-detail-images').innerHTML = tempImage;

}


function closeEventDetail(){
    var thumbnail = document.getElementsByClassName('event-container')[0].getElementsByClassName('event-thumbnail')[0];
    const tl = gsap.timeline();
    tl.from('#event-thumbnail-transition', { opacity: 1 });
    tl.to('#event-detail-info-container', { top: '120vh', duration: 1})
    .to('#event-thumbnail-transition', {
            width: () => thumbnail.getBoundingClientRect().width + 'px',
            height: () => thumbnail.getBoundingClientRect().height + 'px',
            top: () => thumbnail.getBoundingClientRect().top  + 'px',
            left: () => thumbnail.getBoundingClientRect().left  + 'px',
            borderRadius: '1000px 1000px 0px 0px',
            duration: 0.5 })
        .to('#event-detail-container .event-detail-CTA',{
            bottom: '-20vh',
            duration: 0.3}, '<')
        .to('#event-thumbnail-transition', {
                opacity: 0,
                duration: 0.5,})
        .to('#event-detail-background', {
            height: '0px',
            width: '100vw',
            bottom: 0,
            left: 0,
            duration: 0.2}, '<')
        .add(function(){
            document.getElementById('event-detail-exit').style.display = 'none';
            document.getElementById('event-thumbnail-transition').style.display = 'none';
            document.getElementsByTagName('body')[0].style.overflowY = '';
        });

}

var menuSection =  Array.from(new Set(jsonMenu.map((item) => item.Section)));
var menuSubSection1 = Array.from(new Set(jsonMenu.map((item) => item.Sub1)));
var menuSubSection2 = Array.from(new Set(jsonMenu.map((item) => item.Sub2)));
var mealMenuList = document.getElementById('meal-menu-list');

// jsonMenu to Hierachy ======================
var mealMenu = [];
// function jsonMenuToHierarchy(){
    // Creating Section =============
    for (var i = 0; i< menuSection.length; i++){
        var section = {};
        section.name = menuSection[i];

        var sectionTemp = jsonMenu.filter(function (el) {
            return el.Section == menuSection[i] // Changed this so a home would match
          });         
        var subList1 = Array.from(new Set(sectionTemp.map((item) => item.Sub1)));
        var list = [];
        subList1.forEach((element) => list.push(trimWhitespace(element)));
        section.list = list;
        // Creating Sub 1 ================
        for (var j = 0; j < subList1.length; j++){
            var sub1 = {};
            sub1["name"] = subList1[j];
            section[trimWhitespace(sub1.name)] = {};
            section[trimWhitespace(sub1.name)]["name"] = subList1[j];

            // Creating Sub 2 =============       
            var sub2 = jsonMenu.filter(function (el) {
                return el.Section == menuSection[i] &&
                       el.Sub1 == subList1[j] // Changed this so a home would match
              });
            // console.log(sub2);
            var subList2 = Array.from(new Set(sub2.map((item) => item.Sub2)));
            var list2 = [];
            subList2.forEach((element) => list2.push(trimWhitespace(element)));
            section[trimWhitespace(sub1.name)]['list'] = list2;
    
            for (var k = 0; k < subList2.length; k++){
                var sub3 = {};
                sub3["name"] = subList2[k];
                section[trimWhitespace(sub1.name)][trimWhitespace(sub3.name)] = {};
                section[trimWhitespace(sub1.name)][trimWhitespace(sub3.name)]["name"] = subList2[k];
                var mealSub2 = jsonMenu.filter(function (el) {
                    return el.Section == menuSection[i] &&
                           el.Sub1 == subList1[j] &&
                           el.Sub2 == subList2[k] // Changed this so a home would match
                  });
                section[trimWhitespace(sub1.name)][trimWhitespace(sub3.name)]["meal"] = mealSub2;
            }
        }
        mealMenu.push(section);
    }
// }
function loadMealMenuContainer(){
    //for each Menu Section ------
    for (var i = 0; i < mealMenu.length; i++){
        var mealMenuContainer = document.createElement('div');
        var mealMenuScollerText = document.createElement('span');
        mealMenuScollerText.id = "meal-menu-scroller-text-"+ trimWhitespace(mealMenu[i].name);
        mealMenuScollerText.classList.add('meal-menu-scroller-text');
        mealMenuScollerText.innerHTML = '<a href="#'+ "meal-container-"+ trimWhitespace(mealMenu[i].name)+'">'+ mealMenu[i].name +'</a>';

        document.getElementById('meal-menu-scroller-text').appendChild(mealMenuScollerText);
        
        mealMenuContainer.id = "meal-container-"+ trimWhitespace(mealMenu[i].name);
        mealMenuContainer.classList.add('meal-menu-container','meal-menu-section');
        mealMenuContainer.setAttribute('name', mealMenu[i].name);


        var mealMenuContainerBg = document.createElement('div');
        var separateLine = document.createElement('div');
        separateLine.classList.add('menu-bg-separate-line');
        
        // add tab into meal menu container -------------------
        var tabbar = document.createElement('div');
        tabbar.id = 'tabbar-' + trimWhitespace(mealMenu[i].name);
        tabbar.classList.add('meal-menu-tabbar');
        tabbar.style.zIndex = (mealMenu.length - i)*100 + 50;

        // adding sub1 into tab -------------------------------
        for(var j = mealMenu[i].list.length - 1; j >= 0; j--){
            var subName = mealMenu[i][mealMenu[i].list[j]].name;
            // console.log(subName);
            var tabItem = document.createElement('span');
            tabItem.innerHTML = `
                <a href="#sub-1-${trimWhitespace(subName)}">${subName}</a>
            
            `;
            tabItem.classList.add('meal-menu-tabbar-item', 'regular-24');
            tabItem.id = 'tabbar-' + trimWhitespace(subName);
            tabbar.appendChild(tabItem);
        }
        mealMenuContainer.appendChild(tabbar);
        mealMenuContainer.style.zIndex = (mealMenu.length - i)*100;

        // Loop for each sub-1 --------------------------------
        for(var q = 0; q < mealMenu[i].list.length; q++){
            var subName = mealMenu[i][mealMenu[i].list[q]].name;
            // adding sub-1 menu into section
            var sub1Div = document.createElement('div');
            sub1Div.id = 'sub-1-' + trimWhitespace(subName);
            sub1Div.classList.add('meal-menu-sub1');

            // check if section only contain 1 sub-1?
            if(mealMenu[i].list.length>1){
                var sub1Title = document.createElement('span');
                sub1Title.innerHTML = subName;
                sub1Title.classList.add('meal-menu-sub1-title', 'meal-menu-all-item', 'regular-24');
                sub1Div.appendChild(sub1Title);
            }
            mealMenuContainer.appendChild(sub1Div);

            // loop for each sub-2 ------------------------
            for(var k = 0; k < mealMenu[i][mealMenu[i].list[q]].list.length; k++){
                // console.log(mealMenu[i][mealMenu[i].list[q]].list[k]);

                var sub2Div = document.createElement('div');
                sub2Div.id = 'sub-2-' + mealMenu[i][mealMenu[i].list[q]].list[k];
                sub2Div.classList.add('meal-menu-sub2');
                
                var sub2Title = document.createElement('div');
                sub2Title.id = 'sub-2-title-' + mealMenu[i][mealMenu[i].list[q]].list[k];
                sub2Title.classList.add('meal-menu-sub2-title', 'meal-menu-all-item');
                sub2Title.innerHTML = `
                    <div class = "separate-line"> <hr> <hr> </div>
                    <span class="meal-menu-sub2-title-text regular-16">${mealMenu[i][mealMenu[i].list[q]][mealMenu[i][mealMenu[i].list[q]].list[k]].name}</span>
                    <div class = "separate-line">  <hr> <hr> </div>
                `;
                sub2Div.appendChild(sub2Title);
                var mealList = document.createElement('div');
                mealList.classList.add('meal-list-div');
                
                // add center horizontal line
                var centerHorizontalLine = document.createElement('img');
                centerHorizontalLine.src = "other/asset/icon/menu-center-horizontal-line.svg";
                centerHorizontalLine.classList.add('center-horizontal-line');
                mealList.appendChild(centerHorizontalLine);
                
                sub2Div.appendChild(mealList);

                //loop for each meal-name ------------------------
                for (a = 0; a < mealMenu[i][mealMenu[i].list[q]][mealMenu[i][mealMenu[i].list[q]].list[k]].meal.length; a++){
                    var mealItem = mealMenu[i][mealMenu[i].list[q]][mealMenu[i][mealMenu[i].list[q]].list[k]].meal[a];
                    // console.log(mealItem);
                    var hasImgDisplay = 'none';
                    var mealImgUrl = '';

                    var mealDiv = document.createElement('div');
                    if(mealItem.Image!= ''){
                        hasImgDisplay = 'block';
                        mealDiv.classList.add('meal-has-image');
                        mealImgUrl = '../../menu-img/' + mealItem.Image;
                    };
                    mealDiv.classList.add('meal-item', 'meal-menu-all-item');
                    // add class left-right-class to mealItem -> to hide when show image.
                    if (a % 2){
                        mealDiv.classList.add ('meal-item-left');
                    }
                    else{
                        mealDiv.classList.add('meal-item-right');
                    }
                    mealDiv.innerHTML = `
                    <div class="meal-item-row">
                    <img style="display: ${hasImgDisplay};" class='meal-image-indicator' src="other/asset/icon/image-indicator.svg">
                    <div class="meal-info">
                            <div class="meal-name medium-12">${mealItem.Name}</div>
                            <div class="meal-ingredient light-12">${mealItem.Ingredient}</div>
                        </div>
                    </div>
                    <div  style="display: ${hasImgDisplay};" class="meal-item-image-container">
                        <div class="meal-image-overlay1"></div>
                        <img class="meal-image" src="${mealImgUrl}">
                        <div class="meal-image-overlay1"></div>
                    </div>
                    `;
                    mealList.appendChild(mealDiv);
                }

                // add end sub2 section lines
                var endSectionSeparator = document.createElement('div');
                endSectionSeparator.classList.add('end-section-separator', 'separate-line', 'meal-menu-all-item');
                endSectionSeparator.innerHTML = `
                <img src="other/asset/icon/end-section-center.svg" class = "end-section-center">
                <hr> <hr>
                `;
                sub2Div.appendChild(endSectionSeparator);
                sub1Div.appendChild(sub2Div);
            }
        }


        // add meal menu container into mealMenu List ----------
        mealMenuList.appendChild(mealMenuContainer);
        document.getElementById('menu-bg-container').appendChild(mealMenuContainerBg);

        var scrollerSmall = document.createElement('div');
        scrollerSmall.classList.add('scoller-small');
        separateLine.appendChild(scrollerSmall);
        mealMenuContainerBg.appendChild(separateLine);
        mealMenuContainerBg.classList.add('meal-menu-container-bg');

        // add animation to scroller small in within menu
        scrollerSmallPlayer[i] = bodymovin.loadAnimation({
            wrapper: scrollerSmall,
            animType: 'svg',
            loop: false,
            autoplay: false,
            path: 'other/script/scroll-through-menu-small.json',
        });

    }
}

loadMealMenuContainer();

// Cut space and join with '-' for characters =============================
function trimWhitespace(str){
    return str.replace(/\s+/g, '-').toLowerCase();
}


// animate menu ==========================================================
// animate tabbar -----
var scrollTriggerMenuContainer = Array.from(document.querySelectorAll('.meal-menu-container'));

for (var i = 0; i < scrollTriggerMenuContainer.length; i++) {
    var el = document.getElementsByClassName('meal-menu-container')[i];
    var tabbar = el.getElementsByClassName('meal-menu-tabbar')[0];
    // trigger tabbar ------------
    gsap.to(tabbar,{
        scrollTrigger: {
            trigger: el,
            start: () => "bottom " + (tabbar.getBoundingClientRect().height + 230),
            end: () => "bottom " + (tabbar.getBoundingClientRect().height + 100),
            scrub: true,
            toggleActions: "restart none none reverse", 
            // markers: true
        },
        duration: 0.43,
        opacity: 0,
    });

    // move menu-background with menu-section
    gsap.from(document.getElementsByClassName('meal-menu-container-bg')[i], {
        scrollTrigger: {
            trigger: el,
            start: 'top bottom+=100',
            end: 'top top+=100',
            scrub: true, 
            toggleActions: "restart none none reverse", 
            // markers: true
        },
        top: '100vh',
        ease: 'none',
        duration: 0.3,
    });
}

// animating hiding menu while scroll to bottom section
const tlMoveout = gsap.timeline({
    scrollTrigger: {
        trigger: '#meal-menu',
        start: 'bottom bottom',
        end: 'bottom center',
        toggleActions: "restart play reverse reverse", 
        scrub: true,
    },
  });

tlMoveout.to('#meal-menu .meal-menu-container',{
    opacity: 0,
    ease: 'Power4.easeOut',
    duration: 0.3,
    stagger: -0.01,
},)
.to('#menu-bg-container > *', {
    marginTop: '-102vh',
    ease: "power2.inOut",
    duration: 1.2,
    stagger: -0.07,
}, '<')
.to('#menu-bg-container > *', {
    scale: 0.4,
    ease: "power2.inOut",
    duration: 1,
    stagger: 0.1,
}, '<')
.to('#menu-bg-container > *',{
    scale: 1,
    duration: 0.5,
});

// hide item when menu item leave the background ------------

var scrollTriggerAllMenuItem = gsap.utils.toArray('.meal-menu-all-item');
scrollTriggerAllMenuItem.forEach((el) => {

    // show -----------
    // gsap.from(el,{
    //     scrollTrigger: {
    //         trigger: el,
    //         start: 'bottom bottom+=32',
    //         end: 'bottom 90% ',
    //         scrub: true, 
    //         toggleActions: "restart none restart none", 
    //     },
    //     opacity: 0,
    //     ease: Expo.easeIn,
    // });

    // {mark3}
    // hide -----------
    gsap.fromTo(el, {
        opacity: 1
    }, {
        scrollTrigger: {
            trigger: el,
            start: 'top top+=162',
            end: 'top top+=80',
            scrub: true, 
            toggleActions: "restart none none reverse", // onEnter, onLeave, onEnterBack, and onLeaveBack -> sẽ nhận 1 trong các giá trị sau: "play", "pause", "resume", "reset", "restart", "complete", "reverse", and "none".
            // markers: true,
        },
        opacity: 0,
        duration: 0.2,
        ease: "none",
    });
});


gsap.from('#meal-menu .menu-background',{
    scrollTrigger: {
        trigger: '#meal-menu',
        start: 'top center',
        end: 'top top',
        scrub: true, 
        toggleActions: "restart none none reverse", 
    },
    top: '100vh',
    ease: "power1.inOut",
});


// hover on meal has image -> show image ----------------------

function showThumb(el){
    // console.log(el);
    var image = el.getElementsByClassName('meal-image')[0];
    image.style.display = 'block';
    image.style.position = 'fixed';
    image.style.opacity = 1;

    // set left right -----------
    if (el.getBoundingClientRect().left < window.innerWidth/2){
        // return 1 -> image on right
        image.style.left = (window.innerWidth/2 + (window.innerWidth-560)/4) + 'px';
        document.querySelectorAll('.meal-menu-sub2-title, .end-section-separator, .meal-menu-sub1-title').forEach(element => {
            element.style.width = '50%';
            element.style.opacity = '0.3';
        });

        document.querySelectorAll('.meal-item-left *').forEach(element => {
            element.style.opacity = '0';
        });
        document.querySelectorAll('.meal-item-right *').forEach(element => {
            element.style.opacity = '0.5';
        });

    } else {
        // return 0 -> image on left
        image.style.left = (window.innerWidth/2-200)/2+240 + 'px';
        document.querySelectorAll('.meal-menu-sub2-title, .end-section-separator, .meal-menu-sub1-title').forEach(element => {
            element.style.width = '50%';
            element.style.marginLeft = '50%';
            element.style.opacity = '0.3';
        });

        document.querySelectorAll('.meal-item-right *').forEach(element => {
            element.style.opacity = '0';
        });
        document.querySelectorAll('.meal-item-left *').forEach(element => {
            element.style.opacity = '0.5';
        });

    }

    el.querySelectorAll('*').forEach(element => {
        element.style.opacity = '1';
    });

    // set top -----------------
    var sectionMenu = el.closest(".meal-menu-container");
    if(sectionMenu.getBoundingClientRect().top > 0) {

        // section doesn't scroll all way up to the top of screen
        image.style.top = sectionMenu.getBoundingClientRect().top + 80 + 'px';
        image.style.transform = 'translate(-50%, 0%)';
    }
    // else if( sectionMenu.getBoundingClientRect().bottom < image.getBoundingClientRect().bottom ){
    //     image.style.top = sectionMenu.getBoundingClientRect().bottom - image.getBoundingClientRect().height - 80 + 'px';
    //     image.style.transform = 'translate(-50%, 0%)';
    // }
    else {
        image.style.top = '50vh';
        image.style.transform = 'translate(-50%, -50%)';
    }
}

// disable hover event listener when user scroll through body -> avoid auto show meal image when user scroll through the meal list.
var body = document.body, timer;
window.addEventListener('scroll', function() {
    clearTimeout(timer);

    if(!body.classList.contains('disable-hover')) {
        body.classList.add('disable-hover');
    }

    timer = setTimeout(function(){
        body.classList.remove('disable-hover');
    }, 500);
}, false);


function hideThumb(el){
    el.getElementsByClassName('meal-info')[0].style.opacity = 1;

    var image = el.getElementsByClassName('meal-image')[0];
    image.style.display = 'none';
    image.style.opacity = 0;
    image.style.top = '50vh';
    image.style.transform = 'translate(-50%, -50%)';
    image.style.left = '0px';
    document.querySelectorAll('.meal-menu-sub2-title, .end-section-separator, .meal-menu-sub1-title').forEach(element => {
        element.style.width = '100%';
        element.style.marginLeft = '0';
        element.style.opacity = '1';
    });


    document.querySelectorAll('.meal-item-left *, .meal-item-right *').forEach(element => {
        element.style.opacity = '1';
    });
}

var mealsHaveImage = document.getElementsByClassName('meal-has-image');
for(var i = 0; i< mealsHaveImage.length; i++){
    // console.log(mealsHaveImage[i]);

    if(isMobileDevice()){
        mealsHaveImage[i].addEventListener('click', function(){
            toggleProductImg( $(this)[0] );
        });
    }
    else {
        // Desktop device -> Hover to show image.
        mealsHaveImage[i].addEventListener('mouseenter', function(){
            showThumb( $(this)[0] )
        });
    
        mealsHaveImage[i].addEventListener('mouseleave', function(){
            hideThumb( $(this)[0])
        });
    }

}

function toggleProductImg(el){
    var img = el.getElementsByClassName('meal-image')[0];
    var imgContainer = el.getElementsByClassName('meal-item-image-container')[0];
    if(img.style.display == 'none'){

        img.style.display = 'block';
        img.style.position = 'relative';
        img.style.opacity = '1';
        img.style.top = '0';
        img.style.left = '50%';
        img.style.width = '80vw';
        img.style.maxHeight = '80vh';
        img.style.transform = "translate(-50%, 0%)";
        img.style.height = 'auto';

        // animate showing
        imgContainer.style.height = '0';
        gsap.to(imgContainer, {
            height: 'auto',
            duration: 1,
            ease: "power3.inOut",
        });

        // {mark3} animate hide image when image is out of screen.
        gsap.to(img, {
            scrollTrigger: {
                // trigger: img,
                // start: 'top top+=60',
                // end: 'center top',
                trigger: img.closest('.meal-menu-all-item'),
                start: 'top top+=80',
                toggleActions: "restart none none none", 
                // markers: true,
            },
            height: '0',
            duration: 1,
            ease: "power3.inOut",
            onComplete() {
                img.style.display = 'none';
                img.style.opacity = '0';
                img.style.height = '0';        
              }
        });

        // when scroll reverse
        gsap.to(img, {
            scrollTrigger: {
                trigger: img,
                start: 'top bottom',
                end: 'top bottom',
                // scrub: true, 
                toggleActions: "none none play play", // onEnter, onLeave, onEnterBack, and onLeaveBack -> sẽ nhận 1 trong các giá trị sau: "play", "pause", "resume", "reset", "restart", "complete", "reverse", and "none".
                // markers: true,
            },
            height: '0',
            duration: 1,
            ease: "power3.inOut",
            onComplete() {
                img.style.display = 'none';
                img.style.opacity = '0';
                img.style.height = '0';        
              }
        });

    }

    else{
        gsap.to(img, {
            height: '0',
            opacity: '0',
            duration: 1,
            ease: "power3.inOut",
            onComplete() {
                img.style.display = 'none';
              }
        });
    }
}

function isMobileDevice(){
    var x = window.matchMedia("(max-width: 759px)");
        if (x.matches) { // If media query matches
          return true;
        } else {
            return false;
        }
}

// add menu scroller into right menu
var scrollThroughMenuContainer = document.getElementById('meal-menu-scroller');
var scrollThroughMenuItem = bodymovin.loadAnimation({
    wrapper: scrollThroughMenuContainer,
    animType: 'svg',
    loop: false,
    autoplay: false,
    path: 'other/script/scroll-through-menu.json',
});

//scroll trigger scroller large in right menu
ScrollTrigger.create({
    trigger: "#meal-menu",
    start: "top center",
    end: "bottom bottom-=500",
    onUpdate: (self) => {
        scrollThroughMenuItem.goToAndStop(Math.round(self.progress * 379), true); // 379 is number of lottie frame
    },
});

gsap.to('#meal-menu-scroller',{
    scrollTrigger: {
        trigger: '#meal-menu',
        start: 'top top',
        end: 'top top',
        scrub: true,
        toggleActions: "restart none none reverse", 
        // markers: true,
    },
    position: 'fixed',
    duration: 2,
})

//scrolltrigger scroller small in menu
document.querySelectorAll('.meal-menu-container').forEach((element,i) => {
    ScrollTrigger.create({
        trigger: element,
        start: "top 90%",
        end: "bottom center",
        scrub: true,
        // markers: true,
        onUpdate: (self) => {
            scrollerSmallPlayer[i].goToAndStop(Math.round(self.progress * 649), true); 
        },
    });
})


//scrolltrigger scroller small in menu
document.querySelectorAll('.meal-menu-container').forEach((element,i) => {
    gsap.to( document.getElementsByClassName('meal-menu-scroller-text')[i], {
        scrollTrigger: {
            trigger: element,
            start: 'top center',
            end: 'bottom center',
            // scrub: true,
            toggleActions: "restart reverse restart reverse", 
        },
        fontSize: '20px',
        // opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
    })
})



// highlight menu when scroll to each section
gsap.to( '.menu-about', {
    scrollTrigger: {
        trigger: '#aboutDeglacer',
        start: 'top center',
        end: 'bottom center',
        // scrub: true,
        toggleActions: "restart reverse restart reverse", 
    },
    fontWeight: '600',
    duration: 0.3,
    ease: "power2.inOut",
})

gsap.to( '.menu-events', {
    scrollTrigger: {
        trigger: '#event-container',
        start: 'top center',
        end: 'bottom center',
        // scrub: true,
        toggleActions: "restart reverse restart reverse", 
    },
    fontWeight: '600',
    duration: 0.3,
    ease: "power2.inOut",
})

gsap.to( '.menu-menu', {
    scrollTrigger: {
        trigger: '#meal-menu',
        start: 'top center',
        end: 'bottom center',
        // scrub: true,
        toggleActions: "restart reverse restart reverse", 
    },
    fontWeight: '600',
    duration: 0.3,
    ease: "power2.inOut",
})

gsap.to( '.menu-contact', {
    scrollTrigger: {
        trigger: '#contactUs',
        start: 'top center',
        end: 'bottom center',
        // scrub: true,
        toggleActions: "restart reverse restart reverse",
    },
    fontWeight: '600',
    duration: 0.3,
    ease: "power2.inOut",
})
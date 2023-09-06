// Playing Lottie =========================================
var loadingContainer = document.getElementById('loadingContainer')
var loadingLottieItem = bodymovin.loadAnimation({
    wrapper: loadingContainer,
    animType: 'svg',
    loop: false,
    autoplay: false,
    animationData: loadingJson,
  });

loadingLottieItem.addEventListener('complete', function(){
    // loadingLottieItem.destroy();
    $('.loader-wrapper').fadeOut();
    heroItem.play();
    document.getElementById('menu').style.opacity = 1;
})


var heroContainer = document.getElementById('heroContainer')
var heroItem = bodymovin.loadAnimation({
    wrapper: heroContainer,
    animType: 'svg',
    loop: false,
    autoplay: false,
    animationData: heroJson,
  });


var patternContainer = document.getElementById('patternContainer')
var patternContainerItem = bodymovin.loadAnimation({
    wrapper: patternContainer,
    animType: 'svg',
    loop: false,
    autoplay: false,
    animationData: patternJson,
  });


// page transition ========================================
$(window).on("load", function () {
    loadingLottieItem.play();

    // Scroll trigger ========================================
    gsap.to('#tagline', {
        scrollTrigger: {
        trigger: '#aboutDeglacer',
        start: 'top 80%',
        // scrub: true, 
        toggleActions: "restart none none reverse",
        //   markers: true,
        },
        duration: 1,
        scale: 0,
        opacity: 0,
        // ease: "Power3.inOut",
    })
    
    gsap.to('.header', {
        scrollTrigger: {
        trigger: '#aboutDeglacer',
        start: 'top 80%',
        end: 'top 80%',
        onEnter: playPattern,
        // scrub: true,
        toggleActions: "restart none none reverse", // onEnter, onLeave, onEnterBack, and onLeaveBack -> sẽ nhận 1 trong các giá trị sau: "play", "pause", "resume", "reset", "restart", "complete", "reverse", and "none".
        //   markers: true,
        },
        duration: 1,
        height: '98px',
        // ease: "Power3.inOut",
    })

    gsap.to('#headerLogo', {
        scrollTrigger: {
        trigger: '#aboutDeglacer',
        start: 'top 80%',
        end: 'top 80%',
        // scrub: true,
        toggleActions: "restart none none reverse", // onEnter, onLeave, onEnterBack, and onLeaveBack -> sẽ nhận 1 trong các giá trị sau: "play", "pause", "resume", "reset", "restart", "complete", "reverse", and "none".
        //   markers: true,
        },
        duration: 1,
        width: '120px',
        // ease: "Power3.inOut",
    })

    gsap.to('#headerLogo *', {
        scrollTrigger: {
        trigger: '#aboutDeglacer',
        start: 'top 1%',
        end: 'bottom top',
        // scrub: true,
        toggleActions: "restart reverse restart reverse", // onEnter, onLeave, onEnterBack, and onLeaveBack -> sẽ nhận 1 trong các giá trị sau: "play", "pause", "resume", "reset", "restart", "complete", "reverse", and "none".
        // markers: true,
        },
        duration: 1,
        fill: '#00533E',
        ease: "Power3.inOut",
    })

});

// Scroll Trigger about Deglacer Section ===============================

function playPattern(){
    patternContainerItem.play();
}

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
    // console.log("mouse location:", xpos, ypos)
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
        var items = $.csv.toObjects(csvd);
        jsonMenu = items;
        // console.log(jsonMenu);
    },
    dataType: "text",
    complete: function () {
        // call a function on complete 
    }
});

var menuSection =  Array.from(new Set(jsonMenu.map((item) => item.Section)));
var menuSubSection1 = Array.from(new Set(jsonMenu.map((item) => item.Sub1)));
var menuSubSection2 = Array.from(new Set(jsonMenu.map((item) => item.Sub2)));

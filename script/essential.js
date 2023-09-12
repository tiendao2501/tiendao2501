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
        jsonMenu = $.csv.toObjects(csvd);
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
        mealMenuContainer.id = "meal-container-"+ trimWhitespace(mealMenu[i].name);
        mealMenuContainer.classList.add('meal-menu-container','meal-menu-section');
        mealMenuContainer.setAttribute('name', mealMenu[i].name);

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
                centerHorizontalLine.src = "asset/icon/menu-center-horizontal-line.svg";
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
                        mealImgUrl = 'asset/menu-img/' + mealItem.Image;
                    };
                    mealDiv.classList.add('meal-item', 'meal-menu-all-item');
                    mealDiv.innerHTML = `
                    <div class="meal-item-row">
                    <img style="display: ${hasImgDisplay};" class='meal-image-indicator' src="asset/icon/image-indicator.svg">
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
                endSectionSeparator.classList.add('end-section-separator', 'separate-line');
                endSectionSeparator.innerHTML = `
                <img src="asset/icon/end-section-center.svg" class = "end-section-center">
                <hr> <hr>
                `;
                sub2Div.appendChild(endSectionSeparator);
                sub1Div.appendChild(sub2Div);
            }
        }


        // add meal menu container into mealMenu List ----------
        mealMenuList.appendChild(mealMenuContainer);
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
            // scrub: true, cái này sẽ chạy animate theo cuộn chuột, bỏ đi thì sẽ tự động chạy khi cuộn.
            toggleActions: "restart none none reverse", // onEnter, onLeave, onEnterBack, and onLeaveBack -> sẽ nhận 1 trong các giá trị sau: "play", "pause", "resume", "reset", "restart", "complete", "reverse", and "none".
            // markers: true
        },
        duration: 0.43,
        opacity: 0,
    });
}

var scrollTriggerAllMenuItem = gsap.utils.toArray('.meal-menu-all-item');
scrollTriggerAllMenuItem.forEach((el) => {
    gsap.fromTo(el, {
        opacity: 1,
    }, {
        scrollTrigger: {
            trigger: el,
            start: 'top top+=20',
            end: 'top top+=10',
            // scrub: true, 
            toggleActions: "restart none none reverse", 
            // markers: true
        },
        opacity: 0.2,
        duration: 0.3,
        ease: "power2.out",
        stagger: 0.3,
    });
});


gsap.from('#meal-menu .menu-background',{
    scrollTrigger: {
        trigger: '#meal-menu',
        start: 'top center',
        end: 'top top',
        scrub: true, 
        toggleActions: "restart none none reverse", 
        // markers: true
    },
    top: '100vh',
    duration: 0.4,
    ease: "power1.inOut",
});


function showThumb(el){
    var image = el.getElementsByClassName('meal-image')[0];
    image.style.display = 'block';
    image.style.opacity = 1;
    // document.querySelectorAll('.meal-menu-sub2-title, .end-section-separator, .meal-menu-sub1-title').style.width = '50%';

    if (el.getBoundingClientRect().left < window.innerWidth/2){
        // return 1 -> image on right
        image.style.left = (window.innerWidth/2 + (window.innerWidth-400)/4) + 'px';
        document.querySelectorAll('.meal-menu-sub2-title, .end-section-separator, .meal-menu-sub1-title').forEach(element => {
            element.style.width = '50%';
        });
    } else {
        // return 0 -> image on left
        image.style.left = (window.innerWidth/2-200)/2+200 + 'px';
        document.querySelectorAll('.meal-menu-sub2-title, .end-section-separator, .meal-menu-sub1-title').forEach(element => {
            element.style.width = '50%';
            element.style.marginLeft = '50%';
        });
    }
}


function hideThumb(el){
    var image = el.getElementsByClassName('meal-image')[0];
    image.style.display = 'none';
    image.style.opacity = 0;
    document.querySelectorAll('.meal-menu-sub2-title, .end-section-separator, .meal-menu-sub1-title').forEach(element => {
        element.style.width = '100%';
        element.style.marginLeft = '0';
    });
}

var mealsHaveImage = document.getElementsByClassName('meal-has-image');
for(var i = 0; i< mealsHaveImage.length; i++){
    // console.log(mealsHaveImage[i]);

    mealsHaveImage[i].addEventListener('mouseenter', function(){
        showThumb( $(this)[0] )
    });

    mealsHaveImage[i].addEventListener('mouseleave', function(){
        hideThumb( $(this)[0] )
    });

}
// $(document).ready(function(){
// 	// плавное перемещение страницы к нужному блоку
// 	$("nav li a").click(function () {
// 		elementClick = $(this).attr("href");
// 		destination = $(elementClick).offset().top;
// 		$("body,html").animate({scrollTop: destination }, 800);
// 	});
// });


AOS.init({
    // Global settings:
    disable: "phone", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of data-aos as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  
    // Settings that can be overridden on per-element basis, by data-aos-* attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
  
  // console.log(window.scrollY);
  
  // const whyWeText = document.querySelector(".whyWeText");
  
  // function checkScroll() {
  //   let scrollPos = window.scrollY;
  //   if (scrollPos > 30) {
  //     whyWeText.classList.add("anim");
  //   } else {
  //     whyWeText.classList.remove("anim");
  //   }
  // }
  
  // window.addEventListener("scroll", checkScroll);
  // document.addEventListener("DOMContentLoaded", checkScroll);



let burgerMenu = document.querySelector(".burgerMenu")
let burgerBox = document.querySelector(".burgerBox")
let burgerMenuClosingZone = document.querySelector(".burgerMenuClosingZone")

let burgerLine1 = document.getElementById("burgerLine1")
let burgerLine2 = document.getElementById("burgerLine2")
let burgerLine3 = document.getElementById("burgerLine3")

let bmLink1 = document.getElementById("bmLink1")
let bmLink2 = document.getElementById("bmLink2")
let bmLink3 = document.getElementById("bmLink3")
let bmLink4 = document.getElementById("bmLink4")
let bmLink5 = document.getElementById("bmLink5")

let logo = document.querySelector(".logo")
let footerLogo = document.querySelector(".footerLogo")

logo.onclick = () => {
  location.href = "https://google.com"
}

footerLogo.onclick = () => {
  location.href = "https://google.com"
}


function openBurgerMenu() {
  burgerMenu.classList.toggle("open")
  burgerMenuClosingZone.classList.toggle("open")
  burgerLine1.classList.toggle("open")
  burgerLine2.classList.toggle("open")
  burgerLine3.classList.toggle("open")
}

function closedBurgerMenu() {
  burgerMenu.classList.remove("open")
    burgerLine1.classList.remove("open")
    burgerLine2.classList.remove("open")
    burgerLine3.classList.remove("open")
    burgerMenuClosingZone.classList.remove("open")
}

burgerBox.onclick = () => {
  openBurgerMenu()
}

burgerMenuClosingZone.onclick = () => {
  closedBurgerMenu()
}

bmLink1.onclick = () => {
  closedBurgerMenu()
}

bmLink2.onclick = () => {
  closedBurgerMenu()
}

bmLink3.onclick = () => {
  closedBurgerMenu()
}

bmLink4.onclick = () => {
  closedBurgerMenu()
}

bmLink5.onclick = () => {
  closedBurgerMenu()
}
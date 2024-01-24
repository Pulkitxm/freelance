const appElement = document.querySelector('.app');
const navElement = document.querySelector('nav');
const homeElement = document.querySelector('#home');
const slidebarWidth = appElement.offsetWidth - appElement.clientWidth;
const arrow = document.querySelector('#arrow');
const arrowUp = document.querySelector('#arrowUp');
const homeHeight = homeElement.clientHeight;
navElement.style.width = `calc(100vw - ${slidebarWidth}px)`;

const handleScroll = () => {
    const scrollPosition = appElement.scrollTop;
    if (scrollPosition < homeHeight) {
        arrowUp.classList.remove("show");
        arrowUp.classList.add("hide");
    } else {
        arrowUp.classList.remove("hide");
        arrowUp.classList.add("show");
    }
    if (scrollPosition < 5) {
        navElement.style.background = 'transparent';
        navElement.style.borderBottom = 'solid 2px #ffffff98'
        navElement.style.color = 'white'
    } else {
        navElement.style.backgroundColor = "rgb(215, 158, 126)";
        navElement.style.borderBottom = null;
        navElement.style.color = 'black'
        arrow.classList.remove("show");
        arrow.classList.add("hide");
    }
    if (scrollPosition == 0) {
        setTimeout(() => {
            arrow.style.animation = 'showUpRev 1s forwards';
        }, 500);
    } else {
        arrow.style.animation = 'hideDownRev 2s forwards';
    }
};
const handleScollDown = () => {
    console.log("clicked");
    appElement.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
    });
};
const handleScollUp = () => {
    console.log("clicked");
    appElement.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

arrow.addEventListener('click', handleScollDown);
arrowUp.addEventListener('click', handleScollUp);
appElement.addEventListener("scroll", handleScroll);
handleScroll();
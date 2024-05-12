const appElement = document.querySelector('.app');
const navElement = document.querySelector('nav');
const titleElement = document.getElementById('title');
const ham = document.querySelector('.ham');
const arrowUp = document.querySelector('#arrowUp');

const loadBlurryImages = () => {
    const blurDivs = document.querySelectorAll(".blur-load");
    blurDivs.forEach(div => {
        const img = div.querySelector("img");
        function loaded() {
            setTimeout(() => {
                div.classList.add("loaded")
            }, 500)
        }

        if (img.complete) {
            loaded();
        }
        else {
            img.addEventListener("load", loaded);
        }
    })
}
const handleSmallNavAndResize = () => {
    const collapsible = navElement.querySelector(".collapsible");
    const openNav = () => {
        collapsible.classList.add("open");
        collapsible.classList.remove("close");
        setTimeout(() => {
            collapsible.classList.add("open-nav");
        }, 100);
        collapsible.style.display = 'flex';
    };
    const closeNav = () => {
        collapsible.classList.add("close");
        collapsible.classList.remove("open", "open-nav");
        setTimeout(() => {
            collapsible.style.display = 'none';
        }, 350);
    };
    const toggleNav = () => {
        ham.classList.toggle('open');
        ham.classList.contains('open') ? openNav() : closeNav();
    };
    ham.addEventListener('click', toggleNav);
    navElement.querySelectorAll(".collapsible li p").forEach((p) => {
        p.addEventListener('click', toggleNav);
    });
    if (window.innerWidth < 1270) {
        ham.style.display = 'block';
        closeNav();
        collapsible.style.top = navElement.getBoundingClientRect().height + 10 + 'px';
    } else {
        ham.style.display = "none";
        collapsible.style.display = 'flex';
    }
};
const handleScroll = () => {
    const scrollPosition = appElement && appElement.scrollTop;
    arrowUp.classList.toggle("show", scrollPosition > 0);
    arrowUp.classList.toggle("hide", scrollPosition == 0);
}

window.onload = () => {
    document.querySelector('#loading').style.opacity = '0';
    document.querySelector('#loading').style.zIndex = '0';
    document.querySelector('#loading').style.display = 'none';
}
// try {
    navElement.style.background = 'rgb(215, 158, 126)';
    navElement.style.borderBottom = null;
    navElement.style.color = 'black';
    titleElement.style.color = 'black';
    titleElement.style.opacity = '1';
    loadBlurryImages();
    window.innerWidth < 1270 && handleSmallNavAndResize();
    appElement.addEventListener('scroll', handleScroll);
    handleScroll();
    arrowUp.addEventListener('click', () => {
        appElement.scrollTo({ top:0,behavior: "smooth" });
    });
// } catch (e) { }
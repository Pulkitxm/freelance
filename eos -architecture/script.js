const appElement = document.querySelector('.app');
const navElement = document.querySelector('nav');
const titleElement = document.getElementById('title');
const homeElement = document.querySelector('#home');
const arrow = document.querySelector('#arrow');
const arrowUp = document.querySelector('#arrowUp');
const homeHeight = homeElement.clientHeight;
const navigators = document.querySelectorAll('.navigators');
const ham = document.querySelector('.ham');
const images = document.querySelectorAll('img');
const videos = document.querySelectorAll('video');
const slidebarWidth = appElement && (appElement.offsetWidth - appElement.clientWidth);
const testimonials = document.querySelector('.testimonials');

const handleScroll = () => {
    const scrollPosition = appElement && appElement.scrollTop;

    // scroll to top arrow handle
    arrowUp.classList.toggle("show", scrollPosition >= homeHeight);
    arrowUp.classList.toggle("hide", scrollPosition < homeHeight);

    // home scroll down arrow styling
    arrow.style.animation = (scrollPosition === 0) ? 'showUpRev 1s forwards' : 'hideDownRev 2s forwards';

    //changing nav styles
    const isScrolledTop = scrollPosition < 5;
    navElement.style.background = isScrolledTop ? 'transparent' : 'rgb(215, 158, 126)';
    navElement.style.borderBottom = isScrolledTop ? 'solid 2px #ffffff98' : null;
    navElement.style.color = isScrolledTop ? 'white' : 'black';
    titleElement.style.color = isScrolledTop ? 'white' : 'black';
    titleElement.style.opacity = isScrolledTop ? '.7' : '1';
};
const navigate = (e) => {
    const element = document.getElementById(e.target.dataset.link);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth"
        });
    }
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
const makeTeamElements = () => {
    const teamItem = document.querySelector('.team-item');
    const teamContainer = teamItem.parentElement;
    const team = [
        {
            name: 'abc',
            img: '1.webp',
        },
        {
            name: 'def',
            img: '2.webp',
        },
        {
            name: 'abc',
            img: '1.webp',
        },
        {
            name: 'def',
            img: '2.webp',
        },
        {
            name: 'abc',
            img: '1.webp',
        },
        {
            name: 'def',
            img: '2.webp',
        },
    ]
    team.forEach((member) => {
        const clone = teamItem.cloneNode(true);
        clone.style.height = '100px';
        clone.style.width = '100px';
        clone.querySelector('.team-face').src = `./assets/original/team/${member.img}`;
        clone.querySelector('.name').innerText = member.name;
        teamContainer.appendChild(clone);
    })
    teamItem.remove();
}
const makeReviewsElements = () => {
    const reviewItem = document.querySelector('.review');
    const reviewContainer = reviewItem.parentElement;
    for (let i = 0; i < 3; i++) {
        const clone = reviewItem.cloneNode(true);
        clone.querySelector('.card-text').innerText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus tempora cum beatae pariatur`;
        clone.querySelector('.card-footer').innerText = `- XYZ`;
        reviewContainer.appendChild(clone);
    }
    reviewItem.remove();
}
const loadBlurryImages = () => {
    const blurDivs = document.querySelectorAll(".blur-load");
    blurDivs.forEach(div => {
        const img = div.querySelector("img");
        function loaded() {
            setTimeout(()=>{
                div.classList.add("loaded")
            },500)
        }

        if (img.complete) {
            console.log("loading complete",img);
            loaded();
        }
        else {
            img.addEventListener("load", loaded);
        }
    })
}

try {
    window.addEventListener("load", () => {
        // document.querySelector('#loading').style.opacity = '0';
        // document.querySelector('#loading').style.zIndex = '0';
        // document.querySelector('#loading').style.display = 'none';
    })
    handleScroll();
    loadBlurryImages();
    arrow.addEventListener('click', () => appElement.scrollTo({ top: window.innerHeight, behavior: "smooth" }));
    arrowUp.addEventListener('click', () => appElement.scrollTo({ top: 0, behavior: "smooth" }));
    appElement.addEventListener("scroll", handleScroll);
    navigators.forEach(navigator => {
        navigator.addEventListener("click", navigate);
    });
    if (window.innerWidth < 1270) {
        handleSmallNavAndResize();
    }
    if (window.innerWidth > 1270) {
        navElement.style.width = `calc(100vw - ${slidebarWidth}px)`;
    }
    if (window.innerWidth < 700) {
        testimonials.parentNode.removeChild(testimonials);
    }
    makeTeamElements();
    makeReviewsElements();
} catch (err) { }

// appElement && appElement.scrollTo({
//     top: document.getElementById('products').getBoundingClientRect().top,
//     behavior: "smooth"
// });
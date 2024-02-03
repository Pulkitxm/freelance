const appElement = document.querySelector('.app');
const navElement = document.querySelector('nav');
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
const carouselContainer = document.getElementById('carousel-container');
let currentIndex = 0;

const handleScroll = () => {
    const scrollPosition = appElement && appElement.scrollTop;

    // scroll to top arrow handle
    arrowUp.classList.toggle("show", scrollPosition >= homeHeight-50);
    arrowUp.classList.toggle("hide", scrollPosition < homeHeight-50);

    // home scroll down arrow styling
    arrow.style.animation = (scrollPosition === 0) ? 'showUpRev 1s forwards' : 'hideDownRev 2s forwards';

    //changing nav styles
    const isScrolledTop = scrollPosition < 5;
    navElement.style.background = isScrolledTop ? 'transparent' : '#D69F7E';
    navElement.style.borderBottom = isScrolledTop ? 'solid 2px #ffffff98' : null;
    navElement.style.color = isScrolledTop ? 'white' : '#28282B';
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
const makeReviewsElements = () => {
    const reviewItem = document.querySelector('.review');
    const reviewContainer = reviewItem.parentElement;
    const reviews = [
        {
            review: "Eos Architecture has transformed my perspective on natural building. Their workshops are insightful, and the community they've built is inspiring. I'm proud to be a part of this eco-friendly journey.",
            user: "Alice Johnson"
        },
        {
            review: "Being a part of Eos Architecture's projects has been an enriching experience. Their commitment to sustainable design and harmonious coexistence with the environment is truly commendable.",
            user: "Charlie Thompson"
        },
        {
            review: "The workshops at Eos Architecture are both educational and enjoyable. The hands-on approach to natural building techniques has empowered me to contribute positively to our environment.",
            user: "Olivia Davis"
        },
        {
            review: "Studio Eos' projects showcase a unique blend of creativity and sustainability. The team's dedication to creating timeless architectural marvels is evident in every project they undertake.",
            user: "Daniel Miller"
        },
        {
            review: "I discovered Eos Architecture through their engaging community events. The sense of belonging and shared passion for natural building make it more than just an architecture studio—it's a family.",
            user: "Sophia Wright"
        },
        {
            review: "Eos Architecture's commitment to using natural pigments and sustainable materials in their projects reflects a deep respect for the Earth. Their work goes beyond aesthetics, embodying principles of environmental consciousness.",
            user: "James Harris"
        },
        {
            review: "Attending Eos Architecture's workshops was a game-changer for me. The team's expertise and the variety of content in each workshop made the learning experience both enjoyable and valuable.",
            user: "Emma Martinez"
        },
        {
            review: "The community at Eos Architecture is vibrant and supportive. The shared enthusiasm for eco-friendly design creates an environment where ideas flourish, and collaborations thrive.",
            user: "Ryan Brooks"
        },
        {
            review: "Studio Eos' dedication to natural building techniques is evident in the Ashreya project at Yaksha Forest Garden. The result is not just a building; it's a testament to sustainable living.",
            user: "Lily Turner"
        },
        {
            review: "Meeting the team at Eos Architecture was a pleasure. Their passion for natural building and commitment to a zero-cement approach make them leaders in the field. Proud to have collaborated with them.",
            user: "Maxwell Clark"
        }
    ];
    for (let i = 0; i < reviews.length; i++) {
        const clone = reviewItem.cloneNode(true);
        clone.querySelector('.card-text').innerText = "'' "+reviews[i].review+" ''";
        clone.querySelector('.card-footer').innerText = '- '+reviews[i].user;
        reviewContainer.appendChild(clone);
    }
    reviewItem.remove();
}
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
function moveCarousel(direction) {
    currentIndex = (currentIndex + direction + carouselContainer.children.length) % carouselContainer.children.length;
    const translateValue = -currentIndex * 100 + '%';
    // if(carouselContainer.children[currentIndex].classList.contains('loaded')){
        carouselContainer.style.transform = 'translateX(' + translateValue + ')';
    // }else{
    //     carouselContainer.children[currentIndex].children[0].addEventListener("load", () => {
    //        setTimeout(() => { carouselContainer.style.transform = 'translateX(' + translateValue + ')';},500);
    //     });
    // }
}

// try {
    window.addEventListener("load", () => {
        setTimeout(() => {
            // document.querySelector('#loading').style.opacity = '0';
            // document.querySelector('#loading').style.zIndex = '0';
            // document.querySelector('#loading').style.display = 'none';
        }, 2000);
    })
    handleScroll();
    loadBlurryImages();
    arrow.addEventListener('click', () => appElement.scrollTo({ top: window.innerHeight-50, behavior: "smooth" }));
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
    makeReviewsElements();
    const interval = 2000;
    setInterval(() => moveCarousel(1), interval);
// } catch (err) { }

appElement && appElement.scrollTo({
    top: document.querySelector('.commuity').getBoundingClientRect().top-100,
    behavior: "smooth"
});
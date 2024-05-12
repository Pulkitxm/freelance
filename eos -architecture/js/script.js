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
const carousel = document.querySelector('.carousel');
const carouselContainer = document.getElementById('carousel-container');
let currentIndex = 0;

const handleScroll = () => {
    const scrollPosition = appElement && appElement.scrollTop;

    // scroll to top arrow handle
    arrowUp.classList.toggle("show", scrollPosition >= homeHeight - 50);
    arrowUp.classList.toggle("hide", scrollPosition < homeHeight - 50);

    // home scroll down arrow styling
    arrow.style.animation = (scrollPosition === 0) ? 'showUpRev 1s forwards' : 'hideDownRev 2s forwards';

    //changing nav styles
    // const isScrolledTop = scrollPosition < 5;
    const isScrolledTop = false;
    navElement.style.background = isScrolledTop ? 'transparent' : '#D69F7E';
    navElement.style.borderBottom = isScrolledTop ? 'solid 2px #ffffff98' : null;
    navElement.style.color = isScrolledTop ? 'white' : '#28282B';
};
const navigate = (e) => {
    const element = document.getElementById(e.target.dataset.link);
    if (element) {
        appElement.scrollTo({
            top: element.getBoundingClientRect().top + appElement.scrollTop-30,
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
            review: "Enrolling for the natural building workshop with EOS Design Studio has given me a new perspective towards organic living. I have learnt about building techniques which not only makes the structure look beautiful but they also minimize environmental impact. Their hands-on approach and their commitment to build structures sustainably was both educational and empowering. Here's to building not just structures but a sustainable future.",
            user: "Preeti Girkar, Performer"
        },
        {
            review: "Attending the natural building workshop organized by EOS design was an unparalleled learning journey. Immersed in seven days of hands-on experience, I developed a deep affection for the materials and techniques of natural building. Saumya's insightful explanations at every step enriched my understanding and sparked a realization: it's never too late to contribute to the planet's well-being. Beyond the invaluable lessons, the genuine warmth extended to us made the entire experience truly memorable.",
            user: "Riya Bissa, Architect"
        },
        {
            review: "EOS is an amazing space built by Saumya with much love, care and lots of experience. I first visited the studio for a workshop. As a lawyer, I absolutely had no business with architecture and I thought it would be tough to understand anything about natural building. But while working at the studio I was able to learn quite a lot about natural building. It really is a place for anyone and everyone, whoever is interested in sustainable lifestyles and exploring their surroundings more deeply!!",
            user: "Rohan Jain, Lawyer"
        },
        {
            review: "I did my first work shop with Saumya in February and it was an amazing experience. We experimented cob house techniques with theory and practice. You can go eyes closed to her workshop because she is professional and hard-worker. We will definitely come again to participate to others workshops with her and her team.",
            user: "Clemence, Social Worker "
        },
    ];
    for (let i = 0; i < reviews.length; i++) {
        const clone = reviewItem.cloneNode(true);
        clone.querySelector('.card-text').innerText = "''" + reviews[i].review + "''";
        clone.querySelector('.card-footer').innerText = '- ' + reviews[i].user;
        reviewContainer.appendChild(clone);
        const isMobile= /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if(i===0 && !isMobile){
            clone.classList.add("highlight-carousel");
        } 
        if(isMobile){
            clone.classList.add("highlight-mob");
        }
    }
    reviewItem.remove();
}
const loadBlurryImages = () => {
    const blurDivs = document.querySelectorAll(".blur-load");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const div = entry.target;
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
            }
        });
    }
    );
    blurDivs.forEach((element) => {
        observer.observe(element);
    });
}
function moveCarousel(direction) {
    currentIndex = (currentIndex + direction + carouselContainer.children.length) % carouselContainer.children.length;
    const translateValue = -currentIndex * 100 + '%';
    if (carousel.classList.contains('animate')) {
        if (carouselContainer.children[currentIndex].classList.contains('loaded')) {
            carouselContainer.style.transform = 'translateX(' + translateValue + ')';
        } else {
            carouselContainer.children[currentIndex].children[0].addEventListener("load", () => {
                setTimeout(() => { carouselContainer.style.transform = 'translateX(' + translateValue + ')'; }, 500);
            });
        }
    }
}
const popUpImage = () => {
    const popUpImages= document.querySelectorAll('.pop-up-image');
    const popUpDiv= document.querySelector('.popup-image');
    const popUpImg= popUpDiv.querySelector("img");
    const checkBox= document.querySelector("#pop");
    checkBox.addEventListener("change", () => {
        if(checkBox.checked){
            popUpDiv.classList.add("animate-div");
        } else{
            popUpDiv.classList.remove("animate-div");
        }
    });
    popUpImages.forEach(popUpImage=>{
        popUpImage.addEventListener("click",()=>{
            const url = popUpImage.querySelector("img").getAttribute("src");
            popUpImg.src=url;
            checkBox.checked= !checkBox.checked
            if(checkBox.checked){
                popUpDiv.classList.add("animate-div");
            } else{
                popUpDiv.classList.remove("animate-div");
            }
        });
    });
};

try {
    window.addEventListener("load", () => {
        setTimeout(() => {
            document.querySelector('#loading').style.opacity = '0';
            document.querySelector('#loading').style.zIndex = '0';
            document.querySelector('#loading').style.display = 'none';
        }, 2000);
    })
    document.addEventListener('DOMContentLoaded', function () {
        new LocomotiveScroll({
            el: document.querySelector('.app'),
            smooth: true
        });
    });
    handleScroll();
    loadBlurryImages();
    arrow.addEventListener('click', () => appElement.scrollTo({ top: window.innerHeight - 50, behavior: "smooth" }));
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
    popUpImage();
    const interval = 3000;
    setInterval(() => moveCarousel(1), interval);
} catch (err) { }

// appElement && appElement.scrollTo({
//     top: document.querySelector('.testimonials').getBoundingClientRect().top-70,
//     behavior: "smooth"
// });
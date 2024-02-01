const appElement = document.querySelector('.app');
const navElement = document.querySelector('nav');
const titleElement = document.getElementById('title');
const homeElement = document.querySelector('#home');
const slidebarWidth = appElement.offsetWidth - appElement.clientWidth;
const arrow = document.querySelector('#arrow');
const arrowUp = document.querySelector('#arrowUp');
const homeHeight = homeElement.clientHeight;
const navigators = document.querySelectorAll('.navigators');
const ham = document.querySelector('.ham');

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
        titleElement.style.color = 'white'
        titleElement.style.opacity = '.7'
    } else {
        navElement.style.backgroundColor = "rgb(215, 158, 126)";
        navElement.style.borderBottom = null;
        navElement.style.color = 'black'
        titleElement.style.color = 'black'
        titleElement.style.opacity = '1'
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
    appElement.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
    });
};
const handleScollUp = () => {
    appElement.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
const navigate = (e) => {
    if (e.target.dataset.link == 'home') {
        return appElement.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    const element = document.getElementById(e.target.dataset.link);
    if (element) {
        appElement.scrollTo({
            top: element.getBoundingClientRect().top,
            behavior: "smooth",
        });
    }
}
const makeTeamElements = () => {
    const teamItem = document.querySelector('.team-item');
    const teamContainer = teamItem.parentElement;
    const team = [
        {
            name: 'abc',
            img: '1.jpg',
        },
        {
            name: 'def',
            img: '2.jpg',
        },
        {
            name: 'abc',
            img: '1.jpg',
        },
        {
            name: 'def',
            img: '2.jpg',
        },
        {
            name: 'abc',
            img: '1.jpg',
        },
        {
            name: 'def',
            img: '2.jpg',
        },
    ]
    team.forEach((member) => {
        const clone = teamItem.cloneNode(true);
        clone.style.height = '100px';
        clone.style.width = '100px';
        clone.querySelector('.team-face').src = `./assets/team/${member.img}`;
        clone.querySelector('.name').innerText = member.name;
        teamContainer.appendChild(clone);
    })
    teamItem.remove();
}
const makeReviewsElements = () => {
    const reviewItem = document.querySelector('.review');
    const reviewContainer = reviewItem.parentElement;
    for (let i = 0; i < 5; i++) {
        const clone = reviewItem.cloneNode(true);
        clone.querySelector('.card-text').innerText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus tempora cum beatae pariatur`;
        clone.querySelector('.card-footer').innerText = `- XYZ`;
        reviewContainer.appendChild(clone);
    }
    reviewItem.remove();
}
const openSmallNav = () => {
    navElement.querySelector(".collapsible").classList.add("open");
    navElement.querySelector(".collapsible").classList.remove("close");
    setTimeout(() => {
        navElement.querySelector(".collapsible").classList.add("open-nav");
    }, 100);
}
const closeSmallNav = () => {
    navElement.querySelector(".collapsible").classList.add("close");
    navElement.querySelector(".collapsible").classList.remove("open");
    navElement.querySelector(".collapsible").classList.remove("open-nav");

}
const handleSmallNavOpen= () => {
    ham.addEventListener('click', () => {
        ham.classList.toggle('open');
        if (ham.classList.contains('open')) {
            openSmallNav();
        } else {
            closeSmallNav();
        }
    })
}
const handleResize = () => {
    if(window.innerWidth < 1270){
        ham.style.display = 'block';
        closeSmallNav();
        navElement.querySelector(".collapsible").style.top = navElement.getBoundingClientRect().height + 10 + 'px';
        handleSmallNavOpen();
        navElement.querySelectorAll(".collapsible li p").forEach((p) => {
            p.addEventListener('click', () => {
                ham.classList.toggle('open');
                if (ham.classList.contains('open')) {
                    openSmallNav();
                } else {
                    closeSmallNav();
                }
            })
        })
    } else{
        ham.style.display = "none";
        navElement.querySelector(".collapsible").style.display = 'flex';
        navElement.style.width = `calc(100vw - ${slidebarWidth}px)`;
    }
}


arrow.addEventListener('click', handleScollDown);
arrowUp.addEventListener('click', handleScollUp);
appElement.addEventListener("scroll", handleScroll);
navigators.forEach(naviagtor => {
    naviagtor.addEventListener("click", navigate)
})
handleScroll();
makeTeamElements();
makeReviewsElements();
window.addEventListener('resize', handleResize);
handleResize();
if (window.innerWidth < 1270) {
    window.addEventListener('click', (event) => {
      const navElement = document.querySelector(".collapsible");
    //   if (!navElement.contains(event.target)) {
        if (navElement.classList.contains("open-nav")) {
            ham.click();
            console.log('click');
        }
    //   }
    });
  }
  

// appElement.scrollTo({
//     top: document.querySelector('.products').getBoundingClientRect().top,
// });

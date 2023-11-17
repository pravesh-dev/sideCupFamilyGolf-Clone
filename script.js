gsap.to("header > div:nth-child(1)", {
  background: "#000",
  padding: "1vh 7.8vw 0 7.9vw",
  scrollTrigger: {
    trigger: "header",
    scroller: "body",
    start: "top 0%",
    end: "top -5%",
    scrub: 1,
  },
});
gsap.to("#header-book-btns", {
  background: "#000",
  paddingBottom: "1vh",
  scrollTrigger: {
    trigger: "header",
    scroller: "body",
    start: "top 0%",
    end: "top -8%",
    scrub: 1,
  },
});
gsap.to("body", {
  background: "#000",
  scrollTrigger: {
    trigger: "body",
    scroller: "body",
    start: "top 0%",
    end: "top -80%",
    scrub: 2,
  },
});
gsap.to("#quotes-content-container img:nth-child(1)", {
  top: "24%",
  left: "13%",
  scrollTrigger: {
    trigger: "#quotes-content-container",
    scroller: "body",
    start: "top 30%",
    end: "top 10%",
    scrub: 1,
  },
});
gsap.to("#quotes-content-container img:nth-child(2)", {
  bottom: "24%",
  right: "13%",
  scrollTrigger: {
    trigger: "#quotes-content-container",
    scroller: "body",
    start: "top 30%",
    end: "top 10%",
    scrub: 2,
  },
});

gsap.from("#before-footer h2", {
  top: "23%",
  scrollTrigger: {
    trigger: "#before-footer h2",
    scroller: "body",
    start: "top 70%",
    end: "top 70%",
    scrub: 1,
  }
});
let circleWithCursor = document.querySelector("#circle-with-cursor");
let circleBlurWithCursor = document.querySelector("#circle-blur-with-cursor");
let cursorHoverAnimation = document.querySelectorAll(".cursor-hover-effect");
let circleSize = 15;
let circleX = 0;
let circleY = 0;

//function to change the cursor position and size
function updateCursorPositionWidth(x, y, size) {
  circleWithCursor.style.transition = "width 0.5s, height 0.5s";
  circleWithCursor.style.left = x - size / 2 + "px";
  circleWithCursor.style.top = y - size / 2 + "px";
  circleWithCursor.style.width = size + "px";
  circleWithCursor.style.height = size + "px";
}
// Cursor animations
document.addEventListener("mousemove", (e) => {
  circleX = e.clientX;
  circleY = e.clientY;
  updateCursorPositionWidth(circleX, circleY, circleSize);
  circleBlurWithCursor.style.left = e.clientX - 150 + "px";
  circleBlurWithCursor.style.top = e.clientY - 150 + "px";
});

// Cursor hover animations for multiple items

cursorHoverAnimation.forEach((items) => {
  items.addEventListener("mouseenter", (e) => {
    circleWithCursor.style.background = "transparent";
    circleSize = 72;
    updateCursorPositionWidth(circleX, circleY, circleSize);
    circleWithCursor.style.border = "2px solid white";
  });
  items.addEventListener("mouseleave", (e) => {
    circleWithCursor.style.background = "#9CCA1F";
    circleSize = 15;
    updateCursorPositionWidth(circleX, circleY, circleSize);
    circleWithCursor.style.border = "none";
  });
});

// section1 arrow animation
let section1Arrow = document.querySelector("#section1-arrow");
let isAnimation = false;

// function update section1 arrow size
function updatesection1Arrow() {
  section1Arrow.style.background = "#9CCA1F";
  section1Arrow.style.scale = 0.2;
  section1Arrow.style.fontSize = "8vw";
}
function defaultsection1Arrow() {
  section1Arrow.style.background = "transparent";
  section1Arrow.style.scale = 1;
  section1Arrow.style.fontSize = "3vw";
}
section1Arrow.addEventListener("mouseenter", () => {
  updatesection1Arrow();
});
section1Arrow.addEventListener("mouseleave", () => {
  defaultsection1Arrow();
});

// Slider Animation
const changeBackground = async (slider, imageURL) => {
  slider.style.background = `url("${imageURL}") no-repeat right center/cover`;
  // await sleep(3000);
};

const updateDots = (dots, currentIndex) => {
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("active-slider-dot");
    } else {
      dot.classList.remove("active-slider-dot");
    }
  });
};

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");
  const sliderDots = document.querySelectorAll(".slider-dot-items");

  const imageUrls = [
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-about-1.jpg?strip=all&lossy=1&sharp=1&fit=682%2C1024&ssl=1",
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-menu.jpg?strip=all&lossy=1&sharp=1&fit=682%2C1024&ssl=1",
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/hero-5.jpg?strip=all&lossy=1&sharp=1&fit=1002%2C1024&ssl=1",
  ];

  let currentIndex = 0;

  // Initial background
  changeBackground(slider, imageUrls[currentIndex]);
  updateDots(sliderDots, currentIndex);

  sliderDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      changeBackground(slider, imageUrls[currentIndex]);
      updateDots(sliderDots, currentIndex);
    });
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    changeBackground(slider, imageUrls[currentIndex]);
    updateDots(sliderDots, currentIndex);
  }, 3000);
});

// Qoutes Animation

let quotesParaBox = document.querySelector("#quotes-paras");
let updateParas = (quotesPara) => {
  quotesParaBox.style.opacity = 0;
      setTimeout(() => {
        quotesParaBox.innerHTML = quotesPara;
        quotesParaBox.style.opacity = 1;
      }, 500);
};

document.addEventListener("DOMContentLoaded", () => {
  const quotesParagraphs = [
    "Great facilities — loads of bays in the driving range with many coloured targets to aim for and a ball tracking monitor to see if you’re getting close.",
    "Excellent couple of hours, relax and enjoy in the fun. Staff were accommodating, friendly and very helpful. Café on site for refreshments etc. Will keep children entertained during the holidays. Worth a visit if you haven’t been.",
    "Pleasantly surprised to discover the mini golf is open until 10pm during weekdays 😊 Always enjoy visit here, cafe does some nice goodies too 👍🏽",
    "Definitely one of the best places to hit some golf balls, the TopTracer in most of the bays is a fantastic addition for the price! I’m yet to try the Mini golf but everyone seems to be having fun over there!",
    "Absolutely loved the experience! The staff looked after me ensured I was enjoying the range and gave me helpful tips to get the best out of my game. Digital screens to see my progress. I’ll be back 😁 🏌🏽‍♀️",
    "I absolutely love the adventure golf here. It seems every time I come they’ve added a new feature. My mum and I usually come together and it’s such a laugh. The designs for the holes are creative and the two different courses makes it more fun as you can complete both and compare your scores!",
  ];

  let currentParaIndex = 0;

  updateParas(quotesParagraphs[currentParaIndex]);

  setInterval(() => {
    currentParaIndex = (currentParaIndex + 1) % quotesParagraphs.length;
    updateParas(quotesParagraphs[currentParaIndex]);
  }, 5000);
});
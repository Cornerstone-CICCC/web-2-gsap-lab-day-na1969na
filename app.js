gsap.registerPlugin(ScrollTrigger);

const tl1 = gsap.timeline();
tl1
  .from("h1 span:first-child", {
    x: -1000,
    duration: 1,
    ease: "power3.out",
  })
  .from(
    "h1 span:last-child",
    {
      x: 1000,
      duration: 1,
      ease: "power3.out",
    },
    "0"
  )
  .fromTo(
    ".content p",
    {
      y: 50,
      scale: 0.5,
      opacity: 0,
    },
    {
      y: 0,
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
    }
  )
  .from("img", {
    y: 1000,
    duration: 0.5,
    ease: "power3.out",
  });

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2 h2",
    toggleActions: "play none reverse none",
  },
});

tl2
  .from(".section2 h2 span:first-child", {
    y: -1000,
    duration: 0.5,
    ease: "power3.out",
  })
  .from(".section2 h2 span:last-child", {
    y: -1000,
    duration: 0.5,
    ease: "power3.out",
  })
  .fromTo(
    ".section2 p",
    {
      y: 50,
      scale: 0.5,
      opacity: 0,
    },
    {
      y: 0,
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
    }
  );

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".horizontal-sections h2",
    toggleActions: "play none reverse none",
  },
});

tl3.from(".horizontal-sections h2", {
  x: -1000,
  fontSize: 200,
  duration: 0.5,
  ease: "power3.out",
});

const spans = document.querySelectorAll(".section3 span");

spans.forEach((span, index) => {
  tl3.fromTo(
    span,
    {
      y: 1000,
      duration: 0.3,
      ease: "power3.out",
    },
    {
      y: 0,
      backgroundColor: "white",
      color: "black",
      duration: 0.3,
      ease: "power3.out",
      delay: index * 0.1,
    }
  );
});

const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3",
    start: "center top",
    toggleActions: "play none reverse none",
  },
});

tl4.from(".portfolio-item", {
  x: 1000,
  duration: 0.5,
  ease: "power3.out",
  stagger: 0.1,
})
  

const tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section5 h2",
    toggleActions: "play none reverse none",
  },
});

const h2Text = document.querySelector(".section5 h2");
const h2Content = h2Text.innerText;
h2Text.innerHTML = "";
h2Content.split(/(?=.)/).forEach((char) => {
  const span = document.createElement("span");
  span.innerText = char === ' ' ? '\u00A0' : char;
  h2Text.appendChild(span);
});

tl5
  .from(".section5 h2 span", {
    opacity: 0,
    y: -50,
    duration: 0.5,
    stagger: 0.1,
    ease: "power2.out",
  })
  .from(".section5 p", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
  })
  .from(".section5 button", {
    scale: 0.5,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
  })
  .to(".section5", {
    backgroundColor: "black",
    duration: 0.3,
    ease: "power2.out",
  })
  .from(".section5", {
    backgroundPosition: "125% 90%",
    duration: 0.8,
    ease: "power2.out",
  });

gsap.to(".horizontal-sections", {
  scrollTrigger: {
    trigger: ".horizontal-sections",
    start: "top top",
    scrub: true,
    pin: true,
  },
  xPercent: "-34.5",
});


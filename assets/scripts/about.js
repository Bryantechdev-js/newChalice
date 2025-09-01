// const { transform } = require("next/dist/build/swc/generated-native");

const toggle  = function(){
  // alert(`runing`)
  document.querySelector("nav").classList.toggle("active")
}

document.querySelector(".toggleMenu").addEventListener("click",()=>toggle())

const searchbar = document.querySelector('.searchbar');
const searchInput = document.querySelector('#searchInput');

searchbar.addEventListener('click', () => {
  searchbar.classList.toggle('active');
  if (searchbar.classList.contains('active')) {
    searchInput.focus();
  }
});

// Optional: Simple search filter logic
searchInput.addEventListener('keyup', (e) => {
  const query = e.target.value.toLowerCase();
  console.log("Searching for:", query);
  // 👉 Later: filter site content dynamically
});


 const slidesData = [
      { img: "https://picsum.photos/id/1015/1600/900", caption: "Primary School of Charlice - Assiduité, Travail, Réussite" },
      { img: "https://picsum.photos/id/1016/1600/900", caption: "100% Success - Common Entrance & F.S.L.C" },
      { img: "https://picsum.photos/id/1018/1600/900", caption: "Sports: Football, Basketball, Handball, Volleyball" },
      { img: "https://picsum.photos/id/1020/1600/900", caption: "Optional Courses - Swimming & Tennis" },
      { img: "https://picsum.photos/id/1024/1600/900", caption: "Technical Education: Tailoring, Mechanic, Electricity" },
      { img: "https://picsum.photos/id/1035/1600/900", caption: "Secondary School Bilingual - Technical & General Education" },
      { img: "https://picsum.photos/id/1037/1600/900", caption: "Modern Facilities: Library, Lab, Computer Room" }
    ];

    const carousel = document.getElementById("carousel");

    slidesData.forEach((slide, index) => {
      const slideDiv = document.createElement("div");
      slideDiv.classList.add("carousel-slide");
      if(index === 0) slideDiv.classList.add("active");

      slideDiv.innerHTML = `
        <img src="${slide.img}" alt="slide ${index+1}">
        <div class="caption">${slide.caption}</div>
      `;
      carousel.appendChild(slideDiv);
    });

    const slides = document.querySelectorAll(".carousel-slide");
    let currentIndex = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) slide.classList.add("active");
      });
    }

    document.getElementById("next").addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    });

    document.getElementById("prev").addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    });

    // autoplay
    setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }, 5000);


   

document.querySelectorAll(".panel").forEach((panel, i) => {
  const petals = panel.querySelectorAll(".petal");

  petals.forEach((petal, index) => {
    gsap.fromTo(petal, 
      {scale:0, opacity:0}, 
      {
        scale:1, opacity:1, 
        duration:1.2,
        scrollTrigger:{
          trigger: panel,
          start: "top center",
          end: "bottom center",
          scrub: true
        }
      }
    );
  });
});

let pt = gsap.timeline({
  scrollTrigger:{
    trigger:".panel",
    start:"top center",
    end:"bottom bottom",
    duration:1,
    scrub:true
  }
})

pt.to(".sportContainer",{
   opacity:1,
  clipPath:"circle(100% at 50% 50%)"
})

// pt.to(".o:nth-child(1)",{
//   y:0
// })




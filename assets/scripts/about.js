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


    // Array of programs
const programsData = [
  {
    title: "General Education",
    image: "https://images.unsplash.com/photo-1581091215365-9fa1f1d2fc21?auto=format&fit=crop&w=800&q=80",
    items: [
      { icon: "https://img.icons8.com/color/24/000000/checkmark.png", text: "Secondary School: F1 – F5" },
      { icon: "https://img.icons8.com/color/24/000000/checkmark.png", text: "Primary School: Nursery – Class 6" },
      { icon: "https://img.icons8.com/color/24/000000/checkmark.png", text: "Exams: Common Entrance & FSLC (100% success)" },
      { icon: "https://img.icons8.com/color/24/000000/checkmark.png", text: "Languages: French & English" },
      { icon: "https://img.icons8.com/color/24/000000/checkmark.png", text: "Arts & Sports: Football, Basketball, Handball, Volleyball" }
    ]
  },
  {
    title: "Technical Education",
    image: "https://images.unsplash.com/photo-1581091870626-ff285dd28c2b?auto=format&fit=crop&w=800&q=80",
    items: [
      { icon: "https://img.icons8.com/color/24/000000/checkmark.png", text: "Tailoring / Couture" },
      { icon: "https://img.icons8.com/color/24/000000/checkmark.png", text: "Mechanics" },
      { icon: "https://img.icons8.com/color/24/000000/checkmark.png", text: "Building & Construction" },
      { icon: "https://img.icons8.com/color/24/000000/checkmark.png", text: "Electricity & Electronics" },
      { icon: "https://img.icons8.com/color/24/000000/checkmark.png", text: "Laboratory & Computer Skills" }
    ]
  }
];

const container = document.getElementById("programsContainer");

// Create cards dynamically
programsData.forEach(program => {
  const card = document.createElement("div");
  card.classList.add("program-card");

  card.innerHTML = `
    <img class="program-image" src="${program.image}" alt="${program.title}">
    <h3>${program.title}</h3>
    <ul class="program-list">
      ${program.items.map(item => `<li><img src="${item.icon}" alt="check"><span>${item.text}</span></li>`).join('')}
    </ul>
  `;

  container.appendChild(card);
});

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
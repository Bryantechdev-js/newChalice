// const { default: gsap } = require("gsap");

// const { default: gsap } = require("gsap");

const toggle  = function(){
  // alert(`runing`)
  document.querySelector("nav").classList.toggle("active")
}

document.querySelector(".toggleMenu").addEventListener("click",()=>toggle())

const testimonials = document.querySelectorAll(".testimonial");
    const dots = document.querySelectorAll(".dot");
    const nextBtn = document.querySelector(".nextBtn");
    const prevBtn = document.querySelector(".prevBtn");
    const slider = document.getElementById("slider");
    let index = 0;
    let interval = setInterval(nextTestimonial, 1000); // auto slide every 1s

    function showTestimonial(i) {
      testimonials.forEach((t, idx) => {
        t.classList.remove("active");
        dots[idx].classList.remove("active");
      });
      testimonials[i].classList.add("active");
      dots[i].classList.add("active");
    }

    function nextTestimonial() {
      index = (index + 1) % testimonials.length;
      showTestimonial(index);
    }

    function prevTestimonial() {
      index = (index - 1 + testimonials.length) % testimonials.length;
      showTestimonial(index);
    }

    nextBtn.addEventListener("click", () => {
      nextTestimonial();
      resetInterval();
    });

    prevBtn.addEventListener("click", () => {
      prevTestimonial();
      resetInterval();
    });

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        index = i;
        showTestimonial(index);
        resetInterval();
      });
    });

    function resetInterval() {
      clearInterval(interval);
      interval = setInterval(nextTestimonial, 1000);
    }

    // Pause on hover
    slider.addEventListener("mouseenter", () => clearInterval(interval));
    slider.addEventListener("mouseleave", () => resetInterval());


    // Gallery data
    const galleryData = [
      { category: "sport", src: "assets/images/charlice images/IMG-20250830-WA0033.jpg", caption: "Club Majorete" },
      {category:"sport",src:"assets/images/charlice images/IMG-20250830-WA0103.jpg",caption:"sport time for the small"},
      { category: "sport", src: "assets/images/charlice images/IMG-20250830-WA0036.jpg", caption: "Club scout" },
      {category:"teachers",src:"assets/images/chalice images/IMG-20250830-WA0095.jpg",caption:"teachers"},
      {category:"sport",src:"assets/images/chalice images/IMG-20250830-WA0058.jpg",caption:"Sport club"},
      {category:"teachers",src:"./assets/images/chalice images/IMG-20250830-WA0096.jpg",caption:"chalice teachers playing football"},
      { category: "education", src: "https://picsum.photos/id/1005/600/400", caption: "Education 1" },
      { category: "education", src: "https://picsum.photos/id/1015/600/400", caption: "Education 2" },
    ];

    const gallery = document.getElementById("gallery");
    const tabs = document.querySelectorAll(".tab");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const closeBtn = document.getElementById("closeBtn");

    function renderGallery(filter = "all") {
      gallery.innerHTML = "";
      galleryData.forEach(item => {
        if (filter === "all" || item.category === filter) {
          const div = document.createElement("div");
          div.classList.add("gallery-item", "show");
          div.innerHTML = `
            <img src="${item.src}" alt="${item.caption}">
            <div class="overlay">${item.caption}</div>
          `;
          // Open popover on click
          div.addEventListener("click", () => {
            lightboxImg.src = item.src;
            lightbox.classList.add("show");
          });
          gallery.appendChild(div);
        }
      });
    }

    // 🔍 Search Bar Expand/Collapse
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


    // Tabs
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        renderGallery(tab.getAttribute("data-filter"));
      });
    });

    // Close popover
    closeBtn.addEventListener("click", () => {
      lightbox.classList.remove("show");
    });

    lightbox.addEventListener("click", e => {
      if (e.target === lightbox) {
        lightbox.classList.remove("show");
      }
    });

    renderGallery();

    const faqs = [
    {question: "What is Chalice?", answer: "Chalice is a modern educational institution running primary and secondary education."},
    {question: "What age groups do you cover?", answer: "Primary from Nursery to Class 6 and Secondary from Form 1 to 5."},
    {question: "Do you offer sports activities?", answer: "Yes, football, basketball, swimming, and other activities are part of student life."},
    {question: "Are there discounts for siblings?", answer: "Yes, we offer discounts for parents with more than two children enrolled and for old parents."},
    {question: "How do I apply?", answer: "Applications can be submitted via the Admissions page on our website."},
    {question: "Can I visit the school?", answer: "Yes, campus visits are available by scheduling through our contact page."},
    {question: "Do you have online learning?", answer: "Yes, Chalice supports hybrid learning with online resources."}
  ];

  const container = document.getElementById("faq-container");

  faqs.forEach((faq) => {
    const item = document.createElement("div");
    item.classList.add("faq-item");

    item.innerHTML = `
      <div class="faq-question">
        <p>${faq.question}</p>
        <span>+</span>
      </div>
      <div class="faq-answer">
        <p>${faq.answer}</p>
      </div>
    `;

    item.addEventListener("click", () => {
      // Collapse all other items
      document.querySelectorAll(".faq-item").forEach(i => {
        i.classList.remove("act");
      });
      // Toggle current item
      item.classList.toggle("act");
    });

    container.appendChild(item);
  });



// ✅ Animate the h1 on page load

   gsap.fromTo("h1", {
          y: -1110,
          scale:1.5,
      }, {
          y: 0,
          scale:1,
            duration: 1,
          ease: "power2.out",
            scrollTrigger: {
                trigger: "h1",
                end: "bottom buttom",
                invalidateOnRefresh: true,
                scrub:2
            }
      });

      let GT = gsap.timeline({
        scrollTrigger:{
          trigger:".gallery-section",
          start:"top center",
          end:"bottom bottom",
          duration:1,
          scrub:true
        }
      })

      GT.to(".gallery-section",{
        clipPath:"circle(100% at 50% 50%)",
        opacity:1
      })

      let slt = gsap.timeline({
        scrollTrigger:{
          trigger:".about",
          start:"top center",
          end:"bottom bottom",
          duration:0.5,
          scrub:true
        }
      })

      slt.to(".slice1",{
        y:0
      })
      slt.to(".slice2",{
        y:0
      })
      slt.to(".slice3",{
        y:0
      })

      slt.to(".ab",{
        y:0
      })

      slt.to(".aboutImage img",{
        opacity:1,
        clipPath:"circle(100% at 50% 50%)"
      })

      
         gsap.to(".const",{
        clipPath:"circle(100% at 50% 50%)",
        opacity:1,
        markers:true,
        scrollTrigger:{
            trigger:".education",
            start:"top top",
            end:"bottom bottom",
            scrub:2,
            pin:true,
            markers:true
        }
      })

    
      const videos = document.querySelectorAll("video")
       const discover_tl = gsap.timeline({
        scrollTrigger:{
            trigger: ".education",
            scrub:2,
            start:"top 20%",
            end:"buttom buttom",
            ease:"ease",markers:true,
            
        }
      })
      discover_tl.to(".const",{
        clipPath:"circle(100% at 50% 50%)",
        opacity:1,
        markers:true,
      })

      discover_tl.to(".cards1",{
        y:35,
        
      })
      discover_tl.to(".cards2",{
        y:35,

      })
      discover_tl.to(".cards3",{
        y:35,

      })
      discover_tl.to(".cards4",{
        y:35,

      })
      discover_tl.to(".cards5",{
        y:35,

      })
      discover_tl.to(".cards6",{
        y:35,

      })

      let vt = gsap.timeline({
        scrollTrigger:{
          trigger:".sportVideo",
          start:"top 20%",
          end:"bottom bottom",
          scrub:true,
        }
      })
      
     vt.to(".video1",{
      y:0,
      clipPath:"circle(100% at 50% 50%)",
      onStart: ()=> document.querySelector(".video1").play()
     })

     vt.to(".video2",{
      y:0,
      clipPath:"circle(100% at 50% 50%)",
      delay:20,
      onStart: ()=> document.querySelector(".video2").play()
     })

     vt.to(".video3",{
      y:0,
      clipPath:"circle(100% at 50% 50%)",
      delay:40,
      onStart: ()=> document.querySelector(".video3").play()
     })
     

     let evt = gsap.timeline({
       scrollTrigger:{
         trigger:".event",
         start:"top 20%",
         end:"bottom bottom",
         scrub:true
       }
     })

     evt.to(".wiper",{
      x:"100%",
      duration:1
     })

     gsap.from(".contact-info", {
    opacity: 0,
    x: -50,
    duration: 1,
    scrollTrigger: {
      trigger: ".contact-info",
      start: "top 80%"
    }
  });

  // Fade in form
  gsap.from(".contact-form-map", {
    opacity: 0,
    x: 50,
    duration: 1,
    scrollTrigger: {
      trigger: ".contact-form-map",
      start: "top 80%"
    }
  });
  
  let promo =[
  "Chalice the best choice for the primary and secondary education of your child",
  "Attendance-work-success",
  "Cours Facutatifs au prix de 50000fcfa, l'annee scolaire. payable en 2 tranches. Natation et tennes au prix de 75000fcfa"
]
let indx = 0
const publish = function(){

  document.querySelector(".promo").textContent = promo[indx]
  setTimeout(()=>{
    if(indx > 2){ indx = 0}
    publish()
    indx+=1
  },10500)
}
publish()

      
      

      
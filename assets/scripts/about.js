// const { transform } = require("next/dist/build/swc/generated-native");



const toggle  = function(){
  // alert(`runing`)
  document.querySelector("nav ul").classList.toggle("active")
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
   { img:"https://res.cloudinary.com/darpyj4ff/image/upload/v1759639827/Gemini_Generated_Image_4fhjat4fhjat4fhj_1_k1pdbe.png", caption: "chalice educational primary and secondary school" },
   { img:"https://res.cloudinary.com/darpyj4ff/image/upload/v1759638471/chaliceTeacher2_utzzhv.jpg", caption: "Students in class" },
   { img:"https://res.cloudinary.com/darpyj4ff/image/upload/v1759638219/IMG_20250911_133300_1_wy49uv.jpg", caption: "Chalice primary and secondary school students" },
   { img:"https://res.cloudinary.com/darpyj4ff/image/upload/v1759638451/chaliceStudentsInClass2_jvpdme.jpg", caption: "Students in class" },
   { img:"https://res.cloudinary.com/darpyj4ff/image/upload/v1759638432/chaliceStudentInClass_ngb323.jpg", caption: "Students in class" },
      { img: "https://res.cloudinary.com/darpyj4ff/image/upload/v1759638120/chaliceMajorete2_lk7tgt.jpg", caption: "Chalice prety majoret club" },
      { img: "https://res.cloudinary.com/darpyj4ff/image/upload/v1759638188/charliceMainTeacher_jkcjsm.jpg", caption: "mini Majorete of chalice" },
      { img: "https://res.cloudinary.com/darpyj4ff/image/upload/v1759638296/chaliceFeedingGround_iqp398.jpg", caption: "chalice  Feeding center" },
      { img: "https://res.cloudinary.com/darpyj4ff/image/upload/v1759638330/chalicePlayground2_btug7p.jpg", caption: "chalice playground" },
      { img: "https://res.cloudinary.com/darpyj4ff/image/upload/v1759638314/chalicePlayground_vjdk3b.jpg", caption: "chalice playground" },
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


   

let pt = gsap.timeline({
  scrollTrigger:{
    trigger:".panel",
    start:"top center",
    end:"bottom bottom",
    duration:1,
    scrub:2
  }
})


//fade in
pt.to(".panel-Title h2",{
  opacity:1
})
pt.to(".panel-Title p",{
  opacity:1,
})
pt.to(".central1",{
  opacity:1
})

pt.to([".o1",".o2",".o3",".o4"],{
  opacity:1,delay:0.2
})

//fade out

pt.to(".central1",{
  opacity:0,delay:2
})

pt.to([".o1",".o2",".o3",".o4"],{
  opacity:0,delay:1.5
})

//fade in

pt.to(".central2",{
  opacity:1,delay:1
})

pt.to([".oo1",".oo2",".oo3",".oo4"],{
  opacity:1,delay:1.5
})

//fade out

pt.to(".central2",{
  opacity:0,delay:1.2
})

pt.to([".oo1",".oo2",".oo3",".oo4"],{
  opacity:0,delay:1
})

//fade in


pt.to(".central3",{
  opacity:1
})

pt.to([".ooo1",".ooo2",".ooo3",".ooo4"],{
  opacity:1,delay:1
})

//fade out

pt.to(".central3",{
  opacity:0,delay:1.2
})

pt.to([".ooo1",".ooo2",".ooo3",".ooo4"],{
  opacity:0,delay:1
})

//fade in 


pt.to(".central4",{
  opacity:1
})

pt.to([".oooo1",".oooo2",".oooo3",".oooo4"],{
  opacity:1,delay:1
})

//fade out

// pt.to(".central4",{
//   opacity:0,delay:1.2
// })

// pt.to([".oooo1",".oooo2",".oooo3",".oooo4"],{
//   opacity:0,delay:1
// })



// let pt = gsap.timeline({
//   scrollTrigger:{
//     trigger:".panel",
//     start:"top center",
//     end:"bottom bottom",
//     duration:1,
//     scrub:true
//   }
// })

// pt.to(".sportContainer",{
//    opacity:1,
//   clipPath:"circle(100% at 50% 50%)"
// })


let promo =[
  "Chalice the best choice for the primary and secondary education of your child",
  "Attendance-work-success",
  "Cours Facutatifs au prix de 50000fcfa, l'annee scolaire. payable en 2 tranches. Natation et tennes au prix de 75000fcfa"
]
let indx = 0
const publish = function(){

  document.querySelector(".promo").textContent = promo[indx]
  setTimeout(()=>{
    indx+=1
    publish()
  },3000)
}
publish()
// pt.to(".o:nth-child(1)",{
//   y:0
// })

// let playground = gsap.timeline({
//   scroollTrigger:{
//     trigger:".yy",
//     start:"top center",
//     end:"bottom bottom",
//     scrub:true,
//     duration:1
//   }
// })

// playground.fromTo(".ch img",{
//   x:-1500,
// },{
//   x:0
// })

//animating all the sections

document.querySelectorAll(".parts").forEach(el =>{
  let sec = gsap.timeline({
    scrollTrigger:{
      trigger:el,
      start:"top top",
      end:"bottom bottom",
      scrub:true,
      duration:1
    }
  })

  sec.to(el,{
    clipPath:"circle(100% at 50% 50%)",
    opacity:1
  })
})


//playground gsap animation

gsap.to(".playgroundImage img",{
  x:0,
})

gsap.to(".sep span",{
  opacity:1,
  stagger:true,
  delay:1
})



// Loading Animation Handler
window.addEventListener('load', function() {
    const loader = document.getElementById('flipLoader');
    const progressBar = document.getElementById('progressBar');
    const body = document.body;
    
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        
        progressBar.style.width = progress + '%';
        
        if (progress >= 100) {
            clearInterval(progressInterval);
            
            setTimeout(() => {
                loader.style.opacity = '0';
                loader.style.visibility = 'hidden';
                body.classList.remove('loading');
                
                setTimeout(() => {
                    if (loader.parentNode) {
                        loader.parentNode.removeChild(loader);
                    }
                }, 500);
            }, 800);
        }
    }, 200);
});

setTimeout(() => {
    const loader = document.getElementById('flipLoader');
    const body = document.body;
    
    if (loader && loader.style.visibility !== 'hidden') {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        body.classList.remove('loading');
        
        setTimeout(() => {
            if (loader.parentNode) {
                loader.parentNode.removeChild(loader);
            }
        }, 500);
    }
}, 5000);

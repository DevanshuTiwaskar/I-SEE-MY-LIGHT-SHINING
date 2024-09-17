



function smoothscrollling(){

    // Initialize Lenis
const lenis = new Lenis({
    duration: 3.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Integrate Lenis with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);
}


function animation(){
    let tl2 = gsap.timeline({
        ease: Power4,
    });
    
    tl2.from("#line1-part1", {
        opacity: 0,
        onStart: function () {
          var h5timer = document.querySelector("#line1-part1 h5");
          var grow = 0;
          setInterval(function () {
            if (grow < 100) {
              h5timer.innerHTML = grow++;
            } else {
              h5timer.innerHTML = grow;
            }
          }, 60);
        },
      });
      tl2.to("#loading",{
        x:2000,
        duration:0.4,
        delay: 7,
      },"one")
      tl2.to("#loading1",{
        x:2000,
        duration:0.6,
        delay: 7,
        ease: Power4,
      },"one")
      tl2.to("#loading2",{
        x:2000,
        duration:0.8,
        delay: 7,
        ease: Power4,
      },"one")
      tl2.to("#loading3",{
        x:2000,
        duration:1,
        delay: 7,
        ease: Power4,
      },"one")
    
    tl2.from("#nav #ri  ",{
        opacity: 0,
        y:100
    
    })
    tl2.from("#nav #le  ",{
        opacity: 0,
        y:100
        
    },)
    tl2.from("#page1 .text IMG", {
        
        opacity: 0,
        stagger: 0.3, // Optional: adds a delay between each animation
        // duration: 1 // Optional: sets the duration of the animation
    });
    tl2.from("#page1 .text h1", {
        y: 100,
        opacity: 0,
        stagger: 0.3, // Optional: adds a delay between each animation
        duration: 1 // Optional: sets the duration of the animation
    });
    
    tl2.from("#smalltext #leftside #line",{
        x:-100,
        opacity:0,
    })
    tl2.from("#smalltext #leftside h3",{
        x:-100,
        opacity:0, 
    },"two")
    tl2.from("#smalltext #rightside h3",{
        opacity:0, 
    },"two")
    tl2.from("#page2 #text1 #line1 #ion ",{
        opacity: 0,
        stagger: 1, 
        scrollTrigger: {
            trigger: "#nav",
            scroller: "body",
            // markers:true,
            start: "10%",
            end: "20%",
            scrub: 1,
          },
    })
    
}

function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }

function shery(){

    Shery.mouseFollower({
      //Parameters are optional.
      skew: 2,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
    
    Shery.imageMasker(".mask" /* Element to target.*/, {
      //Parameters are optional.
      mouseFollower: true,
      text: "Shery",
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
    
    Shery.makeMagnet(".magnet" /* Element to target.*/, {
      //Parameters are optional.
    //   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
}


shery()
animation();
// locomotiveAnimation()
smoothscrollling();
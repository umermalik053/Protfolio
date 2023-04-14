// GSAP Animations

gsap.from('.hero h1', { opacity: 0, y: -50, duration: 1 });
gsap.from('.hero p', { opacity: 0, y: 50, duration: 1 });

gsap.from('#about h2', { opacity: 0, y: -50, duration: 1 });
gsap.from('#about p', { opacity: 0, y: 50, duration: 1 });
gsap.from('#about .btn', { opacity: 0, y: 50, duration: 1, delay: 0.5 });

gsap.from('#services h2', { opacity: 0, y: -50, duration: 1 });
gsap.from('.service', { opacity: 0, y: 50, duration: 1, stagger: 0.2 });

gsap.from('#portfolio h2', { opacity: 0, y: -50, duration: 1 });
gsap.from('.portfolio-item', { opacity: 0, y: 50, duration: 1, stagger: 0.2 });

gsap.from('#contact h2', { opacity: 0, y: -50, duration: 1 });
gsap.from('form input, form textarea, form button', { opacity: 0, y: 50, duration: 1, stagger: 0.2 });

// Smooth Scrolling

const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const section = document.querySelector(link.getAttribute('href'));
    const sectionTop = section.offsetTop;

    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
  });
});

// Mobile Navigation

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
// GSAP Animation

gsap.registerPlugin(ScrollTrigger);

gsap.from('.hero h1', {
opacity: 0,
y: -50,
duration: 1,
ease: 'power2.out',
delay: 0.5
});

gsap.from('.hero p', {
opacity: 0,
y: 50,
duration: 1,
ease: 'power2.out',
delay: 1
});

gsap.from('#about h2', {
opacity: 0,
y: -50,
duration: 1,
ease: 'power2.out',
scrollTrigger: {
trigger: '#about',
start: 'top 80%',
end: 'bottom 60%',
toggleActions: 'play none none reverse'
}
});

gsap.from('#about p', {
opacity: 0,
y: 50,
duration: 1,
ease: 'power2.out',
scrollTrigger: {
trigger: '#about',
start: 'top 80%',
end: 'bottom 60%',
toggleActions: 'play none none reverse'
}
});

gsap.from('#about .btn', {
opacity: 0,
y: 50,
duration: 1,
ease: 'power2.out',
delay: 0.5,
scrollTrigger: {
trigger: '#about',
start: 'top 80%',
end: 'bottom 60%',
toggleActions: 'play none none reverse'
}
});

gsap.from('#services h2', {
opacity: 0,
y: -50,
duration: 1,
ease: 'power2.out',
scrollTrigger: {
trigger: '#services',
start: 'top 80%',
end: 'bottom 60%',
toggleActions: 'play none none reverse'
}
});

gsap.from('.service', {
opacity: 0,
y: 50,
duration: 1,
ease: 'power2.out',
stagger: 0.2,
scrollTrigger: {
trigger: '.service',
start: 'top 80%',
end: 'bottom 60%',
toggleActions: 'play none none reverse'
}
});

gsap.from('#portfolio h2', {
opacity: 0,
y: -50,
duration: 1,
ease: 'power2.out',
scrollTrigger: {
trigger: '#portfolio',
start: 'top 80%',
end: 'bottom 60%',
toggleActions: 'play none none reverse'
}
});

gsap.from('.portfolio-item', {
opacity: 0,
y: 50,
duration: 1,
ease: 'power2.out',
stagger: 0.2,
scrollTrigger: {
trigger: '.portfolio-item',
start: 'top 80%',
end: 'bottom 60%',
toggleActions: 'play none none reverse'
}
});

gsap.from('#contact h2', {
opacity: 0,
y: -50,
duration: 1,
ease: 'power2.out',
scrollTrigger: {
trigger: '#contact',
start: 'top 80%',
end: 'bottom 60%',
toggleActions: 'play none none reverse'
}
});

gsap.from('form input, form textarea, form button', {
opacity: 0,
y: 50,
duration: 1,
ease: 'power2.out',
stagger: 0.2,
scrollTrigger: {
trigger: 'form',
start: 'top 80%',
end: 'bottom 60%',
toggleActions: 'play none none reverse'
}
});


function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
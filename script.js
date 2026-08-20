document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll Animations (Intersection Observer)
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Trigger inner animations if needed
        const floatingEls = entry.target.querySelectorAll('.floating-el');
        floatingEls.forEach((el, index) => {
          // Stagger floating entrance slightly
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, index * 100);
        });
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    observer.observe(section);
  });

  // 2. Floating Emojis continuous animation
  const floatEls = document.querySelectorAll('.floating-el');
  floatEls.forEach((el) => {
    // Add base CSS animation class
    el.classList.add('float-anim');
    
    // Randomize duration and delay so they don't move in sync
    const randomDuration = 4 + Math.random() * 4; // 4s to 8s
    const randomDelay = Math.random() * 2; // 0s to 2s
    
    el.style.animationDuration = `${randomDuration}s`;
    el.style.animationDelay = `${randomDelay}s`;
  });

  // 3. Social Icons Bobbing
  const socialLinks = document.querySelectorAll('.social-link');
  socialLinks.forEach((link, index) => {
    // We add bob-anim via JS to ensure it runs continuously
    link.classList.add('bob-anim');
    link.style.animationDelay = `${index * 0.5}s`;
    
    // Pause animation on hover to allow the hover CSS transform to take over
    link.addEventListener('mouseenter', () => {
      link.style.animationPlayState = 'paused';
    });
    link.addEventListener('mouseleave', () => {
      link.style.animationPlayState = 'running';
    });
  });

  // 4. Subtle Cursor Parallax Interaction
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    // Move hero elements slightly based on cursor
    const logo = document.querySelector('.logo');
    if (logo) {
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      logo.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
    
    // Move Morpheus slightly
    const morpheus = document.querySelector('.morpheus-img');
    if (morpheus) {
      const moveX = (x - 0.5) * 30;
      morpheus.style.transform = `translateX(${moveX}px)`;
    }
  });
  
  // 5. Initial Hero Animation Stagger
  setTimeout(() => {
    const hero = document.getElementById('hero');
    if(hero) hero.classList.add('visible');
  }, 100);
});

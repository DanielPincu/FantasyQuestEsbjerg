<template>
  <div class="text-center md:pt-20 pt-0  text-orange-500">
    <button class="btn animate-me" href="#">Buy tickets</button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import anime from 'animejs';

onMounted(() => {
  const target = document.querySelector('.animate-me');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        anime({
          targets: '.animate-me',
          rotate: '1turn',
          duration: 2000,
        });
        observer.unobserve(target); 
      }
    });
  }, {
    threshold: 0.5 
  });

  observer.observe(target);
});
</script>

 
<style>
:root {
  --white: #ececec;
  --black: #111111;
  --red1: #E7BB0A;
  --red2: #F3951A;
  --colorPrimary: #F3951A;
  --colorSecondary: #E7BB0A;
  --cubic-bezier: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --star-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

button.btn {
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  border: 0;
  position: relative;
  /* letter-spacing: 0.15em; */
  margin: 0 auto;
  padding: 1rem 2.5rem;
  background: transparent;
  outline: none;
  font-size: 22px;
  color: var(--white);
  transition: all 0.5s var(--cubic-bezier) 0.15s;
}

button.btn::after,
button.btn::before {
  content: "";
  position: absolute;
  height: 35%;
  width: 10%;
  transition: all 0.5s var(--cubic-bezier);
  z-index: -2;
  clip-path: var(--star-path);
}

button.btn::before {
  background-color: var(--colorSecondary);
  top: -0.75rem;
  left: 0.5rem;
  animation: topAnimation 2s var(--cubic-bezier) 0.25s infinite alternate;
}

button.btn::after {
  background-color: var(--colorPrimary);
  top: 3rem;
  left: 13rem;
  animation: bottomAnimation 2s var(--cubic-bezier) 0.5s infinite alternate;
}

button.btn:hover {
  color: white;
}

button.btn:hover::before,
button.btn:hover::after {
  top: 0;
  height: 100%;
  width: 100%;
  clip-path: none;
  animation: none;
}

button.btn:hover::after {
  left: 0rem;
}

button.btn:hover::before {
  top: 0.5rem;
  left: 0.35rem;
}

* {
  box-sizing: border-box;
}

@keyframes topAnimation {
  0% { transform: translateY(1rem); }
  100% { transform: translateY(-1rem); }
}

@keyframes bottomAnimation {
  0% { transform: translateX(0rem); }
  100% { transform: translateX(-5rem); }
}
</style>




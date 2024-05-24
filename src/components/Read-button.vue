<template>
    <div class="text-center text-orange-500">
      <button class="btn2 animate-me" href="#">Read More</button>
    </div>
  </template>
  
  <style scoped>
    :root {
      --white: #ececec;
      --black: #111111;
      --red1: #E7BB0A;
      --red2: #F3951A;
      --colorPrimary: #b2ae9d;
      --colorSecondary: #F3951A;
      --cubic-bezier: cubic-bezier(0.68, -0.55, 0.265, 1.55);
      --star-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    }

    button.btn2 {
      text-transform: uppercase;
      text-decoration: none;
      font-weight: 700;
      border: 0;
      position: relative;
      margin: 0 auto;
      padding: 1rem 2.5rem;
      background: transparent;
      outline: none;
      font-size: 22px;
      color: var(--white);
      transition: all 0.5s var(--cubic-bezier) 0.15s;
    }
    
    button.btn2::after,
    button.btn2::before {
      content: "";
      position: absolute;
      height: 35%;
      width: 10%;
      transition: all 0.5s var(--cubic-bezier);
      z-index: -2;
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      border: none; /* Border removed from the triangles */
    }
    
    button.btn2::before {
      background-color: #4D839A;
  
      top: -0.75rem;
      left: 0.5rem;
      animation: topAnimation 2s var(--cubic-bezier) 0.25s infinite alternate;
    }
    
    button.btn2::after {
      background-color: white;
      top: 3rem;
      left: 13rem;
      animation: bottomAnimation 2s var(--cubic-bezier) 0.5s infinite alternate;
    }
    
    button.btn2:hover {
      color: rgb(0, 0, 0);
    }
    
    button.btn2:hover::before,
    button.btn2:hover::after {
      top: 0;
      height: 100%;
      width: 100%;
      clip-path: none;
      animation: none;
    }
    
    button.btn2:hover::after {
      left: 0rem;
    }
    
    button.btn2:hover::before {
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

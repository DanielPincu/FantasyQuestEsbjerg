<template>
    <div class="text-center pt-5 text-orange-500">
        <button class="btn" href="#">Buy ticket</button>
    </div>
</template>

<script setup>

</script>

 <!-- <style lang="scss" scoped>


//color/ui color variables
$white: #ececec;
$black: #f2ebeb;
$red1: #e74c3c;
$red2: #c92918;
$colorPrimary: $red1;
$colorSecondary: $red2;
$cubic-bezier: cubic-bezier(0.68, -0.55, 0.265, 1.55);

//split button mixin
@mixin btn__split($foregroundColor, $backgroundColor, $textColor) {
  button.btn {
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 700;
    border: 0;
    //display: block;
    position: relative;
    letter-spacing: 0.15em;
    margin: 0 auto;
    padding: 1rem 2.5rem;
    background: transparent;
    outline: none;
    font-size: 28px;
    color: $textColor;
    transition: all 0.5s $cubic-bezier 0.15s;
    &::after,
    &::before {
      border: 0;
      content: "";
      position: absolute;
      height: 40%;
      width: 10%;
      transition: all 0.5s $cubic-bezier;
      z-index: -2;
      border-radius: 50%;
      //animation: grow 1s infinite;
    }
    &::before {
      border: 0;
      background: #F0CE00;
      top: -0.75rem;
      left: 0.5rem;
      animation: topAnimation 2s $cubic-bezier 0.25s infinite alternate;
    }
    &::after {
      background: #F3951A;
      top: 3rem;
      left: 13rem;
      animation: bottomAnimation 2s $cubic-bezier 0.5s infinite alternate;
    }
    &:hover {
      color: white;
      &::before,
      &::after {
        top: 0;
        //transform: skewx(-10deg);
        height: 100%;
        width: 100%;
        border-radius: 0;
        animation: none;
      }
      &::after {
        left: 0rem;
      }
      &::before {
        top: 0.5rem;
        left: 0.35rem;
      }
    }
  }
}

* {
  box-sizing: border-box;
}
body,
html {
  height: 100%;
}

body {
  font-family: "Lato", sans-serif;
  color: $black;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
}

.container {
  width: auto;
  margin: auto;
}
// a {
//  text-transform: uppercase;
//  text-decoration: none;
//  font-weight: 700;
// }
@keyframes topAnimation {
  from {
    transform: translate(0rem, 0);
  }
  to {
    transform: translate(0rem, 3.5rem);
  }
}
@keyframes bottomAnimation {
  from {
    transform: translate(-11.5rem, 0);
  }
  to {
    transform: translate(0rem, 0);
  }
}

@include btn__split($colorPrimary, $colorSecondary, $black);
</style>  -->

<style>
:root {
  --white: #ececec;
  --black: #111111;
  --red1: #E7BB0A;
  --red2: #F3951A;
  --colorPrimary: #E7BB0A;
  --colorSecondary: #F3951A;
  --cubic-bezier: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --star-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

button.btn {
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  border: 0;
  position: relative;
  letter-spacing: 0.15em;
  margin: 0 auto;
  padding: 1rem 2.5rem;
  background: transparent;
  outline: none;
  font-size: 28px;
  color: var(--white);
  transition: all 0.5s var(--cubic-bezier) 0.15s;
}

button.btn::after,
button.btn::before {
  content: "";
  position: absolute;
  height: 40%;
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
  0% { transform: translateY(0); }
  100% { transform: translateY(-1rem); }
}

@keyframes bottomAnimation {
  0% { transform: translateY(0); }
  100% { transform: translateY(1rem); }
}
</style>




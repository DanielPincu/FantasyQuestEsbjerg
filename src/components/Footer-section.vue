<template>
  <footer class="w-full bg-[#1A202C] pt-32 flex flex-col items-center justify-center text-center">
    <img class="w-full h-full" src="../assets/img/footer2.webp" alt="Footer Image">
    
    <div class="bg-[#165678] w-full grid grid-cols-12 gap-4 justify-center pb-10">
      
      <div class="col-span-12 container mx-auto sm:col-span-6 sm:order-2 order-1 flex justify-center items-center">
        <img src="../assets/img/spons.png" alt="Sponsors">
      </div>
      
      
      <div class="col-span-12 sm:col-span-3 sm:order-3 order-2 flex flex-col justify-center items-center">

        <a class="instagram-gradient" target="_blank" href="https://www.instagram.com/fantasyfestivalen"><i class="fa-brands fa-instagram text-5xl"></i></a>
        <p class="text-3xl">Follow us on Instagram</p>
       

        
        <a class="facebook-gradient" target="_blank" href="https://www.facebook.com/fantasyfestivalen/?locale=da_DK"><i class="fa-brands fa-facebook text-5xl pt-10"></i></a>
        <p class="text-3xl">Follow us on Facebook</p>
        

      </div>
      
      
      <div class="col-span-12 sm:col-span-3 sm:order-1 order-3 flex justify-center items-center">
        <p class="text-3xl">Contact</p>
      </div>
    </div>
  </footer>
</template>


<style scoped>

.instagram-gradient {
  background: none;
  -webkit-text-fill-color: #fff;
  animation-duration: 1000;
}
.instagram-gradient:hover {
  background: linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}



.facebook-gradient {
  background: none;
  -webkit-text-fill-color: #fff;
  animation-duration: 1000;
}
.facebook-gradient:hover {
  background: linear-gradient(45deg, #405DE6, #5851DB, #833AB4);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

</style>
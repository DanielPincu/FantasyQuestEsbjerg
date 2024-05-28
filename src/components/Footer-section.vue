<template>
  <footer class="w-full bg-[#1A202C] pt-10 flex flex-col items-center justify-center text-center">
    <img class="w-full h-full" src="../assets/img/footer.webp" alt="Footer Image">
    
    <div class="bg-[#155777] w-full grid grid-cols-12 gap-4 justify-center pb-10">
      
      <div class="col-span-12 container mx-auto sm:col-span-6 sm:order-2 order-1 flex justify-center items-center">
        <img class="w-96 h-auto" src="../assets/img/sponsors.webp" alt="Sponsors">
      </div>
      
      
      <div class="col-span-12 sm:col-span-3 sm:order-3 order-2 flex flex-col justify-center items-center pt-5">
        <p class="text-3xl pb-10">Follow us on social media</p>
        <a class="instagram-gradient" target="_blank" aria-label="Follow us on Instagram" href="https://www.instagram.com/fantasyfestivalen"><i class="fa-brands fa-instagram text-4xl md:text-5xl"></i></a>
        <a href="https://www.instagram.com/fantasyfestivalen" target="_blank" aria-label="Follow us on Facebook" class="text-2xl hover:underline">Follow us on Instagram</a>
       

        
        <a class="facebook-gradient" target="_blank" aria-label="Follow us on Facebook" href="https://www.facebook.com/fantasyfestivalen/?locale=da_DK"><i class="fa-brands fa-facebook text-4xl md:text-5xl pt-10"></i></a>
        <a href="https://www.facebook.com/fantasyfestivalen/?locale=da_DK" target="_blank" aria-label="Follow us on Facebook" class="text-2xl hover:underline">Follow us on Facebook</a>
        

      </div>
      
      
      <div class="col-span-12 flex-col sm:col-span-3 sm:order-1 order-3 flex justify-center items-center pt-5">
        <p class="text-3xl pb-10">Contact us</p>
        <i class="fa-solid fa-phone-volume text-4xl"></i>
        <p class="md:text-3xl pb-5">76 16 20 00</p>

        <a href="/faq" aria-label="Write us an email"><i class="fa-solid fa-envelope text-4xl hover:text-slate-300"></i></a>
        <a href="/faq" aria-label="Write us an email" class="text-2xl pb-5 hover:underline">Write us an email</a>
        
      </div>
    </div>
  
    <div class="w-full container mx-auto bg-[#1A202C] text-white text-center py-2">
      <p class="text-sm">Fantasy Quest is an enchanting experience of the Fantasy Festival© <br> All rights reserved. © 2024</p>
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
  background: linear-gradient(90deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D);
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
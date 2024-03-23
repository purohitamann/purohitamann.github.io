

 const menubar = document.getElementById("menubar");
 const mainNav = document.querySelector(".nav-main");
 const social= document.querySelector(".social");

 const words = ["Hey, its Aman Purohit", "Software & Network Major","at Sheridan,TRC","based in Burlington,ON"]
 const dynamicText = document.querySelector("h1 span");

 let wordIndex= 0;
 let charIndex =1;
 let isDeleting = false;
menubar.addEventListener("click", function () {
    
         mainNav.classList.toggle("show");
       
  });

const typeEffect = ()  => {
        const currentWord = words[wordIndex];
        const currentChar = currentWord.substring(0,charIndex);
       
        dynamicText.textContent = currentChar;

        if(!isDeleting && charIndex < currentWord.length){
          charIndex++;
          setTimeout(typeEffect,120);
        } else if(isDeleting && charIndex >0){
              charIndex--;
              setTimeout(typeEffect,50);
        }else{
          isDeleting = !isDeleting;
          wordIndex = !isDeleting ? (wordIndex +1) % words.length : wordIndex;
          setTimeout(typeEffect,1000);
          
        }
}
typeEffect();
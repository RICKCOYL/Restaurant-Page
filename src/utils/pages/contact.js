function  contact() {
    const contactForm = document.createElement('section');
    contactForm.className = 'contact-section'
    contactForm.innerHTML = `
    <form class="form shadow">
  
    <div class="form-floating mt-3 pt-2">
    <input type="text" class="form-control" id="floatingInput" placeholder="John"><br>
    <label  for="floatingInput">First name:</label><br>
    </div>
        
    <div class="form-floating mb-3">
    <input type="text" class="form-control" id="floatingInput" placeholder="Doe"><br>
    <label  for="floatingInput">Last name:</label><br>
    </div>
    </div>   
  </form>
  `

 
  return contactForm.outerHTML
}

let a;

const hideContact = (id) =>{
  if (a === 1) {
     document.querySelector('.contact-section').style.display = 'block';

     a = 0;
     return a;
   }
 
   const contForm = document.querySelector('.contact-section')
  contForm.classList.remove('form');
   a = 1;
   return a;
}

export{contact}
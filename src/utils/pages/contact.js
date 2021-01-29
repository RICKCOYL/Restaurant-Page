function  contact() {
    const contactForm = document.createElement('section');
    contactForm.className = 'contact-section'
    contactForm.innerHTML = `
    <h1 class='text-center'>Contact us</h1>
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

const hideContact = (id) =>{
  const x = document.getElementById("my-contact");
  const contactText = document.getElementById('display-text')
  if (x.textContent === Contact) {
    contactText.appendChild(contact());
  } else {
    contactText.remove();
  }

  //return contactText
}

export{contact,hideContact}
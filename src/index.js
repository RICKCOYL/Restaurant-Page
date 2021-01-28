import menu from "./utils/pages/menu";
import navbar from "./utils/pages/navbar.js";
import contact from "./utils/pages/contact";

import  "./utils/css/style.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const display = () => {
    const content = document.querySelector('#content');

content.innerHTML = `
<div>
${navbar()}
</div>
<div>
${ menu()}
</div>
<div>
${contact()}
</div>


`
}

const loadEventListners = () =>{
    const homebtn = document.querySelector('#home');
    const menubtn = document.querySelector('#menu');
    const contactbtn = document.querySelector('#contact');

    homebtn.addEventListener('click',loadHome);
    menubtn.addEventListener('click',loadMenu);
    contactbtn.addEventListener('click',loadMenu);
}

function hideShow() {
    if (a === 1) {
      document.getElementById('author').style.display = 'block';
      document.getElementById('title').style.display = 'block';
      document.getElementById('pages').style.display = 'block';
      a = 0;
      return a;
    }
  
    document.getElementById('author').style.display = 'none';
    document.getElementById('title').style.display = 'none';
    document.getElementById('pages').style.display = 'none';
    a = 1;
    return a;
  }

display()
//loadEventListners()
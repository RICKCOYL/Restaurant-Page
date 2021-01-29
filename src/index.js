import {menu}from "./utils/pages/menu";
import navbar from "./utils/pages/navbar.js";
import {contact} from "./utils/pages/contact";

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

${contact()}
</div>


`
}

const loadEventListners = () =>{
    const homebtn = document.querySelector('#home');
    const menubtn = document.querySelector('.menu-section');
    const contactbtn = document.querySelector('.contact-section');

    //homebtn.addEventListener('click',loadHome);
    menubtn.addEventListener('click',hideMenu);
    contactbtn.addEventListener('click',hideContact);
}

//hideContact()
//hideMenu()
display()
//loadEventListners()
import {menu,hideMenu}from "./utils/pages/menu";
import navbar from "./utils/pages/navbar.js";
import {contact, hideContact} from "./utils/pages/contact";

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
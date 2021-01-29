import {menu, hideMenu}from "./utils/pages/menu";
import navbar from "./utils/pages/navbar.js";
import {contact,hideContact} from "./utils/pages/contact";
import {home} from "./utils/pages/home"

import  "./utils/css/style.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const display = () => {
    const content = document.querySelector('#content');

content.innerHTML = `
<div>
${navbar()}
</div>
<div id="display-text">
${home()}
${ menu()}

${contact()}
</div>


`
}

const loadEventListners = () =>{
  hideContact()
  hideMenu()
    //homebtn.addEventListener('click',loadHome);
    menubtn.addEventListener('click',hideMenu);
    contactbtn.addEventListener('click',hideContact);
}


display()
//loadEventListners()
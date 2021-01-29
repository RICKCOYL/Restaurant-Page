function  menu (){
    const menuList = document.createElement('section');
    menuList.className = 'menu-section'
    menuList.innerHTML = `
    <article class="menu">
        <div class ="menu-content>
          <div>
             <h3>Rice & chicken</h3>
          </div>
          <div>
             <p>Price:200$</p>
          </div>
           
        </div>

        <div class ="menu-content>
          <div>
             <h3>Rice & chicken</h3>
          </div>
          <div>
             <p>Price:200$</p>
          </div>
           
        </div>

        <div class ="menu-content>
          <div>
             <h3>Rice & chicken</h3>
          </div>
          <div>
             <p>Price:200$</p>
          </div>
           
        </div>

        <div class ="menu-content>
          <div>
             <h3>Rice & chicken</h3>
          </div>
          <div>
             <p>Price:200$</p>
          </div>
           
        </div>

        <div class ="menu-content>
          <div>
             <h3>Rice & chicken</h3>
          </div>
          <div>
             <p>Price:200$</p>
          </div>
           
        </div>

        <div class ="menu-content>
          <div>
             <h3>Rice & chicken</h3>
          </div>
          <div>
             <p>Price:200$</p>
          </div>
           
        </div>

        <div class ="menu-content>
          <div>
             <h3>Rice & chicken</h3>
          </div>
          <div>
             <p>Price:200$</p>
          </div>
           
        </div>
  </article>
  `

 

  return menuList.outerHTML
}


let a;

const hideMenu = () =>{
   if (a === 1) {
      document.querySelector('.menu-section').style.display = 'block';
 
      a = 0;
      return a;
    }
  
    const menuSec = document.querySelector('.menu-section')
    menuSec.classList.remove('menu');
    a = 1;
    return a;
}
export{menu}

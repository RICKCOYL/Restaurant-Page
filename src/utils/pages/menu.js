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

const hideMenu = () =>{
   const x = document.getElementById("my-menu");
   const menuText = document.getElementById("display-text")
  if (x.textContent === Menu) {
   menuText.appendChild(menu());
  } else {
   menuText.remove();
  }

//  return menuText
}
export{menu, hideMenu}

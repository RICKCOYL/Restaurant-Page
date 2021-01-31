function menu () {
  const menuList = document.createElement('section')
  menuList.className = 'menu-section'
  menuList.innerHTML = `
    <h2 class='text-center mb-5'>Overrated Menu</h2>
    <article class="menu">
    
    <div>
    <h5>Chicken</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    </div>

    <div>
    <h5>Chicken</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    </div>

    <div>
    <h5>Chicken</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    </div>

    <div>
    <h5>Chicken</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    </div>

    <div>
    <h5>Chicken</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    </div>

    <div>
    <h5>Chicken</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    </div>
       
    </article>
  `

  return menuList.outerHTML
}

const hideMenu = () => {
  const x = document.getElementById('my-menu')
  const menuText = document.getElementById('display-text')
  if (x.textContent === Menu) {
    menuText.appendChild(menu())
  } else {
    menuText.remove()
  }

  //  return menuText
}
export { menu, hideMenu }

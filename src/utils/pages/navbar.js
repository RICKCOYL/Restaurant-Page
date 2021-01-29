export default function  navbar (){
    const navigation = document.createElement('nav');

    navigation.innerHTML = `
        <ul class="nav-links">
            <li class=""><a href="#" class=""  >Home</a></li>
            <li class=""><a href="#" id="my-menu"  onclick="hideMenu ">Menu</a></li>
            <li class=""><a href="#" id="my-contact"  onclick="hideContact">Contact</a></li>
        </ul>
  `
  return navigation.outerHTML
}
export default function  navbar (){
    const navigation = document.createElement('nav');

    navigation.innerHTML = `
        <ul class="nav-links">
            <li class=""><a href="#" class="" >Home</a></li>
            <li class=""><a href="#" class=""  onclick="menu()">Menu</a></li>
            <li class=""><a href="#" class=""  onclick="contact()">Contact</a></li>
        </ul>
  `
  return navigation.outerHTML
}
export default function  navbar (){
    const navigation = document.createElement('nav');

    navigation.innerHTML = `
        <ul class="nav-links">
            <li class=""><a href="#" class="btn btn-info" >Home</a></li>
            <li class=""><a href="#" class="btn btn-info mx-2"  onclick="menu()">Menu</a></li>
            <li class=""><a href="#" class="btn btn-info"  onclick="contact()">Contact</a></li>
        </ul>
  `
  return navigation.outerHTML
}
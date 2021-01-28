export default  navBar = () =>{
    const navigation = document.createElement('nav');

    navigation.innerHTML = `
    <nav>
        <ul class="">
            <li class=""><a href="#" class="">Home</a></li>
            <li class=""><a href="#" class="">Menu</a></li>
            <li class=""><a href="#" class="">Contact</a></li>
        </ul>
  </nav>
  `
  return navigation
}
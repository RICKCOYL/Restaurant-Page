export default function navbar() {
  const navigation = document.createElement('nav');

  navigation.innerHTML = `
        <ul class="nav-links">
            <li class=""><a href="#" class="active mb-5"  >Home</a></li>
            <li class=""><a href="#" class="mb-5">Menu</a></li>
            <li class=""><a href="#">Contact</a></li>
        </ul>
  `;
  return navigation.outerHTML;
}
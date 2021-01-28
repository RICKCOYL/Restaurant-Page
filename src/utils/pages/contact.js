export default  contact = () =>{
    const contactForm = document.createElement('section');

    contactForm.innerHTML = `
    <form class="form">
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname"><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname">
  </form>
  `
  return contactForm
}
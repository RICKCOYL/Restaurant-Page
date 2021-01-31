const home = () => {
  const homePage = document.createElement('section');
  homePage.className = 'contact-section';
  homePage.innerHTML = `
    <h1 class='text-center mb-5'>OVERRATED RESTAURANT</h1>
    <h3 class='text-center'>Want some overpriced food stuffed down your throat by a bunch of overpolite waiters? Want to show your date how rich you really are? Overrated is the place for you! Our prices are bad for your heart as well as your wallet.</h3>
    
  `;


  return homePage.outerHTML;
};

export default home;
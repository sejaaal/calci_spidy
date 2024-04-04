let display = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let buttonsArray = Array.from(buttons);
let string = "";

buttonsArray.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            display.value = string;

        } else if (e.target.innerHTML == "AC") {
            string = "";
            display.value = string;

        } else if (e.target.innerHTML == '=') {
            string = eval(string);
            display.value = string;
        } else {
            string = string + e.target.innerHTML;
            display.value = string;
        }
    });
});


  function createSpider() {
    const spider = document.createElement('div');
    spider.classList.add('spider');
    spider.style.left = `${Math.random() * (window.innerWidth - 40)}px`; // Random horizontal position
    
    const eye1 = document.createElement('div');
    eye1.classList.add('eye');
    eye1.style.top = '8px';
    eye1.style.left = '12px';

    const eye2 = document.createElement('div');
    eye2.classList.add('eye');
    eye2.style.top = '8px';
    eye2.style.left = '22px';

    const leg1 = createLeg(8, 26);
    const leg2 = createLeg(8, 32);
    const leg3 = createLeg(8, 38);
    const leg4 = createLeg(8, 44);
    const leg5 = createLeg(26, 26);
    const leg6 = createLeg(26, 32);
    const leg7 = createLeg(26, 38);
    const leg8 = createLeg(26, 44);

    spider.appendChild(eye1);
    spider.appendChild(eye2);
    spider.appendChild(leg1);
    spider.appendChild(leg2);
    spider.appendChild(leg3);
    spider.appendChild(leg4);
    spider.appendChild(leg5);
    spider.appendChild(leg6);
    spider.appendChild(leg7);
    spider.appendChild(leg8);

    document.body.appendChild(spider);

    spider.addEventListener('animationend', () => {
      document.body.removeChild(spider); // Remove spider after animation ends
    });
  }

  function createLeg(left, top) {
    const leg = document.createElement('div');
    leg.classList.add('leg');
    leg.style.left = `${left}px`;
    leg.style.top = `${top}px`;
    return leg;
  }

  // Function to generate spiders at regular intervals
  function generateSpiders() {
    setInterval(createSpider, 1500); // Adjust interval as needed
  }

  // Start generating spiders when the page loads
  window.onload = generateSpiders;

  
  
  
  
  
  
  
  
  
  


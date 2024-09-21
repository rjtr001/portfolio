// Tab functionality
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link")
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab")
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab")
}

// Sidemenu functionality
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

// Google Sheets form submission
const scriptURL = 'https://script.google.com/macros/s/AKfycbzFf_jHF_8HaYlKpVgTPtf9-AdbCh1N1TojZub_0n4fe1H8FbsJc7H_rl-9vB1nCDoBcw/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        console.log('Success!', response);
        msg.innerHTML = " Message Sent Successfully";
        setTimeout(function() {
          msg.innerHTML = "";
        }, 5000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message));
    });
// Add event listener for mobile devices
document.addEventListener('touchstart', function(event) {
  if (event.touches.length === 1) {
    event.preventDefault();
  }
}, false);
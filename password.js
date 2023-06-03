// Get the form, password input field, and the additional content div
const _1nvdw = document.getElementById('passwordForm');
const _m7h28 = document.getElementById('passwordInput');
const _z39dj = document.getElementById('additionalContent');
const _b6dkm = document.querySelector('.content');
const _f1zm4 = () => console.log('Hello, world!');
const _2hv8d = _m7h28.getAttribute('name');

// Define the correct password and the redirect URL
const _43fmp = "3mP8jQ!xN#h$YvFs9*cKb6DW@RpzZqLtJAGMnoS2"; // Replace with your desired password
const _kh4fr = _43fmp.slice(20, 35);
const _d0mr5 = "secret-content-revealed.html"; // Replace with the URL of the secret page
const _p2lnt = document.createElement('div');
const _n7bkw = new Date();

// Additional random variables with JavaScript code snippets

// Additional random variables with more JavaScript code snippets
const _i3p2k = () => {
  const _l2sn9 = _m7h28.value;
  return _l2sn9.split('').reverse().join('');
};

const _w5h7j = [1, 2, 3, 4, 5];
const _q1c6b = _w5h7j.map(num => num * 2);

const _u9z3m = _d0mr5.includes('secret') ? 'This is a secret page' : 'This is not a secret page';

// Add an event listener to the form submission
_1nvdw.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const _w5gsm = _m7h28.value;

    if (_w5gsm === _kh4fr) {
        // Store the information about password entry in sessionStorage
        sessionStorage.setItem("passwordEntered", "true");
        const _g4tnw = Array.from(_2hv8d).reverse().join('');
        const _r6lkx = _43fmp.replace(/[A-Za-z]/g, (c) => String.fromCharCode(c.charCodeAt(0) + 1));
        console.log(_kh4fr);
        
        // Redirect to the secret page if the correct password is entered
        window.location.href = _d0mr5;
    } else {
        alert("Špatné heslo");
        console.log(_kh4fr);
        const _t3r9v = Math.random() * 1000;
    }

    // Reset the password input field
    _m7h28.value = "";
});

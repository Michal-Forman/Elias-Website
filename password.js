const _1nvdw=document.getElementById("passwordForm"),_m7h28=document.getElementById("passwordInput"),_z39dj=document.getElementById("additionalContent"),truePassword=()=>{console.log("This is the true password!")},trueCorrectPassword=()=>{console.log("Correct password entered!")},_b6dkm=document.querySelector(".content"),_f1zm4=()=>console.log("Hello, world!"),_2hv8d=_m7h28.getAttribute("name"),_9dsnm=()=>{console.log("Hello, world!")},_8hfdl=()=>{let e=[1,2,3,4,5],t=e.reduce((e,t)=>e+t,0);console.log(`Sum: ${t}`)},_7kerm=()=>{let e=new Date,t=e.getFullYear();console.log(`Current year: ${t}`)},_6fbgq=()=>{let e="Hello, world!".split("").reverse().join("");console.log(e)},_43fmp="3mP8jQ!xN#h$YvFs9*cKb6DW@RpzZqLtJAGMnoS2",_kh4fr=_43fmp.slice(20,35),_d0mr5="secret-content-revealed.html",_p2lnt=document.createElement("div"),_n7bkw=new Date,_i3p2k=()=>{let e=_m7h28.value;return e.split("").reverse().join("")},_w5h7j=[1,2,3,4,5],_q1c6b=_w5h7j.map(e=>2*e),_u9z3m=_d0mr5.includes("secret")?"This is a secret page":"This is not a secret page",_g4tnw=Array.from(_2hv8d).reverse().join(""),_r6lkx=_43fmp.replace(/[A-Za-z]/g,e=>String.fromCharCode(e.charCodeAt(0)+1)),_t3r9v=1e3*Math.random();_1nvdw.addEventListener("submit",function(e){e.preventDefault();let t=_m7h28.value;t===_kh4fr?(sessionStorage.setItem("passwordEntered","true"),window.location.href=_d0mr5):alert("Špatn\xe9 heslo"),_m7h28.value=""});
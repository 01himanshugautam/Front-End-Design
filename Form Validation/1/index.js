const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

// add Event

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})

// define the validate function
const validate = () => {
    // .trim() remove the extra space on start and end as  "   ma  h i   "    "ma h i"

    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    // validate username
    if (usernameVal === "") {
        setErrorMsg(username, 'Username cannot be blank');
    } else if (usernameVal.length <= 2) {
        setErrorMsg(username, 'Username min 3 char');
    } else {
        setSuccessMsg(username);
    }

    // validate Email
    let mail = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    if (emailVal === "") {
        setErrorMsg(email, 'Email cannot be blank');
    } else if (!emailVal.match(mail)) {
        setErrorMsg(email, 'Not a valid Email');
    } else {
        setSuccessMsg(email);
    }

    // validate Phone
    if (phoneVal === "") {
        setErrorMsg(phone, 'Phone cannot be blank');
    } else if (phoneVal.length != 10) {
        setErrorMsg(phone, 'Not a valid phone');
    } else {
        setSuccessMsg(phone);
    }

    // validate Password
    var pass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,20}$/;
    if (passwordVal === "") {
        setErrorMsg(password, 'Password cannot be blank');
    } else if (!passwordVal.match(pass)) {
        setErrorMsg(password, 'Password must be 7 characters as ( Example@123 )');
    } else {
        setSuccessMsg(password);
    }

    // validate Confirm Password
    if (cpasswordVal === "") {
        setErrorMsg(cpassword, 'Password cannot be blank');
    } else if (passwordVal != cpasswordVal) {
        setErrorMsg(cpassword, 'Password not Matched');
    } else {
        setSuccessMsg(cpassword);
    }

    function setErrorMsg(input, errormsgs) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = "form-control error";
        small.innerText = errormsgs;
    }

    function setSuccessMsg(input) {
        const formControl = input.parentElement;
        formControl.className = "form-control success";
    }
}

$.getJSON("https://api.ipify.org?format=json",
    function(data) {
        $("#ip").html(data.ip);
    })

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
}

// console.log("This file is index.js");
// var a = location.hostname;
// var b = location.host;
// var c = location.hash;
// var d = location.origin;
// var e = location.pathname;
// var f = location.protocol;
// var g = location.search;
// var h = location.port;
// console.log(a + " location.hostname");
// console.log(b + " location.host");
// console.log(c + " location.hash;");
// console.log(d + " location.origin");
// console.log(e + " location.pathname")
// console.log(f + " location.protocol");
// console.log(g + " location.search");
// console.log(h + " location.port");
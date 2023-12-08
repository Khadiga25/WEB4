let username = document.querySelector("#username")
let password = document.querySelector("#password")
let loginBtn = document.querySelector("#sign-in")
let getuser = localStorage.getItem("username")
let getpassword = localStorage.getItem("password")
loginBtn.addEventListener("click", function(e) {
    e.preventDefault()
    if (username.value === "" || password.value === "") {
        alert("enter your data")
    } else {
        if ((getuser && getuser.trim() === username.value && getpassword && getpassword.trim() === password.value)) {
            setTimeout(() => {
                window.location = "index.html"
            }, 1500);
        } else {
            alert("pass or user wrong")
        }
    }
})
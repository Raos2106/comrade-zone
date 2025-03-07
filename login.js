let password = document.getElementById("password")
let icon = document.getElementById("pass-icon")
let loginPage = document.getElementById("login-body")
let closed= document.getElementById("close")
let loginBtn = document.getElementById("btn")

icon.onclick = function(){
    if(password.type == "password"){
        password.type = "text"
        icon.src = "padlock-unlocked-outlined-svgrepo-com.svg"
    }else{
        password.type = "password"
        icon.src = "padlock-svgrepo-com (1).svg"
    }
}

closed.onclick = function(){
    loginPage.innerText = "We out"

}
loginBtn.onclick = function(){
    alert("Success!");
}


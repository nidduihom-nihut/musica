let userDb = [
    {
        username: "tuhin",
        password: "1234",
    },

    {
        username: "tuhmo",
        password: "4567"
    },

];


let username = document.querySelector("#username");
let password = document.querySelector("#password");
let login = document.querySelector("#login");
let status;


login.addEventListener('click', function log(){
    if(cheack() && username.value === "tuhin"){
        window.open('/pages/tuhin.html')
    }else if(cheack() && username.value == "tuhmo"){
        window.open('/pages/tuhmo.html')
    }
    else{
        window.open('false.html')
    }
})












function cheack(){
    for (let i = 0; i < userDb.length; i++) {
        if(userDb[i].username === username.value && userDb[i].password === password.value){
            return true
        }
    }
    return false
}















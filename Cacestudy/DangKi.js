let newAccount = new Account(1, "NguyenNgu", "123", "012345678", "ngu@gmail.colm")
let arrAccount = [newAccount]

function checkAccount(username, password){
    for(let i = 0; i<arrAccount.length; i++){
        if(username === arrAccount[i].username
            && password === arrAccount[i].password){
            return true;
        }
    }
    return false;
}


function login(){
    console.log(arrAccount);
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(username === "" || password === ""){
        alert("Chưa nhập gì!")
    }
    else {
        let kq = checkAccount(username, password);
        if(kq === true){
            alert("Đăng nhập thành công");
        }
        else {
            alert("Đăng nhập thất bại");
        }
    }
}

function register(){
    let id = document.getElementById("info").value;
    let name = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    let acc = new Account(id, name, pass, phone, email);
    arrAccount.push(acc);
    alert("Đăng ký thành công!")
}
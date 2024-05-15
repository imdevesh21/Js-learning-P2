function SetUsername(username) {
    this.username = username
    console.log("called")
}


function createUser(username, email, password) {

    SetUsername.call(this, username) //we have to use this keyword with calling fun
    
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
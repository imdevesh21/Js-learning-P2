class user {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username, email, password){
        super(username); //super keyword automatically inherit the username function
        this.email = email
        this.password = password
        
    }
    addCourse(){
        console.log(`new course is add by ${this.username}`)
    }
}

const chai = new Teacher("chai", " chai@gmail.com", "23");
chai.addCourse();

const tea = new user("masala")
tea.logMe();

console.log(chai instanceof user);
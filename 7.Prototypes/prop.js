class User {
    constructor(username) {
        this.username = username
        // this.password = password
    }
    logMe(){
        console.log(`username ${this.username}`)
        // console.log(`password ${this.password}`)
    }

    // suppose we created an user by using this attach an spacial id to that user when it comes in database
    
   static createId(){
        return `123`
    }
}

const devesh = new User("devesh");
// console.log(devesh.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "iphone@gmail.com");
console.log(iphone.createId());

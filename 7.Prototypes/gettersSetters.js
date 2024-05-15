class user {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }
    get password() { 
        return `${this._password}devesh`
    }
    set password(value){
        this._password = value.toUpperCase();
    }
}

const devesh = new user("devesh@gail.com", "abc");
console.log(devesh.password);
console.log(devesh.email)

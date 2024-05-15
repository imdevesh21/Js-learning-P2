let myName = "devesh           "

// console.log(myName.trim().length);

let myHeros = ["thor", "superman"];

    let heroPower = {
        thor: "hammer",
        superman: "superman",

       getThorPower: function(){
        console.log(`thor power is ${this.thor}`)
       }
    }
Object.prototype.devesh = function(){  //create a new property in top of object hierarchy
    console.log(`devesh is present in all objects`)
}
// heroPower.devesh();
// myHeros.devesh();

Array.prototype.heydevesh = function(){ 
    //create a new property in top of array hierarchy
    console.log(`devesh is present in all arrays`)
}
// myHeros.devesh();
// myName.devesh();
// // heroPower.devesh();
// myHeros.heydevesh()
// heroPower.heydevesh();



// inheritance
const user = {
    username: 'chai',
    email: 'chai@google.com',
}

const Teacher = {
    makeVideo: true 
}

const teachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: `js assignment`,
    fullTime: true,
    __proto__: teachingSupport
}

Teacher__proto__ = user



// modern syntax

// Object.setPrototypeOf(teachingSupport, TAsupport)



let anotherUserName = "chaiaurCode       "            


String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.trim().length}`);
}

anotherUserName.trueLength();
"hitesh".trueLength()
"iceTea".trueLength()
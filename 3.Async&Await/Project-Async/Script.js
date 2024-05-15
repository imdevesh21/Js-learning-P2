const greeting = function() {
    console.log("hello world")
}

const changeText = function(){
    document.querySelector('h1').
    innerHTML = "Best js series"
}
// setInterval(changeText2, 1000);
// setTimeout(greeting,2000);

// const changeText2 = function(){
    //     document.querySelector('h2').
    //     innerHTML = "this is done by devesh"
    // }
    
const changeMe = setTimeout(greeting,2000)

document.querySelector('#stop').addEventListener("click", function(){
    clearTimeout(changeMe);
    console.log("Stopped")
})

// types of events
// time stamp
// default prevented
// target
// to element
// source element
// current target
// client x, client y, screen x, screen y
// altkey,ctrlkey,shiftkey,keycode
/*
in javaScript all events runs sequentially so we use events to performs some intuitive task.
*/


// add event method(modern method)
// owlImage.addEventListener("click",  function(){
    //     alert("You've clicked on a owl image")
    //     console.log(`you have clicked ${owlImage}`)
    // });
    
    // attach event method(previous method)
    // const owlImage = document.querySelector('#owl');
    // document.getElementById('images').addEventListener("click", function(e){
    //     console.log(`clicked inside the ul`);
    // },false)
    // document.getElementById('owl').addEventListener("click", function(e){
    //     console.log("owl clicked");
    //     e.stopPropagation(); // stop propagation
    // },false)


// like event propagation their is also default propagation
// document.getElementById('google').addEventListener("click", function(e){
//     e.preventDefault(); // stop default action
//     e.stopPropagation(); // stop default action
//     console.log(`google clicked`);
// }, false);

// bubble event
    // false was default eventpropogation(tracking of event from inside to outside is called as eventpropogation) mode which follow bubbling approach where we click first inner html and then click second inner html here in above case was it's ul

    //capturing mode we turned that value in true which follows a top to bottom approach and it's depends on our Usecase what we have to use.


// task when we click on images it's get's hide from the page

document.querySelector('#images').addEventListener("click", function(e){
    // console.log(e)
    console.log(e.target.tagName);
    if(e.target.tagName === "IMG"){
        let removeIt = e.target.parentNode;
        console.log(e.target.id);
        removeIt.remove();
    }
    
    // removeIt.remove(); 1st method
    // removeIt.style.display = "none"; // 2nd method
    // removeIt.parentNode.removeChild(removeIt);// 3rd method
    // e.target.parentNode.remove(); // 4th method
},false)








   

// eventpropogation => eventbubbling, eventCapturing;